console.log("Hello in JavaScript!");

    function readPage(){
        alert("Hello");
    }
//function myFunction() {
  //  document.getElementById("CoatCheck_Inv").onclick = function (e) {....};
window.onload = function () {
   document.getElementById("CoatCheck_Inv").onclick=readPage;
};