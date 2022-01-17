// NUMBER RANDOMIZER 
let randomLoc1 = Math.floor(Math.random() * 5)
// DECLARE 3 VAR FOR LOCATION
let loc1 = randomLoc1;
let loc2 = loc1 + 1;
let loc3 = loc2 + 1;

// DECLARE A VAR TO HOLD USERS GUESS, SET TO 0.
let guess;
// DECLARE A VAR THAT HAS NUMBER OF HITS, SET TO 0
let hits = 0;
// DECLARE A VAR TO HOLD NUMBER OF GUESSES AND SET IT TO 0
let guesses = 0;
// DECLARE A VAR TO KEEP TRACK IF SHIP HAS ALREADY SUNK, SET TO FALSE.
let isSunk = false; 

// GAME LOGIC 
  // LOOP WHILE SHIP IS NOT YET SUNK
  while(isSunk === false) {
    // GET USER'S GUESS
    guess = prompt("Ready, aim, fire! (enter a number from 0-6):");
    // COMPARE THE USER'S INPUT TO VALID INPUT VALUES
        // IF USER'S GUESS IS INVALID
            if(guess <= 0 || guess > 6) {
            // TELL USER TO ENTER A VALID NUMBER
             prompt("Enter a valid cell number!") 
            }
        
              else {   // ELSE
                guesses = guesses + 1; // ADD ONE MORE GUESS
            
                if(guess === loc1 || guess === loc2 || guess === loc3) {
                  hits = hits + 1; // IF THE USER'S GUESS MATCHES A LOCATION
                  alert("HIT!") // ADD ONE TO GUESSES
                }
                else {
                  alert("MISS")
                }
                if (hits === 3) { // IF NUMBER OF HITS IS 3
                      isSunk = true;// SET isSunk TO TRUE
                     alert("You SANK MY BATTLESHIP!") // TELL USER "YOU SANK MY BATTLESHIP"
            
                 } // END IF
                 } // END ELSE
   } // END LOOP
  

  let stats = "You took " + guesses + " guesses to sink the battleship" + 
                " which means your shooting accuracy was " + ((3 / guesses) * 100) + "%"; //TELL USER STATS
  alert(stats)