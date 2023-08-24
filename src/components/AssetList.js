import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AssetList = () => {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    fetchAssets();
  }, []);

  const fetchAssets = async () => {
    try {
      const response = await axios.get('https://stienbiestask.onrender.com/api/assets');
      setAssets(response.data);
    } catch (error) {
      console.error('Error fetching assets:', error);
    }
  };

  return (
    <div>
      <h2>Asset List</h2>
      <ul>
        {assets.map((asset, index) => (
          <li key={index}>
            <strong>Asset Name:</strong> {asset.name}<br />
            <strong>Quantity:</strong> {asset.quantity}<br />
            <strong>Cost:</strong> {asset.cost}<br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AssetList;
