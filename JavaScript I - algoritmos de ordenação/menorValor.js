const livros = require('./precosLivros')

// Função que recebe um array de produtos (array de objetos) e
// um inteiro referente a uma posição inicial em que deve começar 
// a busca e retorna um inteiro que indica a posição no array,
// do objeto com o menor preço
function menorValor(produtos, posicaoInicial){
    let posicaoDoMaisBarato = posicaoInicial

    // Percorre o array e verifica se o preco do objeto atual é
    // menor que o menor preço já encontrado, se é menor, seta o
    // valor de barato como a posição no array em que o valor do
    // objeto mais barato está
    for (let i = posicaoInicial; i < produtos.length; i++){
        if (produtos[i].preco < produtos[posicaoDoMaisBarato].preco){
            posicaoDoMaisBarato = i
        }
    }
    return posicaoDoMaisBarato
}

module.exports = menorValor