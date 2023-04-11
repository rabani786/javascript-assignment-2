Question 1
function createAdder(n) {
    return function(x) {
      return x + n;
    };
  }

 let add = createAdder(5);
  console.log(add(10)); 



Question 2
function searchArray(arr, value) {
  if (arr.length === 0) {
    return false;
  }
  if (arr[0] === value) {
    return true;
  } else {
    return searchArray(arr.slice(1), value);
  }
}

let myArray = [2, 4, 6, 8, 10];
console.log(searchArray(myArray, 10)); 
console.log(searchArray(myArray, 5));



Question 3

function addParagraph(text) {
  let newParagraph = document.createElement("p");
  
  newParagraph.textContent = text;
  
  let body = document.querySelector("body");
  
  body.appendChild(newParagraph);
}

addParagraph("Hello, world!");





Question 4

function addListItem(text) {
  let newListItem = document.createElement("li");

  newListItem.textContent = text;
  let ul = document.querySelector("ul");
  ul.appendChild(newListItem);
}

addListItem("Item no 1");
addListItem("Item no 2");
addListItem("Item no 3");




Question 5

function changeBackgroundColor(h1, color) {
  h1.style.backgroundColor = color;
}
let Element = document.querySelector("#element");
changeBackgroundColor(Element, "red");


Question 6


function saveToLocalStorage(key, object) {

  let json = JSON.stringify(object);

  localStorage.setItem(key, json);
}

let myObject = {
  name: "Rabani",
  age: 23,
};

saveToLocalStorage("myObject", myObject);



Question 7


function getFromLocalStorage(key) {
  let json = localStorage.getItem(key);
  if (!json) {
    return null;
  }
  return JSON.parse(json);
}
let myObject = getFromLocalStorage("myObject");
console.log(myObject);




Question 8
function saveObjectToLocalStorage(obj) {
  localStorage.setItem('myObject', JSON.stringify(obj));
  
  let newObj = JSON.parse(localStorage.getItem('myObject'));
  return newObj;
}