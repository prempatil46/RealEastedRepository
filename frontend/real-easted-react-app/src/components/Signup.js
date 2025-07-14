// import React, {useState} from 'react';
// import api from '../api';

// const Signup = () => {

//     const [username ,setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSingnup = async (e) => {
//         e.preventDefault();

//         try{
//             await api.post('/auth/signup',{username, password});
//             alert('User Created Successfully'); 
//         }catch (error) {
//             console.error(error);
//             alert('Signup failed. Please try again.');
//         }
//     };

//     return(
//         <form onSubmit={handleSingnup}>
//             <input type='text'placeholder='...ENter Username...' onChange={(e) => setUsername(e.target.value)}required/>
//             <input type='password' placeholder='...Enter Password...' onChange={(e) => setPassword(e.target.value)} required/>
//             <button type='submit'>Signup</button>
//         </form>    
//     );
// };

// export default Signup;  

import React, { useState } from 'react';
import api from '../api';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await api.post('/auth/signup', { username, password });
      alert('User Created Successfully');
    } catch (error) {
      console.error(error);
      alert('Signup failed. Please try again.');
    }
  };

  return (
    <div>
      <h2>Signup Page</h2>
      <form onSubmit={handleSignup}>
        <input type='text' placeholder='Enter Username' onChange={(e) => setUsername(e.target.value)} required />
        <input type='password' placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} required />
        <button type='submit'>Signup</button>
      </form>
    </div>
  );
};

export default Signup;
