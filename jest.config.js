module.exports = {
  clearMocks: true,
  collectCoverageFrom: [
    'src/**/*.(js|jsx)',
    '!src/index.js',
    '!src/app.js',
    '!src/views/index.js',
    '!src/database/**/*.js',
  ],
  coverageDirectory: 'coverage',
  setupFiles: ['<rootDir>/setupFiles.js'],
  moduleFileExtensions: ['js', 'json', 'jsx'],
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).js'],
  testPathIgnorePatterns: ['\\\\node_modules\\\\'],
  testURL: 'http://localhost',
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  verbose: false,
};
