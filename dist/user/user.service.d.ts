import { User } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto';
export declare class UserService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    createUser(data: CreateUserDto): Promise<User>;
    getAll(): Promise<User[]>;
}
