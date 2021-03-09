const express = require('express');
const app = express();

app.use(express.json());

let users = [
  {
    "id": 1,
    "first_name": "Raul",
    "last_name": "Wynter",
    "email": "rwynter0@google.com"
  },
  {
    "id": 2,
    "first_name": "Demetri",
    "last_name": "Dakin",
    "email": "ddakin1@google.com"
  },
  {
    "id": 3,
    "first_name": "Lira",
    "last_name": "Collishaw",
    "email": "lcollishaw2@google.com"
  }
];

app.get('/api/users', (req, res) => {
  console.log(req.query)

  if (req.query.theUsersId) {
    const tgtIndex = users.findIndex(user => user.id === +req.query.theUsersId)

    res.status(200).send(users[tgtIndex])
  } else {
    // send a response with just a status
    // res.sendStatus(200);
  
    // send a response with a status and a custom message
    // res.status(200).send('howdy do');
    // res.status(200).json();
  
    // send a response with a status and our users
    res.status(200).send({
      "message": 'You done good',
      "theUsers": users
    })
  }


});

app.get('/api/users/:theUsersId', (req, res) => {
  // console.log(req.params)
  // console.log(typeof +req.params.theUsersId)

  const tgtIndex = users.findIndex(user => user.id === +req.params.theUsersId)

  res.status(200).send(users[tgtIndex])
})

app.listen(5050, () => console.log('Server running on 5050'));


//   console.log(users)

// let num = 1;

// setInterval(() => {
//     console.log(num)
//     num++;
// }, 3000)