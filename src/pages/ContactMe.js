
/**
 * AboutMe.js
 * Student's Name: Kalid Haider
 * StudentID: 301383513
 * Date: 2024-05-31
 */

import React, { useState } from 'react';
import './ContactMe.css';

const ContactMe = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        contactNumber: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to server or display a message
        alert('Message sent!');
    };

    return (
        <div className="contact-me">
            <h1>Contact Me</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                </label>
                <label>
                    Last Name:
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                </label>
                <label>
                    Contact Number:
                    <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />
                </label>
                <label>
                    Email Address:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>
                <label>
                    Message:
                    <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
                </label>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default ContactMe;
