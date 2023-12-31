"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProfessorController = exports.DeleteProfessorController = void 0;
const DataBaseProfessorRepository_1 = require("./../../../repositories/implementations/DataBaseProfessorRepository");
const DeleteProfessorController_1 = require("./DeleteProfessorController");
Object.defineProperty(exports, "DeleteProfessorController", { enumerable: true, get: function () { return DeleteProfessorController_1.DeleteProfessorController; } });
const DeleteProfessorUseCase_1 = require("./DeleteProfessorUseCase");
const dataBaseProfessorRepository = new DataBaseProfessorRepository_1.DataBaseProfessorRepository();
const deleteProfessorUseCase = new DeleteProfessorUseCase_1.DeleteProfessorUseCase(dataBaseProfessorRepository);
const deleteProfessorController = new DeleteProfessorController_1.DeleteProfessorController(deleteProfessorUseCase);
exports.deleteProfessorController = deleteProfessorController;
