// import { useState } from 'react'
// import './App.css';
// import "./App.css";
// import Form from './Form';
import SpradingForm from './SpradingForm';
// import './index.css';
import './App.css';
// import './Form.css';
// import SpradingForm from './SpradingForm';
import UseEffect from './UseEffect';
import Sidebar from './Sidebar';

const App = () => {
  return(
    <>
      <header>
        <div className = "logo">
          <h1>LOGO</h1>
        </div>
        <nav>
          <ul>
            <li>About</li>
            <li>Contact Us</li>
            <li>Blog</li>
            <li>Feedback</li>
            <li>Login</li>
          </ul>
        </nav>
      </header>
      <SpradingForm/>
      <Sidebar/>
      {/* <Form/> */}
      {/* <UseEffect/> */}
    </>
  );
}

import React, { useState } from 'react';

const EmployeeForm = ({ onSubmit }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onSubmit(name);
      setName('');
    } else {
      alert('Please enter a valid name.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="employeeName">Employee Name:</label>
        <input
          type="text"
          id="employeeName"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default EmployeeForm;