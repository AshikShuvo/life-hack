import { User,Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto';

@Injectable()
export class UserService {
    constructor(private readonly prismaService:PrismaService){}

   async createUser(data:CreateUserDto):Promise<User>{
    const login=data.login;
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
