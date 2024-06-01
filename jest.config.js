// jest.config.js
module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'], // Adjust the path as needed
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  testEnvironment: 'jsdom',
  // Other Jest configurations...
};
