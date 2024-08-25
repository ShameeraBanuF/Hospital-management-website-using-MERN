Steps to Setup Backend with Node and Express:
Step 1: Creating express app:

npm init -y

Step 2: Installing the required packages

npm install express mongoose body-parser

The updated dependencies in package.json file for backend will look like:

"dependencies": {
    "body-parser": "^1.20.2",
    "express": "^4.18.2",
    "mongoose": "^8.0.0",
}
Approach to create backend:
Create MongoDB Models:
Design MongoDB models for `Appointment`, `Doctor`, and `Patient` in separate files (`Appointment.js`, `Doctor.js`, `Patient.js`).
Set Up Express Routes:
Create separate routes for appointments, doctors, and patients (`appointments.js`, `doctors.js`, `patients.js`).
Implement CRUD (Create, Read, Update, Delete) operations for each resource.
Connect to MongoDB:
In your main `server.js`, connect to MongoDB using Mongoose.
Don’t forget to handle connection errors.
 Below is the code for the all the above files named above:

 Steps to Setup Frontend with React
Step 1: Create React App:

npx create-react-app myapp
Step 2: Switch to the project directory:

cd myapp
Step 3: Installing the required packages:

npm install axios react-router-dom

The updated dependencies in package.json for frontend will look like:

"dependencies": {
    "axios": "^1.5.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.17.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
}
Approach to create Frontend:
Create Components for `Appointments`, `Doctors`, `Patients`, `AppointmentCard`, `DoctorCard`, and `PatientCard` within `src/components`
Create a main `App` component that utilizes React Router for navigation.
Design styles for each component to enhance the visual appeal.
 Below is the code for the all the above files named above

 Steps to run the App:

To run server.js:

node server.js
To run frontend:

npm start
