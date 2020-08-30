global.___loader = {
  enqueue: jest.fn(),
};

// Ensure tests fail for prop type errors.
// https://medium.com/shark-bytes/type-checking-with-prop-types-in-jest-e0cd0dc92d5
const originalConsoleError = console.error;
console.error = (message) => {
  if (/(Failed prop type)/.test(message)) {
    throw new Error(message);
  }

  originalConsoleError(message);
};
