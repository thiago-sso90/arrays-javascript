const alunos = ["ana","joaoa","maria","pwdro","marta", "maylla","maisa", "Vivian",
"Isabela",
"Vinícius",
"Renan",
"Renata",
"Daisy",
"Camilo",]


//O método slice() retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim (fim não é necessário) de um array original. O array original não é modificado.
const sala1 =alunos.slice(0 , alunos.length/2)
const sala2 = alunos.slice(alunos.length/2);

console.log(sala1);
console.log(sala2);