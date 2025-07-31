const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Simulación de base de datos
let tournaments = [];
let players = [];

// Rutas
app.post('/tournaments', (req, res) => {
  const { name, sport, startDate, endDate, maxTeams, rules, format } = req.body;
  const newTournament = {
    id: Date.now().toString(),
    name,
    sport,
    startDate,
    endDate,
    maxTeams,
    rules,
    format,
    status: 'activo',
    teamIds: [],
    visibility: 'publica',
    organizers: [],
  };
  tournaments.push(newTournament);
  res.status(201).json(newTournament);
});

app.post('/players', (req, res) => {
  const { name, age, position, shirtNumber, email, phone } = req.body;
  const newPlayer = {
    id: Date.now().toString(),
    name,
    age,
    position,
    shirtNumber,
    email,
    phone,
    profilePic: '',
    tournaments: [],
    createdAt: new Date(),
  };
  players.push(newPlayer);
  res.status(201).json(newPlayer);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});