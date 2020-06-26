import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../shared';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styles: [`
  .container { padding-left:20px; padding-right:20px;}
  .event-image {height: 100px;}
  `]
})
export class EventDetailsComponent implements OnInit {

  constructor(private eventService: EventService,
              private route: ActivatedRoute) { }
  event: IEvent;

  ngOnInit() {
    this.event = this.eventService.getEvent(
      // tslint:disable-next-line: no-string-literal
      +this.route.snapshot.params['id']
    );
  }

}
