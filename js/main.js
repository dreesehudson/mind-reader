
//variables

//declare variable for each HTML element
let bigText = document.getElementById("big-text");
let example = document.getElementById("example");
let instruction = document.getElementById("instruction");
let leftBtn = document.getElementById("left-btn");
let rightBtn = document.getElementById("right-btn");
let chosenSymbol = null;
let nineNumbers = null;

leftBtn.addEventListener("click", incrementState);
rightBtn.addEventListener("click", resetState);

//set initial page/state value
let state = 0;

//functions
//add Event Listener to buttons and load inital state
function init() {
    renderState();
}

//array of symbols to populate the list
let symbols = ["!", "@", "#", "$", "%", "^", "&amp;", "*", "(", ")"];

//switches btn function to state incrementor
function makeIncrementor (element) {
    element.removeEventListener("click", resetState);
    element.addEventListener("click", incrementState);
}

//switches btn function to state reset-er
function makeReset (element) {
    element.removeEventListener("click", incrementState);
    element.addEventListener("click", resetState);
}

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

//switches btn to btn-primary class
function setButtonPrimary(element) {
    element.classList.remove("btn-secondary");
    element.classList.add("btn-primary");
}
//switches btn to btn-secondary class
function setButtonSecondary(element) {
    element.classList.remove("btn-primary");
    element.classList.add("btn-secondary");
}

//set visibility class on element to invisible
function hide(element) {
    element.style.visibility = "hidden";
}

//set visibility class on element to visible
function show(element) {
    element.style.visibility = "visible";
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


//update view 
function renderState() {
    switch (state) {
        //state [0]
        case 0:
            //show- big-text: opening message
            show(bigText);
            bigText.innerHTML = "I can read your mind.";
            
            //hide- example
            example.innerHTML = "";
            hide(example);
            
            //hide- instructions
            hide(instruction);

            //hide- left-btn
            hide(leftBtn);

            //show- start button: right-arrow (primary)
            show(rightBtn);
            setButtonPrimary(rightBtn);
            makeIncrementor(rightBtn);
            rightBtn.innerHTML = '<i class="fas fa-arrow-right"></i>';

            break;

        //state [1]
        case 1:
            //show- big-text: "Pick a number 01-99"
            bigText.innerHTML = "Pick a number 01-99.";

            
            //hide- example
            //clearing content in "example" to shrink height of hidden div
            example.innerHTML = "";
            
            //show- instructions: "when you have your number click next"
            show(instruction);
            instruction.innerHTML = "when you have your number click next.";
            
            //show- left button: "back arrow" -> reset state
            show(leftBtn);
            makeReset(leftBtn);
            setButtonSecondary(leftBtn);
            leftBtn.innerHTML = '<i class="fas fa-step-backward"></i>';

            //show- right button: : right arrow icon
            rightBtn.innerHTML = '<i class="fas fa-arrow-right"></i>';
            show(rightBtn);
            setButtonPrimary(rightBtn);

            break;

        //state [2]
        case 2:
            //show- big-text: "add both digits together to get new number"
            bigText.innerHTML = "add both digits together to get new number.";

            
            
            //show- example: "Ex. 14 is 1 + 4 = 5"
            show(example);
            example.innerHTML = "Ex. 47 is 4 + 7 = 11.";
            
            
            //show- instructions: "click next to proceed"
            instruction.innerHTML = "click next to proceed.";
            
            //show- left button: "back arrow" -> reset state
            //no action same as previous state.
            
            //show- right button -> : next arrow
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
            show(leftBtn);

            //show- example: "Your symbol is:"
            example.innerHTML = "";
            hide(example);

            //show- instructions: symbol
            show(instruction);
            instruction.innerHTML = "Add $1 to Play Again.";


            //show- restart button -> state [0]: circle arrow
            hide(rightBtn);
            setButtonPrimary(leftBtn);
            makeReset(leftBtn);
            leftBtn.innerHTML = '<i class="fas fa-step-backward"></i>';


            break;

        default:
            //if state is not 0-5, reset state to 0 to restart the game.
            state = 0;
            break;

    }
}




//apply viewContent for each HTML element dynamically
