from django.db import models


class Author(models.Model):
 first_name = models.CharField(max_length=100)
 last_name = models.CharField(max_length=100)
 birthdate = models.DateField()
 nationality = models.CharField(max_length=100)
 awards = models.IntegerField(default=0)

 def __str__(self):
   return f"{self.first_name} {self.last_name}"

class Book(models.Model):
 title = models.CharField(max_length=200)
 author = models.ForeignKey(Author, on_delete=models.CASCADE)
 publication_date = models.DateField()
 ISBN = models.CharField(max_length=13)
 pages = models.IntegerField()
 genre = models.CharField(max_length=100)
 def __str__(self):
   return self.title

