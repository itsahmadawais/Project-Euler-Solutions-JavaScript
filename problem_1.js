/**
 * Problem Statement:
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
 * The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000.
 *
 * Problem URL: https://projecteuler.net/problem=1
 */

function solution(n){
    var arr = [];
    for(i=2;i<n;i++){
        if(i%3==0 || i%5==0){
            arr.push(i);
        }
    }
    return arr.reduce((a,b)=>{
        return a+b
    });

}
console.log(solution(1000));