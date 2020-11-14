/**
 * Create a empty string called 'reversed'
 * for each character in the provided string
 * Take the character and add it to the start of 'reversed'
 * Return the variable 'reversed'
 */

function reverse(str) {
    let reveresed = '';

    for (let character of str) {
        reversed = character + reveresed;
    }
    return reveresed;
}