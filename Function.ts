//Task #1
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