from django.db import models
from django.utils import timezone

class Conversation(models.Model):

    title = models.CharField(max_length=100)
    start_date = models.DateField()
    
    def __str__(self):
        return self.title + " / " + str(self.start_date)

class Message(models.Model):

    message = models.CharField(max_length=280)
    submission_time = models.DateTimeField(auto_now_add=True)
    conversation = models.ForeignKey(Conversation, related_name='of_conversation', on_delete=models.CASCADE)

    def __str__(self):
        return self.message + " of " + str(self.conversation)

class Thought(models.Model):

    thought = models.CharField(max_length=280)
    submission_time = models.DateTimeField(auto_now_add=True)
    message = models.ForeignKey(Message, related_name='on_message', on_delete=models.CASCADE)

    def __str__(self):
        return self.thoughts + " on " + str(self.message)
