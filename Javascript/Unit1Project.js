//set up the buttons
const leftArrow = document.querySelector("#btnLeft");
const rightArrow = document.querySelector("#btnRight");
//set up form
const form = document.getElementById("projform")
//color cycles here.  RGBYP, PYBGR.
var ForwardColor = ["red", "green", "blue", "yellow", "purple"];
var BackwardColor = ["purple", "yellow", "blue", "green", "red"];

colorIndex = 0;
//Checks if the text box has any numbers inside when a button is clicked. 
function textBoxCheck()
{
    let delayValue = document.getElementById("textinput").value;

    if (delayValue == "" || delayValue == null)
    {
        //if there isn't anything printed defaults to 100ms between color cycles.
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
/*sets cycleforward to get the interval from the text box, then set the border color of the form to match the colorindex.  
Then adds +1 to the index so the next iteration will cycle the next color in the array */
const CycleFoward = () =>  cycleInterval = setInterval(() => {form.style.borderColor = ForwardColor[colorIndex];
        colorIndex = (colorIndex +1) % ForwardColor.length
}, textBoxCheck()); 
//textboxCheck returns the ms time for the setInterval().

//Same as above but backwards.
const CycleBackward = () =>  cycleInterval = setInterval(() => {form.style.borderColor = BackwardColor[colorIndex];
    colorIndex = (colorIndex +1 ) % BackwardColor.length
}, textBoxCheck());
//sets up the mousedown for left arrow to call cycleBackward
leftArrow.addEventListener('mousedown', CycleBackward);
//mouseup clears the interval so it stops cycling.  The index stays though or else it would go back to the first color every time
leftArrow.addEventListener('mouseup', () =>{clearInterval(cycleInterval)});
//The click events just have preventDefault to keep the page from thinking they're submitting the form.
leftArrow.addEventListener('click', onLeftButtonClick)

//Same as above but for the right arrow.  CycleForward instead of back ect. 
rightArrow.addEventListener('mousedown', CycleFoward);
rightArrow.addEventListener('mouseup', () =>{clearInterval(cycleInterval)});
rightArrow.addEventListener('click', onRightButtonClick);   

/*VS studio code says event is depreciated, but it sure doesn't run if I just type preventDefault.  
I could remove event. from the depreciated list, but I'd rather it stay to remind me to look into it later. */
    function onRightButtonClick()
    {
        event.preventDefault();
    }
    function onLeftButtonClick()
    {
        event.preventDefault();
    }