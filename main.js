
const mensaje = document.querySelector(".mensaje");
mensaje.value="";

const mensaje_modificado= document.querySelector(".mensaje_mod");
mensaje_modificado.value="";

const aviso= document.querySelector(".aviso");

const btn_copia = document.querySelector(".btn-copia");

const segunda_seccion= document.querySelector(".segunda-seccion");


function validarTexto(){
    let textoEscrito = mensaje.value;
    let validador = textoEscrito.match(/^[a-z\s]*$/);

    if(!validador || validador == 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}

function modificarEstilos(){
    mensaje_modificado.style.backgroundImage="none";
    aviso.style.display = "none";
    btn_copia.style.display = "inline";
    segunda_seccion.style.border= "solid 1px #f38e21"
    mensaje.value = "";
    mensaje.focus();
}

function encriptar(){
    if(!validarTexto()) {
        let sin_encriptado = mensaje.value;
        let encriptado = sin_encriptado.replace(/e/gi,"enter").replace(/i/gi,"imes").replace(/a/gi,"ai").replace(/o/gi,"ober").replace(/u/gi,"ufat");
        mensaje_modificado.value= encriptado;
        modificarEstilos();
    }
}

function desencriptar(){
    if(!validarTexto()) {
        let encriptado = mensaje.value;
        let desencriptado = encriptado.replace(/enter/gi,"e").replace(/imes/gi,"i").replace(/ai/gi,"a").replace(/ober/gi,"o").replace(/ufat/gi,"u");
        mensaje_modificado.value= desencriptado;
        modificarEstilos();
    }
}



function copiar(){
    mensaje_modificado.select();
    navigator.clipboard.writeText(mensaje_modificado.value);
    mensaje.focus();
    mensaje_modificado.value="El texto fue copiado";
    mensaje_modificado.value="";
    segunda_seccion.style.border= "none"
}
