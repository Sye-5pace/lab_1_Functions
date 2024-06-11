//Task #1 String Transformation
// a. captalize(str) 
const captalize = (str) => {
    if( typeof str !== string){
        throw new TypeError ('Not a string')
    }

    return !str ? str : str.charAt(0).toUpperCase() + str.slice(1);
}

// d. wordCount(str) 
const wordCount = (str) => {
    if (typeof str !== 'string') {
      throw new TypeError('Not a string');
    }
    const words = str.trim().split(/\s+/);
    return words.length;
}

//b. reverse(str)
const reverse = (str) => {
    if (typeof str !== 'string') {
      throw new TypeError('Not a string');
    }
    return str.split('').reverse().join('');
}

// c. isPalindrome(str) 
const isPalindrome = (str) => {
    if (typeof str !== 'string') {
      throw new TypeError('Input must be a string');
    }
    const cleanStr = str.replace(/\W/g, '').toLowerCase();
    return cleanStr === reverse(cleanStr);
}


// Task #2 Array transformations
const arrValid = (arr) => {
    if(!Array.isArray(arr)){
        throw new TypeError('Input must be an array')
    }
}


// b. filterEven (arr)
const filterEven = (arr) = > {
  arrValid(arr)   
  return arr.filter( num => num % 2 !== 0)
}

// a. doubleArr (arr)
const doubleArr = (arr) => {
  arrValid(arr)
  return arr.map( num => num * 2 );
}

// c. sumArr
const sumArr = (arr) => {
    arrValid(arr)
}