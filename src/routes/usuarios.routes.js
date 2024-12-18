import { Router } from "express";

const router = Router();

router.route("/usuarios").get();
router.route("/registro").post();
router.route("/login").post();
router.route("/usuario:id").get();