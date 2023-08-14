"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    return knex.schema
        .createTable("TABELA_USER", (table) => {
        table.string("ID").primary().index();
        table.integer("USUARIO").notNullable();
        table.string("SENHA").notNullable();
        table.integer("TIPO").notNullable();
    })
        .then(() => {
        console.log("# Create table TABELA_USER");
    });
}
exports.up = up;
async function down(knex) {
    return knex.schema.dropTable("TABELA_USER").then(() => {
        console.log("# Dropped table TABELA_USER");
    });
}
exports.down = down;
