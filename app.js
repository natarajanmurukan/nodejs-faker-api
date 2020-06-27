const express = require('express')
const app = express()
const port = 3000
const faker = require('faker');


app.get('/',function(req,res){
      res.type('text/plain');

	let firstName = faker.name.firstName();
let lastName = faker.name.lastName();

let jobTitle = faker.name.jobTitle();
let prefix = faker.name.prefix();
let suffix = faker.name.suffix();
let jobArea = faker.name.jobArea();

let phone = faker.phone.phoneNumber();
	res.send(`${prefix} ${firstName} ${lastName} ${suffix}, ${jobTitle}, ${jobArea}, ${phone}`);
});
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
