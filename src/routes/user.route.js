import { Router } from "express";
import userRegister from "../controller/user.controller";

const router = Router()

router.route("/register").post(userRegister)

export default router