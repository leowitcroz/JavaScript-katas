let numbers = [5,32,1,838,34,2,5,9,8,2,98,42,64];

let numbersAsc = numbers.sort(function(a, b) {
    return a - b;
});

console.log(numbersAsc); // [1, 2, 2, 5, 5, 8, 9, 32, 34, 42, 64, 98, 838]