
function validateAnswers2(){
  let totalQuestions = 3
  let score = 0;
  
  let myForm = document.forms["trivia2"];
  let answers = ["b","a","c"]; 
  
  for(let i =1; i < totalQuestions; i++) {
  }
  
  if(myForm["d1"].value==="b"){
    score++
    alert("¡Bien hecho! Acertaste la respuesta de la pregunta #1")
  }
  else {
    alert("Ups, la respuesta correcta a la pregunta #1 es Perro")
  } 
  if(myForm["qd2"].value==="a"){
    score++
    alert("¡Bien hecho! Acertaste la respuesta de la pregunta #2")
  }
  else {
    alert("Ups, la respuesta correcta a la pregunta #2 es Hamster")
  } 
  if(myForm["qd3"].value==="c"){
    score++
    alert("¡Bien hecho! Acertaste la respuesta a la pregunta #3")
  }
  else {
    alert("Ups, la respuesta correcta a la pregunta #3 es Gato")
  };
  alert("¡Felicitaciones! Tu puntaje es: "+score);
}

  

