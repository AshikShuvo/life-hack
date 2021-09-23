import { User,Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserDto } from './dto';

@Injectable()
export class UserService {
    constructor(private readonly prismaService:PrismaService){}

   async createUser(data: Prisma.UserCreateInput):Promise<User>{
        return await this.prismaService.user.create({
            data
        })
    }
}
