import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing.module'

import { HomeComponent } from './home/home.component';
import { BeginnerComponent } from './beginner/beginner.component';
import { IntermediateComponent } from './intermediate/intermediate.component';
import { EliteComponent } from './elite/elite.component';
import { AdvancedComponent } from './advanced/advanced.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BeginnerComponent,
    IntermediateComponent,
    EliteComponent,
    AdvancedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
