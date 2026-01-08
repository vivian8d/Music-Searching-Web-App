import React, { useState } from "react";
import Axios from 'axios';
import "../CSS/insert.css";


export default function Insert() {
    const [ID, setID] = useState(0);
    const [name, setName] = useState("");
    const [year, setYear] = useState(0);
    const [country, setCountry] = useState("");
    
    const insert_func = () => {
        Axios.post("http://localhost:10000/insert", 
                    {
                        ID: ID,
                        name: name,
                        year: year,
                        country: country
                    }).then(() => {
                        console.log("Insert successful!");
                    });
    };

    return (
        <div id="artist_insert" align="center">
            <h2>Insert Data</h2>
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
            <button onClick={insert_func}>Insert</button>
        </div>
    );
}
