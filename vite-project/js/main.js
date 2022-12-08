import "../styles/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

import { menu } from "./menu";
console.log(menu);

document.querySelector("#app").innerHTML = `
  <div>
  <p></p>
  </div>
`;

setupCounter(document.querySelector("#counter"));
