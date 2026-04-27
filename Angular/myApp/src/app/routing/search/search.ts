import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search
{
  searchText: string = '';
  
  @Output() searchChanged = new EventEmitter<string>();

  onSearch()
  {
    console.log("Typing:", this.searchText);
    this.searchChanged.emit(this.searchText);
  }
}