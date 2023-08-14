"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.production = exports.test = exports.development = void 0;
const path_1 = __importDefault(require("path")); // Importa o módulo 'path' do Node.js
exports.development = {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
        filename: path_1.default.resolve(__dirname, "..", "..", "..", "database.sqlite"), // Define o caminho do arquivo do banco de dados SQLite usando o módulo 'path' para resolver o caminho relativo
    },
    migrations: {
        directory: path_1.default.resolve(__dirname, "..", "migrations"), // Define o diretório onde estão localizados os arquivos de migração usando o módulo 'path' para resolver o caminho relativo
    },
    seeds: {
        directory: path_1.default.resolve(__dirname, "..", "seeds"), // Define o diretório onde estão localizados os arquivos de seed usando o módulo 'path' para resolver o caminho relativo
    },
    pool: {
        // afterCreate: (connection: any, done: Function) => {
        //   connection.run('PRAGMA foreign_keys = ON');
        //   done(); }
        min: 0, // Define o número mínimo de conexões no pool como 0
    },
};
exports.test = {
    ...exports.development,
    connection: ":memory:", // Define uma conexão em memória para o ambiente de teste
};
exports.production = {
    ...exports.development, // Copia as propriedades do objeto 'development' para o objeto 'production'
};
