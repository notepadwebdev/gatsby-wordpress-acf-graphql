global.___loader = {
  enqueue: jest.fn()
};

const originalConsoleError = console.error;
console.error = message => {
  if (/(Failed prop type)/.test(message)) {
    throw new Error(message);
  }

  originalConsoleError(message);
};
