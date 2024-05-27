import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PropertyList = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/properties', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setProperties(response.data);
            } catch (error) {
                console.error('Failed to fetch properties', error);
                alert('Failed to fetch properties');
            }
        };

        fetchProperties();
    }, []);

    return (
        <div>
            <h1>Properties</h1>
            <ul>
                {properties.map((property) => (
                    <li key={property.id}>
                        Location: {property.location}, Area: {property.area} sq ft, Bedrooms: {property.bedrooms}, Bathrooms: {property.bathrooms}, Amenities: {property.amenities}, Likes: {property.likes}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PropertyList;