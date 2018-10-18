let frutas = [
    'Abacaxi',
    'Pessego',
    'Mamão',
    'Tangerina',
    'Abacate',
    'manga'
]
frutas.splice(0, 2);
console.log(frutas);
frutas.push('Abacaxi');
frutas.reverse();
// Comando pop remove o ultimo elemento do array Frutas
frutas.pop();
// Comando shift, remove o primeiro item do array
frutas.shift();
console.log(frutas.join(' - '));
// Ordena os elementos por ordem alfabetica
frutas.sort();

let musica = [
    'Rock',
    'Roll',
];

console.log(musica.join(' & '));
// Transforma os elementos do seu array em um texto
console.log(frutas.toString(' , '));