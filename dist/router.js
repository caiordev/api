"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const DeleteDisciplina_1 = require("./useCases/DisciplinaUseCase/DeleteDisciplina");
const PostDisciplina_1 = require("./useCases/DisciplinaUseCase/PostDisciplina");
const UpdateDisciplina_1 = require("./useCases/DisciplinaUseCase/UpdateDisciplina");
const GetDisciplina_1 = require("./useCases/DisciplinaUseCase/GetDisciplina");
const GetAluno_1 = require("./useCases/AlunoUseCase/GetAluno");
const PostAluno_1 = require("./useCases/AlunoUseCase/PostAluno");
const UpdateAluno_1 = require("./useCases/AlunoUseCase/UpdateAluno");
const DeleteAluno_1 = require("./useCases/AlunoUseCase/DeleteAluno");
const GetProfessor_1 = require("./useCases/ProfessorUseCase/GetProfessor");
const PostProfessor_1 = require("./useCases/ProfessorUseCase/PostProfessor");
const UpdateProfessor_1 = require("./useCases/ProfessorUseCase/UpdateProfessor");
const DeleteProfessor_1 = require("./useCases/ProfessorUseCase/DeleteProfessor");
const AuthenticateUser_1 = require("./useCases/UserUseCase/AuthenticateUser");
const ensureAuthenticated_1 = require("./middlewares/ensureAuthenticated");
const PostTurma_1 = require("./useCases/TurmaUseCase/PostTurma");
const GetTurma_1 = require("./useCases/TurmaUseCase/GetTurma");
exports.router = express_1.default.Router();
exports.router.get("/turma", (request, response) => {
    return GetTurma_1.getTurmaController.handle(request, response);
});
exports.router.post("/turma", (request, response) => {
    return PostTurma_1.createTurmaController.handle(request, response);
});
exports.router.get("/aluno", (request, response) => {
    return GetAluno_1.getAlunoController.handle(request, response);
});
exports.router.post("/aluno", (request, response) => {
    return PostAluno_1.createAlunoController.handle(request, response);
});
exports.router.put("/aluno/:ID", (request, response) => {
    return UpdateAluno_1.updateAlunoController.handle(request, response);
});
exports.router.delete("/aluno/:ID", (request, response) => {
    return DeleteAluno_1.deleteAlunoController.handle(request, response);
});
exports.router.get("/professor", (request, response) => {
    return GetProfessor_1.getProfessorController.handle(request, response);
});
exports.router.post("/professor", (request, response) => {
    return PostProfessor_1.createProfessorController.handle(request, response);
});
exports.router.put("/professor/:ID", (request, response) => {
    return UpdateProfessor_1.updateProfessorController.handle(request, response);
});
exports.router.delete("/professor/:ID", (request, response) => {
    return DeleteProfessor_1.deleteProfessorController.handle(request, response);
});
exports.router.get("/disciplina", (request, response) => {
    return GetDisciplina_1.getDisciplinaController.handle(request, response);
});
exports.router.post("/disciplina", (request, response) => {
    return PostDisciplina_1.createDisciplinaController.handle(request, response);
});
exports.router.put("/disciplina/:ID", (request, response) => {
    return UpdateDisciplina_1.updateDisciplinaController.handle(request, response);
});
exports.router.delete("/disciplina/:ID", (request, response) => {
    return DeleteDisciplina_1.deleteDisciplinaController.handle(request, response);
});
exports.router.post("/login", (request, response) => {
    return AuthenticateUser_1.authenticateUserController.handle(request, response);
});
// rota utilizada somenta para verificar se o token é válido
exports.router.get("/verify", ensureAuthenticated_1.ensureAuthenticated, (request, response) => {
    return response.json({ authenticated: true }); //só acessa se passar pelo middlewares.
});
module.exports = { router: exports.router };
