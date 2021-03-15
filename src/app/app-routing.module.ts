import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ShopComponent } from './shop/shop.component';
import { SingleProductComponent } from './single-product/single-product.component';


const routes: Routes = [
  {path: 'login',component: LoginComponent},
  {path:'resetPassword', component: ResetPasswordComponent },
  {path:'shop',component:ShopComponent},
  {path:'products',component:ProductsComponent},
  {path:'product/:id',component:SingleProductComponent},
  {path:'cart',component:CartComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'addproduct',component:AddproductComponent},
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
