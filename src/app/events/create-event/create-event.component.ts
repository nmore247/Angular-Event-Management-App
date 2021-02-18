import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styles: [`
  .button {margin-left: 10px;}
  `]
})
export class CreateEventComponent implements OnInit {

  constructor(private router: Router) { }
  isDirty = true;
  ngOnInit(): void {
  }

  cancel() {
    // navigating from code
    this.router.navigate(['/events']);
  }

}
