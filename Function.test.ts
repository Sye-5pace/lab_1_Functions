import {
    capitalize,
    reverse,
    isPalindrome,
    wordCount,
    filterEven,
    doubleArr,
    sumArr,
    avgArr,
    fullName,
    isAdult,
    filterByAge,
    compose,
    reverseAndCapitalize,
    Person
} from './Function';

describe('String Manipulation Functions', () => {
    describe('capitalize', () => {
        it('capitalizes an empty string', () => {
            expect(capitalize('')).toEqual('');
        });

        it('capitalizes a single-letter string', () => {
            expect(capitalize('a')).toEqual('A');
        });

        it('capitalizes a multi-word string', () => {
            expect(capitalize('hello world')).toEqual('Hello World');
        });

        // it('throws a TypeError for non-string input', () => {
        //     expect(() => capitalize(123)).toThrowError(TypeError);
        // });
    });

    describe('reverse', () => {
        it('reverses an empty string', () => {
            expect(reverse('')).toEqual('');
        });

        it('reverses a single-letter string', () => {
            expect(reverse('a')).toEqual('a');
        });

        it('reverses a multi-letter string', () => {
            expect(reverse('hello')).toEqual('olleh');
        });

        // it('throws a TypeError for non-string input', () => {
        //     expect(() => reverse(123)).toThrowError(TypeError);
        // });
    });

    describe('isPalindrome', () => {
        it('identifies a palindrome (empty string)', () => {
            expect(isPalindrome('')).toBeTruthy();
        });

        it('identifies a palindrome (single letter)', () => {
            expect(isPalindrome('a')).toBeTruthy();
        });

        it('identifies a palindrome (multi-letter)', () => {
            expect(isPalindrome('racecar')).toBeTruthy();
        });

        it('identifies a non-palindrome', () => {
            expect(isPalindrome('hello')).toBeFalsy();
        });

        // it('throws a TypeError for non-string input', () => {
        //     expect(() => isPalindrome(123)).toThrowError(TypeError);
        // });
    });

    describe('wordCount', () => {
        it('counts words in an empty string', () => {
            expect(wordCount('')).toEqual(0);
        });

        it('counts words in a single-word string', () => {
            expect(wordCount('hello')).toEqual(1);
        });

        it('counts words in a multi-word string', () => {
            expect(wordCount('hello world')).toEqual(2);
        });

        it('counts words in a string with extra spaces', () => {
            expect(wordCount('hello  world')).toEqual(2);
        });

        // it('throws a TypeError for non-string input', () => {
        //     expect(() => wordCount(123)).toThrowError(TypeError);
        // });
    });
});

describe('Array Manipulation Functions', () => {
    describe('filterEven', () => {
        it('filters out even numbers', () => {
            expect(filterEven([1, 2, 3, 4])).toEqual([1, 3]);
        });

        it('returns an empty array for an empty input', () => {
            expect(filterEven([])).toEqual([]);
        });
    });

    describe('doubleArr', () => {
        it('doubles all elements in an array', () => {
            expect(doubleArr([1, 2, 3])).toEqual([2, 4, 6]);
        });

        it('returns an empty array for an empty input', () => {
            expect(doubleArr([])).toEqual([]);
        });
    });

    describe('sumArr', () => {
        it('calculates the sum of an array', () => {
            expect(sumArr([1, 2, 3])).toEqual(6);
        });

        it('returns 0 for an empty array', () => {
            expect(sumArr([])).toEqual(0);
        });
    });

    describe('avgArr', () => {
        it('calculates the average of an array', () => {
            expect(avgArr([1, 2, 3])).toEqual(2);
        });

        it('returns 0 for an empty array', () => {
            expect(avgArr([])).toEqual(0);
        });
    });
});

describe('Object Transformation Functions', () => {
    describe('fullName', () => {
        it('returns the full name (trimmed) from a Person object', () => {
            const person: Person = { firstName: ' John ', lastName: 'Doe' };
            expect(fullName(person)).toEqual('John Doe');
        });

        it('returns an empty string for an empty Person object', () => {
            expect(fullName({})).toEqual('');
        });
    });

    describe('isAdult', () => {
        it('identifies an adult (age >= 18)', () => {
            const person: Person = { age: 25 };
            expect(isAdult(person)).toBeTruthy();
        });

        it('identifies a non-adult (age < 18)', () => {
            const person: Person = { age: 17 };
            expect(isAdult(person)).toBeFalsy();
        });

        it('handles missing age property', () => {
            const person: Person = {};
            expect(isAdult(person)).toBeFalsy();
        });
    });

    describe('filterByAge', () => {
        it('filters people based on minimum age', () => {
            const people: Person[] = [
                { firstName: 'John', lastName: 'Doe', age: 20 },
                { firstName: 'Jane', lastName: 'Smith', age: 16 },
                { firstName: 'Mike', lastName: 'Lee', age: 28 },
            ];
            expect(filterByAge(people, 18)).toEqual([
                { firstName: 'John', lastName: 'Doe', age: 20 },
                { firstName: 'Mike', lastName: 'Lee', age: 28 },
            ]);
        });

        it('returns an empty array for an empty input array', () => {
            expect(filterByAge([], 18)).toEqual([]);
        });
    });
});



