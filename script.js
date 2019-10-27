/* 1e hartje */

var zwarthartje1 = document.querySelector('#zwartebutton1')
var roodhartje1 = document.querySelector('#rodebutton1')


function zwarthartjebutton1(event) {
    zwarthartje1.classList.add('displayhartje')
    roodhartje1.classList.remove('displayhartje')
}

function roodhartjebutton1(event) {
    zwarthartje1.classList.remove('displayhartje')
    roodhartje1.classList.add('displayhartje')
}

zwarthartje1.addEventListener('click', zwarthartjebutton1);
roodhartje1.addEventListener('click', roodhartjebutton1);


/* 2e hartje*/

var zwarthartje2 = document.querySelector('#zwartebutton2')
var roodhartje2 = document.querySelector('#rodebutton2')


function zwarthartjebutton2(event) {
    zwarthartje2.classList.add('displayhartje')
    roodhartje2.classList.remove('displayhartje')
}

function roodhartjebutton2(event) {
    zwarthartje2.classList.remove('displayhartje')
    roodhartje2.classList.add('displayhartje')
}

zwarthartje2.addEventListener('click', zwarthartjebutton2);
roodhartje2.addEventListener('click', roodhartjebutton2);


/* 3e hartje*/

var zwarthartje3 = document.querySelector('#zwartebutton3')
var roodhartje3 = document.querySelector('#rodebutton3')


function zwarthartjebutton3(event) {
    zwarthartje3.classList.add('displayhartje')
    roodhartje3.classList.remove('displayhartje')
}

function roodhartjebutton3(event) {
    zwarthartje3.classList.remove('displayhartje')
    roodhartje3.classList.add('displayhartje')
}

zwarthartje3.addEventListener('click', zwarthartjebutton3);
roodhartje3.addEventListener('click', roodhartjebutton3);


/* 4e hartje*/

var zwarthartje4 = document.querySelector('#zwartebutton4')
var roodhartje4 = document.querySelector('#rodebutton4')


function zwarthartjebutton4(event) {
    zwarthartje4.classList.add('displayhartje')
    roodhartje4.classList.remove('displayhartje')
}

function roodhartjebutton4(event) {
    zwarthartje4.classList.remove('displayhartje')
    roodhartje4.classList.add('displayhartje')
}

zwarthartje4.addEventListener('click', zwarthartjebutton4);
roodhartje4.addEventListener('click', roodhartjebutton4);


/* 5e hartje*/

var zwarthartje5 = document.querySelector('#zwartebutton5')
var roodhartje5 = document.querySelector('#rodebutton5')


function zwarthartjebutton5(event) {
    zwarthartje5.classList.add('displayhartje')
    roodhartje5.classList.remove('displayhartje')
}

function roodhartjebutton5(event) {
    zwarthartje5.classList.remove('displayhartje')
    roodhartje5.classList.add('displayhartje')
}

zwarthartje5.addEventListener('click', zwarthartjebutton5);
roodhartje5.addEventListener('click', roodhartjebutton5);


/* 6e hartje*/

var zwarthartje6 = document.querySelector('#zwartebutton6')
var roodhartje6 = document.querySelector('#rodebutton6')


function zwarthartjebutton6(event) {
    zwarthartje6.classList.add('displayhartje')
    roodhartje6.classList.remove('displayhartje')
}

function roodhartjebutton6(event) {
    zwarthartje6.classList.remove('displayhartje')
    roodhartje6.classList.add('displayhartje')
}

zwarthartje6.addEventListener('click', zwarthartjebutton6);
roodhartje6.addEventListener('click', roodhartjebutton6);


/* Form */

var tickets = document.querySelector('#tickets')
var form = document.querySelector('#form')


function ticketsknop(event) {
    form.classList.remove('displayform')
}



tickets.addEventListener('click', ticketsknop);
