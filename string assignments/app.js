// 1. Lowercase Name
// Write a function that takes a name as input and returns it all in lowercase.

// 2. Uppercase Shouting
// Convert a given string into uppercase to simulate shouting. Example: "hello" →
// "HELLO".

// let str = " hello"

// console.log(str.toLocaleUpperCase());

// // 3. Count Characters
// // Given a string, return the number of characters in it.

// let str = " hello"
// console.log(str.length);

// First Character
// Write a function that returns the first character of a string using charAt().


// function firstCharector(str){
//     return str.charAt(0)
// }


// // console.log(firstCharector( "UMAIR"));
// 6. Find Position of Word
// Given a sentence, find the position (index) of the word "apple" using indexOf.


// let sentence = "I like apple and banana";

// console.log(sentence.indexOf("apple"));


// 8. Replace a Word
// Replace the word "bad" with "good" in a given sentence using replace().

// let sentence = " i am a bad boy"



// // console.log(sentence.replace( "bad", " good"));
// 9. Replace All Vowels
// Replace all occurrences of vowels in a string with "*" using replaceAll().


// let sentence = " hellow apple"


// sentence = sentence.replaceAll("a", "*")
//     .replaceAll("e", "*")
//     .replaceAll("i", "*")
//     .replaceAll("o", "*")
//     .replaceAll("u", "*");

// console.log(sentence);


// 10. Split Sentence into Words
// Convert a sentence into an array of words using split(" ").

// let  sentence = "i am a good boy"

// let word = sentence.split(" ")

// console.log(word);


// 11. Capitalize First Letter
//  Capitalize only the first letter of a given word.

// let word = "apple"

// let newWord = word.charAt(0).toUpperCase() + word.slice(1);
// console.log(newWord);


// 12. Find Second Word
// Write a function that returns the second word of a sentence using split().

// let sentence = "i am a bad boy"

// let secondWord = sentence.split(" ")

// let word = secondWord[1]


// // console.log(word);
// 13. Censor a Word
// Replace all instances of a bad word like "dumb" in a string with "****"./

// let sentence = "you are dumb and that dumb behavior is bad";

// console.log( sentence.replaceAll("dumb" ,  "****"));


// 14. Count Words in Sentence
// Use .split() and .length to count how many words are in a sentence.

//  let sentence = "you are dumb and that dumb behavior is bad";

//  let word = sentence.split(" ").length
//  console.log(word);
 

// 15. Check if Word Exists
// Return true if a specific word (e.g., "cat") exists in a string using indexOf.

// let sentence = "you are dumb and that dumb behavior is bad";

// let existingWord = sentence.indexOf("cat") !== -1;

// console.log(existingWord);

// 16. Extract Domain from Email
// Given an email address, extract and return the domain name (everything after @).

// let email = "umair@gmail.com"

// let domain = email.split("@")[1]
// console.log(domain);

// Reverse Words in Sentence
// Given a sentence, split it into words, reverse the array, and join it back into a string.

//  let sentence = "you are dumb and that dumb behavior is bad";

//  let newSentence = sentence.split(" ").reverse().join(" ")

// //  console.log(newSentence);
//  18. Check Palindrome (Basic)
// Write a function that checks if a word is the same when reversed (ignore case)./

// let word = "maham"

// let lovercase = word.toLowerCase();

// let reverseWord = lovercase.split("").reverse().join("");
// let result = lovercase === reverseWord;
// // console.log(result);
// 19. Count Vowels
// Count how many vowels are in a given string using a loop and charAt.

// let sentence = "you are dumb and that dumb behavior is bad";

// let count = 0;

// for (let i = 0; i<sentence.length; i++){
//     let check = sentence.charAt(i).toLowerCase();
//     if(check === "a" || check === "e" || check === "i" || check === "o"|| check === "u"){

//         count++;

//     }

// }
// console.log(count);

// /21. Title Casing a Sentence
// Convert a full sentence so that the first letter of each word is capitalized.

//  let sentence = "you are dumb and that dumb behavior is bad";

//  let newSentence = sentence.split(" ")

//  let result = " ";

//  for(let i = 0; i < newSentence.length; i++){
//     let word= newSentence[i]

//     result+= word.charAt(0).toUpperCase() + word.slice(1) + " ";
//  }


// console.log(result);

// 22. Remove Duplicate Words
// Given a sentence, remove any repeated words (case-insensitive).
let sentence = "cat dog Cat fish dog bird";

let words = sentence.toLowerCase().split(" ")

let result = [];
for(let i = 0; i<words.length; i++){
    let word = words[i]
    if(!result.includes(word)){
        result.push(word);
    }
}
console.log(result.join(" "));
