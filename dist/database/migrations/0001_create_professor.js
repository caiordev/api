"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    return knex.schema
        .createTable("TABELA_PROFESSOR", (table) => {
        table.string("ID").primary().index();
        table.string("NOME").notNullable();
        table.string("EMAIL").notNullable();
        table.integer("SIAEP").notNullable();
        table.integer("NUMERO").notNullable();
        table.string("DEPARTAMENTO").notNullable();
        table.string("SENHA").notNullable();
    })
        .then(() => {
        console.log("# Create table TABELA_PROFESSOR");
    });
}
exports.up = up;
async function down(knex) {
    return knex.schema.dropTable("TABELA_PROFESSOR").then(() => {
        console.log("# Dropped table TABELA_PROFESSOR");
    });
}
exports.down = down;
