var i = 0;
var descriptionTxt = "Technical Consultant & Software Developer based out of Dublin.";
var descriptionSpeed = 40;

function pageLoadScripts() {
    typeWriterEffect()
}
function typeWriterEffect() {
    if (i < descriptionTxt.length) {
      document.getElementById("description").innerHTML += descriptionTxt.charAt(i);
      i++;
      setTimeout(typeWriterEffect, descriptionSpeed);
    }
  }