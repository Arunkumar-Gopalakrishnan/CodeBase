// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

function MultiplyNumber(num1,num2){
    var result = 0;
    if(typeof num1 === "number" && typeof num2 === "number")
    {
         result = num2 * num1;
    }else{

    result = "Please enter the valid Number"
    }
    
    return result;
}
console.log(MultiplyNumber(2,4));
console.log(MultiplyNumber(2,"a"));