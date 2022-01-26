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

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _skillset_skillset_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../skillset/skillset.component */ "./src/app/skillset/skillset.component.ts");





function AboutComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "About");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Who's this guy? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " I am a Software Engineer at UnitedHealth Group in Hyderabad, IN.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " I love solving problems. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutComponent_div_1_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.viewResume(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Download Resume");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Skills");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-skillset", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "app-skillset", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("skillSet", "techSkills");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("skillSet", "otherSkills");
} }
function AboutComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "About");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Who's this guy? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " I am a Software Engineer at UnitedHealth Group in Hyderabad, IN.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " I love solving problems. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutComponent_div_2_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.viewResume(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Download Resume");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Skills");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "app-skillset", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "app-skillset", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("skillSet", "techSkills");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("skillSet", "otherSkills");
} }
class AboutComponent {
    //@ViewChild('imageDivAnimate') imageDiv: ElementRef;
    constructor() {
        this.animateImage = true;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        //console.log(this.elemRefs);
        setTimeout(() => {
            this.animateImage = false;
        }, 12000);
    }
    viewResume() {
        console.log("Resume");
        this.openFile();
    }
    openFile() {
        window.open("../../assets/docs/Resume.pdf");
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], inputs: { screenSize: "screenSize" }, decls: 3, vars: 2, consts: [[1, "body"], ["class", "table-div", 4, "ngIf"], ["class", "table-div-lowres", 4, "ngIf"], [1, "table-div"], [1, "header"], [2, "height", "60vh", "width", "100%"], [2, "display", "flex"], [2, "margin-top", "8%"], [1, "image-title"], [1, "image-div"], ["src", "../../assets/images/about.jpg", "alt", "Me", 1, "image-top"], [1, "subtitle"], ["mat-button", "", 2, "color", "black", "background-color", "white", 3, "click"], [1, "skill-div"], [3, "skillSet"], [1, "table-div-lowres"], [1, "header-lowres"], [2, "height", "100%", "width", "100%"], [1, "image-div-lowres"], ["src", "../../assets/images/about.jpg", "alt", "Me", 1, "image-lowres-top"], ["mat-button", "", 2, "color", "black", "background-color", "white", "transform", "scale(80%)", 3, "click"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AboutComponent_div_1_Template, 28, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AboutComponent_div_2_Template, 29, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenSize == "Large" || ctx.screenSize == "XLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenSize != "Large" && ctx.screenSize != "XLarge");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _skillset_skillset_component__WEBPACK_IMPORTED_MODULE_3__["SkillsetComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200[_ngcontent-%COMP%];300[_ngcontent-%COMP%];400&display=swap\")[_ngcontent-%COMP%];\n.body[_ngcontent-%COMP%] {\n  background-color: black;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.header[_ngcontent-%COMP%] {\n  margin: 0px;\n  letter-spacing: 15px;\n  text-align: center;\n  display: flex;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n  font-size: 38px;\n  font-weight: bold;\n  height: 15vh;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n  color: white;\n}\n.skill-div[_ngcontent-%COMP%] {\n  text-align: center;\n  display: flex;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 38px;\n  font-weight: bold;\n  height: 100%;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n  color: white;\n}\n.image-div[_ngcontent-%COMP%] {\n  letter-spacing: 15px;\n  text-align: center;\n  display: flex;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n  font-size: 38px;\n  font-weight: bold;\n  height: 100%;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n  color: white;\n}\n.image-top[_ngcontent-%COMP%] {\n  height: 60%;\n  width: 60%;\n  padding: 20px;\n}\n.image-bottom[_ngcontent-%COMP%] {\n  height: 60%;\n  width: 60%;\n  padding: 20px;\n  -webkit-animation-name: fade;\n          animation-name: fade;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-duration: 4s;\n          animation-duration: 4s;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  position: absolute;\n  transform: scale(43%, 74%);\n}\n.image-title[_ngcontent-%COMP%] {\n  display: flex;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Montserrat\", sans-serif;\n  color: white;\n  font-size: 22px;\n  font-weight: 300;\n}\n.subtitle[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 15px;\n  display: flex;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Montserrat\", sans-serif;\n  color: white;\n  text-align: center;\n}\n.table-div[_ngcontent-%COMP%] {\n  margin-left: 100px;\n  margin-right: 100px;\n  margin-top: 40px;\n  border-collapse: collapse;\n}\ntable[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  border: none;\n}\ntd[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 50%;\n}\n.table-div-lowres[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 40px;\n  border-collapse: collapse;\n}\n.image-lowres[_ngcontent-%COMP%] {\n  height: 90%;\n  width: 90%;\n  padding: 10px;\n}\n.image-div-lowres[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n}\n.image-lowres-top[_ngcontent-%COMP%] {\n  height: 90%;\n  width: 90%;\n  padding: 10px;\n}\n.image-lowres-bottom[_ngcontent-%COMP%] {\n  height: 90%;\n  width: 90%;\n  padding: 10px;\n  -webkit-animation-name: fade;\n          animation-name: fade;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-duration: 3s;\n          animation-duration: 3s;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  position: absolute;\n  transform: scale(88%, 24%);\n}\n.header-lowres[_ngcontent-%COMP%] {\n  margin: 0px;\n  letter-spacing: 10px;\n  text-align: center;\n  display: flex;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n  font-size: 38px;\n  font-weight: bold;\n  height: 15vh;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n  color: white;\n}\n.table-div-lowres[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  display: flex;\n}\n.table-div-lowres[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@-webkit-keyframes fade {\n  0% {\n    opacity: 1;\n  }\n  25% {\n    opacity: 1;\n  }\n  75% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes fade {\n  0% {\n    opacity: 1;\n  }\n  25% {\n    opacity: 1;\n  }\n  75% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvQzpcXFVzZXJzXFxEaXZ5YW5zaFxcZ2l0XFxQb3J0Zm9saW9cXE15LVBvcnRmb2xpby9zcmNcXGFwcFxcYWJvdXRcXGFib3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDUSxvR0FBQTtBQUVSO0VBQ0ksdUJBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7QUNESjtBRElBO0VBQ0ksV0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FDREo7QURLQTtFQUdJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUNKSjtBRFNBO0VBRUksb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUNQSjtBRGFBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FDVko7QURlQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO1VBQUEsb0JBQUE7RUFDQSw4Q0FBQTtVQUFBLHNDQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7RUFDQSxzQ0FBQTtVQUFBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtBQ1pKO0FEaUJBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFDQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ2RKO0FEZ0JBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNiSjtBRGdCQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FDYko7QURnQkE7RUFDSSxZQUFBO0FDYko7QURnQkU7RUFDRSxZQUFBO0VBQ0MsVUFBQTtBQ2JMO0FEZ0JFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUNiSjtBRGdCQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQ2JKO0FEa0JBO0VBRUksYUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNoQko7QURvQkE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUNqQko7QURzQkE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtVQUFBLG9CQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtFQUNBLDJDQUFBO1VBQUEsbUNBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0VBQ0Esc0NBQUE7VUFBQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QUNuQko7QUR1QkE7RUFDSSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUNwQko7QUR3QkE7RUFFQSxhQUFBO0FDdEJBO0FEMEJBO0VBRUksV0FBQTtBQ3hCSjtBRDRCSTtFQUNJO0lBQ0UsVUFBQTtFQ3pCUjtFRDJCTTtJQUNFLFVBQUE7RUN6QlI7RUQyQk07SUFDRSxVQUFBO0VDekJSO0VEMkJNO0lBQ0UsVUFBQTtFQ3pCUjtBQUNGO0FEYUk7RUFDSTtJQUNFLFVBQUE7RUN6QlI7RUQyQk07SUFDRSxVQUFBO0VDekJSO0VEMkJNO0lBQ0UsVUFBQTtFQ3pCUjtFRDJCTTtJQUNFLFVBQUE7RUN6QlI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEAxMDA7MjAwOzMwMDs0MDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG4uYm9keXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5oZWFkZXJ7XHJcbiAgICBtYXJnaW46MHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTozOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgIGhlaWdodDogMTV2aDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBcclxufVxyXG5cclxuLnNraWxsLWRpdntcclxuICAgIFxyXG4gICAgXHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOjM4cHg7XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIFxyXG4gICAgXHJcbn1cclxuXHJcbi5pbWFnZS1kaXZ7XHJcbiAgICBcclxuICAgIGxldHRlci1zcGFjaW5nOiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6MzhweDtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgXHJcbiAgICBcclxufVxyXG5cclxuXHJcbi5pbWFnZS10b3B7XHJcbiAgICBoZWlnaHQ6IDYwJTtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG5cclxuICAgIFxyXG59XHJcblxyXG4uaW1hZ2UtYm90dG9te1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNHM7XHJcbiAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDQzJSw3NCUpO1xyXG4gICAgXHJcbn1cclxuXHJcblxyXG4uaW1hZ2UtdGl0bGV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6MjJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuLnN1YnRpdGxle1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50YWJsZS1kaXZ7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbn1cclxuXHJcbnRhYmxlLCB0ZCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG5cclxuICB0ZHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxuXHJcbiAgLnRhYmxlLWRpdi1sb3dyZXN7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcblxyXG4uaW1hZ2UtbG93cmVze1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIFxyXG4gICAgXHJcbn1cclxuXHJcbi5pbWFnZS1kaXYtbG93cmVze1xyXG4gICAgICAgIFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBcclxufVxyXG5cclxuLmltYWdlLWxvd3Jlcy10b3B7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG5cclxuICAgIFxyXG59XHJcblxyXG4uaW1hZ2UtbG93cmVzLWJvdHRvbXtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZTtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xyXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xyXG4gICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSg4OCUsMjQlKTtcclxuICAgIFxyXG59XHJcblxyXG4uaGVhZGVyLWxvd3Jlc3tcclxuICAgIG1hcmdpbjowcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMTBweDtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOjM4cHg7XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgaGVpZ2h0OiAxNXZoO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIFxyXG59XHJcblxyXG4udGFibGUtZGl2LWxvd3JlcyB0ciB7XHJcblxyXG5kaXNwbGF5OiBmbGV4O1xyXG5cclxufVxyXG5cclxuLnRhYmxlLWRpdi1sb3dyZXMgdGQge1xyXG5cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgXHJcbiAgICB9XHJcblxyXG4gICAgQGtleWZyYW1lcyBmYWRlIHtcclxuICAgICAgICAwJSB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICAyNSUge1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgNzUlIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDEwMDsyMDA7MzAwOzQwMCZkaXNwbGF5PXN3YXBcIik7XG4uYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xufVxuXG4uaGVhZGVyIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAzOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgaGVpZ2h0OiAxNXZoO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc2tpbGwtZGl2IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMzhweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGhlaWdodDogMTAwJTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmltYWdlLWRpdiB7XG4gIGxldHRlci1zcGFjaW5nOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAzOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaW1hZ2UtdG9wIHtcbiAgaGVpZ2h0OiA2MCU7XG4gIHdpZHRoOiA2MCU7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5pbWFnZS1ib3R0b20ge1xuICBoZWlnaHQ6IDYwJTtcbiAgd2lkdGg6IDYwJTtcbiAgcGFkZGluZzogMjBweDtcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGU7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA0cztcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogc2NhbGUoNDMlLCA3NCUpO1xufVxuXG4uaW1hZ2UtdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLnN1YnRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGFibGUtZGl2IHtcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG50YWJsZSwgdGQge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbnRkIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogNTAlO1xufVxuXG4udGFibGUtZGl2LWxvd3JlcyB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbi5pbWFnZS1sb3dyZXMge1xuICBoZWlnaHQ6IDkwJTtcbiAgd2lkdGg6IDkwJTtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmltYWdlLWRpdi1sb3dyZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaW1hZ2UtbG93cmVzLXRvcCB7XG4gIGhlaWdodDogOTAlO1xuICB3aWR0aDogOTAlO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uaW1hZ2UtbG93cmVzLWJvdHRvbSB7XG4gIGhlaWdodDogOTAlO1xuICB3aWR0aDogOTAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBhbmltYXRpb24tbmFtZTogZmFkZTtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiBzY2FsZSg4OCUsIDI0JSk7XG59XG5cbi5oZWFkZXItbG93cmVzIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAzOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgaGVpZ2h0OiAxNXZoO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udGFibGUtZGl2LWxvd3JlcyB0ciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi50YWJsZS1kaXYtbG93cmVzIHRkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbkBrZXlmcmFtZXMgZmFkZSB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDI1JSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICA3NSUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss']
            }]
    }], function () { return []; }, { screenSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]], styles: [".nav-bar[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxEaXZ5YW5zaFxcZ2l0XFxQb3J0Zm9saW9cXE15LVBvcnRmb2xpby9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LWJhcntcclxuICAgIGhlaWdodDogMTAwJTtcclxufSIsIi5uYXYtYmFyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */"] });
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
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _skill_scale_skill_scale_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./skill-scale/skill-scale.component */ "./src/app/skill-scale/skill-scale.component.ts");
/* harmony import */ var _skillset_skillset_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./skillset/skillset.component */ "./src/app/skillset/skillset.component.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/experience/experience.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _projectcard_projectcard_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./projectcard/projectcard.component */ "./src/app/projectcard/projectcard.component.ts");
/* harmony import */ var _get_in_touch_get_in_touch_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./get-in-touch/get-in-touch.component */ "./src/app/get-in-touch/get-in-touch.component.ts");
/* harmony import */ var _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./contact-form/contact-form.component */ "./src/app/contact-form/contact-form.component.ts");




























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
        _social_tray_social_tray_component__WEBPACK_IMPORTED_MODULE_17__["SocialTrayComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_18__["AboutComponent"],
        _skill_scale_skill_scale_component__WEBPACK_IMPORTED_MODULE_19__["SkillScaleComponent"],
        _skillset_skillset_component__WEBPACK_IMPORTED_MODULE_20__["SkillsetComponent"],
        _experience_experience_component__WEBPACK_IMPORTED_MODULE_21__["ExperienceComponent"],
        _projects_projects_component__WEBPACK_IMPORTED_MODULE_22__["ProjectsComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_23__["FooterComponent"],
        _projectcard_projectcard_component__WEBPACK_IMPORTED_MODULE_24__["ProjectcardComponent"],
        _get_in_touch_get_in_touch_component__WEBPACK_IMPORTED_MODULE_25__["GetInTouchComponent"],
        _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_26__["ContactFormComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
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
                    _social_tray_social_tray_component__WEBPACK_IMPORTED_MODULE_17__["SocialTrayComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_18__["AboutComponent"],
                    _skill_scale_skill_scale_component__WEBPACK_IMPORTED_MODULE_19__["SkillScaleComponent"],
                    _skillset_skillset_component__WEBPACK_IMPORTED_MODULE_20__["SkillsetComponent"],
                    _experience_experience_component__WEBPACK_IMPORTED_MODULE_21__["ExperienceComponent"],
                    _projects_projects_component__WEBPACK_IMPORTED_MODULE_22__["ProjectsComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_23__["FooterComponent"],
                    _projectcard_projectcard_component__WEBPACK_IMPORTED_MODULE_24__["ProjectcardComponent"],
                    _get_in_touch_get_in_touch_component__WEBPACK_IMPORTED_MODULE_25__["GetInTouchComponent"],
                    _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_26__["ContactFormComponent"]
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

/***/ "./src/app/contact-form/contact-form.component.ts":
/*!********************************************************!*\
  !*** ./src/app/contact-form/contact-form.component.ts ***!
  \********************************************************/
/*! exports provided: ContactFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactFormComponent", function() { return ContactFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function ContactFormComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "textarea", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactFormComponent_form_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "textarea", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ContactFormComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ContactFormComponent.ɵfac = function ContactFormComponent_Factory(t) { return new (t || ContactFormComponent)(); };
ContactFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactFormComponent, selectors: [["app-contact-form"]], inputs: { screenSize: "screenSize" }, decls: 2, vars: 2, consts: [["class", "form-big", 4, "ngIf"], ["class", "form-lowres", 4, "ngIf"], [1, "form-big"], ["name", "name", "type", "text", "placeholder", "Name", 1, "feedback-input"], ["name", "email", "type", "text", "placeholder", "Email", 1, "feedback-input"], ["name", "text", "placeholder", "Comment", 1, "feedback-input"], ["type", "submit", "value", "SUBMIT"], [1, "form-lowres"], ["name", "name", "type", "text", "placeholder", "Name", 1, "feedback-input-low"], ["name", "email", "type", "text", "placeholder", "Email", 1, "feedback-input-low"], ["name", "text", "placeholder", "Comment", 1, "feedback-input-low"]], template: function ContactFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ContactFormComponent_form_0_Template, 5, 0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactFormComponent_form_1_Template, 5, 0, "form", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenSize == "Large" || ctx.screenSize == "XLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenSize != "Large" && ctx.screenSize != "XLarge");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:400,700);\nbody[_ngcontent-%COMP%] {\n  background: #1e1e28;\n}\n.form-big[_ngcontent-%COMP%] {\n  max-width: 320px;\n  margin: 30px auto;\n}\n.form-lowres[_ngcontent-%COMP%] {\n  max-width: 200px;\n  margin: 60px auto;\n}\n.feedback-input[_ngcontent-%COMP%] {\n  color: black;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 300;\n  font-size: 14px;\n  border-radius: 5px;\n  line-height: 20px;\n  background-color: transparent;\n  border: 2px solid #a0a0a0;\n  transition: all 0.3s;\n  padding: 10px;\n  margin-bottom: 15px;\n  width: 100%;\n  box-sizing: border-box;\n  outline: 0;\n}\n.feedback-input[_ngcontent-%COMP%]:focus {\n  border: 2px solid #0f0f0f;\n}\ntextarea[_ngcontent-%COMP%] {\n  height: 150px;\n  line-height: 150%;\n  resize: vertical;\n}\n[type=submit][_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", Arial, Helvetica, sans-serif;\n  width: 100%;\n  background: #4e4e4e;\n  border-radius: 5px;\n  border: 0;\n  cursor: pointer;\n  color: white;\n  font-size: 20px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  transition: all 0.3s;\n  margin-top: -4px;\n  font-weight: 700;\n  margin-bottom: 40px;\n}\n[type=submit][_ngcontent-%COMP%]:hover {\n  background: #000000;\n}\n.feedback-input-low[_ngcontent-%COMP%] {\n  color: black;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 300;\n  font-size: 14px;\n  border-radius: 5px;\n  line-height: 20px;\n  background-color: transparent;\n  border: 2px solid #a0a0a0;\n  transition: all 0.3s;\n  padding: 10px;\n  margin-bottom: 15px;\n  width: 100%;\n  box-sizing: border-box;\n  outline: 0;\n}\n.feedback-input-low[_ngcontent-%COMP%]:focus {\n  border: 2px solid #0f0f0f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC1mb3JtL0M6XFxVc2Vyc1xcRGl2eWFuc2hcXGdpdFxcUG9ydGZvbGlvXFxNeS1Qb3J0Zm9saW8vc3JjXFxhcHBcXGNvbnRhY3QtZm9ybVxcY29udGFjdC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250YWN0LWZvcm0vY29udGFjdC1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHVFQUFBO0FBRVI7RUFBTyxtQkFBQTtBQ0NQO0FEQUE7RUFBWSxnQkFBQTtFQUFpQixpQkFBQTtBQ0s3QjtBREhBO0VBQWUsZ0JBQUE7RUFBaUIsaUJBQUE7QUNRaEM7QUROQTtFQUNFLFlBQUE7RUFDQSxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0FDU0Y7QUROQTtFQUF3Qix5QkFBQTtBQ1V4QjtBRFJBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNXRjtBRFJBO0VBQ0UsdURBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNXRjtBRFRBO0VBQXdCLG1CQUFBO0FDYXhCO0FEVkE7RUFDSSxZQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQ2FKO0FEVkU7RUFBNEIseUJBQUE7QUNjOUIiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0LWZvcm0vY29udGFjdC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6NDAwLDcwMCk7XHJcblxyXG5ib2R5IHsgYmFja2dyb3VuZDpyZ2IoMzAsMzAsNDApOyB9XHJcbi5mb3JtLWJpZyB7IG1heC13aWR0aDozMjBweDsgbWFyZ2luOjMwcHggYXV0bzsgfVxyXG5cclxuLmZvcm0tbG93cmVzIHsgbWF4LXdpZHRoOjIwMHB4OyBtYXJnaW46NjBweCBhdXRvOyB9XHJcblxyXG4uZmVlZGJhY2staW5wdXQge1xyXG4gIGNvbG9yOmJsYWNrO1xyXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6MzAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOjJweCBzb2xpZCAjYTBhMGEwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB3aWR0aDoxMDAlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgb3V0bGluZTowO1xyXG59XHJcblxyXG4uZmVlZGJhY2staW5wdXQ6Zm9jdXMgeyBib3JkZXI6MnB4IHNvbGlkICMwZjBmMGY7IH1cclxuXHJcbnRleHRhcmVhIHtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNTAlO1xyXG4gIHJlc2l6ZTp2ZXJ0aWNhbDtcclxufVxyXG5cclxuW3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDojNGU0ZTRlO1xyXG4gIGJvcmRlci1yYWRpdXM6NXB4O1xyXG4gIGJvcmRlcjowO1xyXG4gIGN1cnNvcjpwb2ludGVyO1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIGZvbnQtc2l6ZToyMHB4O1xyXG4gIHBhZGRpbmctdG9wOjEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206MTBweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICBtYXJnaW4tdG9wOi00cHg7XHJcbiAgZm9udC13ZWlnaHQ6NzAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuW3R5cGU9XCJzdWJtaXRcIl06aG92ZXIgeyBiYWNrZ3JvdW5kOiMwMDAwMDA7IH1cclxuXHJcblxyXG4uZmVlZGJhY2staW5wdXQtbG93IHtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OjMwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6MnB4IHNvbGlkICNhMGEwYTA7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBvdXRsaW5lOjA7XHJcbiAgfVxyXG4gIFxyXG4gIC5mZWVkYmFjay1pbnB1dC1sb3c6Zm9jdXMgeyBib3JkZXI6MnB4IHNvbGlkICMwZjBmMGY7IH0iLCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo0MDAsNzAwKTtcbmJvZHkge1xuICBiYWNrZ3JvdW5kOiAjMWUxZTI4O1xufVxuXG4uZm9ybS1iaWcge1xuICBtYXgtd2lkdGg6IDMyMHB4O1xuICBtYXJnaW46IDMwcHggYXV0bztcbn1cblxuLmZvcm0tbG93cmVzIHtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbiAgbWFyZ2luOiA2MHB4IGF1dG87XG59XG5cbi5mZWVkYmFjay1pbnB1dCB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDJweCBzb2xpZCAjYTBhMGEwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG91dGxpbmU6IDA7XG59XG5cbi5mZWVkYmFjay1pbnB1dDpmb2N1cyB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwZjBmMGY7XG59XG5cbnRleHRhcmVhIHtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgbGluZS1oZWlnaHQ6IDE1MCU7XG4gIHJlc2l6ZTogdmVydGljYWw7XG59XG5cblt0eXBlPXN1Ym1pdF0ge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjNGU0ZTRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgbWFyZ2luLXRvcDogLTRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cblxuW3R5cGU9c3VibWl0XTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XG59XG5cbi5mZWVkYmFjay1pbnB1dC1sb3cge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAycHggc29saWQgI2EwYTBhMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBvdXRsaW5lOiAwO1xufVxuXG4uZmVlZGJhY2staW5wdXQtbG93OmZvY3VzIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzBmMGYwZjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact-form',
                templateUrl: './contact-form.component.html',
                styleUrls: ['./contact-form.component.scss']
            }]
    }], function () { return []; }, { screenSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/experience/experience.component.ts":
/*!****************************************************!*\
  !*** ./src/app/experience/experience.component.ts ***!
  \****************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function ExperienceComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Experience");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Companies I have worked with...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Hyderabad, Telangana, INDIA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Software Engineer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " July'2019 - Present");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Worked alongside product managers to architect a multi-step manual process into a single page web-app resulting in time and money savings.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Built REST APIs that served Angular based web app that handled over 500,000 concurrent users at a time.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Designed an Automation Test Framework based on REST Assured framework validating regression suite of more than a million test cases.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Chandigarh, INDIA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Product Support Intern");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " January'19 - June'19");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Worked as a Product Support Intern for 6 months and got recommended in Cloud Based Security Domain. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Troubleshooting and resolving network and cloud firewall related issues.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExperienceComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Experience");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Companies I have worked with...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Hyderabad, Telangana, INDIA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Software Engineer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " July'2019 - Present");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Worked alongside product managers to architect a multi-step manual process into a single page web-app resulting in time and money savings.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Built REST APIs that served Angular based web app that handled over 500,000 concurrent users at a time.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Designed an Automation Test Framework based on REST Assured framework validating regression suite of more than a million test cases.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Chandigarh, INDIA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Intern");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " January'19 - June'19");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Worked as a Product Support Intern for 6 months and got recommended in Cloud Based Security Domain. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Troubleshooting and resolving network and cloud firewall related issues.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ExperienceComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ExperienceComponent.ɵfac = function ExperienceComponent_Factory(t) { return new (t || ExperienceComponent)(); };
ExperienceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExperienceComponent, selectors: [["app-experience"]], inputs: { screenSize: "screenSize" }, decls: 3, vars: 2, consts: [[1, "body"], ["class", "table-div", 4, "ngIf"], ["class", "table-div-lowres", 4, "ngIf"], [1, "table-div"], [1, "header"], [1, "sub-header"], [2, "height", "60vh", "width", "100%"], [2, "display", "flex"], [1, "image-div"], ["src", "../../assets/images/UHG.png", "alt", "UnitedHealth Group", 1, "image", 2, "margin-top", "5%"], [1, "subtitle"], [1, "work-ex-list"], [1, "check-list"], ["src", "../../assets/images/zscaler.png", "alt", "UnitedHealth Group", 1, "image"], [1, "table-div-lowres"], [1, "header-lowres"], [1, "sub-header-lowres"], [2, "height", "100%", "width", "100%"], [2, "margin-top", "8%"]], template: function ExperienceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExperienceComponent_div_1_Template, 50, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExperienceComponent_div_2_Template, 55, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenSize == "Large" || ctx.screenSize == "XLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenSize != "Large" && ctx.screenSize != "XLarge");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200[_ngcontent-%COMP%];300[_ngcontent-%COMP%];400&display=swap\")[_ngcontent-%COMP%];\n.body[_ngcontent-%COMP%] {\n  background-color: white;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin-top: -10vh;\n  padding-bottom: 15vh;\n}\n.header[_ngcontent-%COMP%] {\n  color: black;\n  margin: 0px;\n  letter-spacing: 15px;\n  text-align: center;\n  display: flex;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n  font-size: 38px;\n  font-weight: bold;\n  height: 15vh;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n}\n.sub-header[_ngcontent-%COMP%] {\n  color: black;\n  margin: 0px;\n  text-align: center;\n  display: flex;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 28px;\n  height: 5vh;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n}\n.sub-header-lowres[_ngcontent-%COMP%] {\n  color: black;\n  margin: 0px;\n  text-align: center;\n  display: flex;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 22px;\n  height: 5vh;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n}\n.image-div[_ngcontent-%COMP%] {\n  letter-spacing: 15px;\n  text-align: center;\n  display: flex;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n  font-size: 38px;\n  font-weight: bold;\n  height: 100%;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n  color: white;\n}\n.image[_ngcontent-%COMP%] {\n  height: 60%;\n  width: 60%;\n  padding: 20px;\n}\n.work-ex-list[_ngcontent-%COMP%] {\n  color: black;\n  font-size: 14px;\n  display: flex;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Montserrat\", sans-serif;\n  margin-left: 10%;\n  text-align: justify;\n  padding-right: 50px;\n}\n.image-title[_ngcontent-%COMP%] {\n  display: flex;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Montserrat\", sans-serif;\n  color: white;\n  font-size: 22px;\n  font-weight: 300;\n}\n.table-div[_ngcontent-%COMP%] {\n  margin-left: 100px;\n  margin-right: 100px;\n  margin-top: 40px;\n  border-collapse: collapse;\n}\ntable[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  border: none;\n}\ntd[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 50%;\n}\n.subtitle[_ngcontent-%COMP%] {\n  color: black;\n  font-size: 15px;\n  display: flex;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Montserrat\", sans-serif;\n  line-height: 1.6;\n  text-align: center;\n}\n.image-lowres[_ngcontent-%COMP%] {\n  height: 90%;\n  width: 90%;\n  padding: 10px;\n}\n.image-div-lowres[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n}\n.table-div-lowres[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 40px;\n  border-collapse: collapse;\n}\n.image-lowres[_ngcontent-%COMP%] {\n  height: 90%;\n  width: 90%;\n  padding: 10px;\n}\n.image-div-lowres[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n}\n.header-lowres[_ngcontent-%COMP%] {\n  margin: 0px;\n  letter-spacing: 5px;\n  text-align: center;\n  display: flex;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n  font-size: 32px;\n  font-weight: bold;\n  height: 15vh;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n  color: black;\n}\n.table-div-lowres[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  display: flex;\n}\n.table-div-lowres[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwZXJpZW5jZS9DOlxcVXNlcnNcXERpdnlhbnNoXFxnaXRcXFBvcnRmb2xpb1xcTXktUG9ydGZvbGlvL3NyY1xcYXBwXFxleHBlcmllbmNlXFxleHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9leHBlcmllbmNlL2V4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ1Esb0dBQUE7QUFFUjtFQUNJLHVCQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ0RKO0FESUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNESjtBRElBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDREo7QURJQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0RKO0FES0E7RUFFSSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHFDQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQ0hKO0FEU0E7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUNOSjtBRFdBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNSSjtBRGNBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFDQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1hKO0FEZUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQ1pKO0FEZUE7RUFDSSxZQUFBO0FDWko7QURlRTtFQUNFLFlBQUE7RUFDQyxVQUFBO0FDWkw7QURlRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ1pKO0FEZ0JBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FDYko7QURrQkE7RUFFSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ2hCSjtBRHFCQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FDbEJKO0FEcUJBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FDbEJKO0FEdUJBO0VBRUksYUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNyQko7QUR5QkE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUN0Qko7QUQwQkE7RUFFQSxhQUFBO0FDeEJBO0FENEJBO0VBRUksV0FBQTtBQzFCSiIsImZpbGUiOiJzcmMvYXBwL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0OndnaHRAMTAwOzIwMDszMDA7NDAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuLmJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgbWFyZ2luLXRvcDogLTEwdmg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTV2aDtcclxufVxyXG5cclxuLmhlYWRlcntcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgbWFyZ2luOjBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6MzhweDtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBoZWlnaHQ6IDE1dmg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uc3ViLWhlYWRlcntcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgbWFyZ2luOjBweDtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6MjhweDtcclxuICAgIGhlaWdodDogNXZoO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnN1Yi1oZWFkZXItbG93cmVze1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICBtYXJnaW46MHB4O1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZToyMnB4O1xyXG4gICAgaGVpZ2h0OiA1dmg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLmltYWdlLWRpdntcclxuICAgIFxyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTozOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBcclxuICAgIFxyXG59XHJcblxyXG5cclxuLmltYWdle1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIFxyXG4gICAgXHJcbn1cclxuXHJcbi53b3JrLWV4LWxpc3R7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLmltYWdlLXRpdGxle1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOjIycHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG5cclxuLnRhYmxlLWRpdntcclxuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxufVxyXG5cclxudGFibGUsIHRkIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcblxyXG4gIHRke1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG5cclxuICAuc3VidGl0bGV7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4uaW1hZ2UtbG93cmVze1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIFxyXG4gICAgXHJcbn1cclxuXHJcbi5pbWFnZS1kaXYtbG93cmVze1xyXG4gICAgICAgIFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBcclxufVxyXG5cclxuXHJcbi50YWJsZS1kaXYtbG93cmVze1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxufVxyXG5cclxuLmltYWdlLWxvd3Jlc3tcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBcclxuICAgIFxyXG59XHJcblxyXG4uaW1hZ2UtZGl2LWxvd3Jlc3tcclxuICAgICAgICBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgXHJcbn1cclxuXHJcbi5oZWFkZXItbG93cmVze1xyXG4gICAgbWFyZ2luOjBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTozMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgIGhlaWdodDogMTV2aDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBcclxufVxyXG5cclxuLnRhYmxlLWRpdi1sb3dyZXMgdHIge1xyXG5cclxuZGlzcGxheTogZmxleDtcclxuXHJcbn1cclxuXHJcbi50YWJsZS1kaXYtbG93cmVzIHRkIHtcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIFxyXG4gICAgfVxyXG5cclxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEAxMDA7MjAwOzMwMDs0MDAmZGlzcGxheT1zd2FwXCIpO1xuLmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgbWFyZ2luLXRvcDogLTEwdmg7XG4gIHBhZGRpbmctYm90dG9tOiAxNXZoO1xufVxuXG4uaGVhZGVyIHtcbiAgY29sb3I6IGJsYWNrO1xuICBtYXJnaW46IDBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDM4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBoZWlnaHQ6IDE1dmg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc3ViLWhlYWRlciB7XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luOiAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDI4cHg7XG4gIGhlaWdodDogNXZoO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnN1Yi1oZWFkZXItbG93cmVzIHtcbiAgY29sb3I6IGJsYWNrO1xuICBtYXJnaW46IDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgaGVpZ2h0OiA1dmg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaW1hZ2UtZGl2IHtcbiAgbGV0dGVyLXNwYWNpbmc6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDM4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5pbWFnZSB7XG4gIGhlaWdodDogNjAlO1xuICB3aWR0aDogNjAlO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4ud29yay1leC1saXN0IHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG59XG5cbi5pbWFnZS10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4udGFibGUtZGl2IHtcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG50YWJsZSwgdGQge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbnRkIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogNTAlO1xufVxuXG4uc3VidGl0bGUge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW1hZ2UtbG93cmVzIHtcbiAgaGVpZ2h0OiA5MCU7XG4gIHdpZHRoOiA5MCU7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5pbWFnZS1kaXYtbG93cmVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnRhYmxlLWRpdi1sb3dyZXMge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG4uaW1hZ2UtbG93cmVzIHtcbiAgaGVpZ2h0OiA5MCU7XG4gIHdpZHRoOiA5MCU7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5pbWFnZS1kaXYtbG93cmVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmhlYWRlci1sb3dyZXMge1xuICBtYXJnaW46IDBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGhlaWdodDogMTV2aDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnRhYmxlLWRpdi1sb3dyZXMgdHIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4udGFibGUtZGl2LWxvd3JlcyB0ZCB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperienceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-experience',
                templateUrl: './experience.component.html',
                styleUrls: ['./experience.component.scss']
            }]
    }], function () { return []; }, { screenSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _social_tray_social_tray_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../social-tray/social-tray.component */ "./src/app/social-tray/social-tray.component.ts");



class FooterComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 7, vars: 1, consts: [[1, "body"], [1, "sub-header-lowres"], [3, "screenSize"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Divyansh Chauhan \u00A9 2022\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-social-tray", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("screenSize", "Large");
    } }, directives: [_social_tray_social_tray_component__WEBPACK_IMPORTED_MODULE_1__["SocialTrayComponent"]], styles: [".body[_ngcontent-%COMP%] {\n  background-color: black;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: 100%;\n  padding-bottom: 20px;\n}\n\n.header[_ngcontent-%COMP%] {\n  color: white;\n  margin: 0px;\n  letter-spacing: 15px;\n  text-align: center;\n  display: flex;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n  font-size: 38px;\n  font-weight: bold;\n  height: 15vh;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n  margin-top: 50px;\n}\n\n.sub-header[_ngcontent-%COMP%] {\n  color: white;\n  margin: 0px;\n  text-align: center;\n  display: flex;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 20px;\n  height: 5vh;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n  margin-top: 50px;\n}\n\n.sub-header-lowres[_ngcontent-%COMP%] {\n  color: white;\n  margin: 0px;\n  text-align: center;\n  display: flex;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 16px;\n  height: 5vh;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0M6XFxVc2Vyc1xcRGl2eWFuc2hcXGdpdFxcUG9ydGZvbGlvXFxNeS1Qb3J0Zm9saW8vc3JjXFxhcHBcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uaGVhZGVye1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBtYXJnaW46MHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTozOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgIGhlaWdodDogMTV2aDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG4uc3ViLWhlYWRlcntcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgbWFyZ2luOjBweDtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6MjBweDtcclxuICAgIGhlaWdodDogNXZoO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi5zdWItaGVhZGVyLWxvd3Jlc3tcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgbWFyZ2luOjBweDtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6MTZweDtcclxuICAgIGhlaWdodDogNXZoO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufSIsIi5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuLmhlYWRlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAzOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgaGVpZ2h0OiAxNXZoO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLnN1Yi1oZWFkZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBoZWlnaHQ6IDV2aDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5zdWItaGVhZGVyLWxvd3JlcyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogNXZoO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/get-in-touch/get-in-touch.component.ts":
/*!********************************************************!*\
  !*** ./src/app/get-in-touch/get-in-touch.component.ts ***!
  \********************************************************/
/*! exports provided: GetInTouchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetInTouchComponent", function() { return GetInTouchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contact-form/contact-form.component */ "./src/app/contact-form/contact-form.component.ts");




function GetInTouchComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Get in Touch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "For business inquiries, Just drop a message below ! \uD83D\uDE03");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-contact-form", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("screenSize", ctx_r65.screenSize);
} }
function GetInTouchComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Get in Touch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "For business inquiries, Just drop a message below ! \uD83D\uDE03");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-contact-form", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("screenSize", ctx_r66.screenSize);
} }
class GetInTouchComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
GetInTouchComponent.ɵfac = function GetInTouchComponent_Factory(t) { return new (t || GetInTouchComponent)(); };
GetInTouchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GetInTouchComponent, selectors: [["app-get-in-touch"]], inputs: { screenSize: "screenSize" }, decls: 3, vars: 2, consts: [[1, "body"], ["class", "table-div", 4, "ngIf"], ["class", "table-div-lowres", 4, "ngIf"], [1, "table-div"], [1, "header"], [1, "sub-header"], [3, "screenSize"], [1, "table-div-lowres"], [1, "header-lowres"], [1, "sub-header-lowres"]], template: function GetInTouchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GetInTouchComponent_div_1_Template, 6, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GetInTouchComponent_div_2_Template, 6, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenSize == "Large" || ctx.screenSize == "XLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenSize != "Large" && ctx.screenSize != "XLarge");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_2__["ContactFormComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200[_ngcontent-%COMP%];300[_ngcontent-%COMP%];400&display=swap\")[_ngcontent-%COMP%];\n.body[_ngcontent-%COMP%] {\n  background-color: white;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding-bottom: 14vh;\n}\n.header[_ngcontent-%COMP%] {\n  color: black;\n  margin: 0px;\n  letter-spacing: 15px;\n  text-align: center;\n  display: flex;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n  font-size: 38px;\n  font-weight: bold;\n  height: 15vh;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n  margin-top: 50px;\n}\n.sub-header[_ngcontent-%COMP%] {\n  color: black;\n  margin: 0px;\n  text-align: center;\n  display: flex;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 20px;\n  height: 5vh;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n  margin-top: 50px;\n}\n.sub-header-lowres[_ngcontent-%COMP%] {\n  color: black;\n  margin: 0px;\n  text-align: center;\n  display: flex;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 16px;\n  height: 5vh;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n}\n.image-div[_ngcontent-%COMP%] {\n  letter-spacing: 15px;\n  text-align: center;\n  display: flex;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n  font-size: 38px;\n  font-weight: bold;\n  height: 100%;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n  color: white;\n}\n.image[_ngcontent-%COMP%] {\n  height: 60%;\n  width: 60%;\n  padding: 20px;\n}\n.work-ex-list[_ngcontent-%COMP%] {\n  color: black;\n  font-size: 14px;\n  display: flex;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Montserrat\", sans-serif;\n  margin-left: 10%;\n  text-align: justify;\n  padding-right: 50px;\n}\n.image-title[_ngcontent-%COMP%] {\n  display: flex;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Montserrat\", sans-serif;\n  color: white;\n  font-size: 22px;\n  font-weight: 300;\n}\n.table-div[_ngcontent-%COMP%] {\n  margin-left: 100px;\n  margin-right: 100px;\n  margin-top: 40px;\n  border-collapse: collapse;\n}\ntable[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  border: none;\n}\ntd[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 50%;\n}\n.subtitle[_ngcontent-%COMP%] {\n  color: black;\n  font-size: 15px;\n  display: flex;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Montserrat\", sans-serif;\n  line-height: 1.6;\n  text-align: center;\n}\n.image-lowres[_ngcontent-%COMP%] {\n  height: 90%;\n  width: 90%;\n  padding: 10px;\n}\n.image-div-lowres[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n}\n.table-div-lowres[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 40px;\n  border-collapse: collapse;\n}\n.image-lowres[_ngcontent-%COMP%] {\n  height: 90%;\n  width: 90%;\n  padding: 10px;\n}\n.image-div-lowres[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n}\n.header-lowres[_ngcontent-%COMP%] {\n  margin: 0px;\n  letter-spacing: 5px;\n  text-align: center;\n  display: flex;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n  font-size: 32px;\n  font-weight: bold;\n  height: 15vh;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n  color: black;\n}\n.table-div-lowres[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  display: flex;\n}\n.table-div-lowres[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.contact-form-lowres[_ngcontent-%COMP%] {\n  transform: scale(40%);\n  margin-bottom: 50px;\n}\n.footer[_ngcontent-%COMP%] {\n  background-color: black;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2V0LWluLXRvdWNoL0M6XFxVc2Vyc1xcRGl2eWFuc2hcXGdpdFxcUG9ydGZvbGlvXFxNeS1Qb3J0Zm9saW8vc3JjXFxhcHBcXGdldC1pbi10b3VjaFxcZ2V0LWluLXRvdWNoLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9nZXQtaW4tdG91Y2gvZ2V0LWluLXRvdWNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNRLG9HQUFBO0FBRVI7RUFDSSx1QkFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLG9CQUFBO0FDREo7QURJQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDREo7QURJQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDREo7QURJQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0RKO0FES0E7RUFFSSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHFDQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQ0hKO0FEU0E7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUNOSjtBRFdBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNSSjtBRGNBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFDQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1hKO0FEZUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQ1pKO0FEZUE7RUFDSSxZQUFBO0FDWko7QURlRTtFQUNFLFlBQUE7RUFDQyxVQUFBO0FDWkw7QURlRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ1pKO0FEZ0JBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FDYko7QURrQkE7RUFFSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ2hCSjtBRHFCQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FDbEJKO0FEcUJBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FDbEJKO0FEdUJBO0VBRUksYUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNyQko7QUR5QkE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUN0Qko7QUQwQkE7RUFFQSxhQUFBO0FDeEJBO0FENEJBO0VBRUksV0FBQTtBQzFCSjtBRDhCQTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7QUMzQko7QUQ4QkE7RUFDSSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDM0JKIiwiZmlsZSI6InNyYy9hcHAvZ2V0LWluLXRvdWNoL2dldC1pbi10b3VjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0OndnaHRAMTAwOzIwMDszMDA7NDAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuLmJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE0dmg7XHJcbn1cclxuXHJcbi5oZWFkZXJ7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIG1hcmdpbjowcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMTVweDtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOjM4cHg7XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgaGVpZ2h0OiAxNXZoO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi5zdWItaGVhZGVye1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICBtYXJnaW46MHB4O1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgaGVpZ2h0OiA1dmg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5cclxuLnN1Yi1oZWFkZXItbG93cmVze1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICBtYXJnaW46MHB4O1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gICAgaGVpZ2h0OiA1dmg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLmltYWdlLWRpdntcclxuICAgIFxyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTozOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBcclxuICAgIFxyXG59XHJcblxyXG5cclxuLmltYWdle1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIFxyXG4gICAgXHJcbn1cclxuXHJcbi53b3JrLWV4LWxpc3R7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLmltYWdlLXRpdGxle1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOjIycHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG5cclxuLnRhYmxlLWRpdntcclxuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxufVxyXG5cclxudGFibGUsIHRkIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcblxyXG4gIHRke1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG5cclxuICAuc3VidGl0bGV7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4uaW1hZ2UtbG93cmVze1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIFxyXG4gICAgXHJcbn1cclxuXHJcbi5pbWFnZS1kaXYtbG93cmVze1xyXG4gICAgICAgIFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBcclxufVxyXG5cclxuXHJcbi50YWJsZS1kaXYtbG93cmVze1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxufVxyXG5cclxuLmltYWdlLWxvd3Jlc3tcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBcclxuICAgIFxyXG59XHJcblxyXG4uaW1hZ2UtZGl2LWxvd3Jlc3tcclxuICAgICAgICBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgXHJcbn1cclxuXHJcbi5oZWFkZXItbG93cmVze1xyXG4gICAgbWFyZ2luOjBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTozMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgIGhlaWdodDogMTV2aDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBcclxufVxyXG5cclxuLnRhYmxlLWRpdi1sb3dyZXMgdHIge1xyXG5cclxuZGlzcGxheTogZmxleDtcclxuXHJcbn1cclxuXHJcbi50YWJsZS1kaXYtbG93cmVzIHRkIHtcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIFxyXG4gICAgfVxyXG5cclxuLmNvbnRhY3QtZm9ybS1sb3dyZXN7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDQwJSk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4uZm9vdGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufSIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0OndnaHRAMTAwOzIwMDszMDA7NDAwJmRpc3BsYXk9c3dhcFwiKTtcbi5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAxNHZoO1xufVxuXG4uaGVhZGVyIHtcbiAgY29sb3I6IGJsYWNrO1xuICBtYXJnaW46IDBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDM4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBoZWlnaHQ6IDE1dmg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4uc3ViLWhlYWRlciB7XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luOiAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGhlaWdodDogNXZoO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLnN1Yi1oZWFkZXItbG93cmVzIHtcbiAgY29sb3I6IGJsYWNrO1xuICBtYXJnaW46IDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgaGVpZ2h0OiA1dmg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaW1hZ2UtZGl2IHtcbiAgbGV0dGVyLXNwYWNpbmc6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDM4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5pbWFnZSB7XG4gIGhlaWdodDogNjAlO1xuICB3aWR0aDogNjAlO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4ud29yay1leC1saXN0IHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG59XG5cbi5pbWFnZS10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4udGFibGUtZGl2IHtcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG50YWJsZSwgdGQge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbnRkIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogNTAlO1xufVxuXG4uc3VidGl0bGUge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW1hZ2UtbG93cmVzIHtcbiAgaGVpZ2h0OiA5MCU7XG4gIHdpZHRoOiA5MCU7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5pbWFnZS1kaXYtbG93cmVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnRhYmxlLWRpdi1sb3dyZXMge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG4uaW1hZ2UtbG93cmVzIHtcbiAgaGVpZ2h0OiA5MCU7XG4gIHdpZHRoOiA5MCU7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5pbWFnZS1kaXYtbG93cmVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmhlYWRlci1sb3dyZXMge1xuICBtYXJnaW46IDBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGhlaWdodDogMTV2aDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnRhYmxlLWRpdi1sb3dyZXMgdHIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4udGFibGUtZGl2LWxvd3JlcyB0ZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGFjdC1mb3JtLWxvd3JlcyB7XG4gIHRyYW5zZm9ybTogc2NhbGUoNDAlKTtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GetInTouchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-get-in-touch',
                templateUrl: './get-in-touch.component.html',
                styleUrls: ['./get-in-touch.component.scss']
            }]
    }], function () { return []; }, { screenSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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
HeroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeroComponent, selectors: [["app-hero"]], inputs: { screenSize: "screenSize" }, decls: 4, vars: 1, consts: [[1, "body"], [1, "hero-vid"], [3, "screenSize"]], template: function HeroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-video");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-herotitle2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("screenSize", ctx.screenSize);
    } }, directives: [_video_video_component__WEBPACK_IMPORTED_MODULE_1__["VideoComponent"], _herotitle2_herotitle2_component__WEBPACK_IMPORTED_MODULE_2__["Herotitle2Component"]], styles: [".body[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0);\n  height: 100%;\n}\n\n.hero-vid[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5vh;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVyby9DOlxcVXNlcnNcXERpdnlhbnNoXFxnaXRcXFBvcnRmb2xpb1xcTXktUG9ydGZvbGlvL3NyY1xcYXBwXFxoZXJvXFxoZXJvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZXJvL2hlcm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9oZXJvL2hlcm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5oZXJvLXZpZHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNXZoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBcclxuXHJcbn0iLCIuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmhlcm8tdmlkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDV2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */"] });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hey! Its me,");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Divyansh");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Traveller");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Engineer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Story Teller");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "I am a Software Engineer based in Gurgaon, India.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " I like to build solid & scalable applications/software solutions. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-social-tray", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("screenSize", ctx_r23.screenSize);
} }
function Herotitle2Component_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-social-tray", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("screenSize", ctx_r24.screenSize);
} }
function Herotitle2Component_div_2_br_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
} }
function Herotitle2Component_div_2_br_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
} }
function Herotitle2Component_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hey! Its me,");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Divyansh");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Traveller");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Engineer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Story Teller");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Software Engineer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, Herotitle2Component_div_2_br_19_Template, 1, 0, "br", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " based in Gurgaon, India.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Likes to Build solid & scalable ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, Herotitle2Component_div_2_br_23_Template, 1, 0, "br", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " applications/software solutions.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r25.screenSize != "Large" && ctx_r25.screenSize != "XLarge");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r25.screenSize != "Large" && ctx_r25.screenSize != "XLarge");
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
Herotitle2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Herotitle2Component, selectors: [["app-herotitle2"]], inputs: { screenSize: "screenSize" }, decls: 3, vars: 3, consts: [["id", "container", 4, "ngIf"], ["class", "verticalSocialTray", 4, "ngIf"], ["id", "containersmall", 4, "ngIf"], ["id", "container"], [2, "font-size", "20px", "font-weight", "500", "text-transform", "capitalize"], [2, "text-transform", "capitalize", "font-weight", "600"], ["id", "flip"], [2, "text-transform", "none", "font-weight", "500", "font-size", "16px"], [3, "screenSize"], [1, "verticalSocialTray"], ["id", "containersmall"], [4, "ngIf"]], template: function Herotitle2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Herotitle2Component_div_0_Template, 22, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Herotitle2Component_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Herotitle2Component_div_2_Template, 25, 2, "div", 2);
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
/* harmony import */ var _assets_projects_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/projects.json */ "./src/assets/projects.json");
var _assets_projects_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/projects.json */ "./src/assets/projects.json", 1);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _hero_hero_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hero/hero.component */ "./src/app/hero/hero.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../experience/experience.component */ "./src/app/experience/experience.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _get_in_touch_get_in_touch_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../get-in-touch/get-in-touch.component */ "./src/app/get-in-touch/get-in-touch.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");
















function NavbarComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_span_18_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.scroll("about"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "About");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_span_18_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.scroll("experience"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Experience");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_span_18_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.scroll("projects"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Projects");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_span_18_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.scroll("getInTouch"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Get In Touch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_button_20_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r0.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "menu ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_app_about_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-about", 30);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("screenSize", ctx_r4.screenSize);
} }
function NavbarComponent_app_about_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-about", 31);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("screenSize", ctx_r5.screenSize);
} }
function NavbarComponent_app_experience_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-experience", 32);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("screenSize", ctx_r6.screenSize);
} }
function NavbarComponent_app_experience_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-experience", 33);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("screenSize", ctx_r7.screenSize);
} }
function NavbarComponent_app_projects_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-projects", 34);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("screenSize", ctx_r8.screenSize)("projectList", ctx_r8.projectList);
} }
function NavbarComponent_app_projects_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-projects", 35);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("screenSize", ctx_r9.screenSize)("projectList", ctx_r9.projectList);
} }
function NavbarComponent_app_get_in_touch_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-get-in-touch", 36);
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("screenSize", ctx_r10.screenSize);
} }
function NavbarComponent_app_get_in_touch_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-get-in-touch", 37);
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("screenSize", ctx_r11.screenSize);
} }
function NavbarComponent_app_footer_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-footer", 38);
} }
function NavbarComponent_app_footer_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-footer", 39);
} }
class NavbarComponent {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isSideNavOpen = false;
        this.projectList = _assets_projects_json__WEBPACK_IMPORTED_MODULE_1__;
    }
    toggleSideNav() {
        this.isSideNavOpen = !this.isSideNavOpen;
    }
    scroll(el) {
        el = document.getElementById(el);
        el.scrollIntoView();
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], inputs: { screenSize: "screenSize" }, decls: 33, vars: 14, consts: [[1, "body"], [1, "drawer-container"], ["position", "end", "mode", "over", "appOpenSidebarOnSwipe", "", 1, "side-nav"], ["drawer", ""], [3, "multiple"], ["value", "about", 1, "list-option", 3, "click"], ["value", "experience", 1, "list-option", 3, "click"], ["value", "projects", 1, "list-option", 3, "click"], [1, "drawer-content"], [1, "nav-bar"], [1, "toolbar-div"], [1, "toolbar-title"], ["class", "toolbar-buttons", 4, "ngIf"], [1, "toolbar-menu"], ["mat-icon-button", "", 3, "click", 4, "ngIf"], [1, "hero", 3, "screenSize"], ["hero", ""], ["id", "about", "class", "about-lowres", 3, "screenSize", 4, "ngIf"], ["id", "about", "class", "about", 3, "screenSize", 4, "ngIf"], ["id", "experience", "class", "experience-lowres", 3, "screenSize", 4, "ngIf"], ["id", "experience", "class", "experience", 3, "screenSize", 4, "ngIf"], ["id", "projects", "class", "projects-lowres", 3, "screenSize", "projectList", 4, "ngIf"], ["id", "projects", "class", "projects", 3, "screenSize", "projectList", 4, "ngIf"], ["id", "getInTouch", "class", "getInTouch-lowres", 3, "screenSize", 4, "ngIf"], ["id", "getInTouch", "class", "getInTouch", 3, "screenSize", 4, "ngIf"], ["id", "footer", "class", "footer-lowres", 4, "ngIf"], ["id", "footer", "class", "footer", 4, "ngIf"], [1, "toolbar-buttons"], ["mat-button", "", 1, "button", 3, "click"], ["mat-icon-button", "", 3, "click"], ["id", "about", 1, "about-lowres", 3, "screenSize"], ["id", "about", 1, "about", 3, "screenSize"], ["id", "experience", 1, "experience-lowres", 3, "screenSize"], ["id", "experience", 1, "experience", 3, "screenSize"], ["id", "projects", 1, "projects-lowres", 3, "screenSize", "projectList"], ["id", "projects", 1, "projects", 3, "screenSize", "projectList"], ["id", "getInTouch", 1, "getInTouch-lowres", 3, "screenSize"], ["id", "getInTouch", 1, "getInTouch", 3, "screenSize"], ["id", "footer", 1, "footer-lowres"], ["id", "footer", 1, "footer"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-drawer-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-drawer", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-selection-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-list-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_mat_list_option_click_5_listener() { return ctx.scroll("about"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-list-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_mat_list_option_click_7_listener() { return ctx.scroll("experience"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-list-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_mat_list_option_click_9_listener() { return ctx.scroll("projects"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-list-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_mat_list_option_click_11_listener() { return ctx.scroll("getInTouch"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Get In Touch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-drawer-content", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-toolbar", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Divyansh Chauhan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, NavbarComponent_span_18_Template, 13, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, NavbarComponent_button_20_Template, 3, 0, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-hero", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, NavbarComponent_app_about_23_Template, 1, 1, "app-about", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, NavbarComponent_app_about_24_Template, 1, 1, "app-about", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, NavbarComponent_app_experience_25_Template, 1, 1, "app-experience", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, NavbarComponent_app_experience_26_Template, 1, 1, "app-experience", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, NavbarComponent_app_projects_27_Template, 1, 2, "app-projects", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, NavbarComponent_app_projects_28_Template, 1, 2, "app-projects", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, NavbarComponent_app_get_in_touch_29_Template, 1, 1, "app-get-in-touch", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, NavbarComponent_app_get_in_touch_30_Template, 1, 1, "app-get-in-touch", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, NavbarComponent_app_footer_31_Template, 1, 0, "app-footer", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, NavbarComponent_app_footer_32_Template, 1, 0, "app-footer", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multiple", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenSize == "Large" || ctx.screenSize == "XLarge" || ctx.screenSize == "Medium");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenSize != "Large" && ctx.screenSize != "XLarge" && ctx.screenSize != "Medium");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("screenSize", ctx.screenSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenSize != "Large" && ctx.screenSize != "XLarge" && ctx.screenSize != "Medium");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenSize == "Large" || ctx.screenSize == "XLarge" || ctx.screenSize == "Medium");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenSize != "Large" && ctx.screenSize != "XLarge" && ctx.screenSize != "Medium");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenSize == "Large" || ctx.screenSize == "XLarge" || ctx.screenSize == "Medium");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenSize != "Large" && ctx.screenSize != "XLarge" && ctx.screenSize != "Medium");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenSize == "Large" || ctx.screenSize == "XLarge" || ctx.screenSize == "Medium");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenSize != "Large" && ctx.screenSize != "XLarge" && ctx.screenSize != "Medium");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenSize == "Large" || ctx.screenSize == "XLarge" || ctx.screenSize == "Medium");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenSize != "Large" && ctx.screenSize != "XLarge" && ctx.screenSize != "Medium");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenSize == "Large" || ctx.screenSize == "XLarge" || ctx.screenSize == "Medium");
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatDrawer"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatSelectionList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListOption"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatDrawerContent"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _hero_hero_component__WEBPACK_IMPORTED_MODULE_7__["HeroComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"], _experience_experience_component__WEBPACK_IMPORTED_MODULE_11__["ExperienceComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_12__["ProjectsComponent"], _get_in_touch_get_in_touch_component__WEBPACK_IMPORTED_MODULE_13__["GetInTouchComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"]], styles: ["html[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n}\n\n.nav-bar[_ngcontent-%COMP%] {\n  height: 80px;\n  background: rgba(0, 0, 0, 0.623);\n  color: white;\n  box-shadow: 3px 1px 12px 4px #000000;\n  transition: all 0.2s;\n  border-radius: 0;\n  display: flex;\n  position: fixed;\n  \n  top: 0;\n  \n  width: 100%;\n  \n  -webkit-backdrop-filter: blur(1px);\n          backdrop-filter: blur(1px);\n  z-index: 1;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.button[_ngcontent-%COMP%] {\n  min-width: 100px;\n  min-height: 30px;\n  font-weight: 400;\n  font-size: 14px;\n}\n\n.title[_ngcontent-%COMP%] {\n  min-width: 600px;\n  min-height: 60px;\n  font-weight: 400;\n  font-size: 16px;\n  height: 100%;\n  vertical-align: middle;\n}\n\n.day-night[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  vertical-align: middle;\n}\n\n.material-icons-sharp[_ngcontent-%COMP%] {\n  font-size: 24px;\n  padding: 20px;\n  vertical-align: middle;\n}\n\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n}\n\n.fill-remaining-space[_ngcontent-%COMP%] {\n  \n  flex: 1 1 auto;\n}\n\n.drawer-container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  background-color: black;\n}\n\n.toolbar-div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: inline-block;\n  min-width: 100px;\n  text-align: center;\n  margin-right: auto;\n}\n\n.toolbar-div[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 100%;\n  flex: 1 1 0;\n}\n\n.side-nav[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  background-color: #0000007a;\n  margin-top: 80px;\n}\n\n.toolbar-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n}\n\n.toolbar-title[_ngcontent-%COMP%] {\n  min-width: 60%;\n  text-align: left;\n  align-items: flex-start;\n  padding-left: 6%;\n  font-size: medium;\n  vertical-align: bottom;\n  justify-self: center;\n  font-weight: 400;\n}\n\n.toolbar-menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row-reverse;\n  margin-right: auto;\n  flex: 1;\n}\n\n.hero[_ngcontent-%COMP%] {\n  height: 80vh;\n  width: 100%;\n  background-color: aqua;\n  z-index: -1;\n}\n\n.drawer-content[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.list-option[_ngcontent-%COMP%] {\n  color: white;\n  height: 120px;\n  font-size: large;\n  padding: 8px;\n  margin: 8px;\n}\n\n.about[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n  position: relative;\n  top: -20vh;\n  height: 100%;\n  z-index: -1;\n}\n\n.body[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.about-lowres[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n  position: relative;\n  top: -20vh;\n  height: 100%;\n  z-index: -1;\n}\n\n.experience[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  position: relative;\n  z-index: -1;\n  margin-bottom: 20vh;\n}\n\n.experience-lowres[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  max-width: 100%;\n  height: 100%;\n  z-index: -1;\n}\n\n.projects[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  height: 100%;\n  max-width: 100%;\n  z-index: -1;\n  margin-bottom: 20vh;\n}\n\n.projects-lowres[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  max-width: 100%;\n  height: 100%;\n  z-index: -1;\n}\n\n.getInTouch-lowres[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: -1;\n}\n\n.getInTouch[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  position: relative;\n  z-index: -1;\n}\n\n.footer-lowres[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n  height: 20vh;\n  position: relative;\n  z-index: -1;\n}\n\n.footer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 17vh;\n  max-width: 100%;\n  position: relative;\n  z-index: -1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL0M6XFxVc2Vyc1xcRGl2eWFuc2hcXGdpdFxcUG9ydGZvbGlvXFxNeS1Qb3J0Zm9saW8vc3JjXFxhcHBcXG5hdmJhclxcbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7QUNDRjs7QURFQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0UsZUFBQTtFQUFpQixxQ0FBQTtFQUNqQixNQUFBO0VBQVEsK0NBQUE7RUFDUixXQUFBO0VBQWEsZUFBQTtFQUNmLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSxVQUFBO0FDSUE7O0FER0E7RUFDSSxjQUFBO0FDQUo7O0FER0E7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDQUo7O0FER0U7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDQUo7O0FER0U7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDQU47O0FER0U7RUFFSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDRE47O0FES0U7RUFDRyx3QkFBQTtFQUFBLGdCQUFBO0VBQ0QsTUFBQTtBQ0ZKOztBREtFO0VBQ0U7Z0RBQUE7RUFFRCxjQUFBO0FDRkg7O0FESUM7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FDREg7O0FES0M7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0ZIOztBREtDO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDRkg7O0FET0E7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0FDSkE7O0FET0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUNKRjs7QURPQTtFQUVFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQ0xGOztBRFVBO0VBRUUsYUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0FDUkY7O0FEV0E7RUFFRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQ1RGOztBRFlBO0VBQ0UsWUFBQTtBQ1RGOztBRFlBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDVEY7O0FEWUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDVEE7O0FEWUE7RUFDRSxZQUFBO0FDVEY7O0FEYUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDVkY7O0FEYUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ1ZGOztBRGNFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDWEo7O0FEZ0JJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNiTjs7QURpQkE7RUFDUSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNkUjs7QURrQkE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNmRjs7QURrQkE7RUFFRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNoQkY7O0FEb0JBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDakJGOztBRG9CQTtFQUVFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ2xCRiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1se1xyXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG59XHJcblxyXG4ubmF2LWJhcntcclxuaGVpZ2h0OiA4MHB4O1xyXG5iYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNjIzKTtcclxuY29sb3I6IHdoaXRlO1xyXG5ib3gtc2hhZG93OiAzcHggMXB4IDEycHggNHB4ICMwMDAwMDA7XHJcbnRyYW5zaXRpb246IGFsbCAwLjIwcztcclxuYm9yZGVyLXJhZGl1czogMDtcclxuZGlzcGxheTogZmxleDtcclxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFNldCB0aGUgbmF2YmFyIHRvIGZpeGVkIHBvc2l0aW9uICovXHJcbiAgdG9wOiAwOyAvKiBQb3NpdGlvbiB0aGUgbmF2YmFyIGF0IHRoZSB0b3Agb2YgdGhlIHBhZ2UgKi9cclxuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xyXG5iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMXB4KTtcclxuei1pbmRleDogMTsgIFxyXG59XHJcbi8vIG1hdC10b29sYmFyOmhvdmVyIHtcclxuXHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzk1KTtcclxuXHJcbi8vIH1cclxuLnNwYWNlciB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG4gIFxyXG4uYnV0dG9uIHtcclxuICAgIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufSAgXHJcblxyXG4gIC50aXRsZSB7XHJcbiAgICBtaW4td2lkdGg6IDYwMHB4O1xyXG4gICAgbWluLWhlaWdodDogNjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIH0gIFxyXG5cclxuICAuZGF5LW5pZ2h0e1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG5cclxuICAubWF0ZXJpYWwtaWNvbnMtc2hhcnB7XHJcbiAgICAgIFxyXG4gICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG5cclxuICBcclxuICAubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xyXG4gICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICB0b3A6IDA7XHJcbiAgfVxyXG5cclxuICAuZmlsbC1yZW1haW5pbmctc3BhY2Uge1xyXG4gICAgLypUaGlzIGZpbGxzIHRoZSByZW1haW5pbmcgc3BhY2UsIGJ5IHVzaW5nIGZsZXhib3guICBcclxuICAgRXZlcnkgdG9vbGJhciByb3cgdXNlcyBhIGZsZXhib3ggcm93IGxheW91dC4gKi9cclxuICAgZmxleDogMSAxIGF1dG87XHJcbiB9XHJcbiAuZHJhd2VyLWNvbnRhaW5lcntcclxuICAgaGVpZ2h0OiAxMDAlO1xyXG4gICB3aWR0aDogMTAwJTtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcblxyXG4gfVxyXG5cclxuIC50b29sYmFyLWRpdiBkaXZ7XHJcbiAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgbWluLXdpZHRoOiAxMDBweDtcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiB9XHJcblxyXG4gLnRvb2xiYXItZGl2e1xyXG4gICBkaXNwbGF5OiBmbGV4O1xyXG4gICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgIGZsZXg6MSAxIDA7IFxyXG4gfVxyXG5cclxuXHJcblxyXG4uc2lkZS1uYXZ7XHJcbndpZHRoOiBmaXQtY29udGVudDtcclxuYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDdhO1xyXG5tYXJnaW4tdG9wOiA4MHB4O1xyXG59XHJcblxyXG4udG9vbGJhci1idXR0b25ze1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi50b29sYmFyLXRpdGxle1xyXG4gIFxyXG4gIG1pbi13aWR0aDogNjAlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiA2JTtcclxuICBmb250LXNpemU6IG1lZGl1bTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgXHJcbiAgXHJcbn1cclxuXHJcbi50b29sYmFyLW1lbnV7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBmbGV4OjE7XHJcbn1cclxuXHJcbi5oZXJve1xyXG5cclxuICBoZWlnaHQ6IDgwdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTsgXHJcbiAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbi5kcmF3ZXItY29udGVudHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5saXN0LW9wdGlvbiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgbWFyZ2luOiA4cHg7XHJcbn1cclxuXHJcbi5hYm91dHtcclxud2lkdGg6IDEwMCU7XHJcbm1heC13aWR0aDogMTAwJTtcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbnRvcDotMjB2aDtcclxuaGVpZ2h0OiAxMDAlO1xyXG56LWluZGV4OiAtMTtcclxufVxyXG5cclxuLmJvZHl7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5cclxuLmFib3V0LWxvd3Jlc3tcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgdG9wOi0yMHZoO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiAtMTtcclxuICB9XHJcblxyXG4uZXhwZXJpZW5jZXtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwdmg7XHJcbiAgXHJcbiAgfVxyXG5cclxuICAuZXhwZXJpZW5jZS1sb3dyZXN7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICBcclxuICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC5wcm9qZWN0c3tcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwdmg7XHJcbiAgICAgIFxyXG4gICAgICB9XHJcbiAgICBcclxuLnByb2plY3RzLWxvd3Jlc3tcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG59XHJcbi5nZXRJblRvdWNoLWxvd3Jlc3tcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG4uZ2V0SW5Ub3VjaHtcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICB6LWluZGV4OiAtMTtcclxuICBcclxufVxyXG5cclxuLmZvb3Rlci1sb3dyZXN7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjB2aDtcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuLmZvb3RlcntcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxN3ZoO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICB6LWluZGV4OiAtMTtcclxuICBcclxufSIsImh0bWwge1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuLm5hdi1iYXIge1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42MjMpO1xuICBjb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDNweCAxcHggMTJweCA0cHggIzAwMDAwMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgLyogU2V0IHRoZSBuYXZiYXIgdG8gZml4ZWQgcG9zaXRpb24gKi9cbiAgdG9wOiAwO1xuICAvKiBQb3NpdGlvbiB0aGUgbmF2YmFyIGF0IHRoZSB0b3Agb2YgdGhlIHBhZ2UgKi9cbiAgd2lkdGg6IDEwMCU7XG4gIC8qIEZ1bGwgd2lkdGggKi9cbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDFweCk7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLmJ1dHRvbiB7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIG1pbi1oZWlnaHQ6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnRpdGxlIHtcbiAgbWluLXdpZHRoOiA2MDBweDtcbiAgbWluLWhlaWdodDogNjBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5kYXktbmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5tYXRlcmlhbC1pY29ucy1zaGFycCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgcGFkZGluZzogMjBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xufVxuXG4uZmlsbC1yZW1haW5pbmctc3BhY2Uge1xuICAvKlRoaXMgZmlsbHMgdGhlIHJlbWFpbmluZyBzcGFjZSwgYnkgdXNpbmcgZmxleGJveC4gIFxuICBFdmVyeSB0b29sYmFyIHJvdyB1c2VzIGEgZmxleGJveCByb3cgbGF5b3V0LiAqL1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLmRyYXdlci1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLnRvb2xiYXItZGl2IGRpdiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi50b29sYmFyLWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgZmxleDogMSAxIDA7XG59XG5cbi5zaWRlLW5hdiB7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDdhO1xuICBtYXJnaW4tdG9wOiA4MHB4O1xufVxuXG4udG9vbGJhci1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi50b29sYmFyLXRpdGxlIHtcbiAgbWluLXdpZHRoOiA2MCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nLWxlZnQ6IDYlO1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi50b29sYmFyLW1lbnUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZmxleDogMTtcbn1cblxuLmhlcm8ge1xuICBoZWlnaHQ6IDgwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLmRyYXdlci1jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubGlzdC1vcHRpb24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGhlaWdodDogMTIwcHg7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIHBhZGRpbmc6IDhweDtcbiAgbWFyZ2luOiA4cHg7XG59XG5cbi5hYm91dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMjB2aDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5hYm91dC1sb3dyZXMge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTIwdmg7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogLTE7XG59XG5cbi5leHBlcmllbmNlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IC0xO1xuICBtYXJnaW4tYm90dG9tOiAyMHZoO1xufVxuXG4uZXhwZXJpZW5jZS1sb3dyZXMge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogLTE7XG59XG5cbi5wcm9qZWN0cyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAtMTtcbiAgbWFyZ2luLWJvdHRvbTogMjB2aDtcbn1cblxuLnByb2plY3RzLWxvd3JlcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLmdldEluVG91Y2gtbG93cmVzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4uZ2V0SW5Ub3VjaCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLmZvb3Rlci1sb3dyZXMge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwdmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogLTE7XG59XG5cbi5mb290ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxN3ZoO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogLTE7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss']
            }]
    }], function () { return [{ type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"] }]; }, { screenSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/projectcard/projectcard.component.ts":
/*!******************************************************!*\
  !*** ./src/app/projectcard/projectcard.component.ts ***!
  \******************************************************/
/*! exports provided: ProjectcardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectcardComponent", function() { return ProjectcardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");




function ProjectcardComponent_mat_card_0_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r58 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r58, " ");
} }
function ProjectcardComponent_mat_card_0_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectcardComponent_mat_card_0_Template_mat_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r59.navigate(ctx_r59.link); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProjectcardComponent_mat_card_0_span_10_Template, 2, 1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r55.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r55.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r55.details, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r55.techStack);
} }
function ProjectcardComponent_mat_card_1_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r62 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r62, " ");
} }
function ProjectcardComponent_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectcardComponent_mat_card_1_Template_mat_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r63.navigate(ctx_r63.link); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProjectcardComponent_mat_card_1_span_10_Template, 2, 1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r56.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r56.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r56.details, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r56.techStack);
} }
class ProjectcardComponent {
    constructor() {
    }
    ngOnInit() {
        console.log("link" + this.link);
        console.log("title" + this.title);
    }
    navigate(link) {
        window.open(this.link, "_blank");
    }
}
ProjectcardComponent.ɵfac = function ProjectcardComponent_Factory(t) { return new (t || ProjectcardComponent)(); };
ProjectcardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectcardComponent, selectors: [["app-projectcard"]], inputs: { screenSize: "screenSize", title: "title", image: "image", details: "details", techStack: "techStack", link: "link" }, decls: 2, vars: 2, consts: [["class", "example-card", 3, "click", 4, "ngIf"], ["class", "example-card-lowres", 3, "click", 4, "ngIf"], [1, "example-card", 3, "click"], ["mat-card-image", "", 3, "src"], [2, "margin-left", "15px"], [1, "techStack"], ["class", "stackLabel", 4, "ngFor", "ngForOf"], [1, "stackLabel"], [1, "example-card-lowres", 3, "click"]], template: function ProjectcardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProjectcardComponent_mat_card_0_Template, 11, 4, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectcardComponent_mat_card_1_Template, 11, 4, "mat-card", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenSize == "Large" || ctx.screenSize == "XLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenSize != "Large" && ctx.screenSize != "XLarge");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardFooter"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".example-card[_ngcontent-%COMP%] {\n  max-width: 400px;\n  height: 350px;\n  border-radius: 10px;\n  margin-left: 5%;\n  margin-right: 5%;\n  transition: transform 0.2s;\n  \n}\n\n.example-card[_ngcontent-%COMP%]:hover {\n  border-radius: 4px;\n  cursor: pointer;\n  transform: scale(1.05);\n  box-shadow: 1px 1px 12px 1px #ffffffa6;\n}\n\n.example-card-lowres[_ngcontent-%COMP%] {\n  max-width: 400px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  border-radius: 10px;\n  transition: transform 0.2s;\n  \n  transform: scale(80%);\n}\n\n.example-header-image[_ngcontent-%COMP%] {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover;\n}\n\n.techStack[_ngcontent-%COMP%] {\n  display: inline-flex;\n  margin-left: 30px;\n  margin-top: 45px;\n  margin-bottom: 10px;\n}\n\n.stackLabel[_ngcontent-%COMP%] {\n  display: block;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: 18px;\n  padding: 5px;\n  background-color: black;\n  font-size: 14px;\n  text-align: center;\n  border-radius: 4px;\n  color: white;\n  margin: 2px;\n}\n\nmat-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdGNhcmQvQzpcXFVzZXJzXFxEaXZ5YW5zaFxcZ2l0XFxQb3J0Zm9saW9cXE15LVBvcnRmb2xpby9zcmNcXGFwcFxccHJvamVjdGNhcmRcXHByb2plY3RjYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9qZWN0Y2FyZC9wcm9qZWN0Y2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFBMkIsY0FBQTtBQ0MvQjs7QURFQTtFQUVJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0NBQUE7QUNBSjs7QURHQTtFQUNJLGdCQUFBO0VBRUEsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsbUJBQUE7RUFFQSwwQkFBQTtFQUEyQixjQUFBO0VBQzNCLHFCQUFBO0FDREo7O0FETUU7RUFDRSxtRkFBQTtFQUNBLHNCQUFBO0FDSEo7O0FETUU7RUFDRSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0hKOztBRE1FO0VBQ0UsY0FBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDSEo7O0FET0U7RUFFRSxXQUFBO0FDTEoiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0Y2FyZC9wcm9qZWN0Y2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgIC8vbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzOyAvKiBBbmltYXRpb24gKi9cclxufVxyXG5cclxuLmV4YW1wbGUtY2FyZDpob3ZlcntcclxuXHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxMnB4IDFweCAjZmZmZmZmYTY7O1xyXG59XHJcblxyXG4uZXhhbXBsZS1jYXJkLWxvd3JlcyB7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgLy9tYXgtaGVpZ2h0OiA0MDBweDtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnM7IC8qIEFuaW1hdGlvbiAqL1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSg4MCUpO1xyXG59XHJcblxyXG5cclxuICBcclxuICAuZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuXHJcbiAgLnRlY2hTdGFja3tcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA0NXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcblxyXG4gIC5zdGFja0xhYmVse1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICBwYWRkaW5nOjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIG1hdC1jYXJkIGltZ3tcclxuICAgIFxyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgfSIsIi5leGFtcGxlLWNhcmQge1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBoZWlnaHQ6IDM1MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIG1hcmdpbi1yaWdodDogNSU7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xuICAvKiBBbmltYXRpb24gKi9cbn1cblxuLmV4YW1wbGUtY2FyZDpob3ZlciB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDEycHggMXB4ICNmZmZmZmZhNjtcbn1cblxuLmV4YW1wbGUtY2FyZC1sb3dyZXMge1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbiAgLyogQW5pbWF0aW9uICovXG4gIHRyYW5zZm9ybTogc2NhbGUoODAlKTtcbn1cblxuLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLnRlY2hTdGFjayB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgbWFyZ2luLXRvcDogNDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnN0YWNrTGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBoZWlnaHQ6IDE4cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAycHg7XG59XG5cbm1hdC1jYXJkIGltZyB7XG4gIGhlaWdodDogNTAlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectcardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projectcard',
                templateUrl: './projectcard.component.html',
                styleUrls: ['./projectcard.component.scss']
            }]
    }], function () { return []; }, { screenSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], image: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], details: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], techStack: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], link: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _projectcard_projectcard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../projectcard/projectcard.component */ "./src/app/projectcard/projectcard.component.ts");





function ProjectsComponent_div_1_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-projectcard", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r48 = ctx.$implicit;
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("screenSize", ctx_r47.screenSize)("title", i_r48.title)("image", i_r48.image)("details", i_r48.details)("techStack", i_r48.techStack)("link", i_r48.link);
} }
function ProjectsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Projects");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProjectsComponent_div_1_span_4_Template, 2, 6, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " For more details on corporate projects. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_div_1_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r49.viewResume(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Download Resume");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r45.projectList);
} }
function ProjectsComponent_div_2_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-projectcard", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r52 = ctx.$implicit;
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("screenSize", ctx_r51.screenSize)("title", i_r52.title)("image", i_r52.image)("details", i_r52.details)("techStack", i_r52.techStack)("link", i_r52.link);
} }
function ProjectsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Projects");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProjectsComponent_div_2_span_4_Template, 2, 6, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " For more details on corporate projects. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_div_2_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r53.viewResume(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Download Resume");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r46.projectList);
} }
class ProjectsComponent {
    constructor() {
    }
    ngOnInit() {
        console.log(this.projectList);
    }
    viewResume() {
        console.log("Resume");
        this.openFile();
    }
    openFile() {
        window.open("../../assets/docs/Resume.pdf");
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], inputs: { screenSize: "screenSize", projectList: "projectList" }, decls: 3, vars: 2, consts: [[1, "body"], ["class", "table-div", 4, "ngIf"], [1, "table-div"], [1, "header"], [1, "project-list"], [4, "ngFor", "ngForOf"], [1, "subtitle-text"], [1, "subtitle"], ["mat-button", "", 2, "color", "black", "background-color", "white", 3, "click"], [3, "screenSize", "title", "image", "details", "techStack", "link"], [1, "header-lowres"], [1, "project-list-lowres"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectsComponent_div_1_Template, 10, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProjectsComponent_div_2_Template, 10, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenSize == "Large" || ctx.screenSize == "XLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenSize != "Large" && ctx.screenSize != "XLarge");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _projectcard_projectcard_component__WEBPACK_IMPORTED_MODULE_3__["ProjectcardComponent"]], styles: [".body[_ngcontent-%COMP%] {\n  background-color: black;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding-bottom: 10vh;\n}\n\n.header[_ngcontent-%COMP%] {\n  color: white;\n  margin: 0px;\n  letter-spacing: 15px;\n  text-align: center;\n  display: flex;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n  font-size: 38px;\n  font-weight: bold;\n  height: 15vh;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n}\n\n.sub-header[_ngcontent-%COMP%] {\n  color: black;\n  margin: 0px;\n  text-align: center;\n  display: flex;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 28px;\n  height: 5vh;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n}\n\n.header-lowres[_ngcontent-%COMP%] {\n  margin: 0px;\n  letter-spacing: 5px;\n  text-align: center;\n  display: flex;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n  font-size: 32px;\n  font-weight: bold;\n  height: 15vh;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n  color: white;\n}\n\n.project-list[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-left: 5%;\n  margin-right: 5%;\n  margin-top: 5%;\n  max-width: 100%;\n}\n\n.project-list-lowres[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-left: 5%;\n  margin-right: 5%;\n  margin-top: 5%;\n  max-width: 100%;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  pointer-events: none;\n}\n\n.subtitle-text[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 15px;\n  display: flex;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Montserrat\", sans-serif;\n  color: white;\n  text-align: center;\n  margin-top: 5%;\n  margin-bottom: 10px;\n}\n\n.subtitle[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 15px;\n  display: flex;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Montserrat\", sans-serif;\n  color: white;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvQzpcXFVzZXJzXFxEaXZ5YW5zaFxcZ2l0XFxQb3J0Zm9saW9cXE15LVBvcnRmb2xpby9zcmNcXGFwcFxccHJvamVjdHNcXHByb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURHQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0FKOztBREdBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDQUo7O0FESUE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUNESjs7QURLQTtFQUVJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDSEo7O0FETUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0hKOztBRE9BO0VBRUksb0JBQUE7QUNMSjs7QURTQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFDQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDTko7O0FEVUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQ0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ1BKIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTB2aDtcclxufVxyXG5cclxuXHJcbi5oZWFkZXJ7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIG1hcmdpbjowcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMTVweDtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOjM4cHg7XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgaGVpZ2h0OiAxNXZoO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnN1Yi1oZWFkZXJ7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIG1hcmdpbjowcHg7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOjI4cHg7XHJcbiAgICBoZWlnaHQ6IDV2aDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4uaGVhZGVyLWxvd3Jlc3tcclxuICAgIG1hcmdpbjowcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6MzJweDtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBoZWlnaHQ6IDE1dmg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgXHJcbn1cclxuXHJcbi5wcm9qZWN0LWxpc3R7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgICBtYXJnaW4tdG9wOjUlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucHJvamVjdC1saXN0LWxvd3Jlc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gICAgbWFyZ2luLXRvcDo1JTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG5idXR0b246aG92ZXJ7XHJcblxyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBcclxufVxyXG5cclxuLnN1YnRpdGxlLXRleHR7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgbWFyZ2luLWJvdHRvbToxMHB4O1xyXG4gICAgXHJcbn1cclxuXHJcbi5zdWJ0aXRsZXtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgXHJcbn0iLCIuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBwYWRkaW5nLWJvdHRvbTogMTB2aDtcbn1cblxuLmhlYWRlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAzOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgaGVpZ2h0OiAxNXZoO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnN1Yi1oZWFkZXIge1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbjogMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBoZWlnaHQ6IDV2aDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5oZWFkZXItbG93cmVzIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBoZWlnaHQ6IDE1dmg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5wcm9qZWN0LWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLnByb2plY3QtbGlzdC1sb3dyZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uc3VidGl0bGUtdGV4dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5zdWJ0aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projects',
                templateUrl: './projects.component.html',
                styleUrls: ['./projects.component.scss']
            }]
    }], function () { return []; }, { screenSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], projectList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/skill-scale/skill-scale.component.ts":
/*!******************************************************!*\
  !*** ./src/app/skill-scale/skill-scale.component.ts ***!
  \******************************************************/
/*! exports provided: SkillScaleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillScaleComponent", function() { return SkillScaleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function SkillScaleComponent_span_4_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 6);
} }
function SkillScaleComponent_span_4_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 7);
} }
function SkillScaleComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SkillScaleComponent_span_4_span_1_Template, 1, 0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SkillScaleComponent_span_4_span_2_Template, 1, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r37 == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r37 == false);
} }
class SkillScaleComponent {
    constructor() {
        this.ratingArray = [false, false, false, false, false];
    }
    ngOnInit() {
        for (let i = 0; i < this.rating; i++) {
            this.ratingArray[i] = true;
        }
    }
    fillRating(rating) {
    }
    ngAfterViewInit() {
        //console.log(this.elemRefs);
        console.log("After VIew");
        this.fillRating(this.rating);
    }
}
SkillScaleComponent.ɵfac = function SkillScaleComponent_Factory(t) { return new (t || SkillScaleComponent)(); };
SkillScaleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillScaleComponent, selectors: [["app-skill-scale"]], inputs: { screenSize: "screenSize", rating: "rating", skillName: "skillName" }, decls: 5, vars: 2, consts: [[1, "skill-scale"], [1, "title"], [1, "rating"], [4, "ngFor", "ngForOf"], ["class", "fa fa-star checked", 4, "ngIf"], ["class", "fa fa-star-o", 4, "ngIf"], [1, "fa", "fa-star", "checked"], [1, "fa", "fa-star-o"]], template: function SkillScaleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SkillScaleComponent_span_4_Template, 3, 2, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.skillName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ratingArray);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".fa-star.checked[_ngcontent-%COMP%] {\n  color: orange;\n  font-size: 18px;\n  letter-spacing: 5px;\n}\n\n.fa-star-o[_ngcontent-%COMP%] {\n  color: rgba(199, 198, 198, 0.685);\n  font-size: 18px;\n  letter-spacing: 5px;\n}\n\n.skill-scale[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  align-items: flex-start;\n  justify-content: center;\n  color: white;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  text-align: left;\n}\n\n.title[_ngcontent-%COMP%] {\n  color: white;\n  height: 100%;\n  font-size: 13px;\n  width: 50%;\n  text-align: left;\n}\n\n.rating[_ngcontent-%COMP%] {\n  height: 100%;\n  text-align: left;\n  width: 50%;\n  text-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2tpbGwtc2NhbGUvQzpcXFVzZXJzXFxEaXZ5YW5zaFxcZ2l0XFxQb3J0Zm9saW9cXE15LVBvcnRmb2xpby9zcmNcXGFwcFxcc2tpbGwtc2NhbGVcXHNraWxsLXNjYWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9za2lsbC1zY2FsZS9za2lsbC1zY2FsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFRTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FESUU7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNETjs7QURJRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ0RKOztBREdFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9za2lsbC1zY2FsZS9za2lsbC1zY2FsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYS1zdGFyLmNoZWNrZWQge1xyXG4gICAgY29sb3I6IG9yYW5nZTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XHJcbiAgfVxyXG5cclxuICAuZmEtc3Rhci1vIHtcclxuICAgIGNvbG9yOiByZ2JhKDE5OSwgMTk4LCAxOTgsIDAuNjg1KTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XHJcbiAgICBcclxuICB9XHJcblxyXG5cclxuICAuc2tpbGwtc2NhbGV7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG5cclxuICAudGl0bGV7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbiAgLnJhdGluZ3tcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgdGV4dC1zaGFkb3c6IG5vbmVcclxuICAgIFxyXG4gIH0iLCIuZmEtc3Rhci5jaGVja2VkIHtcbiAgY29sb3I6IG9yYW5nZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsZXR0ZXItc3BhY2luZzogNXB4O1xufVxuXG4uZmEtc3Rhci1vIHtcbiAgY29sb3I6IHJnYmEoMTk5LCAxOTgsIDE5OCwgMC42ODUpO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XG59XG5cbi5za2lsbC1zY2FsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi50aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHdpZHRoOiA1MCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5yYXRpbmcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiA1MCU7XG4gIHRleHQtc2hhZG93OiBub25lO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillScaleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-skill-scale',
                templateUrl: './skill-scale.component.html',
                styleUrls: ['./skill-scale.component.scss']
            }]
    }], function () { return []; }, { screenSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rating: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], skillName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/skillset/skillset.component.ts":
/*!************************************************!*\
  !*** ./src/app/skillset/skillset.component.ts ***!
  \************************************************/
/*! exports provided: SkillsetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsetComponent", function() { return SkillsetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _skill_scale_skill_scale_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../skill-scale/skill-scale.component */ "./src/app/skill-scale/skill-scale.component.ts");




function SkillsetComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Programming Languages");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-skill-scale", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-skill-scale", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-skill-scale", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Back-End");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-skill-scale", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-skill-scale", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-skill-scale", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Front-End");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-skill-scale", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "app-skill-scale", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Dev-Ops");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "app-skill-scale", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "app-skill-scale", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "app-skill-scale", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "app-skill-scale", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("screenSize", ctx_r41.screenSize)("skillName", "Java")("rating", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("screenSize", ctx_r41.screenSize)("skillName", "TypeScript")("rating", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("screenSize", ctx_r41.screenSize)("skillName", "Python")("rating", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("screenSize", ctx_r41.screenSize)("skillName", "SpringBoot")("rating", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("screenSize", ctx_r41.screenSize)("skillName", "Object Oriented Design")("rating", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("screenSize", ctx_r41.screenSize)("skillName", "MySQL")("rating", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("screenSize", ctx_r41.screenSize)("skillName", "Angular")("rating", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("screenSize", ctx_r41.screenSize)("skillName", "HTML + CSS")("rating", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("screenSize", ctx_r41.screenSize)("skillName", "Git & Github")("rating", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("screenSize", ctx_r41.screenSize)("skillName", "Jenkins")("rating", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("screenSize", ctx_r41.screenSize)("skillName", "OpenShift")("rating", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("screenSize", ctx_r41.screenSize)("skillName", "Docker")("rating", 3);
} }
function SkillsetComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Other Cool Skills");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-skill-scale", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-skill-scale", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-skill-scale", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("screenSize", ctx_r42.screenSize)("skillName", "Guitar")("rating", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("screenSize", ctx_r42.screenSize)("skillName", "Piano")("rating", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("screenSize", ctx_r42.screenSize)("skillName", "Video Editing")("rating", 3);
} }
class SkillsetComponent {
    constructor() {
    }
    ngOnInit() {
        console.log("skill set " + this.skillSet);
    }
}
SkillsetComponent.ɵfac = function SkillsetComponent_Factory(t) { return new (t || SkillsetComponent)(); };
SkillsetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsetComponent, selectors: [["app-skillset"]], inputs: { screenSize: "screenSize", skillSet: "skillSet" }, decls: 2, vars: 2, consts: [[4, "ngIf"], [1, "skill-section"], [1, "skill-title"], [3, "screenSize", "skillName", "rating"]], template: function SkillsetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SkillsetComponent_span_0_Template, 32, 36, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SkillsetComponent_span_1_Template, 9, 9, "span", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.skillSet == "techSkills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.skillSet == "otherSkills");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _skill_scale_skill_scale_component__WEBPACK_IMPORTED_MODULE_2__["SkillScaleComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200[_ngcontent-%COMP%];300[_ngcontent-%COMP%];400&display=swap\")[_ngcontent-%COMP%];\n.skill-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-left: 5%;\n}\n.skill-section[_ngcontent-%COMP%]   app-skill-scale[_ngcontent-%COMP%] {\n  margin-left: 30px;\n}\n.skill-title[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 18px;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2tpbGxzZXQvQzpcXFVzZXJzXFxEaXZ5YW5zaFxcZ2l0XFxQb3J0Zm9saW9cXE15LVBvcnRmb2xpby9zcmNcXGFwcFxcc2tpbGxzZXRcXHNraWxsc2V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9za2lsbHNldC9za2lsbHNldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxvR0FBQTtBQUNSO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQ0NKO0FER0E7RUFDSSxpQkFBQTtBQ0FKO0FER0E7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9za2lsbHNldC9za2lsbHNldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEAxMDA7MjAwOzMwMDs0MDAmZGlzcGxheT1zd2FwJyk7XHJcbi5za2lsbC1zZWN0aW9ue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcblxyXG59XHJcblxyXG4uc2tpbGwtc2VjdGlvbiBhcHAtc2tpbGwtc2NhbGV7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxufVxyXG5cclxuLnNraWxsLXRpdGxle1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufSIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0OndnaHRAMTAwOzIwMDszMDA7NDAwJmRpc3BsYXk9c3dhcFwiKTtcbi5za2lsbC1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuXG4uc2tpbGwtc2VjdGlvbiBhcHAtc2tpbGwtc2NhbGUge1xuICBtYXJnaW4tbGVmdDogMzBweDtcbn1cblxuLnNraWxsLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-skillset',
                templateUrl: './skillset.component.html',
                styleUrls: ['./skillset.component.scss']
            }]
    }], function () { return []; }, { screenSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], skillSet: [{
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SocialTrayComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
SocialTrayComponent.ɵfac = function SocialTrayComponent_Factory(t) { return new (t || SocialTrayComponent)(); };
SocialTrayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SocialTrayComponent, selectors: [["app-social-tray"]], inputs: { screenSize: "screenSize" }, decls: 2, vars: 2, consts: [["style", "display: flex; flex-direction: row;", 4, "ngIf"], ["style", "display: flex; flex-direction: column;", 4, "ngIf"], [2, "display", "flex", "flex-direction", "row"], ["href", "https://www.linkedin.com/in/divyansh-chauhan", "target", "_blank", 1, "fa", "fa-linkedin"], ["href", "https://github.com/divynshh", "target", "_blank", 1, "fa", "fa-github"], ["href", "https://www.instagram.com/divynshh/", "target", "_blank", 1, "fa", "fa-instagram"], ["href", "https://twitter.com/divynshh", "target", "_blank", 1, "fa", "fa-twitter"], ["href", "https://www.youtube.com/channel/UC2SkaBqDP_eTE2mgnbHUU1g", "target", "_blank", 1, "fa", "fa-youtube-play"], ["href", "#", 1, "fa", "fa-envelope"], [2, "display", "flex", "flex-direction", "column"], ["href", "#getInTouch", 1, "fa", "fa-envelope"]], template: function SocialTrayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SocialTrayComponent_div_0_Template, 7, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SocialTrayComponent_div_1_Template, 7, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenSize == "Large" || ctx.screenSize == "XLarge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenSize != "Large" && ctx.screenSize != "XLarge");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".fa[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-size: 20px;\n  width: 20px;\n  text-align: center;\n  text-decoration: none;\n  margin: 5px 2px;\n  border-radius: 50%;\n  text-shadow: none;\n  color: white;\n}\n\n.fa[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0px 8px white;\n  text-decoration: none;\n}\n\n.fa-twitter[_ngcontent-%COMP%]:hover {\n  color: #44a2eb;\n  background: rgba(0, 0, 0, 0.527);\n}\n\n.fa-linkedin[_ngcontent-%COMP%]:hover {\n  color: #68b5da;\n  background: rgba(0, 0, 0, 0.527);\n}\n\n.fa-youtube-play[_ngcontent-%COMP%]:hover {\n  color: #fd3333;\n  background: rgba(0, 0, 0, 0.527);\n}\n\n.fa-instagram[_ngcontent-%COMP%]:hover {\n  color: #ff59b4;\n  background: rgba(0, 0, 0, 0.527);\n}\n\n.fa-github[_ngcontent-%COMP%]:hover {\n  color: #000000;\n  background: rgba(168, 168, 168, 0.26);\n  box-shadow: 0 0px 8px black;\n}\n\n.fa-envelope[_ngcontent-%COMP%]:hover {\n  color: #d39b48;\n  background: rgba(0, 0, 0, 0.527);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29jaWFsLXRyYXkvQzpcXFVzZXJzXFxEaXZ5YW5zaFxcZ2l0XFxQb3J0Zm9saW9cXE15LVBvcnRmb2xpby9zcmNcXGFwcFxcc29jaWFsLXRyYXlcXHNvY2lhbC10cmF5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zb2NpYWwtdHJheS9zb2NpYWwtdHJheS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLDJCQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURPQTtFQUNFLGNBQUE7RUFDQSxnQ0FBQTtBQ0pGOztBRGFBO0VBRUUsY0FBQTtFQUNBLGdDQUFBO0FDWEY7O0FEY0E7RUFDRSxjQUFBO0VBQ0EsZ0NBQUE7QUNYRjs7QURlQTtFQUNFLGNBQUE7RUFDQSxnQ0FBQTtBQ1pGOztBRGdCQTtFQUNFLGNBQUE7RUFDQSxxQ0FBQTtFQUNBLDJCQUFBO0FDYkY7O0FEaUJBO0VBQ0UsY0FBQTtFQUNBLGdDQUFBO0FDZEYiLCJmaWxlIjoic3JjL2FwcC9zb2NpYWwtdHJheS9zb2NpYWwtdHJheS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYSB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBtYXJnaW46IDVweCAycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHRleHQtc2hhZG93OiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmZhOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiAwIDBweCA4cHggcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG59XHJcblxyXG4vLyAuZmEtZmFjZWJvb2sge1xyXG4vLyAgIGJhY2tncm91bmQ6ICMzQjU5OTg7XHJcbi8vICAgY29sb3I6ICMzQjU5OTg7XHJcbi8vIH1cclxuXHJcbi5mYS10d2l0dGVyOmhvdmVyIHtcclxuICBjb2xvcjogIzQ0YTJlYjtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNTI3KTtcclxuICBcclxufVxyXG5cclxuLy8gLmZhLWdvb2dsZSB7XHJcbi8vICAgYmFja2dyb3VuZDogI2RkNGIzOTtcclxuLy8gICBjb2xvcjogd2hpdGU7XHJcbi8vIH1cclxuXHJcbi5mYS1saW5rZWRpbjpob3ZlciB7XHJcbiAgXHJcbiAgY29sb3I6ICM2OGI1ZGE7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUyNyk7XHJcbn1cclxuXHJcbi5mYS15b3V0dWJlLXBsYXk6aG92ZXIge1xyXG4gIGNvbG9yOiAjZmQzMzMzO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41MjcpO1xyXG4gIFxyXG59XHJcblxyXG4uZmEtaW5zdGFncmFtOmhvdmVyIHtcclxuICBjb2xvcjogI2ZmNTliNDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNTI3KTtcclxuICBcclxufVxyXG5cclxuLmZhLWdpdGh1Yjpob3ZlciB7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgxNjgsIDE2OCwgMTY4LCAwLjI2KTtcclxuICBib3gtc2hhZG93OiAwIDBweCA4cHggcmdiKDAsIDAsIDApO1xyXG4gIFxyXG59XHJcblxyXG4uZmEtZW52ZWxvcGU6aG92ZXIge1xyXG4gIGNvbG9yOiAjZDM5YjQ4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41MjcpO1xyXG4gIFxyXG59XHJcblxyXG4vLyAuZmEtcGludGVyZXN0IHtcclxuLy8gICBiYWNrZ3JvdW5kOiAjY2IyMDI3O1xyXG4vLyAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gfVxyXG5cclxuLy8gLmZhLXNuYXBjaGF0LWdob3N0IHtcclxuLy8gICBiYWNrZ3JvdW5kOiAjZmZmYzAwO1xyXG4vLyAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gICB0ZXh0LXNoYWRvdzogLTFweCAwIGJsYWNrLCAwIDFweCBibGFjaywgMXB4IDAgYmxhY2ssIDAgLTFweCBibGFjaztcclxuLy8gfVxyXG5cclxuLy8gLmZhLXNreXBlIHtcclxuLy8gICBiYWNrZ3JvdW5kOiAjMDBhZmYwO1xyXG4vLyAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gfVxyXG5cclxuLy8gLmZhLWFuZHJvaWQge1xyXG4vLyAgIGJhY2tncm91bmQ6ICNhNGM2Mzk7XHJcbi8vICAgY29sb3I6IHdoaXRlO1xyXG4vLyB9XHJcblxyXG4vLyAuZmEtZHJpYmJibGUge1xyXG4vLyAgIGJhY2tncm91bmQ6ICNlYTRjODk7XHJcbi8vICAgY29sb3I6IHdoaXRlO1xyXG4vLyB9XHJcblxyXG4vLyAuZmEtdmltZW8ge1xyXG4vLyAgIGJhY2tncm91bmQ6ICM0NWJiZmY7XHJcbi8vICAgY29sb3I6IHdoaXRlO1xyXG4vLyB9XHJcblxyXG4vLyAuZmEtdHVtYmxyIHtcclxuLy8gICBiYWNrZ3JvdW5kOiAjMmM0NzYyO1xyXG4vLyAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gfVxyXG5cclxuLy8gLmZhLXZpbmUge1xyXG4vLyAgIGJhY2tncm91bmQ6ICMwMGI0ODk7XHJcbi8vICAgY29sb3I6IHdoaXRlO1xyXG4vLyB9XHJcblxyXG4vLyAuZmEtZm91cnNxdWFyZSB7XHJcbi8vICAgYmFja2dyb3VuZDogIzQ1YmJmZjtcclxuLy8gICBjb2xvcjogd2hpdGU7XHJcbi8vIH1cclxuXHJcbi8vIC5mYS1zdHVtYmxldXBvbiB7XHJcbi8vICAgYmFja2dyb3VuZDogI2ViNDkyNDtcclxuLy8gICBjb2xvcjogd2hpdGU7XHJcbi8vIH1cclxuXHJcbi8vIC5mYS1mbGlja3Ige1xyXG4vLyAgIGJhY2tncm91bmQ6ICNmNDAwODM7XHJcbi8vICAgY29sb3I6IHdoaXRlO1xyXG4vLyB9XHJcblxyXG4vLyAuZmEteWFob28ge1xyXG4vLyAgIGJhY2tncm91bmQ6ICM0MzAyOTc7XHJcbi8vICAgY29sb3I6IHdoaXRlO1xyXG4vLyB9XHJcblxyXG4vLyAuZmEtc291bmRjbG91ZCB7XHJcbi8vICAgYmFja2dyb3VuZDogI2ZmNTUwMDtcclxuLy8gICBjb2xvcjogd2hpdGU7XHJcbi8vIH1cclxuXHJcbi8vIC5mYS1yZWRkaXQge1xyXG4vLyAgIGJhY2tncm91bmQ6ICNmZjU3MDA7XHJcbi8vICAgY29sb3I6IHdoaXRlO1xyXG4vLyB9XHJcblxyXG4vLyAuZmEtcnNzIHtcclxuLy8gICBiYWNrZ3JvdW5kOiAjZmY2NjAwO1xyXG4vLyAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gfSIsIi5mYSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBtYXJnaW46IDVweCAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmZhOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwcHggOHB4IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5mYS10d2l0dGVyOmhvdmVyIHtcbiAgY29sb3I6ICM0NGEyZWI7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41MjcpO1xufVxuXG4uZmEtbGlua2VkaW46aG92ZXIge1xuICBjb2xvcjogIzY4YjVkYTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUyNyk7XG59XG5cbi5mYS15b3V0dWJlLXBsYXk6aG92ZXIge1xuICBjb2xvcjogI2ZkMzMzMztcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUyNyk7XG59XG5cbi5mYS1pbnN0YWdyYW06aG92ZXIge1xuICBjb2xvcjogI2ZmNTliNDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUyNyk7XG59XG5cbi5mYS1naXRodWI6aG92ZXIge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgYmFja2dyb3VuZDogcmdiYSgxNjgsIDE2OCwgMTY4LCAwLjI2KTtcbiAgYm94LXNoYWRvdzogMCAwcHggOHB4IGJsYWNrO1xufVxuXG4uZmEtZW52ZWxvcGU6aG92ZXIge1xuICBjb2xvcjogI2QzOWI0ODtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUyNyk7XG59Il19 */"] });
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
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autoplay", true)("muted", true);
} }
function VideoComponent_video_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "video", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "source", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "source", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autoplay", true)("muted", true);
} }
class VideoComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
VideoComponent.ɵfac = function VideoComponent_Factory(t) { return new (t || VideoComponent)(); };
VideoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideoComponent, selectors: [["app-video"]], inputs: { screenSize: "screenSize" }, decls: 2, vars: 2, consts: [["preload", "auto", "loop", "", "id", "title-video", 3, "autoplay", "muted", 4, "ngIf"], ["loop", "", "id", "title-video-lowres", 3, "autoplay", "muted", 4, "ngIf"], ["preload", "auto", "loop", "", "id", "title-video", 3, "autoplay", "muted"], ["type", "video/mp4", "src", "../../assets/videos/hero_big.mp4"], ["type", "video/webm", "src", "../../assets/videos/hero_big.webm"], ["type", "video/mp4", "src", "../../assets/videos/hero_big.m4v"], ["loop", "", "id", "title-video-lowres", 3, "autoplay", "muted"]], template: function VideoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, VideoComponent_video_0_Template, 4, 2, "video", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VideoComponent_video_1_Template, 4, 2, "video", 1);
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

/***/ "./src/assets/projects.json":
/*!**********************************!*\
  !*** ./src/assets/projects.json ***!
  \**********************************/
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"title\":\"Portfolio Website\",\"details\":\"A single page web application showcasing my skills, experience and interests.\",\"image\":\"../../assets/images/Project1.png\",\"techStack\":[\"Angular\",\"MaterialUI\"],\"link\":\"https://github.com/divynshh/MyPortFolio\"},{\"title\":\"Emotion Detector\",\"details\":\"A web application which detects stress/anxiety based on facial/voice expressions of a person.\",\"image\":\"../../assets/images/Project2.jpg\",\"techStack\":[\"Python\",\"Angular\",\"Tensorflow\"],\"link\":\"https://github.com/divynshh/Emotion-Detector/blob/main/README.md\"},{\"title\":\"AERO\",\"details\":\"Application for Emergence Response Operation, is a mobile application that displays the availability of beds in a nearby hospitals.\",\"image\":\"../../assets/images/Project3.png\",\"techStack\":[\"Android\",\"Java\",\"MySQL\"],\"link\":\"https://github.com/divynshh/AERO\"}]");

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