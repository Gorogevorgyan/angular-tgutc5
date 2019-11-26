import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmartComponent } from './smart/smart.component';
import { DumpComponent } from './smart/dump/dump.component';
import { reducerData } from './reducer/dataReducer';
import { ChartsModule, WavesModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SmartComponent,
    DumpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({dataReducer: reducerData}),
    ChartsModule,
    WavesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
