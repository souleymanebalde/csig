from rest_framework import serializers
from .models import Lab, Equipment, PrestationRequest, Schedule, Result


class EquipmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Equipment
        fields = '__all__'


class LabSerializer(serializers.ModelSerializer):
    equipments = EquipmentSerializer(many=True, read_only=True)
    class Meta:
        model = Lab
        fields = '__all__'


class PrestationRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = PrestationRequest
        fields = '__all__'


class ScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Schedule
        fields = '__all__'


class ResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = Result
        fields = '__all__'