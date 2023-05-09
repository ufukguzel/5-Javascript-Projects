const btnOpen = document.getElementById("btnOpen");
const btnClose =document.getElementById("btnClose");
const mainDiv = document.getElementById("main");
const hidedDiv = document.getElementById("hided")

btnOpen.addEventListener('click',function(){
    hidedDiv.classList.remove('hided');
    hidedDiv.classList.add('opened');


    mainDiv.classList.remove('opened');
    mainDiv.classList.add('hided');
});

btnClose.addEventListener('click',function(){
    hidedDiv.classList.add('hided');
    hidedDiv.classList.remove('opened');


    mainDiv.classList.add('opened');
    mainDiv.classList.remove('hided');
});

