/*Question 22 intentional Error: If you haven’t received an array index error in one of
 your programs yet, try to make one happen. Change an index in one of your programs to 
 produce an index error. Make sure you correct the error before closing the program.*/


const numbers: number[] = [1, 2, 3, 4, 5];

const invalidIndex = 10;
console.log("Attempting to access element at index", invalidIndex);
console.log("Element at index", invalidIndex, "is:", numbers[invalidIndex]);

const validIndex = 2;
console.log("Accessing element at index", validIndex);
console.log("Element at index", validIndex, "is:", numbers[validIndex]);




