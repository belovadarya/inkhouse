document.getElementById("burger").addEventListener("click", function() {
    document.querySelector(".header__bottom").classList.toggle("open");
    document.querySelector(".cart").classList.toggle("none"); 
})

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}

document.getElementById("click").addEventListener("click", function() {
    document.getElementById("france").scrollIntoView({
        behavior: "smooth",
        block: "start",
    })
    document.getElementById("france").click();
})

const tabsTitle = document.querySelectorAll('.tab__title');
const tabsContent = document.querySelectorAll('.tab__content');

tabsTitle.forEach(item => item.addEventListener('click', event => {

    const tabsTitleTarget = event.target.getAttribute('data-tab');

    tabsTitle.forEach(element => element.classList.remove('active-tab'));

    tabsContent.forEach(element => element.classList.add('hidden-tab-content'));

    item.classList.add('active-tab');

    document.getElementById(tabsTitleTarget).classList.remove('hidden-tab-content')

}));

document.querySelector('[data-tab="tab-1"]').classList.add('active-tab');
document.querySelector('#tab-1').classList.remove('hidden-tab-content');