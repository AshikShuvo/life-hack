
export class UserDto{
    email: string;  
    phone: string;
    firstName:  string;
    lastName: string;
    password:string;
    
}
export class CreateUserDto{
  email:string;
  phone:string;
  firstName:string;
  lastName:string;
  login:LoginDto
}
export class LoginDto{
  userName: string;
  salt: string;
  password: string;
}