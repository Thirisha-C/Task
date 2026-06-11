import { Routes } from '@angular/router';
import { LoginForm } from './Tform/login-form/login-form';
import { StudentLogin } from './Rform/student-login/student-login';
import { SkillsForm } from './FormBuilder/skills-form/skills-form';
import { User } from './HTTP/user/user';
import { AsyncDemo } from './async-demo/async-demo';
import { ShareDemo } from './share-demo/share-demo';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginForm
    },
    {
        path: 'studentLogin',
        component: StudentLogin
    },
    {
        path: 'skillsForm',
        component: SkillsForm
    },
    {
        path: 'async',
        component: AsyncDemo
    },
    {
        path: 'share',
        component: ShareDemo
    },
    {
        path: 'user',
        component: User
    }
];
