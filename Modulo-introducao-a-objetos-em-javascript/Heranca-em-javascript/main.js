const input = document.querySelector('input');
const btn = document.querySelector('button');
const para = document.querySelector('p');

btn.onclick = function() {

  const code = input.value;
  para.textContent = eval(code);

}

function Person(first, last, age, gender, interests) {

  this.name = {
    first,
    last
  };

  this.age = age;
  this.gender = gender;
  this.interests = interests;

};

Person.prototype.bio = function() {
  // First define a string, and make it equal to the part of
  // the bio that we know will always be the same.
  let string = this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. ';
  // define a variable that will contain the pronoun part of
  // the second sentence
  let pronoun;

  // check what the value of gender is, and set pronoun
  // to an appropriate value in each case
  if(this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {

    pronoun = 'He likes ';

  } else if(this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {

    pronoun = 'She likes ';

  } else {

    pronoun = 'They like ';

  }

  // add the pronoun string on to the end of the main string
  string += pronoun;

  // use another conditional to structure the last part of the
  // second sentence depending on whether the number of interests
  // is 1, 2, or 3
  if(this.interests.length === 1) {

    string += this.interests[0] + '.';

  } else if(this.interests.length === 2) {

    string += this.interests[0] + ' and ' + this.interests[1] + '.';

  } else {
    // if there are more than 2 interests, we loop through them
    // all, adding each one to the main string followed by a comma,
    // except for the last one, which needs an and & a full stop
    for(let i = 0; i < this.interests.length; i++) {

      if(i === this.interests.length - 1) {

        string += 'and ' + this.interests[i] + '.';

      } else {

        string += this.interests[i] + ', ';

      }
    }
  }

  // finally, with the string built, we alert() it
  alert(string);
};

Person.prototype.greeting = function() {

  alert('Hi! I\'m ' + this.name.first + '.');

};

Person.prototype.farewell = function() {

  alert(this.name.first + ' has left the building. Bye for now!');

}

let person1 = new Person('Tammi', 'Smith', 17, 'female', ['music', 'skiing', 'kickboxing']);

/* Definindo uma função construtora Teacher */
/* Aqui está sendo criado uma classe chamada Teacher para herdar da classe Person com os mesmos parametros  */

function Teacher(first, last, age, gender, interests, subject) {

  Person.call(this, first, last, age, gender, interests); // a função call(). Esta função basicamente permite chamar uma função definida em outro lugar, mas no contexto atual, O primeiro parâmetro especifica o valor this que você deseja usar ao executar a função

  this.subject = subject;  // Uma nova propriedade, subject — isso irá conter o assunto que o professor ensina, A última linha dentro do construtor simplesmente define a nova propriedade subject que os professores terão, que pessoas genéricas não possuem.

}

/* Definido o protótipo e referência de construtor do Teacher  */

Teacher.prototype = Object.create(Person.prototype); // Aqui nosso amigo create() vem para o resgate novamente. Nesse caso, estamos usando para criar um novo objeto e torná-lo o valor de Teacher.prototype. O novo objeto tem Person.prototype como seu protótipo e, portanto, herdará, se e quando necessário, todos os métodos disponíveis no Person.prototype.


/* Aqui está sendo  Setado a classe Teacher, e sendo passado os métos Object.defineProperty => que está definindo que Teacher é uma nova classe e vai herdar os parametros da classe Person, também está sendo passado os seguintes parametros Teacher.prototype, 'constructor', com o prototype e o contructor dando liberdade para classe Teacher pode implementar seus própios parametors e métoods */

Object.defineProperty(Teacher.prototype, 'constructor', {

  value: Teacher,
  enumerable: false, // so that it does not appear in 'for in' loop
  writable: true 

});


/* Aqui estamos dando a classe Teacher, uma nova função greeting, e passando suas regras */

Teacher.prototype.greeting = function() {

  var prefix;

  if(this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {

    prefix = 'Mr.';

  }else if(this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {

    prefix = 'Mrs.';

  }else {

    prefix = 'Mx.';

  }

  alert('Hello. My name is ' + prefix + ' ' + this.name.last + ', and I teach ' + this.subject + '.');
};


/* Aqui estamos criando uma instância de objeto do Teacher */

var teacher1 = new Teacher('Dave', 'Griffiths', 31, 'male', ['football', 'cookery'], 'mathematics');


/* Aqui está se fazendo a chamada dos parametros e da classe Teacher */

teacher1.name.first;
teacher1.interests[0];
teacher1.bio();
teacher1.subject;
teacher1.greeting();
teacher1.farewell();


/* Aqui estamos implementando a classe Student, que foi proposto no modelo do objeto, no tópico Javascript orientado a objetos para iniciantes */

function Student(first, last, age, gender, interests,) {

  Person.call(this, first, last, age, gender, interests);

}

Student.prototype = Object.create(Person.prototype);


Student.prototype.greeting = function() {

  var pronoun2;

  if(this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {

    pronoun2 = 'He likes ';

  } else if(this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {

    pronoun2 = 'She likes ';

  } else {

    pronoun2 = 'They like ';

  }

  alert('YO! I\'m ' + this.name.first + '.'); 

};

var student1 = new Student('Macmiller', 'Duarte', 34, 'Male', ['Programin', 'Jiu-jitsu', 'Game']);

student1.name.first;
student1.interests[0];
student1.bio();
student1.greeting();
student1.farewell();
