/* eslint-disable new-cap */
var P = require('firenze').Promise;

module.exports = function (db) {
  return db.createCollectionClass({
    table: 'authors',

    alias: 'Author',

    displayField: 'name',

    schema: {
      id: {
        type: 'increments'
      },
      name: {
        type: 'string'
      },
      bio: {
        type: 'text'
      }
    },

    beforeDelete: function () {
      return new P.reject(true);
    },

    afterDelete: function (model) {
      return new P(function (resolve, reject) {
        model.set('title', 'Deleted');
        reject(true);
      });
    },

    modelClass: require('../models/Author')
  });
};
