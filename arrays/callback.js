const nomes = ['maylla','maisa','narlia']

nomes.forEach(function(nome){
    console.log(nome);
})

nomes.forEach((nome) => {
    console.log(nome);
})

function imprimenomes(nome) {
    console.log(nome);
}
nomes.forEach(imprimenomes)