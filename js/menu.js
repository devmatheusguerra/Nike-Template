// Toggle the menu
const menu_button = document.querySelector('#menu');
const layer = document.querySelector('#layer');
const menu = document.querySelector('.block_menu');
const back_button = document.querySelector('#back_button');
menu_button.onclick = () => {
    layer.style.display = 'block';
    setTimeout(() => {
        layer.style.opacity = 1;
    }, 100);
    menu.style.left = 0;
}

back_button.onclick = () => {
    layer.style.opacity = 0;
    setTimeout(() => {
        layer.style.display = 'none';
    }, 300);
    menu.style.left = '-100%';
}

layer.onclick = () => {
    layer.style.opacity = 0;
    setTimeout(() => {
        layer.style.display = 'none';
    }, 300);
    menu.style.left = '-100%';
}

