/* Exemplo de uso de função simples para contrução de uma pessoa e seus atributos */

function createNewPerson(name) {

  var obj = {};
  obj.name = name;
  obj.greeting = function() {
  
    alert('Hi! I\'m ' + obj.name + '.');
    
  };
  
  return obj;
}

/* Exemplo de como chamar essa função no console do desenvolovedor no Brownser */

var salva = createNewPerson('Salva');
salva.name;
salva.greeting();



/* Exemplo da mesma função anterior, mas com o construtor THIS, uma escolha mais inteligente */

function Person(name) {

  this.name = name;
  this.greeting = function() {
  
    alert('Hi! I\'m ' + this.name + '.');
    
  };
}


/* Exemplo de como criar a chamada do construtor para criar objetos */ 


var person1 = new Person('Bob');
var person2 = new Person('Sarah');


/* Exemplo de como chamar essa função no connsole do desenvolvedor no Brownser */

person1.name
person1.greeting()
person2.name
person2.greeting()


/* Método usado para chamar os objetos  greeting() */

greeting()
