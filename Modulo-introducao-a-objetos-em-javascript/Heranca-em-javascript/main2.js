/* Exemplo de como criar uma classe, o método constructor, e os métodos greeting() e farewell() são métodos de classe. */ 

class Person {

    constructor(first, last, age, gender, interests) {

      this.name = {
        first,
        last
      };

      this.age = age;
      this.gender = gender;
      this.interests = interests;

    }
  
    greeting() {

      console.log(`Hi! I'm ${this.name.first}`);

    };
  
    farewell() {

      console.log(`${this.name.first} has left the building. Bye for now!`);

    };
}
  

/* Exemplo de como está sendo instanciada as instâncias do objeto new */

let han = new Person('Han', 'Solo', 25, 'male', ['Smuggling']);
han.greeting();
// Hi! I'm Han

let leia = new Person('Leia', 'Organa', 19, 'female', ['Government']);
leia.farewell();
// Leia has left the building. Bye for now


/* Exemplo de como criar uma subclasse usando o comando extends */

class Teacher extends Person {

    constructor(first, last, age, gender, interests, subject, grade) {

      this.name = {

        first,
        last

      };
  
     this.age = age;
     this.gender = gender;
     this.interests = interests;
     // subject and grade are specific to Teacher
     this.subject = subject;
     this.grade = grade;

    }
}

/* Exemplo de como utilizar o comando super, Isso chamará o construtor da classe pai e herdará os membros que especificarmos como parâmetros de super(), desde que sejam definidos lá:  */


class Teacher extends Person {

    constructor(first, last, age, gender, interests, subject, grade) {

      super(first, last, age, gender, interests);
  
      // subject and grade are specific to Teacher
      this.subject = subject;
      this.grade = grade;

    }
}
  
/* Exemplo de como está sendo chamado os métodos e propriedades definidos em Teacher e Person, como seria de esperar:  */


let snape = new Teacher('Severus', 'Snape', 58, 'male', ['Potions'], 'Dark arts', 5);
snape.greeting(); // Hi! I'm Severus.
snape.farewell(); // Severus has left the building. Bye for now.
snape.age // 58
snape.subject; // Dark arts


/* Exemplo de como trabalhar com Getters e Setters */


class Teacher extends Person {

    constructor(first, last, age, gender, interests, subject, grade) {

      super(first, last, age, gender, interests);
      // subject and grade are specific to Teacher
      this._subject = subject;
      this.grade = grade;

    }
  
    get subject() {

      return this._subject;

    }
  
    set subject(newSubject) {

      this._subject = newSubject;
      
    }
}

/* Exemplo de como visualizar o _subject */

/* 

Check the default value
console.log(snape.subject) // Returns "Dark arts"

Change the value
snape.subject="Balloon animals" // Sets _subject to "Balloon animals"

Check it again and see if it matches the new value
console.log(snape.subject) // Returns "Balloon animals"

 */
  

// Check the default value
console.log(snape.subject) // Returns "Dark arts"

// Change the value
snape.subject="Balloon animals" // Sets _subject to "Balloon animals"

// Check it again and see if it matches the new value
console.log(snape.subject) // Returns "Balloon animals"
