import { ApplicationConfig, provideZoneChangeDetection, NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ProductViewComponent } from './component/product-view/product-view.component';



export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(),
    NgModule,
    BrowserModule,
    ProductViewComponent,
    HttpClientModule,
    

  ]
};