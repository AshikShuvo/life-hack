import { User } from '.prisma/client';
import { UserService } from './user.service';
import { UserDto, signInDto } from './dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(user: UserDto): Promise<User>;
    localSignIn(signInDto: signInDto): Promise<User & {
        login: import(".prisma/client").Login;
    }>;
    getAllUser(): Promise<User[]>;
}
