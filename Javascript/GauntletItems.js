//weapons

var battleaxe = new GauntletWeapon;
var longsword = new GauntletWeapon;
var marotte = new GauntletWeapon;
var mageStaff = new GauntletWeapon;
var GreatSword = new GauntletWeapon;
var mace = new GauntletWeapon;
var mageWand = new GauntletWeapon; 
var fist = new GauntletWeapon;

//armors
var platemail = new GauntletArmor;
var mageRobe = new GauntletArmor;
var motley = new GauntletArmor;
var loincloth = new GauntletArmor;
var chainmail = new GauntletArmor;
var leatherarmor = new GauntletArmor; 

fist.attackPower = 0;
fist.name = "Unarmed";


battleaxe.name = "Battle Axe";
battleaxe.attackPower = 10;

longsword.name = "Longsword";
longsword.attackPower = 8;

marotte.name = "Jester Marotte";
marotte.attackPower = 5;

mageStaff.name = "Mage Staff";
mageStaff.magicPower = 10;

GreatSword.attackPower = 15;
GreatSword.name = "GreatSword";

mace.attackPower = 11;
mace.name = "Mace";

mageWand.magicPower = 11;
mageWand.name = "Wand";

var WeaponInv = [GreatSword, mace];

platemail.name = "Plate Armor"

platemail.defensePower = 10;

mageRobe.defensePower = 2;
mageRobe.name = "Mage Robe";

motley.defensePower = 5;
motley.name = "Jester Motley";

loincloth.name = "Loin Cloth";
loincloth.defensePower = 3;

