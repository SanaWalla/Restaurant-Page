function createAbout() {
    const tabContent = document.createElement('div');
    tabContent.classList.add('tabcontent');
    tabContent.id = 'about';

    const aboutParagraph = document.createElement('h4');
    aboutParagraph.innerHTML = "arôme was created to savor dishes from around the world, with the focus on fresh herbs. Herbs define different foods, culture, and experiences. Curated with a rotating menu of seasonal foods, join us for a meal and an experience."

    tabContent.append(aboutParagraph);
    return tabContent;
}

export default function loadAbout() {
    const content = document.querySelector('#content');
    content.append(createAbout());
}