module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  reporters: [
    'default',
    [
      'jest-sonar',
      {
        outputDirectory: 'coverage',
        outputName: 'test-report.xml',
      },
    ],
  ],
};
