"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProfessorController = void 0;
class UpdateProfessorController {
    constructor(updateProfessorUseCase) {
        this.updateProfessorUseCase = updateProfessorUseCase;
    }
    async handle(request, response) {
        const { ID } = request.params;
        const { NOME, EMAIL, SIAEP, NUMERO, DEPARTAMENTO, SENHA } = request.body;
        try {
            const professor = await this.updateProfessorUseCase.execute({
                ID,
                NOME,
                EMAIL,
                SIAEP,
                NUMERO,
                DEPARTAMENTO,
                SENHA,
            });
            return response.status(201).json(professor);
        }
        catch (error) {
            return response.status(400).json({
                message: error.message || "Unexpected error.",
            });
        }
    }
}
exports.UpdateProfessorController = UpdateProfessorController;
