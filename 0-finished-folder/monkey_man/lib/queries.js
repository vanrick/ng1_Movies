var knex = require('../db/knex');

module.exports = {
  create: function (monkeys) {
    return knex.raw(`INSERT INTO monkeys values(default,
      '${monkeys.name}',
      '${monkeys.age}')`);
  },
  createAll: function(obj) {
    return knex.raw(`insert into monkeys values (default, '${obj.name}', ${obj.age})`).then(function() {
      return knex.raw(`select id from monkeys where name = '${obj.name}'`).then(function(id) {
        return knex.raw(`insert into clothes values (default, '${obj.clothes}', ${id.rows[0].id})`)
      })
    })
  },
  findAll: function() {
      return knex.raw(`select m.name, m.age, c.clothing_item from monkeys m join clothes c on m.id = c.monkey_id`)
  },
  all: function () {
    return knex.raw('SELECT * FROM monkeys');
  },
  findOne: function (id) {
    return knex.raw(`SELECT * FROM monkeys WHERE id=${id}`);
  },
  updateOne: function (id,monkeys) {
    return knex.raw(`UPDATE monkeys SET
      name='${monkeys.author}',
      age='${monkeys.title}'
      WHERE id=${id}`);
  },
  destroy: function (id) {
    return knex.raw(`DELETE FROM monkeys WHERE id=${id}`);
  }
}
