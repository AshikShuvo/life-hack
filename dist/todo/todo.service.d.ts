import { Todo } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
export declare class TodoService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createTodoDto: CreateTodoDto): Promise<Todo>;
    findAll(id: number): Promise<Todo[]>;
    findOne(id: number): string;
    update(id: number, updateTodoDto: UpdateTodoDto): string;
    remove(id: number): string;
}
