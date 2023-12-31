"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    return knex.schema // Acessa o objeto de schema do Knex
        .createTable("TABELA_ALUNO", (table) => {
        // Cria uma tabela chamada "TABELA_ALUNO"
        table.string("ID").primary().index(); // Adiciona uma coluna chamada "ID" do tipo string como chave primária e índice
        table.string("NOME").notNullable(); // Adiciona uma coluna chamada "NOME" do tipo string que não pode ser nula
        table.string("EMAIL").notNullable(); // Adiciona uma coluna chamada "EMAIL" do tipo string que não pode ser nula
        table.integer("MATRICULA").notNullable(); // Adiciona uma coluna chamada "MATRICULA" do tipo inteiro que não pode ser nula
        table.string("CURSO").notNullable(); // Adiciona uma coluna chamada "CURSO" do tipo string que não pode ser nula
        table.string("SENHA").notNullable(); // Adiciona uma coluna chamada "SENHA" do tipo string que não pode ser nula
    })
        .then(() => {
        console.log("# Create table TABELA_ALUNO"); // Exibe uma mensagem informando que a tabela foi criada
    });
}
exports.up = up;
async function down(knex) {
    return knex.schema.dropTable("TABELA_ALUNO").then(() => {
        console.log("# Dropped table TABELA_ALUNO"); // Exibe uma mensagem informando que a tabela foi removida
    });
}
exports.down = down;
