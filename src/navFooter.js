import createHome from './Home';

function createNav() {
    const nav = document.createElement('nav');
    // const content = document.querySelector('#content')

    const homeButton = document.createElement('a');
    homeButton.href = 'link'
    homeButton.innerHTML = 'Home'
    const menuButton = document.createElement('a');
    menuButton.href = 'link';
    menuButton.innerHTML = 'Menu'
    const drinksButton = document.createElement('a');
    drinksButton.href = 'link';
    drinksButton.innerHTML = 'Drinks'
    const aboutButton = document.createElement('a');
    aboutButton.href = 'link';
    aboutButton.innerHTML = 'About'


    const arome = document.createElement('h3');
    arome.innerHTML = "arôme";

    nav.appendChild(arome);

    nav.appendChild(aboutButton);
    nav.appendChild(drinksButton);
    nav.appendChild(menuButton);
    nav.appendChild(homeButton);
    // content.appendChild(nav);

    return nav;
}

function createFooter() {
    const footer = document.createElement('div');
    footer.classList.add('footer');
    const pFooter = document.createElement('p')
    pFooter.innerHTML = 'Concept by Sana Khalid';
    const gitLink = document.createElement('a');
    gitLink.href = 'https://github.com/SanaWalla';
    gitLink.innerHTML = 'GitHub';


    footer.append(pFooter);
    footer.append(gitLink);
    return footer;
}


export default function loadNav() {
    const content = document.querySelector('#content');
    const homeOverlay = document.createElement('div');
    homeOverlay.classList.add('homeOverlay');
    content.append(createNav());
    content.append(createHome());
    content.append(homeOverlay);
    content.append(createFooter());
    console.log(content);
}