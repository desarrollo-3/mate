import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTING } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { Service1Component } from './pages/service1/service1.component';
import { Service2Component } from './pages/service2/service2.component';
import { Service3Component } from './pages/service3/service3.component';
import { Service4Component } from './pages/service4/service4.component';
import { Service5Component } from './pages/service5/service5.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Service1Component,
    Service2Component,
    Service3Component,
    Service4Component,
    Service5Component,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
