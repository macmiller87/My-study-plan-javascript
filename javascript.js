function CriarParagrafo() {

    let paragrafo = document.createElement('p');
    paragrafo.textContent = 'Você clicou no botão !';
    document.body.appendChild(paragrafo);
    
    const botoes = document.querySelectorAll('button');

    for(let looping = 0; looping < botoes.length; looping ++) {

        botoes[looping].addEventListener('click', CriarParagrafo);
    }
    
}