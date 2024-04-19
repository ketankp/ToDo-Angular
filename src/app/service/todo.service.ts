import { Injectable } from '@angular/core';
import { Todo } from '../model/todo.model';

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  
  todo!: Todo[];
  localString! :string;

  constructor() {
    this.localString = localStorage.getItem("todos") || "";
    if(this.localString == ""){
      this.todo = [];
      localStorage.setItem("todos",JSON.stringify(this.todo));
    }
    
  }

  getLocalTodo(){
    this.todo = JSON.parse(localStorage.getItem("todos") || "");
  }

  setLocalTodo(){
    localStorage.setItem("todos",JSON.stringify(this.todo));
  }

  getTodo(): Todo[] {
    this.getLocalTodo();
    return this.todo
  }

  deleteTodo(todo:Todo){
    const index = this.todo.indexOf(todo);
    this.todo.splice(index,1);
    this.setLocalTodo();
  }

  toggleTodo(todo:Todo){
      todo.active = !todo.active;
      this.setLocalTodo();
  }

  addTodo(todo:Todo){
      this.todo.push(todo);
      this.setLocalTodo();
  }
  
}
