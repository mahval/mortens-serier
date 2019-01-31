import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StripesComponent } from './stripes/stripes.component';
import { StoriesComponent } from './stories/stories.component';
import { CoversComponent } from './covers/covers.component';

const routes: Routes = [
  { path: '', component: StripesComponent },
  { path: 'stripes', component: StripesComponent },
  { path: 'stripes/:id', component: StripesComponent },
  { path: 'stories', component: StoriesComponent },
  { path: 'stories/:id', component: StoriesComponent },
  { path: 'covers', component: CoversComponent },
  { path: 'covers/:id', component: CoversComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
