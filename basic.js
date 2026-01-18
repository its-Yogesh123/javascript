"use strict";     // it should be at top other wise not work
// console.log("Any statement");  // it will print any message in console
// -----Variables
// var a=5;    
// var b="string";
// c= 67;    // if not use "use strict" then js auto create a new variable named c
// console.log(c);
//"use strict"      // no error will occur  because it is ignored
// d=40;
// console.log(d);    // now error occur
// console.log(b);


// --------- variable using let keyword
// let x=78;
// console.log(x);   // work same as var but it create local variable

// var name="Yogesh";
// var name="Yogesh Kumar";     // no error but
// let f_name="Yog";
// let f_name="Yogesh";    //  error will occur



// ------------ const keyword
// const pi=3.14;   // cannot change this
// ----------------------- Datatypes ------------
// 1). Number
// 2). String (include character)
// 3). Boolean
// 4). Undefined
// 5). Null
// 6). BigInt
// 7). Symbol
// --
// var var1;  // if declared but not initialised the it is undefined
// console.log(typeof var1);
// var var1=null;      // now null is a value/datatype have its own property
// console.log(typeof var1);
// ------------------ type conversion
// 1). Number -> string
// var num=56;
// console.log(typeof num);   // here it is number
// num=num+"";                      // expilict type conversion
// console.log(typeof num);      // now num is string
// // 2). String to num
// num=+num;     
// console.log(typeof num);      // now num is number
// --
// --

// ------- BigInt
// console.log(Number.MAX_SAFE_INTEGER);        //  ----explore?
// console.log(Number.MAX_VALUE);              // the maximum value of int in JS
// console.log(Number.MIN_SAFE_INTEGER);
// var bigint=BigInt(172621876);
// var bigint2=98579n;
// console.log(typeof bigint);
// console.log(typeof bigint2);
// var int=5;
// console.log(bigint+int)   // error
// Explanation :- BigInt is another datatype and number is other so for calculation
// one must have same datatype convert both in bigInt then proceed 

// --
// --------
// -------- strings
// let u_name="Yogesh Kumar";
// string indexing like an in python
// console.log(u_name[5]);
// console.log(u_name.length);


// Methods of strings
// trim              
// toUpperCase()
// toLowerCase()
// slice
// --
// trim       --- it removes spaces around of string and return a new string(string immutable)
// let str="   Hel llo  hi     ";
// str=str.trim();  // trim return a new string
// console.log(str.toUpperCase())     // capitalised all letters
// console.log(str.toLowerCase());    // small all letter

// slice  -- for slicing of string
// string.slice(start_index,stop_index)
// let str="Hello this is Yogesh Kumar";
// let sub_string=str.slice(0,3); 
// console.log(sub_string);
// -----------------------         template sting
// let u_name="yogesh";
// let age=22;
// console.log(`This is My name :-${u_name} and age ${age}`);

// ----------------------------- conditional statement ----------
// if else , if els
// for 
// while loop
// do while
// switch case 
// ternary operator
// ------------ all these are same as in C/c++ (100%)

// ------------------------------------ Arrays ----------------
// Array in JS is Dynamic unlike C hence need not to specify size

// var arr=[1,3.5,2,3,"Yogesh Kumar"];
// console.log(arr);         // whole array will print
// console.log(arr[2]);      // access array element

// ----- Insertion an element in array
// normal indexing method
// push
// unshift

// -- normal
// let arr1=[1,2,3,4,5];
// arr1[3]=7;        // 1st method
// // here arr1 now has 4 element if we add an element at 6 (skipping 4 and 5th index)
// arr1[7]=89; 
// console.log(arr1);
// console.log(typeof arr1[6]);  // here the skipped member got undefined types

// --- push methods
// arr1.push(67);    // insert element at last
// console.log(arr1);
// // --- unshift
// arr1.unshift(0);   // insert element as first index i.e 0th index
// console.log(arr1);


// ----- deltion from array
// normal change krdo
// pop 
// shift
// let value=arr1.pop();       // remove element from last and return it
// console.log(arr1);
// console.log(value);
// let value1=arr1.shift();
// console.log(arr1);
// console.log(value1);


// --- -----------cloning in array                             (imp)
// let array1=[1,2,3,4,5];
// let array2=array1;     
// let array3=[1,2,3,4,5];
// console.log(array1);
// console.log(array2);
// console.log(array1==array2);     // ans is true but ...
// console.log(array1==array3);     // all elements of array1 and array3 are same but ans False
// if we change in array1 then array2 will also changed hence
// array2 is not creating a separate array but refering the array1;
// one_array=array_two    // wrong method to clone

// --- method for clone
// concat method
// spread operator
// slice method

// --
// let array2=[].concat(array1);
// let array2=array1.concat([]);   // 2nd way with concat method
// console.log(array2);
// console.log(array2==array1);    // false  hence array2 is clone


// --  using spread operator
// let array2=[...array1];
// console.log(array2);
// console.log(array1==array2);    // false as expected


// // --- slice method
// const array1=[1,2,3,4,5,6];
// const array2=array1.slice(2,5);
// console.log(array2);
// -------------const keyword with arrays
// const x=9;
// // the value of x cannot be changed
// const arr1=[1,2,3,4];
// arr1[0]=0;   // we change the element of array & no error
// console.log(arr1);
// // we can change the value of array but not the whole array like
// let arr2=[1,2,3];
// arr1=arr2;     // error will occur


// *************** It is good to create array with const keyword ********************
// ------------  for of loop
// const array=[1,2,3,54,5,6];
// for(let i of array){            // traverse to every element
//     console.log(i);
// }

// ------------for in loop
// for(let i in array){
//     console.log(i);              // in for in loop index will given by i
// } 

// -------------------------------------- Array Destructuring ------
// means access element in variable

// const array=["Yogesh",22];
// // // let u_name=array[0];     // normal method

// // let [_name,age]=array;     // first element will latest index
// // console.log(_name,age);

// let [_name,age,roll]=array;
// // console.log(roll);   // unsufficient element is array so roll is undefined


// // --
// let array=[1,2,3,4,5,6];
// // let [var1,var2,...var3]=array;
// // var1 and var2 get the corresponding value but var3 is an array contain all remainings
// // console.log(var3);
// let [var1,,var3]=array;   // var3 will get 3 after leaving 2
// console.log(var1,var3);  




// ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Object ^^^^^^^^^^^^^^^^^^^^^
//like dictionary in python
// let key="email";
// let obj1={"key":"value"};
// let obj2={
//     _name:"Yogesh",
//     age:23,
//     "id":1234,
//     // [key]:"hello@gmail.com"          // computed property of object (can use variables)
// }
// // Access elemeny 
// let userName=obj2._name;     // 1). dot operator
// let userAge=obj2["age"];     // 2). brackett notation
// console.log(userName,userAge);
// --
// ---- add new key value pair
// obj2.status="Verified";
// obj2["gender"]="Male";
// console.log(obj2);

// -------------------- difference b/w . and [] notation
// 1).  we cannot acces a string key(which contain a space) via . operator
// const obj={
//     _name:"Yogesh",
//     age:34,
//     "last name":"Kumar"
// }
// // let l_name=obj.last name  // error
// let l_name=obj["last name"];  // no error with [] notation
// console.log(l_name);
// //  ------- 2). We cannot add or access an element via variable with . notation
// const key1="status";
// obj.key1="verified";  // no error but key1 will become the key not status
// obj[key1]="verified";
// console.log(obj);


// ----- for in loop on Objects
// const obj={
//     'key1':1,
//     'key2':2,
//     'key3':3,
//     'key4':4,
// }
// for(let i in obj){
//     console.log(i);        // key values will get
// }
// for(let i of Object.keys(obj)){        // for of loop in objects
//     console.log(i);
// }

// -------------- Objects Destructuring-----------------
// const obj={
//     u_name:"yogesh",
//     age:23,
//     l_name:"Kumar",
//     key2:2,
//     key3:3
// }
// let {u_name,age,var1}=obj;   // var1 will not get the l_name value
// // here the variable should = key
// console.log(u_name,age,var1);  // here var1 is undefined because there is no key named var1

// // for assign variable name diferent from keys
// let {u_name:_name,age:userAge,...obj2}=obj;  // obj2 will get all the other key-value pair
// console.log(_name,userAge,obj2);  
// -------------

// const array1=[1,2,3,4,6,7,8];
// const obj1={...array1}    // explicit conversion of array into object
// // index will be keys
// console.log(obj1);
// const array2=[11,12];
// const obj2={...array1,...array2};    // array2 values will override the valus of same keys in array1 if present
// console.log(obj2);  

// const obj={"name":"hi","id":123,"age":89};
// const obj1={"name":"obj1","id":4,"random":"ahdofad"};
// const obj2={"id":5};
// const obj3={"name":"obj3","id":6};
// const test0={...obj,...obj1};     // object with union of attributes if value present in obj1 then it oveeride obj value
// const test1={...obj1,...obj};
// const test2={...obj2,...obj};    //  all attributes of obj 
// const test3={...obj,...obj2};    // id updataed as obj2 also contain that
// console.log(test0);
// console.log(test1);
// console.log(test2);
// console.log(test3);

// ------------- nested object destructuring ----------------
// const array=[
//     {userName:"User1",age:11},
//     {userName:"User2",age:21},
//     {userName:"User3",age:31}
// ]
// let [{userName:user1_name,age:user1_age}]=array;    // object  in array
// // apply both concept 1 by 1
// console.log(user1_name,user1_age);

// --------------- methods of object
//  1). Object.entries(obj)   --> return array of object with [[key,value],...]
//  1). Object.fromEntries(iter)   -->iter is iterable(can be looped) of key-value pair  return object
// --
// ------------------------------function -------------------------

// 1). Function Declaration
// 2). Function Exprssion
// 3). Arrow Function

// ------------ funtion declaration-------
// function fun_name(){
//     console.log("I am a Function Declaration");
// }
// fun_name();
// // ------------ function expression-------
// let fun_exp=function(){
//     console.log("I am a Function Expression");
// }
// fun_exp();

// // -------------- arrow function-------
// let arrow_fun=() => {console.log("I am Arrow function")};
// arrow_fun();



// -------------------- Hoisting ------------------
// using func before creating it
// only valid for function declaration
// fun();   //  no error
// function fun(){
//     console.log("I am Hacker");
// }
// fun1();            // error 
// const fun1=function(){
//     console.log("I am exp hacker");
// }

// -------- default and rest param
// function fun1(price=0){   // if not a param pass then no error and price =0
//     return 0;
// }
// function sum(...number){   // number is a array can collect all arguments
//     let sum=0;
//     for(let i of number){
//         sum+=i;
//     }
//     return sum;
// }

// console.log(sum(1,2,3,4));   //  rest parameters
// ----------  call back function and function returining a function
// function main(callback){
//     callback();
// }
// function add(){
//     console.log("I am Callbacked Thanks ");
// }
// main(add);
// function main(){
//     function inside(){
//         console.log("hi i am inside function returned");
//     }
//     return inside
// }
// let a=main();  // now a is function expression
// a();

// *************************** Methos of array
// 1). forEach()
// 2). map()
// 3). filter()
// 4). reduce()
// 5). sort()
// 6). find()
// 7). every()
// 8). some()
// 9). fill()
// 10). splice()
// --
// const array=[1,2,3,4];
// function print(data,index){
//     console.log(`At index ${data} : value is ${index}`);
// }
// array.forEach(print);
// array.forEach((data)=>{console.log(data)});
// ---
// const array=[1,2,3,4,5];
// // we want an array of having cube of these elements
// function cube(number){
//     return number**3;
// }
// const new_array=array.map(cube);    // map method return a new array 
// console.log(new_array);

// --------------------- 
// const array=["hello","this","is","Yogesh","kumar"];
// const array1=[1,2,3,4,5,6,7];
// function even(value){
//     return value%2==0;
// }
// function check(data){
//     return data.length ==6;
// }
// console.log(array.filter(check));
// const even_array=array1.filter(even);     // return all element which satisfy 
// console.log(even_array);


// ---- application for sorting
// const product=[
//     {"id":"wear",price:100},
//     {"id":"t_shirt",price:1000},
//     {"id":"jeans",price:500},
//     {"id":"watch",price:600},
//     {"id":"mala",price:8900},
//     {"id":"cover",price:1000000}
// ]
// function sort_price(data){
//     return data.price<1000;
// }
// const req=product.filter(sort_price);
// req.forEach((data)=>{console.log(data.id)});   //

// --

// -------------------- reduce ----------------                        (pending)
// const array=[1,2,3,4,5,6,7,8,9,10];
// function sum(acco,currentValue){
//     return acco+currentValue;
// }
// console.log(array.reduce(sum));
// ---
// --
// ------- sort
// const array=[5,7,1212,898,11111];
// const srings=["hello","hi",'my name','is'];
// array.sort();
// srings.sort();
// console.log(array);    // sort in ASCII order 
// console.log(srings);    // sort in ASCII order 
// ------------------------------- sorting in increasing order
// const array=[44,6,8,3,2,1,7,787,889];
// array.sort((a,b)=> b-a);
// array.sort((a,b)=> a-b);    // decreasing order
// console.log(array);

// ----- application lowToHigh
// const product=[
//     {id:1,price:1234},
//     {id:2,price:10000},
//     {id:3,price:19908},
//     {id:4,price:1},
//     {id:5,price:4545},
// ];
// function lowToHigh(a,b){
//     return a.price - b.price;
// }
// product.sort(lowToHigh);
// console.log(product);
// ---

// -------------- find() method
// const array=["hello",'123','find',"me"];
// function is3(value){
//     return value.length==3;
// }
// console.log(array.find(is3));  // return undefined if not found


// --
// ---   every() and some()
// as every means all the elements and some means any of them
// const array=[2,4,6,8,10];
// function isEven(value){
//     return value%2==0;
// }
// console.log(array.every(isEven));  // true if  condition is satisfy by all the elements
// console.log(array.some(isEven));  // true if  condition is satisfy by any  elements

// ------
// --------------- new and fill -----------
// fill(value,start,stop);
// const array=new Array(10).fill(-1);
// array.fill(0,2,2)
// console.log(array);

// --------------------- splice methods                 ------------------ (imp)
// deletion and insertion in everywhere
// splice(start_index,no_of_deletion,insertion_value)
// const array=[1,2,3,4,5];
// array.splice(1,1,"hi");  // at index 1 1 element is deleted and 'hi' is inserted in 1th pos
// array.splice(0,3,'hey','hello') // from 0th 3 elem. deleted and hey & hello inserted
// const counting=[1,2,5,6,7,8];
// const sub=[3,4];
// // counting.splice(2,0,sub);  // array will inserted at one postion not elements
// counting.splice(2,0,3,4); 
// console.log(counting);








//---------------------------------- Sets -----------------------
// Set(iterable_object)
// order not matter in sets
// const set1=new Set([1,2,3,4,5]);
// set1.add(45)      // for add any value
// set1.add("jhd");    // string added
// set1.delete(45);     // delete a particular element 
// const ans=set1.has(2);            // check element is present or not
// console.log(set1.size);      // show no. of element is set
// console.log(ans);

// // ------------ for of loop  on sets
// for(let i of set1){
//     console.log(i);
// }


// ---------------- Map data-type  ----------------------
// like object
// map can have keys of any datatype while in objects only number and string allowed
// map preserver order of insertion of entities
// const map1=new Map();
// console.log(map1.key1);
// Methods
//   map1.set(key,value)  
//   map1.get(key) 
//   map1.has(key)  return bool
//   map1.delete(key)  
//   map1.clear()  clear all entries
//   map1.size()  //  object doesn't have this
//   map1.keys()   - return iterator of keys
//   map1.values()   - return iterator of values
//   map1.entries()  - return iterator with key,value pair
//   map1.forEach(callback)  
// --
// ----------------- Optional Chaining  (?.)                      ----- (imp)
// const user={
//     userName:"Yogesh",
//     age:22,
//     // address:{pin:136119}
// }
// console.log(user.userName);
// // console.log(user.address.pin); //  error occur
// console.log(user.address);   // undefined
// // Because address is itself a undefined data then how can we access its member

// // to handle this   ?.
// console.log(user?.address?.pin);  // no error
//   agar hoga to print ho jaega varna undefined

// ----------- why we require ??
// if we create an object now at current time it is not in use so but later it can be updated 
// hence we require this handeling


// -----
// --
//>>>>>>>>>>>>>>>>>>>>> some methods of object <<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// 1). Call
// 2). Apply
// 3). bind
// --------- call
// const user1={
//     u_name:"User1",
//     age:22,
//     about:function(feed,num){
//         console.log(`This is ${this.u_name} and age is ${this.age}`);
//         console.log(`Feedback is : ${feed}`);
//         console.log(`After ${num} years This will ${this.age+num} years old`)
//     }
// }
// const user2={
//     u_name:"User2",
//     age:18
// }
// user1.about();
// // now we want to run about function for user2 also without copy
// user1.about.call(user1,"Nothoong",5);    // user1 ka functin hai and user1 ke liye call
// // user1.about.call(user2,"hi",100);    // user1 ka functin hai but user2 ke liye call

// // ------------ apply method
// user1.about.apply(user1,["hi",20])  // same as bind but extra argument is in form of array


// ---- bind method
// const user1={
//     u_name:'User1 Kumar',
//     age:22,
//     about:function(){
//         console.log(`Username is ${this?.u_name} and age is ${this?.age}`);
//     }
// }
// const user2={
//     u_name:'User2 Kumar',
//     age:56
// }
// const a=user1.about.bind(user2);
// a();    // can be call at any time
// -- why we require this ???
// const func=user1.about;
// func();  // error because  this is changed to window
// hence bind is required

// ************************* there is no this of arrow function *****************
// const obj1={
//     u_name:"Yogesh",
//     age:22,
//     about:()=>{
//         console.log(`Username is ${this.u_name} and age is ${this.age}`);
//     }
// }
// obj1.about();   // hence arrow function fail is case if this

// --------------
// // --------------------- object using function
// function setUser(u_name,age,gender){
//     const obj={
//         user_name:u_name,
//         user_age:age,
//         user_gender:gender,
//         about(){
//             return `Username : ${this?.user_name}|| age : ${this?.user_age}|| ${this?.user_gender}`;
//         }
//     }   
//     return obj;
// }
// const user1=setUser("Yogesh",18,"Male");
// const user2=setUser("Hari",48,"Male");
// const user3=setUser("Ram",678,"Male");
// const user4=setUser("Krish",10001,"Male");
// const user5=setUser("Sita",101,"Female");
// console.log(user1.about());
// console.log(user2.about());  
// console.log(user3.about());  
// console.log(user4.about());  
// console.log(user5.about());  
////  every time a object creates then a function also created
// const methods={
//     about(){
//         return `Username : ${this?.user_name}|| age : ${this?.user_age}|| ${this?.user_gender}`;
//     },
//     getAge(){
//         return this?.user_age;
//     }
// }
// function setUser(u_name,age,gender){
//     const obj={
//         user_name:u_name,
//         user_age:age,
//         user_gender:gender,
//         about:methods.about,
//         getAge:methods.getAge
//     }   
//     return obj;
// } 
// // now only function is referred not created every_time
// const user1=setUser("Yogesh",18,"Male");
// const user2=setUser("Hari",48,"Male");
// const user3=setUser("Ram",678,"Male");
// const user4=setUser("Krish",10001,"Male");
// const user5=setUser("Sita",101,"Female");
// console.log(user1.about());   
// console.log(user2.about());  
// console.log(user3.about());  
// console.log(user4.about());  
// console.log(user5.about()); 
// console.log(user5.getAge()); 
// ------------------------------------
// const obj1={
//     uName:"Yogesh",
//     age:23
// }
// const obj2=Object.create(obj1);   
// // creating object using this method will inherit the members of object inside paranthesis
// console.log(obj2.age);  // we can use methods of obj1 also


// --------------------------- implimenting this is above example
// const methods={
//     about(){
//         return `Username : ${this?.user_name}|| age : ${this?.user_age}|| ${this?.user_gender}`;
//     },
//     getAge(){
//         return this?.user_age;
//     }
// }
// function setUser(u_name,age,gender){
//     const obj=Object.create(methods);
//         obj.user_name=u_name;
//         obj.user_age=age;
//         obj.user_gender=gender;
//     return obj;
// } 
// // now only function is referred not created every_time
// const user1=setUser("Yogesh",18,"Male");
// const user2=setUser("Hari",48,"Male");
// const user3=setUser("Ram",678,"Male");
// const user4=setUser("Krish",10001,"Male");
// const user5=setUser("Sita",101,"Female");
// console.log(user1.about());   
// console.log(user2.about());  
// console.log(user3.about());  
// console.log(user4.about());  
// console.log(user5.about()); 
// console.log(user5.getAge()); 
// --
// ------------------------------
// --
// ----------------------- prototype and new keywords -----------------------
// in js function is also a object
// function fun(){
//     console.log("Hello");
// }
// console.log(fun.name);   // return fun_name
// fun.myOwn="Hello this is Yogesh";    // we can add key value pair in function
// console.log(fun.myOwn);


// ************** function provide us a  prototype which is an object *****************
// all key value pairs are added in this prototype
// only function provide the prototype property
// console.log(fun.prototype);
// // adding data in prototype
// fun.prototype.tell=function(){
//     console.log("Hi I am Fun");
// }
// fun.prototype.tell();         // call the method in prototype


// -------------- application of prototype
// in previous __proto__ example we need not to make external methods object
// we can define all the methods in prototype of function itself
// function setUser(u_name,age,gender){
//     const obj=Object.create(setUser.prototype);
//     obj.user_name=u_name;
//     obj.user_age=age;
//     obj.user_gender=gender;
    
//     return obj;
// };
// setUser.prototype.about=function(){
//     return `Username : ${this?.user_name}|| age : ${this?.user_age}|| ${this?.user_gender}`;
// };
// setUser.prototype.getAge=function(){
//     return this?.user_age;
// }
// const user1=setUser("Yogesh",18,"Male");
// const user2=setUser("Hari",48,"Male");
// const user3=setUser("Ram",678,"Male");
// const user4=setUser("Krish",10001,"Male");
// const user5=setUser("Sita",101,"Female");
// console.log(user1.about());   
// console.log(user2.about());    // working

// --
// ---------------------
// --
// --------------------- new keyword
// new keyword itself create a link between __proto__ and prototype
// function set_user(f_name,l_name,age,gender){
//     this.first_name=f_name;
//     this.last_name=l_name;
//     this.age=age;
//     this.gender=gender;
// }
// set_user.prototype.about=function(){
//     return `Name : ${this.first_name+this.last_name}|Age : ${this.age} |${this.gender}`
// }
// const user1=new set_user("yogesh","kumar",22,"male");
// const user2=new set_user("Hari","kumar",42,"male");
// const user3=new set_user("Sita","Devi",55,"Female");
// const user4=new set_user("Shyam","Singh",18,"male");
// const about=user1.about();
// // console.log(about);
// for(let key in user1){
//     // console.log(key);  // also print the keys from its prototype
//     if(user1.hasOwnProperty(key)){            // hasOwnProperty
//         console.log(key)
//     }
// }


// ------------------------ 
// const array=new Array(1,2,3);
// console.log(Array.prototype);
// console.log(Array.isArray(array));  // true
// calss in javascript

// class User{
//     constructor(u_name,age,gender){
//         console.log("constructor Called");
//         this.user_name=u_name;
//         this.age=age;
//         this.gender=gender;
//     }
//     about(){
//         console.log(`Username :${this.user_name}| age: ${this.age} |${this.gender} `);
//     }
//     is18(){
//         if(this.age>18){
//             return true;
//         }
//         else{
//             return false;
//         }
//     }
// }
// const user1=new User("Yogesh Kumar",19,"male");
// console.log(user1.is18());   
// user1.about();


// ------------- extends keyword
// class Animal{
//     leg=4;
//     constructor(Name,age){
//         console.log("Animal Constructor called");
//         this.Name=Name;
//         this.age=age;
//     }
//     about(){
//         console.log(`This is Animal Class have ${this.leg} legs`)
//     }
//     eat(){
//         console.log("Eating");
//     }
// }
// class dog extends Animal{
//     about(){
//         console.log(`This is Dog Clas of name ${this.Name}`);
//     }
// }
// const animal=new Animal("Cat",2);
// animal.about();
// animal.eat();
// const dog1=new dog("puppy",120);  
// dog1.about();   // dog class function will called
// class Animal{
//     leg=4;
//     constructor(Name,age){
//         console.log("Animal Constructor called");
//         this.Name=Name;
//         this.age=age;
//     }
//     about(){
//         console.log(`This is Animal Class have ${this.leg} legs`)
//     }
//     eat(){
//         console.log("Eating");
//     }
// }
// class dog extends Animal{
//     constructor(Name,age,speed){
//         super(name,age)
//         this.speed=speed;
//     }
//     about(){
//         console.log(`This is Dog Clas of name ${this.Name}`);
//     }
// }
// const animal=new Animal("Cat",2);
// animal.about();
// animal.eat();
// const dog1=new dog("puppy",12,120);  
// dog1.about();   // dog class function will called

// ------------getter and setter
// get is used to convert method into property
// class Demo{
//     constructor(f_name,l_name,num){
//         this.n=num;
//         this.first_name=f_name;
//         this.last_name=l_name;
//     }
//     status(){
//         console.log("This is Demo Class");
//     }
//     get add3(){
//         console.log(this.n+3);
//     }
//     get fullname(){
//         console.log(`${this.first_name} ${this.last_name}`)
//     }
//     set fullname(Name){
//         const [f_name,l_name]=Name.split(" ");
//         this.first_name=f_name;
//         this.last_name=l_name;
//     }
// }
// const obj1=new Demo("yogesh",'Kumar',8);
// obj1.status();
// obj1.add3;   // no calling require(behaves like property)
// obj1.fullname;
// // obj1.fullname="Ram Kumar";      // error we cannot
// // to handle this set require
// obj1.fullname="Ram kumar";
// obj1.fullname;  // name changed

// ------------- static keyword
// class Demo{
//     static count=0;
//     static intro(){
//         console.log("THis is Demo Class Hi ");
//     }
//     constructor(){
//         // count+=1;             //---------------------------- ???? why not (pending)
//     }
// }
// const obj1=new Demo();
// const obj2=new Demo();
// Demo.intro(); // static function cannot require object to call
// console.log(Demo.count);


// ----
// // illustrating compile or not
// console.log(this);
// console.log(window);
// // console.log(.var1);       // syntax error in this line
// console.log(var1);
// var var1=40;    
// // console.log(var2);     // error and also this error is not caught by pre-compilation
// let var2;
// console.log(var2);
// // as error come before executing first two line means compilation occur
// // fun1();
// // fun();     // errro   this is TDZ for fun
// // function fun1(){
// //     console.log("Hello this is Function Declaration");
// // }
// // var fun=function(){
// //     console.log("Hello this is Function expression");
// // }

// ------    let hoisted or not
// console.log(typeof var1);   // undefined although variable is not created
// console.log(typeof var2);   // error because not var2 is hoisted but it is uninitialiseds
// let var2;

// -----------------    -------------
// function outside(Name){
//     function inside(){
//         console.log(`hi ${Name} I am inside Function`);
//     }
//     return inside
// }
// const ans=outside("Yogesh Kumar");  
// ans();





// ---------- closures example ---------
// function pow(power){
//     function res(num){
//         console.log(num**power);
//     }
//     return res;
// }
// const cube=pow(3);
// const cbrt=pow(1/3);
// cube(2);
// cbrt(8);
// ----------------
// function myfun(){
//     x=true
//     function inside(){
//         if(x){
//             console.log("Hi, You Called Me !!");
//             x=false;
//         }
//         else{
//             console.log("I am already run 1 time");
//         }
//     }
//     return inside;
// }
// const fun=myfun();
// fun();
// fun();
// ------------------------
// >>>>>>>>>>>>>>>>>>>>>> Local Module <<<<<<<<<<<<<<<<<<<<
// exports.fun=function(){    // this function ca be accessed by another file
//     console.log("Hi this is basic.js fuction");  
// }
// --- 2nd way
// const welcome={
//     "intro":function(){
//         console.log("This is Intro function ");
//     },
//     'name':"Basic.js"
// }
// module.exports=welcome;