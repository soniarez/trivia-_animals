//Index
document.getElementById("jugar").onclick= goToThemes
  
  function goToThemes(){
  location.href = "temas.html";
  let fname= document.getElementById("fname").value;
  localStorage.setItem("fname",fname);
  //console.log(fname);
} //finIndex
  
/*
Pasé esta sección a un js diferente porque me di cuenta que al ejecutarlo en el mismo archivo js de todo el documento, sí mostraba el el nombre del usuario, pero no me lo imprimía.
Temas
  function gettingUserName(){ 
    console.log(localStorage.getItem("fname").value);
    document.getElementById("greeting").innerHTML +=           localStorage.getItem("fname");
      }
gettingUserName()
*/

//TriviaSalvaje
function validateAnswers(){
  let totalQuestions = 3 //El total de preguntas
  let score = 0;
  
  let myForm = document.forms["trivia"];
  let answers = ["c","a","a"]; 
  
  for(let i =1; i < totalQuestions; i++){
  }

  if(myForm["q1"].value==="c"){ 
    score++
    alert("¡Bien hecho! Acertaste la respuesta de la pregunta #1")
  }
  else {
    alert("Ups, la respuesta correcta a la pregunta #1 es Guepardo")
  } 
  if(myForm["q2"].value==="a"){
    score++
    alert("¡Bien hecho! Acertaste la respuesta de la pregunta #2")
  }
  else {
    alert("Ups, la respuesta correcta a la pregunta #2 es Avestruz")
  } 
  if(myForm["q3"].value==="a"){
    score++
    alert("¡Bien hecho! Acertaste la respuesta a la pregunta #3")
  }
  else {
    alert("Ups, la respuesta correcta a la pregunta #3 es Koala")
  }
   alert("¡Felicitaciones! Tu puntaje es: "+score); 
}





