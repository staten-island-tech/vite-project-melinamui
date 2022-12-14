import "../styles/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

import { menu } from "./menu";
console.log(menu);

import { DOMSelectors } from "./dom";
console.log(DOMSelectors);

let getPopular = function () {
  data
    .filter((food) => food.menu.popular.includes("yes"))
    .forEach((food) => food.menu.name);
};
console.log(getPopular);

/*document.querySelector("#app").innerHTML = `
  <div>
  <p></p>
  </div>
`;

setupCounter(document.querySelector("#counter"));
*/
