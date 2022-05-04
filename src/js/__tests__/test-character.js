import Character from '../Character';
import Zombie from '../Zombie';

test('error if name is not a string', () => {
  expect(() => new Character(45, 'Bowman')).toThrowError('Имя должно включать буквы, количество символов в имени должно быть от 2 до 10');
});

test('error if name is less than 2 symbols', () => {
  expect(() => new Character('I', 'Bowman')).toThrowError('Имя должно включать буквы, количество символов в имени должно быть от 2 до 10');
});

test('error if name is more than 10 symbols', () => {
  expect(() => new Character('Opportunity', 'Bowman')).toThrowError('Имя должно включать буквы, количество символов в имени должно быть от 2 до 10');
});

test('error if the specified character type does not exist', () => {
  expect(() => new Character('Man', 'Elf')).toThrowError('Типа персонажа Elf не существует');
});

test('creating an object with a type Zombie', () => {
  const result = new Character('Man', 'Zombie');
  const expected = {
    name: 'Man',
    type: 'Zombie',
    health: 100,
    level: 1,
  };
  expect(result).toEqual(expected);
});

test('levelUp function if health = 0', () => {
  expect(() => {
    const result = new Zombie('Man');
    result.health = 0;
    result.levelUp();
  }).toThrowError('Нельзя повысить level умершего!');
});

test('levelUp function', () => {
  const result = new Zombie('Man');
  const expected = {
    name: 'Man',
    type: 'Zombie',
    health: 100,
    level: 2,
    attack: 48,
    defence: 12,
  };
  result.levelUp();
  expect(result).toEqual(expected);
});

test('damage function', () => {
  const result = new Zombie('Man');
  const expected = {
    name: 'Man',
    type: 'Zombie',
    health: 91,
    level: 1,
    attack: 40,
    defence: 10,
  };
  result.damage(10);
  expect(result).toEqual(expected);
});

test('damage function if health < 0', () => {
  const result = new Zombie('Man');
  result.health = 1;
  const expected = {
    name: 'Man',
    type: 'Zombie',
    health: 0,
    level: 1,
    attack: 40,
    defence: 10,
  };
  result.damage(10);
  expect(result).toEqual(expected);
});
