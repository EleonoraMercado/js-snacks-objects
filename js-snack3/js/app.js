//Crea un array di oggetti che rappresentano degli animali.
//Ogni animale ha un nome, una famiglia e una classe.
//Crea un nuovo array con la lista dei mammiferi.

//creo array animali con dentro i dati
const animali = [
    {
        nome: 'Leone',
        famiglia: 'Felidi',
        classe: 'Mammiferi',
    },
    {
        nome: 'Alligatore americano',
        famiglia: 'Alligatoridi',
        classe: 'Rettili',
    },
    {
        nome: 'Falco pelegrino',
        famiglia: 'Falconidi',
        classe: 'Uccelli',
    },
    {
        nome: 'Rana toro',
        famiglia: 'Ranidi',
        classe: 'Anfibi',
    },
    {
        nome: 'Squalo bianco',
        famiglia: 'Lamnidi',
        classe: 'Pesci',
    },
    {
        nome: 'Elefante africano',
        famiglia: 'Elefantidi',
        classe: 'Mammiferi',
    },
    {
        nome: 'Tarantola messicana',
        famiglia: 'Theraphosidae',
        classe: 'Ragni',
    },
    {
        nome: 'Tartaruga comune',
        famiglia: 'Testuduni',
        classe: 'Rettili',
    },
    {
        nome: 'Orca',
        famiglia: 'Delphinidi',
        classe: 'Mammiferi',
    },
    {
        nome: 'Colibrì guanceviola',
        famiglia: 'Trochilidi',
        classe: 'Uccelli',
    },

];  //array

console.log(animali);   //string

const animaliMammiferi = [] //array

//creo un ciclo for per pushare gli animali mammiferi dentro un nuovo array.
for (let i = 0; i < animali.length; i++) {
    const classeMammiferi = animali[i]

    console.log(classeMammiferi);

    if (classeMammiferi.classe === 'Mammiferi') {
        animaliMammiferi.push(classeMammiferi)
    }
}
console.log(animaliMammiferi)   //string
