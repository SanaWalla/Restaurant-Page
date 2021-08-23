export default function displayTab() {
    const tabContentDisplay = document.querySelectorAll('.tabcontent');


    tabContentDisplay.forEach(function (tabDisplay) {
        tabDisplay.style.display = 'none';
    })

}