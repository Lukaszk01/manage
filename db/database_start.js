let mysql = require('mysql');

let con = mysql.createConnection({
  host: "localhost",
  user: "mynameis",
  password: "yourpassword"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});