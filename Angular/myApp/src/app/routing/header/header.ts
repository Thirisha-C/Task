import { Component } from '@angular/core';
import { Router, RouterModule } from "@angular/router";
import { Search } from "../search/search";

@Component({
  selector: 'app-header',
  imports: [RouterModule, Search],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header
{
  constructor(private router: Router) {} 
  handleSearch(value: string)
  {
    console.log(value);
    this.router.navigate(['/search'], {queryParams: {q:value}});
  }
}