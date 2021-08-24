import createHome from './Home';

function createNav() {
    const nav = document.createElement('nav');
    // const content = document.querySelector('#content')

    const homeButton = document.createElement('a');
    homeButton.href = '';
    homeButton.innerHTML = 'Home';
    homeButton.classList.add('tabLinks');
    const menuButton = document.createElement('a');
    menuButton.href = '';
    menuButton.innerHTML = 'Menu';
    menuButton.classList.add('menuTabLink');
    const drinksButton = document.createElement('a');
    drinksButton.href = '';
    drinksButton.innerHTML = 'Drinks';
    drinksButton.classList.add('tabLinks');
    const aboutButton = document.createElement('a');
    aboutButton.href = '';
    aboutButton.innerHTML = 'About';
    aboutButton.classList.add('tabLinks')


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