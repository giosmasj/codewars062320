// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
// 8kyu
// 06/23/2020

const quarterOf = (month) => {
    if(month >= 1 && month <= 3){
    return 1
    }
    if(month >= 4 && month <= 6){
    return 2
    }
    if(month >= 7 && month <= 9){
    return 3
    }
    if(month >= 10 && month <= 12){
    return 4
    }
    else return "what calendar you got?!"
  }

  // In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
  // 7kyu
  // 06/24/2020

function filter_list(l) {
    return l.filter(l => {
      if (typeof l == 'string') return null
      else return l || l === 0
    })
  }
// Alternate Solution for 06/24/2020
function filter_list(l) {
  return l.filter( e => (typeof e != 'string'))
}

// Given an array of integers your solution should find the smallest integer.
// For example:
// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.
// 8kyu
// 06/25/2020

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
    }
  }


// Create a function named divisors/Divisors that takes an integer n > 1 and returns
// an array with all of the integer's divisors(except for 1 and the number itself),
// from smallest to largest. If the number is prime return the string '(integer) is prime'
// (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// Example:
// divisors(12); should return [2,3,4,6]
// divisors(25); should return [5]
// divisors(13); should return "13 is prime"

function divisors(integer) {
  arr = [];
   for (var i=2;i<integer;i++){
    if (integer % i === 0){
     arr.push(i);
     }
     } if (arr.length === 0) {
        return `${integer} is prime`;
     } else {
        return arr;
     }
  }

// refactored (best practice) solution

function divisors(integer) {
  var res = []
  for (var i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i == 0) res.push(i);
  return res.length ? res : integer + ' is prime'
};

// Bob is preparing to pass IQ test. The most frequent task in this
// test is to find out which one of the given numbers differs from the
// others. Bob observed that one number usually differs from the others
// in evenness. Help Bob — to check his answers, he needs a program that
// among the given numbers finds one that is different in evenness, and
// return a position of this number.
// ! Keep in mind that your task is to help Bob solve a real IQ test,
// which means indexes of the elements start from 1 (not 0)
// Test samples:
// iqTest("2 4 7 8 10") => 3 Third number is odd, while the rest of the
// numbers are even
// iqTest("1 2 1 1") => 2 Second number is even, while the rest of the
// numbers are odd
// 6kyu
// 06/30/2020

function iqTest(numbers){
  let numArr = numbers.split(' ');
  let oddArr = [];
  let evenArr = [];
  for(let i = 0; i < numArr.length; i ++){
    if(numArr[i] % 2) {
      oddArr.push(i + 1)
      } else {
        evenArr.push(i + 1)
      }
    }
    if(oddArr.length === 1) {
      return oddArr[0]
    } else {
      return evenArr[0]
    }
}
// Best Practice
function iqTest(numbers){
  numbers = numbers.split(" ").map(function(el){return parseInt(el)});
  
  var odd = numbers.filter(function(el){ return el % 2 === 1});
  var even = numbers.filter(function(el){ return el % 2 === 0});
  
  return odd.length < even.length ? (numbers.indexOf(odd[0]) + 1) : (numbers.indexOf(even[0]) + 1);
}