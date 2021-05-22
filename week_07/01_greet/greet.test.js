const greeting = require('./greet');

describe('Function pre-requirements', () => {
  test('it is defined', () => {
    expect(greeting()).toBeDefined();
  });
});

describe('Functionality', () => {
  test('Return greeting', () => {
    expect(greeting('Elizabeth')).toBe('Hello, Elizabeth');
  });

  test('Handling null values', () => {
    expect(greeting(null)).toBe('Hello there!');
  });

  test('Shouting when needed', () => {
    expect(greeting('JORGE')).toBe('HELLO JORGE!');
  });

  test('Extended greet with two names', () => {
    expect(greeting(['Jorge', 'Israel'])).toBe('Hello, Jorge, Israel');
  });

  test('Extended greet with more than two names', () => {
    expect(greeting(['Jorge', 'Israel', 'Juan', 'Ismael', 'Jose', 'Miguel'])).toBe('Hello, Jorge, Israel, Juan, Ismael, Jose, Miguel');
  });
});
