import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectComponent } from './components/projects/project.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { CalendarComponent } from 'src/app/components/calendars/calendar.component';
import { ResourceComponent } from './components/resources/resource.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'resources', component: ResourceComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
