module.exports = {
  preset: 'jest-preset-angular',
  testMatch: ['<rootDir>/src/**/*.spec.ts'],
  setupFilesAfterEnv: [
    '<rootDir>/src/setup-jest.ts',
  ],
  coverageReporters: [
    'json',
    'lcov',
    'text',
    'clover',
    'cobertura',
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/projects',
  ],
  modulePathIgnorePatterns: [
    '<rootDir>/.stryker-tmp/',
    '<rootDir>/projects/classify-text-swagger-client/',
    "<rootDir>/projects/language-tasks-swagger-client/",
    '<rootDir>/projects/rules-swagger-client/',
    '<rootDir>/projects/shared-component-swagger-client/',
  ],
};
