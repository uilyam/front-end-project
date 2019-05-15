import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrucksLoaderService } from './services/trucks-loader.service';
import { MapComponent } from './components/map/map.component';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    ScrollingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatTabsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [TrucksLoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
