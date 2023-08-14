"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataBaseUserRepository = void 0;
const knex_1 = require("../../database/knex"); // Importa o módulo Knex para acessar o objeto Knex
class DataBaseUserRepository {
    async getUser() {
        this.users = await (0, knex_1.Knex)("TABELA_USER"); // Consulta todos os registros da tabela "TABELA_USER" utilizando o Knex e atribui o resultado à propriedade 'users'
        return this.users; // Retorna a lista de usuários
    }
    async findByUser(usuario) {
        const users = await (0, knex_1.Knex)("TABELA_USER"); // Consulta todos os registros da tabela "TABELA_USER" utilizando o Knex e atribui o resultado à variável 'users'
        const user = users.find((e) => e.USUARIO === usuario); // Procura o usuário com o número de usuário específico dentro do array de usuários
        return user; // Retorna o usuário encontrado ou undefined caso não exista
    }
}
exports.DataBaseUserRepository = DataBaseUserRepository;
