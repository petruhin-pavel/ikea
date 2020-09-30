'use strict';

// day 1

const btnBurger = document.querySelector('.btn-burger'); //получаем кнопку бургер
const catalog = document.querySelector('.catalog'); // получаем меню каталог
//const overlay = document.querySelector('.overlay'); //создали ниже
const btnClose = document.querySelector('.btn-close');
//const catalogList = document.querySelector('.catalog-list');
const subCatalog = document.querySelector('.subcatalog');
const subCatalogHeader = document.querySelector('.subcatalog-header');
const btnReturn = document.querySelector('.btn-return');


const overlay = document.createElement('div'); // создаем оверлей
overlay.classList.add('overlay');
document.body.insertAdjacentElement('beforeend', overlay);

// открыть меню
const openMenu = () => {
  catalog.classList.add('open');
  overlay.classList.add('active');
};
//закрыть меню
const closeMenu = () => {
  closeSubMenu();
  catalog.classList.remove('open');
  overlay.classList.remove('active');
};

const openSubMenu = (event) => {
  event.preventDefault(); //отменяет стандартное поведение браузера
  const itemList = event.target.closest('.catalog-list__item');
  if (itemList) {
    subCatalogHeader.innerHTML = itemList.innerHTML; // перенос верстки (копирование)
    subCatalog.classList.add('subopen');
  };
};

const closeSubMenu = () => {
  subCatalog.classList.remove('subopen');
}

//события
btnBurger.addEventListener('click', openMenu);
btnClose.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
catalog.addEventListener('click', openSubMenu);
btnReturn.addEventListener('click', closeSubMenu);


// закрыть меню клавишей Ecape
document.addEventListener('keydown', (event) => {
  if (event.code === 'Escape') {
    closeMenu();
  };
});

