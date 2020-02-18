function expande(id, btn){
    document.getElementById(id).classList.toggle("expandido");
    document.getElementById(btn).innerHTML == "+" ? document.getElementById(btn).innerHTML = "-" : document.getElementById(btn).innerHTML = "+";
}