import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from '../course-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-details',
  imports: [CommonModule],
  templateUrl: './course-details.html',
  styleUrl: './course-details.css',
})
export class CourseDetails {
  id: any;
    selectedCourse: any;
    courses: any;

  constructor(private route: ActivatedRoute){}
  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.id =Number(params.get('id'));
      this.selectedCourse = this.courses.find((course: { id: any; }) => course.id === this.id);
    });
  }
}

