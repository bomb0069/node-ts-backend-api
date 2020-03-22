module.exports = {
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  },
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
