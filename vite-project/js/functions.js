import { DOMSelectors } from "./dom";
import { menu } from "./menu";
console.log(menu);

/* const products = {
  getAllProducts:null,
  getPopular: function (){
    menu
    .filter((food) => food.popular.includes("yes"))
    .forEach((food) => {
      console.log(food.name);
      DOMSelectors.cards.insertAdjacentHTML= 
        "afterbegin",
        `<img src="${food.img}"/>
        <h1>${food.name}</h1>`
    });
    }
  };*/

let getAllProducts = function (){
  menu
    .filter((food) => food.vegan.includes("yes"))
    .forEach((food) => {
      console.log(food.name);
DOMSelectors.cards.insertAdjacentElement(
    "beforebegin",
    `<img src="${food.img}
    <h1>${food.name}</h1>
    `);
  });
};
getAllProducts();

let getPopular = function () {
  menu
    .filter((food) => food.popular.includes("yes"))
    .forEach((food) => {
      console.log(food.name);
      DOMSelectors.cards.insertAdjacentHTML(
        "afterbegin",
        `<img src="${food.img}"/>
        <h1>${food.name}</h1>`
      );
    });
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