import { httpGithub } from '../../services/index';

export default async () => {
  console.log('====>>> Fazendo uma requisição com service');

  try {
    await httpGithub.post();
  } catch (error) {
    console.log(error);
  }

  console.log('====>>> Deu um error pois a requisição é apenas um exemplo :D');
};
