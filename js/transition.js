// Get OffsetTop from .biography
const biography = document.querySelector('.biography');
const offsetTop = biography.offsetTop;

window.onscroll = () => {
    if (window.scrollY > offsetTop-400) { 
        document.querySelector('.text-card h2').style.animation = 'fading 1s ease-in-out forwards'
        document.querySelector('img.jordan').style.animation= 'slideIn 1s ease-out forwards';
        document.querySelectorAll('.text-card > p').forEach(function (p) {
            p.style.animation = 'showText forwards .3s ease-in-out';
        });
    } else {
        biography.classList.remove('fixed');
    }
}