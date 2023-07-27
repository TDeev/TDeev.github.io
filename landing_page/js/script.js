//*Шапка
// let header = document.getElementsByClassName('header-nav');
// let header = document.querySelector('.header-nav');

// window.onscroll = function () {
//   if (window.pageYOffset == 0) {
//     header.classList.remove('header-nav--top');
//   }
//   else {
//     header.classList.add('header-nav--top');
//   }
// }


//*Видео
let video = document.querySelector('.presentation-video'), // видео файл
  button = document.querySelector('.presentation-btn'); // кнопка
// content = document.querySelector('.presentation-content'); // контент, который нужно скрыть

button.addEventListener("click", function () {
  video.play()
  video.setAttribute("controls", "controls");
}, false);

button.onclick = function () {
  button.classList.add('presentation-btn--hiden');
}