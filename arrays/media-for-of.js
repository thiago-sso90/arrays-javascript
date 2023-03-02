const notas =[10,6.5,8,7.5];

let somadasnotas = 0;

//Diferentemente do for clássico, o for of é composto por uma única expressão. Além disso, essa estrutura é caracterizada pelo of, que incluímos após let elemento. O termo of significa "de", em inglês.
for(let nota of notas){
   somadasnotas += nota;
}
console.log(`o resultado da soma das notas é: ${somadasnotas}`);

const media = somadasnotas / notas.length;

console.log(`e a media das notas é: ${media}`);