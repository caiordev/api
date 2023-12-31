"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAlunoController = exports.DeleteAlunoController = void 0;
const DataBaseAlunoRepository_1 = require("./../../../repositories/implementations/DataBaseAlunoRepository");
const DeleteAlunoController_1 = require("./DeleteAlunoController");
Object.defineProperty(exports, "DeleteAlunoController", { enumerable: true, get: function () { return DeleteAlunoController_1.DeleteAlunoController; } });
const DeleteAlunoUseCase_1 = require("./DeleteAlunoUseCase");
const dataBaseAlunoRepository = new DataBaseAlunoRepository_1.DataBaseAlunoRepository();
const deleteAlunoUseCase = new DeleteAlunoUseCase_1.DeleteAlunoUseCase(dataBaseAlunoRepository);
const deleteAlunoController = new DeleteAlunoController_1.DeleteAlunoController(deleteAlunoUseCase);
exports.deleteAlunoController = deleteAlunoController;
