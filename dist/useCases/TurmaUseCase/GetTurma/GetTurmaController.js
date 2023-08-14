"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTurmaController = void 0;
class GetTurmaController {
    constructor(getTurmaUseCase) {
        this.getTurmaUseCase = getTurmaUseCase;
    }
    async handle(request, response) {
        try {
            const turma = await this.getTurmaUseCase.execute();
            return response.status(201).json(turma);
        }
        catch (error) {
            return response.status(400).json({
                message: error.message || "Unexpected error.",
            });
        }
    }
}
exports.GetTurmaController = GetTurmaController;
