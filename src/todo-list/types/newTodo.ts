import {Todo} from '../todo-list.entity';
export type newTodo = Omit<Todo, 'id'>;
