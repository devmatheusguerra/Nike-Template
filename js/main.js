const color_buttons = document.querySelectorAll('.colors img');
const size_buttons = document.querySelectorAll('.sizes span');
const image = document.querySelector('.emphasis');

// Change the size of the product
size_buttons.forEach(function (size_button) {
    size_button.addEventListener('click', function () {
        if (!size_button.classList.contains('disabled')) {
            // Reset all the buttons
            size_buttons.forEach(function (size_button) {
                size_button.classList.remove('selected');
            });

            // Add the selected class to the button that was clicked
            size_button.classList.add('selected');
        }

    });
})


// Change the color of the product
let current_rotate = 10;
color_buttons.forEach(function (color_button) {
    color_button.addEventListener('click', function () {
        if (!color_button.classList.contains('disabled')) {
            // Reset all the buttons
            color_buttons.forEach(function (color_button) {
                color_button.classList.remove('selected');
            });

            // Add the selected class to the button that was clicked
            color_button.classList.add('selected');

            // Change the image
            let choosen_color = color_button.src.split('/');
            choosen_color = choosen_color[choosen_color.length - 1];

            // Transition the image
            image.classList.toggle('transition-all');

            setTimeout(() => {
                // Transition the image
                image.classList.toggle('transition-all');
                image.src = `./assets/img/shoes-${choosen_color}`;
            }, 700);
        }

    });
});


// Add the product to the cart
const add_to_cart = document.querySelector('#btn_add_cart');
const badge = document.querySelector('.badge');
const basket = document.querySelector('#basket');
add_to_cart.onclick = () => {

    //  Get the position of the image
    const { top, right, width, height } = image.getBoundingClientRect();
    // Get the screen size
    const screen_X = window.innerWidth;
    const screen_Y = window.innerHeight;
    console.log(top, right, width, height, screen_X, screen_Y);
    // Create new image
    const img = document.createElement('img');
    img.src = image.src;
    img.style.position = 'fixed';
    img.style.right = screen_X - right + 'px';
    img.style.top = top + 'px';
    img.style.transform = ` scale(1) rotate(${current_rotate}deg)`;
    img.style.width = width + 'px';
    img.style.height = height + 'px';
    img.style.zIndex = '9999';
    img.style.transition = 'all 1s ease-out';
    // Add the image to the body
    document.body.appendChild(img);

    setTimeout(() => {
        img.style.opacity = 0;
        img.style.transform = "rotate(360deg) scale(.5) translate(10%, -50%)";
        img.style.right = "0";
        img.style.top = "0";
        img.style.opacity = "0 !important";
        badge.style.opacity = 0;
    }, 100);

    setTimeout(() => {
        //  Remove the element
        document.body.removeChild(img);
        badge.innerText = parseInt(badge.innerText) + 1;
        basket.classList.add('basket-jump');
    }, 1000);

    setTimeout(() => {
        basket.classList.remove('basket-jump');
        badge.style.opacity = 1;
    }, 2000);

}


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


