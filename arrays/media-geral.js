//Com a média de todos os alunos de 3 salas, calcule a média geral de cada sala:

const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];

const salaJava = [6, 5, 8, 9, 5, 6];

const salaPython = [7, 3.5, 8, 9.5];

function cauculamedia(notasdasala){
   const somadasnotas = notasdasala.reduce((acc,nota) => acc + nota,0)
        
    const media = somadasnotas / notasdasala.length;
    return media;
}

 console.log(`a média da sala js é: ${cauculamedia(salaJS)}`); 
 console.log(`a média da sala java é: ${cauculamedia(salaJava)}`); 
 console.log(`a média da sala pytHon é: ${cauculamedia(salaPython)}`); 


 // Esse método reduce() vai iterar sobre o array, então também vamos passar uma função callback como parâmetro para ele, usaremos a arrow function.