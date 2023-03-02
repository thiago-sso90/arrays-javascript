const nomes = ['João', 'Juliana', 'Caio', 'Ana']
const media = [10, 8, 7.5, 9];

const listadealunosemedia = [nomes , media]

function exibealunoenota(aluno){

    //O método includes() verifica se o parâmetro passado para ele está incluso na lista. Quando está incluso, o retorno será o valor booleano true (verdadeiro). Do contrário, o retorno será false(falso). Por isso, podemos usar o includes() como condição da estrutura if.
    if(listadealunosemedia[0].includes(aluno)){
         const alunos = listadealunosemedia[0];                                     
     
         //o método indexOf() retorna o índice do elemento passado por parâmetro.
        const indice = aluno.indexOf(aluno)

        const mediaaluno = media[indice]
        console.log(`${aluno} tem a media ${mediaaluno}`);

    }else {
        console.log("aluno não encontardo");
    }

}

exibealunoenota("Caio");