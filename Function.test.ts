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

describe('String Transformation Functions', () => {
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

