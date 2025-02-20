'use strict'

async function pesquisarPosters(titulo) {
    const url = `https://imdb.iamidiotareyoutoo.com/search?q=${titulo}`
    const response = await fetch(url)
    const data = await response.json()
    const listaFilmes = []
    const filmes = data.description
    filmes.forEach(function (filmesItem) {
        listaFilmes.push(filmesItem["#IMG_POSTER"])
    })
    console.log(listaFilmes)
    
    return listaFilmes 
}

async function preencherPosters() {
    const titulo = document.getElementById('filme').value
    const posters = await pesquisarPosters(titulo)
    const galeria = document.getElementById('galeria')
    galeria.replaceChildren('')  
    posters.forEach(criarPoster) 
}

function criarPoster (link) {
    const galeria = document.getElementById('galeria')
    const novoPoster = document.createElement('img')
    novoPoster.src = link
    galeria.appendChild(novoPoster)
}

document.getElementById('pesquisar').addEventListener('click', preencherPosters)
