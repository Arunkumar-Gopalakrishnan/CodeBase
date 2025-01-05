/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
   let number = num;
   let step = 0;
   let result = 0;
        if(number % 2 == 0)
        {
            result = number / 2;
            step +=1;
            if(result %2 != 0)
                {
                    result--;
                    step +=1;
                }
        }
        
    
return result;
};

console.log(numberOfSteps(14));