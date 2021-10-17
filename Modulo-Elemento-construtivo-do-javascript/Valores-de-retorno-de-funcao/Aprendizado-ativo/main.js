const input = document.querySelector('.numberInput');
const para1 = document.getElementById('p1');
const para2 = document.getElementById('p2');
const para3 = document.getElementById('p3');
const para4 = document.getElementById('p4');
const para5 = document.getElementById('p5');   

function squared(num) {

    return num * num;

  }
  
  function cubed(num) {

    return num * num * num;

  }

  function cubicle(num) {

    return  Math.cbrt(num); // Função Math.cbrt calcula a raiz cúbica do número

  }

  function circleCircumferencewithaRadius(num) {

    return 2 * Math.PI * num; // Função Math.PI calcula a circunferência de um número com raio 

  }
  
  function factorial(num) {

    var x = num;

    while (x > 1) {

      num *= x-1;
      x--;

    }

    return num;
}


input.onchange = function() {

    var num = input.value;

    if (isNaN(num)) { // Função isNaN testa a entrada do input, para verificar se foi digitado um número.

      para1.textContent = 'You need to enter a number!';

    }else {

      para1.textContent =  + num + ' squared is ' + squared(num) + '. ';
      para2.textContent =  + num + ' cubed is ' + cubed(num) + '. ';
      para3.textContent =  + num + ' cubicle is ' + cubicle(num).toFixed(2) + ' . '; // função toFixed limita quantidade desejada de casas após a virgula.
      para4.textContent =  + num + ' The circumference with radius is ' + circleCircumferencewithaRadius(num).toFixed(2) + ' . ';
      para5.textContent =  + num + ' factorial is ' + factorial(num) + '.';

    }

}
