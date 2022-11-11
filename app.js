
function moverPosicionRandom(elm) {
    elm.style.position = 'absolute';

    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';

    elm.style.left = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';

}

let btnSi = document.getElementById("btn_si")
let btnNo = document.getElementById("btn_no")
let divModoSexo = document.getElementsByClassName("modo_sexo")[0]

btnNo.addEventListener('mouseenter', function(e) {moverPosicionRandom(e.target)});


btnSi.addEventListener('click', function(e) {
    alert('dijiste que sí')

    divModoSexo.style.display = 'block'
    const cancion = new Audio('assets\\50 Cent - When it Rains it Pours (Get Rich Or Die Tryin).mp3');
    cancion.play();

})





