function validate(){
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;
    var error = document.getElementById("error");
    
    error.style.padding = "10px";
    
    var text;
    if(nombre.length < 3){
      text = "¡Por favor ingrese su nombre!";
      error.innerHTML = text;
      return false;
    }
    if(apellido.length < 3){
      text = "¡Por favor ingrese su apellido!";
      error.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "¡Por favor ingrese un e-mail valido!";
      error.innerHTML = text;
      return false;
    }
    if(mensaje.length <= 1){
      text = "¡Por favor ingrese un mensaje mas largo!";
      error.innerHTML = text;
      return false;
    }
    alert("¡Mensaje enviado correctamente!");
    return true;
  }
  