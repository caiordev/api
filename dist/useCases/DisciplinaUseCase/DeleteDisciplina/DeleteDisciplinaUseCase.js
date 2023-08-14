"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteDisciplinaUseCase = void 0;
class DeleteDisciplinaUseCase {
    constructor(disciplinaRepository) {
        this.disciplinaRepository = disciplinaRepository;
    }
    async execute({ ID }) {
        const deleteDisciplina = await this.disciplinaRepository.deleteDisciplina(ID);
        return deleteDisciplina;
    }
}
exports.DeleteDisciplinaUseCase = DeleteDisciplinaUseCase;
