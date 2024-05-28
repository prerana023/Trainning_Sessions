from django.contrib import admin
from .models import Department, UniAccount, Student
# Register your models here.

admin.site.register(Department)
admin.site.register(UniAccount)
admin.site.register(Student)
