import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  // initial empty task list
  //bs - stores data and update all sub compo whn data changes
  private tasks = new BehaviorSubject<any[]>([
    {
      id: 1,
      title: 'Learn HTML',
      description: 'Understand HTML basics, tags, forms, and page structure.',
      assignedTo: 'Dinga',
      priority: 'High',
      dueDate: '2026-04-05',
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Learn CSS',
      description: 'Learn styling, layouts, flexbox, and responsive design.',
      assignedTo: 'Dingi',
      priority: 'Medium',
      dueDate: '2026-04-06',
      status: 'Completed'
    },
    {
      id: 3,
      title: 'Learn JavaScript',
      description: 'Practice JS fundamentals, functions, arrays, and DOM manipulation.',
      assignedTo: 'John',
      priority: 'High',
      dueDate: '2026-04-07',
      status: 'Completed'
    },
    {
      id: 4,
      title: 'Learn TypeScript',
      description: 'Understand types, interfaces, and strong typing concepts.',
      assignedTo: 'Alexa',
      priority: 'Low',
      dueDate: '2026-04-08',
      status: 'Completed'
    },
    {
      id: 5,
      title: 'Learn Angular',
      description: 'Study components, services, routing, and forms in Angular.',
      assignedTo: 'Siri',
      priority: 'High',
      dueDate: '2026-04-09',
      status: 'Pending'
    },
    {
      id: 6,
      title: 'Project',
      description: 'Build Student Task Manager app with full CRUD functionality.',
      assignedTo: 'Sam',
      priority: 'Medium',
      dueDate: '2026-04-21',
      status: 'Pending'
    },
    {
      id: 7,
      title: 'Review',
      description: 'Review project code, fix bugs, and prepare for submission.',
      assignedTo: 'Sophia',
      priority: 'High',
      dueDate: '2026-04-22',
      status: 'Pending'
    }
  ]);
  tasks$ = this.tasks.asObservable(); // receive the latest data

  constructor() { }

  //Add Task
  addTask(task: any) {
    const currentTasks = this.tasks.value;
    this.tasks.next([...currentTasks, task]);
  }

  // Update Task
  updateTask(updatedTask: any) {
    const updatedList = this.tasks.value.map(task =>
      task.id === updatedTask.id ? updatedTask : task
    );
    this.tasks.next(updatedList);
  }

  // Delete Task
  deleteTask(id: number) {
    const filtered = this.tasks.value.filter(task => task.id !== id);
    this.tasks.next(filtered);
  }

  // Mark Complete
  markComplete(id: number) 
  {
    const updatedList = this.tasks.value.map(task =>
      task.id === id ? { ...task, status: 'Completed' } : task
    );
    this.tasks.next(updatedList);
  }
}
