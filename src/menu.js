function createMenu() {
    const tabContent = document.createElement('div');
    tabContent.classList.add('tabcontent');

    const sage = document.createElement('h2');
    sage.innerHTML = "sage";
    const sageP = document.createElement('p')
    sageP.innerHTML = "fettucine, broccoli, tilapia"
    sage.classList.add('menuItem');

    const cilantro = document.createElement('h2');
    cilantro.innerHTML = "cilantro";
    const cilantroP = document.createElement('p')
    cilantroP.innerHTML = "enchiladas, cilantro rice, beans"
    cilantro.classList.add('menuItem');

    const parsley = document.createElement('h2');
    parsley.innerHTML = "parsley";
    const parsleyP = document.createElement('p')
    parsleyP.innerHTML = "tabouleh, shawarma, pita"
    parsley.classList.add('menuItem');

    const dill = document.createElement('h2');
    dill.innerHTML = "dill";
    const dillP = document.createElement('p')
    dillP.innerHTML = "fried chicken, potatoes, dill ranch"
    dill.classList.add('menuItem');

    const chive = document.createElement('h2');
    chive.innerHTML = "chive";
    const chiveP = document.createElement('p')
    chiveP.innerHTML = "mashed potatoes, steak, asparagus"
    chive.classList.add('menuItem');

    const oregano = document.createElement('h2');
    oregano.innerHTML = "oregano";
    const oreganoP = document.createElement('p')
    oreganoP.innerHTML = "beef lasagna, salad"
    oregano.classList.add('menuItem');

    tabContent.append(sage, cilantro, parsley, dill, chive, oregano);
    sage.append(sageP);
    cilantro.append(cilantroP);
    parsley.append(parsleyP);
    dill.append(dillP);
    chive.append(chiveP);
    oregano.append(oreganoP);
    return tabContent;
}

export default function loadMenu() {
    const content = document.querySelector('#content');
    content.append(createMenu());
}