/**
 * Problem Statement:
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
 * What is the 10 001st prime number?

 * 
 * 
 * Problem URL: https://projecteuler.net/problem=7
 */

/**
 * Algorithm:
 * Create a function that accepts no parameters.
 * Create a variable to store the count of prime numbers.
 * Create a loop that iterates from 2 to onward.
 * The termination value for the loop is 10 001st and the variable to hold the count of prime numnbers.
 * Return that 10 001st prime number.
 */
const LIMIT = 10001;
 function solution(){
    var count = 0;
    var number = 2;
    while(count<=LIMIT){
        var flag = false;
        for(i=2;i<number;i++){
            if(number%i==0){
                flag = true;
                break;
            }
        }
        if(!flag){
            count++;
        }
        if(count<LIMIT){
            number++;
        }
    }
    return number;
}
console.log(solution());

