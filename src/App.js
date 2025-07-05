// src/App.js
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Awards from './pages/Awards';
import Contact from './pages/Contact';
import Error from './pages/Error';
import './App.css';

const App = () => {
    useEffect(() => {
        const blockKeys = (e) => {
            if (
                e.key === 'F12' ||
                (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key)) ||
                (e.ctrlKey && e.key === 'U')
            ) {
                e.preventDefault();
            }
        };

        const blockContextMenu = (e) => {
            e.preventDefault();
        };

        document.addEventListener('keydown', blockKeys);
        document.addEventListener('contextmenu', blockContextMenu);

        return () => {
            document.removeEventListener('keydown', blockKeys);
            document.removeEventListener('contextmenu', blockContextMenu);
        };
    }, []);

    return (
        <>
            <Navbar />
            <div className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/awards" element={<Awards />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </div>
            <Footer />
        </>
    );
};

export default App;
