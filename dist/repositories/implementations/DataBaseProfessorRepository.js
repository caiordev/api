"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataBaseProfessorRepository = void 0;
const knex_1 = require("../../database/knex");
class DataBaseProfessorRepository {
    async getProfessor() {
        this.professores = await (0, knex_1.Knex)("TABELA_PROFESSOR");
        return this.professores;
    }
    async findBySIAEP(siaep) {
        const professores = await (0, knex_1.Knex)("TABELA_PROFESSOR");
        const professor = professores.find((e) => e.SIAEP === siaep);
        return professor;
    }
    async save(professor) {
        await (0, knex_1.Knex)("TABELA_PROFESSOR").insert(professor);
        await (0, knex_1.Knex)("TABELA_USER").insert({
            ID: professor.ID,
            USUARIO: professor.SIAEP,
            SENHA: professor.SENHA,
            TIPO: 2,
        });
    }
    async updateProfessor(ID, NOME, EMAIL, SIAEP, NUMERO, DEPARTAMENTO, SENHA) {
        await (0, knex_1.Knex)("TABELA_PROFESSOR")
            .update({
            NOME: NOME,
            EMAIL: EMAIL,
            SIAEP: SIAEP,
            NUMERO: NUMERO,
            DEPARTAMENTO: DEPARTAMENTO,
            SENHA: SENHA,
        })
            .where({ ID: ID });
        await (0, knex_1.Knex)("TABELA_USER")
            .update({
            SENHA: SENHA,
        })
            .where({ ID: ID });
        this.professores = await (0, knex_1.Knex)("TABELA_PROFESSOR");
        return this.professores;
    }
    async deleteProfessor(ID) {
        const deleteProfessorPromise = (0, knex_1.Knex)("TABELA_PROFESSOR").where({ ID: ID }).del();
        const deleteUserPromise = (0, knex_1.Knex)("TABELA_USER").where({ ID: ID }).del();
        await Promise.all([deleteProfessorPromise, deleteUserPromise]);
        this.professores = await (0, knex_1.Knex)("TABELA_PROFESSOR");
        return this.professores;
    }
}
exports.DataBaseProfessorRepository = DataBaseProfessorRepository;
