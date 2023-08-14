"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataBaseAlunoRepository = void 0;
const knex_1 = require("../../database/knex"); // Importa o módulo Knex para acessar o objeto Knex
class DataBaseAlunoRepository {
    // users: any;
    async getAluno() {
        this.alunos = await (0, knex_1.Knex)("TABELA_ALUNO"); // Consulta todos os registros da tabela "TABELA_ALUNO" utilizando o Knex e atribui o resultado à propriedade 'alunos'
        return this.alunos; // Retorna a lista de alunos
    }
    async findByMatricula(matricula) {
        const alunos = await (0, knex_1.Knex)("TABELA_ALUNO"); // Consulta todos os registros da tabela "TABELA_ALUNO" utilizando o Knex e atribui o resultado à variável 'alunos'
        const aluno = alunos.find((e) => e.MATRICULA === matricula); // Procura o aluno com a matrícula específica dentro do array de alunos
        return aluno; // Retorna o aluno encontrado ou undefined caso não exista
    }
    async save(aluno) {
        await (0, knex_1.Knex)("TABELA_ALUNO").insert(aluno); // Insere um novo aluno na tabela "TABELA_ALUNO" utilizando o Knex
        await (0, knex_1.Knex)("TABELA_USER").insert({
            ID: aluno.ID,
            USUARIO: aluno.MATRICULA,
            SENHA: aluno.SENHA,
            TIPO: 3,
        }); // Insere um novo usuário na tabela "TABELA_USER" relacionado ao aluno inserido anteriormente
    }
    async updateAluno(NOME, CURSO, EMAIL, ID, SENHA) {
        await (0, knex_1.Knex)("TABELA_ALUNO")
            .update({
            NOME: NOME,
            CURSO: CURSO,
            EMAIL: EMAIL,
            SENHA: SENHA,
        })
            .where({ ID: ID }); // Atualiza os dados do aluno na tabela "TABELA_ALUNO" utilizando o Knex e filtrando pelo ID específico
        await (0, knex_1.Knex)("TABELA_USER")
            .update({
            SENHA: SENHA,
        })
            .where({ ID: ID }); // Atualiza a senha do usuário relacionado ao aluno na tabela "TABELA_USER" utilizando o Knex e filtrando pelo ID específico
        this.alunos = await (0, knex_1.Knex)("TABELA_ALUNO"); // Atualiza a lista de alunos atribuindo todos os registros da tabela "TABELA_ALUNO" à propriedade 'alunos'
        return this.alunos; // Retorna a lista atualizada de alunos
    }
    async deleteAluno(ID) {
        await (0, knex_1.Knex)("TABELA_ALUNO").where({ ID: ID }).del(); // Exclui o aluno com o ID específico da tabela "TABELA_ALUNO" utilizando o Knex
        await (0, knex_1.Knex)("TABELA_USER").where({ ID: ID }).del(); // Exclui o usuário relacionado ao aluno da tabela "TABELA_USER" utilizando o Knex
        this.alunos = await (0, knex_1.Knex)("TABELA_ALUNO"); // Atualiza a lista de alunos atribuindo todos os registros da tabela "TABELA_ALUNO" à propriedade 'alunos'
        // this.users = await knex("TABELA_USER");
        return this.alunos; // Retorna a lista atualizada de alunos
    }
}
exports.DataBaseAlunoRepository = DataBaseAlunoRepository;
