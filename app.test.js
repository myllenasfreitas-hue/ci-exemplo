const soma = require('./app');

test('soma 2 + 3 para ser igual a 5', () => {
  expect(soma(2, 3)).toBe(5);
});
