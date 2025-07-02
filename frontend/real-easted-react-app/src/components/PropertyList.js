// import React,{useEffect, useState} from "react";
// import api from "../api";

// const PropertyList = () => {

//     const [properties ,setProperties] = useState([]);
    
//     useEffect(() => {

//         const fetchProperties = async () => {
//             const response = await api.get('/properties');
//             setProperties(response.data);
//         };
//         fetchProperties();
//     }, []);

//     return ( 
//         <div>
//             {properties.map(property => (
//                 <div key={property._id} className="property-card">
//                     <h2>{property.title}</h2>
//                     <p>{property.description}</p>
//                     <p>{property.price}</p>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default PropertyList;
       
import React, { useEffect, useState } from "react";
import api from "../api";

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await api.get('/properties');
        setProperties(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProperties();
  }, []);

  return (
    <div>
      <h2>All Properties</h2>
      {properties.map(property => (
        <div key={property._id} className="property-card">
          <h3>{property.title}</h3>
          <p>{property.description}</p>
          <p><strong>Price:</strong> ₹{property.price}</p>
          <p><strong>Location:</strong> {property.location}</p>
          {property.imageUrl && <img src={property.imageUrl} alt={property.title} style={{ width: '200px' }} />}
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
