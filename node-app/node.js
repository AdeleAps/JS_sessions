const mysql = require("mysql");
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "Restaurant",
});


const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());

const port = 1000;

app.listen(port, () => {
  console.log(`Server running on port${port}`);
});

app.post('/submit', function(req, res){
    res.redirect("http://127.0.0.1:5500/booking.html");
    let name = req.body.name;
    let email = req.body.email;

    let date = req.body.day;
    let month = req.body.month;
    let year = req.body.year;
    let completeDate = `${year}-${month}-${date}`

    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        let sql = `INSERT INTO Reservations (Name, Email, Date) VALUES ('${name}', '${email}', '${completeDate}')`;
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        })
    })
});