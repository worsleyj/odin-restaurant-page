function makeMenuPage() {
    const menuTitle = document.createElement("h1");
    menuTitle.textContent = "Joey's Special Pizzas";
    content.append(menuTitle);

    const menuList = document.createElement("ul");
    const menuItems = ["The Sloppy Slice Surprise",
    "The Oozing Outrage",
    "The Stale Crust Catastrophe",
    "The Uncooked Delight",
    "The Gummy Cheese Special",
    "The Burnt Edge Blunder",
    "The Overstuffed Mess",
    "The Regretful Remnant"];
    menuItems.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    menuList.append(listItem);
    })

    content.append(menuList);
}

export {makeMenuPage};