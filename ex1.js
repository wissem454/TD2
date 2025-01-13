const express = require('express');
const app = express();
const logMiddleware = (req, res, next) => {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    const method = req.method;
    const path = req.path;
    console.log(`[${date}${time}]${req.method}${req.path}`);
    next(); 
  };
  
  app.use(logMiddleware);

app.get('/' , (req,res) =>{
    res.send('exercice 1!');
});
app.get('/exercice1', (req, res) =>{
    res.send("une deuxieme API");
});

app.listen(8000, () =>{
   console.log("serveur demarré sur le port 8000");
   
});
  