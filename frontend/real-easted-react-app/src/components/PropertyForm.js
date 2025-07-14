  //  import React, { useState } from 'react';
  //  import api from '../api';
   
   
  //  const PropertyForm = () => {
  //    const [title, setTitle] = useState('');
  //    const [description, setDescription] = useState('');
  //    const [location, setLocation] = useState('');
  //    const [price, setPrice] = useState('');
  //    const [imageUrl, setImageUrl] = useState('');
     
  //    const handleAddProperty = async (e) => {  
  //       e.preventDefault();
  //      const token = localStorage.getItem('token');
  //      try {
  //        await api.post('/properties', { title, description, location, price, imageUrl, owner_id: 1 }, {
  //          headers: { Authorization: token }
  //        });
  //        alert('Property added successfully');
  //      } catch (error) {
  //        console.error(error);
  //        alert('Error adding property');
  //      }
  //    };


  //    return (
  //      <form onSubmit={handleAddProperty}>
  //        <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} required />
  //        <textarea placeholder="Description" onChange={(e) => setDescription(e.target.value)} required />
  //        <input type="text" placeholder="Location" onChange={(e) => setLocation(e.target.value)} required />
  //        <input type="number" placeholder="Price" onChange={(e) => setPrice(e.target.value)} required />
  //        <input type="text" placeholder="Image URL" onChange={(e) => setImageUrl(e.target.value)} />
  //        <button type="submit">Add Property</button>
  //      </form>
  //    );
  //  };


  //   // This component allows users to add a new property.
  //  export default PropertyForm;


  import React, { useState } from 'react';
import api from '../api';

const PropertyForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleAddProperty = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
    await api.post('/properties/add', { title, description, location, price, imageUrl }, {
      headers: { Authorization: `Bearer ${token}` }
    });
      alert('Property added successfully');
    } catch (error) {
      console.error(error);
      alert('Error adding property');
    }
  };

  return (
    <div>
      <h2>Add New Property</h2>
      <form onSubmit={handleAddProperty}>
        <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} required />
        <textarea placeholder="Description" onChange={(e) => setDescription(e.target.value)} required />
        <input type="text" placeholder="Location" onChange={(e) => setLocation(e.target.value)} required />
        <input type="number" placeholder="Price" onChange={(e) => setPrice(e.target.value)} required />
        <input type="text" placeholder="Image URL" onChange={(e) => setImageUrl(e.target.value)} />
        <button type="submit">Add Property</button>
      </form>
    </div>
  );
};

export default PropertyForm;
