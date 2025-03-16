export default class Character {
  constructor(name, type, attack, defence) {
    if (typeof (name) !== 'string') {
      throw new Error('name must be sting');
    }
    if (name.length <= 2 || name.length >= 10) {
      throw new Error('name must be from 2 to 10 characters');
    }
    if (!['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(type)) {
      throw new Error('charecter must be one of default types: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
  }
}
