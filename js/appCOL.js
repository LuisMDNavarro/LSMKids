function next() {
    window.location.href ='dias.html';
}
function datos(id) {
    var contenidoCodificado = encodeURIComponent(id);
    window.location.href ="leccionCOL.html?id=" + contenidoCodificado;
}
function juego() {
    window.location.href = 'evaluacionCOL.html';
}