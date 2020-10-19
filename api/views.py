from django.shortcuts import render
from rest_framework import viewsets, generics
# Create your views here.
from .serializers import *
from remesh_core.models import *
from rest_framework.decorators import action
from rest_framework.response import Response


class ConversationsViewSet(viewsets.ModelViewSet):
    queryset = Conversation.objects.all()
    serializer_class = ConversationSerializer
   

class MessagesViewSet(viewsets.ModelViewSet):
    serializer_class = MessageSerializer

    def get_queryset(self):
        messages = Message.objects.all()
        return messages

    def retrieve(self, request, *args, **kwargs):
        params = kwargs
        print(params)
        messages = Message.objects.filter(conversation=params['pk'])
        serializer = MessageSerializer(messages, many=True)
        return Response(serializer.data)

    # def create(self, request, *args, **kwargs):


class ThoughtsViewSet(viewsets.ModelViewSet):
    queryset = Thought.objects.all()
    serializer_class = ThoughtSerializer

    def retrieve(self, request, *args, **kwargs):
        params = kwargs
        print(params)
        messages = Thought.objects.filter(message=params['pk'])
        serializer = ThoughtSerializer(messages, many=True)
        return Response(serializer.data)


