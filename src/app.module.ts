import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TodoModule } from './todo/todo.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [PrismaModule, UserModule, AuthModule, TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
