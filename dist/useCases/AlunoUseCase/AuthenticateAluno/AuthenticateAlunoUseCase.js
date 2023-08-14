"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateAlunoUseCase = void 0;
const jsonwebtoken_1 = require("jsonwebtoken"); // Importa a função sign do pacote "jsonwebtoken"
const bcryptjs_1 = require("bcryptjs"); // Importa a função compare do pacote "bcryptjs"
class AuthenticateAlunoUseCase {
    constructor(alunoRepository) {
        this.alunoRepository = alunoRepository;
    } // Construtor que recebe uma instância de IAlunoRepository
    async execute({ MATRICULA, SENHA }) {
        // Verificar se o USUARIO existe
        const alunoAlreadyExists = await this.alunoRepository.findByMatricula(MATRICULA); // Busca o aluno pelo número de matrícula utilizando o repositório de alunos
        if (!alunoAlreadyExists) {
            throw new Error("User or password incorrect!");
        } // Se o aluno não existir, lança um erro indicando usuário ou senha incorretos
        // Verificar se a SENHA está correta
        const passwordMatch = await (0, bcryptjs_1.compare)(SENHA, alunoAlreadyExists.SENHA); // Compara a senha informada com a senha armazenada do aluno
        if (!passwordMatch) {
            throw new Error("User or password incorrect!");
        } // Se as senhas não coincidirem, lança um erro indicando usuário ou senha incorretos
        // Gerar o token do usuário
        const token = (0, jsonwebtoken_1.sign)({}, // Payload vazio, pois apenas o ID do aluno está sendo utilizado no subject do token
        "c957b733-7a23-41d5-96b7-fa8374f8e582", // Chave secreta utilizada para assinar o token
        {
            subject: alunoAlreadyExists.ID.toString(), // Define o ID do aluno como subject do token
            // expiresIn: "30d" // Opção para definir a expiração do token (opcional)
        });
        return { token, user: alunoAlreadyExists }; // Retorna o token e o usuário autenticado
    }
}
exports.AuthenticateAlunoUseCase = AuthenticateAlunoUseCase;
