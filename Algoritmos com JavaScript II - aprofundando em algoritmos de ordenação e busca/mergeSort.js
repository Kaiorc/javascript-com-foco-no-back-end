const livros = require('./precosLivros - 2.0')

// Ordena utilizando recursão, onde vai dividindo o array a cada chamada e 
// retornando os arrays ordenados enquanto a condição de que o array deve 
// ser maior que 1 seja satisfeita
function mergeSort(array){

    if(array.length > 1){
        const meioDoArray = Math.floor(array.length / 2)
        const metade1 = mergeSort(array.slice(0, meioDoArray))
        const metade2 = mergeSort(array.slice(meioDoArray, array.length))
        array = ordena(metade1, metade2)
    }

    return array
}

// Função já implementada no arquivo "uneListas.js" porém agora implementada
// utilizando métodos js. Nesse caso, como será utilizado o ".push"(que envia
// o dado pro final do array), não é necessária a variável "posicaoAtualListaFinal"
function ordena(metade1, metade2){
    let posicaoAtualMetade1 = 0
    let posicaoAtualMetade2 = 0
    const resultado = []

    // Faz a comparação entre o valor dos produtos e passa para próxima posição
    while(posicaoAtualMetade1 < metade1.length && posicaoAtualMetade2 < metade2.length){
        let produtoAtualMetade1 = metade1[posicaoAtualMetade1]
        let produtoAtualMetade2 = metade2[posicaoAtualMetade2]

        if(produtoAtualMetade1.preco < produtoAtualMetade2.preco){
            resultado.push(produtoAtualMetade1)
            posicaoAtualMetade1++
        } else{
            resultado.push(produtoAtualMetade2)
            posicaoAtualMetade2++
        }
    }

    // No arquivo "uneListas.js", utilizamos dois "while" para verificar se havia elementos ordenados sobrando
    // em cada array, nesse arquivo será utilizada outra maneira de fazer o mesmo utilizando ternário.
    // Qualquer elemento que sobrou em qualquer das metades de array, será concatenado com o o array final
    return resultado.concat(posicaoAtualMetade1 < metade1.length 
        ? metade1.slice(posicaoAtualMetade1) 
        : metade2.slice(posicaoAtualMetade2))
}

console.log(mergeSort(livros))