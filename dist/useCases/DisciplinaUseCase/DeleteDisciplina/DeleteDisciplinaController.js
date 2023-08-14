"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteDisciplinaController = void 0;
class DeleteDisciplinaController {
    constructor(deleteDisciplinaUseCase) {
        this.deleteDisciplinaUseCase = deleteDisciplinaUseCase;
    }
    async handle(request, response) {
        const { ID } = request.params;
        try {
            const disciplinas = await this.deleteDisciplinaUseCase.execute({
                ID,
            });
            return response.status(201).json(disciplinas);
        }
        catch (error) {
            return response.status(400).json({
                message: error.message || "Unexpected error.",
            });
        }
    }
}
exports.DeleteDisciplinaController = DeleteDisciplinaController;
