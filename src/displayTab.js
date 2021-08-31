export default function displayTab(tablink, tabID) {
    const tabContent = document.querySelectorAll('.tabContent');
    const tabLinks = document.querySelectorAll('.tabLinks');


    document.querySelector(tablink).addEventListener('click', function (e) {
        e.preventDefault();

        tabLinks.forEach(function (TL) {
            TL.classList.remove('active');
        })

        tabContent.forEach(function (Tcontent) {
            Tcontent.style.display = 'none';
        })

        document.getElementById(tabID).style.display = 'block'

        document.querySelector(tablink).classList.add('active');

    })
}

function displayHome(tablink) {
    document.querySelector(tablink).addEventListener('click', function (e) {
        e.preventDefault();
        const tabContent = document.querySelectorAll('.tabContent');
        tabContent.forEach(function (Tcontent) {
            Tcontent.style.display = 'none';
        })
    })
}

