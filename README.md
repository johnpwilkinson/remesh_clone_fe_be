# Welcome to ReMesh : Conversations
This is a challenge to loosely clone the ReMesh Conversations Dashboard and more importantly an exercise in mapping DB relationships. 


# Files

The Repo contains all of the files you need to spin up this project. 
This project is made using ReactJS for the front end and Django as the back end. Django Rest Framework (DRF) sits in the middle and facilitates communication between the front and back end. 

# Instructions
## obtain source code
cd into dir you want to clone to and git clone the link from the repo, then cd into the dir that is created

    cd dir
    git clone https://github.com/johnpwilkinson/remesh_clone_fe_be.git
    cd remesh_clone_fe_be
## back-end
I have used the Poetry dependency and package manager for Python / Django ([https://python-poetry.org/docs/#installation](https://python-poetry.org/docs/#installation))

To install poetry use this command in your terminal:

     curl -sSL [https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py](https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py) | python -

to launch shell, while still inside the cloned dir: 

    -poetry install (to install dependencies) -poetry shell 

Once shell is spawned, create admin account by running : 

    -python manage.py createsuperuser 

Then, spin up backend server by running: 

    -python manage.py runserver
  
Now the back end Django server is running locally on localhost:8000. You can use the superuser account you created to access the admin panel at : `localhost:8000/admin`
and access the RESTful API at : `localhost:8000/api`

## front-end

Launch a new terminal window and cd into the `remesh_clone_fe_be` folder and from there cd into the `/remesh_clone_de` dir.

run the following to install dependencies and spin up the front end ReactJS local server.

    npm i
    npm start

this will launch a browser to `localhost:3000` where you can interact with the front end dashboard. 

## Functionality

On the front end dashboard, if there are no Conversations, click the 'New Conversation' button and give the title a Name and start date Click on the title of a conversation to load that conversations 'Messages', if there are no messages for a conversation, feel free to create a message for a conversation by clicking on the 'New Message' button... and similiarly for the thoughts, click the title of a message to see all of that messages thoughts, and if there are no thoughts for that message, just create one by clicking on the 'New Thought' button.

You can search all convos by using the search bar in the top right corner of the screen
