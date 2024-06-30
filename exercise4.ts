//Create a Person class with name and age properties. Implement a method to return
// the person's name.
class Person{
    name:string 
    age:number

    constructor (nam:string, ag:number){
        this.name = nam
        this.age = ag
    }
}
let accessor = new Person("Name",0)

let func_name = (nam:string) => {
    nam = "Human Bakishi"
    accessor.name = nam
    return accessor.name
}
let func_age = (ag:number) => {
    ag = 24
    accessor.age = ag
    return accessor.age
}

console.log(func_name(""))
console.log(func_age(0))