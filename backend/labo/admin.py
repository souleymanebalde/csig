from django.contrib import admin
from .models import Profile, Lab, Equipment, PrestationRequest, Schedule, Result


admin.site.register(Profile)
admin.site.register(Lab)
admin.site.register(Equipment)
admin.site.register(PrestationRequest)
admin.site.register(Schedule)
admin.site.register(Result)