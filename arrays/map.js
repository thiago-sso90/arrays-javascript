const notas = [10,9.5,8,7,6]

const notasatualizada =  notas.map((nota) =>{
    //Então, nota + 1 é maior ou igual a 10, coloca um ponto de interrogação depois da condição e, em seguida, diremos o que retornar se a condição for verdadeira. Então, se a nota somado a 1 for maior ou igual a 10, retorne apenas 10. Se não, colocaremos dois pontos (:) para informar o que retornar caso a condição seja falsa. Vamos retornar nota + 1 caso não seja maior ou igual a 10.  
    return nota + 1 >=10 ? 10 : nota + 1
})

console.log(notasatualizada);