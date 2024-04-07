var Valkyrie = new GauntletCharacter;
var Wizard = new GauntletCharacter;
var Warrior = new GauntletCharacter;
var Jester = new GauntletCharacter;




var Roster = [Valkyrie, Wizard, Warrior, Jester];



//Every hero has 100 hp.  The stat they have an affinity for is 10, second is 8, next 5, then 2 is the opposite affinity. 
Valkyrie.name = "Layla";
Valkyrie.health = 100;
Valkyrie.attack = 8;
Valkyrie.defense = 10;
Valkyrie.magic = 2;
Valkyrie.range = 5;
Valkyrie.EquippedArmor = platemail;
Valkyrie.EquippedWeapon = longsword;
Valkyrie.characterphoto = "../../Images//GauntletCharacters/Valkyrie.png"

Wizard.name = "Morgan"
Wizard.health = 100;
Wizard.attack = 2;
Wizard.defense = 5;
Wizard.magic = 10;
Wizard.range = 8;
Wizard.EquippedWeapon = mageStaff;
Wizard.EquippedArmor = mageRobe;
Wizard.characterphoto = "../../Images//GauntletCharacters/Wizard.png";

Warrior.name = "Thor";
Warrior.health = 100;
Warrior.attack = 10;
Warrior.defense = 8;
Warrior.range = 5;
Warrior.magic = 2;
Warrior.EquippedWeapon = battleaxe;
Warrior.EquippedArmor = loincloth;
Warrior.characterphoto = "../../Images//GauntletCharacters/Warrior.png"

Jester.name = "Arlecchino";
Jester.health = 100;
Jester.attack = 8;
Jester.defense = 5;
Jester.range = 10;
Jester.magic = 2;
Jester.EquippedWeapon = marotte;
Jester.EquippedArmor = motley;
Jester.characterphoto = "../../Images//GauntletCharacters/Jester.png"