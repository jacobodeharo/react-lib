module.exports = {
  roots: ['src'],
  clearMocks: true,
  coverageDirectory: 'coverage',
  testMatch: ['**/*.test.(ts|tsx)'],
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  testPathIgnorePatterns: ['node_modules/'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!@foo)'],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    // '^@theme/(.*)$': ['src/theme/$1'],
    // '^@helpers/(.*)$': ['src/helper/$1'],
    // '^@core/(.*)$': ['src/core/$1'],
    // '^@components/(.*)$': ['src/components/$1'],
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|css|less|scss|sass)$':
      'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['./jest.setup.ts'],
};
