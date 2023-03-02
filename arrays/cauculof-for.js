const notas =[10,6.5,8,7.5];

let somadasnotas = 0;

for (let i=0; i < notas.length;i++){
    somadasnotas += notas[i]

}

console.log(`o resultado da soma das notas é: ${somadasnotas}`);
const media = somadasnotas / notas.length;

console.log(`e a media das notas é: ${media}`);