

var clave= document.querySelector("input[type='password']");
var nombre = document.querySelector("input[type='text']");
var ape = document.querySelector("input[type='txt']");
var email = document.querySelector("input[type='email']");

nombre.addEventListener('focus', function(evento){
    evento.target.style.background = "wheat";
    evento.target.style.color = "green";
});
ape.addEventListener('focus', function(evento){
    evento.target.style.background = "wheat";
    evento.target.style.color = "green";
});

email.addEventListener('focus', function(evento){
    evento.target.style.background = "wheat";
    evento.target.style.color = "green";
});
clave.addEventListener('focus', function(evento){
    evento.target.style.background = "wheat";
    evento.target.style.color = "green";
});
function validar(frm){
    if(frm.nombres.value.trim() == "" || frm.apellidos.value.trim() == "" || frm.correo.value.trim() == "" || frm.password.value.trim() == ""){
        window.event.preventDefault();
        alert("Llene todos los campos correctamente");
        return
    }

    //Validamos Campo Nombre
    test =/^[a-zA-Z\u00C0-\u017F\s]{1,25}$/; 
    if(!test.test(frm.nombres.value)) {
        window.event.preventDefault();
        alert("Estimado Usuario, Ingrese su nombre correctamente"); return;
    }
    //Validamos el Campo Apellido
    test =  /^[a-zA-Z\u00C0-\u017F\s]{1,50}$/;
    if(!test.test(frm.apellidos.value)) {
        window.event.preventDefault();
        alert("Estimado Usuario, Ingrese su apellido correctamente"); return;
    }
    //Validamos Campo Email
    test = /^([a-zA-Z0-9_])+[@]([a-z])+[.][a-z]{2,3}$/;; 
    if(!test.test(frm.correo.value)) {
        window.event.preventDefault();
        alert("Estimado Usuario, Ingrese su Email"); return;
    }
    //Validamos si esta todo satisfactorio.
    alert("Su registro fue satisfactoriamente");
}
      
