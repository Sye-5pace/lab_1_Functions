//Task #1 String Transformation
export const strValid = (str: string) => {
  if (typeof str !== 'string') {
    throw new TypeError('Not a string');
  }
}
// a. captalize(str) 
export const capitalize = (str: string) => {
  strValid(str)
  return !str ? str : str.charAt(0).toUpperCase() + str.slice(1);
}
  
  // d. wordCount(str) 
export const wordCount = (str: string) => {
  strValid(str)
  const words = str.trim().split(/\s+/);
  return words.length;
}
  
  //b. reverse(str)
export const reverse = (str: string) => {
  strValid(str)
  let results: string = ''
  for( let i = str.length -1; i >=0; i--){
    results += str[i];
  }
  return results
}
  
  // c. isPalindrome(str) 
export const isPalindrome = (str: string) => {
  strValid(str)
  const cleanStr = str.replace(/\W/g, '').toLowerCase();
  return cleanStr === reverse(cleanStr);
}
  


// Task #2 Array transformations
export const arrValid = (arr: number[]) => {
    if(!Array.isArray(arr)){
        throw new TypeError('Input must be an array')
    }
}


// b. filterEven (arr)
export const filterEven = (arr: number[]) => {
  arrValid(arr);
  return arr.filter( num => num % 2 === 0);
}

// a. doubleArr (arr)
export const doubleArr = (arr: number[]) => {
  arrValid(arr)
  return arr.map( num => num * 2 );
}

// c. sumArr
export const sumArr = (arr: number[]) => {
    arrValid(arr);
    return arr.reduce((acc, num) => acc + num, 0); 
}

// d. avg(arr)
export const avgArr = (arr: number[]) => {
  arrValid(arr);
  if (arr.length === 0) {
    return 0;
  }
  const total = sumArr(arr);
  return total / arr.length;
}

 // Task #3 Object Transformation
export interface Person {
  firstName: string,
  lastName: string,
  age?: number 
}

const isAtLeast = (value: number | undefined, target: number): boolean => {
  return value !== undefined && value >= target;
}

export const fullName = (person : Person) : string => {
  return `${person.firstName?.trim() || ''} ${person.lastName?.trim() || ''}`;
}

export const isAdult = (person: Person): boolean => {
  return isAtLeast(person.age, 18);
};

export const filterByAge = (people: Person[], minAge: number): Person[] => {
  return people.filter(person => isAtLeast(person.age, minAge));
}

//Task #4
export const compose = <T>(...fns: ((arg: T) => T)[]): (arg: T) => T => {
  return (arg: T) => fns.reduceRight((result, fn) => fn(result), arg as T);
}
  
export const reverseAndCapitalize = compose(capitalize, reverse);
  



    
  


  
  
  
 
  
 


