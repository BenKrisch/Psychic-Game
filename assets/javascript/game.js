        var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        var wins = 0; 
        var losses = 0; 
        var guessesLeft = 9; 
        var guesses = []; 
        var currentLetter = letters[Math.floor(Math.random() * letters.length)]; 
        
        
        
        
 

        document.onkeyup = function(event) { 
            
            var myGuess = String.fromCharCode(event.keyCode).toLowerCase(); 
            guesses.push(myGuess);
            
            if (myGuess == currentLetter) { 

                wins++; 
                guessesLeft = 9;
                guesses = []; 
                currentLetter = letters[Math.floor(Math.random() * letters.length)];

            } else if (guessesLeft == 0) { 

                losses++; 
                guessesLeft = 9; 
                guesses = []; 
                currentLetter = letters[Math.floor(Math.random() * letters.length)];

            }else if (myGuess != currentLetter) { 

                guessesLeft--;
            } 

        document.getElementById("wins").innerHTML = wins;
        document.getElementById("losses").innerHTML = losses;
        document.getElementById("guessesLeft").innerHTML = guessesLeft; 
        document.getElementById("yourGuesses").innerHTML = guesses;

        }

    


        
    
           
