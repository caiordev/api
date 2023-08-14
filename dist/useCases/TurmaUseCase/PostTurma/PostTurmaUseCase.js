"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTurmaUseCase = void 0;
const Turma_1 = require("../../../entities/Turma");
class CreateTurmaUseCase {
    constructor(turmaRepository) {
        this.turmaRepository = turmaRepository;
    }
    async execute({ ID_USUARIO, ID_DISCIPLINA }) {
        const turma = new Turma_1.Turma({
            ID_USUARIO,
            ID_DISCIPLINA,
        });
        await this.turmaRepository.save(turma);
        return turma;
    }
}
exports.CreateTurmaUseCase = CreateTurmaUseCase;
