var nbr = 0;
// when theres no default "value" display will put value into the box
// <script> tags must be placed in the bottom of the body tag so that the input tag is made before the js OR
function loaded (){ // this will make the display function happed after the body tag has loaded with the  Onload attribute
    display();

}
function min1() {
    nbr--;
display();
}
function add1(){
    nbr++;
display();
   
    
}
function display(){
  var ctrl =  document.getElementById("nbr");
    ctrl.value = nbr;
    ctrl.style.fontWeight = nbr % 2 == 0 ? "Bold":"normal";
    ctrl.style.fontStyle = nbr % 3 == 0 ? "italic":"normal";
    ctrl.style.color = nbr % 7 == 0 ? "red":"black";
    /*
    if(nbr%2== 0) {
        document.getElementById("nbr").style.fontWeight = "bold"; //stay that style till changed
    }else{
        document.getElementById("nbr").style.fontWeight = "normal"; //stay that style till changed
        
    }
    if(nbr%3== 0) {
        document.getElementById("nbr").style.fontSize = "2em"; //stay that style till changed
    }else{
        document.getElementById("nbr").style.fontSize = "1em"; //stay that style till changed
        
    }
    if(nbr%7== 0) {
        document.getElementById("nbr").style.color = "red"; //stay that style till changed
    }else{
        document.getElementById("nbr").style.color = "black"; //stay that style till changed
        
    }*/
}