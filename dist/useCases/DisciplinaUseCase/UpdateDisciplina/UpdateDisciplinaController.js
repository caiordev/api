"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDisciplinaController = void 0;
class UpdateDisciplinaController {
    constructor(updateDisciplinaUseCase) {
        this.updateDisciplinaUseCase = updateDisciplinaUseCase;
    }
    async handle(request, response) {
        const { ID } = request.params;
        const { NOME, HORARIO, CURSO, COD_DISCIPLINA, VAGAS, ID_PROFESSOR } = request.body;
        try {
            const disciplina = await this.updateDisciplinaUseCase.execute({
                ID,
                NOME,
                CURSO,
                HORARIO,
                COD_DISCIPLINA,
                VAGAS,
                ID_PROFESSOR
            });
            return response.status(201).json(disciplina);
        }
        catch (error) {
            return response.status(400).json({
                message: error.message || "Unexpected error.",
            });
        }
    }
}
exports.UpdateDisciplinaController = UpdateDisciplinaController;
