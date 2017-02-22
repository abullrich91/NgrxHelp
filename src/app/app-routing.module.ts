import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'events',
    loadChildren: 'app/events/events.module'
  },
  {
    path: '',
    redirectTo: 'events/vote-events',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'events/vote-events'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
