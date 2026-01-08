import React, { useState } from 'react';
import Axios from "axios";
import "../CSS/query2.css";


export default function Search() {
    const [data, setData] = useState([]);
    

    const query2_func = () => {
        Axios.get("http://localhost:10000/query2", {
                  params: {
                  }
                }).then((response) => {
                    setData(response.data);
                    console.log(JSON.stringify(response.data));
                });
    };



    return (
      <div className="query2_class">
          <h2>Query2</h2>
            <h3>Find all song info from songwriters who have written at least 5 songs: </h3>
            <br/><br/>
            <button onClick={query2_func}>Find</button>
            <br/><br/><br/>
            {data.map((val, key) => {
                  return <div>
                              <h4>No {key + 1}</h4> 
                              <p>SongName: {val.SongName}</p>
                              <p>Lyrics: {val.Lyrics}</p>
                              <p>Released Year: {val.ReleasedYear}</p>
                              <p>Genre: {val.Genre}</p>
                              <br/>
                         </div>
            })}

            
                        
          
      </div>
    );
}


