//Split the array into halves and merge them recursively
function numberSort(array) {
  if (array.length === 1) {
    return array
  }
  const middle = Math.floor(array.length / 2)
  const leftArray = array.slice(0, middle)
  const rightArray = array.slice(middle)
  return mergeArray(
    numberSort(leftArray),
    numberSort(rightArray)
  
  )
};
// Compare the arrays item by item and return the concatenated result
function mergeArray (leftArray, rightArray) {
    let result = []
    let indexLeft = 0
    let indexRight = 0
    while (indexLeft < leftArray.length && indexRight < rightArray.length) {
      if (leftArray[indexLeft] < rightArray[indexRight]) {
        result.push(leftArray[indexLeft])
        indexLeft++
      } else {
        result.push(rightArray[indexRight])
        indexRight++
      }
    }
    return result.concat(leftArray.slice(indexLeft)).concat(rightArray.slice(indexRight))
  }
  const arrayOfNumbers = [-1,2, 5, 1, 3, 7, 4, 9, 8, 6]
  console.log(numberSort(arrayOfNumbers))

//  merge sort uses o(n log(n)) which is the most efficient since it uses the same amount of time regardless if the array is sorted,randomly
// sorted or sorted in reverse order.
