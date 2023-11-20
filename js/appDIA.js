function next() {
    window.location.href ='abc.html';
}
function datos(id) {
    var contenidoCodificado = encodeURIComponent(id);
    window.location.href ="leccionDIA.html?id=" + contenidoCodificado;
}
function juego() {
    window.location.href = 'evaluacionDIA.html';
}