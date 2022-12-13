// // // // // // // // // // // // // // // arr = [-4, 4, 6, 8, -9, 4, 35, 6, , 8, 9,]
// // // // // // // // // // // // // // // a = arr.find(function (e) {
// // // // // // // // // // // // // // //     for (e <= 1; ) {
// // // // // // // // // // // // // // //         return e
// // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // })
// // // // // // // // // // // // // // // console.log(a)


// // // // // // // // // // // // // // Adding Two Array

// // // // // // // // // // // // // // let arr5 = [1, 2, 3];
// // // // // // // // // // // // // // let arr6 = [4, 5, 6];
// // // // // // // // // // // // // // let arr7 = arr5.concat(arr6);
// // // // // // // // // // // // // // console.log(arr7);


// // // // // // // // // // // // // //find array element value


// // // // // // // // // // // // // arr8 = [2, 6, 7, 8];
// // // // // // // // // // // // // let findValue = arr8.find(function (e) { return e === 6 });
// // // // // // // // // // // // // console.log(findValue, findValue);
// // // // // // // // // // // // // let findValue2 = arr8.find(e => e === 10);//no value equal to 10 so it is undefine
// // // // // // // // // // // // // console.log(findValue, findValue2);



// // // // // // // // // // // // //Finding value at a specific index


// // // // // // // // // // // // // a3 = [1, 3, 4, 5, 6, 7, 8, 4, 4, 'a', 'd', 'fd', 'g']
// // // // // // // // // // // // // let d5 = a3.indexOf("fd")
// // // // // // // // // // // // // console.log(d5);
// // // // // // // // // // // // // last = a3.lastIndexOf('a')
// // // // // // // // // // // // // console.log(last);

// // // // // // // // // // // // // arr8 = [2, 6, 7, 8, 11];
// // // // // // // // // // // // // let findIndex = arr8.indexOf(6);
// // // // // // // // // // // // // let findIndex2 = arr8.indexOf(11000);
// // // // // // // // // // // // // console.log(findIndex, findIndex2);


// // // // // // // // // // // // // Sorting

// // // // // // // // // // // // // // Alphabetic Ordered
// // // // // // // // // // // // // let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
// // // // // // // // // // // // // console.log(names.sort());

// // // // // // // // // // // // //Numeric ordered
// // // // // // // // // // // // let ages = [18, 72, 33, 56, 1, 3, 5, 24, 6, 8];
// // // // // // // // // // // // console.log(ages.sort());


// // // // // // // // // // // // // Reversing Methods
// // // // // // // // // // // // let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
// // // // // // // // // // // // console.log(names.reverse());

// // // // // // // // // // // //Practice problems
// // // // // // // // // // // shoping = ["Milk", "Bread", "Apples"]



// // // // // // // // // // // //Switch Case 126
// // // // // // // // // // // let activity = "Driving"
// // // // // // // // // // // switch (activity) {
// // // // // // // // // // //     case 'getUp':
// // // // // // // // // // //         console.log("At 6:30 A.m");
// // // // // // // // // // //         break
// // // // // // // // // // //     case 'breakfast':
// // // // // // // // // // //         console.log("At 7:00 A.m");
// // // // // // // // // // //         break;
// // // // // // // // // // //     case 'Driving':
// // // // // // // // // // //         console.log("To the university at 7:30");
// // // // // // // // // // //         break;
// // // // // // // // // // //     case 'lunch':
// // // // // // // // // // //         console.log("At 2:00 p.m");
// // // // // // // // // // //         break
// // // // // // // // // // //     case 'Driving Back':
// // // // // // // // // // //         console.log("At 4:0 p.m");
// // // // // // // // // // //         break;
// // // // // // // // // // //     case 'dinner':
// // // // // // // // // // //         console.log("Back to home and dinner at 9:00 p.m");
// // // // // // // // // // //         break
// // // // // // // // // // //     case 'sleep':
// // // // // // // // // // //         console.log("At 11:00 p.m");
// // // // // // // // // // //         break;

// // // // // // // // // // // }

// // // // // // // // // // let activity = "Driving1"
// // // // // // // // // // switch (activity) {
// // // // // // // // // //     case 'getUp':
// // // // // // // // // //         console.log("At 6:30 A.m");
// // // // // // // // // //         break
// // // // // // // // // //     case 'breakfast':
// // // // // // // // // //         console.log("At 7:00 A.m");
// // // // // // // // // //         break;
// // // // // // // // // //     case 'Driving':
// // // // // // // // // //         console.log("To the university at 7:30");
// // // // // // // // // //         break;
// // // // // // // // // //     case 'lunch':
// // // // // // // // // //         console.log("At 2:00 p.m");
// // // // // // // // // //         break
// // // // // // // // // //     case 'Driving Back':
// // // // // // // // // //         console.log("At 4:0 p.m");
// // // // // // // // // //         break;
// // // // // // // // // //     case 'dinner':
// // // // // // // // // //         console.log("Back to home and dinner at 9:00 p.m");
// // // // // // // // // //         break
// // // // // // // // // //     case 'sleep':
// // // // // // // // // //         console.log("At 11:00 p.m");
// // // // // // // // // //         break;
// // // // // // // // // //     default:
// // // // // // // // // //         console.log("I can not understand what you did you say.Try again later");
// // // // // // // // // // }


// // // // // // // // // // ///Chapter 5 Loops 137
// // // // // // // // // These are the different loops we will be discussing in this chapter:
// // // // // // // // // while loop
// // // // // // // // // do while loop
// // // // // // // // // for loop
// // // // // // // // // for in
// // // // // // // // // for of loop

// // // // // // // // ///////////While loops////////
// // // // // // // // let i = 0;
// // // // // // // // while (i <= 10) {
// // // // // // // //     console.log("i = " + i);
// // // // // // // //     i++
// // // // // // // // }

// // // // // // // ///

// // // // // // // let someArray = ["Mike", "Antal", "Marc", "Emir", "Louiza", "Jac"]
// // // // // // // let notfound = true;
// // // // // // // while (notfound && someArray.length > 0) {
// // // // // // //     if (someArray[2] === "Louiza") {
// // // // // // //         console.log("Found her!!!");
// // // // // // //         notfound = false;

// // // // // // //     }
// // // // // // //     else {
// // // // // // //         someArray.shift()
// // // // // // //     }
// // // // // // // }


// // // // // // /// Fibacci series

// // // // // // let num1 = 0;
// // // // // // let num = 1;
// // // // // // let temp;
// // // // // // fibanic = []
// // // // // // while (fibanic.length < 20) {
// // // // // //     fibanic.push(num1);
// // // // // //     temp = num + num1;
// // // // // //     num1 = num;
// // // // // //     num = temp
// // // // // // }
// // // // // // console.log(fibanic);


// // // // // ///Dowhile Loop////
// // // // // let numb;
// // // // // do {
// // // // //     numb = prompt("Enter number between 0 to 100");
// // // // // } while (!(numb >= 100 && numb < 0))


// // // // mywork = [];
// // // // for (i = 0; i <= 10; ++i) {
// // // //     if (i % 2 === 0) {
// // // //         mywork[i] = {
// // // //             name: "lesson" + [i],
// // // //             status: true
// // // //         }
// // // //     }
// // // //     else {
// // // //         mywork[i] = {
// // // //             name: "lesson" + [i],
// // // //             status: false
// // // //         }
// // // //     }

// // // // }
// // // // console.log(mywork);

// // // ////Nested for loops////
// // // let arr = [];
// // // for (i = 0; i <= 4; i++) {
// // //     arr.push([])
// // //     for (j = 0; j <= 10; j++) {
// // //         arr[i].push(j)
// // //     }
// // // }

// // // console.log(arr);
// // // console.table(arr)

// // //Table practice

// // let myTable = [];
// // for (i = 0; i <= 10; i++) {
// //     myTable.push([]);
// //     for (j = 0; j <= 10; j * 2) {
// //         myTable[i].push(j);
// //     }
// // }
// // console.table(myTable)

// ///Array With Loops

// let names = ["Chantal", "Chantal 321", "Canl", "John", "Maxime", "Bobbi", "Jair"];
// for (i = 0; i < names.length; i++) {
//     if (names[i].startsWith("M")) {
//         delete names[i];
//         continue;

//     }
//     else if (names[i].startsWith("C")) {
//         names[i] = "Hi All whose name is start with C " + "Specially " + names[i]
//     }
//     else {
//         names[i] = " Hello All others " + names[i]
//     }
//     names[i] = " Hello " + names[i]
// }
// console.log(names);

