"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateUserUseCase = void 0;
// Importação da função "sign" da biblioteca "jsonwebtoken"
// A função "sign" é usada para criar tokens JWT
const jsonwebtoken_1 = require("jsonwebtoken");
// Importação da função "compare" da biblioteca "bcryptjs"
// A função "compare" é usada para comparar senhas com hash
const bcryptjs_1 = require("bcryptjs");
class AuthenticateUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute({ USUARIO, SENHA }) {
        // Verificar se o USUARIO existe
        const userAlreadyExists = await this.userRepository.findByUser(USUARIO);
        if (!userAlreadyExists) {
            throw new Error("User or password incorrect!");
        }
        // Verificar se a SENHA está correta
        const passwordMatch = await (0, bcryptjs_1.compare)(SENHA, userAlreadyExists.SENHA);
        if (!passwordMatch) {
            throw new Error("User or password incorrect!");
        }
        // Gerar o token do usuário
        const token = (0, jsonwebtoken_1.sign)({}, "c957b733-7a23-41d5-96b7-fa8374f8e582", {
            subject: userAlreadyExists.ID.toString(),
            // expiresIn: "30d"
        });
        // Retorna o token de autenticação e as informações do usuário
        return { token, user: userAlreadyExists };
    }
}
exports.AuthenticateUserUseCase = AuthenticateUserUseCase;
