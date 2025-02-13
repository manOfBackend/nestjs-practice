module.exports = {
    projects: ['<rootDir>/apps/*'],
    collectCoverage: true,
    coverageDirectory: 'coverage',
    moduleFileExtensions: ['js', 'json', 'ts'],
    transform: {
      '^.+\\.(t|j)s$': 'ts-jest',
    },
    testMatch: ['**/*.spec.ts'],
    testEnvironment: 'node',
  };
  