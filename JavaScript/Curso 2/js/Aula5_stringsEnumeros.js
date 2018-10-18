const text = 'Para aprender Javascript pesquise no google';

// // Comando Slice faz o fatiamento da string, neste caso 'Text'
console.log(text.slice(0, 4));

// // o metodo indexof traz o que vc está buscando, sendo string ou numeros, e mostra exatamente a posição de o elemento está
console.log(text.indexOf('javascript'));

// // Busca a ultima ocorrencia do elemento que está pesquisando no texto
console.log(text.lastIndexOf('javascript'));

// //O slice busca o range de elementos do texto que deseja, sendo necessario informar a posição inicial e até onde irá pesquisar.
console.log(text.slice(0, 5));

// // O substr traz a quantidade exata de elementos de um texto
console.log(text.substr(0, 10));

// // Substitui ocorrencias dentro de uma string
console.log(text.replace('Javascript', 'Java'));

// // Deixa toda a string com letras maiusculas
console.log(text.toUpperCase());

// Deixa toda a string com letras minusculas
console.log(text.toLowerCase());