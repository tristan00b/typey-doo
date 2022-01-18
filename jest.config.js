export default {
  preset: 'ts-jest/presets/js-with-ts',
  rootDir: './src/test',
  testEnvironment: 'node',
  verbose: true,
  testPathIgnorePatterns: [ '<rootDir>/static/' ]
}
