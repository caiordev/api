"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Professor = void 0;
const uuid_1 = require("uuid");
class Professor {
    constructor(props, ID) {
        Object.assign(this, props);
        if (!ID) {
            this.ID = (0, uuid_1.v4)();
        }
    }
}
exports.Professor = Professor;
