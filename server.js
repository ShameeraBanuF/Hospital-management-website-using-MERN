const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const patientsRouter = require('./routes/patients.js');
const doctorsRouter = require('./routes/doctors.js');
const appointmentsRouter = require('./routes/appointments.js');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(
    'mongodb://localhost:27017/hospital',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

app.use('/patients', patientsRouter);
app.use('/doctors', doctorsRouter);
app.use('/appointments', appointmentsRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
