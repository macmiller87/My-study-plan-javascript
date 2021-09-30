function CriarParagrafo() {

    let paragrafo = document.createElement('p');
    paragrafo.textContent = 'Você clicou no botão !';
    document.body.appendChild(paragrafo);
    
}

const buttons = document.querySelectorAll('button');

for(let looping = 0; looping < buttons.length; looping ++) {

    buttons[looping].addEventListener('click', CriarParagrafo);
}