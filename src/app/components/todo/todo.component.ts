import { Component } from '@angular/core';
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { Todo } from '../../model/todo.model';
import { NgFor } from '@angular/common';
import { TodoAddComponent } from "../todo-add/todo-add.component";
import { TodoService } from '../../service/todo.service';

@Component({
    selector: 'app-todo',
    standalone: true,
    templateUrl: './todo.component.html',
    styleUrl: './todo.component.css',
    imports: [TodoItemComponent, NgFor, TodoAddComponent]
})
export class TodoComponent {

    todo!: Todo[];

    constructor(private todoService:TodoService) { 
        this.todo = todoService.getTodo();
    } 

    deleteTodo(todo:Todo){
        this.todoService.deleteTodo(todo);
    }

    toggleTodo(todo:Todo){
        this.todoService.toggleTodo(todo);
    }

}
