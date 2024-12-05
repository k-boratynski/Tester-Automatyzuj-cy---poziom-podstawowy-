 /* Modfyfikatory dostępu */
  /*
  W TypeScript istnieją trzy główne modyfikatory dostępu, które można stosować do właściwości i metod klas: 
  public, private i protected.
  
  public(domyślnie):
    Dostępność: Właściwości i metody oznaczone jako public są dostępne z dowolnego miejsca
  */
 {
    class Person {
        public name: string;
      
        constructor(name: string) {
          this.name = name;
        }
      
        public greet() {
          return `Hello, ${this.name}`;
        }
      }
      
      const person = new Person("Alice");
      console.log(person.name); // Alice
      console.log(person.greet()); // Hello, Alice
    }
/* 
private:
Dostępność: Właściwości i metody oznaczone jako private są dostępne tylko wewnątrz klasy, 
w której zostały zadeklarowane. 
Nie można ich używać poza tą klasą.
*/
{
class Person {
    private age: number;
  
    constructor(age: number) {
      this.age = age;
    }
  
    private getAge() {
      return this.age;
    }
  
    public showAge() {
      return this.getAge();
    }
  }
  
  const person = new Person(30);
  // console.log(person.age); // Błąd: 'age' jest prywatne
  console.log(person.showAge()); // 30
}
  /*
  protected:
Dostępność: Właściwości i metody oznaczone jako protected są dostępne wewnątrz klasy, w której zostały zadeklarowane, 
oraz w klasach dziedziczących (subklasach
  */
class Person {
    protected age: number;
  
    constructor(age: number) {
      this.age = age;
    }
  }
  
  class Employee extends Person {
    constructor(age: number) {
      super(age);
    }
  
    public showAge() {
      return this.age;
    }
  }
  
  const employee = new Employee(25);
  console.log(employee.showAge()); // 25
  // console.log(employee.age); // Błąd: 'age' jest chronione
  

  /* Podsumowanie:
  public: Dostępne z dowolnego miejsca.
  private: Dostępne tylko wewnątrz klasy.
  protected: Dostępne wewnątrz klasy i klas dziedziczących.

  */