/* eslint-disable no-undefined */
import knex from 'knex';

export default function makeConnection(options = {}) {
  const config = {
    client: 'mysql',
    connection: options,
    pool: options.pool ? options.pool : undefined
  };

  return knex(config);
}
