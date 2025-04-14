let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);


// 2. Find Max Number and min number

let numbers = [5, 7, 67, 90, 23, 65];
let max = Math.max(...numbers);
let min = Math.min(44, 65, 87, 10, 1.5, 1)

console.log(max);
console.log(min);

// Find Even numers from array

let numbers2 = [1, 2, 3, 4, 5, 8, 7, 9];
let evenNumbers = numbers2.filter(num => num % 2 === 0);

console.log(evenNumbers);


// 4 number Question

let student = {
    name: "Abdullah",
    marks: [86, 90, 56],
    getTotalMarks: function () {
        return this.marks.reduce((total, mark) => total + mark, 0);
    }
};
console.log(student);

// 5 number Ans:

function reverseArray(arr) {
    return arr.reverse();
}

let sampleArray = [1, 2, 3, 4, 5];

console.log("Reversed Array:", reverseArray(sampleArray));