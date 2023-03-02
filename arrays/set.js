//Remova os nomes repetidos, deixando apenas um de cada.

//os elementos de um Set não podem se repetir

const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const novoset = new Set(nomes);

const nomesatualizado = [...novoset]

console.log(nomesatualizado);