class Person{
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }
    getFullName(){
        return `${this.name} ${this.surname}`;
    }  
}

class Employee extends Person{
    constructor(name, surname, job, salary){
        super(name,surname);
        this.job = job;
        this.salary = salary;
    }
    getData(){
        return `${this.name} ${this.surname}  ${this.salary} ${this.job}`;
    }
    getSalary(){
        return `${this.salary}`;
    }
    increaseSalary(){
         this.salary = this.salary + this.salary * 0.1 ;
    }
}

class Developer extends Employee{
    constructor(name, surname, job, salary, specialization){
        super(name, surname, job, salary);    
        this.specialization = specialization;
    }
   getSpecialization (){
        return `${'This is my'} ${this.specialization}.`;
    }
}
      
class Manager extends Employee{
    constructor(name, surname, job, salary, department){
        super(name, surname, job, salary);
    this.department = department;
    }
   getDepartment(){
        return `${"This is my department"} ${this.department}`;
    }
   changeDepartment(newDepartment){
        this.department = newDepartment;
    }
}


const mirko = new Person("Mirko","Mitrovic");
// console.log(mirko.getFullName());
const employee1 = new Employee("Jana","Janic", "lekar", 1000);
// console.log(employee1.getSalary());
// console.log(employee1.increaseSalary());
// console.log(employee1.getFullName());
const developerFirst = new Developer ("Dejan", "Dejanovic", "Developer", 2000, "JavaScript");
console.log(developerFirst.getSpecialization());
console.log(developerFirst.getData());
console.log(developerFirst.getSalary());
const manager1 = new Manager("Milos", "Milosevic","director", 4000, "energetic");
console.log(manager1.getFullName());
console.log(manager1.getData());
console.log(manager1.changeDepartment("environmental"));


