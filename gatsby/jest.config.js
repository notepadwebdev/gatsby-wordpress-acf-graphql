module.exports = {
  clearMocks: true,
  transform: {
    '^.+\\.jsx?$': `<rootDir>/jest-preprocess.js`,
    '^.+\\.svg$': `jest-svg-transformer`,
    '^.+\\.(md|mdx)$': `jest-transformer-mdx`
  },
  moduleDirectories: [`node_modules`, `src`],
  moduleNameMapper: {
    '\\.(scss|css|less)$': `<rootDir>/__mocks__/styleMock.js`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`
  },
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
    __BASE_PATH__: ``
  },
  setupFiles: [`<rootDir>/loadershim.js`],
  setupFilesAfterEnv: [`<rootDir>/__mocks__/matchMedia.js`],
  testEnvironment: `jsdom`
};
