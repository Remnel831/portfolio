class GauntletCharacter{
    constructor(){
        this.name;
        this.health = 0;
        this.attack = 0;
        this.range = 0;
        this.magic = 0;
        this.defense = 0;
        this.EquippedWeapon;
        this.EquippedArmor;
        this.characterPhoto;
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
        this.EquippedWeapon = Weapon;
        this.attack = this.attack + Weapon.attackPower;
    }
    EquipRangeWeapon(Weapon){
        this.EquippedWeapon = Weapon;
        this.attack + Weapon.attackPower;
    }
    EquipMageWeapon(mageWeapon){
        this.EquippedWeapon = mageWeapon;
        this.magicPower + mageWeapon.magicPower;
    }
    EquipArmor(Armor){
        this.EquippedArmor = Armor;
        this.defense + Armor.defensePower
    }

    UnequipWeapon(){
        this.attack = this.attack - this.EquippedWeapon.attackPower;
        WeaponInv.push(this.EquippedWeapon);
        this.EquippedWeapon = fist;
    }
    UnequipRangeWeapon(Weapon){
        this.rangeattack - Weapon.attackPower;
        this.EquippedWeapon = null;
    }
    UnequipMageWeapon(Weapon){
        this.magicAttack - Weapon.magicPower;
        this.EquippedWeapon = null;
    }
    UnequipArmor(Armor){
        this.defense - Armor.defensePower;
        this.EquippedArmor = null;
    }
}

class GauntletWeapon{
    constructor(){
        this.name;
        this.attackPower = 0;
        this.rangepower = 0;
        this.magicPower = 0;
    }
}
class GauntletArmor{
    constructor(){
        this.name;
        this.defensePower = 0;
    }
}