let menuBtn = document.querySelector(`.ham`);
let sideMenu = document.querySelector(`.sidemenu`);
let bar1 = document.querySelector(`.ham .bar:nth-of-type(1)`);
let bar2 = document.querySelector(`.ham .bar:nth-of-type(2)`);
let bar3 = document.querySelector(`.ham .bar:nth-of-type(3)`);
let menuOption = document.querySelectorAll(`.sidemenu ul li`);
let navigateToPort = document.querySelector(`.sidemenu ul li:nth-of-type(1)`);
let navigateToFooter = document.querySelector(`.sidemenu ul li:nth-of-type(2)`);
let navigateToPort2 = document.querySelector(`nav ul li:nth-of-type(1)`);
let navigateToFooter2 = document.querySelector(`nav ul li:nth-of-type(2)`);
let port =  document.getElementById("port");

menuBtn.addEventListener(`click`, ()=>{
    sideMenu.classList.toggle("reveal")
    bar1.classList.toggle("slantback")
    bar2.classList.toggle("middlebar")
    bar3.classList.toggle("slantfront")
})

menuOption.forEach((item)=>(
    item.addEventListener(`click`, ()=>{
        sideMenu.classList.remove("reveal")
        bar1.classList.remove("slantback")
        bar2.classList.remove("middlebar")
        bar3.classList.remove("slantfront")
    })
))

navigateToPort.addEventListener(`click`, ()=>{
    window.scrollTo(0, document.getElementById('port').offsetTop)
})
navigateToFooter.addEventListener(`click`, ()=>{
    window.scrollTo(0, document.getElementById('footer').offsetTop)
})
navigateToPort2.addEventListener(`click`, ()=>{
    window.scrollTo(0, document.getElementById('port').offsetTop)
})
navigateToFooter2.addEventListener(`click`, ()=>{
    window.scrollTo(0, document.getElementById('footer').offsetTop)
})