import nextJest from "next/jest.js";

const createJestConfig =
  nextJest?.default({ dir: "./" }) || nextJest({ dir: "./" });

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  // Add more setup options before each test is run
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  preset: "ts-jest",
  // moduleNameMapper: {
  //   // 🧑🏻‍🔧 FIX Problem here
  //   // 🧑🏻‍🔧 resolve react module with the next.js inset one.
  //   react: "next/dist/compiled/react/cjs/react.development.js",
  //   "^@/(.*)$": "<rootDir>/src/$1",
  // },
};

export default createJestConfig(config);
