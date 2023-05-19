const livros = require('./precosLivros - 3.0')

// Função que retorna a posição, no array passado, do valor que está
// sendo buscado. A Busca Binária divide a lista em duas partes e procura
// em uma das suas recursivamente
function buscaBinaria(array, de, ate, valorBuscado){
    const meioDoArray = Math.floor((de + ate) / 2)
    const atual = array[meioDoArray]

    // Quando não encontra, o JavaScript retorna -1
    if(de > ate){
        return -1
    }

    if (valorBuscado === atual.preco){
        return meioDoArray
    }
    
    if (valorBuscado < atual.preco){
        return buscaBinaria(array, de, meioDoArray - 1, valorBuscado)
    }
    
    if (valorBuscado > atual.preco){
        return buscaBinaria(array, meioDoArray + 1, ate, valorBuscado)
    }
}

// No exemplo o valor a ser buscado é o "40"
console.log(buscaBinaria(livros, 0, livros.length - 1, 40))

// No exemplo o valor a ser buscado é o "60" e não está no array
console.log(buscaBinaria(livros, 0, livros.length - 1, 60))