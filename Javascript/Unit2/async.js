async function Race(){

    var runner1 = false;
    var runner2 = false;
    var loser = " ";
    

var runner1GO = new Promise(function(resolve){

    setTimeout(()=>{
        resolve(runner1 = true, loser = "runner1");
    }, 3000);
});
    
var runner2GO = new Promise(function (resolve){

        setTimeout(()=>{
            resolve(runner2 = true, loser = "runner2");
        }, 2000);
});


var RaceArray = [await runner1GO, await runner2GO, loser];

return RaceArray;

}



Race().then(function(RaceArray)
{
console.log(RaceArray[2] + " loses");
});

//Everything past this point is just so the page isn't blank.
bar1();
bar2();

/* I found this site on how to make a progress bar https://www.geeksforgeeks.org/creating-progress-bar-using-javascript/ and realized if I adjusted 
the setInterval and put two of them in async functions they would run at seperate speeds to make it look like a race */

async function bar1() 
{ 
var announcer = document.getElementById("raceAnnounce")     
var racebar1 = document.getElementById("racer1bar");
var width = 1;
var racer1Time = setInterval(racer1scene, 30);
function racer1scene() {
    if (width >= 100){
        clearInterval(racer1Time);
        announcer.append("Racer 1 Loses");
    }
    else {
        width++;
        racebar1.style.width = width + '%';
    }
}}
async function bar2()
{
    var racebar2 = document.getElementById("racer2bar");
    var width = 1;
    var racer2Time = setInterval(racer2scene, 16);
    function racer2scene() {
        if (width >= 100){
            clearInterval(racer2Time);
        }
        else {
            width++;
            racebar2.style.width = width + '%';
        }
    }
}
