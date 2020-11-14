function reverse(str) {
    str.split('').reduce((reversed, character) => character + reversed, '');
}