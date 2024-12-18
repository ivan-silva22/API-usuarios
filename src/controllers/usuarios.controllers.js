import Usuario from "../models/usuario";
import bcryp from "bcrypt";

export const consultaAgregarUsuario = async (req, res) =>{
    try {
        const {email, password} = req.body;
        let buscarEmail = await Usuario.findOne({email});
        if(buscarEmail){
            return res.status(400).json({
                mensaje: "El email ya existe"
            });
        }
        const nuevoUsuario = await Usuario(req.body);
        const salt = bcryp.genSaltSync(10);
        nuevoUsuario.password = bcryp.hashSync(password, salt);
        await nuevoUsuario.save();
        res.status(201).json({
            mensaje: "El usuario se creo correctamente",
            nombre: nuevoUsuario.nombre,
            rol: nuevoUsuario.rol,
            _id: nuevoUsuario._id
        })
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error al crear el usuario"
        });
    }
}