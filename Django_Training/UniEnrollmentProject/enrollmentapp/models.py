from django.db import models
from datetime import date

# Create your models here.
class Department(models.Model):
    name = models.CharField(max_length=255)

class Student(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    address = models.TextField()
    dob = models.DateField()
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    email = models.EmailField(max_length=255)

class UniAccount(models.Model):
    username = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    student = models.OneToOneField(Student, on_delete=models.CASCADE)

# class Course(models.Model):
#     name = models.CharField(max_length=255)
#     department = models.CharField(max_length=255)

# class Professor(models.Model):
#     name = models.CharField(max_length=255)
#     department = models.CharField(max_length=255)

# class Enrollment(models.Model):
#     student = models.ForeignKey(Student, on_delete=models.CASCADE)
#     course = models.ForeignKey(Course, on_delete=models.CASCADE)
#     grade = models.CharField(max_length=2)

# class CoursesProfessors(models.Model):
#     course = models.ForeignKey(Course, on_delete=models.CASCADE)
#     professor = models.ForeignKey(Professor, on_delete=models.CASCADE)

