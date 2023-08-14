"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAlunoController = void 0;
class DeleteAlunoController {
    constructor(deleteAlunoUseCase) {
        this.deleteAlunoUseCase = deleteAlunoUseCase;
    }
    async handle(request, response) {
        const { ID } = request.params;
        try {
            const alunos = await this.deleteAlunoUseCase.execute({
                ID,
            });
            return response.status(201).json(alunos);
        }
        catch (error) {
            return response.status(400).json({
                message: error.message || "Unexpected error.",
            });
        }
    }
}
exports.DeleteAlunoController = DeleteAlunoController;
