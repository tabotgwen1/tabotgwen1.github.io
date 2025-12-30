const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});
/* Fallback image (shows if video doesn't load) */
.video-fallback {
    position: absolute;
    inset: 0;
    background: url("images/hero-fallback.jpg") center/cover no-repeat;
    z-index: 0;
}

/* Ensure video sits above fallback */
.hero-video video {
    z-index: 1;
}
