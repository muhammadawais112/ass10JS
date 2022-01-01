// ASSIGNMENT STRING
// program 1
// var str = "I LOVE PAKISTAN";
// console.log(str);
// console.log("length", str.length);

// program 2
// var str = "I LOVE PAKISTAN";
// var str1 = str.slice();
// console.log("actual string", str);
// console.log("copy to another string", str1);


// program 3
// var str = "Muhammad";
// var str1 = "Awais";
// var conCat = str.concat(str1);
// console.log(str);
// console.log(str1);
// console.log("concat: ", conCat);


// program 4
// var str = "awais";
// var str1 = "awais2";
// if (str == str1) {
//     console.log("This string is  equal");
// }
// else
//     console.log("This string is not equal");


// program 5

// var str = "awais"
// var conUpper = str.toUpperCase();
// console.log("convert to upper case", conUpper);


// program 6
//     / upper case to lower case
// var str = "AWAIS"
// var conlower = str.toLowerCase();
// console.log("convert to upper case", conlower);

// program 9
// var str = "mrzi";
// for (let index = 0; index < str.length; index++) {
//     if ("a" == str[index] || "e" == str[index] || "i" == str[index] || "o" == str[index] || "u" == str[index]) {
//         console.log("vowel", str[index]);


//     }
//     else {
//         console.log("consonants character", str[index]);
//     }


// }






// program 10
// var str = "GOVT COLLEGE SAMANABAD FAISALABAD"
// var word = str.split(" ");
// console.log(word);
// console.log("total word", word.length);


// program 11
// var str = "awais";
// var divChar= str.split("");
// console.log(divChar);
// var reverChar= divChar.reverse(str);
// console.log(reverChar);
// var finalReverseChar=reverChar.join();
// console.log(finalReverseChar);










// program 13
// var str = "Govt College samanabad faisalabad";
// var divWord= str.split(" ");
// console.log(divWord);
// var Rever= divWord.reverse();
// console.log(Rever);
// var strReverse = Rever.join();
// // join ka method array ko str ma convert karna ky liya use hota hay
// console.log("real string",str);
// console.log("reverse string",strReverse);













// program 14
// program first occures
// var Char = "awais";
// var firstChar = Char.slice(0, 1);
// console.log("firstChar", firstChar);



// program 15
// last occoures

// var Char = "awais uhfuiwhfuhauhgsd";
// var leng = Char.length
// var lastChar = Char.charAt(leng - 1)
// console.log("lastChar", lastChar);

// program: 17
// var str = "i love pakistan";
// var leng = str.length;
// console.log(str);
// console.log("total number of character ina string  ", leng);


// program 21
// var str = "i love pakistan";
// var leng = str.length;
// var removeFirstchar = str.slice(1, leng)
// console.log("REMOVE FIRST CHAR", removeFirstchar);

// program last remove

// var str = "i love pakistan";
// var leng = str.length - 1;
// var removeLastchar = str.slice(0, leng)
// console.log("REMOVE Last CHAR", removeLastchar);

// program 24

// var str = "awais";
// var repStr = str.charAt(0);
// console.log(str);
// var firstReplace = repStr.replace("a", "A");

// console.log("firstchar replace", firstReplace);

// program 25
// var str = "awais";
// var repStr = str.charAt(4);
// var lastCharReplace = repStr.replace("s", "S");
// console.log(str);
// console.log("lastchar replace", lastCharReplace);

// program 26

// var str = "awais";
// console.log("without replace", str);
// var allCharReplace = str.replace("awais", "ali");

// console.log("Allchar replace", allCharReplace);

// program 28
// var str = "i love faisalabad";
// var firWord = str.split(" ");
// console.log(firWord);
// var firword = firWord.slice(0, 1);
// console.log(firword);


// program 29
// var str = "i love faisalabad";
// var las = str.split(" ");
// console.log(las);
// var firword = las.slice(2, 3)
// console.log(firword);

// program :31
// var str = "awais mughal"
// console.log(str);
// var re = str.split(" ");
// console.log("word occur",re.length);

// // program 32
// var str = "mirza awais"
// var re = str.split(" ");
// console.log(re);
// var removeFirst = re.shift();
// console.log("remove element ", removeFirst);
// console.log("after first remove");
// console.log(re);





// program 33
// var str = "mirza awais"
// var re = str.split(" ");
// console.log(re);
// var removeLast = re.pop();
// console.log("remove element ", removeLast);
// console.log("after last remove");
// console.log(re);


// program :34
// var str = "Mirza Awais Developer";
// var strPart = str.slice()
// var convertArray = strPart.split(" ");
// console.log(convertArray);
// // convert array and applu pop opertaion
// convertArray.pop();
// convertArray.pop();
// convertArray.pop();
// console.log("allWord Remove ", convertArray);



// note:  trim fun string ki whitespace khatam karna kyliya use hota hay
// trimStart()  ka matalab start sy remove kaaro
// trimEnd() ka matalab end sy remove karo
// trim() ka matalab bothside remove kaaro


// program: 35
// var nam = "   awais ali mirza";
// console.log(nam);
// var removeleadingStart = nam.trimStart();
// console.log(removeleadingStart);

// program: 36
// var nam = "   awais ali mirza       ";
// console.log(nam);
// var removetrailingSpace = nam.trimEnd();
// console.log("remove end space", removetrailingSpace);




// program: 37
// both start and ending space

// var nam = "   awais ali mirza       ";
// console.log(nam);
// var removeBothSpace = nam.trim();
// console.log(removeBothSpace);

// OBJECT PROGRAM


// program 1 
// var student ={
//     name: "David Rayy",
//     sclass: "VI",
//     rollno:12
// }
// console.log("name",student.name);
// console.log("name",student.sclass);
// console.log("name",student.rollno);

// program :2
// var student ={
//     name: "David Rayy",
//     sclass: "VI",
//     rollno:12
// }
// console.log(student);
// // after
// delete  student.rollno;
// console.log(student);

// program :3
// var student = {
//     name: "David Rayy",
//     sclass: "VI",
//     rollno: 12
// }


// console.log(Object.length);

// program :4
// var library =[
//     {
//         author:"Bill Gates",
//         title:"The Road Ahead",
//         readingStatus:true
//     },
//     {
//         author:"Steve Jobs",
//         title:"Walter Isaacson",
//         readingStatus:true
//     },
//     {
//         author:"Suzanne Collins",
//         title:"Mockingy: The Final Book of the The Hunger Games ",
//         readingStatus:true
//     },

// ]

// console.log(library);



// program :14
// var student ={
//     name: "David Rayy",
//     sclass: "VI",
//     rollno:12
// }
// console.log(Object.values(student));








// condition operator


// program 1
// var a = 45;
// var b =30;
// var Max= a>b? "a greater number":"b is greater number"
// console.log(Max);

// program 2
// var a =45;
// var b =67;
// var c = 53;
// var  maxNum= a>c?" a greater number":b>a? "b is greater than":"c is greater than "
// console.log(maxNum);

// program :3

// var n =prompt("enter a number");
// var numCheck= (n%2==0) ? "even number":"odd number";
// console.log(numCheck);

// program :4

// var year =prompt("enter a year")
// var numCheck= (year%4==0) ? "leap year":"not a leap year";
// console.log(numCheck);

//  switch case

// PROGRAM 1
// var Num = parseInt( prompt("ENTER A  WEEK NUMBER"));
// switch (Num) {
//     case 1:
//         console.log("Sunday");
//         break;
//     case 2:
//         console.log("Monday");
//         break;
//     case 3:
//         console.log("Tuesday");
//         break;
//     case 4:
//         console.log("Wenesday");
//         break;
//     case 5:
//         console.log("Thursday");
//         break;
//     case 6:
//         console.log("Friday");
//         break;
//     case 7:
//         console.log("Satursday");
//         break;
//     default:
//         console.log("invalid number");
//         break;
// }

// PROGRAM :2
// var Num =  prompt("ENTER A  MONTH NUMBER");
// switch ( Num){
//     case "january":

//         console.log("january");
//         console.log("days:30");
//         break;
//     case "February":
//         console.log("February");
//         console.log("days:28");
//         break;
//     case "march":
//         console.log("march");
//         console.log("days:31");
//         break;
//     case "april":
//         console.log("april");
//         console.log("days:30");
//         break;
//     case "may":
//         console.log("may");
//         console.log("days:31");
//         break;
//     case "june":
//         console.log( "june");
//         console.log(" days:30");
//         break;
//     case "july":
//         console.log("july");
//         console.log(" days:31");
//         break;
//         case  "august":
//             console.log("august");
//         console.log(" days:31");
//         break;
//         case "september":
//             console.log("september");
//         console.log(" days:30");
//         break;
//         case "october":
//             console.log("october");
//         console.log(" days:31");
//         break;
//         case  "november":
//             console.log("november");
//         console.log(" days:30");
//         break;
//         case  "december":
//             console.log("december");
//         console.log(" days:31");
//         break;

//     default:
//         console.log("invalid number");
//         break;
// }
// program 3

// var num = parseInt(prompt("enter a number"));
// switch (num) {
//     case num:

//         if (num > 0) 
//             {
//             console.log("number is positive");
//             }

//         else{
//             console.log("number is negative");
//         }




//     default:
//       console.log("number is zero");
//         break;
// }

// program :4
//  var num;
//  var num2 = parseInt(prompt("enter a number"));
// switch (num) {
//     case num:
//         var num2 = parseInt(prompt("enter a number"));
//         if (num>num2) 
//             {
//             console.log("num is greater than num2");
//             }
//             else{
//                 console.log("num2  greater ");
//             }
//           break;




//     default:
//       console.log("number is  invalid");
//         break;
// }
// program :5
// var num = parseInt(prompt("enter a number"));
// switch (num) {
//     case num:

//         if (num%2== 0) 
//             {
//             console.log("number is even");
//             }
//             else{
//                 console.log("number is odd");
//             }
//           break;




//     default:
//       console.log("number is  invalid");
//         break;
// }

// program :6

// var num = parseInt(prompt("enter a number"));
// switch (num) {
//     case num:

//         if (num > 0) 
//             {
//             console.log("number is positive");
//             }

//         else{
//             console.log("number is negative");
//         }




//     default:
//       console.log("number is zero");
//         break;
// }
// program:8

// var num = parseInt(prompt("Enter 1 is add\nEnter 2 is mul \nEnter 3 is div \nEnter 3 is div \n Enter 4 sub"));

// switch (num) {

//     case 1:
       
//     {var a = parseInt(prompt("enter a number"));
//         var b = parseInt(prompt("enter second number"));
//         var add = a + b;
      
// }
//         break;
//     case 2:
//         {
//         var a = parseInt(prompt("enter a number"));
//         var b = parseInt(prompt("enter second number"));
//         var mul = a * b;
//         console.log("Mul", mul);
//         }
//         break;
//     case 3:
//         {
//         var a = parseInt(prompt("enter a number"));
//         var b = parseInt(prompt("enter second number"));
//         var div = a / b;
//         console.log("div", div);
//         }
//         break;
//     case 4:
//         {
//         var a = parseInt(prompt("enter a number"));
//         var b = parseInt(prompt("enter second number"));
//         var sub = a - b;
//         console.log("div", sub);
//         }
//         break;
        

//     default:
//         console.log("invalid num");
//         break;
// }

