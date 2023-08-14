"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDisciplinaController = exports.CreateDisciplinaController = void 0;
const DataBaseDisciplinaRepository_1 = require("../../../repositories/implementations/DataBaseDisciplinaRepository");
const PostDisciplinaController_1 = require("./PostDisciplinaController");
Object.defineProperty(exports, "CreateDisciplinaController", { enumerable: true, get: function () { return PostDisciplinaController_1.CreateDisciplinaController; } });
const PostDisciplinaUseCase_1 = require("./PostDisciplinaUseCase");
const dataBaseAlunoRepository = new DataBaseDisciplinaRepository_1.DataBaseDisciplinaRepository();
const createDisciplinaUseCase = new PostDisciplinaUseCase_1.CreateDisciplinaUseCase(dataBaseAlunoRepository);
const createDisciplinaController = new PostDisciplinaController_1.CreateDisciplinaController(createDisciplinaUseCase);
exports.createDisciplinaController = createDisciplinaController;