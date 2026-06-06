import type { Config } from 'jest';

const config: Config = {
  preset: 'jest-preset-angular',

  testEnvironment: 'jsdom',

  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],

  roots: ['<rootDir>/src', '<rootDir>/tests'],

  testMatch: [
    '<rootDir>/src/**/*.spec.ts',
    '<rootDir>/tests/**/*.spec.ts'
  ],

  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1'
  },

  transformIgnorePatterns: [
    'node_modules/(?!.*\\.mjs$|@angular|rxjs)'
  ],

  globals: {
    'ts-jest': {
      useESM: false
    }
  }
};

export default config;
