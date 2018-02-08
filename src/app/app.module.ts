import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FaqDirectoryComponent } from './components/faq-directory/faq-directory.component';

import { QuestionsService } from './services/questions.service';
import { FaqComponent } from './components/faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FaqDirectoryComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    QuestionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
