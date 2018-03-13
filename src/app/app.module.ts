import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ModelRefDirective } from './model-ref.directive';
import { ModelService } from './model.service';

@NgModule({
  declarations: [
    AppComponent,
    ModelRefDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ModelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
