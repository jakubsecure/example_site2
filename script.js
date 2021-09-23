const parallax = document.body.querySelector('.sc')
const navBtn = document.body.querySelector('.nav-btn')
const nav = document.body.querySelector('nav')

window.addEventListener('scroll', function(){
    let offset = window.pageYOffset;
    parallax.style.positionY += (offset * 0.4 + "px")/2;

})

navBtn.addEventListener('click', function(){
    if(nav.classList.contains("navDown")){
        nav.classList.remove("navDown");
        nav.classList.add('navUp');
    }else{
        nav.classList.add("navDown")
        nav.classList.remove('navUp')
    }
})