import React, { useState } from 'react';
import Axios from "axios";
import "../CSS/search.css";


export default function Search() {
    const [table, setTable] = useState("");
    const [searchKey, setSearchKey] = useState(""); 
    const [data, setData] = useState([]);
    

    const search_func = () => {
        Axios.get("http://localhost:10000/search", {
                  params: {
                    table: table,
                    searchKey: searchKey
                  }
                }).then((response) => {
                    setData(response.data);
                    console.log(JSON.stringify(response.data));
                });
    };



    return (
      <div className="search_class">
          <h2>Search</h2>
            <select name="table" id="table_insert"
                  onChange={(event) => {
                      setTable(event.target.value);
                  }}>
                <option disabled selected value> -- What do you want to search for? -- </option>
                <option value="artist">Artist</option>
                <option value="song">Song</option>
                <option value="album">Album</option>
                <option value="songwriter">Songwriter</option>
            </select>
            <br/><br/>
            <input type="Text" 
                  onChange={(event) => {
                      setSearchKey(event.target.value);
                      console.log(searchKey);
                }}/>
            <button onClick={search_func}>Search</button>
            <br/><br/><br/>
            {data.map((val, key) => {
                  return <div>
                              <h4>No {key + 1}</h4> 
                              <p>ID: {val.ArtistId}</p>
                              <p>Name: {val.ArtistName}</p>
                              <p>Origin year: {val.OriginYear}</p>
                              <p>Origin country: {val.OriginCountry}</p>
                              <br/>
                         </div>
            })}

            
                        
          
      </div>
    );
}


