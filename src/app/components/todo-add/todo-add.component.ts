import { Component, EventEmitter, NgModule, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../model/todo.model';
import { TodoService } from '../../service/todo.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-todo-add',
  standalone: true,
  imports: [FormsModule,NgClass],
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.css'
})
export class TodoAddComponent {

  title!:string;
  description!:string;
  todo = new Todo();
  show!:boolean;
  

  constructor(private todoService:TodoService){
  }

  addTodo(){
    this.todo.active = true;
    this.todo.title = this.title;
    this.todo.description = this.description;
    this.todoService.addTodo(this.todo);
    this.show = true;
  }

  close(){
    this.show = false;
  }

}
