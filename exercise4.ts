//Create a Person class with name and age properties. Implement a method to return
// the person's name.
class Person{
    private name:string 
    private age:number
    private socialSecurityNumber:number

    constructor (nam:string, ag:number){
        this.name = nam
        this.age = ag
    }
    func_name = (nam:string) => {
        nam = "Human Bakishi"
        accessor.name = nam
        return accessor.name
    }
    func_age = (ag:number) => {
        ag = 24
        accessor.age = ag
        return accessor.age
    }
}
let accessor = new Person("Name",0)

console.log(accessor.func_name(""))
console.log(accessor.func_age(0))