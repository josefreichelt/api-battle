# Api-Battle
A battle between languages to see how easy/nice it is to write a simple rest api.  
A simple little fun project to test out new things.

## 🔑Key feature requirements
- Connects to local SQlite database.
- POST (/user) adds new user to database
- GET (/user:id) finds and returns user from database
- PUT (/user:id) finds user and updates its data
- DELETE (/user:id) finds and deletes user from database
- GET (/users) gets TOP 10 users with highest score
- Websockets (/chat) a simple chat


### Node
- [ ] Create user
- [ ] Get user
- [ ] Update user
- [ ] Delete user
- [ ] Get users
- [ ] Websockets chat

### Go
- [ ] Create user
- [ ] Get user
- [ ] Update user
- [ ] Delete user
- [ ] Get users
- [ ] Websockets chat

### Rust
- [ ] Create user
- [ ] Get user
- [ ] Update user
- [ ] Delete user
- [ ] Get users
- [ ] Websockets chat

Optional next languages:
- Python
- C#
- PHP
- Kotlin



## Starting the client
- ``cd`` into the /client folder
- ``npm i`` to install a http-server for serving the client
- ``npm start`` to start serving the client on ``http://127.0.0.1:3000``