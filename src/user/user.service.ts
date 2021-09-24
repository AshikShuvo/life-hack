import { User,Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto';
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
    async getAll():Promise<User[]>{
        return await this.prismaService.user.findMany();
    }
}
