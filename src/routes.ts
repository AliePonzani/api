import { Router, Request, Response } from "express";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { CreateUserConstroller } from "./controllers/user/CreateUserController";

const router = Router();

router.post('/cadastroUsuario',new CreateUserConstroller().handle)

router.post('/login', new AuthUserController().handle);

export {router};