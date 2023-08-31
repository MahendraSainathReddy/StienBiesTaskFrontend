import React, { useState } from 'react';
import axios from 'axios';

const AssetForm = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [assetName, setAssetName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [cost, setCost] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();

    const enteredUsername = 'dev';
    const enteredPassword = 'dev@1234';

    if (username === enteredUsername && password === enteredPassword) {
      setIsLoggedIn(true);
      setLoginError('');
    } else {
      setLoginError('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
    setAssetName('');
    setQuantity('');
    setCost('');
    setLoginError('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        'https://stienbiestask.onrender.com/api/create-asset',
        {
          name: assetName,
          quantity: quantity,
          cost: cost,
        }
      );

      if (response.status === 201) {
        console.log('Asset created successfully');
      }
    } catch (error) {
      console.error('Error creating asset:', error);
    }
  };

  return (
    <div>
      {!isLoggedIn ? (
        <div>
          <h2>Login to access AssetForm</h2>
          {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
          <form onSubmit={handleLogin}>
            <div>
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      ) : (
        <div>
          <h2>Create Asset</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Asset Name:</label>
              <input
                type="text"
                value={assetName}
                onChange={(e) => setAssetName(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Quantity:</label>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Cost:</label>
              <input
                type="number"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
                required
              />
            </div>
            <button type="submit">Create Asset</button>
          </form>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default AssetForm;
