import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

const validarUsuario = [
  check("nombre")
    .notEmpty()
    .withMessage("El nombre es obligatorio")
    .isLength({ min: 2, max: 100 })
    .withMessage("El nombre debe tener entre 2 y 100 caracteres"),
  check("email")
    .notEmpty()
    .withMessage("El email es obligatorio")
    .isEmail()
    .withMessage("El formato del email no es valido"),
  check("password")
    .notEmpty()
    .withMessage("El password es obligatorio")
    .matches(
        /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/
    )
    .withMessage("La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico."),
    (req, res, next) =>{
        resultadoValidacion(req, res, next);
    }
];

export default validarUsuario;