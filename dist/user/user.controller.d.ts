import { User } from '.prisma/client';
import { UserService } from './user.service';
import { UserDto } from './dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(user: UserDto): Promise<User>;
    getAllUser(): Promise<User[]>;
}
