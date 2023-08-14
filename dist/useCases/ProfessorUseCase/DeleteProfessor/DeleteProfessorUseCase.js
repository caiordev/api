"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProfessorUseCase = void 0;
class DeleteProfessorUseCase {
    constructor(professorRepository) {
        this.professorRepository = professorRepository;
    }
    async execute({ ID }) {
        const deleteProfessor = await this.professorRepository.deleteProfessor(ID);
        return deleteProfessor;
    }
}
exports.DeleteProfessorUseCase = DeleteProfessorUseCase;
