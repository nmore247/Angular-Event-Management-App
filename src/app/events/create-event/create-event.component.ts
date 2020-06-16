import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  template: `
  <h1>New Event</h1>
  <hr>
  <div class="col-md-6">
    <h3>[Create Event Form will go here]</h3>
    <br/>
    <br/>
    <button type="submit" class="btn btn-primary">Save</button>
    <button type="button" class="btn btn-default" (click)="cancel()">Cancel</button>
  `,
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
