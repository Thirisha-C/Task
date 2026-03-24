import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-courses',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class Courses {
  constructor(private router: Router) { }
  courses = [
    {
      id: 1,
      name: 'Angular',
      image: 'https://angular.io/assets/images/logos/angular/angular.png',
      price: 3000
    },
    {
      id: 2,
      name: 'React',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
      price: 2000
    },
    {
      id: 3,
      name: 'Vue',
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg',
      price: 1500
    },
    {
      id: 4,
      name: 'Java',
      image: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg',
      price: 2500
    },
    {
      id: 5,
      name: 'Python',
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
      price: 2000
    },
    {
      id: 6,
      name: 'Node JS',
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
      price: 1500
    },
    {
      id: 7,
      name: 'HTML',
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
      price: 700
    },
    {
      id: 8,
      name: 'CSS',
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
      price: 900
    },
    {
      id: 9,
      name: 'JavaScript',
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
      price: 1200
    },
    {
      id: 10,
      name: 'MongoDB',
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg',
      price: 1800
    }
  ];

//passing param
viewCourse(id: number){
  this.router.navigate(['courses', id]);
}
}