import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HighlightDirective } from './highlight.directive';
import { TitleCasePipe } from './title-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HighlightDirective,
    TitleCasePipe,
  ],
  imports: [BrowserModule],
  providers: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
