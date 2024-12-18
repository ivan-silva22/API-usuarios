import { Router } from "express";
import validarUsuario from "../helpers/validarUsuario";
import { consultaAgregarUsuario, consultaListarUsuarios, consultaObtenerUsuario, login } from "../controllers/usuarios.controllers";
import validarLogin from "../helpers/validarLogin";


const router = Router();

router.route("/usuarios").get(consultaListarUsuarios);
router.route("/registro").post(validarUsuario, consultaAgregarUsuario);
router.route("/login").post(validarLogin, login);
router.route("/usuario:id").get(consultaObtenerUsuario);

export default router;