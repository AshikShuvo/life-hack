import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
   constructor(private readonly jwtService:JwtService){}

   signUser(userId:number, email:string, name:string):string{
       return this.jwtService.sign({userId,email,name});
   }
}
