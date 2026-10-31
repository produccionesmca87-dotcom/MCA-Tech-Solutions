/* =====================================================
   MCA TECH SOLUTIONS
   CONTACT FORM TO WHATSAPP
===================================================== */


document.addEventListener(
"DOMContentLoaded",
()=>{


const form =
document.getElementById(
"contactForm"
);



if(!form) return;



form.addEventListener(
"submit",
(event)=>{


event.preventDefault();



const nombre =
form.nombre.value.trim();



const correo =
form.correo.value.trim();



const telefono =
form.telefono.value.trim();



const servicio =
form.servicio.value.trim();



const mensaje =
form.mensaje.value.trim();


const emailValido =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;




/* VALIDACIONES */



if (
    nombre.length < 3 ||
    !emailValido.test(correo) ||
    telefono.length < 7 ||
    !servicio ||
    mensaje.length < 5
) {
    alert(
        "Por favor completa correctamente todos los campos y selecciona un servicio."
    );

    return;
}




function limpiarTexto(texto){

return texto
.replace(/[<>]/g,"")
.trim();

}



/* LIMPIEZA BASICA */


const datos = {

nombre:
limpiarTexto(nombre)
.substring(0,80),


correo:
limpiarTexto(correo)
.substring(0,120),


telefono:
limpiarTexto(telefono)
.substring(0,20),


servicio:
limpiarTexto(servicio)
.substring(0,60),


mensaje:
limpiarTexto(mensaje)
.substring(0,500)

};





/* CREAR MENSAJE */

const texto = `

Hola MCA Tech Solutions.

Solicito asesoría tecnológica:

Nombre:
${datos.nombre}


Correo:
${datos.correo}


Teléfono:
${datos.telefono}


Servicio:
${datos.servicio}


Mensaje:
${datos.mensaje}

`;





const whatsappURL =

"https://wa.me/573136596423?text="

+

encodeURIComponent(texto);





window.open(
whatsappURL,
"_blank",
"noopener,noreferrer"
);



});


});