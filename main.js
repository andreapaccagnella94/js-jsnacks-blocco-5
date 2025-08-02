console.log('hi');

const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi

names.forEach((singleName) => {
    console.log(singleName);

})

// -------------------------------------------------

const people = [
    { name: 'Paolo', age: 35 },
    { name: 'Giulia', age: 24 },
    { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi

people.forEach((namePeople) => {
    console.log(namePeople.name);
})

// -------------------------------------------------

const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// con map mi creo una variabile in cui andrò ad inserire il risultato

const plusNumbers = numbers.map(number => number + 1)
console.log(plusNumbers);

// -------------------------------------------------

const posts = [
    { author: 'Marco', date: '12/3/2021', content: 'lorem ipsum...' },
    { author: 'Luca', date: '30/6/2021', content: 'lorem ipsum...' },
    { author: 'Fabrizio', date: '12/9/2020', content: 'lorem ipsum...' },
    { author: 'Enrico', date: '09/12/2021', content: 'lorem ipsum...' },
]

// Crea un nuovo array coi nomi di tutti gli autori

const postsAuthor = posts.map(post => post.author);
console.log(postsAuthor);

// -------------------------------------------------

const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// faccio versione distesa per ricordarmi che solo quelli che hanno true vanno
// nel nuovo array
/* const evenNums = nums.filter((number) => {
    if (number % 2 === 0) {
        return true
    }
    return false
}) */

// semplificata

const evenNums = nums.filter(number => number % 2 === 0);
console.log(evenNums);

// -------------------------------------------------

const pencils = [
    { brand: 'Faber-Castell', weight: 8, sizeInCm: 12 },
    { brand: 'Staedtler', weight: 9, sizeInCm: 18 },
    { brand: 'Faber-Castell', weight: 7, sizeInCm: 10 },
    { brand: 'Staedtler', weight: 10, sizeInCm: 16 },
    { brand: 'Faber-Castell', weight: 6, sizeInCm: 14 },
    { brand: 'Derwent', weight: 5, sizeInCm: 20 },
    { brand: 'Derwent', weight: 4, sizeInCm: 11 },
    { brand: 'Staedtler', weight: 6, sizeInCm: 9 },
    { brand: 'Caran d’Ache', weight: 12, sizeInCm: 22 },
    { brand: 'Caran d’Ache', weight: 11, sizeInCm: 13 },
];

// A partire dall'array fornito, crea due array. Uno con le matite 
// lunghe almeno 15cm. L'altro con le restanti.

const pencilsLong = pencils.filter(pencil => pencil.sizeInCm >= 15);
const pencilsShort = pencils.filter(pencil => pencil.sizeInCm < 15);
console.log(pencilsLong);
console.log(pencilsShort);

// -------------------------------------------------

const students = [
    {
        id: 1,
        name: 'Marco Lanci',
        age: 32,
        class: '3C'
    },
    {
        id: 2,
        name: 'Mario Banfi',
        age: 34,
        class: '4A'
    },
    {
        id: 3,
        name: 'Luigi Banzi',
        age: 33,
        class: '5B'
    },
];

// Recupera i dati dello studente con id 2

const Id2Student = students.find(student => student.id === 2);
console.log(Id2Student);

// -------------------------------------------------

const students_2 = [
    {
        id: 1,
        name: 'Marco Lanci',
        age: 32,
        classroom: '3C'
    },
    {
        id: 2,
        name: 'Mario Banfi',
        age: 34,
        classroom: '4A'
    },
    {
        id: 3,
        name: 'Luigi Banzi',
        age: 33,
        classroom: '5B'
    },
];

// Recuperare la classe dello studente Marco Lanci

const Marco = students_2.find(student => student.name === 'Marco Lanci');
console.log(Marco);

const MarcoClass = Marco.classroom;
console.log(MarcoClass);


// -------------------------------------------------
// BONUS AGGIUNTIVI
// -------------------------------------------------
/*
Snacks Per bk rooms:

Snack 1
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà:
marca, modello e alimentazione(benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina,
nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array.

*/

const cars = [
    { brand: 'Fiat', model: 'Panda', fuel: 'benzina' },
    { brand: 'Volkswagen', model: 'Golf', fuel: 'diesel' },
    { brand: 'Tesla', model: 'Model 3', fuel: 'elettrico' },
    { brand: 'Toyota', model: 'Yaris', fuel: 'benzina' },
    { brand: 'Ford', model: 'Focus', fuel: 'diesel' },
    { brand: 'Opel', model: 'Corsa', fuel: 'gpl' },
    { brand: 'Hyundai', model: 'Ioniq', fuel: 'elettrico' },
    { brand: 'Peugeot', model: '208', fuel: 'metano' },
    { brand: 'Renault', model: 'Clio', fuel: 'benzina' },
    { brand: 'Audi', model: 'A3', fuel: 'diesel' },
];


/*
Snack 2
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.

    Snack 3
Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Crea un nuovo array con la lista dei mammiferi


Snack 4
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.

Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.

*/
