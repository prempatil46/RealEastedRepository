
import React, { useEffect, useState } from "react";
import api from "../api";

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await api.get('/properties/all', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setProperties(response.data);
        console.log("Fetched properties:", response.data);
      } catch (error) {
        console.error("Fetch failed:", error);
        alert('Could not load properties');
      }
    };

    fetchProperties();
  }, []);

  return (
    <div>
      <h2>All Properties</h2>
      {properties.map(property => (
        <div key={property.id} className="property-card">
          <h3>{property.title}</h3>
          <p>{property.description}</p>
          <p><strong>Price:</strong> ₹{property.price}</p>
          <p><strong>Location:</strong> {property.location}</p>
          {property.imageUrl && (
            <img
              src={property.imageUrl}
              alt={property.title}
              style={{ width: '200px' }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
