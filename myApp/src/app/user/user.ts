import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  name = 'Sri';
  message : string = "Welcome!";

  textTyped: string = '';
  hoverMessage: string = 'Mouse is not over yet';
  come()
  {
    alert(this.message);
  }
  keyEvent(event: any) 
  {
    this.textTyped = event.target.value; //gives what user typed
  }

  // Event handler for mouseover
  hoverEffect()
   {
    this.hoverMessage = 'Mouse is over me!';
}
}