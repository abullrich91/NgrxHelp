import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { ContainerComponent } from './container/container.component';
import { RouterModule } from '@angular/router';

@NgModule({
  exports: [
    SharedComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    SharedComponent,
    ContainerComponent,
  ]
})
export class SharedModule { }
