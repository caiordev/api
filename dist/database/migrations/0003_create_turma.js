"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    return knex.schema
        .createTable("TABELA_TURMA", (table) => {
        table.string("ID").primary().index();
        table.integer("ID_USUARIO").notNullable();
        table.string("ID_DISCIPLINA").notNullable();
    })
        .then(() => {
        console.log("# Create table TABELA_TURMA");
    });
}
exports.up = up;
async function down(knex) {
    return knex.schema.dropTable("TABELA_TURMA").then(() => {
        console.log("# Dropped table TABELA_TURMA");
    });
}
exports.down = down;
