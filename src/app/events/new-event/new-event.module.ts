import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewEventComponent } from './new-event.component';
import { UploadImagesComponent } from './upload-images/upload-images.component';
import { EventMetadataComponent } from './event-metadata/event-metadata.component';
import { ChooseFriendsComponent } from './choose-friends/choose-friends.component';
import { NewEventRoutingModule } from './new-event-routing.module';
import { StoreModule } from '@ngrx/store';
import { newEvent } from './shared/new-event.reducer';
import { FormBuilder, FormsModule, FormGroup, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NewEventRoutingModule,
    StoreModule.provideStore({ newEvent }),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    NewEventComponent,
    UploadImagesComponent,
    EventMetadataComponent,
    ChooseFriendsComponent
  ],
  providers: [
    FormBuilder
  ]
})
export class NewEventModule { }
