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

    console.log("Studente 1");
    document.write("<h2>Studente 1</h2>")

    // Creo un ciclo per visualizzare le 3 proprietà
    for (var key in studente) {
        // stampo le proprietà e valori separati
        // console.log(key);
        // console.log(studente[key]);
        // stampo le proprietà e valori insieme
        console.log(key + " : " + studente[key]);
        // Stampo nel dom le proprietà e valori insieme
        document.write("<h3>" + key + " : " + studente[key] + "</h3>")
    }

    // Creo un array di oggetti
    var studenti = [
       {
          "nome" : "paola",
          "cognome" : "rossi",
          "eta" : 27,
       },
       {
           "nome" : "marco",
           "cognome" : "bianchi",
           "eta" : 30,
       },
       {
           "nome" : "alessia",
           "cognome" : "falco",
           "eta" : 25,
       },
       {
           "nome" : "giacomo",
           "cognome" : "orsi",
           "eta" : 31,
       },
   ];

   console.log("Lista studenti:");
   document.write("<h2>Lista studenti</h2>")

   // Ciclo l'array di oggetti e salvo tutto nella varibile corrente
    for (var i = 0; i < studenti.length; i++) {

        var studente_corrente = studenti[i];


        var nome_studente = studente_corrente.nome;
        var cognome_studente = studente_corrente.cognome;
        var eta_studente = studente_corrente.eta;

        // Ciclo l'oggetto al suo interno
        for (var key in studente_corrente) {

            // stampo tutte le chiavi con i suoi valori eccetto la chiave eta
            if(key != "eta") {
                console.log(key + ': ' + studente_corrente[key]);
                document.write("<h3>" + key + " : " + studente_corrente[key] + "</h3>")
            }
        }
    }

    var studente_utente = {
        "nome": "",
        "cognome": "",
        "eta": "",
    };

    console.log(studente_utente);

    var utente;

    setTimeout(function() {

        for (var i = 0; i < 3; i++) {

            var valore_corrente = utente;

            if(i == 0){
                utente = prompt("Inserisci il tuo nome");
            }else if(i == 1){
                utente = prompt("Inserisci il tuo cognome");
            }else{
                utente = prompt("Inserisci la tua età");
            }


            console.log(valore_corrente);

        }

    }, 2000);



});
