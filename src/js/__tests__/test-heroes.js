import Bowman from '../Bowman';
import Daemon from '../Daemon';
import Magician from '../Magician';
import Swordsman from '../Swordsman';
import Undead from '../Undead';
import Zombie from '../Zombie';

test('creating an object with a type Bowman', () => {
  const result = new Bowman('Man');
  const expected = {
    name: 'Man',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(result).toEqual(expected);
});

test('creating an object with a type Daemon', () => {
  const result = new Daemon('Man');
  const expected = {
    name: 'Man',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(result).toEqual(expected);
});

test('creating an object with a type Magician', () => {
  const result = new Magician('Man');
  const expected = {
    name: 'Man',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(result).toEqual(expected);
});

test('creating an object with a type Swordsman', () => {
  const result = new Swordsman('Man');
  const expected = {
    name: 'Man',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(result).toEqual(expected);
});

test('creating an object with a type Undead', () => {
  const result = new Undead('Man');
  const expected = {
    name: 'Man',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(result).toEqual(expected);
});

test('creating an object with a type Zombie', () => {
  const result = new Zombie('Man');
  const expected = {
    name: 'Man',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(result).toEqual(expected);
});
