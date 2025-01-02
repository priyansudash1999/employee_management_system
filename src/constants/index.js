const employees = [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Design Homepage",
          "taskDescription": "Create a responsive homepage design.",
          "taskDate": "2024-12-31",
          "category": "Design",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Develop API Endpoints",
          "taskDescription": "Develop the required API endpoints for the app.",
          "taskDate": "2024-12-30",
          "category": "Development",
          "active": true,
          "newTask": true,
          "completed": true,
          "failed": false
        },
        {
          "taskTitle": "Test Features",
          "taskDescription": "Test the new features for bugs and issues.",
          "taskDate": "2024-12-29",
          "category": "Testing",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Write Documentation",
          "taskDescription": "Write documentation for the API.",
          "taskDate": "2024-12-28",
          "category": "Documentation",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Fix Bugs",
          "taskDescription": "Fix the critical bugs found in the application.",
          "taskDate": "2024-12-27",
          "category": "Development",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "taskTitle": "Update Dependencies",
          "taskDescription": "Update the project dependencies to the latest versions.",
          "taskDate": "2024-12-26",
          "category": "Maintenance",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Design Mobile App UI",
          "taskDescription": "Design the UI for the mobile app.",
          "taskDate": "2024-12-25",
          "category": "Design",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Write Unit Tests",
          "taskDescription": "Write unit tests for the new features.",
          "taskDate": "2024-12-24",
          "category": "Testing",
          "active": true,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Create Database Schema",
          "taskDescription": "Design and create the database schema for the app.",
          "taskDate": "2024-12-23",
          "category": "Database",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Refactor Code",
          "taskDescription": "Refactor the existing codebase for better performance.",
          "taskDate": "2024-12-22",
          "category": "Development",
          "active": true,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Create User Authentication",
          "taskDescription": "Develop the user authentication feature.",
          "taskDate": "2024-12-21",
          "category": "Development",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Deploy Application",
          "taskDescription": "Deploy the app to production environment.",
          "taskDate": "2024-12-20",
          "category": "Deployment",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Fix UI Bugs",
          "taskDescription": "Fix UI-related bugs in the application.",
          "taskDate": "2024-12-19",
          "category": "Bug Fixing",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    }
  ];
  
  const admin = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
  ];
  

export {employees, admin}