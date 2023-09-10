// header Toogle

let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function (e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

let typed = new Typed('.auto-input', {
    strings: ['Full-Stack Developer', 'Freelancer', 'Ui Designer'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
})