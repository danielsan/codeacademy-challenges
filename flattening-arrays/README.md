# [Challenge] Flatten an Array ♭
https://discuss.codecademy.com/t/challenge-flatten-an-array/218659

## Basic Difficulty

> Write a function, flattenArray, that when given an 2D11 array, flattens it into a 1D4 array

* **Function Name**: flattenArray
* **Input**: a 2D array
* **Output**: a 1D array
* **Example**: flattenArray([1,2,3, [4,5], 6, [7,8], 9]) => [1,2,3,4,5,6,7,8,9]
* Always remember to explain your code and the thought processes behind it!
* You can think of a 2D array as a spreadsheet or a chessboard, whereas a 1D array is more like a list or one long chain of data.

My solution [flatten-array-basic.js](flatten-array-basic.js)

## Intermediate difficulty

> Improve on the flattenArray function by writing flattenArrayN, a function that can can flatten arrays that are nested n-levels deep, returning a flattened 1D array.
* **Function Name**: flattenArrayN
* **Input:** any array with n levels of depth, where n is an integer ≥1
* **Output:** a 1D array
* **Example:** flattenArrayN([1, 2, [3, [4, 5]], 6])) => [1, 2, 3, 4, 5, 6]
For our intermediate challenge, the array can have multiple types: {}, [], "", undefined, null, and integers (1,2,3,…) are all valid types inside the array.
You must explain your submission to be able to win!

My solution [flatten-array-n-intermediate.js](flatten-array-basic.js)