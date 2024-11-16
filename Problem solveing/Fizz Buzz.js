    var fizzBuzz = function (n) {
        const outArray = [];
        for (let i = 1; i <=n; i++) {
            if (i % 3 == 0 && i % 5 == 0) {
                outArray.push("FizzBuzz");
            }
            else if (i % 3 == 0) {
                outArray.push("Fizz");
            }
            else if (i % 5 == 0) {
                outArray.push("Buzz");
            } else {
                outArray.push(i.toString());
            }
        }
        return outArray;
    }

    console.log(fizzBuzz(3));