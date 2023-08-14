"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDisciplinaUseCase = void 0;
class GetDisciplinaUseCase {
    constructor(disciplinaRepository) {
        this.disciplinaRepository = disciplinaRepository;
    }
    async execute() {
        const listDisciplina = await this.disciplinaRepository.getDisciplina();
        return listDisciplina;
    }
}
exports.GetDisciplinaUseCase = GetDisciplinaUseCase;
