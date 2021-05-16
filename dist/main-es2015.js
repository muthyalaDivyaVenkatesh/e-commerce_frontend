(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/addproduct/addproduct.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/addproduct/addproduct.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div >\r\n<form [formGroup]=\"uploadForm\" (ngSubmit)=\"submit()\" fxLayout=\"column\" fxLayoutGap=\"30px 30px\" fxLayoutAlign=\"center center\"> \r\n    <mat-form-field fxFlex=\"60\" appearance=\"legacy\">\r\n    <mat-label>Title Of Product</mat-label>\r\n    <input  matInput formControlName=\"name\" placeholder=\"Enter Your Name\">\r\n    </mat-form-field>\r\n    \r\n    <mat-form-field  fxFlex=\"60\">\r\n        <mat-label>Price</mat-label>\r\n    <input type=\"text\"  matInput formControlName=\"price\" placeholder=\"Enter Price\">\r\n     </mat-form-field>\r\n  \r\n     <mat-form-field fxFlex=\"60\">\r\n         <mat-label>Image</mat-label>\r\n    <input type=\"file\" accept=\"image/*\"  (change)=\"showPreview($event)\">\r\n    </mat-form-field>\r\n\r\n    <div class=\"imagePreview\" *ngIf=\"imageURL && imageURL !== ''\" style=\"padding:30px\" fxFlex=\"60%\">\r\n        <img [src]=\"imageURL\" [alt]=\"uploadForm.value.name\" style=\"width: 200px\">\r\n\r\n    </div>\r\n\r\n</form>\r\n</div>\r\n<button type=\"submit\"  mat-raised-button color=\"primary\">Submit</button>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- {{cartProducts.length}} we are looking at sometthing -->\r\n<!-- {{cartProducts[0] |json}} -->\r\n<div fxlayout=\"column\" fxlayoutAlign=\"center\">\r\n    <div *ngIf=\"cartProducts.length>0;else elseBlock\">\r\n    <div *ngFor=\"let list of cartProducts\">\r\n        <!-- <p>{{list}}</p> -->\r\n      <h3 style=\"padding-left: 300px;padding-top:30px;font-weight: 500;font-size:25px\">ITEM SUMMARY</h3>\r\n        <section class=\"item-list\">\r\n            <span style=\"margin-right: 40px;\" class=\"item\">Item Name : {{list.title}}</span>\r\n            <!-- <button (click)=\"decrement()\" class=\"btn btn-default\">-</button> -->\r\n            <label>Qty</label>\r\n            <input type=\"number\" name=\"Quantity\" [value]=\"cartProducts.qty || 1\" style=\"width:40px;margin-right:50px\" (change)=\"changeInQty($event)\"/>\r\n            <!-- <button class=\"btn btn-default\" (click)=\"Increment()\">+</button> -->\r\n            <span class=\"item\">Price:  {{list.price}}</span>\r\n        </section>\r\n    <button mat-button color=\"primary\" class=\"total\"  (click)=\"navigateToCheckout()\"> \r\n    <h2 >Total : {{cartProducts[0].qty * cartProducts[0].price }}</h2>\r\n</button>\r\n<br>\r\n<button  mat-raised-button (click)=\"navigateToCheckout()\" style=\"margin-left: 430px;\" color=\"primary\">\r\n    CHECKOUT\r\n</button>\r\n</div>\r\n</div>\r\n<ng-template  #elseBlock >There Is No Product IN Cart</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/carusel/carusel.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/carusel/carusel.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<section class=\"carousel-wrapper\" [ngStyle]=\"carouselWrapperStyle\" style=\"padding-left:100px\">\r\n    <ul class=\"carousel-inner\" #carousel>\r\n        <li *ngFor=\"let item of items;\" class=\"carousel-item\">\r\n            <ng-container  [ngTemplateOutlet]=\"item.tpl\"></ng-container>\r\n        </li>\r\n    </ul>\r\n</section>\r\n\r\n<div *ngIf=\"showControls\" style=\"display: none;\">\r\n     <button (click)=\"next()\">Next</button>\r\n     <button  (click)=\"prev()\">Previous</button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"checkout_parent\">\r\n<button type=\"button\" class=\"collapsible\" #collapsible>LOGIN</button>\r\n<div class=\"content\">\r\n    <p>LOGIN</p>\r\n</div>\r\n\r\n\r\n<button type=\"button\" class=\"collapsible\">DELEIVERY ADDRESS</button>\r\n<div class=\"content address\"  >\r\n    <form style=\"width:80%\" fxLayout=\"row\" fxLayoutGap=\"70px\" class=\"address\" [formGroup]=\"addressForm\" (ngSubmit)=\"onSubmit()\">\r\n    <ng-container  *ngFor=\"let name of names\">\r\n        \r\n        <mat-form-field appearance=\"legacy\" fxFlex=\"40%\"*ngIf=\"name == 'address'\" >\r\n            <mat-label>{{name}}</mat-label>\r\n            <textarea type=\"text\" matInput formControlName=\"address\"></textarea>\r\n        </mat-form-field>\r\n\r\n    <mat-form-field appearance=\"legacy\" fxFlex=\"40%\" *ngIf =\"name !== 'address'\">\r\n        <mat-label>{{name}}</mat-label>\r\n        <input type=\"text\" matInput [formControlName]=\"name\">\r\n    </mat-form-field>\r\n</ng-container>\r\n</form>\r\n<button mat-raised-button style=\"display: block;background: #fb641b;\" type=\"button\" (click)=\"onSubmit()\">SAVE AND DELIVER</button>\r\n</div>\r\n\r\n<button type=\"button\" class=\"collapsible\">ORDERSUMMARY</button>\r\n<div class=\"content order\" style=\"text-align: center;\">\r\n         <img src=\"/assets/images/name.jpg\" style=\"width:200px;padding:30px\" >\r\n         <h4 style=\"font-size: 16px;\">ProductName: getFromCart</h4>\r\n         <h4 style=\"font-size: 16px;\">Price : getFromCart</h4>\r\n  <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"proceedToCheckout()\">PROCEEDTOCHECKOUT</button>   \r\n</div>\r\n\r\n\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/deal-of-day/deal-of-day.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/deal-of-day/deal-of-day.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"deal\" >\r\n<mat-card>\r\n    <div fxLayout=\"row\">\r\n    <mat-card-header>Deal Of The Day</mat-card-header>\r\n    <mat-card-header>Time Remaining  <span>{{hours}}:{{minutes}}:{{seconds}}</span></mat-card-header>\r\n    </div>\r\n</mat-card>\r\n<mat-card-content >\r\n    <span *ngFor=\"let item of items\" fxFlex>\r\n        <img [src]=\"item\" alt=\"\" style=\"width:200px;height:200px;display: inline;\" >\r\n    </span>\r\n</mat-card-content>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\"  >\r\n    <div  style=\"padding-top:10px\">\r\n    <span>Author:-Mdvenkatesh</span>\r\n    <span style=\"padding-left: 800px;\">Mail To<a href=\"mdvenkatesh1421@gmail.com\">mdvenkatesh1421@gmail.com</a></span>\r\n    </div>\r\n</footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/image-slider/image-slider.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/image-slider/image-slider.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"container\">\r\n    <div class=\"img-container\"  *ngFor=\"let i of sliderArray; let select = index;\"\r\n         [ngClass]=\"{'selected': select == selectedIndex}\">\r\n      <img src=\"{{i.img}}\" alt=\"{{i.alt}}\" >\r\n    </div>\r\n  \r\n    </div>\r\n    <div [ngStyle]=\"{'transform': 'translateY('+ transform + '%' +')', 'transition': '.8s'}\">\r\n      <div class=\"text-container\">\r\n        <div class=\"page-text\" *ngFor=\"let i of sliderArray;let select = index;\" [ngClass]=\"{'selected': select == selectedIndex}\">\r\n          <h3>{{i.text}}</h3>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  \r\n  </div>\r\n  \r\n  <div class=\"slider\">\r\n    <div class=\"slide-button-parent-container\"  *ngFor=\"let i of sliderArray; let x =index\" (click)=\"selected(x)\" (keypress)=\"keySelected(x)\" >\r\n       <div class=\"select-box\">\r\n        <div class=\"slide-button\" [ngClass]=\"{'slide-button-select': x == selectedIndex}\" >\r\n        </div>\r\n       </div>\r\n    </div>\r\n  </div>\r\n   -->\r\n\r\n   <carousel #carousel=\"carousel\" >\r\n     <ng-container *ngFor=\"let item of items\">\r\n     <ng-container *carouselItem>\r\n       <!-- <p>{{item.title}}</p> -->\r\n       <div class=\"item\">\r\n         <img [src]=\"item.path\" alt=\"\">\r\n       </div>\r\n       </ng-container>\r\n     </ng-container>\r\n   </carousel>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div fxLayout=\"row\" fxLayoutAlign=\"center center\"  class=\"login_card\">\r\n<div class=\"card\" [@cardFlip]=\"state\">\r\n    <div class=\"face back\" >\r\n      <form  #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit($event,loginForm)\">\r\n        <div fxLayoutAlign=\"center\" fxLayout=\"column\" style=\"padding: 10px;\" class=\"form-group\">\r\n       \r\n        <h2 style=\"text-align: center\">Login</h2>\r\n        <p>{{login}}</p>\r\n        <mat-form-field >\r\n            <mat-label>Email</mat-label>\r\n            <input matInput  type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"logIn.email\">\r\n            <i  matPrefix class=\"fa  fa-envelope\"></i>\r\n\r\n          </mat-form-field >\r\n        \r\n          <mat-form-field   style=\"margin-top:20px\">\r\n            <mat-label>Password</mat-label>\r\n            <input matInput type=\"password\" class=\"form-control\"  name=\"password\" [(ngModel)]=\"logIn.password\" #password> \r\n            <i matPrefix class=\" fa fa-eye-slash\" aria-hidden=\"true\" (click)=\"password.type=password.type=='password'?'text':'password'\"></i>\r\n          </mat-form-field>\r\n \r\n          <button mat-flat-button color=\"primary\" button=\"submit\">Login</button>\r\n              <h3 style=\"text-align: center;\"><a (click)=\"cardClicked()\">New To E-Cart Plese SignIn</a></h3>\r\n               <h4 style=\"text-align: center\"><a  [routerLink]=\"['../resetPassword']\"> Forgot Password</a></h4>\r\n              \r\n         </div>\r\n        </form>\r\n    </div>\r\n\r\n    <div class=\"face front\">\r\n      <form #signinForm=ngForm (ngSubmit)=\"onSignIn($event,signinForm)\">\r\n        <div fxLayoutAlign=\"center\" fxLayout=\"column\" style=\"padding: 10px;\" class=\"form-group\">\r\n            <h2 style=\"text-align: center\">SignIn</h2>\r\n            <mat-form-field>\r\n                <mat-label>Email</mat-label>\r\n                <input matInput      name=\"signinEmail\" class=\"form-control\" [(ngModel)]=\"signIn.email\">\r\n              </mat-form-field>\r\n            \r\n              <mat-form-field>\r\n                <mat-label>Name</mat-label>\r\n                <input matInput  name=\"signinName\" class=\"form-control\" [(ngModel)]=\"signIn.name\">\r\n              </mat-form-field>\r\n\r\n              <mat-form-field >\r\n                <mat-label>Password</mat-label>\r\n                <input matInput type=\"password\" name=\"signinPassword\" class=\"form-control\" [(ngModel)]=\"signIn.password\">\r\n              </mat-form-field>\r\n     \r\n              <mat-form-field >\r\n                <mat-label>Confirm Password</mat-label>\r\n                <input matInput type=\"password\" name=\"signinConformPassword\" class=\"form-control\"  [(ngModel)]=\"signIn.password\">\r\n              </mat-form-field>\r\n\r\n              <div fxLayout=\"row\" fxLayoutGap=\"20px\">\r\n              <button mat-flat-button color=\"primary\" type=\"submit\" class=\"sigin__button\" >SignIn</button>\r\n                  <h3><a (click)=\"cardClicked()\" style=\"padding: 10px;\">Alredy User plese Login</a></h3>\r\n               </div>\r\n             </div>\r\n       </form>\r\n    </div>\r\n</div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-default\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"navbar-header\">\r\n        <a class=\"navbar-brand\" href=\"#\">E-cart</a>\r\n      </div>\r\n      <ul class=\"nav navbar-nav\">\r\n        <li class=\"active\"><a href=\"#\">Home</a></li>\r\n        <li><a [routerLink]=\"['/products']\" routerLinkActive=\"router-link-active\" >Products</a></li>\r\n        <li><a [routerLink]=\"['/addproduct']\"> Add Product</a></li>\r\n        <li><a  style=\"padding-left:800px\">\r\n          <i class=\"fa fa-shopping-cart fa-2x\" aria-hidden=\"true\" [routerLink]=\"['/cart']\" routerLinkActive=\"router-link-active\" >\r\n            <sup>1</sup>\r\n          </i>\r\n         <!-- <pre>1</pre> -->\r\n        </a></li>\r\n      </ul>\r\n    </div>\r\n  </nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 style=\"text-align: center;\">Plese Check the Route</h1>\r\n\r\n<img src=\"/assets/images/page_not_found.jpg\" alt=\"pageNotFound\" class=\"pageNotFound\"> ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages-top-component/pages-top-component.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages-top-component/pages-top-component.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>pages-top-component works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/product.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product/product.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\r\n  <div style=\"display: flex;flex-wrap: wrap; justify-content: flex-start;\" >\r\n    <section *ngFor=\"let product of products;let i=index\">\r\n  <section  style=\"max-width:250;margin-left:30px\"  (click)=\"productPage(product)\">\r\n<a>\r\n<img [src]=\"product.imageUrl\" alt=\"\" style=\"width: 240px; height: 240px;\">\r\n</a>\r\n<div class=\"section-detail\" [@moveLittle]=\"state\" (mouseenter)=\"onHover('open')\" (mouseleave)=\"onHover('close')\"  style=\"margin-bottom: 25px\">\r\n<h3 clas=\"product__name\">{{product.title}}</h3>\r\n<p>{{product.content}}</p>\r\n<h3 style=\"margin: 0px;padding:1px\">{{product.price}}</h3>\r\n</div>\r\n</section>\r\n</section>\r\n</div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/products.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"search\">\r\n <a style=\"margin-left:20px;\" [routerLink]=\"['/shop']\" routerLinkActive=\"router-link-active\"  style=\"color: white;\">MDV-CART</a>   \r\n<input type=\"text\" name=\"\" id=\"\" class=\"search__input\" placeholder=\"watch\">\r\n<i class=\"fa fa-search search__input__icon\" aria-hidden=\"true\" ></i>\r\n<button [routerLink]=\"['/login']\" mat-flat-button  style=\"margin-left:60px;padding:0 30px\">Login</button>\r\n<i class=\"fa fa-shopping-cart fa-2x\" aria-hidden=\"true\" style=\"padding-left: 300px;\" ></i>\r\n</div>\r\n\r\n<div fxLayout=\"row\">\r\n    <div fxLayout=\"column\" fxFlex=\"25\">\r\n    <section class=\"img-section\" > \r\n    <img src=\"assets/images/watch-2.jpg\" alt=\"\">\r\n    </section>\r\n    <section class=\"filter__section\">\r\n   <mat-card>\r\n       FILTERS\r\n       <hr>\r\n      <h5>CATEGORIES</h5> \r\n      <p>price</p>\r\n      <p>Insert mat-slider</p>\r\n   </mat-card>\r\n    </section>\r\n    </div>\r\n    <div fxLayout=\"column\"  fxFlex=\"70\" class=\"product-section\">\r\n     <h3>Showing 1-{{count}} of {{count}} </h3>\r\n     <section fxLayout=\"row\" fxLayoutGap=\"30px\">\r\n         <h4>Sort By</h4>\r\n         <p><a (click)=\"getByLowprice()\"> Price Low To High </a></p>\r\n         <p><a (click)=\"getByHighPrice()\">Price High To Low</a></p>\r\n     </section>\r\n     <section>\r\n         <app-product></app-product>\r\n     </section>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/reset-password/reset-password.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reset-password/reset-password.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"reset__password\">\r\n<div fxlayout=\"column\" fxLayoutAlign=\"center\" style=\"padding-top:10px\">\r\n    <div  fxLayout=\"column\"fxLayoutAlign=\"center\" style=\"padding:30px;margin-top: 100px;\">\r\n    <section>Reset password</section>   \r\n    <h4 style=\"margin-top:30px\">\r\n        Plese Enter your Email\r\n    </h4>\r\n    <section fxFlex=\"60%\">\r\n        <mat-form-field apperance=\"fill\"  style=\"width:500px\" >\r\n        <mat-label>Email</mat-label>\r\n        <input matInput  >\r\n    </mat-form-field>\r\n    <p>\r\n    <small>plese enter your Email </small>\r\n    </p>\r\n</section>\r\n    <button mat-flat-button color=\"primary\" style=\"width: 30%;\" (click)=\"resetPassword()\"> ResetPassword</button>\r\n    </div>\r\n    \r\n</div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shop/shop.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shop/shop.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"shop\">\r\n<app-navbar></app-navbar>\r\n<div class=\"shop__child\">\r\n<div class=\"subcate\" fxLayout=\"row\" fxLayoutGap=\"30px\">\r\n  <div *ngFor=\"let item of list\" fxFlex>\r\n       <div>\r\n      <span class=\"material-icons\">{{item}}</span>\r\n      </div>\r\n      <hr>\r\n  </div>\r\n</div>\r\n<div >\r\n  <app-image-slider></app-image-slider>\r\n</div>\r\n<app-deal-of-day></app-deal-of-day>\r\n<div>\r\n  <app-footer></app-footer>\r\n</div>\r\n</div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/single-product/single-product.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/single-product/single-product.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div fxLayout=\"row\"   class=\"product\" #singleProduct imageZoom>\r\n    <div fxLayout=\"column\" fxFlex=\"33%\" style=\"background-color: ivory;height: 100%;\" fxLayoutAlign=\"center center\">\r\n     <img src=\"/assets/images/name.jpg\"   alt=\"\"  #img >\r\n    </div>\r\n\r\n    <div fxLayout=\"column\" fxFlex=\"65%\" #preview>\r\n        <div id=\"preview\"></div>\r\n    </div>\r\n</div> -->\r\n\r\n<app-trail-zoom></app-trail-zoom>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/trail-zoom/trail-zoom.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/trail-zoom/trail-zoom.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\r\n<div class=\"img-zoom-container\" #imgContainer style=\"margin: 10px\" (mouseover)=\"mouseIn()\" (mouseout)=\"mouseOut()\"  style=\"display: flex;\">\r\n  <img id=\"myImage\" [src]=\"productImg\"\r\n    width=\"300\" height=\"240\" alt=\"Girl\" #image />\r\n \r\n    <div id=\"myResult\" class=\"img-zoom-result\" #result > </div>\r\n\r\n\r\n</div>\r\n<div  class=\"text-align\" style=\"width:700px;padding-left:250px;padding-top:20px ;\">\r\n  <span><b>Title</b>:{{productDetails.title}}</span>\r\n  <br>\r\n  <span><b>Price</b>:{{productDetails.price}}</span>\r\n  <br>\r\n  <span><b>Description</b>:{{productDetails.content}}</span>\r\n  \r\n  <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quibusdam id sequi? Consectetur, tenetur eum ad ullam ex necessitatibus itaque error odit ipsum dolore dolorum laboriosam dolores nulla. Earum, sint. -->\r\n</div>\r\n\r\n\r\n<button mat-flat-button color=\"primary\" class=\"cartButton\" (click)=\"moveToCart($event)\">AddToCart</button>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/addproduct/addproduct.component.scss":
/*!******************************************************!*\
  !*** ./src/app/addproduct/addproduct.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZHByb2R1Y3QvYWRkcHJvZHVjdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/addproduct/addproduct.component.ts":
/*!****************************************************!*\
  !*** ./src/app/addproduct/addproduct.component.ts ***!
  \****************************************************/
/*! exports provided: AddproductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddproductComponent", function() { return AddproductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let AddproductComponent = class AddproductComponent {
    constructor(fb) {
        this.fb = fb;
        this.uploadForm = this.fb.group({
            avatar: [null],
            name: [''],
            price: [''],
        });
    }
    ngOnInit() {
    }
    // ImagePreview
    showPreview(event) {
        // alert()
        // file
        const file = event.target.files[0];
        // uploadForm
        this.uploadForm.patchValue({
            avatar: file
        });
        //  update and validity
        this.uploadForm.get('avatar').updateValueAndValidity();
        // file preview
        const reader = new FileReader();
        reader.onload = () => {
            this.imageURL = reader.result;
            //  console.log(this.imageURL);
        };
        reader.readAsDataURL(file);
    }
    submit() {
        console.log(this.uploadForm.value);
    }
};
AddproductComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
AddproductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addproduct',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./addproduct.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/addproduct/addproduct.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./addproduct.component.scss */ "./src/app/addproduct/addproduct.component.scss")).default]
    })
], AddproductComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _addproduct_addproduct_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addproduct/addproduct.component */ "./src/app/addproduct/addproduct.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/reset-password/reset-password.component.ts");
/* harmony import */ var _shop_shop_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shop/shop.component */ "./src/app/shop/shop.component.ts");
/* harmony import */ var _single_product_single_product_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./single-product/single-product.component */ "./src/app/single-product/single-product.component.ts");












const routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'resetPassword', component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_9__["ResetPasswordComponent"] },
    { path: 'shop', component: _shop_shop_component__WEBPACK_IMPORTED_MODULE_10__["ShopComponent"] },
    { path: 'products', component: _products_products_component__WEBPACK_IMPORTED_MODULE_8__["ProductsComponent"] },
    { path: 'product/:id', component: _single_product_single_product_component__WEBPACK_IMPORTED_MODULE_11__["SingleProductComponent"] },
    { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_4__["CartComponent"] },
    { path: 'checkout', component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_5__["CheckoutComponent"] },
    { path: 'addproduct', component: _addproduct_addproduct_component__WEBPACK_IMPORTED_MODULE_3__["AddproductComponent"] },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  position: relative;\n  height: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxtZHZlbmthdGVzaFxcRG9jdW1lbnRzXFxHaXRIdWJcXGUtY29tbWVyY2VfZnJvbnRlbmQvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSx1QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxufSIsImJvZHkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'e-comerceFrontEnd';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/reset-password/reset-password.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _pages_top_component_pages_top_component_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages-top-component/pages-top-component.component */ "./src/app/pages-top-component/pages-top-component.component.ts");
/* harmony import */ var _shop_shop_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shop/shop.component */ "./src/app/shop/shop.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./image-slider/image-slider.component */ "./src/app/image-slider/image-slider.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _carusel_carusel_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./carusel/carusel.component */ "./src/app/carusel/carusel.component.ts");
/* harmony import */ var _carusel_carousel_item_Singledir__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./carusel/carousel-item-Singledir */ "./src/app/carusel/carousel-item-Singledir.ts");
/* harmony import */ var _carusel_carousel_item_dir__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./carusel/carousel-item-dir */ "./src/app/carusel/carousel-item-dir.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _deal_of_day_deal_of_day_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./deal-of-day/deal-of-day.component */ "./src/app/deal-of-day/deal-of-day.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _single_product_single_product_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./single-product/single-product.component */ "./src/app/single-product/single-product.component.ts");
/* harmony import */ var _single_product_sigle_directive__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./single-product/sigle-directive */ "./src/app/single-product/sigle-directive.ts");
/* harmony import */ var _trail_zoom_trail_zoom_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./trail-zoom/trail-zoom.component */ "./src/app/trail-zoom/trail-zoom.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _addproduct_addproduct_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./addproduct/addproduct.component */ "./src/app/addproduct/addproduct.component.ts");
/* harmony import */ var _login_http_error_interceptor__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./login/http-error.interceptor */ "./src/app/login/http-error.interceptor.ts");
/* harmony import */ var _login_auth_token_interceptor__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./login/auth-token.interceptor */ "./src/app/login/auth-token.interceptor.ts");
































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
            _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_10__["ResetPasswordComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
            _pages_top_component_pages_top_component_component__WEBPACK_IMPORTED_MODULE_12__["PagesTopComponentComponent"],
            _shop_shop_component__WEBPACK_IMPORTED_MODULE_13__["ShopComponent"],
            _cart_cart_component__WEBPACK_IMPORTED_MODULE_14__["CartComponent"],
            _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__["PageNotFoundComponent"],
            _image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_16__["ImageSliderComponent"],
            _carusel_carusel_component__WEBPACK_IMPORTED_MODULE_18__["CaruselComponent"],
            _carusel_carousel_item_Singledir__WEBPACK_IMPORTED_MODULE_19__["CarouselItemElement"],
            _carusel_carousel_item_dir__WEBPACK_IMPORTED_MODULE_20__["CarouselItemDirective"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_21__["FooterComponent"],
            _deal_of_day_deal_of_day_component__WEBPACK_IMPORTED_MODULE_22__["DealOfDayComponent"],
            _products_products_component__WEBPACK_IMPORTED_MODULE_23__["ProductsComponent"],
            _product_product_component__WEBPACK_IMPORTED_MODULE_24__["ProductComponent"],
            _single_product_single_product_component__WEBPACK_IMPORTED_MODULE_25__["SingleProductComponent"],
            _single_product_sigle_directive__WEBPACK_IMPORTED_MODULE_26__["SingleItemDirective"],
            _trail_zoom_trail_zoom_component__WEBPACK_IMPORTED_MODULE_27__["TrailZoomComponent"],
            _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_28__["CheckoutComponent"],
            _addproduct_addproduct_component__WEBPACK_IMPORTED_MODULE_29__["AddproductComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        ],
        providers: [{
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HTTP_INTERCEPTORS"],
                useClass: _login_http_error_interceptor__WEBPACK_IMPORTED_MODULE_30__["HttpErrorInterceptor"],
                multi: true
            }, {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HTTP_INTERCEPTORS"],
                useClass: _login_auth_token_interceptor__WEBPACK_IMPORTED_MODULE_31__["AuthTokenInterceptor"],
                multi: true
            }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/cart/cart.component.scss":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".item-list {\n  margin-top: 30px;\n  margin-left: 100px;\n  padding-right: 80px !important;\n  width: 800px;\n  background-color: #D3D3D3;\n  border: 5px black;\n  padding: 25px;\n  padding-left: 100px;\n  border-radius: 10px;\n  box-shadow: 5px 5px;\n}\n\n.item {\n  font-size: inherit;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bold;\n  font-size: 16px;\n  color: #212121;\n}\n\n.total {\n  margin-top: 20px;\n  margin-left: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC9DOlxcVXNlcnNcXG1kdmVua2F0ZXNoXFxEb2N1bWVudHNcXEdpdEh1YlxcZS1jb21tZXJjZV9mcm9udGVuZC9zcmNcXGFwcFxcY2FydFxcY2FydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2FydC9jYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUVBLG1CQUFBO0FDQUo7O0FERUE7RUFDSSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY2FydC9jYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW0tbGlzdHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDoxMDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDgwcHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOjgwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0QzRDNEMztcclxuICAgIGJvcmRlcjo1cHggYmxhY2s7XHJcbiAgICBwYWRkaW5nOjI1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLy8gYm94LXNoYWRvdzogO1xyXG4gICAgYm94LXNoYWRvdzo1cHggNXB4ICxcclxufVxyXG4uaXRlbSB7XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICMyMTIxMjE7XHJcbn1cclxuXHJcbi50b3RhbCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6NDAwcHhcclxufSIsIi5pdGVtLWxpc3Qge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDgwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDgwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDNEM0QzO1xuICBib3JkZXI6IDVweCBibGFjaztcbiAgcGFkZGluZzogMjVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogNXB4IDVweDtcbn1cblxuLml0ZW0ge1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzIxMjEyMTtcbn1cblxuLnRvdGFsIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDQwMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _product_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../product/product.service */ "./src/app/product/product.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");






let CartComponent = class CartComponent {
    // names
    // lists= [{item:"mixer",qty:1,price:100}]
    constructor(router, activatedRoute, productService, http) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.productService = productService;
        this.http = http;
        this.cartProducts = [];
        this.lists = [];
        // this.checkCart()
    }
    ngOnInit() {
        this.checkCart();
    }
    ngOnChange(change) {
    }
    ngAfterViewInit() {
    }
    navigateToCheckout() {
        this.router.navigateByUrl('/checkout');
    }
    checkCart() {
        // this.router.getCurrentNavigation().extras.state.productDeatils
        console.log(history.state.productDeatils, "ssssssssssss");
        history.state.productDeatils ? this.cartProducts.push(Object.assign({}, history.state.productDeatils)) : '';
        console.log("we are Inside the cart", this.cartProducts[0]);
        if (history.state.productDeatils) {
            console.log("If present go Inside");
            this.http.post(_config__WEBPACK_IMPORTED_MODULE_4__["Config"].URLS.cart, this.cartProducts).subscribe((val) => {
                console.log(val, "weeeeeeeee");
            });
        }
        // this.productService.cart$.subscribe(cart =>{
        //   this.cartProducts.push({...cart})
        //   alert()
        //   this.lists = this.cartProducts.map(val => val)
        //   console.log("we are inside the Cart",cart,this.cartProducts)
        // })
        console.log("0000000000000000000000000000000000000000000000000000000000", this.cartProducts);
    }
    changeInQty(e) {
        console.log("we are inside the Change in Qty", e.target.value);
        this.cartProducts[0].qty = e.target.value;
    }
};
CartComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _product_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
];
CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cart.component.scss */ "./src/app/cart/cart.component.scss")).default]
    })
], CartComponent);



/***/ }),

/***/ "./src/app/carusel/carousel-item-Singledir.ts":
/*!****************************************************!*\
  !*** ./src/app/carusel/carousel-item-Singledir.ts ***!
  \****************************************************/
/*! exports provided: CarouselItemElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselItemElement", function() { return CarouselItemElement; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CarouselItemElement = class CarouselItemElement {
};
CarouselItemElement = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '.carousel-item'
    })
], CarouselItemElement);



/***/ }),

/***/ "./src/app/carusel/carousel-item-dir.ts":
/*!**********************************************!*\
  !*** ./src/app/carusel/carousel-item-dir.ts ***!
  \**********************************************/
/*! exports provided: CarouselItemDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselItemDirective", function() { return CarouselItemDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CarouselItemDirective = class CarouselItemDirective {
    constructor(tpl) {
        this.tpl = tpl;
    }
};
CarouselItemDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }
];
CarouselItemDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[carouselItem]'
    })
], CarouselItemDirective);



/***/ }),

/***/ "./src/app/carusel/carusel.component.scss":
/*!************************************************!*\
  !*** ./src/app/carusel/carusel.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".carousel-wrapper {\n  overflow: hidden !important;\n}\n\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  width: 300px !important;\n}\n\n.carousel-inner {\n  display: flex;\n}\n\n.item {\n  padding: 0;\n  width: 500px;\n  height: 500px;\n  color: #fff;\n  font-size: 50px;\n  line-height: 300px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydXNlbC9DOlxcVXNlcnNcXG1kdmVua2F0ZXNoXFxEb2N1bWVudHNcXEdpdEh1YlxcZS1jb21tZXJjZV9mcm9udGVuZC9zcmNcXGFwcFxcY2FydXNlbFxcY2FydXNlbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2FydXNlbC9jYXJ1c2VsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtBQ0NKOztBREdBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9jYXJ1c2VsL2NhcnVzZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2Fyb3VzZWwtd3JhcHBlciB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBtYXJnaW46MDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aWR0aDozMDBweCAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1pbm5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLy8gb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaXRlbSB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH0iLCIuY2Fyb3VzZWwtd3JhcHBlciB7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbn1cblxudWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAzMDBweCAhaW1wb3J0YW50O1xufVxuXG4uY2Fyb3VzZWwtaW5uZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uaXRlbSB7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiA1MDBweDtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgbGluZS1oZWlnaHQ6IDMwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/carusel/carusel.component.ts":
/*!**********************************************!*\
  !*** ./src/app/carusel/carusel.component.ts ***!
  \**********************************************/
/*! exports provided: CaruselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaruselComponent", function() { return CaruselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _carousel_item_dir__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carousel-item-dir */ "./src/app/carusel/carousel-item-dir.ts");
/* harmony import */ var _carousel_item_Singledir__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./carousel-item-Singledir */ "./src/app/carusel/carousel-item-Singledir.ts");





let CaruselComponent = class CaruselComponent {
    constructor(builder) {
        this.builder = builder;
        this.timing = '250ms ease-in';
        this.showControls = true;
        this.carouselWrapperStyle = {};
        this.currentSlide = 0;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        setTimeout(() => {
            console.log(this.itemsElements);
            console.log(this.items);
            this.itemWidth = this.itemsElements.first.nativeElement.getBoundingClientRect().width;
            this.carouselWrapperStyle = {
                width: `${this.itemWidth}px`
            };
            console.log(this.itemWidth);
        });
        setInterval(() => {
            this.next();
        }, 5000);
    }
    next() {
        // if (this.currentSlide+1 == 3) 
        this.currentSlide = (this.currentSlide + 1) % this.items.length;
        const offset = this.currentSlide * this.itemWidth;
        const myAnimation = this.builder.build([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(this.timing, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: `translateX(-${offset}px)` }))
        ]);
        this.player = myAnimation.create(this.carousel.nativeElement);
        this.player.play();
        if (this.currentSlide + 1 === this.items.length)
            this.currentSlide = 0;
        // if(this.currentSlide +1 === this.items.length) this.prev()
    }
    // prev
    prev() {
        if (this.currentSlide == 0)
            return;
        this.currentSlide = ((this.currentSlide - 1) + this.items.length) % this.items.length;
        const offset = this.currentSlide * this.itemWidth;
        const myAnimation = this.builder.build([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(this.timing, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: `translateX(-${offset}px)` }))
        ]);
        console.log(`translateX(-${offset}px)`);
        this.player = myAnimation.create(this.carousel.nativeElement);
        this.player.play();
    }
};
CaruselComponent.ctorParameters = () => [
    { type: _angular_animations__WEBPACK_IMPORTED_MODULE_1__["AnimationBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('carousel', { static: false })
], CaruselComponent.prototype, "carousel", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], CaruselComponent.prototype, "timing", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], CaruselComponent.prototype, "showControls", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"])(_carousel_item_dir__WEBPACK_IMPORTED_MODULE_3__["CarouselItemDirective"])
], CaruselComponent.prototype, "items", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChildren"])(_carousel_item_Singledir__WEBPACK_IMPORTED_MODULE_4__["CarouselItemElement"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] })
], CaruselComponent.prototype, "itemsElements", void 0);
CaruselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'carousel',
        exportAs: 'carousel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./carusel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/carusel/carusel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./carusel.component.scss */ "./src/app/carusel/carusel.component.scss")).default]
    })
], CaruselComponent);



/***/ }),

/***/ "./src/app/checkout/checkout.component.scss":
/*!**************************************************!*\
  !*** ./src/app/checkout/checkout.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.collapsible {\n  margin-top: 10px;\n  background-color: #2874f0;\n  color: white;\n  cursor: pointer;\n  padding: 18px;\n  width: 100%;\n  border: none;\n  text-align: left;\n  outline: none;\n  font-size: 15px;\n}\n.active, .collapsible:hover {\n  background-color: #2874f0;\n}\n.address__content {\n  font-weight: 500;\n  font-family: Roboto, Arial, sans-serif;\n  color: #2874f0;\n}\n.content {\n  padding: 0 18px;\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.2s ease-out;\n}\n.collapsible:after {\n  content: \"➕\";\n  /* Unicode character for \"plus\" sign (+) */\n  font-size: 13px;\n  color: white;\n  float: right;\n  margin-left: 5px;\n}\n.active:after {\n  content: \"➖\";\n  /* Unicode character for \"minus\" sign (-) */\n}\n.address__content > mat-form-field {\n  flex: 0 50%;\n}\n.address {\n  flex-wrap: wrap;\n}\n.checkout_parent {\n  width: 80%;\n  margin-left: 10%;\n  margin-right: 10%;\n  background: #f1f3f6;\n  margin-top: 5%;\n  background-color: aliceblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NoZWNrb3V0L0M6XFxVc2Vyc1xcbWR2ZW5rYXRlc2hcXERvY3VtZW50c1xcR2l0SHViXFxlLWNvbW1lcmNlX2Zyb250ZW5kL3NyY1xcYXBwXFxjaGVja291dFxcY2hlY2tvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBREVKO0FDQ0E7RUFDSSx5QkFBQTtBREVKO0FDRUE7RUFDSSxnQkFBQTtFQUNBLHNDQUFBO0VBQ0EsY0FBQTtBRENKO0FDRUE7RUFDSSxlQUFBO0VBRUYsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7QURBRjtBQ0tBO0VBQ0ksWUFBQTtFQUFtQiwwQ0FBQTtFQUNuQixlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBRERKO0FDSUU7RUFDRSxZQUFBO0VBQWtCLDJDQUFBO0FEQXRCO0FDR0U7RUFDSSxXQUFBO0FEQU47QUNTRTtFQUNJLGVBQUE7QUROTjtBQ1NFO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtBRE5OIiwiZmlsZSI6InNyYy9hcHAvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY29sbGFwc2libGUge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjg3NGYwO1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMThweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uYWN0aXZlLCAuY29sbGFwc2libGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjg3NGYwO1xufVxuXG4uYWRkcmVzc19fY29udGVudCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzI4NzRmMDtcbn1cblxuLmNvbnRlbnQge1xuICBwYWRkaW5nOiAwIDE4cHg7XG4gIG1heC1oZWlnaHQ6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4ycyBlYXNlLW91dDtcbn1cblxuLmNvbGxhcHNpYmxlOmFmdGVyIHtcbiAgY29udGVudDogXCLinpVcIjtcbiAgLyogVW5pY29kZSBjaGFyYWN0ZXIgZm9yIFwicGx1c1wiIHNpZ24gKCspICovXG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5hY3RpdmU6YWZ0ZXIge1xuICBjb250ZW50OiBcIuKellwiO1xuICAvKiBVbmljb2RlIGNoYXJhY3RlciBmb3IgXCJtaW51c1wiIHNpZ24gKC0pICovXG59XG5cbi5hZGRyZXNzX19jb250ZW50ID4gbWF0LWZvcm0tZmllbGQge1xuICBmbGV4OiAwIDUwJTtcbn1cblxuLmFkZHJlc3Mge1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5jaGVja291dF9wYXJlbnQge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW4tbGVmdDogMTAlO1xuICBtYXJnaW4tcmlnaHQ6IDEwJTtcbiAgYmFja2dyb3VuZDogI2YxZjNmNjtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcbn0iLCIuY29sbGFwc2libGUge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODc0ZjA7XHJcbiAgICBjb2xvciA6IHdoaXRlO1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxOHB4O1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi5hY3RpdmUsLmNvbGxhcHNpYmxlOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODc0ZjA7XHJcbn1cclxuXHJcblxyXG4uYWRkcmVzc19fY29udGVudHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLEFyaWFsLHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzI4NzRmMDtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMCAxOHB4O1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYzZjY7XHJcbiAgbWF4LWhlaWdodDogMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4ycyBlYXNlLW91dDtcclxuXHJcbn1cclxuXHJcblxyXG4uY29sbGFwc2libGU6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJ1xcMDI3OTUnOyAvKiBVbmljb2RlIGNoYXJhY3RlciBmb3IgXCJwbHVzXCIgc2lnbiAoKykgKi9cclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5hY3RpdmU6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcXDI3OTZcIjsgLyogVW5pY29kZSBjaGFyYWN0ZXIgZm9yIFwibWludXNcIiBzaWduICgtKSAqL1xyXG4gIH1cclxuXHJcbiAgLmFkZHJlc3NfX2NvbnRlbnQgPiBtYXQtZm9ybS1maWVsZCB7XHJcbiAgICAgIGZsZXg6MCA1MCVcclxuICB9XHJcblxyXG5cclxuICAub3JkZXJ7XHJcbiAgICAvLyAgIHBhZGRpbmc6MjBweDtcclxuICAgIC8vICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xyXG4gIH1cclxuXHJcbiAgLmFkZHJlc3N7XHJcbiAgICAgIGZsZXgtd3JhcDp3cmFwO1xyXG4gIH1cclxuXHJcbiAgLmNoZWNrb3V0X3BhcmVudHtcclxuICAgICAgd2lkdGg6ODAlO1xyXG4gICAgICBtYXJnaW4tbGVmdDoxMCU7XHJcbiAgICAgIG1hcmdpbi1yaWdodDoxMCU7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmMWYzZjY7XHJcbiAgICAgIG1hcmdpbi10b3A6NSU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxuICB9XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/checkout/checkout.component.ts":
/*!************************************************!*\
  !*** ./src/app/checkout/checkout.component.ts ***!
  \************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");






let CheckoutComponent = class CheckoutComponent {
    constructor(elem, renderer, http) {
        this.elem = elem;
        this.renderer = renderer;
        this.http = http;
        this.names = ['name', 'mobileNo', 'pincode', 'locality', 'address', 'city', 'state', 'landMark'];
        this.listenFn = {};
    }
    ngOnInit() {
        this.getCart();
        this.addFormFields();
    }
    ngAfterViewInit() {
        this.showCollapsible();
        this.showOrder();
    }
    showCollapsible() {
        let collapsible = this.elem.nativeElement.querySelectorAll('.collapsible');
        console.log("we  are inside collapsibe", collapsible[0]);
        // for  loop
        for (let i = 0; i < collapsible.length; i++) {
            // this.listenFn = {  collapsible[i]}
            collapsible[i].addEventListener('click', function () {
                this.classList.toggle("active");
                // console.log(this.classList)
                var content = this.nextElementSibling;
                console.log("we are inside the content", content);
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                }
                else {
                    // console.log("whhat is this scrollHeight",content.scrollHeight)
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            });
        }
    }
    addFormFields() {
        this.addressForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            mobileNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            pincode: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            locality: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            landMark: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
    }
    proceedToCheckout() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: "Thanks for Buying",
            text: "Hope see you again",
        });
    }
    onSubmit() {
        // alert()
        console.log(this.addressForm.value);
        this.http.post(_config__WEBPACK_IMPORTED_MODULE_5__["Config"].URLS.getAddress, this.addressForm.value).subscribe((val) => {
            // console.log(this.collapsible.maxHeight)
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                title: "Thanks Your Address is Saved",
                text: "We make Sure Your Shipment will be succefull",
            });
        });
    }
    showOrder() {
        console.log("we are seeing the Order");
        this.http.get(_config__WEBPACK_IMPORTED_MODULE_5__["Config"].URLS.getOrders).subscribe((val) => {
            console.log(val, "we are seeing orders");
        });
    }
    getCart() {
        // Bingo 
        console.log("we are inside the getCart");
    }
    ngOnDestroy() {
        if (this.listenFn) {
        }
    }
};
CheckoutComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('collapsible', { static: true })
], CheckoutComponent.prototype, "collapsible", void 0);
CheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-checkout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./checkout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./checkout.component.scss */ "./src/app/checkout/checkout.component.scss")).default]
    })
], CheckoutComponent);



/***/ }),

/***/ "./src/app/config.ts":
/*!***************************!*\
  !*** ./src/app/config.ts ***!
  \***************************/
/*! exports provided: Config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return Config; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Config {
}
Config.ROOT = 'http://localhost:3000';
Config.URLS = {
    signIn: Config.ROOT + '/auth/signin',
    logIn: Config.ROOT + '/auth/login',
    products: Config.ROOT + '/products',
    images: Config.ROOT + '/static/',
    singleProduct: Config.ROOT + '/product/:id',
    cart: Config.ROOT + '/add-cart',
    getCart: Config.ROOT + '/add-cart',
    getOrders: Config.ROOT + '/orders',
    getAddress: Config.ROOT + '/address'
};


/***/ }),

/***/ "./src/app/deal-of-day/deal-of-day.component.scss":
/*!********************************************************!*\
  !*** ./src/app/deal-of-day/deal-of-day.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".deal {\n  padding: 1px;\n  margin-top: 50px;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVhbC1vZi1kYXkvQzpcXFVzZXJzXFxtZHZlbmthdGVzaFxcRG9jdW1lbnRzXFxHaXRIdWJcXGUtY29tbWVyY2VfZnJvbnRlbmQvc3JjXFxhcHBcXGRlYWwtb2YtZGF5XFxkZWFsLW9mLWRheS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGVhbC1vZi1kYXkvZGVhbC1vZi1kYXkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZGVhbC1vZi1kYXkvZGVhbC1vZi1kYXkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVhbCB7XHJcbiAgICBwYWRkaW5nOjFweDtcclxuICAgIG1hcmdpbi10b3A6NTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufSIsIi5kZWFsIHtcbiAgcGFkZGluZzogMXB4O1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/deal-of-day/deal-of-day.component.ts":
/*!******************************************************!*\
  !*** ./src/app/deal-of-day/deal-of-day.component.ts ***!
  \******************************************************/
/*! exports provided: DealOfDayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealOfDayComponent", function() { return DealOfDayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DealOfDayComponent = class DealOfDayComponent {
    constructor() {
        this.items = ['/assets/images/captain.jpg', '/assets/images/name.jpg', '/assets/images/wood.jpeg', '/assets/images/page_not_found.jpg'];
        this.deadline = new Date(Date.now() + 86400000);
    }
    ngOnInit() {
        this.getTimeRemaining();
    }
    getTimeRemaining() {
        setInterval(() => {
            const presetDate = new Date().toString();
            const total = Date.parse(this.deadline) - Date.parse(presetDate);
            this.seconds = Math.floor((total / 1000) % 60);
            this.minutes = Math.floor((total / 1000 / 60) % 60);
            this.hours = Math.floor((total / (1000 * 60 * 60) % 24));
            this.days = Math.floor(total / (100 * 60 * 60 * 24));
        }, 1000);
    }
};
DealOfDayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-deal-of-day',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./deal-of-day.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/deal-of-day/deal-of-day.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./deal-of-day.component.scss */ "./src/app/deal-of-day/deal-of-day.component.scss")).default]
    })
], DealOfDayComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer {\n  bottom: 0;\n  width: 100%;\n  height: 5rem;\n  background-color: #212121;\n  color: white;\n  font-family: Roboto, Arial, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0M6XFxVc2Vyc1xcbWR2ZW5rYXRlc2hcXERvY3VtZW50c1xcR2l0SHViXFxlLWNvbW1lcmNlX2Zyb250ZW5kL3NyY1xcYXBwXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHNDQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XHJcbiAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNXJlbTsgICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMyMTIxMjE7ICAgIFxyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90byxBcmlhbCxzYW5zLXNlcmlmOyAgICBcclxufSIsIi5mb290ZXIge1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgQXJpYWwsIHNhbnMtc2VyaWY7XG59Il19 */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/image-slider/data.service.ts":
/*!**********************************************!*\
  !*** ./src/app/image-slider/data.service.ts ***!
  \**********************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



const URL = "../assets/data.json";
let DataService = class DataService {
    // http
    constructor(http) {
        this.http = http;
    }
    getData() {
        return this.http.get(URL);
    }
};
DataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ "./src/app/image-slider/image-slider.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/image-slider/image-slider.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  height: 100%;\n}\n\n.item {\n  padding: 1;\n  width: 800px;\n  height: 300px;\n  background-color: blue !important;\n  color: #fff;\n  font-size: 50px;\n  line-height: 300px;\n  text-align: center;\n  margin-left: 150px;\n  margin-right: 100px;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW1hZ2Utc2xpZGVyL0M6XFxVc2Vyc1xcbWR2ZW5rYXRlc2hcXERvY3VtZW50c1xcR2l0SHViXFxlLWNvbW1lcmNlX2Zyb250ZW5kL3NyY1xcYXBwXFxpbWFnZS1zbGlkZXJcXGltYWdlLXNsaWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaW1hZ2Utc2xpZGVyL2ltYWdlLXNsaWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRkE7RUFDRSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNwRkY7O0FEdUZBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNwRkYiLCJmaWxlIjoic3JjL2FwcC9pbWFnZS1zbGlkZXIvaW1hZ2Utc2xpZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4vLyBpbWcge1xyXG4vLyAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4vLyAgIH1cclxuICBcclxuLy8gICAuY29udGFpbmVyIHtcclxuLy8gICAgIGhlaWdodDoxMDAlO1xyXG4vLyAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuLy8gICB9XHJcbiAgXHJcbi8vICAgLmltZy1jb250YWluZXIge1xyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgbGVmdDogMDtcclxuLy8gICAgIG9wYWNpdHk6IDA7XHJcbi8vICAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuLy8gICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbi8vICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbi8vICAgICB3aWxsLWNoYW5nZTogb3BhY2l0eTtcclxuLy8gICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjNzO1xyXG4vLyAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4vLyAgIH1cclxuICBcclxuICBcclxuICBcclxuLy8gICAuc2xpZGUtYnV0dG9uOmhvdmVyLCAuc2xpZGUtYnV0dG9uLXNlbGVjdCB7XHJcbi8vICAgICB3aWR0aDogNjRweCAhaW1wb3J0YW50O1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwxKSAhaW1wb3J0YW50O1xyXG4vLyAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbi8vICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC40cywgd2lkdGggNHMgY3ViaWMtYmV6aWVyKDAuMTkwLCAxLjAwMCwgMC4yMjAsIDEuMDAwKSAhaW1wb3J0YW50O1xyXG4vLyAgIH1cclxuICBcclxuICBcclxuLy8gICAuc2xpZGUtYnV0dG9uIHtcclxuLy8gICAgIHdpZHRoOiAzMHB4O1xyXG4vLyAgICAgaGVpZ2h0OiA0cHg7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC41KTtcclxuLy8gICAgIGN1cnNvcjogcG9pbnRlcjtcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBcclxuLy8gICB9XHJcbiAgXHJcbi8vICAgLnNsaWRlciB7XHJcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICB0b3A6IDUwJTtcclxuLy8gICAgIHJpZ2h0OiA4MHB4O1xyXG4vLyAgICAgb3BhY2l0eTogMTtcclxuLy8gICAgIG1pbi13aWR0aDogMzBweDtcclxuICBcclxuLy8gICB9XHJcbiAgXHJcbi8vICAgLnNsaWRlLWJ1dHRvbi1wYXJlbnQtY29udGFpbmVyIHtcclxuLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gICAgIG1hcmdpbjogMjJweCAwO1xyXG4vLyAgICAgbWluLWhlaWdodDogNHB4O1xyXG4vLyAgIH1cclxuICBcclxuLy8gICAuc2VsZWN0LWJveCB7XHJcbi8vICAgICBtaW4taGVpZ2h0OiAxMHB4O1xyXG4vLyAgIH1cclxuICBcclxuLy8gICAudGV4dC1jb250YWluZXIge1xyXG4gIFxyXG4vLyAgICAgaGVpZ2h0OiAxMDB2aDtcclxuLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4vLyAgIH1cclxuICBcclxuLy8gICAucGFnZS10ZXh0IHtcclxuLy8gICAgIG1pbi1oZWlnaHQ6IDM3M3B4O1xyXG4vLyAgICAgd2lkdGg6IDUwJTtcclxuLy8gICAgIGhlaWdodDogMTAwJTtcclxuLy8gICAgIG9wYWNpdHk6IDA7XHJcbi8vICAgICBmb250LXdlaWdodDogMzAwO1xyXG4vLyAgICAgZm9udC1zaXplOiA5MHB4O1xyXG4vLyAgICAgY29sb3I6IHdoaXRlO1xyXG4vLyAgIH1cclxuICBcclxuLy8gICAuc2VsZWN0ZWQge1xyXG4vLyAgICAgb3BhY2l0eTogMTtcclxuLy8gICAgIHRyYW5zaXRpb246IDFzO1xyXG4vLyAgIH1cclxuXHJcbmltZyB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbiAgXHJcbi5pdGVtIHtcclxuICBwYWRkaW5nOiAxO1xyXG4gIHdpZHRoOiA4MDBweDtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6Ymx1ZSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxuICBsaW5lLWhlaWdodDogMzAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiAxNTBweDtcclxuICBtYXJnaW4tcmlnaHQ6MTAwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuXHJcbn0iLCJpbWcge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5pdGVtIHtcbiAgcGFkZGluZzogMTtcbiAgd2lkdGg6IDgwMHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDUwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMTUwcHg7XG4gIG1hcmdpbi1yaWdodDogMTAwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/image-slider/image-slider.component.ts":
/*!********************************************************!*\
  !*** ./src/app/image-slider/image-slider.component.ts ***!
  \********************************************************/
/*! exports provided: ImageSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageSliderComponent", function() { return ImageSliderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "./src/app/image-slider/data.service.ts");



let ImageSliderComponent = class ImageSliderComponent {
    constructor(data) {
        this.data = data;
        this.items = [
            { path: '/assets/images/phone.jpg' },
            { path: '/assets/images/phone.jpg' },
            { path: '/assets/images/phone.jpg' }
        ];
        this.sliderArray = [];
    }
    ngOnInit() {
        this.data.getData().subscribe((result) => {
            console.log(typeof result);
            this.sliderArray = [
                { "img": "http://bloquo.cc/img/works/1.jpg", "alt": "", "text": "365 Days Of weddings a year" },
                { "img": "http://bloquo.cc/img/works/2.jpg", "alt": "", "text": "365 Days Of weddings a year" },
                { "img": "http://bloquo.cc/img/works/3.jpg", "alt": "", "text": "365 Days Of weddings a year" },
                { "img": "http://bloquo.cc/img/works/4.jpg", "alt": "", "text": "365 Days Of weddings a year" },
                { "img": "http://bloquo.cc/img/works/5.jpg", "alt": "", "text": "365 Days Of weddings a year" }
            ];
        });
    }
};
ImageSliderComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
];
ImageSliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-image-slider',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./image-slider.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/image-slider/image-slider.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].ShadowDom,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./image-slider.component.scss */ "./src/app/image-slider/image-slider.component.scss")).default]
    })
], ImageSliderComponent);



/***/ }),

/***/ "./src/app/login/auth-token.interceptor.ts":
/*!*************************************************!*\
  !*** ./src/app/login/auth-token.interceptor.ts ***!
  \*************************************************/
/*! exports provided: AuthTokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthTokenInterceptor", function() { return AuthTokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AuthTokenInterceptor = class AuthTokenInterceptor {
    constructor() { }
    intercept(req, next) {
        const token = localStorage.getItem('shop-token');
        // console.log("we are seeing the Token",token,req.headers.InterceptorSkipHeader)
        // if(req.headers['InterceptorSkipHeader']){
        //     return next.handle(req)
        // }
        console.log("we are inside Intercept");
        req = req.clone({
            setHeaders: {
                'Authorization': `Bearer ${token}`
            }
        });
        return next.handle(req);
    }
};
AuthTokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthTokenInterceptor);



/***/ }),

/***/ "./src/app/login/http-error.interceptor.ts":
/*!*************************************************!*\
  !*** ./src/app/login/http-error.interceptor.ts ***!
  \*************************************************/
/*! exports provided: HttpErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorInterceptor", function() { return HttpErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);




class HttpErrorInterceptor {
    // constructor(swa:Sw)
    intercept(request, next) {
        return next.handle(request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => {
            console.log("sssssssss", error);
            let errorMessage = '';
            if (error.error instanceof ErrorEvent) {
                // clientSide error
                errorMessage = `Error ${error.error.message};
                        }`;
            }
            else {
                // serverSide Error
                errorMessage = `Error code:${error.status}\nMessage:${error.message}`;
            }
            if (error.status == 409) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Failed', 'Account Creation Failed', 'error');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
            }
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Failed', errorMessage, 'error');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
        }));
    }
}


/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n  perspective: 600px;\n  background-image: url(\"/assets/images/signin.jpg\") !important;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 100%;\n}\n\n.card {\n  box-shadow: 10px 10px 43px -18px rgba(0, 0, 0, 0.75);\n  border-radius: 5px;\n  height: 500px;\n  width: 500px;\n  cursor: pointer;\n  position: relative;\n  transform-style: preserve-3d;\n}\n\n.face {\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border-radius: inherit;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n\n.front {\n  transform: rotateY(180deg);\n  background-image: url(\"/assets/images/buddy.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.back {\n  background-image: url(\"/assets/images/plain.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.nav {\n  width: 100%;\n  position: fixed;\n  background-color: blanchedalmond;\n  height: 40px;\n  text-align: center;\n  font-family: \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n\n.login_card {\n  padding-top: 40px;\n}\n\n.nav__link {\n  font-weight: 10px;\n  font-size: 22px !important;\n  color: #87CEFA;\n}\n\n.sigin__button {\n  width: 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxtZHZlbmthdGVzaFxcRG9jdW1lbnRzXFxHaXRIdWJcXGUtY29tbWVyY2VfZnJvbnRlbmQvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSw2REFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDQUo7O0FER0E7RUFDSSxvREFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtBQ0FKOztBRElBO0VBQ0csY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7QUNESDs7QURPQTtFQUNJLDBCQUFBO0VBQ0EsaURBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDSko7O0FET0E7RUFDSSxpREFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUNKSjs7QURPQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzREFBQTtBQ0pKOztBRE9BO0VBQ1EsaUJBQUE7QUNKUjs7QURPQTtFQUNHLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0FDSkg7O0FEUUE7RUFDSSxVQUFBO0FDTEoiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG46aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBlcnNwZWN0aXZlOiA2MDBweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvc2lnbmluLmpwZycpICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDQzcHggLTE4cHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGhlaWdodDo1MDBweCA7XHJcbiAgICB3aWR0aDo1MDBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbn1cclxuXHJcblxyXG4uZmFjZSB7XHJcbiAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgIHdpZHRoOiAxMDAlO1xyXG4gICBoZWlnaHQ6IDEwMCU7XHJcbiAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XHJcbiAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuLmZyb250IHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvYnVkZHkuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5iYWNrIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL3BsYWluLmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4ubmF2IHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsYW5jaGVkYWxtb25kO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmxvZ2luX2NhcmQge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOjQwcHhcclxufVxyXG5cclxuLm5hdl9fbGlua3tcclxuICAgZm9udC13ZWlnaHQ6IDEwcHg7XHJcbiAgIGZvbnQtc2l6ZTogMjJweCAhaW1wb3J0YW50O1xyXG4gICBjb2xvcjogIzg3Q0VGQTtcclxufVxyXG5cclxuXHJcbi5zaWdpbl9fYnV0dG9ue1xyXG4gICAgd2lkdGg6IDIwJTtcclxufSIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBlcnNwZWN0aXZlOiA2MDBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvc2lnbmluLmpwZ1wiKSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jYXJkIHtcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDQzcHggLTE4cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBoZWlnaHQ6IDUwMHB4O1xuICB3aWR0aDogNTAwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xufVxuXG4uZmFjZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmZyb250IHtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2J1ZGR5LmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmJhY2sge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9wbGFpbi5qcGdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5uYXYge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFuY2hlZGFsbW9uZDtcbiAgaGVpZ2h0OiA0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5sb2dpbl9jYXJkIHtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG59XG5cbi5uYXZfX2xpbmsge1xuICBmb250LXdlaWdodDogMTBweDtcbiAgZm9udC1zaXplOiAyMnB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjODdDRUZBO1xufVxuXG4uc2lnaW5fX2J1dHRvbiB7XG4gIHdpZHRoOiAyMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _signin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signin */ "./src/app/login/signin.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login */ "./src/app/login/login.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");










let LoginComponent = class LoginComponent {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.state = 'default';
        this.frontLink = "/assets/images/captain.jpg";
        this.backLink = "/assets/images/name.jpg";
        this.signIn = new _signin__WEBPACK_IMPORTED_MODULE_4__["Signin"]('test', 'test@test.com', 'test', 'test');
        this.logIn = new _login__WEBPACK_IMPORTED_MODULE_5__["Login"]('test@test.com', 'test');
    }
    ngOnInit() {
        console.log(this.logIn);
        console.log(this.signIn);
        console.log("we are seeing the headers", this.headers);
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('hi...', 'i have given you test Email for procedding,Fell Free to use your own Email and SignIn', 'warning');
    }
    cardClicked() {
        console.log("card clicked Sucessfully", this.state);
        if (this.state == 'default') {
            this.state = 'flipped';
        }
        else {
            this.state = 'default';
        }
    }
    onLogin(event, authObj) {
        console.log(event);
    }
    onSignIn(event, authObj) {
        event.stopPropagation();
        console.log("we are inside SignIn", _config__WEBPACK_IMPORTED_MODULE_3__["Config"].URLS.signIn, authObj.value);
        let signIn = {
            "name": authObj.value.signinName,
            "email": authObj.value.signinEmail,
            "password": authObj.value.signinPassword
        };
        if (authObj.value.signinPassword.toString() == authObj.value.signinConformPassword.toString()) {
            this.InterceptorSkipHeader = 'X-Skip-Interceptor';
            this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]().set('InterceptorSkipHeader', this.InterceptorSkipHeader);
            console.log("we are looking into", authObj);
            this.http.post(_config__WEBPACK_IMPORTED_MODULE_3__["Config"].URLS.signIn, signIn, { headers: this.headers }).subscribe((val) => {
                // alert(val)
                console.log(val);
                if (val.StatusCode == 200) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Success', 'your Account Is Created SuccessFull', 'success').then((value) => {
                        this.router.navigateByUrl('/login');
                    });
                }
            });
        }
    }
    onSubmit(e, loginDetails) {
        e.stopPropagation();
        console.log("we re inside submit");
        console.log("we are inside loginDetails", loginDetails.value);
        let login = {
            "email": loginDetails.value.email,
            "password": loginDetails.value.password
        };
        this.InterceptorSkipHeader = 'X-Skip-Interceptor';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]().set('InterceptorSkipHeader', this.InterceptorSkipHeader);
        console.log("we are inside SkipHeaders", this.InterceptorSkipHeader);
        this.http.post(_config__WEBPACK_IMPORTED_MODULE_3__["Config"].URLS.logIn, login, { headers: this.headers }).subscribe((val) => {
            console.log("we are inside the Val", val);
            localStorage.setItem('shop-token', val['token']);
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Success', 'You have Succesfully Loggedin', 'success').then((val) => {
                console.log(val['token']);
                //  store in local Storage 
                this.router.navigateByUrl('/shop');
            });
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('cardFlip', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('default', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    transform: 'none',
                    height: '350px'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('flipped', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    transform: 'rotateY(180deg)',
                    height: '400px'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('default => flipped', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms')
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('flipped => default', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms')
                ])
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/login/login.ts":
/*!********************************!*\
  !*** ./src/app/login/login.ts ***!
  \********************************/
/*! exports provided: Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Login {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
}


/***/ }),

/***/ "./src/app/login/signin.ts":
/*!*********************************!*\
  !*** ./src/app/login/signin.ts ***!
  \*********************************/
/*! exports provided: Signin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signin", function() { return Signin; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Signin {
    constructor(name, email, password, conformPassword) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.conformPassword = conformPassword;
    }
}


/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavbarComponent = class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pageNotFound {\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 600px;\n  width: 600px;\n  margin-left: 300px !important;\n  background-image: url(\"/assets/images/page_not_found.jpg\") !important;\n  background: oldlace;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1ub3QtZm91bmQvQzpcXFVzZXJzXFxtZHZlbmthdGVzaFxcRG9jdW1lbnRzXFxHaXRIdWJcXGUtY29tbWVyY2VfZnJvbnRlbmQvc3JjXFxhcHBcXHBhZ2Utbm90LWZvdW5kXFxwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLHFFQUFBO0VBQ0EsbUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2VOb3RGb3VuZHtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgaGVpZ2h0OiA2MDBweDtcclxuICAgIHdpZHRoOiA2MDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMDBweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9wYWdlX25vdF9mb3VuZC5qcGcnKSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDpvbGRsYWNlXHJcbn0iLCIucGFnZU5vdEZvdW5kIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgaGVpZ2h0OiA2MDBweDtcbiAgd2lkdGg6IDYwMHB4O1xuICBtYXJnaW4tbGVmdDogMzAwcHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvcGFnZV9ub3RfZm91bmQuanBnXCIpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IG9sZGxhY2U7XG59Il19 */");

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageNotFoundComponent = class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-not-found',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/page-not-found/page-not-found.component.scss")).default]
    })
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/pages-top-component/pages-top-component.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages-top-component/pages-top-component.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzLXRvcC1jb21wb25lbnQvcGFnZXMtdG9wLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages-top-component/pages-top-component.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages-top-component/pages-top-component.component.ts ***!
  \**********************************************************************/
/*! exports provided: PagesTopComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesTopComponentComponent", function() { return PagesTopComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PagesTopComponentComponent = class PagesTopComponentComponent {
    constructor() { }
    ngOnInit() {
    }
};
PagesTopComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pages-top-component',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pages-top-component.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages-top-component/pages-top-component.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pages-top-component.component.scss */ "./src/app/pages-top-component/pages-top-component.component.scss")).default]
    })
], PagesTopComponentComponent);



/***/ }),

/***/ "./src/app/product/product.component.scss":
/*!************************************************!*\
  !*** ./src/app/product/product.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".product__name {\n  font-size: 14px;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC9DOlxcVXNlcnNcXG1kdmVua2F0ZXNoXFxEb2N1bWVudHNcXEdpdEh1YlxcZS1jb21tZXJjZV9mcm9udGVuZC9zcmNcXGFwcFxccHJvZHVjdFxccHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdF9fbmFtZXtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAvLyBwYWRkaW5nLWxlZnQ6IDIwcHggIWltcG9ydGFudDsgXHJcbn1cclxuXHJcblxyXG5cclxuLy8gLmNhcmQge1xyXG4vLyAgICAgd2lkdGg6IDI1MHB4ICFpbXBvcnRhbnQ7ICBcclxuLy8gICAgIGhlaWdodDogMjUwcHggIWltcG9ydGFudDtcclxuLy8gICAgIHBhZGRpbmctbGVmdDoxMHB4ICFpbXBvcnRhbnRcclxuLy8gfVxyXG4iLCIucHJvZHVjdF9fbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product.service */ "./src/app/product/product.service.ts");








let ProductComponent = class ProductComponent {
    constructor(router, http, productService) {
        this.router = router;
        this.http = http;
        this.productService = productService;
        this.state = 'close';
    }
    ngOnInit() {
        this.getProducts();
    }
    onHover(val) {
        console.log("clicked Hove");
        this.state = val;
    }
    productPage(product) {
        console.log(product._id);
        console.log(_config__WEBPACK_IMPORTED_MODULE_6__["Config"].URLS.singleProduct);
        this.router.navigateByUrl(`/product/${product._id}`);
    }
    extractProducts(data) {
        return data.products;
    }
    getProducts() {
        this.http.get(_config__WEBPACK_IMPORTED_MODULE_6__["Config"].URLS.products).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(this.extractProducts))
            .subscribe(val => {
            console.log(val, val.length);
            this.products = val.map(val => {
                if (val.imageUrl) {
                    val.imageUrl = _config__WEBPACK_IMPORTED_MODULE_6__["Config"].URLS.images + val.imageUrl;
                }
                return Object.assign({}, val);
            });
            // this.products = [...val,val.imageUrl:Config.]
            // console.log("we are inside the getProduts",Config.URLS.images.replace('imagePath',this.products[0].imageUrl))
        });
    }
};
ProductComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _product_service__WEBPACK_IMPORTED_MODULE_7__["ProductService"] }
];
ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-product',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/product.component.html")).default,
        animations: [
            // anomations goes heree
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('moveLittle', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('close', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    cursor: 'pointer'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    transform: 'translateY(-20px)',
                    zIndex: 100,
                    cursor: 'pointer',
                    background: 'white',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('close=>open', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1s')
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('open => close', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1s')
                ])
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product.component.scss */ "./src/app/product/product.component.scss")).default]
    })
], ProductComponent);



/***/ }),

/***/ "./src/app/product/product.service.ts":
/*!********************************************!*\
  !*** ./src/app/product/product.service.ts ***!
  \********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




// const URL = "../assets/data.json";
let ProductService = class ProductService {
    constructor(http) {
        this.http = http;
        // declare DataSubject
        this.dataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.cartSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.cart$ = this.cartSource.asObservable();
    }
    getData(val) {
        console.log("we are insie getData", val);
        this.dataSubject.next(val);
        this.dataSubject$ = this.dataSubject.asObservable();
    }
    cart(cartdata) {
        this.cartSource.next(cartdata);
    }
    getCartData() {
        console.log("we are inside  getData");
    }
};
ProductService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProductService);



/***/ }),

/***/ "./src/app/products/products.component.scss":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".search {\n  background-color: #2874f0;\n  height: 5rem;\n}\n.search .search__input {\n  position: relative;\n  height: 3rem;\n  width: 380px;\n  margin-left: 260px;\n  margin-top: 10px;\n}\n.search .search__input__icon {\n  position: absolute;\n  margin-top: 15px;\n  margin-left: -20px;\n}\n.img-section {\n  padding: 10px;\n}\n.img-section img {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvQzpcXFVzZXJzXFxtZHZlbmthdGVzaFxcRG9jdW1lbnRzXFxHaXRIdWJcXGUtY29tbWVyY2VfZnJvbnRlbmQvc3JjXFxhcHBcXHByb2R1Y3RzXFxwcm9kdWN0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUNDSjtBREFJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNFUjtBRENJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ1I7QURJQTtFQUNDLGFBQUE7QUNERDtBREVDO0VBQ0ksV0FBQTtBQ0FMIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4NzRmMDtcclxuICAgIGhlaWdodDogNXJlbTtcclxuICAgIC5zZWFyY2hfX2lucHV0e1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICAgICAgd2lkdGg6IDM4MHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjI2MHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6MTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoX19pbnB1dF9faWNvbntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDotMjBweDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi5pbWctc2VjdGlvbiB7XHJcbiBwYWRkaW5nOjEwcHg7XHJcbiBpbWcge1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gfVxyXG5cclxuIC5maWx0ZXJfX3NlY3Rpb24ge1xyXG5cclxuIH1cclxufVxyXG5cclxuLnByb2R1Y3Qtc2VjdGlvbiB7XHJcblxyXG59XHJcbiIsIi5zZWFyY2gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjg3NGYwO1xuICBoZWlnaHQ6IDVyZW07XG59XG4uc2VhcmNoIC5zZWFyY2hfX2lucHV0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDNyZW07XG4gIHdpZHRoOiAzODBweDtcbiAgbWFyZ2luLWxlZnQ6IDI2MHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLnNlYXJjaCAuc2VhcmNoX19pbnB1dF9faWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xufVxuXG4uaW1nLXNlY3Rpb24ge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLmltZy1zZWN0aW9uIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProductsComponent = class ProductsComponent {
    constructor() {
        this.count = 10;
        this.isLoading = false;
    }
    ngOnInit() {
        this.getCount();
    }
    getCount() {
    }
    getByLowprice() {
        console.log("we are inside Low to High");
    }
    getByHighPrice() {
        console.log("we are inside the High to Low");
    }
};
ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-products',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./products.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./products.component.scss */ "./src/app/products/products.component.scss")).default]
    })
], ProductsComponent);



/***/ }),

/***/ "./src/app/reset-password/reset-password.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/reset-password/reset-password.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".reset__password {\n  display: block;\n  height: 100% !important;\n  background-image: url(\"/assets/images/reset.jpg\");\n  background-repeat: no-repeat, no-repeat !important;\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzZXQtcGFzc3dvcmQvQzpcXFVzZXJzXFxtZHZlbmthdGVzaFxcRG9jdW1lbnRzXFxHaXRIdWJcXGUtY29tbWVyY2VfZnJvbnRlbmQvc3JjXFxhcHBcXHJlc2V0LXBhc3N3b3JkXFxyZXNldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU0E7RUFDQyxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxpREFBQTtFQUNBLGtEQUFBO0VBQ0Esc0JBQUE7QUNSRCIsImZpbGUiOiJzcmMvYXBwL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbkBtaXhpbiBzZXRiYWNrZ3JvdW5kSW1hZ2UoJHVybCl7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAkdXJsO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCxuby1yZXBlYXQgIWltcG9ydGFudDtcclxuICAgIC8vIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQsbm8tcmVwZWF0O1xyXG4gICAgLy8gYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgXHJcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmVkLCB5ZWxsb3cpO1xyXG59XHJcblxyXG4ucmVzZXRfX3Bhc3N3b3JkIHtcclxuIGRpc3BsYXk6IGJsb2NrO1xyXG4gaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL3Jlc2V0LmpwZycpIDtcclxuIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQsbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XHJcbiBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuLnJlc2V0X19wYXNzd29yZCB7XHJcbiAgICAvLyBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIC8vIG1hcmdpbjogMCUgIWltcG9ydGFudDtcclxufSIsIi5yZXNldF9fcGFzc3dvcmQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL3Jlc2V0LmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCwgbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/reset-password/reset-password.component.ts":
/*!************************************************************!*\
  !*** ./src/app/reset-password/reset-password.component.ts ***!
  \************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ResetPasswordComponent = class ResetPasswordComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    resetPassword() {
        console.log("we are inside reset Password");
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Sent', 'Plese  Check your Email For Password Reset Link', 'success').then((result) => {
            console.log(result);
            this.router.navigateByUrl('login');
        });
    }
};
ResetPasswordComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ResetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reset-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reset-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/reset-password/reset-password.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reset-password.component.scss */ "./src/app/reset-password/reset-password.component.scss")).default]
    })
], ResetPasswordComponent);



/***/ }),

/***/ "./src/app/shop/shop.component.scss":
/*!******************************************!*\
  !*** ./src/app/shop/shop.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".subcate {\n  display: block;\n  width: 100%;\n  height: 70px;\n  padding: 20px;\n}\n\n.material-icons .color_green {\n  color: #00FF00;\n}\n\n.shop__child {\n  padding-bottom: 2.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcC9DOlxcVXNlcnNcXG1kdmVua2F0ZXNoXFxEb2N1bWVudHNcXEdpdEh1YlxcZS1jb21tZXJjZV9mcm9udGVuZC9zcmNcXGFwcFxcc2hvcFxcc2hvcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hvcC9zaG9wLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREdJO0VBQWUsY0FBQTtBQ0NuQjs7QURHQTtFQUVJLHNCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9zaG9wL3Nob3AuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3ViY2F0ZXtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDo3MHB4O1xyXG4gICAgcGFkZGluZzoyMHB4XHJcbn1cclxuXHJcbi5tYXRlcmlhbC1pY29uc3tcclxuICAgIC5jb2xvcl9ncmVlbiB7IGNvbG9yOiAjMDBGRjAwOyB9XHJcbn1cclxuXHJcbi8vIHNob3AgX19jaGlsZFxyXG4uc2hvcF9fY2hpbGQge1xyXG4gICAgXHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMi41cmVtO1xyXG59XHJcblxyXG4vLyBib2R5IHtcclxuLy8gICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxuLy8gfSIsIi5zdWJjYXRlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDcwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5tYXRlcmlhbC1pY29ucyAuY29sb3JfZ3JlZW4ge1xuICBjb2xvcjogIzAwRkYwMDtcbn1cblxuLnNob3BfX2NoaWxkIHtcbiAgcGFkZGluZy1ib3R0b206IDIuNXJlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/shop/shop.component.ts":
/*!****************************************!*\
  !*** ./src/app/shop/shop.component.ts ***!
  \****************************************/
/*! exports provided: ShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopComponent", function() { return ShopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ShopComponent = class ShopComponent {
    constructor() {
        this.list = ['local_offer', 'laptop_chromebook', 'local_grocery_store', 'kitchen', 'home', 'toys', 'Flight', 'personal_video'];
    }
    ngOnInit() {
    }
};
ShopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shop',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./shop.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shop/shop.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./shop.component.scss */ "./src/app/shop/shop.component.scss")).default]
    })
], ShopComponent);



/***/ }),

/***/ "./src/app/single-product/sigle-directive.ts":
/*!***************************************************!*\
  !*** ./src/app/single-product/sigle-directive.ts ***!
  \***************************************************/
/*! exports provided: SingleItemDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleItemDirective", function() { return SingleItemDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SingleItemDirective = class SingleItemDirective {
    constructor(el) {
        // pre.style.visibility = 'hidden'
        this.touched = false;
        this.count = 0;
    }
    // when mouse move
    onMouseMove(event) {
        this.touched = true;
        ++this.count;
        // console.log("This count",this.count)
        event.stopPropagation();
        // this.pre.style.visibility = "visible"
        this.preview.nativeElement.style.visibility = 'visible';
        // for temparary we can use 
        let imgSrc = this.Image.nativeElement.src;
        //    if( this.touched && this.count == 1 ) {
        let imagLink = imgSrc.split('4200')[1];
        this.preview.nativeElement.style.backgroundImage = `url(${imagLink})`;
        this.preview.nativeElement.style.backgroundRepeat = 'no-repeat';
        console.log(this.count);
        console.log(event.clientX, event.clientY);
        //    }
        var posX = event.clientX;
        var posY = event.clientY;
        console.log("we are seeing the event", event);
        console.log(posX, posY);
        console.log(this.preview.nativeElement, ">><<><>>");
        this.preview.nativeElement.style.backgroundPosition = (posX * 0.5) + "px " + (posY * 0.5) + "px";
    }
    // onMouseOut
    onMouseOut(event) {
        this.touched = false;
        this.count = 0;
        event.stopPropagation();
        this.pre = this.preview.nativeElement;
        this.pre.style.visibility = 'hidden';
        // console.log("we are inside mouse Out",this.pre)
        // console.log(this.Image)
    }
    ngOnInit() {
        this.createReactagle();
    }
    ngOnChange() {
        this.createReactagle();
    }
    // create a rectangle 
    createReactagle() {
        console.log("we are inside the Rectangle");
        console.log(this.el);
    }
};
SingleItemDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])('preview', { static: true })
], SingleItemDirective.prototype, "preview", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])('img', { static: true })
], SingleItemDirective.prototype, "Image", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:mousemove', ['$event'])
], SingleItemDirective.prototype, "onMouseMove", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:mouseout', ['$event'])
], SingleItemDirective.prototype, "onMouseOut", null);
SingleItemDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[imageZoom]'
    })
], SingleItemDirective);



/***/ }),

/***/ "./src/app/single-product/single-product.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/single-product/single-product.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".product {\n  display: block;\n  margin: 10px;\n}\n.product img {\n  background-repeat: no-repeat;\n  margin: 10px;\n}\n.product img:hover {\n  background-repeat: no-repeat;\n  cursor: zoom-in;\n  border: 0;\n  box-shadow: 2px 2px 7px 2px rgba(130, 130, 130, 0.7), -2px -2px 7px 2px #828282;\n}\n#prview {\n  margin-top: 10px;\n  border: 1px solid black;\n  width: 350px;\n  height: 500px;\n  background-repeat: no-repeat;\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2luZ2xlLXByb2R1Y3QvQzpcXFVzZXJzXFxtZHZlbmthdGVzaFxcRG9jdW1lbnRzXFxHaXRIdWJcXGUtY29tbWVyY2VfZnJvbnRlbmQvc3JjXFxhcHBcXHNpbmdsZS1wcm9kdWN0XFxzaW5nbGUtcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2luZ2xlLXByb2R1Y3Qvc2luZ2xlLXByb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtBQ0NKO0FEQ0k7RUFDSSw0QkFBQTtFQUNBLFlBQUE7QUNDUjtBREVJO0VBQ0ksNEJBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLCtFQUFBO0FDQVI7QURJQTtFQUNJLGdCQUFBO0VBQ0gsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0REIiwiZmlsZSI6InNyYy9hcHAvc2luZ2xlLXByb2R1Y3Qvc2luZ2xlLXByb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBtYXJnaW46MTBweDtcclxuICAgIH1cclxuXHJcbiAgICBpbWc6aG92ZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBjdXJzb3I6em9vbS1pbjtcclxuICAgICAgICBib3JkZXI6MDtcclxuICAgICAgICBib3gtc2hhZG93OjJweCAycHggN3B4IDJweCByZ2JhKDEzMCwxMzAsMTMwLC43KSwtMnB4IC0ycHggN3B4IDJweCByZ2JhKDEzMCwxMzAsMTMwLDEpXHJcbiAgICB9XHJcbn1cclxuXHJcbiNwcnZpZXd7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG5cdGJvcmRlcjoxcHggc29saWQgYmxhY2s7XHJcblx0d2lkdGg6MzUwcHg7XHJcblx0aGVpZ2h0OjUwMHB4O1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0bWFyZ2luLWxlZnQ6IGF1dG87XHJcblx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG5cclxufSIsIi5wcm9kdWN0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMTBweDtcbn1cbi5wcm9kdWN0IGltZyB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIG1hcmdpbjogMTBweDtcbn1cbi5wcm9kdWN0IGltZzpob3ZlciB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGN1cnNvcjogem9vbS1pbjtcbiAgYm9yZGVyOiAwO1xuICBib3gtc2hhZG93OiAycHggMnB4IDdweCAycHggcmdiYSgxMzAsIDEzMCwgMTMwLCAwLjcpLCAtMnB4IC0ycHggN3B4IDJweCAjODI4MjgyO1xufVxuXG4jcHJ2aWV3IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIHdpZHRoOiAzNTBweDtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/single-product/single-product.component.ts":
/*!************************************************************!*\
  !*** ./src/app/single-product/single-product.component.ts ***!
  \************************************************************/
/*! exports provided: SingleProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleProductComponent", function() { return SingleProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SingleProductComponent = class SingleProductComponent {
    constructor() { }
    ngOnInit() {
    }
    onMouseEnter(event) {
        console.log("we are inside the MouseEnter", event.clientX, event.clientY);
        // console.log(this.singleProduct.nativeElement.getBoundingClientRect());
        console.log("we are isnide the pageY88", window.pageYOffset);
        // console.log("we are inside the pageXOffest",window.pageXOffset,document.documentElement)
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('singleProduct', { static: true })
], SingleProductComponent.prototype, "singleProduct", void 0);
SingleProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-single-product',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./single-product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/single-product/single-product.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./single-product.component.scss */ "./src/app/single-product/single-product.component.scss")).default]
    })
], SingleProductComponent);



/***/ }),

/***/ "./src/app/trail-zoom/trail-zoom.component.scss":
/*!******************************************************!*\
  !*** ./src/app/trail-zoom/trail-zoom.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  box-sizing: border-box;\n}\n\n.img-zoom-container {\n  margin-top: 50px;\n  padding: 1px;\n  width: 800px;\n  position: relative;\n  background-repeat: no-repeat;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.img-zoom-lens {\n  position: absolute;\n  border: 1px solid #d4d4d4;\n  display: flex;\n  justify-content: center;\n  /*set the size of the lens:*/\n  width: 40px;\n  height: 40px;\n}\n\n.img-zoom-result {\n  border: 1px solid #d4d4d4;\n  /*set the size of the result div:*/\n  width: 300px;\n  height: 240px;\n}\n\n.cartButton {\n  padding: 10px;\n  margin-left: 250px;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhaWwtem9vbS9DOlxcVXNlcnNcXG1kdmVua2F0ZXNoXFxEb2N1bWVudHNcXEdpdEh1YlxcZS1jb21tZXJjZV9mcm9udGVuZC9zcmNcXGFwcFxcdHJhaWwtem9vbVxcdHJhaWwtem9vbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdHJhaWwtem9vbS90cmFpbC16b29tLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUcsc0JBQUE7QUNFSDs7QURBQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFFQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0VGOztBRENBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFFQSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0NGOztBRElBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL3RyYWlsLXpvb20vdHJhaWwtem9vbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge2JveC1zaXppbmc6IGJvcmRlci1ib3g7fVxyXG5cclxuLmltZy16b29tLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBwYWRkaW5nOjFweDtcclxuICB3aWR0aDo4MDBweDtcclxuICAvLyBoZWlnaHQ6IDgwMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIG1hcmdpbi1sZWZ0OmF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OmF1dG9cclxufVxyXG5cclxuLmltZy16b29tLWxlbnMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZDRkNGQ0O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAvKnNldCB0aGUgc2l6ZSBvZiB0aGUgbGVuczoqL1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuLmltZy16b29tLXJlc3VsdCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q0ZDRkNDtcclxuICAvKnNldCB0aGUgc2l6ZSBvZiB0aGUgcmVzdWx0IGRpdjoqL1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBoZWlnaHQ6IDI0MHB4O1xyXG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbn1cclxuXHJcbi5jYXJ0QnV0dG9ue1xyXG4gIHBhZGRpbmc6MTBweDtcclxuICBtYXJnaW4tbGVmdDoyNTBweDtcclxuICBtYXJnaW4tdG9wOjIwcHg7XHJcbn0iLCIqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmltZy16b29tLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHBhZGRpbmc6IDFweDtcbiAgd2lkdGg6IDgwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5pbWctem9vbS1sZW5zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDRkNGQ0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLypzZXQgdGhlIHNpemUgb2YgdGhlIGxlbnM6Ki9cbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLmltZy16b29tLXJlc3VsdCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNGQ0ZDQ7XG4gIC8qc2V0IHRoZSBzaXplIG9mIHRoZSByZXN1bHQgZGl2OiovXG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAyNDBweDtcbn1cblxuLmNhcnRCdXR0b24ge1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMjUwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/trail-zoom/trail-zoom.component.ts":
/*!****************************************************!*\
  !*** ./src/app/trail-zoom/trail-zoom.component.ts ***!
  \****************************************************/
/*! exports provided: TrailZoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrailZoomComponent", function() { return TrailZoomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _product_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../product/product.service */ "./src/app/product/product.service.ts");






let TrailZoomComponent = class TrailZoomComponent {
    //  @HostListener('document:mousemove',['$event'])
    //  onMouseMove(e) {
    //    console.log(e)
    //  }
    constructor(render, router, productService, http, route) {
        this.render = render;
        this.router = router;
        this.productService = productService;
        this.http = http;
        this.route = route;
        this.touched = false;
        this.productImg = '';
    }
    ngOnInit() {
        this.getData();
    }
    ngAfterViewInit() {
    }
    imageZoom() {
        this.img = this.image.nativeElement;
        this.result = this.myResult.nativeElement;
        // Now create a lens
        this.lens = this.render.createElement('div');
        // set Id and class
        this.render.addClass(this.lens, 'img-zoom-lens');
        console.log(this.lens);
        this.render.insertBefore(this.imgContainer.first.nativeElement, this.lens, this.img);
        // this.render.appendChild()
        // console.log(this.lens)
        console.log(this.lens.offsetWidth, "<>>><><><><>");
        console.log(this.lens.offsetHeight);
        console.log(this.result.offsetWidth);
        console.log(this.result.offsetHeight);
        // console.log(this.result.offsetHeight,this.lens.offsetHeight)
        this.cx = this.result.offsetWidth / this.lens.offsetWidth;
        this.cy = this.result.offsetHeight / this.lens.offsetHeight;
        console.log(this.cx, this.cy, "we are seeing cx anc cy", this.productImg);
        this.result.style.backgroundImage = `url(${this.productImg})`;
        //  this.result.style.width = '300px'
        //  this.result.style.height = '240px'
        this.result.style.backgroundRepeat = 'no-repeat';
        this.result.style.backgroundPosition = 'center';
        //  result.style.backgroundSize = img.width * cx + "px " + img.height * cy + "px";
        this.result.style.backgroundSize = (this.img.width * this.cx) + (this.img.height * this.cy) + "px";
        console.log("we are seeing the background Image", this.result.style.backgroundSize);
        this.render.listen(this.lens, 'mousemove', (event) => this.moveLens(event));
        this.render.listen(this.img, 'mousemove', (event) => this.moveLens(event));
        //  console.log(this.cx,this.cy)
        // console.log(img)
        // console.log(this.imgContainer)
    }
    getCursorPos(e) {
        let a, x = 0, y = 0;
        // eveent e
        e = e;
        // get X and y position of the image
        a = this.img.getBoundingClientRect();
        console.log("we are inside the getCursorPos", a, e);
        // calculate X and y Cordinates
        x = e.pageX - a.left;
        y = e.pageY - a.top;
        // retun X and Y
        console.log("we  are looking at x andy", x, y);
        // conside page Scrolling
        // x = x-window.pageXOffset;
        // y = y-window.pageYOffset;
        x = e.clientX - a.left;
        y = e.clientY - a.top;
        console.log("we are lookung at finally x", x, y);
        return { x: x, y: y };
    }
    moveLens(e) {
        console.log("we are listing to the event", e);
        let pos, x, y;
        // e.preventDefault();
        pos = this.getCursorPos(e);
        console.log("we are seeing the pos", pos);
        // alert()
        // calculate the position of lens
        // console.log(this.lens.offsetHeight)
        // console.log(this.lens.offsetWidth)
        console.log(this.lens.offsetWidth);
        x = pos.x - (this.lens.offsetWidth / 2);
        y = pos.y - (this.lens.offsetHeight / 2);
        // console.log("we are looking at ////")
        // console.log(x,this.img.width-this.lens.offsetWidth)
        // console.log(y,this.img.height-this.lens.offsetHeight)
        // prevent the lens 
        if (x > this.img.width - this.lens.offsetWidth) {
            x = this.img.width - this.lens.offsetWidth;
        }
        if (x < 0) {
            x = 0;
        }
        ;
        if (y > this.img.height - this.lens.offsetHeight) {
            y = this.img.height - this.lens.offsetHeight;
        }
        if (y < 0) {
            y = 0;
        }
        // set position of lens
        this.lens.style.left = x + "px";
        this.lens.style.top = y + "px";
        // console.log("wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",x)
        console.log("we are inside the backgroundPosition", [x * this.cx, y * this.cy]);
        // this.result.style.backgroundPosition= "-" + (x * this.cx) + "px -" + (y * this.cy) + "px" 
        // this.result.style.backgroundRepeat = "no-repeat" 
        this.result.style.backgroundPosition = "-" + x * this.cx + "px -" + y * this.cy + "px";
    }
    mouseIn() {
        // console.log("we are inside MouseIn")
        this.touched = true;
        this.myResult.nativeElement.style.visibility = 'visible';
        // setTimeout(()=>this.imageZoom(),5000)
    }
    mouseOut() {
        this.touched = false;
        this.myResult.nativeElement.style.visibility = 'hidden';
    }
    moveToCart(e) {
        e.stopPropagation();
        this.productService.cart(this.productDetails);
        this.router.navigate(["/cart"], { state: { productDeatils: this.productDetails } });
    }
    getData() {
        // alert()
        console.log(this.route.snapshot.params.id, "////////");
        this.http.get(_config__WEBPACK_IMPORTED_MODULE_4__["Config"].URLS.singleProduct.replace(':id', this.route.snapshot.params.id)).subscribe((val) => {
            this.productImg = _config__WEBPACK_IMPORTED_MODULE_4__["Config"].URLS.images + val['product']['imageUrl'];
            console.log("va", val);
            this.productDetails = {
                prodId: val['product']['_id'],
                title: val['product']['title'],
                content: val['product']['content'],
                price: val['product']['price'],
                qty: 1
            };
            // alert()
            this.imageZoom();
        });
        // this.productService.dataSubject.subscribe((val)=>{
        //   alert()
        //   console.log(val,"we are from Trail Zoom Component",Config.URLS.images+val['product']['imageUrl'])
        //   this.productImg = Config.URLS.images+val['product']['imageUrl']
        // })
    }
    createImageFromBlob(data) {
        throw new Error('Method not implemented.');
    }
    ngOnDestroy() {
        this.moveLens("d");
    }
};
TrailZoomComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _product_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChildren"])('imgContainer')
], TrailZoomComponent.prototype, "imgContainer", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('result', { static: true })
], TrailZoomComponent.prototype, "myResult", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('image', { static: true })
], TrailZoomComponent.prototype, "image", void 0);
TrailZoomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-trail-zoom',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./trail-zoom.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/trail-zoom/trail-zoom.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./trail-zoom.component.scss */ "./src/app/trail-zoom/trail-zoom.component.scss")).default]
    })
], TrailZoomComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\mdvenkatesh\Documents\GitHub\e-commerce_frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map