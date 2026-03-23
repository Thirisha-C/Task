import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  imports: [],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class Courses {
  constructor(private routes: Router){}
  courses = [
    {
      id: 1,
      name: 'Angular Course',
      image: 'https://angular.io/assets/images/logos/angular/angular.png',
      price: 1000,
      description: 'Learn Angular from basics to advanced'
    },
    {
      id: 2,
      name: 'React Course',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
      price: 1200,
      description: 'Build modern UI with React'
    },
    {
      id: 3,
      name: 'Java Course',
      image: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg',
      price: 900,
      description: 'Master Java programming'
    },
    {
      id: 4,
      name: 'Python Course',
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
      price: 800,
      description: 'Learn Python easily'
    }
  ]
}
