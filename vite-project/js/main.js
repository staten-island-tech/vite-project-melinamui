import "../styles/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import "./functions";

import { DOMSelectors } from "./dom";
console.log(DOMSelectors);

DOMSelectors.form.addEventListener("submit", function (clickPop) {
  getPopular();
  clickPop.preventDefault();
});
/*document.querySelector("#app").innerHTML = `
  <div>
  <p></p>
  </div>
`;

setupCounter(document.querySelector("#counter"));
*/
