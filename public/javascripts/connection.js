var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost", user: "root", password: "password", database: "tuntikirjaus"
});

con.connect(function(err) {
    if (err) {
        console.log("Virhe")
        throw err;
    }
    // console.log("Connected!");

});


// con.query("select * from kayttaja", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
// });

// function haeTiedot() {
//     con.query("select * from kayttaja, tunnit where kayttaja.id = tunnit.kayttajaId", function (err, result, fields) {
//         if (err) throw err;
//         // console.log(result);
//         for (var i = 0; i < result.length; ++i) {
//             var etunimi = result[i].etunimi;
//             var sukunimi = result[i].sukunimi;
//             var osasta = result[i].osasto;
//             var tehtavanimike = result[i].tehtavanimike;
//             var pvm = result[i].pvm;
//             var tunnit = result[i].tunnit;
//             var aihe = result[i].aihe;
//             console.log("Nimi: " + etunimi + " " + sukunimi + "\n" +
//                 "Pvm: " + pvm + "\n" +
//                 "Tunnit: " + tunnit + "\n" +
//                 "Tehtävä: " + aihe + "\n");
//         }
//         // return "Nimi: " + etunimi + " " + sukunimi + "\n" +
//         //     "Pvm: " + pvm + "\n" +
//         //     "Tunnit: " + tunnit + "\n" +
//         //     "Tehtävä: " + aihe + "\n";
//     })
//
// }
//
// haeTiedot();
// document.getElementById("container").innerHTML = haeTiedot();

var kuka = 'Testi';

function haeTiedot() {
    con.query("select * from kayttaja, tunnit where kayttaja.id = tunnit.kayttajaId", function (err, result, fields) {
        if (err) throw err;
        // console.log(result);
        console.log("Tekijä" + "\t\t\t\t" + "Pvm" + "\t\t\t\t\t\t\t\t\t\t\t\t\t\t" + "Tunnit" + "\t\t" + "Kuvaus");
        for (var i = 0; i < result.length; ++i) {
            var etunimi = result[i].etunimi;
            var sukunimi = result[i].sukunimi;
            var osasta = result[i].osasto;
            var tehtavanimike = result[i].tehtavanimike;
            var pvm = result[i].pvm;
            var tunnit = result[i].tunnit;
            var aihe = result[i].aihe;

            if (kuka === etunimi) {
                // console.log("Nimi: " + etunimi + " " + sukunimi + "\n" +
                //     "Pvm: " + pvm + "\n" +
                //     "Tunnit: " + tunnit + "\n" +
                //     "Tehtävä: " + aihe + "\n");

                console.log(etunimi + " " + sukunimi + "\t\t" + pvm + "\t" + tunnit + "\t\t\t" + aihe);
            }
            // console.log("Nimi: " + etunimi + " " + sukunimi + "\n" +
            //     "Pvm: " + pvm + "\n" +
            //     "Tunnit: " + tunnit + "\n" +
            //     "Tehtävä: " + aihe + "\n");
        }
        // return "Nimi: " + etunimi + " " + sukunimi + "\n" +
        //     "Pvm: " + pvm + "\n" +
        //     "Tunnit: " + tunnit + "\n" +
        //     "Tehtävä: " + aihe + "\n";
    })

}

haeTiedot();
