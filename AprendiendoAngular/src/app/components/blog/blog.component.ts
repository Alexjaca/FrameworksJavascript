import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  
  public title!: string;

  constructor(){
    this.title ="BIENVENIDO AL BLOG";
  }

}