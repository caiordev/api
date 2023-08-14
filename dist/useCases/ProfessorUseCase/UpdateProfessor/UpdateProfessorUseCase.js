"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProfessorUseCase = void 0;
class UpdateProfessorUseCase {
    constructor(professorRepository) {
        this.professorRepository = professorRepository;
    }
    async execute({ ID, NOME, EMAIL, SIAEP, NUMERO, DEPARTAMENTO, SENHA, }) {
        const updatedProfessor = await this.professorRepository.updateProfessor(ID, NOME, EMAIL, SIAEP, NUMERO, DEPARTAMENTO, SENHA);
        return updatedProfessor;
    }
}
exports.UpdateProfessorUseCase = UpdateProfessorUseCase;
