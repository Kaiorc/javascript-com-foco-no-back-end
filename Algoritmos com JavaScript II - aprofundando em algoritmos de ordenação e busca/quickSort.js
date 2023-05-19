const livros = require('./precosLivros - 2.0')
const reposicionaElemento = require('./funcoesComPivotamento')

function quickSort(array, parteEsquerda, parteDireita) {
    
    // Verificação para saber se o array é maior
    //  que 1 elemento
    if(array.length > 1){
        let indiceAtual = particiona(array, parteEsquerda, parteDireita)
        if(parteEsquerda < indiceAtual - 1){
            quickSort(array, parteEsquerda, indiceAtual - 1)
        }
        if(indiceAtual < parteDireita){
            quickSort(array, indiceAtual, parteDireita)
        }
    }
    return array
}

function particiona(array, parteEsquerda, parteDireita) {
    // Definição do pivo. Nesse caso escolhemos o pivô
    // no meio do array
    let pivo = array[Math.floor((parteEsquerda + parteDireita) / 2)]
    let posicaoAtualEsquerda = parteEsquerda
    let posicaoAtualDireita = parteDireita

    while (posicaoAtualEsquerda <= posicaoAtualDireita){
        while (array[posicaoAtualEsquerda].preco < pivo.preco) {
            posicaoAtualEsquerda ++
        }
        
        while (array[posicaoAtualDireita].preco > pivo.preco) {
            posicaoAtualDireita --
        }

        if(posicaoAtualEsquerda <= posicaoAtualDireita){
            reposicionaElemento(array, posicaoAtualEsquerda, posicaoAtualDireita)
            posicaoAtualEsquerda ++
            posicaoAtualDireita --
        }
    }
    return posicaoAtualEsquerda
}


// livros.length - 1 pois queremos o índice do array (que começa em 0),
// não a quantidade de elementos 
console.log(quickSort(livros, 0, livros.length - 1))