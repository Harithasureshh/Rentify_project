import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
        role: 'buyer'
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/register', formData);
            alert('Registration successful');
            window.location.href = '/login';
        } catch (error) {
            console.error('Registration failed', error);
            alert('Registration failed');
        }
    };

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
                <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="text" name="phoneNumber" placeholder="Phone Number" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                <select name="role" onChange={handleChange}>
                    <option value="buyer">Buyer</option>
                    <option value="seller">Seller</option>
                </select>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;