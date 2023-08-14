"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAlunoUseCase = void 0;
class GetAlunoUseCase {
    constructor(alunoRepository) {
        this.alunoRepository = alunoRepository;
    }
    async execute() {
        const listAluno = await this.alunoRepository.getAluno();
        return listAluno;
    }
}
exports.GetAlunoUseCase = GetAlunoUseCase;
