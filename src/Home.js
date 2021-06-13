import shapes from './shapes.jpg';


function createHome() {
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');

    const h2 = document.createElement('h2')
    h2.textContent = "123 Fake Street, St. Helena, CA 45678"
    h2.classList.add('wrapperChild');

    const h1 = document.createElement('h1');
    h1.textContent = " Herbs, Spice, Aroma."
    h1.classList.add('wrapperChild');

    const button = document.createElement('button');
    button.textContent = "Reserve Table";
    button.classList.add('wrapperChild');

    const browse = document.createElement('a');
    browse.href = "menu link";
    browse.classList.add('wrapperChild');

    const homeImage = document.createElement('img');
    homeImage.src = shapes;

    wrapper.appendChild(h2)
    wrapper.appendChild(h1)
    wrapper.appendChild(button)
    wrapper.appendChild(browse)
    wrapper.appendChild(homeImage)

    return wrapper;
}

export default function loadContent() {
    const content = document.querySelector('#content');
    content.textContent = "";
    content.appendChild(createHome())
}