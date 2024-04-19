import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { TodoComponent } from './components/todo/todo.component';

export const routes: Routes = [
    {path: "", component:TodoComponent},
    {path: "about", component:AboutComponent}
];
