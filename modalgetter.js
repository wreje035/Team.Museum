console.log("Hello in JavaScript!");

    function readPage(){
        alert("This here is the mummy and we anticpate that in the future there will be a bunch of information here, a photo of the mummy and links to the relevant pages on the Otago Musuem website");
    }

window.onload = function () {
   document.getElementById("Mummy").onclick=readPage;
};