import "./styles.css";
import "./reset.css";
import {makeHomePage} from "./other";

const menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", () => {
    content.textContent = "";
    makeHomePage();
})