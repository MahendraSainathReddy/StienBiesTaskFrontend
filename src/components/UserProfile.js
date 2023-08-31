import React, { useState } from 'react';
import axios from 'axios';

const UserProfile = () => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [bankBalance, setBankBalance] = useState('');  

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('https://stienbiestask.onrender.com/api/register', {
        username,
        age,
        gender,
        dob,
        bankBalance
      }); 
      console.log(response.data);
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div>
      <h2>User Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </label>
        <br />
        <br />
        <label>
          Age:
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
        </label>
        <br />
        <label>
          Gender:
          <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} required />
        </label>
        <br />
        <label>
          Date of Birth:
          <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} required />
        </label>
        <br />
        <label>
          Bank Balance:
          <input type="number" value={bankBalance} onChange={(e) => setBankBalance(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default UserProfile;
