const options = {
    host: 'drona.db.elephantsql.com',
    user: 'istzzdcz',
    password: 'xOu2n14C__5yiStrj_1IYbnfbIvAi8tS',
    database: 'istzzdcz'
}

const pgp = require('pg-promise')({
    query: function(e){
        console.log('query: ', e.query);
    }
})

const db = pgp(options);

module.exports = db;