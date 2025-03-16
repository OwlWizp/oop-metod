import Character from '../Character.js';
import Bowman from '../Bowman.js';
import Swordsman from '../Swordsman.js';
import Magician from '../Magician.js';
import Undead from '../Undead.js';
import Zombie from '../Zombie.js';
import Daemon from '../Daemon.js';

test.each([
  ['1 simvol', 'a', 'name must be from 2 to 10 characters'],
  ['>10', 'dfgdfgsdfgsdfgdsfgsdfg', 'name must be from 2 to 10 characters'],
  ['number', 11, 'name must be sting'],
])('testing wrong name %s status', (status, name, expected) => {
  expect(() => { const char = new Character(name); }).toThrow(expected);
});

test('wrong type', () => {
  expect(() => { const char = new Character('Джон', 'Lich'); }).toThrow('charecter must be one of default types: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
});

test('create character', () => {
  const char = new Character('Джон', 'Swordsman', 10, 10);
  expect(char).toEqual({
    name: 'Джон', type: 'Swordsman', health: 100, level: 1, attack: 10, defence: 10,
  });
});

test.each([
  ['Bowman', new Bowman('Легалас'), {
    name: 'Легалас', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
  }],
  ['Swordsman', new Swordsman('Джон'), {
    name: 'Джон', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10,
  }],
  ['Magician', new Magician('Гендальф'), {
    name: 'Гендальф', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40,
  }],
  ['Undead', new Undead('Артас'), {
    name: 'Артас', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25,
  }],
  ['Zombie', new Zombie('Джон'), {
    name: 'Джон', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10,
  }],
  ['Daemon', new Daemon('Анаха'), {
    name: 'Анаха', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40,
  }],
])('testing create %s char', (status, char, expected) => {
  expect(char).toEqual(expected);
});

test('levelUp work', () => {
  const char = new Bowman('Легалас');
  char.health = 50;
  char.levelUp();
  expect(char).toEqual({
    name: 'Легалас', type: 'Bowman', health: 100, level: 2, attack: 30, defence: 30,
  });
});

test('levelUp doesnt work', () => {
  const char = new Bowman('Легалас');
  char.health = 0;
  expect(() => { char.levelUp(); }).toThrow('нельзя повысить уровень умершего');
});

test.each([
  ['dead', 150, 0],
  ['half', 100, 25],
])('testing damage %s status', (status, points, expected) => {
  const char = new Bowman('Легалас');
  char.damage(points);
  expect(char.health).toBe(expected);
});
