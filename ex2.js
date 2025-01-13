const express = require('express');
const app = express();
app.use(express.json());

const validateUserData = (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
      return res.status(400).send("Erreur : Les champs 'username' et 'password' sont requis.");
  }

  next(); 
};

app.get('/', (req, res) => {
  res.send('Exercice 2!');
});

app.post('/login', validateUserData, (req, res) => {
  res.send('la connexion et reussie!');
});


app.listen(8000, () => {
  console.log("Serveur démarré sur le port 8000");
});