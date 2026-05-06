// 2. Uppercase Shouting
// Convert a given string into uppercase to simulate shouting. Example: "hello" →
// "HELLO"./

// let str = " hello"
// console.log(str.toUpperCase());


// 3. Count Characters
// Given a string, return the number of characters in it./

// console.log(str.length)

// 4. First Character
// Write a function that returns the first character of a string using charAt().

// function firstCharacter(str){

//     return str.charAt(0).toUpperCase()

// }
// console.log(firstCharacter("hello"));


// 6. Find Position of Word
// Given a sentence, find the position (index) of the word "apple" using indexOf.

// let sentence = " i eat apple"

// console.log(sentence.indexOf("apple"));


// 7. Extract First Word
// Use slice() and indexOf() to extract the first word from a sentence.




// let sentence = "i eat apple"

// let firstSpace = sentence.indexOf(" ");

// let firstCharacter = sentence.slice( 0 , firstSpace)

// console.log(firstCharacter);

// 8. Replace a Word
// Replace the word "bad" with "good" in a given sentence using replace().

// let sentence = " i am a bad and boy"

// console.log(sentence.replace(" bad" , " good"));

// 9. Replace All Vowels
// Replace all occurrences of vowels in a string with "*" using replaceAll().

// let  sentence= " i am doing practice javascript to build my logic day by day"

// let result = sentence.replaceAll("a" , "*")
// sentence.replaceAll("e" , "*")
// sentence.replaceAll("i", "*")
// sentence.replaceAll("o", "*")
// sentence.replaceAll("u", " *");



// console.log(result);

// 10. Split Sentence into Words
// Convert a sentence into an array of words using split(" ").

// let  sentence= " i am doing practice javascript to build my logic day by day"

// let newSentence = sentence.split(" ,")
// console.log(newSentence);

// 11. Capitalize First Letter
// Capitalize only the first letter of a given word.

// let  sentence= " i am doing practice javascript to build my logic day by day";

// let newSentence = sentence.split(" ");

// let result = [];


// for(let i = 0; i<newSentence.length; i++){
//    let word = newSentence[i]

//    let Capitalize = word.charAt().toUpperCase() + word.slice(1)

//    result.push(Capitalize)
   


// }

// console.log(result.join( " "));

// 12. Find Second Word
// Write a function that returns the second word of a sentence using



// function secondWord(sentence){

//     let word = sentence.split(" ");

//     return word[1]



// }
// console.log(secondWord("i am a boy"));

// 13. Censor a Word
// Replace all instances of a bad word like "dumb" in a string with "****".

// let sentence = "you are dumb and this is a dumb idea";

// let newWord = sentence.replaceAll("dumb" , " ****")

// console.log(newWord);


// 14. Count Words in Sentence
// Use .split() and .length to count how many words are in a sentence.

//  let sentence = "you are dumb and this is a dumb idea"

//  let count =  sentence.split(" ").length



//  console.log(count);
 
// 15. Check if Word Exists
// Return true if a specific word (e.g., "cat") exists in a string using indexOf.

// let sentence= " i am doing practice javascript to build my logic day by day";

// if(sentence.indexOf("cat") !== -1){
//     console.log(true);
// }else{
//     console.log(false)
// }

// 16. Extract Domain from Email
// Given an email address, extract and return the domain name (everything after @).

// let gmail = "umair@gmail.com";

// let domain = " ";

//  let newWord = gmail.split("@")

//        domain += newWord[1]

// // console.log(domain);
// 17. Reverse Words in Sentence
// Given a sentence, split it into words, reverse the array, and join it back into a string.

//  let sentence= " i am doing practice javascript to build my logic day by day";

//  let newSentence = sentence.split(" ").reverse()

//  let words = newSentence.join(" ")

// console.log(words);


 
//  19. Count Vowels
// Count how many vowels are in a given string using a loop and charAt.

// let ch= " i am doing practice javascript to build my logic day by day";
// let count = 0;

// for(let i=0; i<ch.length; i++){
//     if( ch[i] === "a" || ch[i] === "e" ||ch[i] === "i" ||ch[i] === "o" ||ch[i] === "u" ){
//         count ++;

//     }
// }
// console.log(count);

// 21. Title Casing a Sentence
// Convert a full sentence so that the first letter of each word is capitalized.


// let sentence= " i am doing practice javascript to build my logic day by day";

// let result= [];

// let words = sentence.split(" ")

// for( i =0; i<words.length; i++){
//     let word = words[i]

//     let capitalized= word.charAt(0).toUpperCase() +word.slice(1);

//     result.push(capitalized)
// }

// console.log(result.join(" "));
// 22. Remove Duplicate Words
// Given a sentence, remove any repeated words (case-insensitive).

// let sentence= " i am doing practice javascript to build my logic day by Day";

// let newSentence = sentence.toLowerCase().split(" ");

// let result = [];

// for( let i = 0; i<newSentence.length; i++){
//     let word = newSentence[i];

//     if(result.indexOf(word) === -1){
//         result.push(word);
//     }
// }
// // console.log(result.join(" "));
// 23. Mask Email Address
// Convert an email like john.doe@example.com to j***@example.com.

// let gmail = "john.doe@example.com"

// let parts = gmail.split("@");

// let  username = parts[0];
// let  domain =parts[1];

// let result = [];

// let masking = username.charAt(0) + " ****" + "@"+domain;

// result.push(masking);

// console.log(result);


// 24. Find Most Frequent Word
// Return the word that appears most frequently in a paragraph.



// 25. Abbreviate a Full Name
// Given John Ronald Reuel Tolkien, return J.R.R.T. using split, charAt, and
// toUpperCase.

// let str = "John Ronald Reuel Tolkien"

// let result = [];

// let newstr = str.toUpperCase().split(" ")

// for(let i = 0; i < newstr.length; i++){
//     let words = newstr[i].charAt(0)

//     result.push(words + ".")
// }

// console.log(result.join(""));


// 28. Reverse Each Word
// Given a sentence, reverse each word individually but keep them in the same order.

// let sentence= " i am doing practice javascript to build my logic day by Day";

// let newSentence = sentence.split(" ");
// let result = [];
 
// for(let i=0 ; i < newSentence.length; i++){
//     let reverseWord = newSentence[i].split("").reverse().join("")

//     result.push(reverseWord)


// }
// // console.log(result.join(" "));
// 30. Find Longest Word
// Find and return the longest word in a sentence.


// let sentence= "i am doing practice javascript to build my logic day by Day";

// let newSentence = sentence.split(" ");

// let longest = "";
 
// for( let i = 0; i<newSentence.length; i++){
//     if(newSentence[i].length > longest.length){
//         longest = newSentence[i]
//     }

// }
// console.log(longest);


// 31. Censor Multiple Bad Words
// Given a list of bad words, replace each with "***" in a paragraph using replaceAll
// and a loop.

// let sentence = "you are dumb and stupid but not ugly";

// let badWords = [ " dumb", "stupid" , "ugly"]

// for(let i = 0; i<badWords.length; i++){
//     sentence= sentence.replaceAll(badWords[i], "****")
// }
// console.log(sentence);
