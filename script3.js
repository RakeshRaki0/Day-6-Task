//3.Write a “person” class to hold all the details

class Person{
    constructor(name,age,gender,email,city){
        this.name= name;
        this.age = age;
        this.gender = gender;
        this.email = email;
        this.city = city;
    }
getperson(){
    return `${this.name}, ${this.age}, ${this.gender}, ${this.email},${this.city}`
}
}
var details = new Person("Raki", "25", "male", "rakeshraki2235@gmail.com ", "Trichy")
console.log(details.getperson());