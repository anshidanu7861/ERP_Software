module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        // ts-jest configuration options go here
      },
    ],
  },
  moduleFileExtensions: ["ts", "tsx", "js"],
};
