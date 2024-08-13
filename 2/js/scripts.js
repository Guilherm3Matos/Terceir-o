/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 
let likeprof = 0
let deslikeprof = 0
let venda = 0
let likeE = 0
let deslikeE = 0
let likeAC = 0
let deslikeAC = 0
let likeBD = 0
let deslikeBD = 0
saida = ''

function curtirprof(){
    
    likeprof = likeprof + 1
    saida = `Like: ${likeprof} Deslike: ${deslikeprof}`
    document.getElementById('resultprof').innerText = saida
}

function paiaprof(){
    
    deslikeprof = deslikeprof + 1
    saida = `Like: ${likeprof} Deslike: ${deslikeprof}`
    document.getElementById('resultprof').innerText = saida
}

function curtir3e(){
    likeE = likeE + 1
    saida = `Like: ${likeE} Deslike: ${deslikeE}`
    document.getElementById('result3e').innerText = saida
}

function paia3e(){
    deslikeE = deslikeE + 1
    saida = `Like: ${likeE} Deslike: ${deslikeE}`
    document.getElementById('result3e').innerText = saida
}
function curtir3bd(){
    likeBD = likeBD + 1
    saida = `Like: ${likeBD} Deslike: ${deslikeBD}`
    document.getElementById('result3bd').innerText = saida
}

function paia3bd(){
    deslikeBD = deslikeBD + 1
    saida = `Like: ${likeBD} Deslike: ${deslikeBD}`
    document.getElementById('result3bd').innerText = saida
}
function curtir3ac(){
    likeAC = likeAC + 1
    saida = `Like: ${likeAC} Deslike: ${deslikeAC}`
    document.getElementById('result3ac').innerText = saida
}

function paia3ac(){
    deslikeAC = deslikeAC + 1
    saida = `Like: ${likeAC} Deslike: ${deslikeAC}`
    document.getElementById('result3ac').innerText = saida
}

function comprar(){
    saida = ''
    venda = venda + 1
    saida = `Vendas: ${venda}`
    document.getElementById('resultcomprar').innerText = saida
}

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
