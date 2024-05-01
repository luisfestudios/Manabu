const form = document.getElementById("miFormulario");
const email = document.getElementById("mail");
const emailError = document.querySelector("#mail + span.error");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const mensaje = document.getElementById("mensaje");
let verificar =0;
email.addEventListener("input", (event) => {
    
  
    if (email.validity.valid) {
      emailError.textContent = ""; 
      emailError.className = "error";
    } else {
      correoInvalido();
    }
  });
  
  form.addEventListener("submit", (event) => {
    verificar=0;
    if (email.value === "" || !email.validity.valid) {
        correoInvalido();
        event.preventDefault();
        verificar++;
      }
    if(nombre.value==="" || apellido.value==="" || mensaje.value==="" || email.value===""){
      mostrarError();
      verificar++;
      event.preventDefault();
    }
    if (verificar ==0){
      alert("Solicitud enviada correctamente.");
    }
  });
  
  function mostrarError(){
    alert("Todos los campos deben ser rellenados.");
    
  }

  function correoInvalido() {
    if (email.value === '') {
      emailError.textContent = "Debes ingresar un correo.";
    } else if (email.validity.typeMismatch) {
      emailError.textContent = "El valor ingresado debe ser un correo.";
    } else if (email.validity.tooShort) {
      emailError.textContent = `El correo debe tener al menos ${email.minLength} caracteres; has ingresado ${email.value.length}.`;
    }
    emailError.className = "error active";
  }