document.addEventListener("DOMContentLoaded", function() {


   const input = document.getElementById("inputText");
   const btn = document.getElementById("buttonText");

   
   btn.addEventListener("click", function(){

    let texto = input.value;
    window.localStorage.setItem('texto', texto);
    console.log(texto)

   })
   


})