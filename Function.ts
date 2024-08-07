//Task #1 String Transformation
 const strValid = (str: string) => {
  if (typeof str !== 'string') {
    throw new TypeError('Not a string');
  }
}
// a. captalize(str) 
export const capitalize = (str: string): string => {
  strValid(str);
  return str.replace(/\b\w/g, char => char.toUpperCase());
};
  
  // d. wordCount(str) 
export const wordCount = (str: string) => { 
  strValid(str)
  return str.trim() === '' ? 0 : str.trim().split(/\s+/).length
};

  
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
  return arr.filter(num => num % 2 !== 0);

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
  firstName?: string,
  lastName?: string,
  age?: number 
}

const isAtLeast = (value: number | undefined, target: number): boolean => {
  return value !== undefined && value >= target;
}

export const fullName = (person: Person) => {
  const firstName = person.firstName?.trim() || '';
  const lastName = person.lastName?.trim() || '';
  return (firstName + ' ' + lastName).trim();
};


export const isAdult = (person: Person): boolean => {
  return isAtLeast(person.age, 18);
};

export const filterByAge = (people: Person[], minAge: number): Person[] => {
  return people.filter(person => isAtLeast(person.age, minAge));
}

//Task #4
export const compose = (...functions: Array<(arg: string) => string>): ((input: string) => string) => 
  (input: string) => functions.reduceRight((acc, fn) => fn(acc), input);
  
export const reverseAndCapitalize = (str: string): string => {
  return str.split('').reverse().join('').toUpperCase();
};


    
  


  
  
  
 
  
 


