import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FrontpageComponent } from './frontpage/frontpage.component';

import { MatCardModule, MatButtonModule, MatIconModule } from '@angular/material';
import { StripesComponent } from './stripes/stripes.component';
import { StoriesComponent } from './stories/stories.component';
import { CoversComponent } from './covers/covers.component';
import { AppRoutingModule } from './/app-routing.module';

const appRoutes: Routes = [

  { path: '', component: FrontpageComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    StripesComponent,
    StoriesComponent,
    CoversComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
