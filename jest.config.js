export const globals = {
    "ts-jest": {
        tsConfig: "tsconfig.json"
    }
};
export const moduleFileExtensions = [
    "ts",
    "js"
];
export const transform = {
    "^.+\\.(ts|tsx)$": "ts-jest"
};
export const testMatch = [
    "**/src/**/*.spec.(ts|js)"
];
export const testEnvironment = "node";
