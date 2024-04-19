import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoAddComponent } from './components/todo-add/todo-add.component';

export const routes: Routes = [
    {path: "", component:TodoComponent},
    {path: "about", component:AboutComponent},
    {path: "add", component:TodoAddComponent}
];
