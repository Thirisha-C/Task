let message: string = "Hello Sri";
// message = 10; 
console.log(message); 

//array

let fruits: String[] = ['Apple', 'Orange', 'Banana'];

//function

function sub(a:number, b:number) : number{
    return a-b;
}
console.log(sub(4,3));

//interfaces - define the obj structure

interface User {
    name: String,
    age: number
}
let user: User = {
    name: "Sri",
    age: 22
}
console.log(user);

/* //class

class Person {
  name1: string
  age1: number
}

let p = new Person()

p.name1 = "Ram"
p.age1 = 22

console.log(p); */

//constructor

class Person {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

let p = new Person("Sriii", 22)

console.log(p)

//Access modifier

class Person2 {

  public name: string //anywhere access
  private age: number //access only inside the class, child cls not access
  protected salary: number // access class, child class

  constructor(name: string, age: number, salary: number) {
    this.name = name
    this.age = age
    this.salary = salary
  }

  showAge() {
    console.log(this.age)
  }
}

class Employee extends Person2 {

  showSalary() {
    console.log(this.salary)
  }

}

let emp1 = new Employee("John", 25, 50000)

console.log(emp1.name) 
emp1.showAge() //25
emp1.showSalary() //50000

//any type

let level : any;
level = 1;
console.log(level);
level = 'a';
console.log(level);

//tuples

let user1 : [number, string] = [1, 'John']; //fixed length array

//Enums - list of related constants
