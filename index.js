'use strict';

const root = document.getElementById('root');

const headerContainer = document.createElement('header');
root.appendChild(headerContainer);

const headerButton = document.createElement('button');
headerContainer.appendChild(headerButton);
headerButton.textContent = 'Нажми меня';

const createMenuButtonClickHandler = function () {
    let counter = 0;
    return function () {
        counter++;
        this.textContent = counter;
    };
};

const createMenu = () => {
    const menuContainer = document.createElement('div');
    menuContainer.setAttribute('id', 'menu');
    menuContainer.setAttribute('class', 'menu');
    menuContainer.style.top =
        headerContainer.offsetTop + headerContainer.offsetHeight + 'px';

    const menuText = document.createElement('span');
    menuContainer.appendChild(menuText);
    menuText.innerHTML += 'Это просто бесполезный текст';

    const menuInput = document.createElement('input');
    menuContainer.appendChild(menuInput);
    menuInput.setAttribute('placeholder', 'Напиши сюда текст');

    const menuButton = document.createElement('button');
    menuContainer.appendChild(menuButton);
    menuButton.textContent = 'Это кнопка';
    const handler = createMenuButtonClickHandler();
    menuButton.addEventListener('click', handler);

    return menuContainer;
};

let menuContainer = createMenu();
let active = false;

headerButton.addEventListener('click', (event) => {
    event.stopPropagation();
    if (active) {
        active = false;
        headerContainer.removeChild(menuContainer);
    } else {
        active = true;
        headerContainer.appendChild(menuContainer);
    }
});

menuContainer.addEventListener(
    'click',
    (event) => {
        event.stopPropagation();
    },
    false,
);

document.addEventListener('click', () => {
    if (active) {
        active = false;
        headerContainer.removeChild(menuContainer);
    }
});
