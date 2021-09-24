import { User,Prisma } from '.prisma/client';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto, signInDto } from './dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(private readonly prismaService:PrismaService){}

   async createUser(data:CreateUserDto):Promise<User>{
       const salt = bcrypt.genSaltSync(10);
    const login={
        userName:data.login.userName,
        salt:salt,
        password:bcrypt.hashSync(data.login.password,salt)
        
    };
        return await this.prismaService.user.create({
           
            data:{
               email:data.email,
               phone:data.phone,
               firstName:data.firstName,
               lastName:data.lastName,
                login:{
                    create:login
                }
            },
            include: {
                login: true,
              },
        })
    }
    async localSignIn(signInDto:signInDto){
        const user=await this.prismaService.user.findFirst({
            where:{
                email:signInDto.email
            },
            include: {
                login: true,
              },
        })
        if(!user)throw new UnauthorizedException("user does not exists");
        const passwordMatch=await bcrypt.compare(signInDto.password,user.login.password);
        console.log(passwordMatch)
       if( !passwordMatch) throw new UnauthorizedException("password does not match");
        return user;
    }
    async getAll():Promise<User[]>{
        return await this.prismaService.user.findMany({
            include:{
                login:true
            }
        });
    }
}
