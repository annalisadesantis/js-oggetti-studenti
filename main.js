// Oggetti
// 1 creare un oggetto che rappresenta uno studente: ogni studente è caratterizzato da un nome, un cognome e un'età. Attraverso un ciclo for-in stampare a schermo tutte le sue proprietà e il relativo valore
// 2 creare un array di oggetti "studente". Ciclare su tutti gli studenti e stampare per ciascuno il nome e il cognome
// tramite 3 prompt, chiedere all'utente il nome, il cognome e l'età di un nuovo studente. Creare con questi dati un nuovo oggetto e inserirlo nell'array del punto precedente.

$(document).ready(function() {

    // Creo un oggetto con 3 proprietà
    var studente = {
        "nome": "annalisa",
        "cognome": "desantis",
        "eta": 29,
    };

    // Creo un ciclo per visualizzare le 3 proprietà
    for (var key in studente) {
        // stampo le proprietà e valori separati
        // console.log(key);
        // console.log(studente[key]);
        // stampo le proprietà e valori insieme
        console.log(key + " : " + studente[key]);
        // Stampo nel dom le proprietà e valori insieme
        document.write("<h2>" + key + " : " + studente[key] + "</h2>")
    }




});
