let count = 0;
 
const num = document.getElementById("myNumber");
const btninc = document.getElementById("btnIncrease");
const btndec = document.getElementById("btnDecrease");
const btnres = document.getElementById("btnReset");

//sayacı arttırıp rengini düzenledim arttırma işlemi için 
btninc.addEventListener("click", function(){
    count++;
    num.textContent=count;
    if(count>0){
        num.style.color="green";
    }
    else if(count==0){
        num.style.color="black";
    }
    else{
        num.style.color="red"
    }
});

btndec.addEventListener("click",function(){
    count--;
    num.textContent=count;
    if(count>0){
        num.style.color="green";
    }
    else if(count==0){
        num.style.color="black";
    }
    else{
        num.style.color="red"
    }
});

btnres.addEventListener("click",function(){
    count=0;
    num.textContent=count;
    if(count>0){
        num.style.color="green";
    }
    else if(count==0){
        num.style.color="black";
    }
    else{
        num.style.color="red"
    }
});



