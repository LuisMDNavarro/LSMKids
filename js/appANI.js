function next() {
    window.location.href ='colores.html';
}
function datos(id) {
    var contenidoCodificado = encodeURIComponent(id);
    window.location.href ="leccionANI.html?id=" + contenidoCodificado;
}
function juego() {
    window.location.href = 'evaluacionANI.html';
}