const livros = require('./precosLivros')
const menorValor = require('./menorValor')

// Algoritmo que invoca a função que percorre o array, invoca a função que retorna a posição 
// do menor valor no array que foi dado como parâmetro (seleciona (selection)) e modifica o array colocando o menor 
// valor como primeiro elemento do array 
for (let i = 0; i < livros.length; i++){
    // Salva o retorno da função menorValor (que retorna a posição do menor valor no array
    // a partir da posição inicial dada para que ele comece a busca)
    let posicaoDoMenorValor = menorValor(livros, i)

    // Variável que guarda o objeto da posição inicial em que o array começou a ser percorrido 
    let livroAtual = livros[i]
    console.log("Posição atual: ", i)
    console.log("Posição [0]: ", livros[0])
    console.log("Livro na posição atual: ", livros[i])
    
    let livroMaisBarato = livros[posicaoDoMenorValor]
    console.log("Livro mais barato: ", livros[posicaoDoMenorValor])
    
    // Faz a troca de posição para que o livro mais barato fique na posição inicial em que a função iniciou a comparação (swapping)
    livros[i] = livroMaisBarato
    livros[posicaoDoMenorValor] = livroAtual
    console.log("Posição [0]: ", livros[0])
    console.log(livros)
    console.log("__________________________________________________________________________")

}

console.log(livros)