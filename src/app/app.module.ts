import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PagesTopComponentComponent } from './pages-top-component/pages-top-component.component';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CaruselComponent } from './carusel/carusel.component';
import { CarouselItemElement } from './carusel/carousel-item-Singledir';
import { CarouselItemDirective } from './carusel/carousel-item-dir';
import { FooterComponent } from './footer/footer.component';
import { DealOfDayComponent } from './deal-of-day/deal-of-day.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { SingleItemDirective } from './single-product/sigle-directive';
import { TrailZoomComponent } from './trail-zoom/trail-zoom.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { HttpErrorInterceptor } from './login/http-error.interceptor';
import { AuthTokenInterceptor } from './login/auth-token.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResetPasswordComponent,
    NavbarComponent,
    PagesTopComponentComponent,
    ShopComponent,
    CartComponent,
    PageNotFoundComponent,
    ImageSliderComponent,
    CaruselComponent,
    CarouselItemElement,
    CarouselItemDirective,
    FooterComponent,
    DealOfDayComponent,
    ProductsComponent,
    ProductComponent,
    SingleProductComponent,
    SingleItemDirective,
    TrailZoomComponent,
    CheckoutComponent,
    AddproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,  
    FlexLayoutModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
   MatCardModule,
   HttpClientModule,
   FormsModule,
 

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi:true
  },{
    provide: HTTP_INTERCEPTORS ,
    useClass:AuthTokenInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
