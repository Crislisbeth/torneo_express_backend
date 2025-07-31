const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let tournaments = [];
let teams = [];
let matches = [];

// Datos simulados
let players = [
  {
    id: "1",
    name: "Carlos Pérez",
    age: 22,
    position: "Delantero",
    shirtNumber: "9",
    email: "carlos@uide.edu.ec",
    phone: "0987654321",
    profilePic: "https://via.placeholder.com/150",
    tournaments: ["1"],
    createdAt: new Date().toISOString()
  }
];

// Obtener jugador
app.get('/players/:id', (req, res) => {
  const player = players.find(p => p.id === req.params.id);
  if (player) {
    res.json(player);
  } else {
    res.status(404).json({ error: 'Jugador no encontrado' });
  }
});

// Partidos del jugador
app.get('/players/:id/matches', (req, res) => {
  res.json([
    { id: "1", teamA: "Los Halcones", teamB: "Águilas", date: "2025-07-12", time: "15:00", location: "Cancha 1" }
  ]);
});

// Multimedia del jugador
app.get('/players/:id/highlights', (req, res) => {
  res.json([
    "https://via.placeholder.com/300x200?text=Jugada+1",
    "https://via.placeholder.com/300x200?text=Jugada+2"
  ]);
});

// Crear torneo
app.post('/tournaments', (req, res) => {
  const newTournament = { ...req.body, id: Date.now().toString() };
  tournaments.push(newTournament);
  res.status(201).json(newTournament);
});

// Obtener torneos
app.get('/tournaments', (req, res) => {
  res.json(tournaments);
});

// Torneos activos
app.get('/tournaments/active', (req, res) => {
  res.json(tournaments.filter(t => t.status === 'activo'));
});

// Equipos aprobados
app.get('/tournaments/:id/teams/approved', (req, res) => {
  res.json(teams.filter(t => t.status === 'aprobado'));
});

// Actualizar estado de equipo
app.put('/teams/:id/status', (req, res) => {
  const team = teams.find(t => t.id === req.params.id);
  if (team) {
    team.status = req.body.status;
    res.json({ message: 'Estado actualizado' });
  } else {
    res.status(404).json({ error: 'Equipo no encontrado' });
  }
});

// Programar partido
app.post('/matches', (req, res) => {
  const match = { ...req.body, id: Date.now().toString() };
  matches.push(match);
  res.status(201).json(match);
});

app.listen(3000, '0.0.0.0', () => {
  console.log('Servidor en http://localhost:3000');
});