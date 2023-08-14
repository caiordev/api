"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Knex = void 0;
const knex_1 = require("knex"); // Importa a função knex do módulo 'knex'
const Environment_1 = require("./Environment"); // Importa o objeto 'development' do arquivo './Environment'
exports.Knex = (0, knex_1.knex)(Environment_1.development); // Cria uma instância do Knex utilizando o objeto 'development' como configuração
