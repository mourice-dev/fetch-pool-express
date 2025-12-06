const { pool } = require("pg");

pool = new pool({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "postgres",
    port: 8000,
});

pool.query("SELECT * FROM users", (err, res) => {
    if (!err) {
        console.log(res.rows);
    }
    else {
        console.log(err.message);
    }   
})