const express = require("express");
const app = express();

const { faker } = require("@faker-js/faker");

// localhost:5555/fake/users
// 한 명의 사용자 정보 생성
// email, password, fullName, phoneNumber

// app.get("/fake/users", function (req, res) {
//   res.status(200).json({
//     email: faker.internet.email(),
//     password: faker.internet.password(),
//     fullName: faker.person.fullName(),
//     contact: faker.phone.number(),
//   });
// });

// localhost:5555/fake/users
// req로 숫자를 받아서, 그 수만큼 사용자 정보를 생성해주는 API

app.get("/fake/users", function (req, res) {
  const { num } = req.query;

  let index = 1;
  const users = [];
  while (index <= num) {
    users.push({
      email: faker.internet.email(),
      password: faker.internet.password(),
      fullName: faker.person.fullName(),
      contact: faker.phone.number(),
    });

    index++;
  }

  res.status(200).json(users);
});

app.listen(5557);
