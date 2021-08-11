import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { TodoListService } from './todo-list.service';
import { Todo } from './todo-list.entity';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DeleteResult, UpdateResult } from 'typeorm';
import { UpdateResponse } from '../classes/updateResponse';
import { DeleteResponse } from '../classes/deleteResponse';


export type CreateTodo = Omit<Todo, 'id'>



@ApiTags('todo-list')
@Controller('todo-list')
export class TodoListController {
  constructor(private todoListService: TodoListService) {}

  @Get()
  @ApiOperation( { description: 'Find All' } )
  @ApiResponse( { status: 200, description: 'Objects returned.', type: [Todo] } )
  @ApiResponse( { status: 400, description: 'Validation failed.' } )
  index(): Promise<Todo[]> {
    return this.todoListService.findAll();
  }

  @Post('')
  @ApiResponse({ status: 201, description: 'The record has been successfully created.', type: Todo})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  @ApiBody({
    schema:{
      type: 'object',
        properties: {
          textTodo: {
            type: 'string',
          },
        },
      },
  })
  async create(@Body() todoData: CreateTodo): Promise<CreateTodo> {
    return this.todoListService.create(todoData);
  }


  @Put('/:id')
  @ApiOperation( { description: 'Update' } )
  @ApiResponse( { status: 200, description: 'Post updated.', type:  UpdateResponse } )
  @ApiResponse( { status: 400, description: 'Validation failed.' } )
  @ApiResponse( { status: 404, description: 'Post not found.' } )
  async update(@Param('id') id: number, @Body() todoData: Todo): Promise<UpdateResult> {
    todoData.id = Number(id);
    return this.todoListService.update(todoData);
  }

  @Delete('/:id')
  @ApiResponse( { status: 200, description: 'Object removed.', type: DeleteResponse  } )
  @ApiResponse( { status: 400, description: 'Validation failed.' } )
  @ApiResponse( { status: 404, description: 'Object not found.' } )
  async delete(@Param('id') id:number): Promise<DeleteResult>{
    return this.todoListService.delete(id);
  }
}
