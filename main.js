'use strict'
var gIsClicked = false;

function toggleMenu(){
    document.body.classList.toggle('open-menu');
    var elMenuBtn = document.querySelector('.menu-btn');
    if(gIsClicked){
        gIsClicked = false;
        elMenuBtn.innerText = '☰'
    } else {
        gIsClicked = true;
        elMenuBtn.innerText = '✖️'
    }
    var elActive = document.querySelector('.active');
    if (elActive) elActive.classList.remove('active');
}

function onToggleModal(){
    document.querySelector('.screen-modal').classList.toggle('show-modal');
}