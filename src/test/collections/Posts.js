/* eslint-disable new-cap */
var P = require('firenze').Promise;

module.exports = function (db) {
  return db.createCollectionClass({
    table: 'posts',

    alias: 'Post',

    displayField: 'title',

    schema: {
      id: {
        type: 'increments'
      },
      author_id: { //eslint-disable-line
        type: 'integer'
      },
      title: {
        type: 'string'
      },
      body: {
        type: 'text'
      },
      views: {
        type: 'integer'
      },
      note: {
        type: 'string'
      }
    },

    afterDelete: function (model) {
      model.set('_field', 'afterDelete');
      return new P.resolve(true);
    },

    modelClass: require('../models/Post')
  });
};
