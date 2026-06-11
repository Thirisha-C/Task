import { Component, signal } from '@angular/core';
import { ObsDemo } from './Observable/obs-demo/obs-demo';
import { Header } from './Subject/header/header';
import { Dashboard } from './Subject/dashboard/dashboard';
import { Sidebar } from './Subject/sidebar/sidebar';

@Component({
  selector: 'app-root',
  imports: [ObsDemo, Header, Dashboard, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularPractice');
}
