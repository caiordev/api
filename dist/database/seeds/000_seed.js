"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = void 0;
async function seed(knex) {
    // Deletes ALL existing entries
    await knex("TABELA_ALUNO").del();
    // Inserts seed entries
    await knex("TABELA_ALUNO").insert([
        {
            ID: "de56f38d-6c13-4dff-9bac-77906ef6f155",
            NOME: "Caio",
            EMAIL: "exemplo@gmail.com",
            MATRICULA: 201619254,
            CURSO: "Computação",
            // senha 12345678
            SENHA: "$2a$08$A.fKeV8YN.lwQIK7MauiduD11/YddmAUn5QmrnurXD8ZtsT6TwbxC",
        }
        // Adicione outros registros conforme necessário
    ]);
}
exports.seed = seed;
