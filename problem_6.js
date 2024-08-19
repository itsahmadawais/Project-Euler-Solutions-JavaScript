/**
 * Problem Statement:
 * The sum of the squares of the first ten natural numbers is,
 * The square of the sum of the first ten natural numbers is,
 * Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is
 * Find the difference between the sum of the squares of the first one hundred natural numbers and the square of 
 * the sum.
 * 
 * 
 * Problem URL: https://projecteuler.net/problem=6
 */

/**
 * Algorithm:
 * Create a function with no parmater or accepts no value.
 * Create a variable sum to hold the data of square of the sum of the first one hundred natural numbers.
 * Create a variable sum_whole_square to hold the data of the square of the sum of the first one hundred natural
 * numbers.
 * Create a loop to iterate from 1 to 100 and takes square and sums up the value and store in sum.
 * Within the same loop, sums up the iteration value and after the loops end, take a square of the sum_whole_square.
 * Return the difference between sum_whole_sqaure and sum.
 */

 const LIMIT = 100;
 function solution(){
    var sum = 0;
    var sum_whole_square = 0;
    for(i=1;i<=LIMIT;i++){
        sum = sum + i * i;
        sum_whole_square+=i;
    }
    sum_whole_square*=sum_whole_square;
    return sum_whole_square - sum;
}
console.log(solution());

