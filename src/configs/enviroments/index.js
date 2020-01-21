import devEnv from './development';
import prodEnv from './prod';
import testEnv from './test';

export default () => {
  const enviroments = {
    development: 'development',
    build: 'build',
    test: 'test',
  };

  const { NODE_ENV } = process.env;

  switch (NODE_ENV) {
    case enviroments.build:
      return prodEnv;

    case enviroments.test:
      return testEnv;

    case enviroments.development:
    default:
      return devEnv;
  }
};
