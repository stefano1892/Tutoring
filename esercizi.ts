/**
    Task
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6

Input validation
If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.
*/

export function sumArray(array:number[] | null) : number {
    array = (array || [])
    if(array.length <= 1) {
        return 0
    }

    return array.sort((a, b) => a-b).slice(1, -1).reduce((acc, curNum) => acc + curNum, 0)
}

//

export function findAverage(array: number[]): number {
    return array.reduce((acc, curr) => acc + curr, 0) / array.length || 0
    // 0/0 = NaN 
  }

//

export function points(games : string[]): number {
    return games.reduce((acc, curr) => {
      const [resA, resB] = curr.split(":").map(Number)

      if (resA < resB) {
          return acc
      }

      const newScore = resA > resB ? 3 : 1

      return acc + newScore
    }, 0)
}

//

export class Kata {
    static getCount(str: string): number {
      const stringToArray = str.split("")
      const volwes = new Set(['a', 'e', 'i', 'o', 'u'])

      return stringToArray.reduce((acc, curr) => acc + Number(volwes.has(curr)), 0)
    }
  }