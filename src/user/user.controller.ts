import { Body, Controller,Get,Post, UseGuards } from '@nestjs/common';
import { User,Prisma } from '.prisma/client';
import { UserService } from './user.service';
import {UserDto,CreateUserDto, signInDto} from './dto'
import { AuthGuard } from '@nestjs/passport';
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

    @Post("local/signIn")
    async localSignIn(@Body()signInDto:signInDto):Promise<string>{
        return await this.userService.localSignIn(signInDto);
    }

    @UseGuards(AuthGuard("jwt"))
    @Get()
    async getAllUser():Promise<User[]>{
        return await this.userService.getAll()
    }

}
