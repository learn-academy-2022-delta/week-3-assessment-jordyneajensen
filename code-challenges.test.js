// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

describe("fibonacci", () => {
    const fibLength1 = 6
    // Expected output: [1, 1, 2, 3, 5, 8]
    const fibLength2 = 10
    // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    it("A function should return a Fibonacci array.", () => {
        expect(fibonacci(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
        expect(fibonacci(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
})



//ReferenceError: Fibonacci is not defined

// b) Create the function that makes the test pass.

//PseudoCode:
// Declare a function called Fibonacci.
// Set parameter to number.
// Use a for loop to iterate over the array.
// Create Fibonacci sequence code and push to array.
// Return fibArray.

// My code

const fibonacci = (number) => {
    let fibArray = [1, 1]
    for(let i=2; i<number; i++){
        fibArray.push(fibArray[i-2] + fibArray[i-1])
    }
    return fibArray
}
// PASS  ./code-challenges.test.js
// fibonacci
//   ✓ A function should return a Fibonacci array. (11 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.782 s, estimated 1 s

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

describe("onlyOdds", () => {
    it("returns a new array of only odd numbers sorted from least to greatest", ()=> {
        const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
        // Expected output: [-9, 7, 9, 199]
        const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
        // Expected output: [-823, 7, 23] 
        expect(onlyOdds(fullArr1)).toEqual([-9, 7, 9, 199])
        expect(onlyOdds(fullArr2)).toEqual([-823, 7, 23])
    })
})
//    ReferenceError: onlyOdds is not defined

// b) Create the function that makes the test pass.
//Pseudocode:
// Declare a function called onlyOdds.
// Set parameters of leastToGreatestArray.
// Use .filter to filter array for only values that are numbers and %2 to filter for only the odd numbers.
// Sort and return filteredArray.

const onlyOdds = (leastToGreatestArray) => {
    let filteredArray = leastToGreatestArray.filter(onlyOdds => {
        return typeof onlyOdds === "number" && onlyOdds%2 !== 0
    })
    return filteredArray.sort((a, b) => a-b)
}

// onlyOdds
//   ✓ returns a new array of only odd numbers sorted from least to greatest (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.382 s, estimated 1 s


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.


describe("sumOf", () => {
    it(" returns an array of the accumulating sum", ()=> {
        const numbersToAdd1 = [2, 4, 45, 9]
        // Excpected output: [2, 6, 51, 60]
        const numbersToAdd2 = [0, 7, -8, 12]
        // Expected output: [0, 7, -1, 11]
        const numbersToAdd3 = []
        // Expected output: []
        expect(sumOf(numbersToAdd1)).toEqual([2, 6, 51, 60])
        expect(sumOf(numbersToAdd2)).toEqual([0, 7, -1, 11])
        expect(sumOf(numbersToAdd3)).toEqual([])
    })
})

// ReferenceError: sumOF is not defined
// Make sure when copying and pasting syntax, you change the expect statement appropriately along with everything else.

// b) Create the function that makes the test pass.

//PseudoCode
// Declare a function called sumOf.
// Set parameter to arrayOfNumsToAdd.
// Set sum equal to 0.
// Use the higher order function .map to iterate over each array and return the sum of the nums in each array.


const sumOf = (arrayOfNumsToAdd) => {
    let sum = 0
    return arrayOfNumsToAdd.map(num => {
        return sum += num
    })
}

// sumOf
// ✓  returns an array of the accumulating sum

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.275 s, estimated 1 s
