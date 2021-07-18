(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Admin_views_Buttons_Buttons_Buttons_js"],{

/***/ "./resources/js/components/Admin/views/Buttons/Buttons/Buttons.js":
/*!************************************************************************!*\
  !*** ./resources/js/components/Admin/views/Buttons/Buttons/Buttons.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Card.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/CardHeader.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/CardBody.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Button.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var Buttons = /*#__PURE__*/function (_Component) {
  _inherits(Buttons, _Component);

  var _super = _createSuper(Buttons);

  function Buttons() {
    _classCallCheck(this, Buttons);

    return _super.apply(this, arguments);
  }

  _createClass(Buttons, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "animated fadeIn",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.default, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.default, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong", {
              children: "Standard Buttons"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.default, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
              className: "align-items-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "12",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: "Normal"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "primary",
                  children: "Primary"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "secondary",
                  children: "Secondary"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "success",
                  children: "Success"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "warning",
                  children: "Warning"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "danger",
                  children: "Danger"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "info",
                  children: "Info"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "light",
                  children: "Light"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "dark",
                  children: "Dark"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "link",
                  children: "Link"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
              className: "align-items-center mt-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "12",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: "Active State"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  active: true,
                  block: true,
                  color: "primary",
                  "aria-pressed": "true",
                  children: "Primary"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  active: true,
                  block: true,
                  color: "secondary",
                  "aria-pressed": "true",
                  children: "Secondary"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  active: true,
                  block: true,
                  color: "success",
                  "aria-pressed": "true",
                  children: "Success"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  active: true,
                  block: true,
                  color: "warning",
                  "aria-pressed": "true",
                  children: "Warning"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  active: true,
                  block: true,
                  color: "danger",
                  "aria-pressed": "true",
                  children: "Danger"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  active: true,
                  block: true,
                  color: "info",
                  "aria-pressed": "true",
                  children: "Info"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  active: true,
                  block: true,
                  color: "light",
                  "aria-pressed": "true",
                  children: "Light"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  active: true,
                  block: true,
                  color: "dark",
                  "aria-pressed": "true",
                  children: "Dark"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  active: true,
                  block: true,
                  color: "link",
                  "aria-pressed": "true",
                  children: "Link"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
              className: "align-items-center mt-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "12",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: "Disabled"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "primary",
                  disabled: true,
                  children: "Primary"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "secondary",
                  disabled: true,
                  children: "Secondary"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "success",
                  disabled: true,
                  children: "Success"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "warning",
                  disabled: true,
                  children: "Warning"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "danger",
                  disabled: true,
                  children: "Danger"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "info",
                  disabled: true,
                  children: "Info"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "light",
                  disabled: true,
                  children: "Light"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "dark",
                  disabled: true,
                  children: "Dark"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "link",
                  disabled: true,
                  children: "Link"
                })
              })]
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.default, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.default, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong", {
              children: "Outline Buttons"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.default, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
              children: ["Use ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code", {
                children: "outline"
              }), " prop"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
              className: "align-items-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "12",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: "Normal"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  outline: true,
                  color: "primary",
                  children: "Primary"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  outline: true,
                  color: "secondary",
                  children: "Secondary"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  outline: true,
                  color: "success",
                  children: "Success"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  outline: true,
                  color: "warning",
                  children: "Warning"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  outline: true,
                  color: "danger",
                  children: "Danger"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  outline: true,
                  color: "info",
                  children: "Info"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  outline: true,
                  color: "light",
                  children: "Light"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  outline: true,
                  color: "dark",
                  children: "Dark"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
              className: "align-items-center mt-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "12",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: "Active State"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  outline: true,
                  active: true,
                  color: "primary",
                  "aria-pressed": "true",
                  children: "Primary"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  outline: true,
                  active: true,
                  color: "secondary",
                  "aria-pressed": "true",
                  children: "Secondary"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  outline: true,
                  active: true,
                  color: "success",
                  "aria-pressed": "true",
                  children: "Success"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  outline: true,
                  active: true,
                  color: "warning",
                  "aria-pressed": "true",
                  children: "Warning"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  outline: true,
                  active: true,
                  color: "danger",
                  "aria-pressed": "true",
                  children: "Danger"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  outline: true,
                  active: true,
                  color: "info",
                  "aria-pressed": "true",
                  children: "Info"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  outline: true,
                  active: true,
                  color: "light",
                  "aria-pressed": "true",
                  children: "Light"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  outline: true,
                  active: true,
                  color: "dark",
                  "aria-pressed": "true",
                  children: "Dark"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
              className: "align-items-center mt-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "12",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: "Disabled"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  outline: true,
                  color: "primary",
                  disabled: true,
                  children: "Primary"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  outline: true,
                  color: "secondary",
                  disabled: true,
                  children: "Secondary"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  outline: true,
                  color: "success",
                  disabled: true,
                  children: "Success"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  outline: true,
                  color: "warning",
                  disabled: true,
                  children: "Warning"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  outline: true,
                  color: "danger",
                  disabled: true,
                  children: "Danger"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  outline: true,
                  color: "info",
                  disabled: true,
                  children: "Info"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  outline: true,
                  color: "light",
                  disabled: true,
                  children: "Light"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  outline: true,
                  color: "dark",
                  disabled: true,
                  children: "Dark"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0"
              })]
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.default, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.default, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong", {
              children: "Ghost Buttons"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.default, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
              children: ["Use", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code", {
                children: ".btn-ghost-*"
              }), " class for ghost buttons."]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
              className: "align-items-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "12",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: "Normal"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "ghost-primary",
                  children: "Primary"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "ghost-secondary",
                  children: "Secondary"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "ghost-success",
                  children: "Success"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "ghost-warning",
                  children: "Warning"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "ghost-danger",
                  children: "Danger"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "ghost-info",
                  children: "Info"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "ghost-light",
                  children: "Light"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "ghost-dark",
                  children: "Dark"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
              className: "align-items-center mt-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "12",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: "Active State"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  active: true,
                  color: "ghost-primary",
                  "aria-pressed": "true",
                  children: "Primary"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  active: true,
                  color: "ghost-secondary",
                  "aria-pressed": "true",
                  children: "Secondary"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  active: true,
                  color: "ghost-success",
                  "aria-pressed": "true",
                  children: "Success"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  active: true,
                  color: "ghost-warning",
                  "aria-pressed": "true",
                  children: "Warning"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  active: true,
                  color: "ghost-danger",
                  "aria-pressed": "true",
                  children: "Danger"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  active: true,
                  color: "ghost-info",
                  "aria-pressed": "true",
                  children: "Info"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  active: true,
                  color: "ghost-light",
                  "aria-pressed": "true",
                  children: "Light"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  active: true,
                  color: "ghost-dark",
                  "aria-pressed": "true",
                  children: "Dark"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
              className: "align-items-center mt-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "12",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: "Disabled"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "ghost-primary",
                  disabled: true,
                  children: "Primary"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "ghost-secondary",
                  disabled: true,
                  children: "Secondary"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "ghost-success",
                  disabled: true,
                  children: "Success"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "ghost-warning",
                  disabled: true,
                  children: "Warning"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "ghost-danger",
                  disabled: true,
                  children: "Danger"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "ghost-info",
                  disabled: true,
                  children: "Info"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "ghost-light",
                  disabled: true,
                  children: "Light"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "ghost-dark",
                  disabled: true,
                  children: "Dark"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0"
              })]
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.default, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.default, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong", {
              children: "Square Buttons"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.default, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
              children: ["Use", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code", {
                children: ".btn-square"
              }), " class for square buttons."]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
              className: "align-items-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "12",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: "Normal"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "primary",
                  className: "btn-square",
                  children: "Primary"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "secondary",
                  className: "btn-square",
                  children: "Secondary"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "success",
                  className: "btn-square",
                  children: "Success"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "warning",
                  className: "btn-square",
                  children: "Warning"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "danger",
                  className: "btn-square",
                  children: "Danger"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "info",
                  className: "btn-square",
                  children: "Info"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "light",
                  className: "btn-square",
                  children: "Light"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "dark",
                  className: "btn-square",
                  children: "Dark"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "link",
                  className: "btn-square",
                  children: "Link"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
              className: "align-items-center mt-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "12",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: "Active State"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  active: true,
                  block: true,
                  color: "primary",
                  className: "btn-square",
                  "aria-pressed": "true",
                  children: "Primary"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  active: true,
                  block: true,
                  color: "secondary",
                  className: "btn-square",
                  "aria-pressed": "true",
                  children: "Secondary"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  active: true,
                  block: true,
                  color: "success",
                  className: "btn-square",
                  "aria-pressed": "true",
                  children: "Success"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  active: true,
                  block: true,
                  color: "warning",
                  className: "btn-square",
                  "aria-pressed": "true",
                  children: "Warning"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  active: true,
                  block: true,
                  color: "danger",
                  className: "btn-square",
                  "aria-pressed": "true",
                  children: "Danger"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  active: true,
                  block: true,
                  color: "info",
                  className: "btn-square",
                  "aria-pressed": "true",
                  children: "Info"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  active: true,
                  block: true,
                  color: "light",
                  className: "btn-square",
                  "aria-pressed": "true",
                  children: "Light"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  active: true,
                  block: true,
                  color: "dark",
                  className: "btn-square",
                  "aria-pressed": "true",
                  children: "Dark"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  active: true,
                  block: true,
                  color: "link",
                  className: "btn-square",
                  "aria-pressed": "true",
                  children: "Link"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
              className: "align-items-center mt-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "12",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: "Disabled"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "primary",
                  className: "btn-square",
                  disabled: true,
                  children: "Primary"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "secondary",
                  className: "btn-square",
                  disabled: true,
                  children: "Secondary"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "success",
                  className: "btn-square",
                  disabled: true,
                  children: "Success"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "warning",
                  className: "btn-square",
                  disabled: true,
                  children: "Warning"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "danger",
                  className: "btn-square",
                  disabled: true,
                  children: "Danger"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "info",
                  className: "btn-square",
                  disabled: true,
                  children: "Info"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "light",
                  className: "btn-square",
                  disabled: true,
                  children: "Light"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "dark",
                  className: "btn-square",
                  disabled: true,
                  children: "Dark"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "link",
                  className: "btn-square",
                  disabled: true,
                  children: "Link"
                })
              })]
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.default, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.default, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong", {
              children: "Pill Buttons"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.default, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
              children: ["Use", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code", {
                children: ".btn-pill"
              }), " class for pill buttons."]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
              className: "align-items-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "12",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: "Normal"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "primary",
                  className: "btn-pill",
                  children: "Primary"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "secondary",
                  className: "btn-pill",
                  children: "Secondary"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "success",
                  className: "btn-pill",
                  children: "Success"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "warning",
                  className: "btn-pill",
                  children: "Warning"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "danger",
                  className: "btn-pill",
                  children: "Danger"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "info",
                  className: "btn-pill",
                  children: "Info"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "light",
                  className: "btn-pill",
                  children: "Light"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "dark",
                  className: "btn-pill",
                  children: "Dark"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "link",
                  className: "btn-pill",
                  children: "Link"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
              className: "align-items-center mt-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "12",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: "Active State"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  active: true,
                  block: true,
                  color: "primary",
                  className: "btn-pill",
                  "aria-pressed": "true",
                  children: "Primary"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  active: true,
                  block: true,
                  color: "secondary",
                  className: "btn-pill",
                  "aria-pressed": "true",
                  children: "Secondary"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  active: true,
                  block: true,
                  color: "success",
                  className: "btn-pill",
                  "aria-pressed": "true",
                  children: "Success"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  active: true,
                  block: true,
                  color: "warning",
                  className: "btn-pill",
                  "aria-pressed": "true",
                  children: "Warning"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  active: true,
                  block: true,
                  color: "danger",
                  className: "btn-pill",
                  "aria-pressed": "true",
                  children: "Danger"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  active: true,
                  block: true,
                  color: "info",
                  className: "btn-pill",
                  "aria-pressed": "true",
                  children: "Info"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  active: true,
                  block: true,
                  color: "light",
                  className: "btn-pill",
                  "aria-pressed": "true",
                  children: "Light"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  active: true,
                  block: true,
                  color: "dark",
                  className: "btn-pill",
                  "aria-pressed": "true",
                  children: "Dark"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  active: true,
                  block: true,
                  color: "link",
                  className: "btn-pill",
                  "aria-pressed": "true",
                  children: "Link"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
              className: "align-items-center mt-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "12",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: "Disabled"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "primary",
                  className: "btn-pill",
                  disabled: true,
                  children: "Primary"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "secondary",
                  className: "btn-pill",
                  disabled: true,
                  children: "Secondary"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "success",
                  className: "btn-pill",
                  disabled: true,
                  children: "Success"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "warning",
                  className: "btn-pill",
                  disabled: true,
                  children: "Warning"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "danger",
                  className: "btn-pill",
                  disabled: true,
                  children: "Danger"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "info",
                  className: "btn-pill",
                  disabled: true,
                  children: "Info"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "light",
                  className: "btn-pill",
                  disabled: true,
                  children: "Light"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "dark",
                  className: "btn-pill",
                  disabled: true,
                  children: "Dark"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "6",
                sm: "4",
                md: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  block: true,
                  color: "link",
                  className: "btn-pill",
                  disabled: true,
                  children: "Link"
                })
              })]
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.default, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.default, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong", {
              children: "Sizes"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.default, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
              children: ["Fancy larger or smaller buttons? Add ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code", {
                children: "size=\"lg\""
              }), " or ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code", {
                children: "size=\"sm\""
              }), " for additional sizes."]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
              className: "align-items-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: "Small"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "2",
                className: "mb-3 mb-xl-0 text-center",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  color: "primary",
                  size: "sm",
                  children: "Standard Button"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "2",
                className: "mb-3 mb-xl-0 text-center",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  color: "secondary",
                  outline: true,
                  size: "sm",
                  children: "Outline Button"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "2",
                className: "mb-3 mb-xl-0 text-center",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  size: "sm",
                  color: "ghost-success",
                  children: "Ghost Button"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "2",
                className: "mb-3 mb-xl-0 text-center",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  color: "warning",
                  size: "sm",
                  className: "btn-square",
                  children: "Square Button"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "2",
                className: "mb-3 mb-xl-0 text-center",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  color: "danger",
                  size: "sm",
                  className: "btn-pill",
                  children: "Pill Button"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
              className: "align-items-center mt-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: "Normal"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "2",
                className: "mb-3 mb-xl-0 text-center",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  color: "primary",
                  children: "Standard Button"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "2",
                className: "mb-3 mb-xl-0 text-center",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  outline: true,
                  color: "secondary",
                  children: "Outline Button"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "2",
                className: "mb-3 mb-xl-0 text-center",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  color: "ghost-success",
                  children: "Ghost Button"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "2",
                className: "mb-3 mb-xl-0 text-center",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  color: "warning",
                  className: "btn-square",
                  children: "Square Button"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "2",
                className: "mb-3 mb-xl-0 text-center",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  color: "danger",
                  className: "btn-pill",
                  children: "Pill Button"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
              className: "align-items-center mt-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "2",
                xl: true,
                className: "mb-3 mb-xl-0",
                children: "Large"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "2",
                className: "mb-3 mb-xl-0 text-center",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  color: "primary",
                  size: "lg",
                  children: "Standard Button"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "2",
                className: "mb-3 mb-xl-0 text-center",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  outline: true,
                  color: "secondary",
                  size: "lg",
                  children: "Outline Button"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "2",
                className: "mb-3 mb-xl-0 text-center",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  color: "ghost-success",
                  size: "lg",
                  children: "Ghost Button"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "2",
                className: "mb-3 mb-xl-0 text-center",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  color: "warning",
                  size: "lg",
                  className: "btn-square",
                  children: "Square Button"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                col: "2",
                className: "mb-3 mb-xl-0 text-center",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  color: "danger",
                  size: "lg",
                  className: "btn-pill",
                  children: "Pill Button"
                })
              })]
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.default, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.default, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong", {
              children: "With Icons"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.default, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
              className: "align-items-center mt-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                sm: true,
                xs: "12",
                className: "text-center mt-3",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  color: "primary",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("i", {
                    className: "fa fa-lightbulb-o"
                  }), "\xA0Standard Button"]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                sm: true,
                xs: "12",
                className: "text-center mt-3",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  color: "secondary",
                  outline: true,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("i", {
                    className: "fa fa-lightbulb-o"
                  }), "\xA0Outline Button"]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                sm: true,
                xs: "12",
                className: "text-center mt-3",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  color: "ghost-success",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("i", {
                    className: "fa fa-lightbulb-o"
                  }), "\xA0Ghost Button"]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                sm: true,
                xs: "12",
                className: "text-center mt-3",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  color: "warning",
                  className: "btn-square",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("i", {
                    className: "fa fa-lightbulb-o"
                  }), "\xA0Square Button"]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
                sm: true,
                xs: "12",
                className: "text-center mt-3",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  color: "danger",
                  className: "btn-pill",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("i", {
                    className: "fa fa-lightbulb-o"
                  }), "\xA0Pill Button"]
                })
              })]
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
            xs: "12",
            md: "6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.default, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.default, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong", {
                  children: "Block Level Buttons"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.default, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
                  children: ["Add prop ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code", {
                    children: "block"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  color: "secondary",
                  size: "lg",
                  block: true,
                  children: "Block level button"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  color: "primary",
                  size: "lg",
                  block: true,
                  children: "Block level button"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  color: "success",
                  size: "lg",
                  block: true,
                  children: "Block level button"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  color: "info",
                  size: "lg",
                  block: true,
                  children: "Block level button"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  color: "warning",
                  size: "lg",
                  block: true,
                  children: "Block level button"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  color: "danger",
                  size: "lg",
                  block: true,
                  children: "Block level button"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  color: "link",
                  size: "lg",
                  block: true,
                  children: "Block level button"
                })]
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
            xs: "12",
            md: "6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.default, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.default, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong", {
                  children: "Block Level Buttons"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.default, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
                  children: ["Add prop ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code", {
                    children: "block"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  outline: true,
                  color: "secondary",
                  size: "lg",
                  block: true,
                  children: "Block level button"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  outline: true,
                  color: "primary",
                  size: "lg",
                  block: true,
                  children: "Block level button"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  outline: true,
                  color: "success",
                  size: "lg",
                  block: true,
                  children: "Block level button"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  outline: true,
                  color: "info",
                  size: "lg",
                  block: true,
                  children: "Block level button"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  outline: true,
                  color: "warning",
                  size: "lg",
                  block: true,
                  children: "Block level button"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  outline: true,
                  color: "danger",
                  size: "lg",
                  block: true,
                  children: "Block level button"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
                  color: "ghost-info",
                  size: "lg",
                  block: true,
                  children: "Block level button"
                })]
              })]
            })
          })]
        })]
      });
    }
  }]);

  return Buttons;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Buttons);

/***/ }),

/***/ "./node_modules/reactstrap/es/Button.js":
/*!**********************************************!*\
  !*** ./node_modules/reactstrap/es/Button.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");








var propTypes = {
  active: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
  'aria-label': (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  block: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
  color: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
  outline: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
  tag: _utils__WEBPACK_IMPORTED_MODULE_7__.tagPropType,
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_5___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string)]),
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),
  size: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().node),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object),
  close: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool)
};
var defaultProps = {
  color: 'secondary',
  tag: 'button'
};

var Button = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__.default)(Button, _React$Component);

  function Button(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.onClick = _this.onClick.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this));
    return _this;
  }

  var _proto = Button.prototype;

  _proto.onClick = function onClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.onClick) {
      return this.props.onClick(e);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        active = _this$props.active,
        ariaLabel = _this$props['aria-label'],
        block = _this$props.block,
        className = _this$props.className,
        close = _this$props.close,
        cssModule = _this$props.cssModule,
        color = _this$props.color,
        outline = _this$props.outline,
        size = _this$props.size,
        Tag = _this$props.tag,
        innerRef = _this$props.innerRef,
        attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(_this$props, ["active", "aria-label", "block", "className", "close", "cssModule", "color", "outline", "size", "tag", "innerRef"]);

    if (close && typeof attributes.children === 'undefined') {
      attributes.children = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
        "aria-hidden": true
      }, "\xD7");
    }

    var btnOutlineColor = "btn" + (outline ? '-outline' : '') + "-" + color;
    var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_6___default()(className, {
      close: close
    }, close || 'btn', close || btnOutlineColor, size ? "btn-" + size : false, block ? 'btn-block' : false, {
      active: active,
      disabled: this.props.disabled
    }), cssModule);

    if (attributes.href && Tag === 'button') {
      Tag = 'a';
    }

    var defaultAriaLabel = close ? 'Close' : null;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      type: Tag === 'button' && attributes.onClick ? 'button' : undefined
    }, attributes, {
      className: classes,
      ref: innerRef,
      onClick: this.onClick,
      "aria-label": ariaLabel || defaultAriaLabel
    }));
  };

  return Button;
}(react__WEBPACK_IMPORTED_MODULE_4__.Component);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ }),

/***/ "./node_modules/reactstrap/es/Card.js":
/*!********************************************!*\
  !*** ./node_modules/reactstrap/es/Card.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");






var propTypes = {
  tag: _utils__WEBPACK_IMPORTED_MODULE_5__.tagPropType,
  inverse: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  color: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  body: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  outline: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func)])
};
var defaultProps = {
  tag: 'div'
};

var Card = function Card(props) {
  var className = props.className,
      cssModule = props.cssModule,
      color = props.color,
      body = props.body,
      inverse = props.inverse,
      outline = props.outline,
      Tag = props.tag,
      innerRef = props.innerRef,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["className", "cssModule", "color", "body", "inverse", "outline", "tag", "innerRef"]);

  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, 'card', inverse ? 'text-white' : false, body ? 'card-body' : false, color ? (outline ? 'border' : 'bg') + "-" + color : false), cssModule);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, attributes, {
    className: classes,
    ref: innerRef
  }));
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

/***/ }),

/***/ "./node_modules/reactstrap/es/CardBody.js":
/*!************************************************!*\
  !*** ./node_modules/reactstrap/es/CardBody.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");






var propTypes = {
  tag: _utils__WEBPACK_IMPORTED_MODULE_5__.tagPropType,
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func)])
};
var defaultProps = {
  tag: 'div'
};

var CardBody = function CardBody(props) {
  var className = props.className,
      cssModule = props.cssModule,
      innerRef = props.innerRef,
      Tag = props.tag,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["className", "cssModule", "innerRef", "tag"]);

  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, 'card-body'), cssModule);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, attributes, {
    className: classes,
    ref: innerRef
  }));
};

CardBody.propTypes = propTypes;
CardBody.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardBody);

/***/ }),

/***/ "./node_modules/reactstrap/es/CardHeader.js":
/*!**************************************************!*\
  !*** ./node_modules/reactstrap/es/CardHeader.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");






var propTypes = {
  tag: _utils__WEBPACK_IMPORTED_MODULE_5__.tagPropType,
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)
};
var defaultProps = {
  tag: 'div'
};

var CardHeader = function CardHeader(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["className", "cssModule", "tag"]);

  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, 'card-header'), cssModule);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, attributes, {
    className: classes
  }));
};

CardHeader.propTypes = propTypes;
CardHeader.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardHeader);

/***/ }),

/***/ "./node_modules/reactstrap/es/Col.js":
/*!*******************************************!*\
  !*** ./node_modules/reactstrap/es/Col.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");






var colWidths = ['xs', 'sm', 'md', 'lg', 'xl'];
var stringOrNumberProp = prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]);
var columnProps = prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string), prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),
  order: stringOrNumberProp,
  offset: stringOrNumberProp
})]);
var propTypes = {
  tag: _utils__WEBPACK_IMPORTED_MODULE_5__.tagPropType,
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  widths: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().array)
};
var defaultProps = {
  tag: 'div',
  widths: colWidths
};

var getColumnSizeClass = function getColumnSizeClass(isXs, colWidth, colSize) {
  if (colSize === true || colSize === '') {
    return isXs ? 'col' : "col-" + colWidth;
  } else if (colSize === 'auto') {
    return isXs ? 'col-auto' : "col-" + colWidth + "-auto";
  }

  return isXs ? "col-" + colSize : "col-" + colWidth + "-" + colSize;
};

var Col = function Col(props) {
  var className = props.className,
      cssModule = props.cssModule,
      widths = props.widths,
      Tag = props.tag,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["className", "cssModule", "widths", "tag"]);

  var colClasses = [];
  widths.forEach(function (colWidth, i) {
    var columnProp = props[colWidth];
    delete attributes[colWidth];

    if (!columnProp && columnProp !== '') {
      return;
    }

    var isXs = !i;

    if ((0,_utils__WEBPACK_IMPORTED_MODULE_5__.isObject)(columnProp)) {
      var _classNames;

      var colSizeInterfix = isXs ? '-' : "-" + colWidth + "-";
      var colClass = getColumnSizeClass(isXs, colWidth, columnProp.size);
      colClasses.push((0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_4___default()((_classNames = {}, _classNames[colClass] = columnProp.size || columnProp.size === '', _classNames["order" + colSizeInterfix + columnProp.order] = columnProp.order || columnProp.order === 0, _classNames["offset" + colSizeInterfix + columnProp.offset] = columnProp.offset || columnProp.offset === 0, _classNames)), cssModule));
    } else {
      var _colClass = getColumnSizeClass(isXs, colWidth, columnProp);

      colClasses.push(_colClass);
    }
  });

  if (!colClasses.length) {
    colClasses.push('col');
  }

  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, colClasses), cssModule);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, attributes, {
    className: classes
  }));
};

Col.propTypes = propTypes;
Col.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Col);

/***/ }),

/***/ "./node_modules/reactstrap/es/Row.js":
/*!*******************************************!*\
  !*** ./node_modules/reactstrap/es/Row.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");






var rowColWidths = ['xs', 'sm', 'md', 'lg', 'xl'];
var rowColsPropType = prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]);
var propTypes = {
  tag: _utils__WEBPACK_IMPORTED_MODULE_5__.tagPropType,
  noGutters: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  form: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  xs: rowColsPropType,
  sm: rowColsPropType,
  md: rowColsPropType,
  lg: rowColsPropType,
  xl: rowColsPropType
};
var defaultProps = {
  tag: 'div',
  widths: rowColWidths
};

var Row = function Row(props) {
  var className = props.className,
      cssModule = props.cssModule,
      noGutters = props.noGutters,
      Tag = props.tag,
      form = props.form,
      widths = props.widths,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["className", "cssModule", "noGutters", "tag", "form", "widths"]);

  var colClasses = [];
  widths.forEach(function (colWidth, i) {
    var colSize = props[colWidth];
    delete attributes[colWidth];

    if (!colSize) {
      return;
    }

    var isXs = !i;
    colClasses.push(isXs ? "row-cols-" + colSize : "row-cols-" + colWidth + "-" + colSize);
  });
  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, noGutters ? 'no-gutters' : null, form ? 'form-row' : 'row', colClasses), cssModule);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, attributes, {
    className: classes
  }));
};

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Row);

/***/ })

}]);