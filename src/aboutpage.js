function makeAboutPage() {
    const aboutTitle = document.createElement("h1");
    aboutTitle.textContent = "About Joey's Pizzeria";
    content.append(aboutTitle);

    const aboutText = document.createElement("p");
    aboutText.textContent = "Joey's Pizzeria was once a beacon of hope for the small, tightly-knit town of Pinewood. Joey Russo, the son of Italian immigrants, inherited the family recipe book and decided to follow his dream of opening a pizzeria. His parents had made a modest living selling homemade pasta sauces at local markets, and Joey was determined to take their legacy to the next level. However, Joey’s passion for pizza wasn’t matched by his talent in the kitchen. While his heart was in the right place, Joey was never quite able to master the delicate art of pizza making. He often cut corners, using cheaper ingredients to save money, and relied on outdated equipment that his parents had passed down to him. Despite numerous complaints from customers about undercooked dough, tasteless sauce, and rubbery cheese, Joey refused to change his ways. He believed his pizzas were authentic and that his critics simply didn't appreciate real Italian cuisine. To make matters worse, Joey’s lack of business acumen led to poor management decisions. He hired inexperienced staff, many of whom were high school friends more interested in hanging out than making good food. Orders were often wrong, deliveries were late, and the restaurant's cleanliness left much to be desired. The pizzeria quickly gained a reputation as the worst eatery in town. Yet, Joey's Pizzeria managed to survive, becoming something of a local joke. The residents of Pinewood began to find humor in the consistently terrible pizzas and the absurdity of the restaurant’s continued existence. Some even started to order from Joey's just for the experience, treating it as a dare or a challenge. Despite all this, Joey remained blissfully unaware of his pizzeria’s notoriety, convinced that he was honoring his family's legacy. Joey's Pizzeria became a symbol of stubbornness and denial, where the dream of great pizza was consistently out of reach, but the spirit of determination—however misguided—was undeniably strong.";
    content.append(aboutText);
}

export {makeAboutPage};


