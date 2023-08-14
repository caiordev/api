"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    return knex.schema
        .createTable("TABELA_DISCIPLINA", (table) => {
        table.string("ID").primary().index();
        table.string("NOME").notNullable();
        table.string("CURSO").notNullable();
        table.string("HORARIO").notNullable();
        table.integer("COD_DISCIPLINA").notNullable();
        table.string("ID_PROFESSOR").nullable();
        table.integer("VAGAS").notNullable();
    })
        .then(() => {
        console.log("# Create table TABELA_DISCIPLINA");
    });
}
exports.up = up;
async function down(knex) {
    return knex.schema.dropTable("TABELA_DISCIPLINA").then(() => {
        console.log("# Dropped table TABELA_DISCIPLINA");
    });
}
exports.down = down;
