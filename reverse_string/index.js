//  -- Directions
//  Given a string, return a new string with the reversed order of characters
//  ---Examples
//  reverse('apple') === 'leppa'
//  reverse('hello') === 'olleh'

// First Approach

/*
Flow Diagram

Turn 'str' into an array

Call 'reverse' method on array

Join the array back into a string

Return the result

*/

function reverse(str) {
    const arr = str.split('');
    arr.reverse();
    return arr.join('');
}