/**
 * Problem Statement:
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143 ?

 * 
 * Problem URL: https://projecteuler.net/problem=3
 */

/**
 * Algorithm:
 * Create a function that accepts one value.
 * Create a loop that starts from the 2 and keep going unless a ternary value is found to terminate the loop.
 * Check the largest prime number in the array and return that element.
 */

function solution(n){
    var arr = [];
    var divisor = 2;
    while(divisor!==-1){
        if(n==1){
            divisor=-1;
        }
        else if(n%divisor==0){
            n=n/divisor;
            arr.push(divisor);
        }
        else{
            divisor++;
        }
    }
    return Math.max(...arr);
}
console.log(solution(600851475143));

