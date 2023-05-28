import prismaClient from "../../prisma";

interface UserRequest {
    nome: string;
    email: string;
    senha:string;
}

class CreateUserServer{
    async execute({nome, email, senha}: UserRequest){
        const userJaExiste = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })
        if(!email){
            throw new Error("Email é obrigatório!")
        }
        if(userJaExiste){
            throw new Error("Usuário já cadastrado!")
        }
        const user = await prismaClient.user.create(
            {
                data: {
                    nome: nome,
                    email: email,
                    senha: senha
                },
                select:{
                    id:true,
                    nome:true,
                    email:true
                }
            }
        )
        return user
    }
}

export {CreateUserServer}