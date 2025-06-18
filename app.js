import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import dotenv from "dotenv"

dotenv.config();

const app = express();

const port =process.env.PORT || 4000;
const url=process.env.URL;

app.use(express.json());

// we are using this object to store data in memory
const users = {};

// POST /users used to create new user
app.post('/users', (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Missing name or email' });
  }

  const id = uuidv4();
  const user = { id, name, email };
  users[id] = user;

  res.status(201).json(user);
});

// GET /users/:id used to get single user By his/her Id
app.get('/users/:id', (req, res) => {
  const user = users[req.params.id];

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.json(user);
});

app.listen(port, () => {
  console.log(`Server running at ${url}:${port}`);
});
