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