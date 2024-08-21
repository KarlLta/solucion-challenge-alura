let areaDeTexto = document.querySelector(".text_area");
let areaDeMensaje = document.querySelector(".message");
let avisoDos = document.querySelector(".infoDos");
let avisoTres = document.querySelector(".infoTres");
let boton = document.getElementById('botonCopiar');
boton.style.display = 'none';

function validacion (){
    let cadenaParaPrueba = areaDeTexto.value;
    let pruebaMayusculas = /[A-Z]/.test(cadenaParaPrueba);
    let pruebaAcentosMa = /[Á-Ú]/.test(cadenaParaPrueba);
    let pruebaAcentosMi= /[á-ú]/.test(cadenaParaPrueba);
    let pruebaEspeciales = /[!"#$%&'()*+,-./:;<=>¿?@[\]^_{|}~]/.test(cadenaParaPrueba);

    if (pruebaMayusculas || pruebaAcentosMa || pruebaEspeciales || pruebaAcentosMi) {
        areaDeMensaje.value = "";
        areaDeTexto.value = "";
        areaDeMensaje.style.backgroundImage = 'url("/pictures/Muñeco.png")';
        avisoDos.style.display = 'block';
        avisoTres.style.display = 'block';
        boton.style.display = 'none';
        alert('El texto ingresado contiene letras mayúsculas, letras con acentos o caracteres especiales. No los incluya.');
        return false;
    }
    return true;
}

function encriptacion(){
    if(validacion()){
        let cadenaParaEncriptar = areaDeTexto.value;
        let parejas = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

        for(let i=0; i < parejas.length; i++){
            if(cadenaParaEncriptar.includes(parejas[i][0])){
                cadenaParaEncriptar = cadenaParaEncriptar.replaceAll(parejas[i][0],parejas[i][1]);
            }
        }
        
        areaDeMensaje.value = cadenaParaEncriptar;
        areaDeMensaje.style.backgroundImage = "none";
        avisoDos.style.display = 'none';
        avisoTres.style.display = 'none';
        boton.style.display = 'block';
    }
}

function desencriptacion(){
    if(validacion()){
        let cadenaParaDesencriptar = areaDeTexto.value;
        let parejas = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

        for(let i=0; i < parejas.length; i++){
            if(cadenaParaDesencriptar.includes(parejas[i][1])){
                cadenaParaDesencriptar = cadenaParaDesencriptar.replaceAll(parejas[i][1],parejas[i][0]);
            }
        }
        areaDeMensaje.value = cadenaParaDesencriptar;
        areaDeTexto.value = "";
        areaDeMensaje.style.backgroundImage = "none";
        avisoDos.style.display = 'none';
        avisoTres.style.display = 'none';
        boton.style.display = 'block';
    }
}

function copiar(){
    navigator.clipboard.writeText(areaDeMensaje.value);
    areaDeMensaje.value = "";
    areaDeTexto.value = "";
    areaDeMensaje.style.backgroundImage = 'url("/pictures/Muñeco.png")';
    avisoDos.style.display = 'block';
    avisoTres.style.display = 'block';
    boton.style.display = 'none';
}