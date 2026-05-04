// 1. Create an array/ of fruits like ["apple", "banana", "cherry"] and use a loop to log each fruit
// in the console.

// const fruits =["apple", "banana", "cherry"]
// for(let i = 0; i <fruits.length; i++){
//     console.log(fruits[i]);
    
// }
    
// 2. Given an array of colors ["red", "green", "blue"], use a loop to add all the color names to
// a paragraph with the ID output using document.querySelector.


// const output = document.querySelector("#output")

//  const colors =["red", "green", "blue"]

//  let colorlist = "";

//  for(let i = 0; i <colors.length; i++){
//     colorlist += colors[i] + " ";
//  }
//  console.log(colorlist);
//  output.innerHTML=colorlist

// 3. Use a for loop to print numbers from 1 to 10 in the browser console.

// let i = 0;
// for (let i = 10; i >= 0; i--){
//     console.log(i);
    
    
// }

// 5. Given an array of names ["Ali", "Sara", "Ahmed"], use a loop to change the text of a div
// with ID names to show all names separated by commas.


// const names = ["Ali", "Sara", "Ahmed"];

// let namelist = " ";

// for(let i =0; i <names.length; i++){
//     namelist += names[i] + ", ";
    
// }
// output.innerHTML=namelist

// Change the text of a paragraph with ID status to "Loading..." using
// document.querySelector.


const output = document.querySelector("#output")
// output.innerHTML=`<p> Loading ... </p>`

// 7. Use a loop to calculate the sum of numbers in an array [5, 10, 15] and display the total in
// a paragraph with ID sum.

// const  array =[5, 10, 15];

// let sum = 0;

// for(let i = 0 ; i <array.length; i++){
//     sum = sum + array[i];
    
    
// }
// console.log(sum);
// output.innerHTML=sum


// 8. Loop through an array of cities ["Karachi", "Lahore", "Quetta"] and display them as a
// single string in a div with ID cities.

// const cities= ["Karachi", "Lahore", "Quetta"];

// let citylist = " ";
// for (let i = 0; i < cities.length; i++){
//     citylist += cities[i] + ", ";


// }
// output.innerHTML=citylist

// 9. Write a loop that counts from 1 to 20 and logs only the even numbers in the console.

// let i = 0;
// for (let i=0; i < 20; i++){
//     if ( i % 2 === 0)
//         console.log(i);
        
// }

// 10. Create an array of numbers [45, 22, 89, 100], and use a loop to find and display the
// largest number in a paragraph with ID max.

// const numbers = [45, 22, 89, 100];

// let max = numbers[0];

// for(let i = 0; i <numbers.length; i++){
//     if(numbers[i] > max)
//         max = numbers[i]
// }
// output.innerHTML=max

// Use document.querySelector to select a div with ID result and change its text to "Task
// Complete".

// output.innerHTML=`<p>Task Complete</p>`


// 12. Given an array of temperatures [30, 35, 32, 40], use a loop to calculate the average and
// display it inside an element with ID averageTemp.

// const temperatures = [30, 35, 32, 40];

// let sum = 0;

// let average = 0;

// for(let i=0; i <temperatures.length; i++){
//     sum = sum + temperatures[i];
    
//     average = sum / temperatures.length
    
// }
// console.log(sum);
// console.log(average)
// output.innerHTML=average

// 13. Create a loop that adds all the numbers from 1 to 100 and shows the total inside a
// paragraph with ID totalSum.


// let totalSum = 0;
//  for(let i=0; i<=100 ; i++){
//     totalSum += i;
//  }
//  output.innerHTML=totalSum
 
// Use a loop to print all values of the array ["dog", "cat", "bird"] into a single paragraph with
// ID animals.

// const array= ["dog", "cat", "bird"];

// let newArray= "";

// for(let i=0; i<array.length; i++){
//     newArray += array[i];
//     if( i !== array.length -1){
//         newArray += ", "
//     }

// }
// output.innerHTML=newArray

// 16. Create a loop that prints all numbers between 1 and 50 that are divisible by 5, and log
// them to the console.

// let i =0;
// for(let i=1 ; i <=50; i++){
//     if( i % 5 === 0)
//         console.log(i);
        
// }

// Use a loop to count how many numbers in an array [3, 8, 6, 1, 9, 2] are even.

// const array =[3, 8, 6, 1, 9, 2]

// let number = " ";

// for(let i =0; i < array.length; i++){
//     if( array[i] % 2 === 0){
//         number ++;
//     }

// }
// console.log(number);


// 23. Write a loop that calculates the average of numbers in an array [20, 30, 40, 50].

// const array =[20, 30, 40, 50]

// let sum = 0;
// let average = 0;

// for(let i =0; i < array.length; i++){
//     sum = sum + array[i]
//     average = sum / array.length
    
    
// }
// console.log(average);

// 24. Given an array [2, 4, 6, 8, 10], use a loop to create a new array where each value is
// multiplied by 3.

// const array = [2, 4, 6, 8, 10];
// let newArray = [];
// for( let i = 0; i<array.length; i++){
//     newArray.push(array[i]*3)
// }

// console.log(newArray);
