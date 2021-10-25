## PSO Lecture 07 - React State & Hooks

1. Begin by creating a new React app
2. Go to empty folder, open VS Code terminal
    + npx create-react-app pso-07
    + cd pso-07
3. In App.js, clear out existing code except for the div and add a function - login(username,password)
4. Create a components folder
5. Add a login form component - LoginForm.js
6. Import this login form to App.js, and add it between the div tags, passing the login function as a prop

In LoginForm.js

7. Create a login form with the basic stuff - username, password, login button
8. Import the useState hook and add state to the login form
9. Create state variables to hold the username and password
10. Create functions to handle changes to the input fields
11. Connect these functions to the respective input fields
12. Create a handleSubmit() function and connect it to the form submit event
13. Prevent the default action and instead use props to call the login function present in App.js
14. In App.js, console log the username and password
