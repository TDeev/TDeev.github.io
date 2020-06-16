// Шапка
let header = document.querySelector('.header-nav');
let header_logo = document.querySelector('.header-nav-logo-svg');
let header_logo_name = document.querySelector('.header-nav-logo-txt');
let header_url = document.querySelectorAll('.header-nav-list-items-item-url');
let header_basket = document.querySelector('.header-nav-basket-svg');
let header_search = document.querySelector('.header-nav-search-form-label-svg');
let header_search_input = document.querySelector('.header-nav-search-form-input');
let header_menu = document.querySelector('.header-nav-menu-label-line');

window.onscroll = function () {
  if (window.pageYOffset == 0) {
    header.classList.remove('scroll');
    header_logo.classList.remove('color');
    header_logo_name.classList.remove('color');
    header_url[0].classList.remove('color');
    header_url[1].classList.remove('color');
    header_url[2].classList.remove('color');
    header_url[3].classList.remove('color');
    header_url[4].classList.remove('color');
    header_url[5].classList.remove('color');
    header_url[6].classList.remove('color');
    header_url[7].classList.remove('color');
    header_basket.classList.remove('color');
    header_search.classList.remove('color');
    header_search_input.classList.remove('br-color');
    header_menu.classList.remove('bc-color');
  }
  else {
    header.classList.add('scroll');
    header_logo.classList.add('color');
    header_logo_name.classList.add('color');
    header_url[0].classList.add('color');
    header_url[1].classList.add('color');
    header_url[2].classList.add('color');
    header_url[3].classList.add('color');
    header_url[4].classList.add('color');
    header_url[5].classList.add('color');
    header_url[6].classList.add('color');
    header_url[7].classList.add('color');
    header_basket.classList.add('color');
    header_search.classList.add('color');
    header_search_input.classList.add('br-color');
    header_menu.classList.add('bc-color');
  }
}

// Видео
let video = document.querySelector('.presentation-video'),
  button = document.querySelector('.presentation-content-btn'),
  content = document.querySelector('.presentation-content');

button.addEventListener("click", function () {
  video.play()
  video.setAttribute("controls", "controls");
}, false);

button.onclick = function () {
  content.classList.add('hiden');
}