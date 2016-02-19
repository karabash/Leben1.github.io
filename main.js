

var ingredienser = [500, 10,6];

function changeValue(){
    var selectBox = document.getElementById("personer");
    var value = selectBox.options[selectBox.selectedIndex].value;
    document.getElementsByClassName("första")[0].innerHTML = ingredienser[0];
       document.getElementsByClassName("andra")[0].innerHTML = ingredienser[1];
           document.getElementsByClassName("tredje")[0].innerHTML = ingredienser[2];

     
     
    
    console.log(span);
};


var list = document.getElementById('ul');
//För varje span i i ul, ändra värdet inuti span