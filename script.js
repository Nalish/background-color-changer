
const btn =document.querySelector("#btn");
const code=document.querySelector("#bg-color");
const body=document.querySelector("body");

colorArr=[
  "#2C3E50",
  "#34495E",
  "#2C2C2C",
  "#616A6B",
  "#4A235A",
  "#2F4F4F",
  "#0E4B5A",
  "#36454F",
  "#2C3E50",
  "#800020"];

  function getRandomIndex(){
    const randomIndex=Math.floor(colorArr.length * Math.random())
    return randomIndex;
  }

  function changeColor(){
    const color= colorArr[getRandomIndex()];
        code.innerText=color;

        body.style.backgroundColor = color;
    
  }

  btn.onclick =changeColor;