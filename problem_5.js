/**
 * Problem Statement:
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 * 
 * 
 * Problem URL: https://projecteuler.net/problem=5
 */

/**
 * Algorithm:
 * Create a function with no parmater or accepts no value.
 * Create a loop with the starting value as 2520.
 * Create an inner loop that starts from 1 to 20 and divides the number by iteration value from 1 to 20.
 * If number n is disible by every number in the iteration i.e. from 1 to 20, return that number.
 * If not, increment the number by one.
 */

 
  function solution(){
     var termination=false;
     var n = 2520;
     while(!termination){
        var divisible = true;
        for(i=11;i<=20;i++){
            if(n%i!=0){
                divisible = false;
            }
        }
        if(divisible){
            return n;
        }
        n+=20;
     }
 }
 console.log(solution());
 
 