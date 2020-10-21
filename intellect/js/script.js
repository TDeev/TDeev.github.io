//============ЛЕВОЕ МЕНЮ============

//элемент левой меню
let navParent = document.querySelectorAll('.navbar-menu-list-item-content');

for (let i = 0; i < navParent.length; i++) {
  navParent[i].onclick = function () {
    navParent[i].classList.toggle('open');
  }
}

//============ФИЛЬТР============

//блок фильтра
// let filter = document.querySelector('.content-filter');

//кнопка фильтра
// let filterButton = document.querySelector('.content-controls-actions-filter');

//иконка закрытия фильтра
// let filterClose = document.querySelector('.content-filter-header-close');

//Открытие и закрытие фильтра
// filterButton.onclick = function () {
//   filter.classList.toggle('open');
// }

//Закрытие фильтра
// filterClose.onclick = function () {
//   filter.classList.remove('open');
// }

//============ЛЕВОЕ МЕНЮ НАВИГАЦИИ============

let body = document.querySelector('body');

let navButton = document.querySelector('.navbar-head-btn');


//нажатие на кнопку навигации

navButton.onclick = function () {
  body.classList.toggle('navbar-close');
  // console.log('Салам!');
}

//============РАЗМЕР ЭКРАНА============

//определение размера экрана
if (innerWidth <= 992) {
  body.classList.add('navbar-close');
}

//отслеживание изменения размера окна браузера
window.onresize = function () {
  // alert('Размер окна был изменен!');

  if (window.innerWidth <= 992) {
    body.classList.add('navbar-close');
  }
  else {
    body.classList.remove('navbar-close');
  }
}

