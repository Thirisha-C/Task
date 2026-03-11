var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var message = "Hello Sri";
// message = 10; 
console.log(message);
//array
var fruits = ['Apple', 'Orange', 'Banana'];
//function
function sub(a, b) {
    return a - b;
}
console.log(sub(4, 3));
var user = {
    name: "Sri",
    age: 22
};
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
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var p = new Person("Sriii", 22);
console.log(p);
//Access modifier
var Person2 = /** @class */ (function () {
    function Person2(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    Person2.prototype.showAge = function () {
        console.log(this.age);
    };
    return Person2;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employee.prototype.showSalary = function () {
        console.log(this.salary);
    };
    return Employee;
}(Person2));
var emp1 = new Employee("John", 25, 50000);
console.log(emp1.name);
emp1.showAge(); //25
emp1.showSalary(); //50000
//any type
var level;
level = 1;
console.log(level);
level = 'a';
console.log(level);
//Generics -  type will decide later
