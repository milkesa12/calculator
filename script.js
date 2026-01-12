const disply=document.getElementById('display');

function appendToDisplay(input) {disply.value+=input;

}

function clearDisplay( ) {document.getElementById("display").value="";
   
}

function calculate(){
   try {display.value=eval(display.value);} catch(error) {display.value='error';

   }
   
}