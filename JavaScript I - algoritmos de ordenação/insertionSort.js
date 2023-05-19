const livros = require('./precosLivros.js')

// Algoritmo que 
function insertionSort(lista){
    for (let i = 0; i < lista.length; i++){
        // Variável referente à posição (que também é a atual) a ser analisada no array
        let analise = i
    
        // Enquanto o valor do objeto atual for menor que o valor do objeto anterior,
        // segue rodando
        while(analise > 0 && lista[analise].preco < lista[analise - 1].preco){
            let livroAnalise = lista[analise]
            let livroAnterior = lista[analise - 1]
    
            // Faz a troca de posição
            lista[analise] = livroAnterior 
            lista[analise - 1] = livroAnalise
    
            analise --
        }
    }
}

insertionSort(livros)

console.log(livros)