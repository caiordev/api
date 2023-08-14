"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDisciplinaController = void 0;
class CreateDisciplinaController {
    constructor(createDisciplinaUseCase) {
        this.createDisciplinaUseCase = createDisciplinaUseCase;
    }
    async handle(request, response) {
        const { NOME, CURSO, HORARIO, COD_DISCIPLINA, VAGAS } = request.body;
        try {
            const registeredDisciplina = await this.createDisciplinaUseCase.execute({
                NOME,
                CURSO,
                HORARIO,
                COD_DISCIPLINA,
                VAGAS,
            });
            return response.status(201).json(registeredDisciplina);
        }
        catch (error) {
            if (error.message === "User already exists!") {
                return response.status(409).json({
                    message: "User already exists!",
                });
            }
            return response.status(500).json({
                message: "Internal server error",
            });
        }
    }
}
exports.CreateDisciplinaController = CreateDisciplinaController;
