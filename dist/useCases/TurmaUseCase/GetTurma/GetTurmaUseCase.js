"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTurmaUseCase = void 0;
class GetTurmaUseCase {
    constructor(turmaRepository) {
        this.turmaRepository = turmaRepository;
    }
    async execute() {
        const listTurma = await this.turmaRepository.getTurma();
        return listTurma;
    }
}
exports.GetTurmaUseCase = GetTurmaUseCase;
