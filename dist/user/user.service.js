"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = require("bcrypt");
const auth_service_1 = require("../auth/auth.service");
let UserService = class UserService {
    constructor(prismaService, authService) {
        this.prismaService = prismaService;
        this.authService = authService;
    }
    async createUser(data) {
        const salt = bcrypt.genSaltSync(10);
        const login = {
            userName: data.login.userName,
            salt: salt,
            password: bcrypt.hashSync(data.login.password, salt)
        };
        return await this.prismaService.user.create({
            data: {
                email: data.email,
                phone: data.phone,
                firstName: data.firstName,
                lastName: data.lastName,
                login: {
                    create: login
                }
            },
            include: {
                login: true,
            },
        });
    }
    async localSignIn(signInDto) {
        const user = await this.prismaService.user.findFirst({
            where: {
                email: signInDto.email
            },
            include: {
                login: true,
            },
        });
        if (!user)
            throw new common_1.UnauthorizedException("user does not exists");
        const passwordMatch = await bcrypt.compare(signInDto.password, user.login.password);
        console.log(passwordMatch);
        if (!passwordMatch)
            throw new common_1.UnauthorizedException("password does not match");
        return this.authService.signUser(user.id, user.email, user.firstName);
    }
    async getAll() {
        return await this.prismaService.user.findMany({
            include: {
                login: true
            }
        });
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, auth_service_1.AuthService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map