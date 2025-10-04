from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Lab, Equipment, PrestationRequest, Schedule
from .serializers import LabSerializer, EquipmentSerializer, PrestationRequestSerializer, ScheduleSerializer
from django.utils import timezone
from datetime import timedelta


class LabViewSet(viewsets.ModelViewSet):
    queryset = Lab.objects.all()
    serializer_class = LabSerializer


class EquipmentViewSet(viewsets.ModelViewSet):
    queryset = Equipment.objects.all()
    serializer_class = EquipmentSerializer


class PrestationRequestViewSet(viewsets.ModelViewSet):
    queryset = PrestationRequest.objects.all().order_by('-created_at')
    serializer_class = PrestationRequestSerializer


    @action(detail=True, methods=['post'])
    def evaluate(self, request, pk=None):
        """Évaluer l'adéquation demande <-> inventaire simple"""
        pr = self.get_object()
        requested = pr.equipment_list or []
        all_equip = Equipment.objects.all()
        all_names = [e.name.lower() for e in all_equip]
        matched = []
        missing = []
        for item in requested:
            name = item.lower()
            if any(name in en for en in all_names):
                matched.append(item)
            else:
                missing.append(item)
        score = int(100 * len(matched) / max(1, len(requested)))
        pr.status = 'evaluated'
        pr.save()
        return Response({'score': score, 'matched': matched, 'missing': missing})


    @action(detail=True, methods=['post'])
    def validate(self, request, pk=None):
        pr = self.get_object()
        pr.status = 'validated'
        pr.save()
        return Response({'status': 'validated'})


    @action(detail=True, methods=['post'])
    def plan(self, request, pk=None):
        """Proposer un créneau simple (prototype) et créer un Schedule"""
        pr = self.get_object()
        # prototype simple : planifier au prochain jour ouvré à 09:00
        start = timezone.now() + timedelta(days=1)
        start = start.replace(hour=9, minute=0, second=0, microsecond=0)
        end = start + timedelta(hours=2) # durée fixe prototype
        sch = Schedule.objects.create(request=pr, scheduled_start=start, scheduled_end=end, assigned_to='Technicien X')
        pr.status = 'planned'
        pr.planned_start = start
        pr.planned_end = end
        pr.save()
        return Response({'scheduled_start': start, 'scheduled_end': end, 'assigned_to': sch.assigned_to})


class ScheduleViewSet(viewsets.ModelViewSet):
    queryset = Schedule.objects.all()
    serializer_class = ScheduleSerializer