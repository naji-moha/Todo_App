# **Week 5 Assignment: React To-Do App with Firebase Authentication**

## **Project Overview**

This project is a React-based To-Do List App with user authentication through Firebase. Users can sign up, log in, and manage tasks efficiently.

### **Key Features**

* **User Authentication**: Firebase authentication for user sign-up and login.  
* **Task Management**: Add, edit, and delete tasks with local storage support.  
* **Persistent Data**: Tasks remain saved even after a page refresh using **Local Storage**.  
* **Responsive Design**: Optimized for different screen sizes.  
* **Routing**: Implemented with React Router for navigation between login, signup, and to-do pages.

## **Setup Instructions**

To run this project locally, follow these steps:

### **Prerequisites:**

Ensure you have the following installed:

* [Node.js](https://nodejs.org/) (LTS version recommended)  
* npm or yarn  
* A Firebase project set up

### **Installation Steps:**

* **Clone the repository**:  
  * git clone \<repository-url\>  
  * cd \<repository-folder\>  
* **Install dependencies**:  
  * npm install

**Set up Firebase:**

* Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).  
  * Enable **Authentication** (Email/Password method).  
  * Copy your Firebase config and replace the placeholders in firebase.js:

    const firebaseConfig \= {

      apiKey: "your-api-key",

      authDomain: "your-auth-domain",

      projectId: "your-project-id",

      storageBucket: "your-storage-bucket",

      messagingSenderId: "your-messaging-sender-id",

      appId: "your-app-id"

};

**Run the application**:

* npm run dev


**Key Learnings:**

* React Router: Learned how to handle navigation and redirects.  
* Firebase Authentication: Implemented user sign-up and login functionality.  
* Local Storage: Used local storage to persist tasks even after a page reload.  
* State Management: Developed a stronger grasp of useState and useEffect hooks.


**Technical Challenges:**

* Authentication Redirection: Redirecting users correctly after signing in or signing up.  
* Persistent State: Handling local storage updates in a way that was efficient and didn't affect performance.  
* Error Handling: Handling Firebase authentication errors, for example, invalid passwords or duplicate accounts.  
* Component Structure: Organizing React components in a proper structure for reusability and maintainability.

## **Conclusion**

The assignment helped to improve hands-on skills with React, Firebase authentication, and effective managing state.  The project is now fully functional, and feedback is welcome\!

