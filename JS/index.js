window.addEventListener('load',()=>{
    document.querySelector('.loader').style.display = 'none';
})

let hamburger = document.querySelector('.hamburger');
let ul = document.querySelector('nav ul')
hamburger.addEventListener('click', () => {
    ul.classList.toggle('active');
});
const nav_link = document.querySelectorAll('.nav_link');
nav_link.forEach(link => {link.addEventListener('click',()=>{
    ul.classList.toggle('active');
})})

document.querySelector(".blog").addEventListener('mouseover',function(){
    this.nextElementSibling.classList.toggle('active');
});
document.querySelector(".blog").addEventListener('mouseleave',function(){
    this.nextElementSibling.classList.toggle('active');
});
//accordion


const accordionBtn = document.querySelectorAll('.accordion_btn');

accordionBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.nextElementSibling.classList.toggle('active');
        const arrow = btn.querySelector('i');
        arrow.classList.toggle('fa-arrow-up');

    })
});

// owl carousel
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        items: 1,
        navigation: true,
        navigationText: ["<i class = 'fa fa-arrow-left'></i>", "<i class = 'fa fa-arrow-right'></i>"],
        autoplay:true,
        loop:true,
        freeDrag:false,
        autoplayTimeout : 8000,
        nav:true,
        dot:false,
    });
});

//aos JS
AOS.init();
//scroll up 
$(function () {
    $.scrollUp({
        scrollName: 'scrollUp',      
        scrollDistance: 300,         
        scrollFrom: 'top',          
        scrollSpeed: 300,      
        easingType: 'linear',       
        animation: 'fade',           
        animationSpeed: 200,        
        scrollTrigger: false,       
        scrollTarget: false,        
        scrollText: '<i class="fas fa-arrow-up"></i>', 
        scrollTitle: false,        
        scrollImg: false,          
        activeOverlay: false,        
        zIndex: 2147483647    
    });
});
