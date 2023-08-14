"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataBaseTurmaRepository = void 0;
const knex_1 = require("../../database/knex");
class DataBaseTurmaRepository {
    async getTurma() {
        this.turmas = await (0, knex_1.Knex)("TABELA_TURMA");
        return this.turmas;
    }
    async save(turma) {
        await (0, knex_1.Knex)("TABELA_TURMA").insert(turma);
    }
    async findById(id) {
        const turmas = await (0, knex_1.Knex)("TABELA_TURMA");
        const turma = turmas.find((e) => e.ID === id);
        return turma;
    }
}
exports.DataBaseTurmaRepository = DataBaseTurmaRepository;
