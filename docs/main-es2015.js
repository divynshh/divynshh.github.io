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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");







class AppComponent {
    constructor(breakpointObserver) {
        this.title = 'My-Portfolio';
        this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        // Create a map to display breakpoint names for demonstration purposes.
        this.displayNameMap = new Map([
            [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].XSmall, 'XSmall'],
            [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Small, 'Small'],
            [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Medium, 'Medium'],
            [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Large, 'Large'],
            [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].XLarge, 'XLarge'],
        ]);
        breakpointObserver
            .observe([
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].XSmall,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Small,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Medium,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Large,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].XLarge,
        ])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed))
            .subscribe(result => {
            var _a;
            for (const query of Object.keys(result.breakpoints)) {
                if (result.breakpoints[query]) {
                    this.currentScreenSize = (_a = this.displayNameMap.get(query), (_a !== null && _a !== void 0 ? _a : 'Unknown'));
                }
            }
        });
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 1, consts: [[1, "nav-bar", 3, "screenSize"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("screenSize", ctx.currentScreenSize);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _hero_hero_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hero/hero.component */ "./src/app/hero/hero.component.ts");
/* harmony import */ var _herotitle_herotitle_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./herotitle/herotitle.component */ "./src/app/herotitle/herotitle.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _video_video_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./video/video.component */ "./src/app/video/video.component.ts");
/* harmony import */ var _herotitle2_herotitle2_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./herotitle2/herotitle2.component */ "./src/app/herotitle2/herotitle2.component.ts");
/* harmony import */ var _social_tray_social_tray_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./social-tray/social-tray.component */ "./src/app/social-tray/social-tray.component.ts");



















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["LayoutModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
        _hero_hero_component__WEBPACK_IMPORTED_MODULE_7__["HeroComponent"],
        _herotitle_herotitle_component__WEBPACK_IMPORTED_MODULE_8__["HerotitleComponent"],
        _video_video_component__WEBPACK_IMPORTED_MODULE_15__["VideoComponent"],
        _herotitle2_herotitle2_component__WEBPACK_IMPORTED_MODULE_16__["Herotitle2Component"],
        _social_tray_social_tray_component__WEBPACK_IMPORTED_MODULE_17__["SocialTrayComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["LayoutModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                    _hero_hero_component__WEBPACK_IMPORTED_MODULE_7__["HeroComponent"],
                    _herotitle_herotitle_component__WEBPACK_IMPORTED_MODULE_8__["HerotitleComponent"],
                    _video_video_component__WEBPACK_IMPORTED_MODULE_15__["VideoComponent"],
                    _herotitle2_herotitle2_component__WEBPACK_IMPORTED_MODULE_16__["Herotitle2Component"],
                    _social_tray_social_tray_component__WEBPACK_IMPORTED_MODULE_17__["SocialTrayComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                    _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["LayoutModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/hero/hero.component.ts":
/*!****************************************!*\
  !*** ./src/app/hero/hero.component.ts ***!
  \****************************************/
/*! exports provided: HeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroComponent", function() { return HeroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _video_video_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../video/video.component */ "./src/app/video/video.component.ts");
/* harmony import */ var _herotitle2_herotitle2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../herotitle2/herotitle2.component */ "./src/app/herotitle2/herotitle2.component.ts");




class HeroComponent {
    ngOnInit() {
    }
}
HeroComponent.ɵfac = function HeroComponent_Factory(t) { return new (t || HeroComponent)(); };
HeroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeroComponent, selectors: [["app-hero"]], inputs: { screenSize: "screenSize" }, decls: 3, vars: 1, consts: [[1, "hero-vid"], [3, "screenSize"]], template: function HeroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-video");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-herotitle2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("screenSize", ctx.screenSize);
    } }, directives: [_video_video_component__WEBPACK_IMPORTED_MODULE_1__["VideoComponent"], _herotitle2_herotitle2_component__WEBPACK_IMPORTED_MODULE_2__["Herotitle2Component"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlcm8vaGVyby5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hero',
                templateUrl: './hero.component.html',
                styleUrls: ['./hero.component.scss']
            }]
    }], null, { screenSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/herotitle/herotitle.component.ts":
/*!**************************************************!*\
  !*** ./src/app/herotitle/herotitle.component.ts ***!
  \**************************************************/
/*! exports provided: HerotitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HerotitleComponent", function() { return HerotitleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HerotitleComponent {
    constructor() {
    }
    ngOnInit() {
    }
    openResume() {
        window.open('https://github.com/divynshh/MyPortFolio/raw/gh-pages/assets/docs/Resume.pdf', '_blank').focus();
    }
}
HerotitleComponent.ɵfac = function HerotitleComponent_Factory(t) { return new (t || HerotitleComponent)(); };
HerotitleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HerotitleComponent, selectors: [["app-herotitle"]], decls: 13, vars: 0, consts: [[1, "animated-title", 3, "click"], [1, "text-top"], [2, "font-size", "72px"], [2, "font-size", "96px"], [1, "text-bottom"], [2, "font-size", "54px"], [2, "font-size", "42px", "padding-bottom", "20px"]], template: function HerotitleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HerotitleComponent_Template_div_click_0_listener() { return ctx.openResume(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Hey, It's me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "DIVYANSH CHAUHAN. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Engineer, Traveller ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " I am a Software Engineer based in Gurgaon, India. I like to build solid and scalable applications and software solutions. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url(\"https://fonts.googleapis.com/css?family=Roboto:700\");\n@-webkit-keyframes showTopText {\n  0% {\n    transform: translate3d(0, 100%, 0);\n  }\n  40%, 60% {\n    transform: translate3d(0, 50%, 0);\n  }\n  100% {\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes showTopText {\n  0% {\n    transform: translate3d(0, 100%, 0);\n  }\n  40%, 60% {\n    transform: translate3d(0, 50%, 0);\n  }\n  100% {\n    transform: translate3d(0, 0, 0);\n  }\n}\n@-webkit-keyframes showBottomText {\n  0% {\n    transform: translate3d(0, -100%, 0);\n  }\n  100% {\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes showBottomText {\n  0% {\n    transform: translate3d(0, -100%, 0);\n  }\n  100% {\n    transform: translate3d(0, 0, 0);\n  }\n}\n.animated-title[_ngcontent-%COMP%] {\n  color: #fffbfb;\n  height: 650px;\n  position: absolute;\n  left: -15%;\n  width: 1200px;\n  transform: scale(0.4);\n  background-color: rgba(39, 39, 39, 0.788);\n  box-shadow: 3px 1px 12px 4px #000000;\n  padding-left: 20px;\n  border-radius: 12px;\n  transform: scale(50%, 50%);\n}\n.animated-title[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  height: 50%;\n  overflow: hidden;\n  position: absolute;\n  width: 100%;\n}\n.animated-title[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-size: 12vmin;\n  padding: 2vmin 0;\n  position: absolute;\n}\n.animated-title[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n}\n.animated-title[_ngcontent-%COMP%]    > div.text-top[_ngcontent-%COMP%] {\n  border-bottom: 1px solid white;\n  top: 0;\n  width: 95%;\n}\n.animated-title[_ngcontent-%COMP%]    > div.text-top[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  -webkit-animation: showTopText 1s;\n          animation: showTopText 1s;\n  -webkit-animation-delay: 0.5s;\n          animation-delay: 0.5s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  bottom: 0;\n  transform: translate(0, 100%);\n}\n.animated-title[_ngcontent-%COMP%]    > div.text-top[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  color: #ffffff;\n}\n.animated-title[_ngcontent-%COMP%]    > div.text-bottom[_ngcontent-%COMP%] {\n  width: 95%;\n  bottom: 0;\n}\n.animated-title[_ngcontent-%COMP%]    > div.text-bottom[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  -webkit-animation: showBottomText 0.5s;\n          animation: showBottomText 0.5s;\n  -webkit-animation-delay: 1.75s;\n          animation-delay: 1.75s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  top: 0;\n  transform: translate(0, -100%);\n}\n.animated-title[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.664);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVyb3RpdGxlL0M6XFxVc2Vyc1xcRGl2eWFuc2hcXGdpdFxcUG9ydGZvbGlvXFxNeS1Qb3J0Zm9saW8vc3JjXFxhcHBcXGhlcm90aXRsZVxcaGVyb3RpdGxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZXJvdGl0bGUvaGVyb3RpdGxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVRLGlFQUFBO0FBQ1I7RUFDRTtJQUFLLGtDQUFBO0VDQUw7RURDQTtJQUFXLGlDQUFBO0VDRVg7RUREQTtJQUFPLCtCQUFBO0VDSVA7QUFDRjtBRFJBO0VBQ0U7SUFBSyxrQ0FBQTtFQ0FMO0VEQ0E7SUFBVyxpQ0FBQTtFQ0VYO0VEREE7SUFBTywrQkFBQTtFQ0lQO0FBQ0Y7QURIQTtFQUNFO0lBQUssbUNBQUE7RUNNTDtFRExBO0lBQU8sK0JBQUE7RUNRUDtBQUNGO0FEWEE7RUFDRTtJQUFLLG1DQUFBO0VDTUw7RURMQTtJQUFPLCtCQUFBO0VDUVA7QUFDRjtBRFBBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx5Q0FBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0FDU0Y7QURQQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ1VGO0FEUkE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNXRjtBRFRBO0VBQ0UsY0FBQTtBQ1lGO0FEVkE7RUFDRSw4QkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0FDYUY7QURYQTtFQUNFLGlDQUFBO1VBQUEseUJBQUE7RUFDQSw2QkFBQTtVQUFBLHFCQUFBO0VBQ0EscUNBQUE7VUFBQSw2QkFBQTtFQUNBLFNBQUE7RUFDQSw2QkFBQTtBQ2NGO0FEWkE7RUFDRSxjQUFBO0FDZUY7QURiQTtFQUNFLFVBQUE7RUFDQSxTQUFBO0FDZ0JGO0FEYkE7RUFDRSxzQ0FBQTtVQUFBLDhCQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtFQUNBLHFDQUFBO1VBQUEsNkJBQUE7RUFDQSxNQUFBO0VBQ0EsOEJBQUE7QUNnQkY7QURiQTtFQUVJLHNDQUFBO0FDZUoiLCJmaWxlIjoic3JjL2FwcC9oZXJvdGl0bGUvaGVyb3RpdGxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy9BTmltYXRpb25cclxuXHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjcwMCcpO1xyXG5Aa2V5ZnJhbWVzIHNob3dUb3BUZXh0IHtcclxuICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7IH1cclxuICA0MCUsIDYwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgNTAlLCAwKTsgfVxyXG4gIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApOyB9XHJcbn1cclxuQGtleWZyYW1lcyBzaG93Qm90dG9tVGV4dCB7XHJcbiAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTsgfVxyXG4gIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApOyB9XHJcbn1cclxuLmFuaW1hdGVkLXRpdGxlIHtcclxuICBjb2xvcjogcmdiKDI1NSwgMjUxLCAyNTEpO1xyXG4gIGhlaWdodDogNjUwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6LTE1JTtcclxuICB3aWR0aDogMTIwMHB4O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC40KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAzOSwgMzksIDAuNzg4KTtcclxuICBib3gtc2hhZG93OiAzcHggMXB4IDEycHggNHB4ICMwMDAwMDA7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSg1MCUsNTAlKTtcclxufVxyXG4uYW5pbWF0ZWQtdGl0bGUgPiBkaXYge1xyXG4gIGhlaWdodDogNTAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5hbmltYXRlZC10aXRsZSA+IGRpdiBkaXYge1xyXG4gIGZvbnQtc2l6ZTogMTJ2bWluO1xyXG4gIHBhZGRpbmc6IDJ2bWluIDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5hbmltYXRlZC10aXRsZSA+IGRpdiBkaXYgc3BhbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmFuaW1hdGVkLXRpdGxlID4gZGl2LnRleHQtdG9wIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogOTUlO1xyXG59XHJcbi5hbmltYXRlZC10aXRsZSA+IGRpdi50ZXh0LXRvcCBkaXYge1xyXG4gIGFuaW1hdGlvbjogc2hvd1RvcFRleHQgMXM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjVzO1xyXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gIGJvdHRvbTogMDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxMDAlKTtcclxufVxyXG4uYW5pbWF0ZWQtdGl0bGUgPiBkaXYudGV4dC10b3AgZGl2IHNwYW46Zmlyc3QtY2hpbGQge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi5hbmltYXRlZC10aXRsZSA+IGRpdi50ZXh0LWJvdHRvbSB7XHJcbiAgd2lkdGg6IDk1JTtcclxuICBib3R0b206IDA7XHJcbiAgXHJcbn1cclxuLmFuaW1hdGVkLXRpdGxlID4gZGl2LnRleHQtYm90dG9tIGRpdiB7XHJcbiAgYW5pbWF0aW9uOiBzaG93Qm90dG9tVGV4dCAwLjVzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMS43NXM7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbiAgdG9wOiAwO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xMDAlKTtcclxufVxyXG5cclxuLmFuaW1hdGVkLXRpdGxlOmhvdmVyIHtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjY0KTtcclxuXHJcbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86NzAwXCIpO1xuQGtleWZyYW1lcyBzaG93VG9wVGV4dCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xuICB9XG4gIDQwJSwgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDUwJSwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzaG93Qm90dG9tVGV4dCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG4uYW5pbWF0ZWQtdGl0bGUge1xuICBjb2xvcjogI2ZmZmJmYjtcbiAgaGVpZ2h0OiA2NTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtMTUlO1xuICB3aWR0aDogMTIwMHB4O1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuNCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDM5LCAzOSwgMC43ODgpO1xuICBib3gtc2hhZG93OiAzcHggMXB4IDEycHggNHB4ICMwMDAwMDA7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgdHJhbnNmb3JtOiBzY2FsZSg1MCUsIDUwJSk7XG59XG5cbi5hbmltYXRlZC10aXRsZSA+IGRpdiB7XG4gIGhlaWdodDogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYW5pbWF0ZWQtdGl0bGUgPiBkaXYgZGl2IHtcbiAgZm9udC1zaXplOiAxMnZtaW47XG4gIHBhZGRpbmc6IDJ2bWluIDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmFuaW1hdGVkLXRpdGxlID4gZGl2IGRpdiBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5hbmltYXRlZC10aXRsZSA+IGRpdi50ZXh0LXRvcCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcbiAgdG9wOiAwO1xuICB3aWR0aDogOTUlO1xufVxuXG4uYW5pbWF0ZWQtdGl0bGUgPiBkaXYudGV4dC10b3AgZGl2IHtcbiAgYW5pbWF0aW9uOiBzaG93VG9wVGV4dCAxcztcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjVzO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgYm90dG9tOiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxMDAlKTtcbn1cblxuLmFuaW1hdGVkLXRpdGxlID4gZGl2LnRleHQtdG9wIGRpdiBzcGFuOmZpcnN0LWNoaWxkIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5hbmltYXRlZC10aXRsZSA+IGRpdi50ZXh0LWJvdHRvbSB7XG4gIHdpZHRoOiA5NSU7XG4gIGJvdHRvbTogMDtcbn1cblxuLmFuaW1hdGVkLXRpdGxlID4gZGl2LnRleHQtYm90dG9tIGRpdiB7XG4gIGFuaW1hdGlvbjogc2hvd0JvdHRvbVRleHQgMC41cztcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjc1cztcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIHRvcDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTEwMCUpO1xufVxuXG4uYW5pbWF0ZWQtdGl0bGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjY0KTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HerotitleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-herotitle',
                templateUrl: './herotitle.component.html',
                styleUrls: ['./herotitle.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/herotitle2/herotitle2.component.ts":
/*!****************************************************!*\
  !*** ./src/app/herotitle2/herotitle2.component.ts ***!
  \****************************************************/
/*! exports provided: Herotitle2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Herotitle2Component", function() { return Herotitle2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _social_tray_social_tray_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../social-tray/social-tray.component */ "./src/app/social-tray/social-tray.component.ts");




function Herotitle2Component_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Herotitle2Component_div_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.openResume(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Its Me!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Divyansh ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Traveller");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Engineer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Story Teller");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "I am a Software Engineer based in Gurgaon, India.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " I like to build solid & scalable applications/software solutions. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-social-tray", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("screenSize", ctx_r7.screenSize);
} }
function Herotitle2Component_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-social-tray", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("screenSize", ctx_r8.screenSize);
} }
function Herotitle2Component_div_2_br_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
} }
function Herotitle2Component_div_2_br_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
} }
function Herotitle2Component_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Herotitle2Component_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.openResume(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Its Me!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Divyansh ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Traveller");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Engineer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Story Teller");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Software Engineer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, Herotitle2Component_div_2_br_16_Template, 1, 0, "br", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " based in Gurgaon, India.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Likes to Build solid & scalable ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, Herotitle2Component_div_2_br_20_Template, 1, 0, "br", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " applications/software solutions.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.screenSize != "Large" && ctx_r9.screenSize != "XLarge");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.screenSize != "Large" && ctx_r9.screenSize != "XLarge");
} }
class Herotitle2Component {
    constructor() {
    }
    ngOnInit() {
    }
    openResume() {
        window.open('https://github.com/divynshh/MyPortFolio/raw/gh-pages/assets/docs/Resume.pdf', '_blank').focus();
    }
}
Herotitle2Component.ɵfac = function Herotitle2Component_Factory(t) { return new (t || Herotitle2Component)(); };
Herotitle2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Herotitle2Component, selectors: [["app-herotitle2"]], inputs: { screenSize: "screenSize" }, decls: 3, vars: 3, consts: [["id", "container", 3, "click", 4, "ngIf"], ["class", "verticalSocialTray", 4, "ngIf"], ["id", "containersmall", 3, "click", 4, "ngIf"], ["id", "container", 3, "click"], ["id", "flip"], [3, "screenSize"], [1, "verticalSocialTray"], ["id", "containersmall", 3, "click"], [4, "ngIf"]], template: function Herotitle2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Herotitle2Component_div_0_Template, 20, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Herotitle2Component_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Herotitle2Component_div_2_Template, 22, 2, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenSize == "Large" || ctx.screenSize == "XLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenSize != "Large" && ctx.screenSize != "XLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenSize != "Large" && ctx.screenSize != "XLarge");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _social_tray_social_tray_component__WEBPACK_IMPORTED_MODULE_2__["SocialTrayComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Roboto:700\");\nbody[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-family: \"Roboto\";\n  text-align: center;\n}\n#container[_ngcontent-%COMP%] {\n  color: white;\n  text-transform: uppercase;\n  font-size: 36px;\n  font-weight: bold;\n  position: absolute;\n  left: 12%;\n  bottom: 30%;\n  display: block;\n  padding: 8px;\n  border-radius: 12px;\n  width: 30%;\n  text-shadow: 5px 0 5px black;\n  cursor: pointer;\n}\n#flip[_ngcontent-%COMP%] {\n  height: 50px;\n  overflow: hidden;\n}\n#flip[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  color: #fff;\n  padding: 2px 6px;\n  height: 45px;\n  margin-bottom: 45px;\n  display: inline-block;\n  text-shadow: none;\n}\n#flip[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\n  -webkit-animation: show 6s linear infinite;\n          animation: show 6s linear infinite;\n}\n#flip[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  background: rgba(180, 102, 0, 0.705);\n}\n#flip[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child   div[_ngcontent-%COMP%] {\n  background: #3475c0ad;\n}\n#flip[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child   div[_ngcontent-%COMP%] {\n  background: #b94139c2;\n}\n@-webkit-keyframes show {\n  0% {\n    margin-top: -270px;\n  }\n  5% {\n    margin-top: -180px;\n  }\n  33% {\n    margin-top: -180px;\n  }\n  38% {\n    margin-top: -90px;\n  }\n  66% {\n    margin-top: -90px;\n  }\n  71% {\n    margin-top: 0px;\n  }\n  99.99% {\n    margin-top: 0px;\n  }\n  100% {\n    margin-top: -270px;\n  }\n}\n@keyframes show {\n  0% {\n    margin-top: -270px;\n  }\n  5% {\n    margin-top: -180px;\n  }\n  33% {\n    margin-top: -180px;\n  }\n  38% {\n    margin-top: -90px;\n  }\n  66% {\n    margin-top: -90px;\n  }\n  71% {\n    margin-top: 0px;\n  }\n  99.99% {\n    margin-top: 0px;\n  }\n  100% {\n    margin-top: -270px;\n  }\n}\np[_ngcontent-%COMP%] {\n  width: 100%;\n  text-shadow: 5px 0 5px black;\n  font-size: 14px;\n  color: white;\n}\n#containersmall[_ngcontent-%COMP%] {\n  color: white;\n  text-transform: uppercase;\n  font-size: 36px;\n  font-weight: bold;\n  position: absolute;\n  left: 12%;\n  bottom: 30%;\n  display: block;\n  padding: 8px;\n  border-radius: 12px;\n  transform: scale(0.75);\n  cursor: pointer;\n}\n.verticalSocialTray[_ngcontent-%COMP%] {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  position: absolute;\n  top: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVyb3RpdGxlMi9DOlxcVXNlcnNcXERpdnlhbnNoXFxnaXRcXFBvcnRmb2xpb1xcTXktUG9ydGZvbGlvL3NyY1xcYXBwXFxoZXJvdGl0bGUyXFxoZXJvdGl0bGUyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZXJvdGl0bGUyL2hlcm90aXRsZTIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsaUVBQUE7QUFFUjtFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDQUY7QURHQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBRUEsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtBQ0RGO0FESUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUNERjtBRElBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ0RGO0FESUE7RUFDRSwwQ0FBQTtVQUFBLGtDQUFBO0FDREY7QURJQTtFQUNFLG9DQUFBO0FDREY7QURHQTtFQUNFLHFCQUFBO0FDQUY7QURFQTtFQUNFLHFCQUFBO0FDQ0Y7QURFQTtFQUNFO0lBQUksa0JBQUE7RUNFSjtFRERBO0lBQUksa0JBQUE7RUNJSjtFREhBO0lBQUssa0JBQUE7RUNNTDtFRExBO0lBQUssaUJBQUE7RUNRTDtFRFBBO0lBQUssaUJBQUE7RUNVTDtFRFRBO0lBQUssZUFBQTtFQ1lMO0VEWEE7SUFBUSxlQUFBO0VDY1I7RURiQTtJQUFNLGtCQUFBO0VDZ0JOO0FBQ0Y7QUR6QkE7RUFDRTtJQUFJLGtCQUFBO0VDRUo7RUREQTtJQUFJLGtCQUFBO0VDSUo7RURIQTtJQUFLLGtCQUFBO0VDTUw7RURMQTtJQUFLLGlCQUFBO0VDUUw7RURQQTtJQUFLLGlCQUFBO0VDVUw7RURUQTtJQUFLLGVBQUE7RUNZTDtFRFhBO0lBQVEsZUFBQTtFQ2NSO0VEYkE7SUFBTSxrQkFBQTtFQ2dCTjtBQUNGO0FEZEE7RUFFRSxXQUFBO0VBRUEsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ2NGO0FEVkE7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUVBLFlBQUE7RUFDQSxtQkFBQTtFQUVBLHNCQUFBO0VBQ0EsZUFBQTtBQ1dKO0FEUkU7RUFDRSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUNXSiIsImZpbGUiOiJzcmMvYXBwL2hlcm90aXRsZTIvaGVyb3RpdGxlMi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjcwMCcpO1xyXG5cclxuYm9keSB7XHJcbiAgbWFyZ2luOjBweDtcclxuICBmb250LWZhbWlseTonUm9ib3RvJztcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuI2NvbnRhaW5lciB7XHJcbiAgY29sb3I6cmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1zaXplOjM2cHg7XHJcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICBsZWZ0OiAxMiU7XHJcbiAgYm90dG9tOjMwJTtcclxuICBkaXNwbGF5OmJsb2NrO1xyXG4gIC8vYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM1Nik7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgd2lkdGg6IDMwJTtcclxuICB0ZXh0LXNoYWRvdzogNXB4IDAgNXB4IHJnYigwLCAwLCAwKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiNmbGlwIHtcclxuICBoZWlnaHQ6NTBweDtcclxuICBvdmVyZmxvdzpoaWRkZW47XHJcbn1cclxuXHJcbiNmbGlwID4gZGl2ID4gZGl2ICB7XHJcbiAgY29sb3I6I2ZmZjtcclxuICBwYWRkaW5nOjJweCA2cHg7XHJcbiAgaGVpZ2h0OjQ1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTo0NXB4O1xyXG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gIHRleHQtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4jZmxpcCBkaXY6Zmlyc3QtY2hpbGQge1xyXG4gIGFuaW1hdGlvbjogc2hvdyA2cyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbiNmbGlwIGRpdiBkaXYge1xyXG4gIGJhY2tncm91bmQ6cmdiYSgxODAsIDEwMiwgMCwgMC43MDUpO1xyXG59XHJcbiNmbGlwIGRpdjpmaXJzdC1jaGlsZCBkaXYge1xyXG4gIGJhY2tncm91bmQ6IzM0NzVjMGFkO1xyXG59XHJcbiNmbGlwIGRpdjpsYXN0LWNoaWxkIGRpdiB7XHJcbiAgYmFja2dyb3VuZDojYjk0MTM5YzI7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2hvdyB7XHJcbiAgMCUge21hcmdpbi10b3A6LTI3MHB4O31cclxuICA1JSB7bWFyZ2luLXRvcDotMTgwcHg7fVxyXG4gIDMzJSB7bWFyZ2luLXRvcDotMTgwcHg7fVxyXG4gIDM4JSB7bWFyZ2luLXRvcDotOTBweDt9XHJcbiAgNjYlIHttYXJnaW4tdG9wOi05MHB4O31cclxuICA3MSUge21hcmdpbi10b3A6MHB4O31cclxuICA5OS45OSUge21hcmdpbi10b3A6MHB4O31cclxuICAxMDAlIHttYXJnaW4tdG9wOi0yNzBweDt9XHJcbn1cclxuXHJcbnAge1xyXG4gIFxyXG4gIHdpZHRoOjEwMCU7XHJcbiAgXHJcbiAgdGV4dC1zaGFkb3c6IDVweCAwIDVweCByZ2IoMCwgMCwgMCk7XHJcbiAgZm9udC1zaXplOjE0cHg7XHJcbiAgY29sb3I6cmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIFxyXG59XHJcblxyXG4jY29udGFpbmVyc21hbGwge1xyXG4gICAgY29sb3I6cmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTozNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgbGVmdDogMTIlO1xyXG4gICAgYm90dG9tOjMwJTtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAvL2JhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zNTYpO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIFxyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjc1KTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIC52ZXJ0aWNhbFNvY2lhbFRyYXl7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzMCU7XHJcbiAgfSIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzo3MDBcIik7XG5ib2R5IHtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNjb250YWluZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTIlO1xuICBib3R0b206IDMwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgd2lkdGg6IDMwJTtcbiAgdGV4dC1zaGFkb3c6IDVweCAwIDVweCBibGFjaztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jZmxpcCB7XG4gIGhlaWdodDogNTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuI2ZsaXAgPiBkaXYgPiBkaXYge1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMnB4IDZweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBtYXJnaW4tYm90dG9tOiA0NXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtc2hhZG93OiBub25lO1xufVxuXG4jZmxpcCBkaXY6Zmlyc3QtY2hpbGQge1xuICBhbmltYXRpb246IHNob3cgNnMgbGluZWFyIGluZmluaXRlO1xufVxuXG4jZmxpcCBkaXYgZGl2IHtcbiAgYmFja2dyb3VuZDogcmdiYSgxODAsIDEwMiwgMCwgMC43MDUpO1xufVxuXG4jZmxpcCBkaXY6Zmlyc3QtY2hpbGQgZGl2IHtcbiAgYmFja2dyb3VuZDogIzM0NzVjMGFkO1xufVxuXG4jZmxpcCBkaXY6bGFzdC1jaGlsZCBkaXYge1xuICBiYWNrZ3JvdW5kOiAjYjk0MTM5YzI7XG59XG5cbkBrZXlmcmFtZXMgc2hvdyB7XG4gIDAlIHtcbiAgICBtYXJnaW4tdG9wOiAtMjcwcHg7XG4gIH1cbiAgNSUge1xuICAgIG1hcmdpbi10b3A6IC0xODBweDtcbiAgfVxuICAzMyUge1xuICAgIG1hcmdpbi10b3A6IC0xODBweDtcbiAgfVxuICAzOCUge1xuICAgIG1hcmdpbi10b3A6IC05MHB4O1xuICB9XG4gIDY2JSB7XG4gICAgbWFyZ2luLXRvcDogLTkwcHg7XG4gIH1cbiAgNzElIHtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gIH1cbiAgOTkuOTklIHtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gIH1cbiAgMTAwJSB7XG4gICAgbWFyZ2luLXRvcDogLTI3MHB4O1xuICB9XG59XG5wIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtc2hhZG93OiA1cHggMCA1cHggYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4jY29udGFpbmVyc21hbGwge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTIlO1xuICBib3R0b206IDMwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjc1KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udmVydGljYWxTb2NpYWxUcmF5IHtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMwJTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Herotitle2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-herotitle2',
                templateUrl: './herotitle2.component.html',
                styleUrls: ['./herotitle2.component.scss']
            }]
    }], function () { return []; }, { screenSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");


// Material Form Controls









// Material Navigation



// Material Layout








// Material Buttons & Indicators








// Material Popups & Modals




// Material Data tables




class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_21__["MatTreeModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__["MatButtonToggleModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__["MatBadgeModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__["MatChipsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__["MatProgressSpinnerModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatRippleModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_30__["MatBottomSheetModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__["MatDialogModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__["MatSnackBarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__["MatPaginatorModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_36__["MatTableModule"]
        ],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_21__["MatTreeModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__["MatButtonToggleModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__["MatBadgeModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__["MatChipsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__["MatProgressSpinnerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatRippleModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_30__["MatBottomSheetModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__["MatDialogModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__["MatSnackBarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__["MatPaginatorModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_36__["MatTableModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_21__["MatTreeModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__["MatButtonToggleModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__["MatBadgeModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__["MatChipsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__["MatProgressSpinnerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatRippleModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_30__["MatBottomSheetModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__["MatDialogModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__["MatSnackBarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__["MatPaginatorModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_36__["MatTableModule"]], exports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_21__["MatTreeModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__["MatButtonToggleModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__["MatBadgeModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__["MatChipsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__["MatProgressSpinnerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatRippleModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_30__["MatBottomSheetModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__["MatDialogModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__["MatSnackBarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__["MatPaginatorModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_36__["MatTableModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__["MatDividerModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_21__["MatTreeModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__["MatButtonToggleModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__["MatBadgeModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__["MatChipsModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__["MatProgressSpinnerModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatRippleModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_30__["MatBottomSheetModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__["MatDialogModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__["MatSnackBarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__["MatPaginatorModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__["MatSortModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_36__["MatTableModule"]
                ],
                exports: [
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__["MatDividerModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_21__["MatTreeModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__["MatButtonToggleModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__["MatBadgeModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__["MatChipsModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__["MatProgressSpinnerModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatRippleModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_30__["MatBottomSheetModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__["MatDialogModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__["MatSnackBarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__["MatPaginatorModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__["MatSortModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_36__["MatTableModule"]
                ]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _hero_hero_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hero/hero.component */ "./src/app/hero/hero.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");










function NavbarComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "About");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Experience");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Projects");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_button_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "menu ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NavbarComponent {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isSideNavOpen = false;
    }
    toggleSideNav() {
        this.isSideNavOpen = !this.isSideNavOpen;
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], inputs: { screenSize: "screenSize" }, decls: 19, vars: 4, consts: [[1, "drawer-container"], ["position", "end", "mode", "over", "appOpenSidebarOnSwipe", "", 1, "side-nav"], ["drawer", ""], [3, "multiple"], ["value", "about", 1, "list-option"], ["value", "experience", 1, "list-option"], ["value", "projects", 1, "list-option"], [1, "drawer-content"], [1, "nav-bar"], [1, "toolbar-div"], [1, "toolbar-title"], ["class", "toolbar-buttons", 4, "ngIf"], [1, "toolbar-menu"], ["mat-icon-button", "", 3, "click", 4, "ngIf"], [1, "hero", 3, "screenSize"], [1, "toolbar-buttons"], ["mat-button", "", 1, "button"], ["mat-icon-button", "", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-drawer-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-drawer", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-selection-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-list-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-list-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-list-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-drawer-content", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-toolbar", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Divyansh Chauhan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NavbarComponent_span_15_Template, 10, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, NavbarComponent_button_17_Template, 3, 0, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-hero", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multiple", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenSize == "Large" || ctx.screenSize == "XLarge" || ctx.screenSize == "Medium");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenSize != "Large" && ctx.screenSize != "XLarge" && ctx.screenSize != "Medium");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("screenSize", ctx.screenSize);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawer"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatSelectionList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListOption"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawerContent"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _hero_hero_component__WEBPACK_IMPORTED_MODULE_6__["HeroComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"]], styles: [".nav-bar[_ngcontent-%COMP%] {\n  height: 80px;\n  background: rgba(0, 0, 0, 0.623);\n  color: white;\n  box-shadow: 3px 1px 12px 4px #000000;\n  transition: all 0.2s;\n  border-radius: 0;\n  display: flex;\n}\n\nmat-toolbar[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.795);\n}\n\n.spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.button[_ngcontent-%COMP%] {\n  min-width: 100px;\n  min-height: 30px;\n  font-weight: 400;\n  font-size: 14px;\n}\n\n.title[_ngcontent-%COMP%] {\n  min-width: 600px;\n  min-height: 60px;\n  font-weight: 400;\n  font-size: 16px;\n  height: 100%;\n  vertical-align: middle;\n}\n\n.day-night[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  vertical-align: middle;\n}\n\n.material-icons-sharp[_ngcontent-%COMP%] {\n  font-size: 24px;\n  padding: 20px;\n  vertical-align: middle;\n}\n\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n}\n\n.fill-remaining-space[_ngcontent-%COMP%] {\n  \n  flex: 1 1 auto;\n}\n\n.drawer-container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  background-color: black;\n}\n\n.toolbar-div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: inline-block;\n  min-width: 100px;\n  text-align: center;\n  margin-right: auto;\n}\n\n.toolbar-div[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 100%;\n  flex: 1 1 0;\n}\n\n.side-nav[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  background-color: #0000007a;\n  margin-top: 80px;\n}\n\n.toolbar-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n}\n\n.toolbar-title[_ngcontent-%COMP%] {\n  min-width: 70%;\n  text-align: left;\n  align-items: flex-start;\n  padding-left: 6%;\n}\n\n.toolbar-menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row-reverse;\n  margin-right: auto;\n  flex: 1;\n}\n\n.hero[_ngcontent-%COMP%] {\n  height: 40vh;\n  width: 100%;\n  background-color: aqua;\n}\n\n.drawer-content[_ngcontent-%COMP%] {\n  height: 80vh;\n}\n\n.list-option[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL0M6XFxVc2Vyc1xcRGl2eWFuc2hcXGdpdFxcUG9ydGZvbGlvXFxNeS1Qb3J0Zm9saW8vc3JjXFxhcHBcXG5hdmJhclxcbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNDQTs7QURFQTtFQUVJLHNDQUFBO0FDQUo7O0FER0E7RUFDSSxjQUFBO0FDQUo7O0FER0E7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDQUo7O0FER0U7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDQUo7O0FER0U7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDQU47O0FER0U7RUFFSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDRE47O0FES0U7RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsTUFBQTtBQ0ZKOztBREtFO0VBQ0U7Z0RBQUE7RUFFRCxjQUFBO0FDRkg7O0FESUM7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FDREg7O0FES0M7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0ZIOztBREtDO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDRkg7O0FET0E7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0FDSkE7O0FET0E7RUFDRSxhQUFBO0VBQ0EscUJBQUE7QUNKRjs7QURPQTtFQUVFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNMRjs7QURVQTtFQUVFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtBQ1JGOztBRFdBO0VBRUUsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQ1RGOztBRFlBO0VBQ0UsWUFBQTtBQ1RGOztBRFlBO0VBQ0UsWUFBQTtBQ1RGIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtYmFye1xyXG5oZWlnaHQ6IDgwcHg7XHJcbmJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42MjMpO1xyXG5jb2xvcjogd2hpdGU7XHJcbmJveC1zaGFkb3c6IDNweCAxcHggMTJweCA0cHggIzAwMDAwMDtcclxudHJhbnNpdGlvbjogYWxsIDAuMjBzO1xyXG5ib3JkZXItcmFkaXVzOiAwO1xyXG5kaXNwbGF5OiBmbGV4O1xyXG5cclxufVxyXG5tYXQtdG9vbGJhcjpob3ZlciB7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc5NSk7XHJcblxyXG59XHJcbi5zcGFjZXIge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuICBcclxuLmJ1dHRvbiB7XHJcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gICAgbWluLWhlaWdodDogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn0gIFxyXG5cclxuICAudGl0bGUge1xyXG4gICAgbWluLXdpZHRoOiA2MDBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB9ICBcclxuXHJcbiAgLmRheS1uaWdodHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIH1cclxuXHJcbiAgLm1hdGVyaWFsLWljb25zLXNoYXJwe1xyXG4gICAgICBcclxuICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIH1cclxuXHJcbiAgXHJcbiAgLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICB0b3A6IDA7XHJcbiAgfVxyXG5cclxuICAuZmlsbC1yZW1haW5pbmctc3BhY2Uge1xyXG4gICAgLypUaGlzIGZpbGxzIHRoZSByZW1haW5pbmcgc3BhY2UsIGJ5IHVzaW5nIGZsZXhib3guICBcclxuICAgRXZlcnkgdG9vbGJhciByb3cgdXNlcyBhIGZsZXhib3ggcm93IGxheW91dC4gKi9cclxuICAgZmxleDogMSAxIGF1dG87XHJcbiB9XHJcbiAuZHJhd2VyLWNvbnRhaW5lcntcclxuICAgaGVpZ2h0OiAxMDAlO1xyXG4gICB3aWR0aDogMTAwJTtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcblxyXG4gfVxyXG5cclxuIC50b29sYmFyLWRpdiBkaXZ7XHJcbiAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgbWluLXdpZHRoOiAxMDBweDtcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiB9XHJcblxyXG4gLnRvb2xiYXItZGl2e1xyXG4gICBkaXNwbGF5OiBmbGV4O1xyXG4gICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgIGZsZXg6MSAxIDA7IFxyXG4gfVxyXG5cclxuXHJcblxyXG4uc2lkZS1uYXZ7XHJcbndpZHRoOiBmaXQtY29udGVudDtcclxuYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDdhO1xyXG5tYXJnaW4tdG9wOiA4MHB4O1xyXG59XHJcblxyXG4udG9vbGJhci1idXR0b25ze1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4udG9vbGJhci10aXRsZXtcclxuICBcclxuICBtaW4td2lkdGg6IDcwJTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIHBhZGRpbmctbGVmdDogNiU7XHJcbiAgXHJcbiAgXHJcbn1cclxuXHJcbi50b29sYmFyLW1lbnV7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBmbGV4OjE7XHJcbn1cclxuXHJcbi5oZXJve1xyXG5cclxuICBoZWlnaHQ6IDQwdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcclxufVxyXG5cclxuLmRyYXdlci1jb250ZW50e1xyXG4gIGhlaWdodDogODB2aDtcclxufVxyXG5cclxuLmxpc3Qtb3B0aW9uIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn0iLCIubmF2LWJhciB7XG4gIGhlaWdodDogODBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYyMyk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogM3B4IDFweCAxMnB4IDRweCAjMDAwMDAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxubWF0LXRvb2xiYXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzk1KTtcbn1cblxuLnNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4uYnV0dG9uIHtcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgbWluLWhlaWdodDogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4udGl0bGUge1xuICBtaW4td2lkdGg6IDYwMHB4O1xuICBtaW4taGVpZ2h0OiA2MHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmRheS1uaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLm1hdGVyaWFsLWljb25zLXNoYXJwIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG59XG5cbi5maWxsLXJlbWFpbmluZy1zcGFjZSB7XG4gIC8qVGhpcyBmaWxscyB0aGUgcmVtYWluaW5nIHNwYWNlLCBieSB1c2luZyBmbGV4Ym94LiAgXG4gIEV2ZXJ5IHRvb2xiYXIgcm93IHVzZXMgYSBmbGV4Ym94IHJvdyBsYXlvdXQuICovXG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4uZHJhd2VyLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4udG9vbGJhci1kaXYgZGl2IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtaW4td2lkdGg6IDEwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLnRvb2xiYXItZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBmbGV4OiAxIDEgMDtcbn1cblxuLnNpZGUtbmF2IHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwN2E7XG4gIG1hcmdpbi10b3A6IDgwcHg7XG59XG5cbi50b29sYmFyLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG5cbi50b29sYmFyLXRpdGxlIHtcbiAgbWluLXdpZHRoOiA3MCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nLWxlZnQ6IDYlO1xufVxuXG4udG9vbGJhci1tZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGZsZXg6IDE7XG59XG5cbi5oZXJvIHtcbiAgaGVpZ2h0OiA0MHZoO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbn1cblxuLmRyYXdlci1jb250ZW50IHtcbiAgaGVpZ2h0OiA4MHZoO1xufVxuXG4ubGlzdC1vcHRpb24ge1xuICBjb2xvcjogd2hpdGU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss']
            }]
    }], function () { return [{ type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"] }]; }, { screenSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/social-tray/social-tray.component.ts":
/*!******************************************************!*\
  !*** ./src/app/social-tray/social-tray.component.ts ***!
  \******************************************************/
/*! exports provided: SocialTrayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialTrayComponent", function() { return SocialTrayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function SocialTrayComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SocialTrayComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SocialTrayComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
SocialTrayComponent.ɵfac = function SocialTrayComponent_Factory(t) { return new (t || SocialTrayComponent)(); };
SocialTrayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SocialTrayComponent, selectors: [["app-social-tray"]], inputs: { screenSize: "screenSize" }, decls: 2, vars: 2, consts: [["style", "display: flex; flex-direction: row;", 4, "ngIf"], ["style", "display: flex; flex-direction: column;", 4, "ngIf"], [2, "display", "flex", "flex-direction", "row"], ["href", "#", 1, "fa", "fa-linkedin"], ["href", "#", 1, "fa", "fa-instagram"], ["href", "#", 1, "fa", "fa-twitter"], ["href", "#", 1, "fa", "fa-facebook"], ["href", "#", 1, "fa", "fa-google"], ["href", "#", 1, "fa", "fa-youtube"], [2, "display", "flex", "flex-direction", "column"]], template: function SocialTrayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SocialTrayComponent_div_0_Template, 7, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SocialTrayComponent_div_1_Template, 7, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenSize == "Large" || ctx.screenSize == "XLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenSize != "Large" && ctx.screenSize != "XLarge");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".fa[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-size: 20px;\n  width: 20px;\n  text-align: center;\n  text-decoration: none;\n  margin: 5px 2px;\n  border-radius: 50%;\n  text-shadow: none;\n  color: white;\n}\n\n.fa[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.562);\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29jaWFsLXRyYXkvQzpcXFVzZXJzXFxEaXZ5YW5zaFxcZ2l0XFxQb3J0Zm9saW9cXE15LVBvcnRmb2xpby9zcmNcXGFwcFxcc29jaWFsLXRyYXlcXHNvY2lhbC10cmF5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zb2NpYWwtdHJheS9zb2NpYWwtdHJheS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLDBDQUFBO0VBQ0EscUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3NvY2lhbC10cmF5L3NvY2lhbC10cmF5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICB3aWR0aDogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIG1hcmdpbjogNXB4IDJweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZmE6aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDAgMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNTYyKTtcclxuICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxufVxyXG5cclxuLy8gLmZhLWZhY2Vib29rIHtcclxuLy8gICBiYWNrZ3JvdW5kOiAjM0I1OTk4O1xyXG4vLyAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gfVxyXG5cclxuLy8gLmZhLXR3aXR0ZXIge1xyXG4vLyAgIGJhY2tncm91bmQ6ICM1NUFDRUU7XHJcbi8vICAgY29sb3I6IHdoaXRlO1xyXG4vLyB9XHJcblxyXG4vLyAuZmEtZ29vZ2xlIHtcclxuLy8gICBiYWNrZ3JvdW5kOiAjZGQ0YjM5O1xyXG4vLyAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gfVxyXG5cclxuLy8gLmZhLWxpbmtlZGluIHtcclxuLy8gICBiYWNrZ3JvdW5kOiAjMDA3YmI1O1xyXG4vLyAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gfVxyXG5cclxuLy8gLmZhLXlvdXR1YmUge1xyXG4vLyAgIGJhY2tncm91bmQ6ICNiYjAwMDA7XHJcbi8vICAgY29sb3I6IHdoaXRlO1xyXG4vLyB9XHJcblxyXG4vLyAuZmEtaW5zdGFncmFtIHtcclxuLy8gICBiYWNrZ3JvdW5kOiAjMTI1Njg4O1xyXG4vLyAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gfVxyXG5cclxuLy8gLmZhLXBpbnRlcmVzdCB7XHJcbi8vICAgYmFja2dyb3VuZDogI2NiMjAyNztcclxuLy8gICBjb2xvcjogd2hpdGU7XHJcbi8vIH1cclxuXHJcbi8vIC5mYS1zbmFwY2hhdC1naG9zdCB7XHJcbi8vICAgYmFja2dyb3VuZDogI2ZmZmMwMDtcclxuLy8gICBjb2xvcjogd2hpdGU7XHJcbi8vICAgdGV4dC1zaGFkb3c6IC0xcHggMCBibGFjaywgMCAxcHggYmxhY2ssIDFweCAwIGJsYWNrLCAwIC0xcHggYmxhY2s7XHJcbi8vIH1cclxuXHJcbi8vIC5mYS1za3lwZSB7XHJcbi8vICAgYmFja2dyb3VuZDogIzAwYWZmMDtcclxuLy8gICBjb2xvcjogd2hpdGU7XHJcbi8vIH1cclxuXHJcbi8vIC5mYS1hbmRyb2lkIHtcclxuLy8gICBiYWNrZ3JvdW5kOiAjYTRjNjM5O1xyXG4vLyAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gfVxyXG5cclxuLy8gLmZhLWRyaWJiYmxlIHtcclxuLy8gICBiYWNrZ3JvdW5kOiAjZWE0Yzg5O1xyXG4vLyAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gfVxyXG5cclxuLy8gLmZhLXZpbWVvIHtcclxuLy8gICBiYWNrZ3JvdW5kOiAjNDViYmZmO1xyXG4vLyAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gfVxyXG5cclxuLy8gLmZhLXR1bWJsciB7XHJcbi8vICAgYmFja2dyb3VuZDogIzJjNDc2MjtcclxuLy8gICBjb2xvcjogd2hpdGU7XHJcbi8vIH1cclxuXHJcbi8vIC5mYS12aW5lIHtcclxuLy8gICBiYWNrZ3JvdW5kOiAjMDBiNDg5O1xyXG4vLyAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gfVxyXG5cclxuLy8gLmZhLWZvdXJzcXVhcmUge1xyXG4vLyAgIGJhY2tncm91bmQ6ICM0NWJiZmY7XHJcbi8vICAgY29sb3I6IHdoaXRlO1xyXG4vLyB9XHJcblxyXG4vLyAuZmEtc3R1bWJsZXVwb24ge1xyXG4vLyAgIGJhY2tncm91bmQ6ICNlYjQ5MjQ7XHJcbi8vICAgY29sb3I6IHdoaXRlO1xyXG4vLyB9XHJcblxyXG4vLyAuZmEtZmxpY2tyIHtcclxuLy8gICBiYWNrZ3JvdW5kOiAjZjQwMDgzO1xyXG4vLyAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gfVxyXG5cclxuLy8gLmZhLXlhaG9vIHtcclxuLy8gICBiYWNrZ3JvdW5kOiAjNDMwMjk3O1xyXG4vLyAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gfVxyXG5cclxuLy8gLmZhLXNvdW5kY2xvdWQge1xyXG4vLyAgIGJhY2tncm91bmQ6ICNmZjU1MDA7XHJcbi8vICAgY29sb3I6IHdoaXRlO1xyXG4vLyB9XHJcblxyXG4vLyAuZmEtcmVkZGl0IHtcclxuLy8gICBiYWNrZ3JvdW5kOiAjZmY1NzAwO1xyXG4vLyAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gfVxyXG5cclxuLy8gLmZhLXJzcyB7XHJcbi8vICAgYmFja2dyb3VuZDogI2ZmNjYwMDtcclxuLy8gICBjb2xvcjogd2hpdGU7XHJcbi8vIH0iLCIuZmEge1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbWFyZ2luOiA1cHggMnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRleHQtc2hhZG93OiBub25lO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5mYTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNTYyKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialTrayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-social-tray',
                templateUrl: './social-tray.component.html',
                styleUrls: ['./social-tray.component.scss']
            }]
    }], function () { return []; }, { screenSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/video/video.component.ts":
/*!******************************************!*\
  !*** ./src/app/video/video.component.ts ***!
  \******************************************/
/*! exports provided: VideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoComponent", function() { return VideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function VideoComponent_video_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "video", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "source", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "source", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VideoComponent_video_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "video", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "source", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "source", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class VideoComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
VideoComponent.ɵfac = function VideoComponent_Factory(t) { return new (t || VideoComponent)(); };
VideoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideoComponent, selectors: [["app-video"]], inputs: { screenSize: "screenSize" }, decls: 2, vars: 2, consts: [["autoplay", "", "muted", "", "loop", "", "id", "title-video", 4, "ngIf"], ["autoplay", "", "muted", "", "loop", "", "id", "title-video-lowres", 4, "ngIf"], ["autoplay", "", "muted", "", "loop", "", "id", "title-video"], ["type", "video/webm", "src", "../../assets/videos/hero.webm"], ["type", "video/mp4", "src", "../../assets/videos/hero.mp4"], ["type", "video/mp4", "src", "../../assets/videos/hero.m4v"], ["autoplay", "", "muted", "", "loop", "", "id", "title-video-lowres"]], template: function VideoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, VideoComponent_video_0_Template, 4, 0, "video", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VideoComponent_video_1_Template, 4, 0, "video", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenSize == "Large" || ctx.screenSize == "XLarge" || ctx.screenSize == "Medium");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenSize != "Large" && ctx.screenSize != "XLarge" && ctx.screenSize != "Medium");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["#title-video[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  min-width: 100%;\n  height: 100%;\n  transform: translate(-50%, -50%);\n  z-index: -1;\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  filter: brightness(70%);\n}\n\n#title-video-lowres[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  min-width: 100%;\n  height: 100%;\n  transform: translate(-50%, -50%);\n  z-index: -1;\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  filter: brightness(60%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW8vQzpcXFVzZXJzXFxEaXZ5YW5zaFxcZ2l0XFxQb3J0Zm9saW9cXE15LVBvcnRmb2xpby9zcmNcXGFwcFxcdmlkZW9cXHZpZGVvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWRlby92aWRlby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtBQ0NKOztBREVFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC92aWRlby92aWRlby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiN0aXRsZS12aWRlbyB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOjUwJTtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmaWx0ZXI6YnJpZ2h0bmVzcyg3MCUpO1xyXG4gIH1cclxuXHJcbiAgI3RpdGxlLXZpZGVvLWxvd3JlcyB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOjUwJTtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgICB6LWluZGV4OiAtMTsgXHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmlsdGVyOmJyaWdodG5lc3MoNjAlKTtcclxuICAgIFxyXG4gICAgXHJcbiAgfSIsIiN0aXRsZS12aWRlbyB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB6LWluZGV4OiAtMTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoNzAlKTtcbn1cblxuI3RpdGxlLXZpZGVvLWxvd3JlcyB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB6LWluZGV4OiAtMTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoNjAlKTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-video',
                templateUrl: './video.component.html',
                styleUrls: ['./video.component.scss']
            }]
    }], function () { return []; }, { screenSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Divyansh\git\Portfolio\My-Portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map