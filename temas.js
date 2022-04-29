/*Creamos un nuevo archivo js para este script, porque al ejecutarlo dentro del mismo archivo js (script.js) no imprimía el nombre del usuario. Si lo podíamos ver con console.log, pero no aparecía en la página web.
*/

function gettingUserName(){ 
    console.log(localStorage.getItem("fname").value);
    document.getElementById("greeting").innerHTML = "¡Bienvenid@ " +           localStorage.getItem("fname") + "," + "  a jugar se ha dicho!"  ;
      }
gettingUserName()
