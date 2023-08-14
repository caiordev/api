"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAlunoController = void 0;
class UpdateAlunoController {
    constructor(updateAlunoUseCase) {
        this.updateAlunoUseCase = updateAlunoUseCase;
    }
    async handle(request, response) {
        const { ID } = request.params;
        const { NOME, CURSO, EMAIL, SENHA } = request.body;
        try {
            const aluno = await this.updateAlunoUseCase.execute({
                ID,
                NOME,
                CURSO,
                EMAIL,
                SENHA,
            });
            return response.status(201).json(aluno);
        }
        catch (error) {
            return response.status(400).json({
                message: error.message || "Unexpected error.",
            });
        }
    }
}
exports.UpdateAlunoController = UpdateAlunoController;
