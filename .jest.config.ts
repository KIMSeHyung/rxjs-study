// jest.config.ts
import type { Config } from 'jest';

const config: Config = {
  transform: {
    '^.+\\.tsx?$': 'babel-jest', // ← ts 파일도 babel로 변환
  },
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js'],
  extensionsToTreatAsEsm: ['.ts'], // optional: ESM-style import 허용
  verbose: true
};

export default config;