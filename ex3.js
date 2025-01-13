const express= require('express');
const app =express();
app.use(express.json());

const validateAge = (req, res, next) =>{
  const{age} = req.body;

if (age===undefined){
    return next();
}
if (age<0){
    const error = new Error("l'age ne peut pas etre negatif");
    error.status=400;
    return next(error)
    
}
   next();
};

  app.get('/', (req, res) => {
    res.send('Exercice 3!');
  });

app.post('/test', validateAge,(req,res)=>{
res.send("l'age est valide")
});

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
      message: err.message || "Une erreur est survenue.",
    });
  });


app.listen (8000, ()=>{
console.log("Serveur démarré sur le port 8000");

});
