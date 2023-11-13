var clickImage1 = document.querySelector("header a:nth-of-type(1) img");
var clickImage2 = document.querySelector("header a:nth-of-type(2) img");
var clickImage3 = document.querySelector("header a:nth-of-type(3) img");
var displayImage=document.querySelector("main img");
var firstName=document.querySelectorAll("span");
var snackName =document.querySelector("section h1");
var description= document.querySelector(".drpt");
var butt=document.querySelector("button");

clickImage1.addEventListener("click", function () {
    displayImage.setAttribute("src", "Minimie-Chinchin-Sachet-768x622.png");
    snackName.innerHTML="<span>Tasty</span> 'n' <span>Crunchy</span>";
    description.textContent="Minimie chinchin treats people with love and care reminiscent of what mom made at home with a fun angle to it. As a brand we love to have fun and encourage people to do the same and forget life's drudgery and monotony. in every crunch of our cubes you will \"Taste the fun\"";
    clickImage1.style.backgroundColor= "rgba(204, 201, 201, 0.2)";
    clickImage2.style.backgroundColor= "white";
    clickImage3.style.backgroundColor= "white";
    snackName.style.color="rgb(255, 154, 21)";
    butt.style.backgroundColor="rgb(255, 154, 21)";
    document.querySelector("hr").style.backgroundColor="rgb(255, 154, 21)";
})
function effect() {
    displayImage.setAttribute("src", "HotAndSpicyPAckMockUp-768x615 (1).png");
    snackName.innerHTML="<span>Hot</span> 'n' <span>Spicy</span>";
    description.textContent="Not everyone amongst us dare to savour the spiciness of life, all the while having fun alongside. Hot and spicy is a savoury chinchin just made for them to celebrate daring personalities. You no fit try am - only for those who dare.";
    clickImage1.style.backgroundColor= "white";
    clickImage2.style.backgroundColor= "rgba(204, 201, 201, 0.2)";
    clickImage3.style.backgroundColor= "white";
    snackName.style.color="red"
    document.querySelector("hr").style.backgroundColor="red";
    butt.style.backgroundColor="red";
}
clickImage2.addEventListener("click", effect );

clickImage3.addEventListener("click", function () {
    displayImage.setAttribute("src", "Minimie-Chinchin-jar-768x622.png");
    snackName.textContent="Snack Jar";
    description.textContent="Fun is multiplied when Shared. Taste the fun with friends and family with our biggest pack. No forget to share am o.";
    clickImage1.style.backgroundColor= "white";
    clickImage2.style.backgroundColor= "white";
    clickImage3.style.backgroundColor= "rgba(204, 201, 201, 0.2)";
    snackName.style.color="rgb(255, 154, 21)";
    butt.style.backgroundColor="rgb(255, 154, 21)";
    document.querySelector("hr").style.backgroundColor="rgb(255, 154, 21";
})
