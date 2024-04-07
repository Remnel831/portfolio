var Valkyrie = new GauntletCharacter;

var UndeadSoldier = new GauntletCharacter;
var Goblin = new GauntletCharacter;
var BronzeSword = new GauntletWeapon;
var BronzeArmor = new GauntletArmor;


Valkyrie.name = "Layla";
Valkyrie.health = 10;
Valkyrie.attack = 2;
Valkyrie.defense = 2;


UndeadSoldier.name = "Zombie";
UndeadSoldier.health = 3;
UndeadSoldier.attack = 4;
UndeadSoldier.defense = 2;

Goblin.name = "Gross lil Goblin";
Goblin.health = 1;
Goblin.attack = 2;
Goblin.defense = 1;

BronzeSword.attackPower = 1;
BronzeArmor.defensePower = 1;


Goblin.log();
UndeadSoldier.log();
Valkyrie.log();