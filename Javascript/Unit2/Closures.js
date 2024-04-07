var p = document.createElement('p');


function characterBuild(name, hp, ...moves)
{
    var name = name;
    var hp = hp;
    var moves = moves


    return{
         getName()
         {
            return "Name: " + name;
         },
         getHP()
         {
            return "Health: " + hp;
         },
         getMoves()
         {
          MoveList = document.querySelector(".Moves");
            for (let i in moves)
            {        
            MoveList.append(moves[i] +" ")
            }
         }
    }
}

var warrior = characterBuild("Warrior", 100, "[Melee Attack]", "[Ranged Attack]", "[Defend]", "[Parry]");

console.log(warrior.getName());
console.log(warrior.getHP());
warrior.getMoves();