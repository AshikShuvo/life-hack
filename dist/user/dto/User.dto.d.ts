export declare class UserDto {
    email: string;
    phone: string;
    firstName: string;
    lastName: string;
    password: string;
}
export declare class CreateUserDto {
    email: string;
    phone: string;
    firstName: string;
    lastName: string;
    login: LoginDto;
}
export declare class LoginDto {
    userName: string;
    salt: string;
    password: string;
}
