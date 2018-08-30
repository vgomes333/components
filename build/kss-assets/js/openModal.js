var modal = document.getElementById('modal');
var btn = document.getElementById('btnModal');
var span = document.getElementsByClassName('closeModal')[0];

btn.onclick = function(){
    modal.style.display="block";
}

span.onclick = function(){
    modal.style.display ="none";
}