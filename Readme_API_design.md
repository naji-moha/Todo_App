**API DESIGN**

| Endpoint | Method | API endpoint description | Body request | Body response |
| :---- | :---- | :---- | :---- | :---- |
| /api/task/ | POST | Add a new task | json { "task": "Buy groceries", "time": "2025-05-05T10:00:00Z" } | json { "id": 1, "task": "Buy groceries", "time": "2025-05-05T10:00:00Z", "completed": false } |
| /api/todos/:id | DELETE | Deletes a task by its id | none | json { "message": "Task deleted successfully." } |
| /api/todos/id | PUT | Updates the tasks | json { "task": "Buy groceries and drinks", "time": "2025-05-06T12:00:00Z", "completed": true } | json { "id": 1, "task": "Buy groceries and drinks", "time": "2025-05-06T12:00:00Z", "completed": true } |
| /api/todos/:id | GET | Get  a todo by id | none | json { "id": 1, "task": "Buy groceries", "time": "2025-05-05T10:00:00Z", "completed": false } |

