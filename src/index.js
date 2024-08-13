import "./styles.css";
import "./reset.css";
import { makeHomePage } from "./homepage";
import { makeMenuPage } from "./menupage";

const homeButton = document.querySelector(".home-button");
const menuButton = document.querySelector(".menu-button");
const aboutButton = document.querySelector(".about-button");

homeButton.addEventListener("click", () => {
    content.textContent = "";
    makeHomePage();
})

menuButton.addEventListener("click", () => {
    content.textContent = "";
    makeMenuPage();
})

aboutButton.addEventListener("click", () => {
    content.textContent = "";
    makeHomePage();
})