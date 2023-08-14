"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluno = void 0;
const uuid_1 = require("uuid");
class Aluno {
    constructor(props, ID) {
        Object.assign(this, props);
        if (!ID) {
            this.ID = (0, uuid_1.v4)();
        }
    }
}
exports.Aluno = Aluno;
