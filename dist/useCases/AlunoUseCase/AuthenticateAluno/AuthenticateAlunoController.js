"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateAlunoController = void 0;
class AuthenticateAlunoController {
    constructor(authenticateAlunoUseCase) {
        this.authenticateAlunoUseCase = authenticateAlunoUseCase;
    } // Construtor que recebe uma instância de AuthenticateAlunoUseCase
    async handle(request, response) {
        // Método assíncrono handle que recebe os objetos Request e Response
        const { MATRICULA, SENHA } = request.body; // Obtém as propriedades MATRICULA e SENHA do corpo da requisição
        try {
            const token = await this.authenticateAlunoUseCase.execute({
                // Chama o método execute da instância de AuthenticateAlunoUseCase passando as credenciais do aluno
                MATRICULA,
                SENHA,
            });
            return response.status(201).json(token); // Retorna o token de autenticação como resposta da requisição com status 201
        }
        catch (error) {
            if (error.message === "User or password incorrect!") {
                // Verifica se o erro é de usuário ou senha incorretos
                return response.status(409).json({
                    message: "User or password incorrect!",
                }); // Retorna uma resposta com status 409 indicando que usuário ou senha estão incorretos
            }
            return response.status(500).json({
                message: "Internal server error",
            }); // Retorna uma resposta com status 500 indicando um erro interno do servidor
        }
    }
}
exports.AuthenticateAlunoController = AuthenticateAlunoController;
