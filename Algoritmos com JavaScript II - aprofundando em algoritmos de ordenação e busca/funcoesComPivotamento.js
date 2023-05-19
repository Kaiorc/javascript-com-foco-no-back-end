const livros = require('./precosLivros - 2.0')

// Função que recebe um valor pivô e um array. Depois
// percorre o array e conta quantos valores, dentro do array,
// são menores que o valor pivô recebido
function encontraValoresMenores(pivo, array){
    let qtdeValoresMenores = 0

    for(let i = 0; i < array.length; i++){
        let produtoAtual = array[i]

        if(produtoAtual.preco < pivo.preco){
            qtdeValoresMenores++
        }
    }

    reposicionaElemento(array, array.indexOf(pivo), qtdeValoresMenores)
    return array
}

// Função que recebe um array, e dois valores inteiros que correspondem
// a  posições de elementos no array que deverão ser trocados. O primeiro
// valor é a poição inicial de um elemento e o segundo sua posição final
// que é para onde ele deverá ir
function reposicionaElemento(array, de, para){
    const elemento1 = array[de]
    const elemento2 = array[para]

    array[para] = elemento1
    array[de] = elemento2
}

// Nesta implementação vamos utilizar como pivô
// sempre o elemento do meio
// Função que 
function divideNoPivo(array){
    let pivo = array[Math.floor(array.length / 2)]
    encontraValoresMenores(pivo, array)
    let posicaoValoresMenores = 0 

    for(let i = 0; i < array.length; i++){
        let produtoAtual = array[i]

        if(produtoAtual.preco <= pivo.preco && i !== pivo){
            reposicionaElemento(array, i, posicaoValoresMenores)
            posicaoValoresMenores ++
        }
    }

    return array
}


// console.log(divideNoPivo(livros))

// Nesse exemplo utilizamos objeto na posição 2 do array: "Java - 30 reais"
// console.log(encontraValoresMenores(livros[2], livros))

module.exports = reposicionaElemento