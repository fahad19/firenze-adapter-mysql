import makeAdapter from 'firenze/src/adapters/Sql/makeAdapter';

import makeConnection from './makeConnection';
import Query from './Query';

export default makeAdapter(makeConnection, {
  queryClass: Query
});
