import { Routes } from '@angular/router';
import { Home } from './routing/home/home';
import { About } from './routing/about/about';
import { Courses } from './routing/courses/courses';
import { CourseDetails } from './routing/course-details/course-details';
import { Contact } from './routing/contact/contact';
import { NotFound } from './routing/not-found/not-found';

export const routes: Routes = [

    //router config
    {
        path: '',
        component: Home
    },
    {
        path: 'about',
        component: About
    },
    {
        path: 'courses',
        component: Courses
        ,
        children: [{
            path: ':id',
            component: CourseDetails
        }]
    },
    {
        path: 'contact',
        component: Contact
    },
    {
        path: '**',
        component: NotFound
    } //wildcard
];
