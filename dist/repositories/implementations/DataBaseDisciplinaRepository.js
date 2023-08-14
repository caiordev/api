"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataBaseDisciplinaRepository = void 0;
const knex_1 = require("../../database/knex");
class DataBaseDisciplinaRepository {
    async getDisciplina() {
        this.disciplinas = await (0, knex_1.Knex)("TABELA_DISCIPLINA");
        return this.disciplinas;
    }
    async findByCod(cod_disciplina) {
        const disciplinas = await (0, knex_1.Knex)("TABELA_DISCIPLINA");
        const disciplina = disciplinas.find((e) => e.COD_DISCIPLINA === cod_disciplina);
        return disciplina;
    }
    async save(disciplina) {
        await (0, knex_1.Knex)("TABELA_DISCIPLINA").insert(disciplina);
    }
    async deleteDisciplina(ID) {
        await (0, knex_1.Knex)("TABELA_DISCIPLINA").where({ ID: ID }).del();
        this.disciplinas = await (0, knex_1.Knex)("TABELA_DISCIPLINA");
        return this.disciplinas;
    }
    async updateDisciplina(ID, NOME, CURSO, HORARIO, COD_DISCIPLINA, VAGAS, ID_PROFESSOR) {
        await (0, knex_1.Knex)("TABELA_DISCIPLINA")
            .update({
            NOME: NOME,
            CURSO: CURSO,
            HORARIO: HORARIO,
            COD_DISCIPLINA: COD_DISCIPLINA,
            VAGAS: VAGAS,
            ID_PROFESSOR: ID_PROFESSOR,
        })
            .where({ ID: ID });
        this.disciplinas = await (0, knex_1.Knex)("TABELA_DISCIPLINA");
        return this.disciplinas;
    }
}
exports.DataBaseDisciplinaRepository = DataBaseDisciplinaRepository;
