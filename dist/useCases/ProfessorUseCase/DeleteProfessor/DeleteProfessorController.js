"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProfessorController = void 0;
class DeleteProfessorController {
    constructor(deleteProfessorUseCase) {
        this.deleteProfessorUseCase = deleteProfessorUseCase;
    }
    async handle(request, response) {
        const { ID } = request.params;
        try {
            const professores = await this.deleteProfessorUseCase.execute({
                ID,
            });
            return response.status(201).json(professores);
        }
        catch (error) {
            return response.status(400).json({
                message: error.message || "Unexpected error.",
            });
        }
    }
}
exports.DeleteProfessorController = DeleteProfessorController;
