function validation (){
  var name = document.getElementById("name").value;
  var number = document.getElementById("number").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");
  var text;

  error_message.style.padding = "10px";

  if(name.length <5){
    text = "Indsæt navn";
    error_message.innerHTML = text;
    return false;
  }

  if(number.length <5){
    text = "Indsæt telefonnummer";
    error_message.innerHTML = text;
    return false;
  }

  if(email.indexOf("@") == -1 || email.length <5){
    text = "Indsæt e-mail";
    error_message.innerHTML = text;
    return false;
  }

  if(message.length <=100){
    text = "Indsæt besked på mindst 100 tegn";
    error_message.innerHTML = text;
    return false;
  }

  alert("Tak for din besked - vi vender tilbage hurtigst muligt!")
  return true;
}
