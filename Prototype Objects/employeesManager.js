function Person(name, surname){
    this.name = name;
    this.surname = surname;
}
Person.prototype.getFullName = function(){
    return this.name + " " + this.surname;
}
function Employee(name, surname, job, salary){
    Person.call(this, name, surname);
    this.job = job;
    this.salary = salary;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;
Employee.prototype.getData = function(){
    return this.name+ " " + this.surname +" "+ this.salary + " " + this.job;
}
Employee.prototype.getSalary = function(){
    return this.salary;
}
Employee.prototype.increaseSalary = function (){
     this.salary = this.salary + this.salary * 0.1 ;
}
function Developer(name, surname, job, salary, specialization){
    Employee.call(this, name, surname, job, salary);
    this.specialization = specialization;
}
    Developer.prototype = Object.create(Employee.prototype);
    Developer.prototype.constructor = Developer;
    
    Developer.prototype.getSpecialization = function (){
        return "This is my " + this.specialization + ".";
    }
function Manager(name, surname, job, salary, department){
    Employee.call(this, name, surname, job, salary);
    this.department = department;
}

    Manager.prototype = Object.create(Employee.prototype);
    Manager.prototype.constructor = Manager;

Manager.prototype.getDepartment = function(){
    return "This is my department " + this.department;
}
Manager.prototype.changeDepartment = function(newDepartment){
    
   this.department = newDepartment;
}
var mirko = new Person("Mirko","Mitrovic");
// console.log(mirko.getFullName());
var employee1 = new Employee("Jana","Janic", "lekar", 1000);
// console.log(employee1.getSalary());
// console.log(employee1.increaseSalary());
// console.log(employee1.getFullName());
var developerFirst = new Developer ("Dejan", "Dejanovic", "Developer", 2000, "JavaScript");
console.log(developerFirst.getSpecialization());
console.log(developerFirst.getData());
console.log(developerFirst.getSalary());
var manager1 = new Manager("Milos", "Milosevic","director", 4000, "energetic");
console.log(manager1.getFullName());
console.log(manager1.getData());
console.log(manager1.changeDepartment("environmental"));


