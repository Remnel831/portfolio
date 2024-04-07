const buttonPush = document.getElementById("PushButton");
const buttonPop = document.getElementById("PopButton");
const buttonShift = document.getElementById("ShiftButton");
const buttonUnshift = document.getElementById("UnshiftButton");
const buttonMap = document.getElementById("MapButton");
const outputParagraph = document.getElementById("outputPara");

buttonPush.addEventListener('click', onPushButtonClick);
buttonPop.addEventListener('click', onPopButtonClick);
buttonShift.addEventListener('click', onShiftButtonClick);
buttonUnshift.addEventListener('click', onUnshiftButtonClick);
buttonMap.addEventListener('click', onMapButtonClick);
var OutPutArray = new Array();

function Update(arrayIn)
{
    outputParagraph.innerHTML = "";

    arrayItem = arrayIn.reduce(arrayReduce, "");

   outputParagraph.innerHTML = arrayItem;
}

function arrayReduce(item, input, index){
    return index + ". " + input + "</br>" + item
}
function onPushButtonClick()
{
//adds to the last value of the array
var textInput = document.getElementById("inputText").value;
 OutPutArray.push(textInput);
 Update(OutPutArray);
}

function onPopButtonClick(){
OutPutArray.pop()
//removes the last value in the array
Update(OutPutArray);
}

function onShiftButtonClick(){
//shift removes the first value in the array
OutPutArray.shift();
Update(OutPutArray);
}

function onUnshiftButtonClick(){
//unshift adds to the beginning of the array
var textInput = document.getElementById("inputText").value;
OutPutArray.unshift(textInput)
Update(OutPutArray);
}

function onMapButtonClick(){    
var textInput = document.getElementById("inputText").value;
outputParagraph.innerHTML = "";
mapArray = OutPutArray.map((value, index)=>{
    return index + ". " + textInput + value + "</br>";
});
outputParagraph.innerHTML = mapArray;

console.log(mapArray);
}

