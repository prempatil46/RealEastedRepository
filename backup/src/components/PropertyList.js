import React,{useEffect, useState} from "react";
import api from "../api";

const PropertyList = () => {

    const [properties ,setProperties] = useState([]);
    
    useEffect(() => {

        const fetchProperties = async () => {
            const response = await api.get('/properties');
            setProperties(response.data);
        };
        fetchProperties();
    }, []);

    return ( 
        <div>
            {properties.map(property => (
                <div key={property._id} className="property-card">
                    <h2>{property.title}</h2>
                    <p>{property.description}</p>
                    <p>{property.price}</p>
                </div>
            ))}
        </div>
    );
};

export default PropertyList;
       
