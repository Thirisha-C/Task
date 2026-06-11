import { Component, OnInit } from '@angular/core';
import { ObsService } from '../obs-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-obs-demo',
  imports: [CommonModule],
  templateUrl: './obs-demo.html',
  styleUrl: './obs-demo.css',
})
export class ObsDemo implements OnInit
{
  users: any[] = [];

  constructor(private obsService: ObsService) {}

  ngOnInit() 
  {
    this.obsService.getUsers().subscribe(
    {
      next: (data: any) => {
        console.log("Data received:", data);
        this.users = data;
      },
      error: (err) => {
        console.log("Error:", err);
      },
      complete: () => {
        console.log("Completed");
      }
    });
  }
}