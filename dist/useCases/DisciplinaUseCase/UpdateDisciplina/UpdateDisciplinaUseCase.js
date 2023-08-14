"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDisciplinaUseCase = void 0;
class UpdateDisciplinaUseCase {
    constructor(disciplinaRepository) {
        this.disciplinaRepository = disciplinaRepository;
    }
    async execute({ ID, NOME, CURSO, HORARIO, COD_DISCIPLINA, VAGAS, ID_PROFESSOR }) {
        const updatedDisciplina = await this.disciplinaRepository.updateDisciplina(ID, NOME, CURSO, HORARIO, COD_DISCIPLINA, VAGAS, ID_PROFESSOR);
        return updatedDisciplina;
    }
}
exports.UpdateDisciplinaUseCase = UpdateDisciplinaUseCase;
