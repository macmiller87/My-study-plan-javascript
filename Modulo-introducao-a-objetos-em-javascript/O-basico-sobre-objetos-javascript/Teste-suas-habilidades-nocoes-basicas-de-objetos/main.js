/*

Nesta tarefa, você recebe um literal de objeto e suas tarefas são

Armazene o valor da namepropriedade dentro da catNamevariável, usando a notação de colchetes.
Execute o greeting()método usando a notação de ponto (ele registrará a saudação no console do DevTools do navegador).
Atualize o colorvalor da propriedade para black.

*/ 

let cat = {

    name : 'Bertie',
    breed : 'Cymric',
    color : 'Black',
    
    greeting: function() {

      console.log('Meow!');
      
    }
  }
  
  // Put your code here
  let catName = ['Bertie'];
  
  
  
  // Don't edit the code below here
  
  let para1 = document.createElement('p');
  let para2 = document.createElement('p');
  
  para1.textContent = `The cat's name is ${ catName }.`;
  para2.textContent = `The cat's color is ${ cat.color }.`;
  
  section.appendChild(para1);
  section.appendChild(para2);
      