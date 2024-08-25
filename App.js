import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import Appointments from './components/Appointments.js';
import Doctors from './components/Doctors.js';
import Patients from './components/Patients.js';
import './App.css';

const App = () => {
    const isLinkActive = (path) => window.location.pathname === path;

    return (
        <Router>
            <div className="container">
                <h1 style={{ color: "green" }}>
                    Shameera - Hospital Management App
                </h1>
                <nav>
                    <ul>
                        <li className={isLinkActive('/appointments') ? 'active' : ''}>
                            <Link to="/appointments">Appointments</Link>
                        </li>
                        <li className={isLinkActive('/doctors') ? 'active' : ''}>
                            <Link to="/doctors">Doctors</Link>
                        </li>
                        <li className={isLinkActive('/patients') ? 'active' : ''}>
                            <Link to="/patients">Patients</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/appointments" element={<Appointments />} />
                    <Route path="/" element={<Appointments />} />
                    <Route path="/doctors" element={<Doctors />} />
                    <Route path="/patients" element={<Patients />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
