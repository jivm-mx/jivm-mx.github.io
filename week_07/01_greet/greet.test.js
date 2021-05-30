const greeting = require('./greet');

describe('Function pre-requirements', () => {
  test('it is defined', () => {
    expect(greeting()).toBeDefined();
  });
});

describe('Functionality', () => {
  test('Return greeting', () => {
    expect(greeting('Elizabeth')).toEqual('Hello, Elizabeth');
  });

  test('Handling null values', () => {
    expect(greeting(null)).toEqual('Hello there!');
  });

  test('Shouting when needed', () => {
    expect(greeting('JORGE')).toEqual('HELLO JORGE!');
  });

  test('Extended greet with two names', () => {
    expect(greeting(['Jorge', 'Israel'])).toEqual('Hello, Jorge, Israel');
  });

  test('Extended greet with more than two names', () => {
    expect(greeting(['Jorge', 'Israel', 'Juan', 'Ismael', 'Jose', 'Miguel'])).toEqual('Hello, Jorge, Israel, Juan, Ismael, Jose, Miguel');
  });
});
/*
    What is the unit under test (module, function, class, whatever)?
    What should it do? (Prose description)
    What was the actual output?
    What was the expected output?
    How do you reproduce the failure? */
