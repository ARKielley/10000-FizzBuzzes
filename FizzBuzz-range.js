function fizzBuzzRangeOne(min, max) {
    let result = [];
    for (let i = min; i <= max; i++) {
        if (i % 15 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(i);
        }
    }
    return result;
}

function fizzBuzzRangeTwo(min, max) {
    let result = [];
    for (let i = min; i <= max; i++) {
        result.push((i % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz") || i);
    }
    return result;
}

function fizzBuzzRangeThree(min, max) {
    const FIZZBUZZOBJ = {
        fizz: ["Fizz", "", ""],
        buzz: ["Buzz", "", "", "", ""]
    }
    let result = [];
    for (let i = min; i <= max; i++) {
        result.push(FIZZBUZZOBJ.fizz[i % 3] + FIZZBUZZOBJ.buzz[i % 5] || i);
    }
    return result;
}

function fizzBuzzRangeFour(min, max) {
    let result = [];
    const FIZZBUZZKEY = ["FizzBuzz",n,n,"Fizz",n,"Buzz","Fizz",n,n,"Fizz","Buzz",n,"Fizz",n,n]
    for (let i = min; i <= max; i++) {
        result.push(FIZZBUZZKEY[n % 15]);
    }
}

function fizzBuzzRangeFive(min, max) {
    return new Array(max - min + 1).fill("")
    .map((value, index) => ((index + min) % 3 ? "" : "Fizz")
    + ((index + min) % 5 ? "" : "Buzz" )
    || index + min)
}

function fizzBuzzRangeFiveB(min, max) {
    // Silliness for the sake of looking neat...
    return new Array(max - min + 1).fill("")
    .map((value, index) => value + ((index + min) % 3 ? "" : "Fizz"))
    .map((value, index) => value + ((index + min) % 5 ? "" : "Buzz" ))
    .map((value, index) => value || index + min)
}