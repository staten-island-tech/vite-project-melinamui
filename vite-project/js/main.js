import "../styles/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import "./functions";
import { DOMSelectors } from "./dom";
console.log(DOMSelectors);
import { menu } from "./menu";
console.log(menu);

function clearBox(elementID)
{
    document.getElementById(elementID).innerHTML = "";
}

DOMSelectors.popular.addEventListener("click", function (loadPop) {
  clearBox();
  getPopular();
  loadPop.preventDefault();
});

DOMSelectors.vegan.addEventListener("click", function (loadVeg) {
  clearBox();
  getVegan();
  loadVeg.preventDefault();
});

const getPopular = function () {
  menu
    .filter((food) => food.popular.includes("yes"))
    .forEach((food) => {
      console.log(food.name);
      DOMSelectors.cards.insertAdjacentHTML(
        "afterend",
        `<img src="${food.img}"/>
        <h1>${food.name}</h1>`
      );
    });
};
/*
const getInStock = function () {
  menu
    .filter((food) => food.instock.includes("yes"))
    .forEach((food) => {
      console.log(food.name);
      DOMSelectors.cards.insertAdjacentHTML(
        "beforeend",
        `<img src="${food.img}"/>
      <h1>${food.name}</h1>`
      );
    });
};
getInStock();*/

const getVegan = function () {
  menu
    .filter((food) => food.vegan.includes("yes"))
    .forEach((food) => {
      console.log(food.name);
      DOMSelectors.cards.insertAdjacentHTML(
        "afterend",
        `<img src="${food.img}"/>
      <h1>${food.name}</h1>`
      );
    });
};

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
