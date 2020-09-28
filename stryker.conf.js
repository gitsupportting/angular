/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  comment:
    'This config was generated using a preset. Please see the handbook for more information: https://github.com/stryker-mutator/stryker-handbook/blob/master/stryker/guides/angular.md#angular',
  mutate: [
    'src/**/*.ts',
    '!src/**/*.spec.ts',
    '!src/test.ts',
    '!src/environments/*.ts',
    '!src/**/__mocks__/*',
  ],
  mutator: 'typescript',
  testRunner: 'jest',
  jest: {
    config: require('./jest.config.js'),
  },
  reporters: ['progress', 'clear-text', 'html'],
  maxConcurrentTestRunners: 3,
  maxConcurrentTestRunners_comment:
    'Recommended to use about half of your available cores when running stryker with angular',
  coverageAnalysis: 'off',
};
