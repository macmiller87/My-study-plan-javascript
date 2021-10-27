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



/* Também é possível declarar o objeto desta forma,  Exemplo de como pode ser de clarado um bojeto */


var person1 = new Object(); // Declaração da variavel person1 Com o método construtor Object(), que já torna a variavel person1 um objeto, sendo possível atribuir os seus atributos.


/* Neste caso estamos/atribuindo setando os atributos da variavel person1 acima */

person1.name = 'Chris';
person1['age'] = 38;

person1.greeting = function() {
  
alert('Hi! I\'m ' + this.name + '.');
  
};


/* Também podemos fazer deta forma e já definir o Object() na própia variavel, e já inserir seus atributos  */ 


var person1 = new Object({
  name: 'Chris',
  age: 38,
  
  greeting: function() {
    
    alert('Hi! I\'m ' + this.name + '.');
  }
});


/* Existe também o método create(), com esse método é possível criar um novo objeto apartir de um objeto já criado, no exemplo abaixo vamos criar um novo objeto apartir do objeto person1, e podemos utilizar os seus atributos */

var person2 = Object.create(person1); 


/* Aqui estamos fazendo a chamada do objeto person2, e utilizando o atributo que foi setado no person1 .... name */ 

person2.name
person2.greeting()
