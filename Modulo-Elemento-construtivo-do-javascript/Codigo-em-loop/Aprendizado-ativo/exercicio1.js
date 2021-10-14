/* 

Nesse exercício, nós queremos que você imprima uma simples contagem regressiva na caixa de saída, de 10 até terminar. Especificamente, queremos que você:

- 1. Faça um loop de 10 até 0. Fornecemos à você um inicializador  — var i = 10;.
- 2. Para cada iteração, crie um novo parágrafo e o anexe à saída  <div>, que selecionamos usando var output = document.querySelector('.output');. Nos comentários, nós providenciamos a você três linhas de código que precisam ser usadas em algum lugar dentro do loop:

var para = document.createElement('p'); — cria um novo parágrafo.
output.appendChild(para); — anexa o parágrafo à saída <div>.
para.textContent = — faz o texto dentro do parágrafo ser igual ao que você coloca do lado direito, depois do sinal de igual.


- 3. Números de iteração diferentes exigem que texto diferente seja inserido no parágrafo para essa iteração (você precisará de uma declaração condicional e várias linhas para.textContent = ):

Se o número é 10, imprima "Contagem regressiva 10" no parágrafo.
Se o número é 0, imprima "Lançar!" no parágrafo.
Para qualquer outro número, apenas o imprima no parágrafo.

- 4. Lembre-se de incluir um iterador! No entanto, neste exemplo, estamos em contagem regressiva após cada iteração, e não progressiva, então você não vai querer usar i++ — como você itera para baixo?

*/

var output = document.querySelector('.output');
output.innerHTML = '';

var i = 10;

while(i >= 0) {
   
   if(i == 10) {

      var para = document.createElement('p');
      output.appendChild(para);
      para.textContent = "Contagem regressiva 10";

   }else if(i == 0) {

      var para = document.createElement('p');
      output.appendChild(para);
      para.textContent = "Lançar!";

    } else {

          var para = document.createElement('p');
          output.appendChild(para);
          para.textContent = i;
      
       }
   i--;
}