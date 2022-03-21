import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

// material
import { MaterialModule } from './material.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';

// interceptors
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptService } from './components/generics/utils/interceptor.interceptor';

// generics
import { MenuComponent } from './components/generics/menu/menu.component';
import { FooterComponent } from './components/generics/footer/footer.component';
import { TableComponent } from './components/generics/table/table.component';
import { GraphComponent } from './components/generics/git-calendar/graph/graph.component';
import { GitCalendarComponent } from './components/generics/git-calendar/git-calendar.component';

// pipes
import { FilterPipe } from './components/generics/utils/filter.pipe';

// directives
import { MaterialElevationDirective } from './components/generics/utils/material-elevation.directive';

// services
import { LoaderService } from './components/generics/utils/loader.service';
import { GithubService } from './components/generics/utils/github.service';

// components
import { ProjectComponent } from './components/projects/project.component';
import { ProjectGenericComponent } from './components/projects/project/projectGeneric.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { CalendarComponent } from './components/calendars/calendar.component';
import { ResourceComponent } from './components/resources/resource.component';
import { ResourceGenericComponent } from './components/resources/resource/resourceGeneric.component';
import { Resource3DGenericComponent } from './components/resources/resource-3d/resourceGeneric3d.component';
import { AboutProjectComponent } from './components/home/about-project/about-project.component';
import { ResourcesMinComponent } from './components/home/resources-min/resources-min.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    TableComponent,
    ProjectComponent,
    ProjectGenericComponent,
    NotFoundComponent,
    HomeComponent,
    NotFoundComponent,
    GraphComponent,
    GitCalendarComponent,
    CalendarComponent,
    ResourceGenericComponent,
    ResourceComponent,
    FilterPipe,
    MaterialElevationDirective,
    Resource3DGenericComponent,
    AboutProjectComponent,
    ResourcesMinComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    FlexLayoutModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [
    InterceptService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptService,
      multi: true
    },
    LoaderService,
    GithubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
