"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProfessorController = void 0;
class GetProfessorController {
    constructor(getProfessorUseCase) {
        this.getProfessorUseCase = getProfessorUseCase;
    }
    async handle(request, response) {
        try {
            const professor = await this.getProfessorUseCase.execute();
            return response.status(201).json(professor);
        }
        catch (error) {
            return response.status(400).json({
                message: error.message || "Unexpected error.",
            });
        }
    }
}
exports.GetProfessorController = GetProfessorController;
