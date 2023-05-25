function estPalindrome(mot) {
    if (mot.length < 2) {
        return true;
    } else if (mot[0] !== mot[mot.length - 1]) {
        return false;
    } else {
        return estPalindrome(mot.substring(1, mot.length - 1));
    }
}

console.log(estPalindrome("kayak"));  
console.log(estPalindrome("radar"));  
console.log(estPalindrome("javascript"));  
