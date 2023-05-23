import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { ContactComponent } from './components/contacts/contact.component';
import { ImageSearchComponent } from './components/image-search/image-search.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { InternalServerErrorComponent } from './components/internal-server-error/internal-server-error.component';


const routes: Routes = [
  { path: 'events/:id', component: EventDetailsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'image-search', component: ImageSearchComponent },
  { path: '', component: EventListComponent },
  { path: '404', component: NotFoundComponent },
  { path: '500', component: InternalServerErrorComponent },
  { path: '**', redirectTo: '/404' }, // Redirect any other unknown routes to the 404 page
  { path: '**', redirectTo: '/events' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
