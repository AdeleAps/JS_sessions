const mysql = require("mysql");
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

    const con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "Restaurant",
    });

    let name = req.body.name;
    let email = req.body.email;

    let date = req.body.day;
    let month = req.body.month;
    let year = req.body.year;
    let completeDate = `${year}-${month}-${date}`

    let minute = parseInt(req.body.minute);
    let hour = parseInt(req.body.hour);
    let ampm = req.body.ampm;

        if ((ampm === "AM") && (hour === 12)) {
                hour = 24;
            }
        else if ((ampm === "PM") && (hour === 12)) {
                hour = 12;
        }
        else if (ampm === "PM") {
            hour += 12; 
        }
    
    let completeTime = `${hour}:${minute}`

    let persons = req.body.persons;
    
    con.connect(function(err) {
        if (err) throw err;
        let sql = `INSERT INTO Reservations (Name, Email, Date, Time, Persons) VALUES ('${name}', '${email}', '${completeDate}', '${completeTime}', '${persons}')`
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        })
    })
});