import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { AuthGuard } from '@nestjs/passport';
import { Todo } from '.prisma/client';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  @UseGuards(AuthGuard("jwt"))
  @Post()
 async create(@Body() createTodoDto: CreateTodoDto,@Request() req:any):Promise<Todo> {
  const {userId}=req.user;
   createTodoDto.authorId=userId;
    return await this.todoService.create(createTodoDto);
  }
  @UseGuards(AuthGuard("jwt"))
  @Get()
  async findAll(@Request() req:any):Promise<Todo[]> {
    const {userId}=req.user;
    console.log(userId)
    return await this.todoService.findAll(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.update(+id, updateTodoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todoService.remove(+id);
  }
}
