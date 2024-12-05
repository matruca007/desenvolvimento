const botaoenvio = document.getElementById("envio");
const input = document.getElementById("textinput");
botaoenvio.addEventListener("click", function(){
const text = input.value;
 if (text.trim() !== ''){
   frase.textContent = `você: ${text}`;
 }else{
   frase.textContent = "Deixe seu comentário";
 } 
});