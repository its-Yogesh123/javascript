const button=document.querySelector("#btn");
function colorGen(){
    const r=Math.floor(Math.random()*256);
    const g=Math.floor(Math.random()*256);
    const b=Math.floor(Math.random()*256);
    const rgb=`rgb(${r},${g},${b})`
    return rgb;

}
function fun(e){
    const body=document.querySelector("body");
    const text=document.querySelector("#data");
    const rgb=colorGen();
    body.style.backgroundColor=rgb;
    text.textContent=rgb;
}
button.addEventListener("click",fun);