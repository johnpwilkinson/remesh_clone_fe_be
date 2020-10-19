from rest_framework import serializers
from remesh_core.models import *

class ConversationSerializer(serializers.ModelSerializer):

    class Meta:
        model= Conversation
        fields = [
            'id',
            'title',
            'start_date'
        ]

class MessageSerializer(serializers.ModelSerializer):
    # conversation = serializers.StringRelatedField()

    class Meta:
        model= Message
        fields = [
            'id',
            'message',
            'submission_time',
            'conversation'
        ]

class ThoughtSerializer(serializers.ModelSerializer):
    # message = serializers.StringRelatedField()

    class Meta:
        model= Thought
        fields = [
            'id',
            'thought',
            'submission_time',
            'message'
        ]