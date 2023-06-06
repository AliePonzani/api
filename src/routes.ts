import { Router, Request, Response } from "express";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { AuthVendedorController } from "./controllers/user/AuthVendedorController";
import { CreateUserConstroller } from "./controllers/user/CreateUserController";
import { CreateVendedorConstroller } from "./controllers/user/CreateVendedorController";

const router = Router();

router.post('/cadastroMorador',new CreateUserConstroller().handle)

router.post('/cadastroVendedor',new CreateVendedorConstroller().handle)

router.post('/loginMorador', new AuthUserController().handle);

router.post('/loginVendedor', new AuthVendedorController().handle);

export {router};