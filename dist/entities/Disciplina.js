"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Disciplina = void 0;
const uuid_1 = require("uuid"); //biblioteca que faz id aleatorio automático.
class Disciplina {
    constructor(props, ID) {
        Object.assign(this, props); //construtor.
        if (!ID) {
            this.ID = (0, uuid_1.v4)();
        }
    }
}
exports.Disciplina = Disciplina;
