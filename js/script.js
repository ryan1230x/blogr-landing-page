const navbarTogglerIcon = document.getElementById("navbar-toggler-icon");
const navbarDropDownLinks = document.querySelectorAll(".dropdown-link");
const mobileNavigationMenu = document.querySelector(".mobile-navigation");

const openIcon = "./images/icon-hamburger.svg",
closeIcon = "./images/icon-close.svg"

navbarTogglerIcon.addEventListener("click", function(){
  if(this.classList.contains("closed")) {
    this.src = closeIcon; 
    mobileNavigationMenu.style.display = "block"
    this.classList.toggle("closed");
  } else {
    this.src = "./images/icon-hamburger.svg"
    mobileNavigationMenu.style.display = "none"
    this.classList.toggle("closed")
  }
});

navbarDropDownLinks.forEach(link => {
  link.addEventListener("click", function() {
    this.classList.toggle("open");
  })
})
