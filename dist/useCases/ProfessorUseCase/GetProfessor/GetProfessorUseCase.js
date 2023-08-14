"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProfessorUseCase = void 0;
class GetProfessorUseCase {
    constructor(professorRepository) {
        this.professorRepository = professorRepository;
    }
    async execute() {
        const listProfessor = await this.professorRepository.getProfessor();
        return listProfessor;
    }
}
exports.GetProfessorUseCase = GetProfessorUseCase;
