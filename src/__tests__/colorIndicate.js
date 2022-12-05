import healthIndicate from '../health';

test.each([
  ['healthy', 70, 'green'],
  ['wounded', 30, 'yellow'],
  ['critical', 10, 'red'],
])('testing health level %s status with %i healt points', (_, healthPoints, expected) => {
  const result = healthIndicate({ name: 'Superhero', health: `${healthPoints}` });
  expect(result).toBe(expected);
});
