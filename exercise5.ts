class Calculator{
    sum : number
    difference: number
    product:number
    quotient: number

    constructor(summ:number,differenc:number,prodct:number,quot:number){
        this.sum = summ
        this.difference = differenc
        this.product = prodct
        this.quotient = quot
    }
} 

let user = new Calculator(0,0,0,0)

//functios
let addition = (num1:number, num2:number)=>{
    if(isNaN(num1) || isNaN(num2)){
        
        console.log("Only numbers are allowed")

    }
    else{
       return  user.sum = num1 + num2
        
    }
    //return user.sum
}
let subtration = (num1:number, num2:number)=>{
    return user.difference = num1 - num2
}
let multiplication = (num1:number, num2:number)=>{
    return user.product = num1 * num2
}
let division = (num1:number, num2:number)=>{
    if(num2 == 0){
        console.log("Cannot divide by 0")
    }
    else{
       return user.quotient = num1 / num2

    }
}



//print
console.log(addition(3,5))
console.log(subtration(5,4))
console.log(multiplication(2,6))
console.log(division(10,0))