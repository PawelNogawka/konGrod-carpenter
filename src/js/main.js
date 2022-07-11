const burgerBtn = document.querySelector(".header__menu-btn");
const nav = document.querySelector(".header__nav");
const logo = document.querySelector(".header__logo");
const links = document.querySelectorAll(".header__nav-link");
const header = document.querySelector(".header");
const closeBtn = document.querySelector(".projects__popup span");


const imgIcon = document.querySelectorAll('.projects__icon i')
const images = document.querySelectorAll('.projects__img');

const sections = document.querySelectorAll(".section");

imgIcon.forEach(function(icon){
  icon.addEventListener('click', function(e){
    let image = e.target.parentElement.previousElementSibling
    let imageSrc = image.src
    let imageAlt = image.getAttribute('alt')
    
    showPopup(imageSrc,imageAlt)
  })
})



images.forEach(function(image){
image.onclick = () => {
 
let src = image.getAttribute('src')
let alt = image.getAttribute('alt')
showPopup(src,alt)
}
})

function showPopup(src,alt){

  let popup = document.querySelector('.projects__popup');
  let popupImg =  document.querySelector('.projects__popup-img');

  popup.style.display = 'block';
  popupImg.src = src;
  popupImg.alt = alt
}



closeBtn.onclick = () =>{
  document.querySelector('.projects__popup').style.display = 'none';
}


function handleNav() {
  nav.classList.toggle("header__nav--active");

  burgerBtn.classList.toggle("header__menu-btn--active");

  logo.classList.toggle("header__logo--active");

  logo.addEventListener("click", function () {
    nav.classList.remove("header__nav--active");
    logo.classList.remove("header__logo--active")
    burgerBtn.classList.remove("header__menu-btn--active")
  });
}

function handleHeader() {
  let top = window.scrollY;

  sections.forEach(function (section) {
    let offset = section.offsetTop;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");
    let home = document.querySelector('.home')

    if (top >= offset - 72 && top < offset + height) {
      links.forEach(function (link) {
        link.addEventListener("click", function () {
          nav.classList.remove("header__nav--active");
          burgerBtn.classList.remove("header__menu-btn--active");
        });
        link.classList.remove("header__nav-link--active");
        document
          .querySelector(".header__nav-link[href*=" + id + "]")
          .classList.add("header__nav-link--active");
      });
      
    }
    else if(top <= home.offsetTop){
      links.forEach(function(link){
       link.classList.remove('header__nav-link--active')
      })
    }
  });

  header.classList.toggle("header--sticky", top > 0);
}







const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  autoplay: {
    delay: 5000,
    pauseOnMouseEnter:true,
    disableOnInteraction:false
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});







window.addEventListener("scroll", handleHeader);
window.addEventListener('scroll',handleHeader)

burgerBtn.addEventListener("click", handleNav);

