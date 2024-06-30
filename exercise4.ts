//Create a Person class with name and age properties. Implement a method to return
// the person's name.
class Person{
    name:string 
    age:number

    constructor (nam:string, ag:number){
        this.name = nam
        this.age = ag
}
let accessor = new Person('nsme',4)

console.log(accessor.names)