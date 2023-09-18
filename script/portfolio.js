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
openBtn.addEventListener('click',function(){
    
    openBtn.style.display ='none'
    closeBtn.style.display = 'flex'
    nav.style.filter = 'opacity(100%)'
    nav.style.transform = 'translateY(0)'
    openLogo.style.filter = 'opacity(100%)'
    logo.style.filter = 'opacity(0)'
})
closeBtn.addEventListener('click',function(){
    
    closeBtn.style.display = 'none'
    openBtn.style.display = 'flex'
    nav.style.filter = 'opacity(0)'
    nav.style.transform = 'translateY(30px)'
    openLogo.style.filter = 'opacity(0)'
    logo.style.filter = 'opacity(100%)'
})
