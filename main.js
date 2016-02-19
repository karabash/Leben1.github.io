


var totalperson =1;
var first = 200;
var second = 1;
var thirt = 3;

function clickedButton() {
       totalperson =totalperson+1;
    if(totalperson<=5){
    "use strict";
  
    first = first + 200; 
    second = second + 1; 
    thirt = thirt + 3;
    
    // För att hämta en HTML-tagg i vår HTML-fil...
        var tP = document.getElementById("personsT");
    var f = document.getElementById("1");
    var s = document.getElementById("2");
    var t = document.getElementById("3");
    
    
    // ...och ändra på innehållet mellan start- och slut-tagg:
    f.innerHTML = first;
    s.innerHTML = second;
     t.innerHTML = thirt;
        tP.innerHTML = totalperson;
    }

}











