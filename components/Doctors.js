import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DoctorCard from './DoctorCard.js';
import './Doctors.css';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    const [newDoctor, setNewDoctor] = useState({
        name: '',
        specialty: ''
    });
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [isEditMode, setIsEditMode] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:3000/doctors')
            .then(response => setDoctors(response.data))
            .catch(error => console.error('Error fetching doctors:', error));
    }, []);

    const handleAddDoctor = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/doctors/add', newDoctor)
            .then(response => {
                console.log("Added doctor:", response.data);
                setDoctors([...doctors, response.data]);
                setNewDoctor({
                    name: '',
                    specialty: ''
                });
            })
            .catch(error => console.error('Error adding doctor:', error));
    };

    const handleUpdateDoctor = (id, e) => {
        e.preventDefault();
        axios.post(`http://localhost:3000/doctors/update/${id}`, selectedDoctor)
            .then(response => {
                const updatedDoctor = {...selectedDoctor,_id:id};
                console.log('Updated doctor',updatedDoctor);
                setDoctors(doctors.map(doctor => (doctor._id === id ? updatedDoctor : doctor)));
                setSelectedDoctor(null);
                setIsEditMode(false); // Switch back to Add mode
            })
            .catch(error => console.error('Error updating doctor:', error));
    };

    const handleDeleteDoctor = (id) => {
        axios.delete(`http://localhost:3000/doctors/delete/${id}`)
            .then(response => {
                console.log('Deleted doctor:', response.data);
                setDoctors(doctors.filter(doctor => doctor._id !== id));
            })
            .catch(error => console.error('Error deleting doctor:', error));
    };

    const handleEditDoctor = (doctor) => {
        setSelectedDoctor(doctor);
        setIsEditMode(true); // Switch to Edit mode
    };

    return (
        <div className='main-doc-container'>
            <div className='form-sections'>
                <h4>{isEditMode ? 'Edit Doctor' : 'Add New Doctor'}</h4>
                <form onSubmit={isEditMode ? (e) => handleUpdateDoctor(selectedDoctor._id, e) : handleAddDoctor}>
                    <label>Name: </label>
                    <input
                        type='text'
                        value={isEditMode ? selectedDoctor.name : newDoctor.name}
                        onChange={(e) => isEditMode ? setSelectedDoctor({ ...selectedDoctor, name: e.target.value }) : setNewDoctor({ ...newDoctor, name: e.target.value })}
                    />
                    <br />
                    <label>Specialty: </label>
                    <input
                        type='text'
                        value={isEditMode ? selectedDoctor.specialty : newDoctor.specialty}
                        onChange={(e) => isEditMode ? setSelectedDoctor({ ...selectedDoctor, specialty: e.target.value }) : setNewDoctor({ ...newDoctor, specialty: e.target.value })}
                    />
                    <br />
                    <button type='submit'>{isEditMode ? 'Update Doctor' : 'Add Doctor'}</button>
                </form>
            </div>
            <div className='doctors-section'>
                <h3>Doctors ({doctors.length})</h3>
                <div className='doctor-list'>
                    {doctors.map(doctor => (
                        <DoctorCard
                            key={doctor._id}
                            doctor={doctor}
                            onEdit={handleEditDoctor}
                            onDelete={handleDeleteDoctor}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Doctors;
