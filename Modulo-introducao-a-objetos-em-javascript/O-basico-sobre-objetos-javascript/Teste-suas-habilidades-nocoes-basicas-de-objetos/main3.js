/*

Finalmente, para a nossa avaliação básica do objeto, queremos que você retorne ao catliteral do objeto da Tarefa # 1. Queremos que você reescreva o greeting()método para que ele registre "Hello, said Bertie the Cymric."no console do navegador DevTools, mas de uma forma que funcione em qualquer objeto gato da mesma estrutura, independentemente de seu nome ou raça.

Quando estiver pronto, escreva seu próprio objeto chamado cat2, que tem a mesma estrutura, exatamente o mesmo greeting()método, mas um diferente name, breede color.

Chame ambos os greeting()métodos para verificar se eles registram as saudações apropriadas no console.

O código não é muito SECO(cada bit de código deve ser definido apenas uma vez) - você tem o mesmo método definido duas vezes, por exemplo. Descreva como você o tornaria mais SECO? Se você não tem certeza, não se preocupe - é isso que veremos em artigos futuros da série!

*/

let cat = {

    name : 'Bertie',
    breed : 'Cymric',
    color : 'white',
  
    greeting: function() {
  
      console.log('Hello, said Bertie the Cymric.!');
  
    }
}
  
let cat2 = {
  
    name: 'Macmiller',
    breed: 'Javascript',
    color: 'Amarelo',
  
    greeting1: function() {
  
      console.log('Meow!'); 
  
    }
  
}
      