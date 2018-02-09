import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FaqDirectoryComponent } from './components/faq-directory/faq-directory.component';

import { QuestionsService } from './services/questions.service';
import { FaqComponent } from './components/faq/faq.component';
import { AddFaqComponent } from './components/add-faq/add-faq.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FaqDirectoryComponent,
    FaqComponent,
    AddFaqComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    QuestionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
