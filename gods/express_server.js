/** @format */

var express = require("express");

var app = express();

app.use(express.json()); //-- Middleware
app.use(express.urlencoded({ extended: false }));

app.use("/users", require("./router"));

/* before express.router
// const user_data = require('./User_data');
app.get('/', (req, res) => {
  res.json(user_data);
});
//   .listen(8002);
*/
app.listen(8001, () => {
  console.log("server started on port 8001");
});

/*Postman
http://localhost:8001/users


http://localhost:8001/users
http://localhost:8001/users/1
http://localhost:8001/users/1
http://localhost:8001/users
http://localhost:8001/users/210




*/
