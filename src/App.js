import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Main'
import AssetForm from './components/AssetForm';
import UserProfile from './components/UserProfile';
import AssetList from './components/AssetList';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" exact component={Main} >
              <Route path="/create-asset" element={<AssetForm/>} />
              <Route path="/user-profile" element={<UserProfile/>} />
              <Route path='/asset-list' element={<AssetList/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
