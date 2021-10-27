/* Exemplo de função do construtor Person, maneira correta de criar esse constutor se comparado ao exemplo do arquivo main.js */

function Person(first, last, age, gender, interests) {

    this.name = {

      'first': first,
      'last' : last

    };

    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function() {

      alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');

    };

    this.greeting = function() {
      alert('Hi! I\'m ' + this.name.first + '.');

    };
}


/* Aqui está sendo setado o objeto person1, e sendo passado seus atributos */

var person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);


/* Aqui está sendo chamado a funçaõ bio, e os parametros da função Person, e sendo atribuido ao objeto person1 */

person1['age']
person1.interests[1]
person1.bio()
// etc.