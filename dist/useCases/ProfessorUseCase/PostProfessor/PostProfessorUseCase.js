"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProfessorUseCase = void 0;
const Professor_1 = require("../../../entities/Professor");
const bcryptjs_1 = require("bcryptjs");
class CreateProfessorUseCase {
    constructor(professorRepository) {
        this.professorRepository = professorRepository;
    }
    async execute({ NOME, EMAIL, SIAEP, NUMERO, DEPARTAMENTO, SENHA, }) {
        const professorAlreadyExists = await this.professorRepository.findBySIAEP(SIAEP);
        if (professorAlreadyExists) {
            throw new Error("User already exists!");
        }
        const passwordHash = await (0, bcryptjs_1.hash)(SENHA.toString(), 8);
        const professor = new Professor_1.Professor({
            NOME,
            EMAIL,
            SIAEP,
            NUMERO,
            DEPARTAMENTO,
            SENHA: passwordHash,
        });
        await this.professorRepository.save(professor);
        return professor;
    }
}
exports.CreateProfessorUseCase = CreateProfessorUseCase;
