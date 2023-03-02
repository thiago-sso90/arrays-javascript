//Precisamos padronizar a lista de alunos para conter apenas letras maiúsculas.

const nomes = ['ana Julia','Caio vinicius','BIA silva']

    const nomespadrao = nomes.map((nome) =>{
        return nome.toUpperCase();
    })

    console.log(nomespadrao);