import React, {useState} from "react";  
import api from "../api";

cont Login = () => {
    const [username, setUsername] = useState('');
    const [password,setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventdefault();

        try{
            const response = await api.post('/auth/login', {username, password});
            localStorage.setItem('token', response.data.token);
            alert('...Login Successful...');
        }catch (error) {
            console.error(error);
            alert('Login failed. Please try again.');
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <input type='text' placeholder='...Enter Username...' onChange={(e) => setUsername(e.target.value)} required />
            <input type='password' placeholder='...Enter Password...' onChange={(e) => setPassword(e.target.value)} required />
            <button type='submit'>Login</button>
        </form>
    );
};

export default Login;
