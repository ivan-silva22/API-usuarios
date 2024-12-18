import mongoose, {Schema} from "mongoose";

const usuarioSchema = new Schema({
    nombre:{
        type: String,
        require: true,
        minLength: 2,
        maxLength: 100,
    },
    email:{
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
        unique: true,
    },
    rol: {
        type: String,
    }
});

const Usuario = mongoose.model('usuario', usuarioSchema);

export default Usuario;