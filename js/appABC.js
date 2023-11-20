function next() {
    window.location.href ='animales.html';
}
function datos(id) {
    var contenidoCodificado = encodeURIComponent(id);
    window.location.href ="leccionABC.html?id=" + contenidoCodificado;
}
function juego() {
    window.location.href = 'evaluacionABC.html';
}