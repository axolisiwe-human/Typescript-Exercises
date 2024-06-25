//Create a Person class with name and age properties. Implement a method to return
// the person's name.
class Person{
    name:string 
    age?:number

    names = (nam:string, ag?:number) =>{
        this.name = nam
        this.age = ag
        return nam
    }
}
console.log(names("Azola",5))