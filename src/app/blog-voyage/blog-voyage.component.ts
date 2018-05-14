import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-voyage',
  templateUrl: './blog-voyage.component.html',
  styleUrls: ['./blog-voyage.component.css']
})
export class BlogVoyageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('Dans BLOG')
  }

}
