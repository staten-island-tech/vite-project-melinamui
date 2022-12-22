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
  getPopular();
  loadPop.preventDefault();
  loadPop.target.childNodes.remove();
  DOMSelectors.popular.disabled = true;
});

DOMSelectors.instock.addEventListener("click", function (loadStock) {
  clearFields();
  getInStock();
  loadStock.preventDefault();
  loadStock.target.childNodes.remove();
  DOMSelectors.instock.disabled = true;
});

DOMSelectors.vegan.addEventListener("click", function (loadVeg) {
  clearFields();
  getVegan();
  loadVeg.preventDefault();
  loadVeg.target.childNodes.remove();
  DOMSelectors.vegan.disabled = true;
});

const getPopular = function () {
  menu
    .filter((food) => food.popular.includes("yes"))
    .forEach((food) => {
      console.log(food.name);
      DOMSelectors.cards.insertAdjacentHTML(
        "afterend",
        `<div id = "img"> <img src="${food.img}"/> </div>
        <h1>${food.name}</h1>`
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
        `<div id = "img"><img src="${food.img}"/></div>
      <h1>${food.name}</h1> `
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
        `<div id = "img"><img src="${food.img}"/></div> 
      <h1>${food.name}</h1>
      `
      );
    });
};

const clearFields = function () {
  DOMSelectors.cards.innerHTML="";
}

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
