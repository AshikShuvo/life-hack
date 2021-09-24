import { Body, Controller,Get,Post } from '@nestjs/common';
import { User,Prisma } from '.prisma/client';
import { UserService } from './user.service';
import {UserDto,CreateUserDto} from './dto'
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}
    @Post()
    async createUser(@Body() user:UserDto):Promise<User>{
        const createUser:CreateUserDto={
            ...user,
            login:{
                userName:user.email,
                salt:"fdjhd",
                password:user.password
            }
        }
        return await this.userService.createUser(createUser); 
    }
    @Get()
    async getAllUser():Promise<User[]>{
        return await this.userService.getAll()
    }

}
