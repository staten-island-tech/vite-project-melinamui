import "../styles/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import "./functions";
import { DOMSelectors } from "./dom";
console.log(DOMSelectors);
import { menu } from "./menu";
console.log(menu);


const getAllProducts = function (){
  menu
    .filter((food) => food.show.includes("all"))
    .forEach((food) => {
      console.log(food.name);
      DOMSelectors.cards.insertAdjacentElement(
    "afterbegin",
    `<div id = "one"> <img src="${food.img}
    <h1>${food.name}</h1></div>
    `);
  });
};
getAllProducts();


DOMSelectors.popular.addEventListener("click", function (loadPop) {
  clearFields();
  getPopular();
  loadPop.preventDefault();
  DOMSelectors.popular.disabled = true;
  remove();
});

DOMSelectors.instock.addEventListener("click", function (loadStock) {
  clearFields();
  getInStock();
  loadStock.preventDefault();
  DOMSelectors.instock.disabled = true;
  remove();
});

DOMSelectors.vegan.addEventListener("click", function (loadVeg) {
  clearFields();
  getVegan();
  loadVeg.preventDefault();
  DOMSelectors.vegan.disabled = true;
  remove();

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

const remove = function(){
  DOMSelectors.cards.remove();
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
