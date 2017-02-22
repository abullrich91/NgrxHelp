import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { SharedModule } from './shared/shared.module';
import { FriendsModule } from './friends/friends.module';

import { AppComponent } from './app.component';

import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NewEventService } from './events/new-event/shared/new-event.service';
import { StoreModule } from '@ngrx/store';
import { newEvent } from './events/new-event/shared/new-event.reducer';

export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any>{
    // override hammerjs default configuration
    'pinch': { enable: false },
    'rotate': { enable: false }
  }
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule,
    SharedModule,
    FriendsModule,
    StoreModule.provideStore({ newEvent })
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    },
    NewEventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
