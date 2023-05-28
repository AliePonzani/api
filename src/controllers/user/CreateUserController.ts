import { Request, response, Response } from "express";
import { CreateUserServer } from "../../Services/user/CreateUserService";

class CreateUserConstroller {
    async handle(req:Request, res:Response){
        const {nome, email, senha} = req.body
        const createUserServer = new CreateUserServer();
        const user = await createUserServer.execute({
            nome,
            email,
            senha
        });
        return res.json(user);
    }
}

export {CreateUserConstroller}