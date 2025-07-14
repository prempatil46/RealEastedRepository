// import React, {useState} from "react";  
// import api from "../api";

// const Login = () => {
//     const [username, setUsername] = useState('');
//     const [password,setPassword] = useState('');

//     const handleLogin = async (e) => {
//         e.preventDefault();

//         try{
//             const response = await api.post('/auth/Login', {username, password});
//             localStorage.setItem('token', response.data.token);
//             alert('...Login Successful...');
//         }catch (error) {
//             console.error(error);
//             alert('Login failed. Please try again.');
//         }
//     };

//     return (
//         <form onSubmit={handleLogin}>
//             <input type='text' placeholder='...Enter Username...' onChange={(e) => setUsername(e.target.value)} required />
//             <input type='password' placeholder='...Enter Password...' onChange={(e) => setPassword(e.target.value)} required />
//             <button type='submit'>Login</button>
//         </form>
//     );
// };

// export default Login;

import React, { useState } from "react";
import api from "../api";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/auth/Login', { username, password });
      localStorage.setItem('token', response.data.token);
      alert('...Login Successful...');
    } catch (error) {
      console.error(error);
      alert('Login failed. Please try again.');
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleLogin}>
        <input type='text' placeholder='Enter Username' onChange={(e) => setUsername(e.target.value)} required />
        <input type='password' placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} required />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default Login;

