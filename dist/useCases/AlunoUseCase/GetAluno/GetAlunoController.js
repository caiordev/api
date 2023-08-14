"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAlunoController = void 0;
class GetAlunoController {
    constructor(getAlunoUseCase) {
        this.getAlunoUseCase = getAlunoUseCase;
    }
    async handle(request, response) {
        try {
            const aluno = await this.getAlunoUseCase.execute();
            return response.status(201).json(aluno);
        }
        catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            });
        }
    }
}
exports.GetAlunoController = GetAlunoController;
