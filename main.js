

var totalperson =1;
var first = 200;
var second = 1;    
var thirt = 3;
var fourth = 4;
var fifth = 1;
var sixth = 1;
var seventh = 4;
var eighth = 2;





function clickedButton() {
     totalperson =totalperson+1;
    if(totalperson<=100){
    first = first + 200; 
    second = second + 1; 
    thirt = thirt + 3;
    fourth = fourth + 4;
    fifth = fifth +1;
	sixth = sixth +1;
    seventh = seventh+4;
      eighth = eighth +2;
        
    // För att hämta en HTML-tagg i vår HTML-fil...
    var tP = document.getElementById("personsT");
    var f = document.getElementById("1");
    var s = document.getElementById("2");
    var t = document.getElementById("3");
    var fourth1 = document.getElementById("4");
	var fifth1 = document.getElementById("5");
	var sixth1 = document.getElementById("6");
	var seventh1 = document.getElementById("7");
var eighth1 = document.getElementById("8");
     
		
   

    
    
    // ...och ändra på innehållet mellan start- och slut-tagg:
   tP.innerHTML = totalperson;
    f.innerHTML = first;
    s.innerHTML = second;
    t.innerHTML = thirt;
    fourth1.innerHTML = fourth;
    fifth1.innerHTML = fifth;
	sixth1.innerHTML = sixth;
	seventh1.innerHTML =seventh;
		eighth1.innerHTML = eighth;
    }

}

function clickedButton1() {
     if(totalperson>1){
    
    first = first - 200; 
    second = second - 1; 
    thirt = thirt - 3;
    totalperson =totalperson - 1;
    fourth = fourth - 4;
    fifth = fifth - 1;
	sixth = sixth -1;
		 seventh = seventh-4;
  eighth = eighth - 2;
        
		 

         
    
        var tP = document.getElementById("personsT");
        var f = document.getElementById("1");
        var s = document.getElementById("2");
        var t = document.getElementById("3");
        var fourth1 = document.getElementById("4");
        var fifth1 = document.getElementById("5");
		 var sixth1 = document.getElementById("6");
	var seventh1 = document.getElementById("7");
var eighth1 = document.getElementById("8");

       
		 



   tP.innerHTML = totalperson;
    f.innerHTML = first;
    s.innerHTML = second;
    t.innerHTML = thirt;
    fourth1.innerHTML = fourth;
    fifth1.innerHTML = fifth;
    sixth1.innerHTML = sixth;
    seventh1.innerHTML =seventh;
		 		eighth1.innerHTML = eighth;


		 
		 

         
     }

}







