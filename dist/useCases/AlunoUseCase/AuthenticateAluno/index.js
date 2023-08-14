"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateAlunoController = exports.authenticateAlunoController = void 0;
const DataBaseAlunoRepository_1 = require("../../../repositories/implementations/DataBaseAlunoRepository"); // Importa a implementação do repositório de alunos
const AuthenticateAlunoController_1 = require("./AuthenticateAlunoController"); // Importa o controlador de autenticação de alunos
Object.defineProperty(exports, "AuthenticateAlunoController", { enumerable: true, get: function () { return AuthenticateAlunoController_1.AuthenticateAlunoController; } });
const AuthenticateAlunoUseCase_1 = require("./AuthenticateAlunoUseCase"); // Importa o caso de uso de autenticação de alunos
// Cria uma instância do repositório de alunos
const dataBaseAlunoRepository = new DataBaseAlunoRepository_1.DataBaseAlunoRepository();
// Cria uma instância do caso de uso de autenticação de alunos, passando o repositório como dependência
const authenticateAlunoUseCase = new AuthenticateAlunoUseCase_1.AuthenticateAlunoUseCase(dataBaseAlunoRepository);
// Cria uma instância do controlador de autenticação de alunos, passando o caso de uso como dependência
const authenticateAlunoController = new AuthenticateAlunoController_1.AuthenticateAlunoController(authenticateAlunoUseCase);
exports.authenticateAlunoController = authenticateAlunoController;
