// // App.js
// import React from 'react';
// import { Routes, Route, Link } from 'react-router-dom';
// import Signup from './components/Signup';
// import Login from './components/Login';
// import PropertyList from './components/PropertyList';
// import PropertyForm from './components/PropertyForm';

// const App = () => {
//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Real Estate App</h1>
//       <nav style={{ marginBottom: '20px' }}>
//         <Link to="/signup" style={{ marginRight: '10px' }}>Signup</Link>
//         <Link to="/login" style={{ marginRight: '10px' }}>Login</Link>
//         <Link to="/properties" style={{ marginRight: '10px' }}>Properties</Link>
//         <Link to="/add-property">Add Property</Link>
//       </nav>
//       <Routes>
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/properties" element={<PropertyList />} />
//         <Route path="/add-property" element={<PropertyForm />} />
//         <Route path="/" element={<Login />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;

// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import PropertyList from './components/PropertyList';
import PropertyForm from './components/PropertyForm';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/properties" element={<PropertyList />} />
      <Route path="/add-property" element={<PropertyForm />} />
    </Routes>
  );
};

export default App;




