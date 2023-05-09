const btntoggle = document.getElementById("mynavtoggle");
const linksection = document.getElementById("mylinksdiv");

btntoggle.addEventListener("click", function(){
    if(linksection.classList.contains("myLinks")){
        linksection.classList.remove("myLinks");
        linksection.classList.remove("openLinks");

    }
    else{
        linksection.classList.remove("openLinks");
        linksection.classList.remove("myLinks");

    }

});