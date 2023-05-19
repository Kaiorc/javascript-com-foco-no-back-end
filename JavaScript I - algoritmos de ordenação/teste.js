const livros = require('./precosLivros')

let menorValor = 0

// Algoritmo que pega um arquivo com array de livros (objetos) 
// que possuem nome e valor, percorre esse array procurando o 
// livro com o menor valor

// Percorre o array de objetos
for(let i = 0; i < livros.length; i++) {
    console.log(`O menor valor por enquanto é ${livros[menorValor].preco}`)
    // Se o preço do livro atual for menor que o preço de menor valor já comparado,
    // atualiza o livro de menor valor salvo
    if(livros[i].preco < livros[menorValor].preco) {
        menorValor = i
        console.log(`O menor valor agora é ${livros[menorValor].preco}`)
    }
}

console.log(`O livro mais barato custa: ${livros[menorValor].preco}`)