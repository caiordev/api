"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAlunoUseCase = void 0;
const Aluno_1 = require("../../../entities/Aluno");
const bcryptjs_1 = require("bcryptjs");
class CreateAlunoUseCase {
    constructor(alunoRepository) {
        this.alunoRepository = alunoRepository;
    }
    async execute({ NOME, SENHA, CURSO, EMAIL, MATRICULA }) {
        const alunoAlreadyExists = await this.alunoRepository.findByMatricula(MATRICULA);
        if (alunoAlreadyExists) {
            throw new Error("User already exists!");
        }
        const passwordHash = await (0, bcryptjs_1.hash)(SENHA.toString(), 8);
        const aluno = new Aluno_1.Aluno({
            NOME,
            SENHA: passwordHash,
            CURSO,
            EMAIL,
            MATRICULA,
        });
        await this.alunoRepository.save(aluno);
        return aluno;
    }
}
exports.CreateAlunoUseCase = CreateAlunoUseCase;
