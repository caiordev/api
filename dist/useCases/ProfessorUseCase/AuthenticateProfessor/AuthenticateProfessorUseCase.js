"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateProfessorUseCase = void 0;
const bcryptjs_1 = require("bcryptjs");
const jsonwebtoken_1 = require("jsonwebtoken");
class AuthenticateProfessorUseCase {
    constructor(professorRepository) {
        this.professorRepository = professorRepository;
    }
    async execute({ SIAEP, SENHA }) {
        // Verificar se o USUARIO existe
        const professorAlreadyExists = await this.professorRepository.findBySIAEP(SIAEP);
        if (!professorAlreadyExists) {
            throw new Error("User or password incorrect!");
        }
        // Verificar se a SENHA está correta
        const passwordMatch = await (0, bcryptjs_1.compare)(SENHA, professorAlreadyExists.SENHA);
        if (!passwordMatch) {
            throw new Error("User or password incorrect!");
        }
        // Gerar o token do usuário
        const token = (0, jsonwebtoken_1.sign)({}, "c957b733-7a23-41d5-96b7-fa8374f8e582", {
            subject: professorAlreadyExists.ID.toString(),
            // expiresIn: "30d"
        });
        return token;
    }
}
exports.AuthenticateProfessorUseCase = AuthenticateProfessorUseCase;
