function obtenerParametroURL(nombre) {
    nombre = nombre.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + nombre + "=([^&#]*)");
    var resultados = regex.exec(location.search);
    return resultados === null ? "" : decodeURIComponent(resultados[1].replace(/\+/g, " "));
}

var id = obtenerParametroURL("id");

if(id == 8) {
    window.location.href = 'evaluacionDIA.html';
}
if(id < 8){
    let imagen1 = `<img src="img/dias/${id}.png" class="letra">`;
    let imagen2 = `<img src="img/diasS/${id}.png" class ="sena" >`;

    var letra = document.getElementById("letra");
    var sena = document.getElementById("leccion");

    letra.innerHTML = imagen1;
    sena.innerHTML = imagen2;
}

if(id == null && id > 8)
{
    id=1;
    var contenidoCodificado = encodeURIComponent(id);
    window.location.href ="leccionDIA.html?id=" + contenidoCodificado;
}

function siguiente() {
     id++;
    console.log(id);
    var contenidoCodificado = encodeURIComponent(id);
    window.location.href ="leccionDIA.html?id=" + contenidoCodificado;
}
function home() {
    window.location.href ='index.html'
}