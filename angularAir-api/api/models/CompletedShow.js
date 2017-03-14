/**
 * CompletedShow.js
 *
 * @description :: A completed version of the show model for demo purposes 
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  schema: true,
  // connection: 'somePostgresqlServer',
  // tableName: 'Shows',
  attributes: {
    "title": {
      type: 'string',
      required: true,
      size: 100
    },
    "episodeNum": {
      unique: true,
      type: 'integer'
    }
  }
};

