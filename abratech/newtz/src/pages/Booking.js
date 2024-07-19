import axios from 'axios';
import React, { useState } from 'react';
import './Booking.css'

function Booking() {
    const [postData, setPostData] = useState({
        name: '',
        email: '',
        phone: '',
        tour: '',
        date: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPostData({ ...postData, [name]: value });
    };

    const handleAdd = (e) => {
        e.preventDefault();
        const newCustomer = {
            customerName: postData.name,
            customerEmail: postData.email,
            phoneNumber: postData.phone,
            tour: postData.tour,
            date: postData.date,
        };

        axios.post('http://localhost:8080/api/v1/customer', newCustomer)
            .then(response => {
                console.log('Customer added successfully:', response.data);
                // Optionally, clear the form or update state after successful post
                setPostData({
                    name: '',
                    email: '',
                    phone: '',
                    tour: '',
                    date: '',
                });
            })
            .catch(error => {
                console.error('Error when posting customer:', error);
            });
    };

    return (
        <div className="booking-form-container">
            <form className="booking-form" onSubmit={handleAdd}>
                <h2>Book Your Tour Now</h2>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        value={postData.name}
                        onChange={handleInputChange}
                        type="text"
                        id="name"
                        name="name"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        value={postData.email}
                        onChange={handleInputChange}
                        type="email"
                        id="email"
                        name="email"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        value={postData.phone}
                        onChange={handleInputChange}
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="tour">Select Tour</label>
                    <select
                        value={postData.tour}
                        onChange={handleInputChange}
                        id="tour"
                        name="tour"
                        required
                    >
                        <option value="">Select a Tour</option>
                        <option value="The house of wonder">The house of wonder</option>
                        <option value="Nungwi">Nungwi</option>
                        <option value="Jozani forest">Jozani forest</option>
                        <option value="Ngorongoro crater">Ngorongoro crater</option>
                        <option value="Waterfall">Waterfall</option>
                        <option value="Rock island">Rock island</option>
                        <option value="Kilimanjaro mountain">Kilimanjaro mountain</option>
                        <option value="Coral reef">Coral reef</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input
                        value={postData.date}
                        onChange={handleInputChange}
                        type="date"
                        id="date"
                        name="date"
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Booking;
