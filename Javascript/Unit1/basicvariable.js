//Jacob Jorgensen 1/12/2024
//basic variable javascript

const hello = "Hello!  What is your favorite animal?";
var basicNumber = 10;
var favAnimal = prompt(hello);

basicNumber++;
 
document.getElementById("favoriteAnimal").innerHTML = "The animal you entered is: " + favAnimal;

console.log(basicNumber);

console.log("Users favorite animal is: " + favAnimal);
