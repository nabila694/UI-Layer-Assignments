function checkButton() {  
    if(document.getElementById('red').checked) { 
        document.getElementById("disp1").innerHTML 
            = document.getElementById("red").value 
            + " radio button is checked"; 
    } 
    else if(document.getElementById('green').checked) { 
        document.getElementById("disp2").innerHTML 
            = document.getElementById("green").value 
            + " radio button is checked";   
    } 
    else if(document.getElementById('blue').checked) { 
        document.getElementById("disp3").innerHTML 
            = document.getElementById("blue").value 
            + " radio button is checked";   
    } 
     
    else { 
        document.getElementById("error").innerHTML 
            = "You have not selected any color"; 
    } 
} 