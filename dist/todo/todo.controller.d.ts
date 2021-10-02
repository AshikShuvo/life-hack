import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from '.prisma/client';
export declare class TodoController {
    private readonly todoService;
    constructor(todoService: TodoService);
    create(createTodoDto: CreateTodoDto): Promise<Todo>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateTodoDto: UpdateTodoDto): string;
    remove(id: string): string;
}
