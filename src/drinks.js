function createDrinks() {
    const tabContent = document.createElement('div');
    tabContent.classList.add('tabcontent');
    tabContent.id = 'drinks';

    const drinksHeading = document.createElement('h1');
    drinksHeading.innerHTML = "Drinks";

    const mojito = document.createElement('h2');
    mojito.innerHTML = "Mint Mojito";

    const gimlet = document.createElement('h2');
    gimlet.innerHTML = "Sage Gimlet";


    const negroni = document.createElement('h2');
    negroni.innerHTML = "Tarragon Negroni";


    const julep = document.createElement('h2');
    julep.innerHTML = "Thyme Julep";


    const lemonade = document.createElement('h2');
    lemonade.innerHTML = "Rosemary Lemonade";


    tabContent.append(drinksHeading, mojito, gimlet, negroni, julep, lemonade);

    return tabContent;
}

export default function loadDrinks() {
    const content = document.querySelector('#content');
    content.append(createDrinks());
}