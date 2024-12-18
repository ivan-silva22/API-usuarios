import express from "express";

const app = express();

app.set('PORT', process.env.PORT || 4000); 

app.listen(app.get('PORT'), () =>{
    console.log("Estoy en el puerto " + app.get('PORT'))
});

