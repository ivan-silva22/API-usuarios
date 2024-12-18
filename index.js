import express from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";

const app = express();

app.set('PORT', process.env.PORT || 4000); 

app.listen(app.get('PORT'), () =>{
    console.log("Estoy en el puerto " + app.get('PORT'))
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, '/public')));
