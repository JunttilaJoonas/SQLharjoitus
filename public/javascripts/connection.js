var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost", user: "root", password: "password", database: "tuntikirjaus"
});

con.connect(function(err) {
    if (err) {
        console.log("Virhe")
        throw err;
    }
    console.log("Connected!");

});


con.query("select * from kayttaja", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
});

// var nimet = document.getElementById("nimet");

function haeNimet() {
    con.query("select etunimi, sukunimi from kayttaja", function (err, result, fields) {
        var etunimi = result[0].etunimi;
    })

}

haeNimet();
