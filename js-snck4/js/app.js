//Crea un array di oggetti che rappresentano delle persone.
//Ogni persona ha un nome, un cognome e un’età.
//Crea quindi un nuovo array inserendo, per ogni persona, una frase con il
//nome e cognome e l’indicazione se può guidare, in base all’età.

const user = [
    {
        nome: 'Marco',
        cognome: 'Rossi',
        eta: '25',
    },
    {
        nome: 'Sara',
        cognome: 'Bianchi',
        eta: '30',
    },
    {
        nome: 'Luca',
        cognome: 'Moretti',
        eta: '17',
    },
    {
        nome: 'Sofia',
        cognome: 'Esposito',
        eta: '14',
    },
    {
        nome: 'Federico',
        cognome: 'Russo',
        eta: '33',
    },
    {
        nome: 'Martina',
        cognome: 'Conti',
        eta: '16',
    },
];  //array di oggetti.

//creo array dove andranno le frasi con nome e cognome.
const frasi = [];

for (let i = 0; i < user.length; i++) {
    nomeCognomeEta = user[i];
    //dichiaro la variabile per le due frasi
    let frase;
    //se l'utente ha 18 anni o è maggiore di 18 anni allora può guidare
    if (nomeCognomeEta.eta >= 18 ) {
       frase = `Puoi guidare ${nomeCognomeEta.nome} ${nomeCognomeEta.cognome}`;
       //se l'utemte è minore di 18 anni non può guidare
    } else {
        frase = `Non puoi guidare ${nomeCognomeEta.nome} ${nomeCognomeEta.cognome}`;
    }
    //push delle due frasi nel array frasi
    frasi.push(frase)

};
       
console.log(frasi)



