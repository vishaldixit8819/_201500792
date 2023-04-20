// Import the required modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of the Express app
const app = express();

// Define the middleware for parsing JSON request bodies
app.use(bodyParser.json());

// Define the API routes
app.get('/train-schedule', (req, res) => {
  // Logic to fetch and return the train schedule data
  // ...
  res.json(trainScheduleData);
});

app.post('/train-schedule', (req, res) => {
  // Logic to add a new train schedule to the API
  
  res.json(newTrainScheduleData);
});

// Start the Express app
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});