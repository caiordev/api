"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTurmaController = void 0;
class CreateTurmaController {
    constructor(createTurmaUseCase) {
        this.createTurmaUseCase = createTurmaUseCase;
    }
    async handle(request, response) {
        const { ID_USUARIO, ID_DISCIPLINA } = request.body;
        try {
            const registeredTurma = await this.createTurmaUseCase.execute({
                ID_USUARIO,
                ID_DISCIPLINA,
            });
            return response.status(201).json(registeredTurma);
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
exports.CreateTurmaController = CreateTurmaController;
