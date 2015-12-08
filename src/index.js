import makeAdapter from 'firenze/lib/adapters/Sql/makeAdapter';

import makeConnection from './makeConnection';
import Query from './Query';

export default makeAdapter(makeConnection, {
  queryClass: Query
});
