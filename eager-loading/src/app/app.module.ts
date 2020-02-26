import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EagerLoadingModuleModule } from './eager-loading-module/eager-loading-module.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EagerLoadingModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
