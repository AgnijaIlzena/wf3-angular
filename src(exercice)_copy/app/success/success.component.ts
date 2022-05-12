import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  template: '<p>Victory !!!!</p>',
  styles: [`
    p {
        color: white;
        background-color: green;
    }
  `]
})
export class SuccessComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
