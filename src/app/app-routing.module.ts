import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent } from './pages/home/home.component';
import {Service1Component } from './pages/service1/service1.component';
import {Service2Component } from './pages/service2/service2.component';
import {Service3Component } from './pages/service3/service3.component';
import {Service4Component } from './pages/service4/service4.component';
import {Service5Component } from './pages/service5/service5.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactComponent } from './pages/contact/contact.component';

const APP_ROUTES: Routes = [
  { path: 'inicio'  , component: HomeComponent },
  { path: 'nosotros'  , component: AboutUsComponent },
  { path: 'contacto'  , component: ContactComponent },
  { path: 'apaf'    , component: Service1Component },
  { path: 'af'      , component: Service2Component },
  { path: 'al'      , component: Service3Component },
  { path: 'aa'      , component: Service4Component },
  { path: 'api'     , component: Service5Component },
  { path: '**'      , pathMatch: 'full', redirectTo: 'inicio'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES)
