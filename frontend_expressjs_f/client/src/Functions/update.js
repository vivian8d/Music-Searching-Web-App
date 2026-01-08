import React, { useState } from "react";
import Axios from 'axios';
import "../CSS/update.css";

export default function Update() {
    const [ID, setID] = useState(0);
    const [name, setName] = useState("");
    const [year, setYear] = useState(0);
    const [country, setCountry] = useState("");

    const [newID, setNewID] = useState(0);
    const [newName, setNewName] = useState("");
    const [newYear, setNewYear] = useState(0);
    const [newCountry, setNewCountry] = useState("");

    const update_func = () => {
      Axios.post("http://localhost:10000/update", 
                  {
                      ID: ID,
                      name: name,
                      year: year,
                      country: country,

                      newID: newID,
                      newName: newName,
                      newYear: newYear,
                      newCountry: newCountry
                  }).then(() => {
                      console.log("Update successful!");
                  });
  };

  return (
    <div id="artist_update" align="center">
      <h2>Update</h2>
      <h3>Select Id, Name, Origin Year, or Country to Update</h3>
      <table>
          <tr>
              <td>ID: </td>
              <td><input id="ID" 
                          type="text" 
                          onChange={(event) => {
                              setID(event.target.value);
                          }}/></td>
          </tr>
          <tr>
              <td>Name: </td>
              <td><input id="name" 
                          type="text" 
                          onChange={(event) => {
                              setName(event.target.value);
                          }}/></td>
          </tr>
          <tr>
              <td>Origin Year: </td>
              <td><input id="year" 
                          type="text"
                          onChange={(event) => {
                              setYear(event.target.value);
                          }}/></td>
          </tr>
          <tr>
              <td>Country: </td>
              <td><input id="country" 
                          type="text"
                          onChange={(event) => {
                              setCountry(event.target.value);
                          }}/></td>
          </tr>
      </table>
      <h3>Update with these values</h3>
      <table>
          <tr>
              <td>ID: </td>
              <td><input id="ID" 
                          type="text" 
                          onChange={(event) => {
                              setNewID(event.target.value);
                          }}/></td>
          </tr>
          <tr>
              <td>Name: </td>
              <td><input id="name" 
                          type="text" 
                          onChange={(event) => {
                              setNewName(event.target.value);
                          }}/></td>
          </tr>
          <tr>
              <td>Origin Year: </td>
              <td><input id="year" 
                          type="text"
                          onChange={(event) => {
                              setNewYear(event.target.value);
                          }}/></td>
          </tr>
          <tr>
              <td>Country: </td>
              <td><input id="country" 
                          type="text"
                          onChange={(event) => {
                              setNewCountry(event.target.value);
                          }}/></td>
          </tr>
      </table>
      <button onClick={update_func}>Update</button>
        </div>
  );
}

