import { closeMenu } from "./closeMenu.js";
import { closeMenuOut } from "./closeMenuOut.js";
import { menuAnimation } from "./MenuAnimation.js";
import { activeFaq } from "./activeFaq.js";
import { changeMenuIcon } from "./changeMenuIcon.js";

document.addEventListener("DOMContentLoaded", () => {
  menuAnimation();
  window.addEventListener("scroll", menuAnimation);
});

changeMenuIcon();
activeFaq();
closeMenuOut();
closeMenu();
changeMenuIcon();
