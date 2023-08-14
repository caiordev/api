"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAlunoUseCase = void 0;
const bcryptjs_1 = require("bcryptjs");
class UpdateAlunoUseCase {
    constructor(alunoRepository) {
        this.alunoRepository = alunoRepository;
    }
    async execute({ NOME, CURSO, EMAIL, ID, SENHA }) {
        const passwordHash = await (0, bcryptjs_1.hash)(SENHA.toString(), 8);
        const updatedAluno = await this.alunoRepository.updateAluno(NOME, CURSO, EMAIL, ID, passwordHash);
        return updatedAluno;
    }
}
exports.UpdateAlunoUseCase = UpdateAlunoUseCase;
