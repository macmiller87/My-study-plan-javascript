var btn = document.querySelector('button');

function random(number) {

  return Math.floor(Math.random()*(number+1));

}

btn.onclick = function() {

  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;

}   


const btn = document.getElementById('button2');

function random(number) {

    return Math.floor(Math.random()*number);

}

function bgChange() {

    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCol;   

}


/* Alguns exemplos de manipuladores de eventos */
 

btn.onfocus =  // A cor mudará quando o botão estiver focado e fora de foco

btn.ondblclick = // A cor só será alterada quando for clicada duas vezes.

btn.onmouseover = // A cor mudará quando o ponteiro do mouse for movido

btn.onmouseout = // A cor mudará quando o ponteiro do mouse sair de cima do botão

windown.onkeypress = // A cor mudará quando uma tecla for pressionada no teclado

  
/* Exemplo da mesma função com o uso da função addEventListener */
  
btn = document.querySelector('button');

function bgChange() {
  
    var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCol;
  
}

btn.addEventListener('click', bgChange);


/* Exemplo de uso da mesma função, com o uso de uma função anônima */

/* Exemplo do comando de evento de click removeEventListener */

btn.removeEventListener('click', bgChange); // Este comando poderia ser usado para remover o evento do botão

btn.addEventListener('click', function() {
  
    var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCol;
  
});


/* Exemplo de uso de um evento de click para chamar uma função */

myElement.addEventListener('click', functionA); // Exemplo que poderia chamar uma função e, evento de click.
myElement.addEventListener('click', functionB);


/* Exemplo de uso da mesma função com o objeto de evento */

function bgChange(e) {
  
    var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    e.target.style.backgroundColor = rndCol; // Comando target para direcionar o objeto de evento
    console.log(e);
  
}

btn.addEventListener('click', bgChange);
