import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './todo-list.entity';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import {newTodo} from './types/newTodo';
@Injectable()
export class TodoListService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}

  async findAll(): Promise<Todo[]> {
    return await this.todoRepository.find();
  }

  async create(todo: newTodo): Promise<newTodo> {
    return await this.todoRepository.save(todo);
  }

  async update(id:number, newTodo: newTodo): Promise<UpdateResult> {
    return await this.todoRepository.update(id, newTodo);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.todoRepository.delete(id);
  }
}
