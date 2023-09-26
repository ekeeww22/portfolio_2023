const closeBtn = document.querySelector('.btn .close_btn')
const logo = document.querySelector('.logo')
const openLogo = document.querySelector('.open_logo')
const nav = document.querySelector('nav > ul')
const mNav = document.querySelector('.m_nav')
const openBtn = document.querySelector('.open_btn')
console.log(mNav, logo, openLogo, nav, openBtn)
mNav.style.display = 'none'
nav.style.filter = 'opacity(0)'
nav.style.transform = 'translateY(30px)'
openLogo.style.filter = 'opacity(0)'
closeBtn.style.display = 'none'
openBtn.addEventListener('click',function(e){
    e.preventDefault()
    openBtn.style.display ='none'
    closeBtn.style.display = 'flex'
    nav.style.filter = 'opacity(100%)'
    nav.style.transform = 'translateY(0)'
    openLogo.style.filter = 'opacity(100%)'
    logo.style.filter = 'opacity(0)'
})
closeBtn.addEventListener('click',function(e){
    e.preventDefault()
    closeBtn.style.display = 'none'
    openBtn.style.display = 'flex'
    nav.style.filter = 'opacity(0)'
    nav.style.transform = 'translateY(30px)'
    openLogo.style.filter = 'opacity(0)'
    logo.style.filter = 'opacity(100%)'
})
// 마우스 움직일 때 이벤트 
// client : 브라우저 에서 마우스를 얼만큼 움직였는지 값
const mouseImg = document.querySelector('#mouse')
console.log(mouseImg) 
window.addEventListener('mousemove',function(e){ // 마우스를 움직이면 매개변수 e에 정보가 담긴다.
    /* console.log(e) */
    mouseImg.style.left = `${e.clientX}px`
    mouseImg.style.top = `${e.clientY}px`
})