module.exports = {
  roots: [ "<rootDir>/src" ],
  moduleFileExtensions: [ "js" ],
  testMatch: [ "<rootDir>/src/**/*.test.js" ],
  testEnvironment: "jsdom",
  bail: true,
  verbose: true,
  errorOnDeprecated: false
}