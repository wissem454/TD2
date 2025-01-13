const express = require('express');
const app = express();
app.use(express.json());
//middleware validation des champs
const validateProductData = (req, res, next) => {
    const { nom, prix } = req.body;


    if (!nom || typeof nom !== 'string' || nom.trim() === '') {
        const error = new Error("Le champ 'nom' est requis, doit être non vide et de type chaine.");
        error.status = 400;
        return next(error);
      }
      
      if (prix === undefined || typeof prix !== 'number' || prix <= 0) {
        const error = new Error("Le champ 'price' est requis et doit être un nombre positif.");
        error.status = 400;
        return next(error);
      }
      next();
};

app.get('/', (req, res) => {
    res.send('Exercice 4!');
  });

app.post('/add-product', validateProductData, (req, res) => {
    const { nom, prix } = req.body;
    res.status(201).json({
      message: "Produit ajouté avec succès!",
      product: { nom, prix }
    });
  });

  app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
      message: err.message || "Une erreur est survenue."
    });
  });


  app.listen(8000, () => {
    console.log("Serveur démarré sur le port 8000");
  });
  
