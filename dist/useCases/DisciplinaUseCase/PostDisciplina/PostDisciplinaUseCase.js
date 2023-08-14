"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDisciplinaUseCase = void 0;
const Disciplina_1 = require("../../../entities/Disciplina");
class CreateDisciplinaUseCase {
    constructor(disciplinaRepository) {
        this.disciplinaRepository = disciplinaRepository;
    }
    async execute({ NOME, CURSO, HORARIO, COD_DISCIPLINA, VAGAS, }) {
        const disciplinaAlreadyExists = await this.disciplinaRepository.findByCod(COD_DISCIPLINA);
        if (disciplinaAlreadyExists) {
            throw new Error("User already exists!");
        }
        const disciplina = new Disciplina_1.Disciplina({
            NOME,
            CURSO,
            HORARIO,
            COD_DISCIPLINA,
            VAGAS,
        });
        await this.disciplinaRepository.save(disciplina);
        return disciplina;
    }
}
exports.CreateDisciplinaUseCase = CreateDisciplinaUseCase;
