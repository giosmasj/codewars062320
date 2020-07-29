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

// In this little assignment you are given a string of space separated
// numbers, and have to return the highest and lowest number.

// Example:

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// 7kyu
// 07/01/2020

function highAndLow(numbers){
  numbers = numbers.split(" ");
  return Math.max.apply(null, numbers) + " " +  Math.min.apply(null, numbers)
}

// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is positive.

// Examples:

// findNextSquare(121) --> returns 144
// findNextSquare(625) --> returns 676
// findNextSquare(114) --> returns -1 since 114 is not a perfect
// 7kyu
// 07/14/2020

function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  return Math.sqrt(sq)%1===0 ? Math.pow(Math.sqrt(sq)+1,2) : -1
}

// best practice/refactored solution

function findNextSquare(sq) {
  return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);
}

// You live in the city of Cartesia where all roads are laid out in 
// a perfect grid. You arrived ten minutes too early to an appointment,
// so you decided to take the opportunity to go for a short walk.
// The city provides its citizens with a Walk Generating App on their
// phones -- everytime you press the button it sends you an array of
// one-letter strings representing directions to 
// walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block
// for each letter (direction) and you know it takes you one minute to
// traverse one city block, so create a function that will return true
// if the walk the app gives you will take you exactly ten
// minutes (you don't want to be early or late!) and will, of course,
// return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random
// assortment of direction letters ('n', 's', 'e', or 'w' only).
// It will never give you an empty array (that's not a walk, that's
// standing still!).
//6kyu
//07/20/2020

function isValidWalk(walk) {
  const walkVectorArray = walk.map(function(direction){
    if(direction === 'n'){
      return 1;
    }
    else if(direction === 's'){
      return -1;
    }
    else if (direction === 'e'){
      return 2;
    }
    else if (direction === 'w'){
      return -2;
    }
  });
  const walkVectorSum = walkVectorArray.reduce(function(a,b){return a + b},0);
  if(walkVectorSum === 0 && walk.length === 10){
    return true;
  }

// best practice

function isValidWalk(walk) {
  var dx = 0
  var dy = 0
  var dt = walk.length
  
  for (var i = 0; i < walk.length; i++) {
    switch (walk[i]) {
      case 'n': dy--; break
      case 's': dy++; break
      case 'w': dx--; break
      case 'e': dx++; break
    }
  }
  
  return dt === 10 && dx === 0 && dy === 0
}

// Take 2 strings s1 and s2 including only letters from ato z.
// Return a new sorted string, the longest possible, containing
// distinct letters, each taken only once - coming from s1 or s2.
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
// 7kyu
// 07/21/2020
// this is best practice
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

// another way to solve

function longest(s1, s2) {
  return Array.from(new Set(s1 + s2)).sort().join('')
}

// Create a function that returns the name of the winner in a fight
// between two fighters.

// Each fighter takes turns attacking the other and whoever kills
// the other first is victorious. Death is defined as having health <= 0.

// Each fighter will be a Fighter object/instance. See the Fighter class
// below in your chosen language.

// Both health and damagePerAttack (damage_per_attack for python)
// will be integers larger than 0. You can mutate the Fighter objects.

// Example:
// function Fighter(name, health, damagePerAttack) {
//         this.name = name;
//         this.health = health;
//         this.damagePerAttack = damagePerAttack;
//         this.toString = function() { return this.name; }
// }
// 7kyu
// 07/22/2020
// I sold my car today!!!!

function declareWinner(fighterA, fighterB, firstAttacker) {
  const args = Array.from(arguments);
  const fighters =  args.filter(arg => !arg[2]);  
  firstAttacker = fighters.find(fighter => fighter.name === firstAttacker);
  const secondAttacker = fighters.find(fighter => fighter.name != firstAttacker);

  do {
    secondAttacker.health = secondAttacker.health - firstAttacker.damagePerAttack;
    if (secondAttacker.health <= 0) {
      return firstAttacker.name;
    } else {
      firstAttacker.health = firstAttacker.health - secondAttacker.damagePerAttack;
    }
    if (firstAttacker.health <= 0) {
      return secondAttacker.name;
    }
  }
  while (secondAttacker.health >= 0 || firstAttacker.health >= 0 ); 
}

// refactored

function declareWinner(fighter1, fighter2, firstAttacker) {
  var fac1 = Math.ceil( fighter1.health / fighter2.damagePerAttack );
  var fac2 = Math.ceil( fighter2.health / fighter1.damagePerAttack );
  if(fac1 < fac2) {
    return fighter2.name;
  } else if(fac2 < fac1) {
    return fighter1.name;
  } else {
    return firstAttacker;
  }
}

// Write a function that takes an array of numbers (integers for the tests)
// and a target number. It should find two different items in the array
// that, when added together, give the target value. The indices of these
// items should then be returned in a tuple like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers;
// any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2
//   or greater, and all of the items will be numbers; target will always
//   be the sum of two different items from that array).

// Based on: http://oj.leetcode.com/problems/two-sum/

// twoSum [1, 2, 3] 4 === (0, 2)
// 7/24/2020
// 6 kyu

function twoSum(numbers, target) {
  for(let index1 = 0; index1 < numbers.length; index1++){
    for(let index2 = index1 + 1; index2 < numbers.length; index2++){
      if(numbers[index1] + numbers[index2] === target){
        return [index1, index2]
      }
    }
  }
}

// Jaden Smith, the son of Will Smith, is the star of films such as The
// Karate Kid (2010) and After Earth (2013). Jaden is also known for some
// of his philosophy that he delivers via Twitter. When writing on Twitter,
// he is known for almost always capitalizing every word. For simplicity,
// you'll have to capitalize each word, check out how contractions are
// expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden
// Smith. The strings are actual quotes from Jaden Smith, but they are not
// capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
// 7/27/2020
// 7kyu

String.prototype.toJadenCase = function () {
  function capitalizeFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return this.split(' ').map(capitalizeFirstLetter).join(' ')
}

// best practice

String.prototype.toJadenCase = function () { 
  return this.split(" ").map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
}

// An isogram is a word that has no repeating letters, consecutive or
// non-consecutive. Implement a function that determines whether a string
// that contains only letters is an isogram. Assume the empty string is an
// isogram. Ignore letter case.

// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case
// 7/28/2020
// 7kyu

function isIsogram(str){
  let i, j;
  str = str.toLowerCase();
  for(i = 0; i < str.length; i++) {
    for(j = i + 1; j < str.length; j++) {
      if(str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
}

// best practice

function isIsogram(str){ 
  return !/(\w).*\1/i.test(str)
}

// clever solution

function isIsogram(str){
  return new Set(str.toUpperCase()).size == str.length;
}

// repeat practice of TwotoOne
// Take 2 strings s1 and s2 including only letters from ato z.
// Return a new sorted string, the longest possible, containing
// distinct letters,

// each taken only once - coming from s1 or s2.

function longest(s1, s2) {
  return Array.from(new Set(s1 + s2)).sort().join('')
}

