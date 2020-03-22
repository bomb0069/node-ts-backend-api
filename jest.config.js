module.exports = {
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  },
  reporters: [
    'default',
    [
      'jest-junit',
      {
        suiteName: 'jest tests',
        outputDirectory: 'reports',
        outputName: 'junit.xml',
        uniqueOutputName: 'false',
        classNameTemplate: '{classname}-{title}',
        titleTemplate: '{classname}-{title}',
        ancestorSeparator: ' › ',
        usePathForSuiteName: true
      }
    ]
  ],
  collectCoverageFrom: [
    '**/*.{ts,tsx,js,jsx}',
    '!coverage/**',
    '!node_modules/**',
    '!jest.config.js',
    '!dist/**'
  ],
  coverageReporters: [
    'text',
    // 'lcov',
    'json',
    'text',
    'clover',
    'cobertura'
  ]
}
