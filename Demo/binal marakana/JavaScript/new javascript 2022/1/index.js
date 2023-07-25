//======================= START ======= ES6 ==========================

// var => fuction scope
// let and const => block scope

// function biodata(){
//     const fname = "binal";
//     console.log("fname--->",fname);

//     if(true){
//         const lname = "marakana";
//         console.log("fname--->",fname);
//         console.log("lname--->",lname);
//     }
//     console.log("lname--->",lname);

// }

// biodata()


//--------Template Literals-----------

// for(let i=1;i<=10;i++){
//     let tableof = 12;
//     console.log(`${tableof} * ${i} = ${tableof * i}`); //Template Literals
// }

//--------Default Parameters-----------

// function mult(a,b=2) {
//     return a*b;    
// }
// console.log("===Default Parameters===",mult(3));


//======================= START ======= Array ==========================
//-------- Traversal in array-----------

// var myFriends = ['aaa','bbb','ccc','ddd']
// console.log("Arrayy------1",myFriends[1]);

//-------- check the length of element of an array-----------
// console.log("Arrayy------2",myFriends.length);
// console.log("Arrayy------3",myFriends[myFriends.length - 1]);

//loop
// for (let index = 0; index < myFriends.length; index++) {
//     const element = myFriends[index];
//     console.log("Arrayy------4",element);
// }

//For in loop
// for (const element in myFriends) {
//     console.log("for in------",element);
// }

//For of loop
// for (const element of myFriends) {
//     console.log("for of------",element);
// }


//forEach
// Array.prototype.forEach() --->syntax

// myFriends.forEach(function (element,index,array) {
//  console.log(element + " index : " + index +" "+ array);   
// })

//with arrow fuction
// myFriends.forEach((element,index,array) => {
//     console.log(element + " index : " + index +" "+ array);   
// })


//======================= START ======= Search and Filter ==========================

// Array.prototype.indexOf()
// let text_array = ['aaa','bbb','ccc','ddd','ccc'];
// let text = "Hello world, welcome to the universe.";
// let result = text.indexOf("e",3);
// console.log("indexOf-----",result); 


//----start task ----
// 1.add dec at the end of an array?
// 2.what is the return value of splice method?
// 3.update march to March?
// 4.delete june from an array?

// const month = ['jan','march','April','june','july'];

// sol:1
// const newmonth = month.splice(month.length,0,"dec");
// console.log("month---------",month);

// sol:2
// console.log("newmonth---------",newmonth);

// sol:3
// const updatemonth = month.splice(1,1,"March");

// or dynamic
// const indexofMonth = month.indexOf("march") //indexOf return -1 or 1
// if(indexofMonth != -1){
//     const updatemonth = month.splice(indexofMonth,1,"March");
// }
// console.log("updatemonth---------",month);

//---- stop task ----


//=========== map and reduce method ==========
// const array = [1,3,6,9,60];
// num>9 
// let newarr = array.map((curElem,index,arr)=>{
//     return curElem > 9; //return true and false
// })
// console.log("array----------",array);
// console.log("new array----------",newarr);

// let newarr = array.map((curElem,index,arr)=>{
//     return `index of = ${index} , curent element of ${curElem} ,brlog  to ${arr} `
// })
// console.log("newarrray---------",newarr);


//----start task map ----
// 1.find the square root of each Element in an array?
//     let arr = [25,36,49,64]
// 2.multiply each Element by 2 and return only those Elements which are greater than 10?
//     let arr = [2,3,4,5,6]

// sol:1
// let Square_root = [25,36,49,64]
// const squ_root_arr = Square_root.map((curElement) => Math.sqrt(curElement))
// console.log('squ_root_arr ---------',squ_root_arr);

// sol:2
// let arr = [2,3,4,5,6,8]
// const new_arr = arr.map((curElement) => curElement*2).filter((newcurElement) => newcurElement > 10).reduce((accumulator,curElem,index,arr) => {
//         return accumulator += curElem; //accumulator mtlb old value store kre
// })
// console.log("sol2------------",new_arr);


// reduce method
// let arr = [5,6,2];
// let sum = arr.reduce((accumulator,curElem,index,arr) => {
//     return accumulator += curElem; //accumulator mtlb old value store kre
// },7)
// console.log("sum---------",sum);

//==========staring in javascript============
//---Escaape character---
// ex:1
//  let sentence = "we are \"abc\" the north."
//  console.log("Escaape",sentence);

// ex:2
//  let sentence = 'we are "abc" the north.'
//  console.log("Escaape",sentence);

//---finding a string in a string---
// const mydata = "i am the abc";
// console.log("find first data",mydata.indexOf("a",3));
// console.log("find data",mydata.lastIndexOf("a",3));

//---searching for a string in a string---
//*returns position*
// const mydata = "i am the abc";
// let sdata = mydata.search("am")
// console.log("search",sdata);



//---Extractiong string parts---
// slice
// let str = "apple, red, kiwi";
// let res = str.slice(0,4)
// let res2 = str.slice(3,-2)
// console.log("slice-----",res);
// console.log("slice2-----",res2);

//---- ex:show only 280 character in string ---
// let mytweets = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
// let onlydata = mytweets.slice(0,280)
// console.log("show only 280--->",onlydata);

//substring
// let str = "apple, red, kiwi";
// let res = str.substring(0,4)
// let res2 = str.substring(3,-2) //0 thi j count krse 
// console.log("substring-----",res);
// console.log("substring2-----",res2);

//substr
// var str = "apple, red, kiwi";
// let res = str.substr(0,4);
// let res2 = str.substr(-2) //last mathi 2 character aavse
// console.log("substr-----",res);
// console.log("substr2-----",res2);


//---replacing string content---
// syntax:- String.prototype.replace(searchfor,replacewith)
// let mydata = 'i am binal,binal marakana'
// let replace = mydata.replace('binal','Binal');
// console.log("replace--------",replace);
// console.log("replace2--------",mydata);


//---Extracting string characters---

// charAt()
// let str = "Hello World";
// console.log("charcter ---->",str.charAt(0));

// charCodeAt()
// let str = "Hello World";
// console.log("charCodeAt ---->",str.charCodeAt(0));


//---- ex:Return the Unicode of last character in a string ---
// let str = "Hello WorlD";
// let lastchar = str.charCodeAt(str.length - 1);
// console.log("unocode---------",lastchar);

const a = 5;
a = 15;
console.log(a);

