import "../styles/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import "./functions";
import { DOMSelectors } from "./dom";
console.log(DOMSelectors);
import { menu } from "./menu";
console.log(menu);

const clearFields = function () {
  DOMSelectors.popular.value = "";
  DOMSelectors.instock.value = "";
  DOMSelectors.vegan.value = "";
};
clearFields();

DOMSelectors.querySelectors("#popular").addEventListener(
  "click",
  function (loadPop) {
    clearFields();
    getPopular();
    loadPop.preventDefault();
  }
);

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
