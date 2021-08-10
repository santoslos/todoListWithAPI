import { Module } from '@nestjs/common';
import { TodoListService } from './todo-list.service';
import { TodoListController } from './todo-list.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './todo-list.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Todo]),
  ],
  providers: [TodoListService],
  controllers: [TodoListController],
})
export class TodoModule {}
