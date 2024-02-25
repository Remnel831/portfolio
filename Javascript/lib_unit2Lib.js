class GauntletCharacter{
    constructor(){
        this.Name;
        this.health = 0;
        this.attack = 0;
        this.defense = 0;
        this.EquippedWeapon;
        this.EquippedArmor;
    }
    log(){
        console.log(this);
    }
    DoAHit(target){
        var damage = target.defense - this.attack;
        target.health - damage;
    }
    Block(){
        this.defense * 2;
    }
    EquipWeapon(Weapon){
        this.attack + Weapon.attackPower;
    }
    EquipArmor(Armor){
        this.defense + Armor.defensePower
    }
}
class GauntletWeapon{
    constructor(){
        this.attackPower = 0;
    }
}
class GauntletArmor{
    constructor(){
        this.defensePower = 0;
    }
}