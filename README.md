This is a clone of the reMesh Conversation Dashboard.

I used Python Django for the back end and API + ReactJS as the front end. 

Clone this repo to your machine and cd in the folder.

I have used the Poetry dependency and package manager for Python / Django (https://python-poetry.org/docs/#installation)

To install poetry use this command in your terminal:
curl -sSL https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py | python -

Once Poetry is installed on your machine, while still inside the cloned dir:
-poetry install (to install dependencies)
-poetry shell (to launch shell)

Once shell is spawned:
-python manage.py createsuperuser (to create admin account)
-python manage.py runserver (to spin up the backend server)

... then cd into the /remesh_clone_fe dir:
-npm install (to install node modules/dependencies) for the front end
-npm start (to spin up front end server)

If not launched automatically, you can access the 
Backend admin console @ localhost:8000/admin
RESTful API @ localhost:8000/api
ReMesh Dashboard @ localhost:3000

On the front end dashboard, if there are no Conversations, click the 'New Conversation' button and give the title a Name and start date
Click on the title of a conversation to load that conversations 'Messages', if there are no messages for a conversation, feel free to 
create a message for a conversation by clicking on the 'New Message' button... and similiarly for the thoughts, click the title of a
message to see all of that messages thoughts, and if there are no thoughts for that message, just create one by clicking on the 'New Thought' 
button. 

You can search all convos by using the search bar in the top right corner of the screen

