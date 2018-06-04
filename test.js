function fizzBuzzOne(n) {
    if (n % 15 === 0) {
        return "FizzBuzz";
    } else if (n % 3 === 0) {
        return "Fizz";
    } else if (n % 5 === 0) {
        return "Buzz";
    } else {
        return n;
    }
}

function fizzBuzzTwo(n) {
    return `${(n % 3 === 0 ? "Fizz" : "") + (n % 5 === 0 ? "Buzz" : "") || n}`;
}

function fizzBuzzThree(n) {
    const FIZZBUZZOBJ = {
        fizz: ["Fizz", "", ""],
        buzz: ["Buzz", "", "", "", ""]
    }
    return FIZZBUZZOBJ.fizz[n] + FIZZBUZZOBJ.buzz[n] || n;
}
