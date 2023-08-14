"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateProfessorController = void 0;
class AuthenticateProfessorController {
    constructor(authenticateProfessorUseCase) {
        this.authenticateProfessorUseCase = authenticateProfessorUseCase;
    }
    async handle(request, response) {
        const { SIAEP, SENHA } = request.body;
        try {
            const token = await this.authenticateProfessorUseCase.execute({
                SIAEP,
                SENHA,
            });
            return response.status(201).json({ token });
        }
        catch (error) {
            if (error.message === "User or password incorrect!") {
                return response.status(409).json({
                    message: "User or password incorrect!",
                });
            }
            return response.status(500).json({
                message: "Internal server error",
            });
        }
    }
}
exports.AuthenticateProfessorController = AuthenticateProfessorController;
