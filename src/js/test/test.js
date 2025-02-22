import healthCheck from '../app.js';

test.each([
  ['healthy', { name: 'Маг', health: 90 }, 'healthy'],
  ['wounded', { name: 'Лучник', health: 45 }, 'wounded'],
  ['critical', { name: 'Воин', health: 10 }, 'critical'],
])('testing %s status', (status, char, expected) => {
  const result = healthCheck(char);
  expect(result).toBe(expected);
});
