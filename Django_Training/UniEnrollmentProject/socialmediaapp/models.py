from django.db import models

# Create your models here.
class UserProfile(models.Model):
    id = models.AutoField(primary_key=True)
    full_name = models.CharField(max_length=100)
    address = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)
    profile_photo = models.URLField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Tags(models.Model):
    name = models.CharField(max_length=50, unique=True)

class Posts(models.Model):
    id = models.AutoField(primary_key=True)
    caption = models.TextField()
    url = models.URLField() #For photos and videos
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name='posts')
    tags = models.ManyToManyField(Tags, related_name='posts')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Share(models.Model):
    id = models.AutoField(primary_key=True)
    post = models.ForeignKey(Posts, on_delete=models.CASCADE, related_name='shares')
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name='shared_posts')
    created_at = models.DateTimeField(auto_now_add=True)

class Likes(models.Model):
    id = models.AutoField(primary_key=True)
    post = models.ForeignKey(Posts, on_delete=models.CASCADE, related_name='likes')
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name='liked_posts')
    created_at = models.DateTimeField(auto_now_add=True)

class Comments(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name='comments')
    post = models.ForeignKey(Posts, on_delete=models.CASCADE, related_name='comments')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Notification(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name='notifications')
    photo = models.URLField()
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

class Messages(models.Model):
    id = models.AutoField(primary_key=True)
    message_content = models.TextField()
    sender = models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name='sent_messages')
    receiver = models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name='received_messages')
    created_at = models.DateTimeField(auto_now_add=True)
