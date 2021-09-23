import { User } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserDto } from './dto';

@Injectable()
export class UserService {
    constructor(private readonly prismaService:PrismaService){}

    createUser(user:UserDto):Promise<User>{
        return this.prismaService.user.create({
            data:UserDto
        })
    }
}
