
var container = document.getElementById('domContainer');

const button = document.querySelector("button");

button.addEventListener('click', onButtonClick);

var clicked = 0

function onButtonClick()
{
    switch(clicked)
    {
        case 0:
            {
                document.body.style.background = "white";
                container.style.background = "yellow";
                document.body.style.color = "black";
                container.style.outlineColor = "black";
                clicked = 1;
                button.textContent = "Lights off";
                break;
            }
        case 1:
            {
                    container.style.outlineColor = "white";
                    document.body.style.backgroundImage = "url('../Images/SilkBG.png')";
                    container.style.backgroundImage = "url('../Images/SilkBG.png')";
                    document.body.style.color = "white";
                    clicked = 0;
                    button.textContent = "Lights on";
                    
                break
            }
    };



    
}


for(let i = 0; i < 5; i++)
{
    const createPara = document.createElement('p');
    var inserText = document.createTextNode("I am the very model of a scientist salarian I've studied species Turian, Asari, and Batarian.");

    container.appendChild(createPara);
    createPara.appendChild(inserText);
}
