import { initClient } from '@ts-rest/core';
import { contract } from './contract';

const client = initClient(contract, {
  baseUrl: 'http://localhost:3000',
  baseHeaders: {},
});

const run = async () => {
  const { body, status } = await client.getPosts();

  console.log({ body, status });
};

run();
