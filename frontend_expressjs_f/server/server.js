const express = require('express')

const server = express()
const mysql = require('mysql')
const cors = require('cors')

server.use(cors());
server.use(express.json());


const db = mysql.createConnection({
    host: "35.188.45.52",
    user: "root",
    database: "Main"
});


server.post('/insert', (req, res) => {
    const ID = req.body.ID;
    const name = req.body.name;
    const year = req.body.year;
    const country = req.body.country;

    db.query("INSERT INTO Artists (ArtistId, ArtistName, OriginYear, OriginCountry) VALUES (?,?,?,?)", 
                    [ID, name, year, country], 
                    (err, result) => {
                        if (err) {
                            console.log(err);
                        } else {
                            res.send("Inserted!");
                        }
                    });
});


server.post('/delete', (req, res) => {
    const ID = req.body.ID;
    const name = req.body.name;
    const year = req.body.year;
    const country = req.body.country;

    db.query("DELETE FROM Artists " + 
             "WHERE ArtistId = ? AND ArtistName = ? AND OriginYear = ? AND OriginCountry = ?",
                    [ID, name, year, country], 
                    (err, result) => {
                        if (err) {
                            console.log(err);
                        } else {
                            res.send("Successful deletion!");
                        }
                    });

});


server.get('/search', (req, res) => {
    const table = req.query.table;
    const searchKey = req.query.searchKey;

    // console.log("Get input: " + searchKey);
    
    db.query("SELECT * FROM Artists WHERE ArtistName = ?",
                    [searchKey],
                    (err, result) => {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log(result);
                            res.send(result);
                        }
                    });

});

server.post('/update', (req, res) => {
    const ID = req.body.ID;
    const name = req.body.name;
    const year = req.body.year;
    const country = req.body.country;

    const newID = req.body.newID;
    const newName = req.body.newName;
    const newYear = req.body.newYear;
    const newCountry = req.body.newCountry;

    db.query("UPDATE Artists " +
             "SET ArtistId = ?, ArtistName = ?, OriginYear = ?, OriginCountry = ? " +
             "WHERE ArtistId = ? AND ArtistName = ? AND OriginYear = ? AND OriginCountry = ? ",
                    [newID, newName, newYear, newCountry, ID, name, year, country,],
                    (err, result) => {
                        if (err) {
                            console.log(err);
                        } else {
                            res.send("Updated!");
                        }
                    });
});


server.get('/LegitArtists', (req, res) => {
    db.query('SELECT X.artName, X.songName ' +
            'FROM (SELECT Artists.ArtistName AS artName, Song.SongId AS SongId, Song.SongName '+
            'FROM Artists JOIN Performed USING(ArtistId) JOIN Song USING(SongId)) AS X '+

            'JOIN '+

            '(SELECT Songwriters.FirstName AS writerName, Song.SongId AS SongId '+
            'FROM Songwriters JOIN WrittenBy USING(SongwriterId) JOIN Song USING(SongId)) AS Y '+

            'USING(SongId) '+

            'WHERE X.artName = Y.writerName '+
            'LIMIT 15',
            (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(result);
                    res.send(result);
                }
            });
                
});

server.get('/query2', (req, res) => {
    db.query("SELECT SongName, Lyrics, ReleasedYear, Genre " + 
             "FROM Song NATURAL JOIN WrittenBy NATURAL JOIN ( SELECT SongwriterId " + 
                                                             "FROM Songwriters SW NATURAL JOIN WrittenBy WB NATURAL JOIN Song S " +
                                                             "GROUP BY SongwriterId " + 
                                                             "HAVING COUNT(SongId) >= 5) X " + 
                  "NATURAL JOIN Albums " + 
             "LIMIT 15 ",
                    [],
                    (err, result) => {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log(result);
                            res.send(result);
                        }
                    });

});

server.listen(10000, () => {
    console.log("Server is running");
});

