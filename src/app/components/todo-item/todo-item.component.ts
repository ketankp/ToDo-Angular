import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../model/todo.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input()todo!:Todo;
  @Input()i!:number;
  @Output() deleteTodo = new EventEmitter<Todo>();
  @Output() toggleTodo = new EventEmitter<Todo>();

  onDeleteClick(todo:Todo){
    this.deleteTodo.emit(todo);
  }

  onToggleClick(todo:Todo){
    this.toggleTodo.emit(todo);
  }
}
