import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './todo-list.entity';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { CreateTodo } from './todo-list.controller';
@Injectable()
export class TodoListService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}

  async findAll(): Promise<Todo[]> {
    return await this.todoRepository.find();
  }

  async create(todo: CreateTodo): Promise<CreateTodo> {
    return await this.todoRepository.save(todo);
  }

  async update(todo: Todo): Promise<UpdateResult> {
    return await this.todoRepository.update(todo.id, todo);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.todoRepository.delete(id);
  }
}
