import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { ContactComponent } from './components/contacts/contact.component';
import { ImageSearchComponent } from './components/image-search/image-search.component';

const routes: Routes = [
  { path: 'events/:id', component: EventDetailsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'image-search', component: ImageSearchComponent },
  { path: '', component: EventListComponent },
  { path: '**', redirectTo: '/events' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
