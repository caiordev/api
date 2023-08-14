"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDisciplinaController = void 0;
class GetDisciplinaController {
    constructor(getDisciplinaUseCase) {
        this.getDisciplinaUseCase = getDisciplinaUseCase;
    }
    async handle(request, response) {
        try {
            const disciplina = await this.getDisciplinaUseCase.execute();
            return response.status(201).json(disciplina);
        }
        catch (error) {
            return response.status(400).json({
                message: error.message || "Unexpected error.",
            });
        }
    }
}
exports.GetDisciplinaController = GetDisciplinaController;
