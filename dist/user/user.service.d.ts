import { User } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto, signInDto } from './dto';
export declare class UserService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    createUser(data: CreateUserDto): Promise<User>;
    localSignIn(signInDto: signInDto): Promise<User & {
        login: import(".prisma/client").Login;
    }>;
    getAll(): Promise<User[]>;
}
