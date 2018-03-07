var knex = require('../db/knex');

module.exports = {
  create: function (clothes) {
    return knex.raw(`INSERT INTO clothes values(default,
      '${clothes.clothing_item}')`);
  },
  all: function () {
    return knex.raw('SELECT * FROM clothes');
  },
  findOne: function (id) {
    return knex.raw(`SELECT * FROM clothes WHERE id=${id}`);
  },
  updateOne: function (id, clothes) {
    return knex.raw(`UPDATE clothes SET
      clothing_item='${clothes.clothing_item}'
      WHERE id=${id}`);
  },
  destroy: function (id) {
    return knex.raw(`DELETE FROM clothes WHERE id=${id}`);
  }
}
