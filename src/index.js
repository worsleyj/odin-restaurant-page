import "./styles.css";
import "./reset.css";
import pizzaImage from "./img/awful-pizza.jpg";

const content = document.querySelector("#content");
const title = document.createElement("h1");
title.textContent = "Joey's Pizzeria";
const container = document.createElement("div");
container.className = "container";
const mainParagraph = document.createElement("p");
mainParagraph.textContent = "Welcome to Joey's Pizzeria, where we redefine your pizza experience with our uniquely unforgettable creations! Our signature pies feature an adventurous combination of toppings and crusts that push the boundaries of conventional flavor. Enjoy our boldly textured crust, baked to a delightfully uneven finish, and our distinctive cheese blend, offering a tangy surprise in every bite. Each pizza is a one-of-a-kind masterpiece, guaranteed to stimulate your taste buds and leave a lasting impression. Perfect for those who crave a pizza experience that's truly out of the ordinary"
const pizza = document.createElement("img");
pizza.src = pizzaImage;
pizza.alt = "awful looking pizza";

container.append(pizza);
container.append(mainParagraph);
content.append(title);
content.append(container);
console.log("test");