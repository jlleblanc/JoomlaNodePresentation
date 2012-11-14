var joomla = require('joomla');

joomla('/Users/josephleblanc/Sites/projects/joomla_node_30');

joomla.db.query('SELECT * FROM #__users', function (rows) {
  rows.forEach(function  (row) {
    console.log({
      name: row.name, 
      username: row.username, 
      id: row.id
    });
  });
});