import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoffeePageComponent } from './dashboard/coffee-page/coffee-page.component';
import { SharedModule } from './shared-module/shared-module.module';

@NgModule({
  declarations: [
    AppComponent,
    CoffeePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
