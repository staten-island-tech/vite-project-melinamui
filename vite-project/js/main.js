import "../styles/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import "./functions";
import { DOMSelectors } from "./dom";
console.log(DOMSelectors);
import { menu } from "./menu";
console.log(menu);


DOMSelectors.popular.addEventListener("click", function (loadPop) {
  clearFields();
  element.remove(); 
  getPopular();
  loadPop.preventDefault();
  DOMSelectors.popular.disabled = true;
  clearFields();
  element.remove(); 
});

DOMSelectors.instock.addEventListener("click", function (loadStock) {
  clearFields();
  element.remove(); 
  getInStock();
  loadStock.preventDefault();
  DOMSelectors.instock.disabled = true;
  clearFields();
  element.remove(); 
});

DOMSelectors.vegan.addEventListener("click", function (loadVeg) {
  clearFields();
  element.remove(); 
  getVegan();
  loadVeg.preventDefault();
  DOMSelectors.vegan.disabled = true;
  clearFields();
  element.remove(); 
});

const getPopular = function () {
  menu
    .filter((food) => food.popular.includes("yes"))
    .forEach((food) => {
      console.log(food.name);
      DOMSelectors.cards.insertAdjacentHTML(
        "afterend",
        `<div id = "one"> <img src="${food.img}"/> 
        <h1>${food.name}</h1></div>`
      );
    });
};

const getInStock = function () {
  menu
    .filter((food) => food.instock.includes("yes"))
    .forEach((food) => {
      console.log(food.name);
      DOMSelectors.cards.insertAdjacentHTML(
        "afterend",
        `<div id = "one"><img src="${food.img}"/>
      <h1>${food.name}</h1></div> `
      );
    });
};

const getVegan = function () {
  menu
    .filter((food) => food.vegan.includes("yes"))
    .forEach((food) => {
      console.log(food.name);
      DOMSelectors.cards.insertAdjacentHTML(
        "afterend",
        `<div id = "one"><img src="${food.img}"/> 
      <h1>${food.name}</h1></div> 
      `
      );
    });
};

const clearFields = function () {
  DOMSelectors.cards.innerHTML="";
}

const element = document.getElementById('cards');
element.remove(); 

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
