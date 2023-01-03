import "../styles/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import { DOMSelectors } from "./dom";
console.log(DOMSelectors);
import { menu } from "./menu";
console.log(menu);

//instead of function(), write the name of the function
//const testW = function () {
//console.log("testW");
//};

DOMSelectors.emo.addEventListener("click", function () {
  if (document.body.classList.contains("uwu")) {
    document.body.classList.add("emo");
    document.body.classList.remove("uwu");
  } else {
    document.body.classList.add("uwu");
    document.body.classList.remove("emo");
  }
});

DOMSelectors.popular.addEventListener("click", function () {
  getPopular();  
});

DOMSelectors.instock.addEventListener("click", function () {
  getInStock();
});

DOMSelectors.vegan.addEventListener("click", function () {
  getVegan();
});

const getPopular = function () {
  DOMSelectors.cards.innerHTML="";
  menu
    .filter((food) => food.popular.includes("yes"))
    .forEach((food) => {
      console.log(food.name);
      DOMSelectors.cards.insertAdjacentHTML(
        "beforeend",
        `<div id = "one"> <img src="${food.img}"/> 
        <h1>${food.name}</h1></div>`
      );
    });
};

const getInStock = function () {
  DOMSelectors.cards.innerHTML="";
  menu
    .filter((food) => food.instock.includes("yes"))
    .forEach((food) => {
      console.log(food.name);
      DOMSelectors.cards.insertAdjacentHTML(
        "beforeend",
        `<div id = "one"> <img src="${food.img}"/>
      <h1>${food.name}</h1></div>`
      );
    });
};

const getVegan = function () {
  DOMSelectors.cards.innerHTML="";
  menu
    .filter((food) => food.vegan.includes("yes"))
    .forEach((food) => {
      console.log(food.name);
      DOMSelectors.cards.insertAdjacentHTML(
        "beforeend",
        `<div id = "one"><img src="${food.img}"/> 
      <h1>${food.name}</h1></div> 
      `
      );
    });
};
/*
const remove = function () {
  DOMSelectors.cards.remove();
};*/

/*DOMSelectors.querySelectors("#popular").addEventListener(
  "click",
  function (loadPop) {
    getPopular();
    loadPop.preventDefault();
  }
);

getAllProducts();
DOMSelectors.querySelectors("#popular").addEventListener(
  "click",
  function (loadPop) {
    getPopular();
    loadPop.preventDefault();
  }
);
document.querySelector("#app").innerHTML = `
  <div>
  <p></p>
  </div>
`;

setupCounter(document.querySelector("#counter"));
*/
