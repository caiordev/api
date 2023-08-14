"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProfessorController = void 0;
class CreateProfessorController {
    constructor(createProfessorUseCase) {
        this.createProfessorUseCase = createProfessorUseCase;
    }
    async handle(request, response) {
        const { NOME, EMAIL, SIAEP, NUMERO, DEPARTAMENTO, SENHA } = request.body;
        try {
            const registeredProfessor = await this.createProfessorUseCase.execute({
                NOME,
                EMAIL,
                SIAEP,
                NUMERO,
                DEPARTAMENTO,
                SENHA,
            });
            return response.status(201).json(registeredProfessor);
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
exports.CreateProfessorController = CreateProfessorController;
