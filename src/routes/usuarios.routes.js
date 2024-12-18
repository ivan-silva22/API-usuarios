import { Router } from "express";
import validarUsuario from "../helpers/validarUsuario";
import { consultaAgregarUsuario } from "../controllers/usuarios.controllers";


const router = Router();

router.route("/usuarios").get();
router.route("/registro").post(validarUsuario, consultaAgregarUsuario);
router.route("/login").post();
router.route("/usuario:id").get();

export default router;