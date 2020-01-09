import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputTextBoxComponent } from './components/input-text-box/input-text-box.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule, MatInputModule} from '@angular/material';
import { HeaderComponent } from './components/header/header.component';
import { AnalysisComponent } from './components/analysis/analysis.component';
import { SanitizeUrlPipe } from './pipes/sanitize-url.pipe';
import { ToPercentagePipe } from './pipes/to-percentage.pipe';
import { CapitalizePipe } from './pipes/capitalize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InputTextBoxComponent,
    HeaderComponent,
    AnalysisComponent,
    SanitizeUrlPipe,
    ToPercentagePipe,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
