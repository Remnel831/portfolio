const CharacterNameBox = document.getElementById("CharacterNameBox");
const CharacterHealthBox = document.getElementById("CharacterHealthBox");
const CharacterAttackBox = document.getElementById("CharacterAttackBox");
const CharacterMagicBox = document.getElementById("CharacterMagicBox");
const CharacterRangeBox = document.getElementById("CharacterRangeBox");
const CharacterDefenseBox = document.getElementById("CharacterDefenseBox");
const CharacterWeaponBox = document.getElementById("CharacterEWeaponBox");
const CharacterArmorBox = document.getElementById("CharacterEArmorBox");
const CharacterPhoto = document.getElementById("CharacterPhoto");

const buttonRight = document.getElementById("buttonRight");
const buttonLeft = document.getElementById("buttonLeft");
const buttonEWeapon = document.getElementById("buttonEquipWeapon");
const buttonUWeapon = document.getElementById("buttonUnequipWeapon");
const buttonNextWeapon = document.getElementById("buttonNextWep");
const buttonPrevWeapon = document.getElementById("buttonPrevWep");
const buttonEArmor = document.getElementById("buttonEquipArmor");
const buttonUArmor = document.getElementById("buttonUnequipArmor");


const WeaponInvBox = document.getElementById("WeaponInventoryBox");
const ArmorInvBox = document.getElementById("ArmorInv");

buttonRight.addEventListener('click', onRightButtonClick);
buttonLeft.addEventListener('click', onLeftButtonClick);

buttonEArmor.addEventListener('click', onEArmorClick);
buttonUArmor.addEventListener('click', onUArmorClick);

buttonEWeapon.addEventListener('click', onEWeaponClick);
buttonUWeapon.addEventListener('click', onUWeaponClick);
buttonNextWeapon.addEventListener('click', onNextWepClick);
buttonPrevWeapon.addEventListener('click', onPrevWepClick);


//setting i, w, a to -1 to avoid skipping 0 feels janky, but it works.
var i = -1;
var w = 0;
var a = 0;

var Char = Roster[i];

function onNextWepClick()
{
var WepInvLength = WeaponInv.length;
WeaponInvBox.value = WeaponInv[w].name;
w++;
buttonPrevWeapon.disabled = false;
if (w == 0){
    buttonPrevWeapon.disabled = true;
}
if (w == WepInvLength -1){
    buttonNextWeapon.disabled = true;
}
}
function onPrevWepClick(){
    w = w-1;
    var WepInvLength = WeaponInv.length;
    buttonNextWeapon.disabled = false;
    WeaponInvBox.value = WeaponInv[w].name;
    if (w == 0){
        buttonPrevWeapon.disabled = true;
    }
    if (w == WepInvLength -1){
        buttonNextWeapon.disabled = true;
    }
}
function onEArmorClick(){
if(Char.equippedArmor == null){
    Char.EquipArmor(ArmorInv[i]);
}
}

function onUArmorClick(){
if(Char.EquippedArmor != null){
    Char.EquipArmor(ArmorInv[a]);
}
}
// still needs work but its a start.
function onEWeaponClick(){
    if (Char.EquippedWeapon.name != "Unarmed"){
        //prevents unarmed from being added to the array, but it still sometimes adds the equipped weapon more than once.
        //maybe you manually have to unequip a weapon first until I can sort out automatically doing it. 
        WeaponInv.push(Char.EquippedWeapon);
    }
    Char.EquipWeapon(WeaponInv[w]);
    CharacterWeaponBox.value = Char.EquippedWeapon.name;
    CharacterAttackBox.value = Char.attack;
    buttonEWeapon.disabled = true;

}

function onUWeaponClick(){
    if(Char.EquippedWeapon.name != "Unarmed"){
        //does prevent you from unequipping unarmed
        WeaponInv.push(Char.EquippedWeapon);
        Char.UnequipWeapon(Char.EquippedWeapon);
        CharacterWeaponBox.value = Char.EquippedWeapon.name;
        CharacterAttackBox.value = Roster[i].attack;
        buttonEWeapon.disabled = false;
        console.log(WeaponInv);
    }



}
//Changing the selected characters work at least! 
function onRightButtonClick()
{
    const length = Roster.length;
    buttonEWeapon.disabled = false;
    buttonUWeapon.disabled = false;
    buttonNextWeapon.disabled = false;
    buttonPrevWeapon.disabled = false;
    i++;
      nextChar = () =>{
        CharacterNameBox.value = Roster[i].name;
        CharacterHealthBox.value = Roster[i].health
        CharacterAttackBox.value = Roster[i].attack;
        CharacterMagicBox.value = Roster[i].magic;
        CharacterRangeBox.value = Roster[i].range;
        CharacterDefenseBox.value = Roster[i].defense;
        CharacterWeaponBox.value = Roster[i].EquippedWeapon.name;
        CharacterArmorBox.value = Roster[i].EquippedArmor.name;
        CharacterPhoto.src = Roster[i].characterphoto;     
        buttonLeft.disabled = false;
        Char = Roster[i];
        if (i ==0){
            buttonLeft.disabled = true;
        }
        if (i == (length-1)){

            buttonRight.disabled = true;
        }

    }
    nextChar();
}

function onLeftButtonClick()
{
    i = i-1;
    prevChar = () =>{

        CharacterNameBox.value = Roster[i].name;
        CharacterHealthBox.value = Roster[i].health
        CharacterAttackBox.value = Roster[i].attack;
        CharacterMagicBox.value = Roster[i].magic;
        CharacterRangeBox.value = Roster[i].range;
        CharacterDefenseBox.value = Roster[i].defense;
        CharacterWeaponBox.value = Roster[i].EquippedWeapon.name;
        CharacterArmorBox.value = Roster[i].EquippedArmor.name;
        CharacterPhoto.src = Roster[i].characterphoto;
        Char = Roster[i];
        buttonRight.disabled = false;
        if (i == 0){
            buttonLeft.disabled = true;
        }
    }

    prevChar();
}

