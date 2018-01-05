import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule,PreloadAllModules } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ROUTES } from 'app/app.routes';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { MenuComponent } from 'app/restaurant-detail/menu/menu.component';
import { ShoppingCartComponent } from 'app/restaurant-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from 'app/restaurant-detail/menu-item/menu-item.component';
import { RestaurantDetailComponent } from 'app/restaurant-detail/restaurant-detail.component';
import { ReviewsComponent } from 'app/restaurant-detail/reviews/reviews.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { SharedModule } from 'app/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router/src/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RestaurantsComponent,
    RestaurantComponent,
    MenuComponent,
    ShoppingCartComponent,
    RestaurantDetailComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderSummaryComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule.forRoot(),
    HttpModule,
    //RouterModule.forRoot(ROUTES,{preloadingStrategy:PreloadAllModules}),
    RouterModule.forRoot(ROUTES),
  ],
 // providers: [{provide:LocationStrategy, useClass:HashLocationStrategy},{provide:LOCALE_ID,useValue:'pt-BR'}],
  providers: [{provide:LOCALE_ID,useValue:'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
