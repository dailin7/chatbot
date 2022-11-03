# OSU Chatbot

### Instructions
We use Conda as our environment manager for python:

1. Switch to a python 3.8.13 environment with
```
conda activate ENVNAME
```
   
2. Start the chatbot server by switching to the `project` folder and running 
```
rasa run -m models --enable-api --cors "*" --debug
```

3. Install client dependencies by switching to the `client` folder and running `npm install`

4. Start the client server with `npm start`


Before run rasa, need to run
```
rasa run actions
```
