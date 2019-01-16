import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  postContents = [ 
    {
      title: 'Test 1',
      content: 'testttttttt',
      url: 'https://preview.ibb.co/erdq8p/Employee-1.jpg',
      nbrlike: 2,
      nbrcmt : 1
  
    },
    {
      title: 'Test 2',
      content: 'testttttttt',
      url: 'https://preview.ibb.co/erdq8p/Employee-1.jpg',
      nbrlike: 3,
      nbrcmt : 1
    },
    {
      title: 'Test 3',
      content: 'testttttttt',
      url: 'https://preview.ibb.co/erdq8p/Employee-1.jpg',
      nbrlike: 0, 
      nbrcmt : 5
    }
  ] ;
  
}
