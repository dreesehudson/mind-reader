
//variables

//declare variable for each HTML element
let bigText = document.getElementById("big-text").innerHTML;
let nextBtn = document.getElementById("next-btn").innerHTML;
let example = document.getElementById("example").innerHTML;
let instruction = document.getElementById("instruction").innerHTML;
let restartBtn = document.getElementById("restart-btn").innerHTML;
let chosenSymbol = null;
let nineNumbers = null;

document.getElementById("next-btn").addEventListener("click", incrementState);
document.getElementById("restart-btn").addEventListener("click", resetState);

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
            document.getElementById("big-text").style.visibility = "visible";
            document.getElementById("big-text").innerHTML = "I can read your mind.";
            //hide- next-btn
            document.getElementById("next-btn").style.visibility = "hidden";
            document.getElementById("next-btn").innerHTML = "Next";

            //hide- example
            document.getElementById("example").innerHTML = "";
            document.getElementById("example").style.visibility = "hidden";

            //hide- instructions
            document.getElementById("instruction").style.visibility = "hidden";

            //show- start button: right-arrow
            document.getElementById("restart-btn").style.visibility = "visible";
            //document.getElementById("restart-btn").setButtonPrimary();
            document.getElementById("restart-btn").innerHTML = '<i class="fas fa-arrow-right"></i>';

            break;

        //state [1]
        case 1:
            //show- big-text: "Pick a number 01-99"
            document.getElementById("big-text").innerHTML = "Pick a number 01-99.";

            //show- next button: "Next" -> advance state
            document.getElementById("next-btn").style.visibility = "visible";
            document.getElementById("next-btn").innerHTML = "Next";

            //hide- example
            //clearing content in "example" to shrink height of hidden div
            document.getElementById("example").innerHTML = "";

            //show- instructions: "when you have your number click next"
            document.getElementById("instruction").style.visibility = "visible";
            document.getElementById("instruction").innerHTML = "when you have your number click next.";

            //show- restart button: : back arrow icon
            document.getElementById("restart-btn").innerHTML = '<i class="fas fa-step-backward"></i>';
            document.getElementById("restart-btn").style.visibility = "visible";
            //document.getElementById("restart-btn").setButtonSecondary();

            break;

        //state [2]
        case 2:
            //show- big-text: "add both digits together to get new number"
            document.getElementById("big-text").innerHTML = "add both digits together to get new number.";

            //show- next button: "Next" -> advance state
            //no action same as previous state.


            //show- example: "Ex. 14 is 1 + 4 = 5"
            document.getElementById("example").style.visibility = "visible";
            document.getElementById("example").innerHTML = "Ex. 47 is 4 + 7 = 11.";


            //show- instructions: "click next to proceed"
            document.getElementById("instruction").innerHTML = "click next to proceed.";


            //show- restart button -> state [0]: back arrow
            //no action same as previous state.

            break;

        //state [3]
        case 3:
            //show- big-text: "subtract new number from original number"
            document.getElementById("big-text").innerHTML = "subtract new number from original number.";

            //show- next button: "Next" -> advance state
            //no action same as previous state.

            //show- example: "Ex. 14 - 5 = 9"
            document.getElementById("example").innerHTML = "Ex. 47 - 11 = 36.";

            //show- instructions: "click next to proceed"
            //no action same as previous state.

            //show- restart button -> state [0]: circle arrow
            //no action same as previous state.

            break;

        case 4:
            //state [4]

            let str = assignSymbol();
            
            //show- big-text: list of number - symbol pairs
            document.getElementById("big-text").innerHTML = "Find your new number.";

            //show- next button: "Reveal" -> advance state
            document.getElementById("next-btn").innerHTML = "Reveal";

            //show- example: "string of number symbol pairs"
            document.getElementById("example").innerHTML = str;

            //show- instructions: Note the symbol beside the number
            document.getElementById("instruction").innerHTML = "Note the symbol beside the number.";

            //show- restart button -> state [0]: circle arrow
            //no action same as previous state
            break;

        case 5:
            //state [5]
            //show- big-text: symbol reveal
            document.getElementById("big-text").innerHTML = "Your symbol is " + nineNumbers;

            //hide- next button
            document.getElementById("next-btn").style.visibility = "hidden";

            //show- example: "Your symbol is:"
            document.getElementById("example").innerHTML = "";
            document.getElementById("example").style.visibility = "hidden";

            //show- instructions: symbol
            document.getElementById("instruction").style.visibility = "visible";
            document.getElementById("instruction").innerHTML = "Add $1 to Play Again.";


            //show- restart button -> state [0]: circle arrow
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
    document.getElementById(element).classList.remove(btn - secondary).add(btn - primary);
}
//switches btn to btn-secondary class
function setButtonSecondary(element) {
    document.getElementById(element).classList.remove(btn - primary).add(btn - secondary);
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
