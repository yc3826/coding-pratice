let array_one = [
    "a house of wood",
    "a house of brick",
    "a house of broken dishes",
    "a house of discarded clothing",
    "a house of dust"
  ];
  let array_two=[
     "run in the rain",
    "a house of cats",
    "a house of horses",
    "a house of potatos",
    "a house of cany"
  ];
  
  
  
  function renderPoem(){
    let element_from_array_one=array_one[Math.floor(Math.random()*array_one.length)];
  
  let element_from_array_two=array_two[Math.floor(Math.random()*array_two.length)];
     let poem = document.querySelector(".poem");
  let paragraph=document.createElement("p");
    paragraph.textContent=element_from_array_one+" "+element_from_array_two;
    poem.appendChild(paragraph);
    console.log(`${element_from_array_one} \n ${ element_from_array_two}`);
    
  }
  
  
  let btn = document.querySelector("button");
  btn.addEventListener("click", renderPoem);