export default function displayTab(tablink, tabName) {
    const tabContentDisplay = document.querySelectorAll('.tabcontent');


    tabContentDisplay.forEach(function (tabDisplay) {
        tabDisplay.style.display = 'none';
    })

    document.querySelector(tablink).classList.remove('active');

    // tabLinks.forEach(function (tabLink) {
    //     tabLink.addEventListener('click', function () {
    //         console.log('hello')
    //         document.getElementById(tabName).style.display = 'block';
    //         document.getElementById(tabName).classList.add('active');
    //     })
    // })

    document.querySelector(tablink).addEventListener('click', function () {
        console.log('hello')
        document.getElementById(tabName).style.display = 'block';
        document.getElementById(tabName).classList.add('active');
    })

}

