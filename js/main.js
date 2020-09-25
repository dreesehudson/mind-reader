
//variables

//declare variable for each HTML element
let bigText = document.getElementById("big-text");
let nextBtn = document.getElementById("next-btn");
let example = document.getElementById("example");
let instruction = document.getElementById("instruction");
let restartBtn = document.getElementById("restart-btn");
let chosenSymbol = null;
let nineNumbers = null;

nextBtn.addEventListener("click", incrementState);
restartBtn.addEventListener("click", resetState);

//set initial page/state value
let state = 0;

//add Event Listener to buttons and load inital state
function init() {
    renderState();
}

//array of symbols to populate the list
let symbols = ["!", "@", "#", "$", "%", "^", "&amp;", "*", "(", ")"];

//functions
//advance state, applies to the reset-btn in state 0, next-btn in state 1-5
function incrementState() {
    state++;
    renderState();
}

//reset state, applies to the restart-btn when in view 1-5.
function resetState() {
    if (state == 0) {
        incrementState();
    }
    else { state = 0; };

    renderState();
}

//update view 
function renderState() {
    switch (state) {
        //state [0]
        case 0:
            //show- big-text: opening message
            bigText.style.visibility = "visible";
            bigText.innerHTML = "I can read your mind.";
            //hide- next-btn
            nextBtn.style.visibility = "hidden";
            nextBtn.innerHTML = "Next";

            //hide- example
            example.innerHTML = "";
            example.style.visibility = "hidden";

            //hide- instructions
            instruction.style.visibility = "hidden";

            //show- start button: right-arrow
            restartBtn.style.visibility = "visible";
            restartBtn.classList.remove("btn-secondary");
            restartBtn.classList.add("btn-primary");
            //setButtonPrimary(restartBtn);
            restartBtn.innerHTML = '<i class="fas fa-arrow-right"></i>';

            break;

        //state [1]
        case 1:
            //show- big-text: "Pick a number 01-99"
            bigText.innerHTML = "Pick a number 01-99.";

            //show- next button: "Next" -> advance state
            nextBtn.style.visibility = "visible";
            nextBtn.innerHTML = "Next";

            //hide- example
            //clearing content in "example" to shrink height of hidden div
            example.innerHTML = "";

            //show- instructions: "when you have your number click next"
            instruction.style.visibility = "visible";
            instruction.innerHTML = "when you have your number click next.";

            //show- restart button: : back arrow icon
            restartBtn.innerHTML = '<i class="fas fa-step-backward"></i>';
            restartBtn.style.visibility = "visible";
            restartBtn.classList.remove("btn-primary");
            restartBtn.classList.add("btn-secondary");
            // restartBtn.setButtonSecondary();

            break;

        //state [2]
        case 2:
            //show- big-text: "add both digits together to get new number"
            bigText.innerHTML = "add both digits together to get new number.";

            //show- next button: "Next" -> advance state
            //no action same as previous state.


            //show- example: "Ex. 14 is 1 + 4 = 5"
            example.style.visibility = "visible";
            example.innerHTML = "Ex. 47 is 4 + 7 = 11.";


            //show- instructions: "click next to proceed"
            instruction.innerHTML = "click next to proceed.";


            //show- restart button -> state [0]: back arrow
            //no action same as previous state.

            break;

        //state [3]
        case 3:
            //show- big-text: "subtract new number from original number"
            bigText.innerHTML = "subtract new number from original number.";

            //show- next button: "Next" -> advance state
            //no action same as previous state.

            //show- example: "Ex. 14 - 5 = 9"
            example.innerHTML = "Ex. 47 - 11 = 36.";

            //show- instructions: "click next to proceed"
            //no action same as previous state.

            //show- restart button -> state [0]: circle arrow
            //no action same as previous state.

            break;

        case 4:
            //state [4]

            let str = assignSymbol();
            
            //show- big-text: list of number - symbol pairs
            bigText.innerHTML = "Find your new number.";

            //show- next button: "Reveal" -> advance state
            nextBtn.innerHTML = "Reveal";

            //show- example: "string of number symbol pairs"
            example.innerHTML = str;

            //show- instructions: Note the symbol beside the number
            instruction.innerHTML = "Note the symbol beside the number.";

            //show- restart button -> state [0]: circle arrow
            //no action same as previous state
            break;

        case 5:
            //state [5]
            //show- big-text: symbol reveal
            bigText.innerHTML = "Your symbol is " + nineNumbers;

            //hide- next button
            nextBtn.style.visibility = "hidden";

            //show- example: "Your symbol is:"
            example.innerHTML = "";
            example.style.visibility = "hidden";

            //show- instructions: symbol
            instruction.style.visibility = "visible";
            instruction.innerHTML = "Add $1 to Play Again.";


            //show- restart button -> state [0]: circle arrow
            restartBtn.classList.remove("btn-secondary");
            restartBtn.classList.add("btn-primary");
            //document.getElementById("restart-Btn").setButtonPrimary();
            break;

        default:
            //if state is not 0-5, reset state to 0 to restart the game.
            state = 0;
            break;

    }
}

//switches btn to btn-primary class
function setButtonPrimary(element) {
    document.getElementById(element).classList.remove("btn-secondary").add("btn-primary");
}
//switches btn to btn-secondary class
function setButtonSecondary(element) {
    document.getElementById(element).classList.remove("btn-primary").add("btn-secondary");
}

//set visibility class on element to invisible
function hideElement(element) {
    document.getElementById(element).classList.remove(visible).add(invisible);
}

//set visibility class on element to visible
function showElement(element) {
    document.getElementById(element).classList.remove(invisible).add(visible);
}

//randomly assigns symbol to be applied to multiples of 9's
function assignSymbol() {
    nineNumbers = symbols[Math.floor(Math.random() * 10)];
    let numSymPair = "";
    for (i = 0; i < 100; i++) {
        if (i % 9) {
            let nonNineNumbers = symbols[Math.floor(Math.random() * 10)];
            numSymPair += i + " --- " + nonNineNumbers + "<br>";
        }
        else {
            numSymPair += i + " --- " + nineNumbers + "<br>";
            chosenSymbol = nineNumbers;
        }
    }
    return numSymPair;
}



//apply viewContent for each HTML element dynamically
