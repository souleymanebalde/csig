from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone


class Profile(models.Model):
    ROLE_CHOICES = [
        ('demandeur', 'Demandeur'),
        ('technician', 'Technicien'),
        ('responsible', 'Responsable'),
        ('dg', 'Directeur General'),
    ]
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='demandeur')


    def __str__(self):
        return f"{self.user.username} ({self.role})"


class Lab(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(blank=True)


    def __str__(self):
        return self.name


class Equipment(models.Model):
    lab = models.ForeignKey(Lab, on_delete=models.CASCADE, related_name='equipments')
    name = models.CharField(max_length=200)
    quantity = models.IntegerField(default=1)


    def __str__(self):
        return f"{self.name} ({self.lab.name})"


class PrestationRequest(models.Model):
    STATUS = [
    ('submitted', 'Soumis'),
    ('evaluated', 'Évalué'),
    ('validated', 'Validé'),
    ('planned', 'Planifié'),
    ('in_progress', 'En cours'),
    ('done', 'Terminé'),
    ('rejected', 'Rejeté'),
    ]
    requester_name = models.CharField(max_length=200)
    requester_email = models.EmailField()
    title = models.CharField(max_length=300)
    domain = models.CharField(max_length=200, blank=True)
    description = models.TextField()
    equipment_list = models.JSONField(default=list, blank=True) # list of strings
    methodology = models.TextField(blank=True)
    analysis_types = models.CharField(max_length=300, blank=True)
    status = models.CharField(max_length=20, choices=STATUS, default='submitted')
    created_at = models.DateTimeField(default=timezone.now)


    # planning fields
    planned_start = models.DateTimeField(null=True, blank=True)
    planned_end = models.DateTimeField(null=True, blank=True)


    def __str__(self):
        return f"{self.title} ({self.requester_name})"


class Schedule(models.Model):
    request = models.OneToOneField(PrestationRequest, on_delete=models.CASCADE, related_name='schedule')
    scheduled_start = models.DateTimeField()
    scheduled_end = models.DateTimeField()
    assigned_to = models.CharField(max_length=200, blank=True) # lab tech name


class Result(models.Model):
    request = models.OneToOneField(PrestationRequest, on_delete=models.CASCADE, related_name='result')
    report_text = models.TextField(blank=True)
    uploaded_at = models.DateTimeField(default=timezone.now)