import { Routes } from '@angular/router';
import {
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventListResolverService,
  EventRouteActivatorService
} from './events/index';

import { Error404Component } from './errors/404.component';

export const appRoutes: Routes = [
  {
    path: 'events/new', component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent']
  },
  {
    path: 'events', component: EventsListComponent, resolve: {
      events: EventListResolverService
    }
  },
  {
    path: 'events/:id', component: EventDetailsComponent,
    canActivate: [EventRouteActivatorService]
  },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  {
    path: 'user',
    loadChildren: () =>
      import('./user/user/user.module').then(
        m => m.UserModule
      )
  },
  { path: '404', component: Error404Component },
];
