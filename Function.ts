//Task #1 String Transformation
const strValid = (str: string) => {
  if (typeof str !== 'string') {
    throw new TypeError('Not a string');
  }
}
// a. captalize(str) 
const capitalize = (str: string) => {
  strValid(str)
  return !str ? str : str.charAt(0).toUpperCase() + str.slice(1);
}
  
  // d. wordCount(str) 
const wordCount = (str: string) => {
  strValid(str)
  const words = str.trim().split(/\s+/);
  return words.length;
}
  
  //b. reverse(str)
const reverse = (str: string) => {
  strValid(str)
  let results: string = ''
  for( i = str.length -1; i >=0; i--){
    results += str[i];
  }
  return results
}
  
  // c. isPalindrome(str) 
const isPalindrome = (str) => {
  strValid(str)
  const cleanStr = str.replace(/\W/g, '').toLowerCase();
  return cleanStr === reverse(cleanStr);
}
  


// Task #2 Array transformations
const arrValid = (arr: number[]) => {
    if(!Array.isArray(arr)){
        throw new TypeError('Input must be an array')
    }
}


// b. filterEven (arr)
const filterEven = (arr: number[]) => {
  arrValid(arr)   ,
  return arr.filter( num => num % 2 === 0);
}

// a. doubleArr (arr)
const doubleArr = (arr: number[]) => {
  arrValid(arr)
  return arr.map( num => num * 2 );
}

// c. sumArr
const sumArr = (arr: number[]) => {
    arrValid(arr);
    return arr.reduce((acc, num) => acc + num, 0); 
}

// d. avg(arr)
const avgArr = (arr: number[]) => {
  arrValid(arr);
  if (arr.length === 0) {
    return 0;
  }
  const total = sumArr(arr);
  return total / arr.length;
}



  
  
  
 
  
 


