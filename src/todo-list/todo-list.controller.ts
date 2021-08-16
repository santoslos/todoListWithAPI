import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { TodoListService } from './todo-list.service';
import { Todo } from './todo-list.entity';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DeleteResult, UpdateResult } from 'typeorm';
import { UpdateResponse } from './types/UpdateResponse';
import { DeleteResponse } from './types/DeleteResponse';
import {newTodo} from './types/newTodo';


@ApiTags('todo-list')
@Controller('todo-list')
export class TodoListController {
  constructor(private todoListService: TodoListService) {}

  @Get()
  @ApiOperation({ description: 'Find All' })
  @ApiResponse({ status: 200, description: 'Objects returned.', type: [Todo] })
  @ApiResponse({ status: 404, description: 'page not found' })
  index(): Promise<Todo[]> {
    return this.todoListService.findAll();
  }

  @Post('')
  @ApiResponse({ status: 201, description: 'The record has been successfully created.', type: Todo })
  @ApiResponse({ status: 400, description: 'Validation failed.' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        textTodo: {
          type: 'string',
        },
      },
    },
  })
  async create(@Body() todoData: newTodo): Promise<newTodo> {
    return this.todoListService.create(todoData);
  }

  @Put('/:id')
  @ApiOperation({ description: 'Update' })
  @ApiResponse({ status: 200, description: 'Post updated.', type: UpdateResponse })
  @ApiResponse({ status: 400, description: 'Validation failed.' })
  @ApiResponse({ status: 404, description: 'Post not found.' })
  async update(@Param('id') id: number, @Body() newTodo: newTodo): Promise<UpdateResult> {
    return this.todoListService.update(id, newTodo);
  }

  @Delete('/:id')
  @ApiResponse({ status: 200, description: 'Object removed.', type: DeleteResponse })
  @ApiResponse({ status: 400, description: 'Validation failed.' })
  @ApiResponse({ status: 404, description: 'Object not found.' })
  async delete(@Param('id') id: number): Promise<DeleteResult> {
    return this.todoListService.delete(id);
  }
}
