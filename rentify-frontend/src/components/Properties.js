import React from 'react';

const Property = ({ property }) => {
    return (
        <div>
            <h2>{property.location}</h2>
            <p>Area: {property.area} sq ft</p>
            <p>Bedrooms: {property.bedrooms}</p>
            <p>Bathrooms: {property.bathrooms}</p>
            <p>Amenities: {property.amenities}</p>
            <p>Likes: {property.likes}</p>
        </div>
    );
};

export default Property;