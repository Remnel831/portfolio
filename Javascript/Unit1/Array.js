//Jacob Jorgensen
//Array assignment javascript

var arrayNumbers = new Array();
arrayNumbers[0] = 9;
arrayNumbers[1] = 11;
arrayNumbers[2] = 8;
arrayNumbers[3] = 3;

var ValueAdd = function ValueAddFunc(value)
{
    value++;
    console.log(value);
    return value;
};


function OddCheck(ValueAdd, valueChecked)
{
    if (valueChecked % 2 != 0)
    {
        ValueAdd(valueChecked)
    }
    else
    {
        console.log("The number is odd");
    }
}
for (var i in arrayNumbers)
{
    OddCheck(ValueAdd, i)
}
