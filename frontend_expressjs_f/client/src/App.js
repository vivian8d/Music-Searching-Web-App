import React from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Insert from './Functions/insert';
import Search from './Functions/search';
import Update from './Functions/update';
import Delete from './Functions/delete';
import LegitArtists from './Functions/LegitArtists';
import Query2 from './Functions/query2';


export default function App() {
  const navigate = useNavigate();

  const navigateSearch = () => {
    // 👇️ navigate to /
    navigate('/search');
  };

  const navigateInsert = () => {
    // 👇️ navigate to /
    navigate('/insert');
  };  
  
  const navigateUpdate = () => {
    // 👇️ navigate to /
    navigate('/update');
  };

  const navigateDelete = () => {
    // 👇️ navigate to /
    navigate('/delete');
  };

  const navigateLegitArtists = () => {
    // 👇️ navigate to /
    navigate('/LegitArtists');
  };

  const navigateQuery2 = () => {
    // 👇️ navigate to /
    navigate('/query2');
  };

  return (
    <div className="homepage">
        <div>
            <h1>MegaMusic</h1>
            Music makes your day!
            <br/>
        </div>
        <div>
            <button onClick={navigateInsert}>Insert</button>
            <button onClick={navigateUpdate}>Update</button>
            <button onClick={navigateSearch}>Search</button>
            <button onClick={navigateDelete}>Delete</button>
            <button onClick={navigateLegitArtists}>LegitArtists</button>
            <button onClick={navigateQuery2}>Query2</button>

          <Routes>
            <Route path="/insert" element={<Insert />} />
            <Route path="/update" element={<Update />} />
            <Route path="/search" element={<Search />} />
            <Route path="/delete" element={<Delete />} />
            <Route path="/LegitArtists" element={<LegitArtists />} />
            <Route path="/query2" element={<Query2 />} />

          </Routes>
        </div>
    </div>
  );
}
