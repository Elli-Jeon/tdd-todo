module.exports = {
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', 'src'],
  roots: ['src'],
  coverageDirectory: '../coverage',
  moduleNameMapper: {
    'src/(.*)': '<rootDir>/src/$1',
  },
};
