Todo App

A simple full-stack Todo app using React, Node.js, Sequelize, and Swagger.

Stack
- Frontend: React
- Backend: Express + Sequelize
- DB: MySQL or SQLite
- Docs: Swagger

How to Run

Backend

bash
cd server
npm install
npm start

Frontend

bash
CopyEdit
cd client
npm install
npm start
App: http://localhost:3000


API Docs: http://localhost:5000/api-docs


✅ Features
Add, edit, and delete todos


Connected to the database


Swagger API documentation




**API DESIGN**

| Endpoint | Method | API endpoint description | Body request | Body response |
| :---- | :---- | :---- | :---- | :---- |
| /api/task/ | POST | Add a new task | json { "task": "Buy groceries", "time": "2025-05-05T10:00:00Z" } | json { "id": 1, "task": "Buy groceries", "time": "2025-05-05T10:00:00Z", "completed": false } |
| /api/todos/:id | DELETE | Deletes a task by its id | none | json { "message": "Task deleted successfully." } |
| /api/todos/id | PUT | Updates the tasks | json { "task": "Buy groceries and drinks", "time": "2025-05-06T12:00:00Z", "completed": true } | json { "id": 1, "task": "Buy groceries and drinks", "time": "2025-05-06T12:00:00Z", "completed": true } |
| /api/todos/:id | GET | Get  a todo by id | none | json { "id": 1, "task": "Buy groceries", "time": "2025-05-05T10:00:00Z", "completed": false } |

