import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputTextBoxComponent } from './components/input-text-box/input-text-box.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatInputModule} from '@angular/material';
import { HeaderComponent } from './components/header/header.component';
import { AnalysisComponent } from './components/analysis/analysis.component';

@NgModule({
  declarations: [
    AppComponent,
    InputTextBoxComponent,
    HeaderComponent,
    AnalysisComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
