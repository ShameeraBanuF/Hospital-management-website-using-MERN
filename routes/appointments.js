const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');

// Get all appointments
router.get('/', (req, res) => {
    Appointment.find()
        .then(appointments => res.json(appointments))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Add new appointment
router.post('/add', (req, res) => {
    const { patientName, doctorName, date } = req.body;
    const newAppointment = new Appointment({ patientName, doctorName, date });

    newAppointment.save()
        .then(savedAppointment => res.json(savedAppointment))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Update appointment data
router.post('/update/:id', (req, res) => {
    Appointment.findById(req.params.id)
        .then(appointment => {
            if (!appointment) return res.status(404).json('Error: Appointment not found');
            
            appointment.patientName = req.body.patientName;
            appointment.doctorName = req.body.doctorName;
            appointment.date = req.body.date;

            appointment.save()
                .then(() => res.json('Appointment updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

// Delete appointment
router.delete('/delete/:id', (req, res) => {
    Appointment.findByIdAndDelete(req.params.id)
        .then(() => res.json('Appointment deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
