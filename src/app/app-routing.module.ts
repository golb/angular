import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProjectComponent } from './project/project.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  //{ path: '', component: HomeComponent },
  { path: '', redirectTo: 'projects/1', pathMatch: 'full'},  
  { path: 'projects/:page_id', component: HomeComponent, data: {animation: 'Projects'} },
  { path: 'projects', redirectTo: 'projects/1', pathMatch: 'full'},
  { path: 'project/:id', component: ProjectComponent, data: {animation: 'Project'} },
  { path: 'about', component: AboutComponent, data: {animation: 'About'} },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
