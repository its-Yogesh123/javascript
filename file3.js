// -------------------- AJAX (Asynchronous Javascript with XML)
// const URL="https://jsonplaceholder.typicode.com/posts"
// const xhr=new XMLHttpRequest();
// console.log(xhr.readyState);   // initially at 0
// xhr.open("GET",URL);
// console.log(xhr.readyState);
// xhr.onreadystatechange=function(){
//     // console.log(xhr.readyState);
//     if(xhr.readyState==4){
//         // console.log(xhr.response);
        // console.log(typeof xhr.response);  // it is string we have to parse into JSON
        // const data=JSON.parse(xhr.response);
        // console.log(typeof data);
//     }
// }
// after getting re3adystate 4 response will come --- explore readystate   ???
// using onload the upper stuff can be minimised
// xhr.onload()=function(){   // run only when readyState==4
//     console.log(typeof xhr.response); 
//     const data=JSON.parse(xhr.response);
//     console.log(typeof data);
// }
// xhr.send();

// -------- error handling
// xhr.open("GET",URL);
// xhr.onload=function(){
//     if(xhr.status >=200 && xhr.status <300){
//         const data=JSON.parse(xhr.response);
//         console.log(data);
//     }
//     else{
//         console.log("Something went Error");
//     }
// }
// xhr.onerror=()=>{  // handle network related error
//     console.log(" Network Error !!! Cannot Reach to Server ");
// }
// xhr.send();


// ------------ creating nested request
// xhr.open("GET",URL);
// xhr.onload=()=>{
//     const data=JSON.parse(xhr.response);
//     const id=89;
//     console.log(id);
//     // if wanted a particular data
//     const xhr2=new XMLHttpRequest();
//     const URL_=URL+`/${id}`;
//     xhr2.open("GET",URL_);
//     xhr2.onload=()=>{
//         const userData=JSON.parse(xhr2.response);
//         console.log(userData);
//     }
//     xhr2.send();
// }
// xhr.send();



// ------- creating the above using promise
const URL="https://jsonplaceholder.typicode.com/posts"
function sendRequest(method,URL){
    
}