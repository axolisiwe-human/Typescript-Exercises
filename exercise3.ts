//Write a function that takes two numbers as parameters and returns their sum
let sum_func = (num1:number, num2:number) =>{
    return num1 + num2
}
console.log(sum_func(5,5))

//Write a function that returns a fixed number



//Write a function that takes a string and an optional boolean parameter. If the boolean
//is true, return the string in uppercase; otherwise, return it in lowercase.

let caps = (names:string, options?:boolean) =>{
    if(options==true){
        return names.toLocaleUpperCase
    }
    else{
        return names.toLocaleLowerCase
    }
}
console.log(caps('unkown', true))