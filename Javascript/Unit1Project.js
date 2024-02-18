//set up the buttons
const leftArrow = document.querySelector("#btnLeft");
const rightArrow = document.querySelector("#btnRight");
//set up text stuff
const form = document.getElementById("projform")

var ForwardColor = ["red", "green", "blue", "yellow", "purple"];
var BackwardColor = ["purple", "yellow", "blue", "green", "red"];
colorIndex = 0;

function textBoxCheck()
{
    let delayValue = document.getElementById("textinput").value;

    if (delayValue == "" || delayValue == null)
    {
        delayValue = 100;
        console.log("No text input defaulting to 100");
        return delayValue;

    }
    else
    {   
        console.log(delayValue);
        return delayValue;
    }
}

const CycleFoward = () =>  cycleInterval = setInterval(() => {form.style.borderColor = ForwardColor[colorIndex];
        colorIndex = (colorIndex +1) % ForwardColor.length
}, textBoxCheck()); 

const CycleBackward = () =>  cycleInterval = setInterval(() => {form.style.borderColor = BackwardColor[colorIndex];
    colorIndex = (colorIndex +1 ) % BackwardColor.length
}, textBoxCheck());

leftArrow.addEventListener('mousedown', CycleBackward);
leftArrow.addEventListener('mouseup', () =>{clearInterval(cycleInterval)});
leftArrow.addEventListener('click', onLeftButtonClick)

rightArrow.addEventListener('mousedown', CycleFoward);
rightArrow.addEventListener('mouseup', () =>{clearInterval(cycleInterval)});
rightArrow.addEventListener('click', onRightButtonClick);   

    function onRightButtonClick()
    {
        event.preventDefault();
    }
    function onLeftButtonClick()
    {
        event.preventDefault();
    }