var ranomdized = Math.floor(Math.random() * 11);  
function compareGuess()
{
    var guessedNumber = parseInt(document.getElementById("input").value);
    ranomdized;   
   if(guessedNumber==ranomdized)
    {
        document.getElementById("textOutput").innerHTML = "Good Work";
    }
    else
    {
        alert(ranomdized); //test för att se.
        document.getElementById("textOutput").innerHTML = "Not matched";
    }
    
}

