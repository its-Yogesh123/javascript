// // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> DOM <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// // console.log(document);
// // console.dir(document);

// // ------ element selection method
// // const obj1=document.getElementById("main_heading");
// // const obj2=document.getElementsByClassName("register");
// // console.dir(obj1);
// // console.dir(obj2);

// // // --query selector syntax
// // // const obj3=document.querySelector("#id_name")  
// // // const obj3=document.querySelector("#class_name")
// // const obj3=document.querySelector(".login");
// // console.log(obj3);

// // we cannot assign same id name to two or more elements but class_name can be
// // document.querySelectorAll() --> is used for select all the items having same class_name

// // --- changing the content
// // const heading=document.getElementById("main_heading");
// // console.log(heading.textContent);  // give the text
// // // changinh the content
// // heading.textContent="Hello this is Mine Site";  // changed the text
// // // text content will give all the text (although tag's display is none or hidden)
// // console.log(heading.innerText)    // this give the text which show on site

// // ------------- we can change the style also
// // const heading=document.querySelector("div.register h2")
// // console.log(heading)
// // console.log(heading.style)  // all these style can be changed
// // heading.style.backgroundColor="green";  // styling change


// // ------------- we can access any attribute value
// // const link=document.querySelector("a");
// // console.log(link.getAttribute("href"));    // return the attribute value
// // link.setAttribute("href","https://www.youtube.com")   // can change the value
// // // --- to create new tag/element
// // // link.innerHTML+="<h1>Hello this Click me</h1>";   // not efficient way
// // const new_tag=document.createElement("a");
// // // new_tag.innerText="Hello Click me";
// // new_tag.innerText="click ,e";
// // console.log(new_tag.innerText);
// // console.log(new_tag);




// // ------------------------ event handling ----------------
// // mouse  events 
// // ------- add events

// // const button=document.querySelector("#button");
// // console.dir(button);
// // button.onclick=function(){   // in this method we cannot assigned more than one click
// //     console.log("Hi I am Called");  // function called
// // }

// // // ------ addEventListener --> most efficient
// // function clickMe(){       // best
// //     console.log("I'm clicked");
// //     console.log(this);   // this is button itself
// // }
// // button.addEventListener("click",clickMe)


// // ------------ multiple buttons -----
// // const allButton=document.querySelectorAll("#btn");
// // for(let btn of allButton){
// //     btn.addEventListener("click",function(){
// //         console.dir(this);
// //     })
// // }


// // ------------- in 2nd file
// // console.log("Start")
// // const buttons=document.querySelectorAll('#btn');
// // for(let btn of buttons){
// //     let i;
// //     for(i=0;i<=1000000;i++){}

// //     btn.addEventListener('click',(e)=>{
// //         console.log(e.target);
// //         console.log(e.currentTarget.textContent);
// //     })
// // }
// // console.log("End!!!")

// // const buttons=document.querySelectorAll("#btn");
// // for(let button of buttons){
// //     button.addEventListener("click",(e)=>{
// //         e.currentTarget.style.backgroundColor="grey";
// //         const body=document.querySelector("body");
// //         body.style.backgroundColor="yellow";
// //     })
// // }




// // // ----------- keypress event
// // const body =document.querySelector("body");
// // body.addEventListener("keypress",(e)=>{
// //     console.log(e.key);
// // })


// // ------- mouse hover event
// // const btn=document.querySelector(".btn");
// // btn.addEventListener("mouseover",()=>{
// //     console.log("Mouse Enter");
// // })
// // btn.addEventListener("mouseleave",()=>{
// //     console.log("Mouse Left");
// // })


// // ----------------------------------event bubbling ----------
// const box1=document.querySelector(".grandpa");
// const box2=document.querySelector(".pa");
// const box3=document.querySelector(".me");
// // - event bubbling -
// // document.body.addEventListener("click",()=>{
// //     console.log("This is Body Scope");
// // })
// // box1.addEventListener("click",()=>{
// //     console.log("this is Granpa Box");
// // });
// // box2.addEventListener("click",()=>{
// //     console.log("this is Parent Box");
// // });
// // box3.addEventListener("click",()=>{
// //     console.log("this is My Box");
// // });

// // ---------------------
// // document.body.addEventListener("click",()=>{   // capturing
// //     console.log("This is Body Scope"); 
// // },true)
// // box1.addEventListener("click",()=>{   // capturing
// //     console.log("this is Granpa Box");
// // },true);
// // box2.addEventListener("click",()=>{    // caputuring
// //     console.log("this is Parent Box");
// // },true);

// // // ------ not captured
// // box3.addEventListener("click",()=>{
// //     console.log("this is My Box");
// // });

// // // --
// // document.body.addEventListener("click",()=>{  // bubbling
// //     console.log("This is Body Scope");
// // })
// // box1.addEventListener("click",()=>{           // bubbling
// //     console.log("this is Granpa Box");
// // });
// // box2.addEventListener("click",()=>{       // bubbling
// //     console.log("this is Parent Box");
// // });


// // ----------- event delegation -----------
// function fun(e){
//     console.log(e.target);
//     e.target.innerHTML="Clicked"+e.target.innerHTML;  // event delegation
// }
// box1.addEventListener("click",fun);
// // box2.addEventListener("click",fun);      // not need to bind
// // box3.addEventListener("click",fun);            
// // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Asynchronous Programming <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// console.log("Starting Code Execution");
// function run(){
//     console.log("Function called/Runned");
// }
// setTimeout(run,1000)  // minimum time for delay is 1sec
// setTimeout(()=>{console.log("I am funcion called after");},500);
// console.log("Script End");
//// due to event loop function called/ executed after traversing/executing all code in file
// setTimeout() -- return an id
// console.log("Start");
// function run(){
//     console.log("I'm a function");
// }
// const id=setTimeout(run,1000);
// console.log("end Here !!!");
// console.log(id);
// clearTimeout(id);   // now the function will not run


// --

// console.log("Start")
// setInterval(()=>{      // run continuosly after one second(1000 ms)
//     console.log("hi");  
// },1000);

// -- Normal project  (ID -P4)
// const body=document.body;
// const intervalId=setInterval(()=>{
//     const red=Math.floor(Math.random()*126);
//     const green=Math.floor(Math.random()*126);
//     const blue=Math.floor(Math.random()*126);
//     const rgb=`rgb(${red},${green},${blue})`;
//     body.style.background=rgb;
// },1000);
// const btn=document.querySelector("button");
// btn.addEventListener("click",()=>{
//     clearInterval(intervalId);
//     btn.textContent=body.style.background;
// });


// ------- Callback in Async Programming ID P5
// const heading1=document.querySelector(".heading1");
// const heading2=document.querySelector(".heading2");
// const heading3=document.querySelector(".heading3");
// const heading4=document.querySelector(".heading4");
// const heading5=document.querySelector(".heading5");
// const heading6=document.querySelector(".heading6");
// const heading7=document.querySelector(".heading7");
// const heading8=document.querySelector(".heading8");

// setInterval(()=>{
//     heading1.textContent="Heading 1"
//     heading1.style.color="red";
// },1000);
// setInterval(()=>{           // these are not relative (absolute time calculation)
//     heading2.textContent="Heading 2"
//     heading2.style.color="green";
// },2000);    
//  // for larger value it becomes more difficult 
//   2nd Approach

// setInterval(()=>{
//     heading1.textContent="Heading 1"
//     heading1.style.color="red";
//     setInterval(()=>{
//         heading2.textContent="Heading 2"
//         heading2.style.color="green";
//         setInterval(()=>{
//             heading3.textContent="Heading 3"
//             heading3.style.color="blue";
//             setInterval(()=>{
//                 heading4.textContent="Heading 4"
//                 heading4.style.color="yellow";
//             },1000); 
//         },1000); 
//     },1000); 
// },1000);

// The above code is called callback Hell (so confusing)                (imp)
// to deal this we use promises
//      ------- doing the above thing using function

// function change(element,text,color,time,onSuccess,onFailure){
//     setTimeout(()=>{
//         if(element){
//             element.textContent=text;
//             element.style.color=color;
//             if(onSuccess){
//                 onSuccess();
//             }
//         }
//         else{
//             if(onFailure){
//                 onFailure();
//             }
//         };
//     },time);
// }
// change(heading1,"Heading-1","red",1000,()=>{
//     change(heading2,"Heading-2","green",1000,()=>{
//         change(heading3,"Heading-3","blue",1000,()=>{
//             change(heading4,"Heading-4","yellow",1000,()=>{
//                 change(heading5,"Heading-5","orange",1000,()=>{
//                     change(heading6,"Heading-6","cyan",1000,()=>{
//                         change(heading7,"Heading-7","violet",1000,()=>{
//                             change(heading8,"Heading-8","purple",1000,()=>{
//                             },()=>{console.log("Element Not Exist");});
//                         },()=>{console.log("Element Not Exist");});
//                     },()=>{console.log("Element Not Exist");});
//                 },()=>{console.log("Element Not Exist");});
//             },()=>{console.log("Element Not Exist");});
//         },()=>{console.log("Element Not Exist");});
//     },()=>{console.log("Element Not Exist");});
// },()=>{console.log("Element Not Exist");});

// ---------- this is class Pyramid of DOOM (callback hell)

// >>>>>>>>>>>>>>>>>>>>>>>>>>> Promises <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// Promise is async task which is a feature of Browser not JS
// const list=["number",'age1','name'];
// const apromise=new Promise((resolve,reject)=>{    // Producing a Promise
//     if(list.includes("number") && list.includes("age") && list.includes("name")){
//         resolve("Allowed");
//     }
//     else{
//         reject("Not Allowed");
//     }
// });
// apromise.then((value)=>{   // consuming a promise
//     console.log(value);
// },()=>{  error          // 2nd callback run when rejected
//     console.log(error);
// })  

// // 2nd method to catch error   (Generally Used Terms)
// apromise.then((value)=>{     // chaining
//     console.log(value);
// })
// .catch((error)=>{
//     console.log(error);})

//   Promise using function      (also used in node js)
// function PromiseFun(value){
//     return new Promise((resolve,reject)=>{
//         if(value<0){
//             resolve("Value is Negative");
//         }
//         else{
//             reject("Value is +ive");
//         }
//     });
// }
// PromiseFun(1).then((value)=>{
//     console.log(value);
// })
// .catch((error)=>{
//     console.log(error);
// });

// ---Promise Chaining
// function myChain(){
//     return new Promise((resolve,reject)=>{
//         reject("First");
//     });
// }
// myChain().catch((value)=>{
//     console.log(value);
//     value="second"
//     return value;
// }).then((value)=>{console.log(value);});
// ---------
// solving the callback hell
// const heading1=document.querySelector(".heading1");
// const heading2=document.querySelector(".heading2");
// const heading3=document.querySelector(".heading3");
// const heading4=document.querySelector(".heading4");
// const heading5=document.querySelector(".heading5");
// const heading6=document.querySelector(".heading6");
// const heading7=document.querySelector(".heading7");
// const heading8=document.querySelector(".heading8");

// function solve(element,text,color,time){
//     return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 if(element){
//                     element.textContent=text;
//                     element.style.color=color;
//                     resolve();
//                 }
//                 else{
//                     reject("Element Not Found error");
//                 }
//             },time);
//         })
// }
// solve(heading1,"Heading-!",'red',1000)
// .then(()=>solve(heading2,"Heading-2",'green',300))
// .then(()=>solve(heading3,"Heading-3",'yellow',200))
// .then(()=>solve(heading4,"Heading-4",'pink',100))
// .then(()=>solve(heading5,"Heading-5",'orange',50))
// .then(()=>solve(heading6,"Heading-6",'purple',200))
// .then(()=>solve(heading7,"Heading-7",'cyan',500))
// .then(()=>solve(heading8,"Heading-8",'grey',1000));

