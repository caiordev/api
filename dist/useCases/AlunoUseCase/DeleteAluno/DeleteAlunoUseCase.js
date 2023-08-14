"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAlunoUseCase = void 0;
class DeleteAlunoUseCase {
    constructor(alunoRepository) {
        this.alunoRepository = alunoRepository;
    }
    async execute({ ID }) {
        const deleteAluno = await this.alunoRepository.deleteAluno(ID);
        return deleteAluno;
    }
}
exports.DeleteAlunoUseCase = DeleteAlunoUseCase;
