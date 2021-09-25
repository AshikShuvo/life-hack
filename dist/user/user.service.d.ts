import { User } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto, signInDto } from './dto';
import { AuthService } from 'src/auth/auth.service';
export declare class UserService {
    private readonly prismaService;
    private readonly authService;
    constructor(prismaService: PrismaService, authService: AuthService);
    createUser(data: CreateUserDto): Promise<User>;
    localSignIn(signInDto: signInDto): Promise<string>;
    getAll(): Promise<User[]>;
}
