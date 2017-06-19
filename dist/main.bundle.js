webpackJsonp([1,5],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_article_add_article_component__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cart_cart_component__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'articles/:id', component: __WEBPACK_IMPORTED_MODULE_3__add_article_add_article_component__["a" /* AddArticleComponent */] },
    { path: 'cart', component: __WEBPACK_IMPORTED_MODULE_4__cart_cart_component__["a" /* CartComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(177),
        styles: [__webpack_require__(169)]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cart_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__article_list_article_list_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__add_article_add_article_component__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__cart_cart_component__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dashboard_dashboard_component__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_article_service__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__article_list_article_list_component__["a" /* ArticleListComponent */],
            __WEBPACK_IMPORTED_MODULE_9__add_article_add_article_component__["a" /* AddArticleComponent */],
            __WEBPACK_IMPORTED_MODULE_10__cart_cart_component__["a" /* CartComponent */],
            __WEBPACK_IMPORTED_MODULE_11__dashboard_dashboard_component__["a" /* DashboardComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_12_app_article_service__["a" /* ArticleService */], __WEBPACK_IMPORTED_MODULE_0__cart_service__["a" /* CartService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cart_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_article_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_debounceTime__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_distinctUntilChanged__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// Observable class extensions

// Observable operators




var ArticleListComponent = (function () {
    function ArticleListComponent(articleService, cartService, router, route) {
        this.articleService = articleService;
        this.cartService = cartService;
        this.router = router;
        this.route = route;
    }
    ArticleListComponent.prototype.ngOnInit = function () {
        this.articles = this.articleService.fetch();
        this.articles.subscribe(function (change) { return console.log('change =>', change); });
    };
    ArticleListComponent.prototype.addToCart = function (article) {
        var _this = this;
        this.cartService.add(article)
            .subscribe(function (cart) {
            if (_this.router.url === '/cart' && cart.products.length === 1) {
                window.location.reload();
            }
            else {
                _this.router.navigateByUrl('/cart');
            }
        });
    };
    ArticleListComponent.prototype.searchByCode = function (code) {
        if (!code) {
            this.articles = this.articleService.fetch();
            return;
        }
        this.articles = this.articleService.getByCode(code);
        // .subscribe((res) => {
        //   // this.articles = []
        //   // if (res.json()) this.articles = [res.json()]
        // })
    };
    ArticleListComponent.prototype.searchByName = function (name) {
        if (!name) {
            this.articles = this.articleService.fetch();
            return;
        }
        this.articles = this.articleService.getByName(name);
        // .subscribe((res) => {
        //   // this.articles = res.json()
        // })
    };
    ArticleListComponent.prototype.removeArticle = function (article) {
        if (confirm('Sei sicuro di voler eliminare questo articolo?'))
            this.articles = this.articleService.remove(article);
    };
    return ArticleListComponent;
}());
ArticleListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_13" /* Component */])({
        selector: 'article-list',
        template: __webpack_require__(178),
        styles: [__webpack_require__(170)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_app_article_service__["a" /* ArticleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_article_service__["a" /* ArticleService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__cart_service__["a" /* CartService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* ActivatedRoute */]) === "function" && _d || Object])
], ArticleListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=article-list.component.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Article; });
var Article = (function () {
    function Article() {
    }
    return Article;
}());

//# sourceMappingURL=article.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cart; });
var Cart = (function () {
    function Cart() {
    }
    return Cart;
}());

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, ".manage-articles {\n  margin-top: 100px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, ".articles,\n.cart {\n    height: 150px;\n    text-align: center;\n    font-size: 36px;\n    line-height: 150px;\n    vertical-align: middle;\n}\n\n.articles {\n    background-color: gray;\n}\n\n.articles a {\n    color: #000;\n}\n\n.cart {\n    background-color: gray;\n}\n\n.cart a {\n    color: #000;\n}\n\n.logo {\n    position: absolute;\n    left: calc(50% - 75px);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, ".create-cart {\n  margin-top: 100px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 176:
/***/ (function(module, exports) {

module.exports = "<div class=\"manage-articles jumbotron\">\n\n  <br>\n\n  <h2 class=\"text-center\">Aggiungi articolo</h2>\n\n  <form (submit)=\"save($event, article)\">\n\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label for=\"name\">Nome</label>\n          <input type=\"text\" id=\"name\" name=\"name\" class=\"form-control\" [(ngModel)]=\"article.name\">\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label for=\"code\">Codice</label>\n          <input type=\"text\" id=\"code\" name=\"code\" class=\"form-control\" [(ngModel)]=\"article.code\">\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label for=\"company\">Azienda</label>\n          <input type=\"text\" class=\"form-control\" id=\"company\" name=\"company\" [(ngModel)]=\"article.company\">\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label for=\"qty\">Quantità</label>\n          <input type=\"number\" step=\"1\" id=\"qty\" name=\"qty\" class=\"form-control\" step=\"1\" [(ngModel)]=\"article.qty\">\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label for=\"category\">Categoria</label>\n          <select class=\"form-control\" id=\"category\" name=\"category\" [(ngModel)]=\"article.category\">\n                <option value=\"Liquido\">Liquido</option>\n                <option value=\"Hardware\">Hardware</option>\n                </select>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label for=\"type\">Tipo</label>\n          <select name=\"type\" id=\"type\" class=\"form-control\" name=\"type\" [(ngModel)]=\"article.type\">\n                <option value=\"50/50\">50/50</option>\n                <option value=\"Atomizzatore\">Atomizzatore</option>\n                <option value=\"Aroma\">Aroma</option>\n                <option value=\"Box\">Box</option>\n                <option value=\"Filo\">Filo</option>\n                <option value=\"Pronto\">Pronto</option>\n            </select>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label for=\"nicotine\">Nicotina</label>\n          <input type=\"text\" class=\"form-control\" id=\"nicotine\" name=\"nicotine\" [(ngModel)]=\"article.nicotine\">\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label for=\"size\">Formato</label>\n          <input type=\"text\" class=\"form-control\" id=\"size\" name=\"size\" [(ngModel)]=\"article.size\">\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label for=\"price\">Prezzo</label>\n          <input type=\"number\" class=\"form-control\" id=\"price\" name=\"price\" step=\"0.01\" [(ngModel)]=\"article.price\">\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"form-group\">\n          <label for=\"description\">Decrizione</label>\n          <textarea id=\"description\" rows=\"5\" class=\"form-control\"></textarea>\n        </div>\n      </div>\n    </div>\n\n    <button type=\"submit\" class=\"btn btn-success\">Salva</button>\n\n  </form>\n\n</div>\n"

/***/ }),

/***/ 177:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"dashboard\">\n\n    <div class=\"articles col-md-6\">\n      <a routerLink=\"/articles/new\" routerLinkActive=\"active\">Aggiungi Articolo</a>\n    </div>\n    <div class=\"cart col-md-6\">\n      <a routerLink=\"/cart\" routerLinkActive=\"active\">Carrello</a>\n    </div>\n    <div class=\"logo\">\n      <img src=\"assets/images/logo.jpg\" width=\"150\" height=\"150\" alt=\"vapers\">\n    </div>\n  </div>\n\n  <router-outlet></router-outlet>\n\n  <article-list></article-list>\n\n</div>\n"

/***/ }),

/***/ 178:
/***/ (function(module, exports) {

module.exports = "<div class=\"article-list\">\n  <div class=\"jumbotron\">\n    <h2 class=\"text-center\">Cerca articoli</h2>\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"text-center\">\n          <label for=\"name\">nome:</label>\n          <input type=\"text\" class=\"form-control\" #searchName name=\"name\" (keyup)=\"searchByName(searchName.value)\" placeholder=\"flavorart\">\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"text-center\">\n          <label for=\"code\">codice:</label>\n          <input type=\"text\" class=\"form-control\" #searchCode name=\"code\" (keyup)=\"searchByCode(searchCode.value)\" placeholder=\"8613854132161\">\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <hr>\n\n  <div class=\"row\">\n    <div class=\"col-md-4 text-center\" *ngFor=\"let article of articles | async\">\n      <h2><strong>{{article.name}}</strong></h2>\n      <p><strong>Quantità: </strong><span>{{article.qty}}</span></p>\n      <p><strong>Codice: </strong><span>{{article.code}}</span></p>\n      <button class=\"btn btn-primary\" (click)=\"addToCart({article: article, qty: 1})\">Carrello »</button>\n      <button class=\"btn btn-default\" [routerLink]=\"['/articles', article._id]\">Modifica »</button>\n      <button class=\"btn btn-danger\" (click)=\"removeArticle(article)\">Elimina  »</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 179:
/***/ (function(module, exports) {

module.exports = "<div class=\"create-cart text-center jumbotron\">\n\n  <h2 class=\"text-center\" *ngIf=\"!products\">il carrello è vuoto</h2>\n\n  <h2 class=\"text-center\" *ngIf=\"products\">Carrello</h2>\n\n  <button class=\"btn btn-danger\" *ngIf=\"products\" (click)=\"delete()\">Elimina carrello</button>\n\n  <div class=\"cart-list\">\n\n    <div class=\"row\" *ngFor=\"let product of products | async\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label for=\"article\">Articolo</label>\n          <p>{{product.article.name}} - {{product.article.code}}</p>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label for=\"code\">Quantità</label>\n          <input type=\"number\" id=\"qty\" name=\"qty\" class=\"form-control\" (input)=\"setQuantity(product)\" [(ngModel)]=\"product.qty\">\n        </div>\n      </div>\n      <div class=\"col-md-2\">\n        <button class=\"btn btn-danger\" (click)=\"remove(product)\">rimuovi X</button>\n      </div>\n    </div>\n\n  </div>\n\n  <button class=\"btn btn-success\" (click)=\"checkout()\">checkout</button>\n\n</div>\n"

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

module.exports = "\n<h1>this is dashboard</h1>\n"

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(98);


/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ArticleService = (function () {
    function ArticleService(http) {
        this.http = http;
        this.baseUri = 'http://localhost:9999/api/articles';
    }
    ArticleService.prototype.fetch = function () {
        var _this = this;
        return this.http.get(this.baseUri)
            .map(function (articles) { return _this.collection = articles.json(); });
        // .toPromise()
        // .then(response => response.json().data as Article[])
        // .catch(err => Promise.reject(err.message || err));
    };
    ArticleService.prototype.getById = function (id) {
        return this.http.get(this.baseUri + '/' + id)
            .map(function (articles) { return articles.json(); });
    };
    ArticleService.prototype.getByCode = function (code) {
        return this.http.get(this.baseUri + '/code/' + code)
            .map(function (articles) { return articles.json(); });
    };
    ArticleService.prototype.getByName = function (name) {
        return this.http.get(this.baseUri + '/name/' + name)
            .map(function (articles) { return articles.json(); });
    };
    ArticleService.prototype.create = function (article) {
        var _this = this;
        return this.http.post(this.baseUri, article)
            .map(function (res) { return res.json(); })
            .do(function (article) { return _this.collection.push(article); });
    };
    ArticleService.prototype.update = function (article) {
        var _this = this;
        return this.http.put(this.baseUri + '/' + article._id, article)
            .map(function (res) { return res.json(); })
            .do(function (article) { return _this.collection.splice(_this.collection.findIndex(function (a) { return a._id === article._id; }), 1, article); });
    };
    ArticleService.prototype.remove = function (article) {
        return this.http.delete(this.baseUri + '/' + article._id)
            .map(function (articles) { return articles.json(); });
    };
    return ArticleService;
}());
ArticleService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ArticleService);

var _a;
//# sourceMappingURL=article.service.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cart__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CartService = (function () {
    function CartService(http) {
        this.http = http;
        this.baseUri = 'http://localhost:9999/api/carts';
    }
    CartService.prototype.fetch = function () {
        var _this = this;
        return this.http.get(this.baseUri)
            .map(function (res) { return res.json(); })
            .do(function (cart) { return _this.cart = cart; })
            .map(function (cart) { return _this.products = cart.products; });
    };
    CartService.prototype.getById = function (id) {
        var _this = this;
        return this.http.get(this.baseUri + "/" + id)
            .map(function (res) { return res.json(); })
            .do(function (cart) { return _this.cart = cart; })
            .do(function (cart) { return _this.products = cart.products; });
    };
    CartService.prototype.add = function (product) {
        var _this = this;
        var obs;
        if (this.cart && this.cart._id) {
            return this.http.put(this.baseUri + "/push/" + this.cart._id, product)
                .map(function (res) { return res.json(); })
                .do(function (cart) { return _this.cart = cart; })
                .do(function (cart) {
                var diff = __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.differenceBy(cart.products, _this.products, '_id');
                diff.forEach(function (p) { return _this.products.push(p); });
            });
        }
        else {
            return this.http.post(this.baseUri, product)
                .map(function (res) { return res.json(); })
                .do(function (cart) { return _this.cart = cart; })
                .do(function (cart) {
                _this.products = cart.products;
            });
        }
    };
    CartService.prototype.setQuantity = function (product) {
        var _this = this;
        return this.http.put(this.baseUri + "/set-quantity/" + this.cart._id, product)
            .map(function (res) { return res.json(); })
            .do(function (cart) { return _this.cart = cart; })
            .do(function (cart) {
            var i = cart.products.findIndex(function (p) { return p._id === product._id; });
            var pi = _this.products.findIndex(function (p) { return p._id === product._id; });
            _this.products.splice(pi, 1, cart.products[i]);
        });
    };
    CartService.prototype.checkout = function () {
        var _this = this;
        return this.http.get(this.baseUri + "/checkout/" + this.cart._id)
            .map(function (cart) { return _this.cart = cart.json(); });
    };
    CartService.prototype.remove = function (product) {
        var _this = this;
        return this.http.put(this.baseUri + "/pull/" + this.cart._id, product)
            .map(function (res) { return res.json(); })
            .do(function (cart) { return _this.cart = cart; })
            .do(function (cart) {
            var diff = __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.differenceBy(_this.products, cart.products, '_id');
            diff.forEach(function (p) {
                __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.remove(_this.products, p);
            });
        });
    };
    CartService.prototype.delete = function () {
        var _this = this;
        return this.http.delete(this.baseUri + "/" + this.cart._id)
            .do(function (cart) {
            _this.cart = new __WEBPACK_IMPORTED_MODULE_1__cart__["a" /* Cart */]();
            _this.products = new Array();
        });
    };
    return CartService;
}());
CartService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object])
], CartService);

var _a;
//# sourceMappingURL=cart.service.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__article_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_article__ = __webpack_require__(111);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddArticleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddArticleComponent = (function () {
    // @Output() onSave = new EventEmitter<Article>()
    function AddArticleComponent(articleService, route, router) {
        this.articleService = articleService;
        this.route = route;
        this.router = router;
        this.article = new __WEBPACK_IMPORTED_MODULE_3_app_article__["a" /* Article */]();
    }
    AddArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params.id && params.id !== 'new') {
                _this.articleService.getById(params.id)
                    .subscribe(function (article) {
                    _this.article = article;
                }, function (err) { return console.error(err); });
            }
            else {
                _this.article = new __WEBPACK_IMPORTED_MODULE_3_app_article__["a" /* Article */]();
            }
        });
    };
    AddArticleComponent.prototype.save = function ($event, article) {
        var _this = this;
        var obs;
        if (article._id) {
            obs = this.articleService.update(article);
        }
        else {
            obs = this.articleService.create(article);
        }
        obs.subscribe(function (res) {
            _this.router.navigateByUrl('/dashboard');
        }, function (err) { return console.error(err); });
    };
    return AddArticleComponent;
}());
AddArticleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'add-article',
        template: __webpack_require__(176),
        styles: [__webpack_require__(168)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__article_service__["a" /* ArticleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__article_service__["a" /* ArticleService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object])
], AddArticleComponent);

var _a, _b, _c;
//# sourceMappingURL=add-article.component.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cart_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartComponent = (function () {
    function CartComponent(cartService) {
        var _this = this;
        this.cartService = cartService;
        this.debouncedSetQuantity = __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.debounce(function (product) {
            _this.cartService.setQuantity(product)
                .subscribe();
        }, 500);
    }
    CartComponent.prototype.ngOnInit = function () {
        this.products = this.cartService.fetch();
    };
    CartComponent.prototype.setQuantity = function (product) {
        this.debouncedSetQuantity(product);
    };
    CartComponent.prototype.checkout = function () {
        this.cartService.checkout()
            .subscribe(function (res) {
            console.log('checkout =>', res);
            window.location.reload();
        });
    };
    CartComponent.prototype.remove = function (product) {
        if (confirm('Sei sicuro di voler rimuovere questo articolo dal carrello?'))
            this.cartService.remove(product)
                .subscribe(function (res) {
                console.log('remove=>', res);
            }, function (err) { return console.error('remove=>', err); });
    };
    CartComponent.prototype.delete = function () {
        if (confirm('Sei sicuro di voler eliminare questo carrello?'))
            this.cartService.delete()
                .subscribe(function (res) {
                console.log('delete=>', res);
                window.location.reload();
            }, function (err) { return console.error('delete=>', err); });
    };
    return CartComponent;
}());
CartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_13" /* Component */])({
        selector: 'cart',
        template: __webpack_require__(179),
        styles: [__webpack_require__(171)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__cart_service__["a" /* CartService */]) === "function" && _a || Object])
], CartComponent);

var _a;
//# sourceMappingURL=cart.component.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'dashboard',
        template: __webpack_require__(180),
        styles: [__webpack_require__(172)]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 97:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 97;


/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(113);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[227]);
//# sourceMappingURL=main.bundle.js.map