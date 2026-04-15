import { Routes } from '@angular/router';
import { Login } from './login/login';
import { TaskDetails } from './task-details/task-details';
import { Dashboard } from './dashboard/dashboard';
import { TaskList } from './task-list/task-list';
import { RegisterPage } from './register-page/register-page';
import { authGuard } from './auth-guard';
import { AddTask } from './add-task/add-task';
import { EditTask } from './edit-task/edit-task';

export const routes: Routes = [
    {
        path: 'register',
        component: RegisterPage
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: 'dashboard',
        component: Dashboard,
        canActivate: [authGuard]
    },
    {
        path: 'taskList',
        component: TaskList,
        canActivate: [authGuard],
        
    },
    {
        path: 'taskDetails/:id',
        component: TaskDetails
    },
    {
        path: 'addTask',
        component: AddTask,
        canActivate: [authGuard]
    },
    {
        path: 'editTask/:id',
        component: EditTask
    }
];
