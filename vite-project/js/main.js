import "../styles/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

import { menu } from "./menu";
console.log(menu);

import { DOMSelectors } from "./dom";
console.log(DOMSelectors);

let getPopular = function () {
  menu
    .filter((food) => food.popular.includes("yes"))
    .forEach((food) => console.log(food.name));
};
getPopular();

let getInStock = function () {
  menu
    .filter((food) => food.instock.includes("yes"))
    .forEach((food) => console.log(food.name));
};
getInStock();

let getVegan = function () {
  menu
    .filter((food) => food.vegan.includes("yes"))
    .forEach((food) => console.log(food.name));
};
getVegan();
/*document.querySelector("#app").innerHTML = `
  <div>
  <p></p>
  </div>
`;

setupCounter(document.querySelector("#counter"));
*/
