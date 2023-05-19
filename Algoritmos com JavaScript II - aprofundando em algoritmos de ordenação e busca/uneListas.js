const { editoraFla , editoraMengo } = require('./listasDeEditoras');

// A comparação e ordenação feita pela função só funciona
// corretamente quando recebe dois arrays já ordenados.
function uneListas(lista1, lista2){
    let listaFinal = []
    let posicaoAtualLista1 = 0
    let posicaoAtualLista2 = 0
    let posicaoAtualListaFinal = 0

    while(posicaoAtualLista1 < lista1.length && posicaoAtualLista2 < lista2.length){
        let produtoAtualLista1 = lista1[posicaoAtualLista1]
        let produtoAtualLista2 = lista2[posicaoAtualLista2]

        // console.log(`Comparando ${produtoAtualLista1.titulo} com ${produtoAtualLista2.titulo}`)

        if(produtoAtualLista1.preco < produtoAtualLista2.preco){
            listaFinal[posicaoAtualListaFinal] = produtoAtualLista1
            posicaoAtualLista1++
        } else {
            listaFinal[posicaoAtualListaFinal] = produtoAtualLista2
            posicaoAtualLista2++
        }

        posicaoAtualListaFinal++
    }

    while(posicaoAtualLista1 < lista1.length){
        listaFinal[posicaoAtualListaFinal] = lista1[posicaoAtualLista1]
        posicaoAtualLista1++
        posicaoAtualListaFinal++
    }

    while(posicaoAtualLista2 < lista2.length){
        listaFinal[posicaoAtualListaFinal] = lista2[posicaoAtualLista2]
        posicaoAtualLista2++
        posicaoAtualListaFinal++
    }

    return listaFinal;
}

console.log(uneListas(editoraFla, editoraMengo))