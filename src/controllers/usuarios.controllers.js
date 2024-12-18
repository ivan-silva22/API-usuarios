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

export  const consultaListarUsuarios = async(req, res) =>{
    try {
        const usuarios = await Usuario.find();
        res.status(200).json(usuarios);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error al intentar obtener los usuarios",
        })
    }
}

export const consultaObtenerUsuario = async (req, res) =>{
    try {
        const usuario = await Usuario.findById(req.params.id);
        res.status(200).json(usuario);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error al intentar obtener el usuario",
        })
    }
}

export const login = async (req, res) =>{
    try {
        const {email, password} = req.body;
        let usuario = await Usuario.findOne({email});
        if(!usuario){
            return res.status(404).json({
                mensaje: "Error, email o password incorrectos",
            })
        }
        const passwordValido = bcryp.compareSync(password, usuario.password);
        if(!passwordValido){
            return res.status(404).json({
                mensaje: "Error, email o password incorrectos",
            })
        }
        res.status(200).json({
            mensaje: "El usuario es correctos",
            nombre: usuario.nombre,
            rol: usuario.rol,
        })
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error, email o password incorrectos",
        })
    }
}