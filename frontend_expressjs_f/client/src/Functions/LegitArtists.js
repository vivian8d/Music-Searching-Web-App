import React, { useState } from 'react';
import Axios from "axios";
import "../CSS/LegitArtists.css";


export default function LegitArtists() {
    const [data, setData] = useState([]);

    const LegitArtists = () => {
        Axios.get("http://localhost:10000/LegitArtists").then((response) => {
                    setData(response.data);
                    console.log(JSON.stringify(response.data));
                });
    };



    return (
      <div className="LegitArtists_class">
          <h2>Legit Artists</h2>
            <br/><br/>

            <button onClick={LegitArtists}>Search</button>
            <br/><br/><br/>
            {data.map((val, key) => {
                  return <div>
                              <h4>No {key + 1}</h4> 
                              <p>Artist Name: {val.artName}</p>
                              <p>Song Name: {val.SongName}</p>
                              <br/>
                         </div>
            })}

            
                        
          
      </div>
    );
}