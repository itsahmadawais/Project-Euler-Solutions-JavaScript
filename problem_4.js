/**
 * Problem Statement:
 * A palindromic number reads the same both ways. The largest palindrome made from the product of
 * two 2-digit numbers is 9009 = 91 × 99.
 * Find the largest palindrome made from the product of two 3-digit numbers.
 * 
 * Problem URL: https://projecteuler.net/problem=4
 */

/**
 * Algorithm:
 * Create a function that accepts no value.
 * Create a loop that starts with starting value 100 and works and executes till 999.
 * Create an inner loop that starts with the outer loops loop and executes till 999.
 * Convert the number to String and reverse it as well and check if both; the string and the reversed string's value is same.
 * If the values are same, push them to the array.
 * After the loops termination, return the maximum number in the array.
 */

const START_VALUE=100;
const LIMIT = 999;
 function solution(){
    var arr = [];
    for(i=START_VALUE;i<=LIMIT;i++){
        for(j=i;j<=999;j++){
            var val = i*j;
            if(val.toString()==(val.toString().split("").reverse().join(""))){
                arr.push(val);
            }
        }
    }
    return Math.max(...arr);
}
console.log(solution());

