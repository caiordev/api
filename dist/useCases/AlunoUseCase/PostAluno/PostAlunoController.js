"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAlunoController = void 0;
class CreateAlunoController {
    constructor(createAlunoUseCase) {
        this.createAlunoUseCase = createAlunoUseCase;
    }
    async handle(request, response) {
        const { NOME, CURSO, EMAIL, MATRICULA, SENHA } = request.body;
        try {
            const registeredAluno = await this.createAlunoUseCase.execute({
                NOME,
                CURSO,
                EMAIL,
                MATRICULA,
                SENHA
            });
            return response.status(201).json(registeredAluno);
        }
        catch (error) {
            if (error.message === 'User already exists!') {
                return response.status(409).json({
                    message: 'User already exists!'
                });
            }
            return response.status(500).json({
                message: 'Internal server error'
            });
        }
    }
}
exports.CreateAlunoController = CreateAlunoController;
