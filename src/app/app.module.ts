import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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

// services
import { LoaderService } from './components/generics/utils/loader.service';

// components
import { ProjectComponent } from './components/projects/project.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    ProjectComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    FlexLayoutModule,
    MaterialModule
  ],
  providers: [
    InterceptService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptService,
      multi: true
    },
    LoaderService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
