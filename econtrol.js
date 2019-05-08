var pvalor= new Operation();
var add = document.getElementById("x1");
add.addEventListener('click',mantener);
function mantener(){
    var nuevo= new Sumas(dato);
    pvalor.sumar(nuevo);
    console.log("se guardó");
}
var x2 = document.getElementById("y1");
    x2.addEventListener('click',mantener);
var y1= document.getElementById("x2");
    y1.addEventListener('click',mantener);
var y2 = document.getElementById("y2");
    y2.addEventListener('click',mantener);
let sumaT= document.getElementById("sumaT");
    sumaT.addEventListener('click',show);
        show(){
            
            
        }