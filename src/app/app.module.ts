import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppRoutingModule} from "./app-routing.module";
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FaqSectionComponent } from './components/faq-section/faq-section.component';
import { TeamSectionComponent } from './components/team-section/team-section.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    FaqSectionComponent,
    TeamSectionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
