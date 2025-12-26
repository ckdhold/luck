;
(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof2(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof2(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
  function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
  function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
  function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
  function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
  function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
  function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
  function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n3 = 0, F = function F() {}; return { s: F, n: function n() { return _n3 >= r.length ? { done: !0 } : { done: !1, value: r[_n3++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
  function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
  function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof2(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
  function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
  function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
  function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
  function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
  function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof2(i) ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != _typeof2(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof2(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _typeof2(o) { "@babel/helpers - typeof"; return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof2(o); }
  function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
  function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
  function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
  System.register(['./index-legacy-BMrJCZb9.js'], function (exports, module) {
    'use strict';

    var getDefaultExportFromCjs, defineComponent, ref, reactive, watch, computed, tryOnMounted, whenever, useClipboard, useLocalStorage, useDebounceFn, onMounted, createVNode, inject, nextTick, openBlock, createElementBlock, createBaseVNode, normalizeClass, normalizeStyle, Fragment, renderList, getCurrentInstance, createCommentVNode, withDirectives, vModelText, createTextVNode, toDisplayString, provide, useSlots, onClickOutside, resolveComponent, createBlock, withCtx, resolveDynamicComponent, mergeProps, renderSlot, vShow, Teleport, pushScopeId, popScopeId, withModifiers, _export_sfc, useI18n, useStore, storeToRefs, i18n, unref, vModelSelect, themeChange, isHex, isRgbOrRgba, languageList;
    return {
      setters: [function (module) {
        getDefaultExportFromCjs = module.I;
        defineComponent = module.d;
        ref = module.r;
        reactive = module.J;
        watch = module.D;
        computed = module.A;
        tryOnMounted = module.K;
        whenever = module.L;
        useClipboard = module.M;
        useLocalStorage = module.N;
        useDebounceFn = module.O;
        onMounted = module.v;
        createVNode = module.e;
        inject = module.P;
        nextTick = module.Q;
        openBlock = module.o;
        createElementBlock = module.c;
        createBaseVNode = module.a;
        normalizeClass = module.B;
        normalizeStyle = module.n;
        Fragment = module.F;
        renderList = module.b;
        getCurrentInstance = module.R;
        createCommentVNode = module.z;
        withDirectives = module.x;
        vModelText = module.G;
        createTextVNode = module.f;
        toDisplayString = module.t;
        provide = module.S;
        useSlots = module.T;
        onClickOutside = module.U;
        resolveComponent = module.i;
        createBlock = module.l;
        withCtx = module.V;
        resolveDynamicComponent = module.W;
        mergeProps = module.X;
        renderSlot = module.Y;
        vShow = module.Z;
        Teleport = module.$;
        pushScopeId = module.a0;
        popScopeId = module.a1;
        withModifiers = module.a2;
        _export_sfc = module.k;
        useI18n = module.m;
        useStore = module.p;
        storeToRefs = module.s;
        i18n = module.q;
        unref = module.j;
        vModelSelect = module.H;
        themeChange = module.a3;
        isHex = module.a4;
        isRgbOrRgba = module.a5;
        languageList = module.a6;
      }],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/*end*/\n.pattern-list[data-v-5b2b02ea] {\n  margin: 0;\n  padding: 0;\n  display: grid;\n  grid-template-rows: repeat(7, 1fr);\n  grid-gap: 1px;\n  border: 1px solid #000;\n}\n.pattern-list li[data-v-5b2b02ea] {\n  cursor: pointer;\n}.small-alpha-slider{height:10px!important}.small-alpha-slider .small-bar{height:10px!important;width:10px!important}.small-alpha-slider .small-bar div{width:12px!important;height:12px!important;border-radius:5px!important;transform:translate(-6px,-2px);margin-top:1px!important}.bee-alpha-slider{position:relative;margin-bottom:15px;width:100%;height:14px;box-shadow:2px 0 8px #00000014;border-radius:15px}.bee-alpha-slider.is-vertical{width:14px;height:100%;display:inline-block;transform:rotate(180deg)}.bee-alpha-slider.transparent{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);background-repeat:repeat}.bee-alpha-slider__bar{position:relative;width:100%;height:100%;border-radius:15px}.bee-alpha-slider__bar-pointer{position:absolute;width:14px;height:14px}.bee-alpha-slider__bar-handle{width:14px;height:14px;border-radius:6px;transform:translate(-7px,-2px);background-color:#f8f8f8;margin-top:2px;box-shadow:0 1px 4px #0000005e;cursor:pointer}.bee-alpha-slider__bar-handle.vertical{transform:translateY(-7px);margin-top:0}.bee-compact{margin-bottom:15px;width:auto;box-shadow:3px 0 5px #00000014;display:inline-block}.bee-compact__row{position:relative;width:100%;margin:0}.bee-compact__row>*{display:inline-block;vertical-align:middle}.bee-compact__color_cube{width:100%;height:100%}.bee-compact__color_cube.transparent:before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background:white}.bee-compact__color_cube.transparent:after{content:\"\";position:absolute;top:100%;left:0;transform:rotate(-45deg);transform-origin:0 0;width:35px;height:1px;background:red}.bee-compact__color_cube.advance{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAdCAYAAAC9pNwMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABqVJREFUeNrEl11yHDUQx1ua2Zlde2M7jqESqnjg45kjcBwOwQG4BY+8cwWK17xBUUARICQhTmI7tte7Ozs7o+bXLTleuACpKNJqJP3789+doKoSPxfVGxFZioS1iK5Yd0nCJko9iLTVVvZSlCOp5FBF7vP5RFTelyDHvmYvMPPtiP19fu+HIHPetrllX2TLMJAOgEehti3ZY/Axap51ZB5ZDEnGMUoCNCmDbRv+2Q4CDJ5Mymj4OmE0CNj6b5WJlkel3xkiGXjOc0imDH/JDid1AXQEfKgccHg3lN+uhh+v2WkkOvCUnT3GjP2WOfrJzjUNPq/ugPUej1TiwME3+DfVUhWkEQF6LZraJxsp6xHLIzW/DNyAW75PGJVrOxbQFSeWzOsdjQ/tZHTxtSgdzAimMfOAdbas7crUvIWAqZg5+gg8FBzYTOygbo1tAb1xTYMs/q1xAFgnvBx5JrKO2X9pzJrJhr+b5BaY8vjG3O+w7HFnypkZ+zP3K8AWL7FHiRsJappe4knA9fo/pj7WrIrdshBs8cukcu0ljhK2lZt1Q8B1msMj5WCQKoibd8q8p1J8i6aWJnrJCcDljDX2Cm8Jn2WJC9PtIHpYeowza125Dc3c6CQ1MbEdooxoPQw54Ak9jigaKcAMk9ddgUi68ZxMmNbNG8hTXXjOZrPf+vg4C+RpRRJqO0ps8FxtzhoJLiSIHCWtLi9u5LiZyqKv0UvlHmaccukoVjJLFu2YUy946FRidS7beCXN9i3gKzd1Yo53ps7ppTnqEYD0mYNldpuxnvIo2nZb/L+ay9tulA/sJpE/Tfchj1H2kW2KpsFYSK4YgI1vZDJe57XmIAu642N5kCxUJfQ8bA48IKpWGNKi/T7rPWRMBMkp5lhz5mUlV0O+fGAGC5XMkTzoG349I/D+Qis0jpeZBt0CXaZGnwtwdcS7A/4ycOIi3bNI0pzfxoVHQYYDIu+A9djJ5bKX+c2BVKnHS5Xcw8QTecWlXxi/khgvYMFzHlp4/g74WREshg3zpuS9mfowShxyrnv6wFS2Dl12QUDwaO54xIWTKZem8up7M0ojn5BzdftEdPMzII9ljE8kVde8Z5y89PSJYcACAJhWTigFOO1rpqRbWs0pKjp4Nkl6OMiGQiFnKsOnLQNqJNe33yV5iFml/4YLfzB+wwpvuNoT+eq0F+JWYtp50MlXLBvUAkLlXXbdloHkUsREDsc6y9LDvs2pTNJD6eM5+x/KAslqWK/pOo/WEIvw3PC3q8rZz3IzWBqqp2CpTvjAACIVyFhLMQmlwXPU9gYrC+lCZs0VtPkc0Jfc+Va+XK/lK3Pr10XhF8ToAjf1VKktAH0hd3srqesSMmCJaiNwJB/IzNviF9Uor8NnndSkyRBfExbPpdHfKRg/yqH8JCPxdvbZVE6+6GTzmCD9Af45RfhzLGZZtEaIVQVdDpLwVByAHeIu8DXWGTySUil8wSNw6fMoliZnfHsqfXiC2M+gjJXX7wuEOvm4gWUBa9h4xrAAtwy6hHyWo1QQGc9gDkD7sAt8VjqETSnUHaArd0Gupc8ZBv4n4ymUfiEPxEu4/A3eyayX+x+ZZjjoIEl6D+2zrJJgyOoKf68RCKJXOpt4B3xZQNclwVeSbXVd2hXzKXlpqsC3c0ttyR3La6rTW2yyP1dpSbdowUtBji1+aAioxTZXD+ORZcrs+A5YF9kWnnfWeJUSZgnswKeZ7FNHkaeXgjTmowVhkhuQ1pQxCE1aik2A16OVVwtvayxmW6fdeDNKKcs79Zhy5eaFwIOXsxu3grolVsUVS0y0pAKN3tpMStdlheJajZ1V5rxWHxoJjR6crr51frlg59K73AFWf7h3gs8BlWtpsHpqwrioa6nJj5lphgim1C3XdPGuuZm2hYIB90QCrKqxDnPkm81hN6pvAyqElRdvN3exjdXeYGQS8oXGmjgoICQjhUh6jdSYmvQdpakSFArIfg6bqiqZW6t3N6HaNbUX7M4Lt4NK8bX3SblJM9Mas+65xuodpVFRj58HfLyAdPZjftCittnLXaHWKQdczNE4trkfK8GFiT3RVqU523gaBbeC04/3zW3pp0yJWFqfofjZejBfw3bGE3WNO8jrmLtDt5ahVyHt+DiUDv/WtFpAQ+4MrDFvC3Bb+uXiI2f1TXGURfesNPc11mjacki1dK/JKTnsUmYGLnnM/2MycWRt7dCtedrSyhqPe39tPBecjV3rrTWDweqzSl2hsfVwM3lX+UL+f0CuTv/Hn38EGAAvCnNy1JKVIQAAAABJRU5ErkJggg==)}.bee-compact__color_cube .alpha{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);background-repeat:repeat}.bee-compact__color-cube--wrap{position:relative;width:25px;height:25px;cursor:pointer;overflow:hidden}.bee-compact__color-cube--wrap:hover{transform:scale(1.2);z-index:299;transition:transform .2s}.bee-colorPicker__record{display:flex;align-items:center;margin-top:20px}.bee-colorPicker__record .text{width:48px;margin-right:10px;text-align:right;font-size:12px;color:#666}.bee-colorPicker__record .color-list{width:auto;display:flex;position:relative;margin:0}.bee-colorPicker__record .color-list .color-item{position:relative;width:25px;height:25px;cursor:pointer;overflow:hidden;display:inline-block;vertical-align:middle;margin-right:1px;box-shadow:3px 0 5px #00000014}.bee-colorPicker__record .color-list .color-item__round{border-radius:50%}.bee-colorPicker__record .color-list .color-item.transparent{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);background-repeat:repeat}.bee-colorPicker__record .color-list .color-item:hover{transform:scale(1.2);z-index:299;transition:transform .2s}.bee-colorPicker__record .color-list .color-item__display{width:100%;height:100%}.small-hue-slider{height:10px!important}.small-hue-slider .small-bar{height:10px!important;width:10px!important}.small-hue-slider .small-bar div{width:12px!important;height:12px!important;border-radius:5px!important;transform:translate(-6px,-2px);margin-top:1px!important}.bee-hue-colorPicker{position:relative;margin-bottom:15px;width:100%;height:14px;box-shadow:2px 0 8px #00000014;border-radius:15px}.bee-hue-colorPicker.is-vertical{width:14px;height:100%;display:inline-block;transform:rotate(180deg)}.bee-hue-colorPicker.transparent{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);background-repeat:repeat}.bee-hue-colorPicker__inner{position:relative;width:100%;height:100%;border-radius:15px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMkAAAAdCAYAAAAAaUg8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAKtJREFUeNrs09EKgjAUgOGzEFfv/7CVBceiLiJiLnf7fSAbDoUj/iWnyKgRcXxf9Wtt7Vvntf8854jLY3uN19qzf67nH/e2nmmdZ8xjg2x+sI533qf9g4wM/3GvLPumOHVMWf/4SiWWsUG6/6bG+/NWDgE0iQREAiIBkYBIQCQgEhAJiAQQCYgERAIiAZGASEAkIBJAJCASEAmIBEQCIgGRgEgAkYBIYNAqwAD5oWo3bpsiKwAAAABJRU5ErkJggg==);background-size:100%}.bee-hue-colorPicker__inner-pointer{position:absolute;width:14px;height:14px}.bee-hue-colorPicker__inner-handle{width:14px;height:14px;border-radius:6px;transform:translate(-7px,-2px);background-color:#f8f8f8;margin-top:2px;box-shadow:0 1px 4px #0000005e;cursor:pointer}.bee-hue-colorPicker__inner-handle.vertical{transform:translate(-1px,-7px);margin-top:0}.small-light-slider{height:10px!important}.small-light-slider .small-bar{height:10px!important;width:10px!important}.small-light-slider .small-bar div{width:12px!important;height:12px!important;border-radius:5px!important;transform:translate(-6px,-2px);margin-top:1px!important}.bee-light-colorPicker{position:relative;margin-bottom:15px;width:100%;height:14px;box-shadow:2px 0 8px #00000014;border-radius:15px}.bee-light-colorPicker.is-vertical{width:14px;height:100%;display:inline-block;transform:rotate(180deg)}.bee-light-colorPicker.transparent{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);background-repeat:repeat}.bee-light-colorPicker__inner{position:relative;width:100%;height:100%;border-radius:15px}.bee-light-colorPicker__inner-pointer{position:absolute;width:14px;height:14px}.bee-light-colorPicker__inner-handle{width:14px;height:14px;border-radius:6px;transform:translate(-7px,-2px);background-color:#f8f8f8;margin-top:2px;box-shadow:0 1px 4px #0000005e;cursor:pointer}.bee-light-colorPicker__inner-handle.vertical{transform:translateY(-7px);margin-top:0}.bee-saturation{position:relative;margin-bottom:15px;width:100%;height:125px}.bee-saturation__chrome{border-top-left-radius:5px;border-top-right-radius:5px;border-color:transparent}.bee-saturation__hidden{overflow:hidden}.bee-saturation__white,.bee-saturation__black{position:absolute;top:0;left:0;right:0;bottom:0}.bee-saturation__black{background:linear-gradient(0deg,#000,transparent)}.bee-saturation__white{background:linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.bee-saturation__cursor{position:absolute}.bee-saturation__cursor div{transform:translate(-5px,-5px);box-shadow:0 1px 4px #0000005e;width:10px;height:10px;border:1px solid white;border-radius:50%;cursor:pointer}.inputs-controls{display:flex;font-size:16px;margin-bottom:5px}.inputs-controls .formatBtn{position:relative;display:inline-flex;justify-content:center;align-items:center;padding:1px;border:0;text-align:center;cursor:pointer;background-color:transparent;font-weight:700;outline:none;margin-right:5px}.inputs-controls .formatBtn:hover{color:#1a3aff}.inputs-controls .format-group{display:flex;flex-grow:1}.inputs-controls .format-group input{padding:5px;margin:0 3px;min-width:0;text-align:center;border-width:0 0 1px 0;-webkit-appearance:none;appearance:none;-moz-appearance:textfield;outline:none;flex:1}.inputs-controls .format-group input::-webkit-outer-spin-button,.inputs-controls .format-group input::-webkit-inner-spin-button{-webkit-appearance:none!important;margin:0}.bee-fk-colorPicker{position:relative;box-sizing:border-box;border-radius:3px;box-shadow:0 0 10px #00000026;-webkit-user-select:none;-moz-user-select:none;user-select:none;background-color:#fff;width:249px;padding-bottom:10px}.bee-fk-colorPicker__inner{padding:12px}.bee-fk-colorPicker__header{margin-bottom:12px;z-index:999;text-align:left}.bee-fk-colorPicker__header .back{border:solid black;border-width:0 1px 1px 0;display:inline-block;padding:4px;margin-left:2px;transform:rotate(135deg);-webkit-transform:rotate(135deg)}.bee-fk-colorPicker__display{position:relative;width:100%;margin:0;text-align:left}.bee-fk-colorPicker__display .transparent{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);background-repeat:repeat}.bee-fk-colorPicker__display .current-color{margin-right:10px;width:50px;height:24px;box-shadow:3px 0 5px #00000014;position:relative;cursor:pointer;overflow:hidden;display:inline-block;vertical-align:middle}.bee-fk-colorPicker__display .current-color .color-cube{width:100%;height:100%}.bee-fk-colorPicker__display .hexColor-prefix{position:relative;padding:0 4px;font-size:14px;display:inline-block;vertical-align:middle}.bee-fk-colorPicker__display input{width:25px;text-align:center;outline:0;border-top:0;border-right:0;border-left:none;display:inline-block;vertical-align:middle;padding-bottom:3px;border-bottom:1px solid #e3e2e8}.bee-fk-colorPicker__display .hexColor-input{width:64px}.bee-fk-colorPicker__display .action{float:right;vertical-align:middle}.bee-fk-colorPicker__display .action .clear-btn{border-color:transparent;color:#409eff;background:transparent;padding-left:0;padding-right:0;display:inline-block;vertical-align:middle;cursor:pointer}.bee-fk-colorPicker__display .action .copy-btn{border-color:transparent;color:#13ce66cc;background:transparent;padding-left:0;padding-right:0;display:inline-block;margin-left:10px;vertical-align:middle;cursor:pointer}.bee-ele-colorPicker{position:relative;box-sizing:border-box;border-radius:3px;box-shadow:0 0 10px #00000026;-webkit-user-select:none;-moz-user-select:none;user-select:none;background-color:#fff;padding:10px;width:300px}.bee-ele-colorPicker .bee-ele-row{display:flex}.bee-ele-colorPicker .bee-ele-row .bee-ele-saturation{width:280px;height:180px}.bee-ele-colorPicker .bee-ele-row .bee-ele-hue{margin-left:10px;height:180px}.bee-chrome-colorPicker{position:relative;box-sizing:border-box;border-radius:3px;box-shadow:0 0 10px #00000026;-webkit-user-select:none;-moz-user-select:none;user-select:none;background-color:#fff;width:250px;padding-bottom:20px}.bee-chrome-colorPicker-body{padding:0 12px;background-color:#fff}.bee-chrome-colorPicker-body .chrome-controls{display:flex}.bee-chrome-colorPicker-body .chrome-controls .chrome-color-wrap{position:relative;width:36px;height:36px;border-radius:50%;overflow:hidden;z-index:1}.bee-chrome-colorPicker-body .chrome-controls .chrome-color-wrap .current-color{width:100%;height:100%}.bee-chrome-colorPicker-body .chrome-controls .chrome-sliders{flex:1;margin-left:10px}.bee-color-wrap{margin-right:10px;width:50px;height:24px;box-shadow:3px 0 5px #00000014;position:relative;cursor:pointer;overflow:hidden;display:inline-block;vertical-align:middle}.bee-color-wrap.transparent{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);background-repeat:repeat}.bee-color-wrap.round{width:22px;height:22px;border-radius:50%;border:1px solid #d8d8d8}.bee-color-wrap .current-color{width:100%;height:100%}.vc-alpha-slider[data-v-18925ba6]{position:relative;margin-bottom:15px;width:100%;height:14px;box-shadow:2px 0 8px #00000014;border-radius:15px}.vc-alpha-slider.is-vertical[data-v-18925ba6]{width:14px;height:100%;display:inline-block;transform:rotate(180deg)}.vc-alpha-slider.transparent[data-v-18925ba6]{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);background-repeat:repeat}.vc-alpha-slider__bar[data-v-18925ba6]{position:relative;width:100%;height:100%;border-radius:15px}.vc-alpha-slider__bar-pointer[data-v-18925ba6]{position:absolute;width:14px;height:14px}.vc-alpha-slider__bar-handle[data-v-18925ba6]{width:14px;height:14px;border-radius:6px;transform:translate(-7px,-2px);background-color:#f8f8f8;margin-top:2px;box-shadow:0 1px 4px #0000005e;cursor:pointer}.vc-alpha-slider__bar-handle.vertical[data-v-18925ba6]{transform:translateY(-7px);margin-top:0}.vc-alpha-slider.small-slider[data-v-18925ba6]{height:10px!important}.vc-alpha-slider.small-slider .small-bar[data-v-18925ba6]{height:10px!important;width:10px!important}.vc-alpha-slider.small-slider .small-bar div[data-v-18925ba6]{width:12px!important;height:12px!important;border-radius:5px!important;transform:translate(-6px,-2px);margin-top:1px!important}.vc-compact[data-v-b969fd48]{margin-bottom:15px;width:auto;box-shadow:3px 0 5px #00000014;display:inline-block}.vc-compact__row[data-v-b969fd48]{position:relative;width:100%;margin:0;height:27px}.vc-compact__row>*[data-v-b969fd48]{display:inline-block;vertical-align:middle}.vc-compact__color_cube[data-v-b969fd48]{width:100%;height:100%}.vc-compact__color_cube.transparent[data-v-b969fd48]:before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background:white}.vc-compact__color_cube.transparent[data-v-b969fd48]:after{content:\"\";position:absolute;top:100%;left:0;transform:rotate(-45deg);transform-origin:0 0;width:35px;height:1px;background:red}.vc-compact__color_cube.advance[data-v-b969fd48]{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAdCAYAAAC9pNwMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABqVJREFUeNrEl11yHDUQx1ua2Zlde2M7jqESqnjg45kjcBwOwQG4BY+8cwWK17xBUUARICQhTmI7tte7Ozs7o+bXLTleuACpKNJqJP3789+doKoSPxfVGxFZioS1iK5Yd0nCJko9iLTVVvZSlCOp5FBF7vP5RFTelyDHvmYvMPPtiP19fu+HIHPetrllX2TLMJAOgEehti3ZY/Axap51ZB5ZDEnGMUoCNCmDbRv+2Q4CDJ5Mymj4OmE0CNj6b5WJlkel3xkiGXjOc0imDH/JDid1AXQEfKgccHg3lN+uhh+v2WkkOvCUnT3GjP2WOfrJzjUNPq/ugPUej1TiwME3+DfVUhWkEQF6LZraJxsp6xHLIzW/DNyAW75PGJVrOxbQFSeWzOsdjQ/tZHTxtSgdzAimMfOAdbas7crUvIWAqZg5+gg8FBzYTOygbo1tAb1xTYMs/q1xAFgnvBx5JrKO2X9pzJrJhr+b5BaY8vjG3O+w7HFnypkZ+zP3K8AWL7FHiRsJappe4knA9fo/pj7WrIrdshBs8cukcu0ljhK2lZt1Q8B1msMj5WCQKoibd8q8p1J8i6aWJnrJCcDljDX2Cm8Jn2WJC9PtIHpYeowza125Dc3c6CQ1MbEdooxoPQw54Ak9jigaKcAMk9ddgUi68ZxMmNbNG8hTXXjOZrPf+vg4C+RpRRJqO0ps8FxtzhoJLiSIHCWtLi9u5LiZyqKv0UvlHmaccukoVjJLFu2YUy946FRidS7beCXN9i3gKzd1Yo53ps7ppTnqEYD0mYNldpuxnvIo2nZb/L+ay9tulA/sJpE/Tfchj1H2kW2KpsFYSK4YgI1vZDJe57XmIAu642N5kCxUJfQ8bA48IKpWGNKi/T7rPWRMBMkp5lhz5mUlV0O+fGAGC5XMkTzoG349I/D+Qis0jpeZBt0CXaZGnwtwdcS7A/4ycOIi3bNI0pzfxoVHQYYDIu+A9djJ5bKX+c2BVKnHS5Xcw8QTecWlXxi/khgvYMFzHlp4/g74WREshg3zpuS9mfowShxyrnv6wFS2Dl12QUDwaO54xIWTKZem8up7M0ojn5BzdftEdPMzII9ljE8kVde8Z5y89PSJYcACAJhWTigFOO1rpqRbWs0pKjp4Nkl6OMiGQiFnKsOnLQNqJNe33yV5iFml/4YLfzB+wwpvuNoT+eq0F+JWYtp50MlXLBvUAkLlXXbdloHkUsREDsc6y9LDvs2pTNJD6eM5+x/KAslqWK/pOo/WEIvw3PC3q8rZz3IzWBqqp2CpTvjAACIVyFhLMQmlwXPU9gYrC+lCZs0VtPkc0Jfc+Va+XK/lK3Pr10XhF8ToAjf1VKktAH0hd3srqesSMmCJaiNwJB/IzNviF9Uor8NnndSkyRBfExbPpdHfKRg/yqH8JCPxdvbZVE6+6GTzmCD9Af45RfhzLGZZtEaIVQVdDpLwVByAHeIu8DXWGTySUil8wSNw6fMoliZnfHsqfXiC2M+gjJXX7wuEOvm4gWUBa9h4xrAAtwy6hHyWo1QQGc9gDkD7sAt8VjqETSnUHaArd0Gupc8ZBv4n4ymUfiEPxEu4/A3eyayX+x+ZZjjoIEl6D+2zrJJgyOoKf68RCKJXOpt4B3xZQNclwVeSbXVd2hXzKXlpqsC3c0ttyR3La6rTW2yyP1dpSbdowUtBji1+aAioxTZXD+ORZcrs+A5YF9kWnnfWeJUSZgnswKeZ7FNHkaeXgjTmowVhkhuQ1pQxCE1aik2A16OVVwtvayxmW6fdeDNKKcs79Zhy5eaFwIOXsxu3grolVsUVS0y0pAKN3tpMStdlheJajZ1V5rxWHxoJjR6crr51frlg59K73AFWf7h3gs8BlWtpsHpqwrioa6nJj5lphgim1C3XdPGuuZm2hYIB90QCrKqxDnPkm81hN6pvAyqElRdvN3exjdXeYGQS8oXGmjgoICQjhUh6jdSYmvQdpakSFArIfg6bqiqZW6t3N6HaNbUX7M4Lt4NK8bX3SblJM9Mas+65xuodpVFRj58HfLyAdPZjftCittnLXaHWKQdczNE4trkfK8GFiT3RVqU523gaBbeC04/3zW3pp0yJWFqfofjZejBfw3bGE3WNO8jrmLtDt5ahVyHt+DiUDv/WtFpAQ+4MrDFvC3Bb+uXiI2f1TXGURfesNPc11mjacki1dK/JKTnsUmYGLnnM/2MycWRt7dCtedrSyhqPe39tPBecjV3rrTWDweqzSl2hsfVwM3lX+UL+f0CuTv/Hn38EGAAvCnNy1JKVIQAAAABJRU5ErkJggg==)}.vc-compact__color_cube .alpha[data-v-b969fd48]{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);background-repeat:repeat}.vc-compact__color-cube--wrap[data-v-b969fd48]{position:relative;width:27px;height:27px;cursor:pointer;overflow:hidden}.vc-compact__color-cube--wrap[data-v-b969fd48]:hover{transform:scale(1.2);z-index:299;transition:transform .2s}.vc-saturation[data-v-7f0cdcdf]{position:relative;margin-bottom:15px;width:100%;height:125px}.vc-saturation__chrome[data-v-7f0cdcdf]{border-top-left-radius:5px;border-top-right-radius:5px;border-color:transparent}.vc-saturation__hidden[data-v-7f0cdcdf]{overflow:hidden}.vc-saturation__white[data-v-7f0cdcdf],.vc-saturation__black[data-v-7f0cdcdf]{position:absolute;top:0;left:0;right:0;bottom:0}.vc-saturation__black[data-v-7f0cdcdf]{background:linear-gradient(0deg,#000,transparent)}.vc-saturation__white[data-v-7f0cdcdf]{background:linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.vc-saturation__cursor[data-v-7f0cdcdf]{position:absolute}.vc-saturation__cursor div[data-v-7f0cdcdf]{transform:translate(-5px,-5px);box-shadow:0 1px 4px #0000005e;width:10px;height:10px;border:1px solid white;border-radius:50%;cursor:pointer}.vc-hue-slider[data-v-e1a08576]{position:relative;margin-bottom:15px;width:100%;height:14px;box-shadow:2px 0 8px #00000014;border-radius:15px}.vc-hue-slider.is-vertical[data-v-e1a08576]{width:14px;height:100%;display:inline-block;transform:rotate(180deg)}.vc-hue-slider.transparent[data-v-e1a08576]{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);background-repeat:repeat}.vc-hue-slider__bar[data-v-e1a08576]{position:relative;width:100%;height:100%;border-radius:15px;background:linear-gradient(to right,rgb(255,0,0) 0%,rgb(255,255,0) 16.66%,rgb(0,255,0) 33.33%,rgb(0,255,255) 50%,rgb(0,0,255) 66.66%,rgb(255,0,255) 83.33%,rgb(255,0,0) 100%);background:-ms-linear-gradient(left,rgb(255,0,0) 0%,rgb(255,255,0) 16.66%,rgb(0,255,0) 33.33%,rgb(0,255,255) 50%,rgb(0,0,255) 66.66%,rgb(255,0,255) 83.33%,rgb(255,0,0) 100%)}.vc-hue-slider__bar-pointer[data-v-e1a08576]{position:absolute;width:14px;height:14px}.vc-hue-slider__bar-handle[data-v-e1a08576]{width:14px;height:14px;border-radius:6px;transform:translate(-7px,-2px);background-color:#f8f8f8;margin-top:2px;box-shadow:0 1px 4px #0000005e;cursor:pointer}.vc-hue-slider__bar-handle.vertical[data-v-e1a08576]{transform:translateY(-7px);margin-top:0}.vc-hue-slider.small-slider[data-v-e1a08576]{height:10px!important}.vc-hue-slider.small-slider .small-bar[data-v-e1a08576]{height:10px!important;width:10px!important}.vc-hue-slider.small-slider .small-bar div[data-v-e1a08576]{width:12px!important;height:12px!important;border-radius:5px!important;transform:translate(-6px,-2px);margin-top:1px!important}.vc-lightness-slider[data-v-94a50a9e]{position:relative;margin-bottom:15px;width:100%;height:14px;box-shadow:2px 0 8px #00000014;border-radius:15px}.vc-lightness-slider.is-vertical[data-v-94a50a9e]{width:14px;height:100%;display:inline-block;transform:rotate(180deg)}.vc-lightness-slider.transparent[data-v-94a50a9e]{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);background-repeat:repeat}.vc-lightness-slider__bar[data-v-94a50a9e]{position:relative;width:100%;height:100%;border-radius:15px}.vc-lightness-slider__bar-pointer[data-v-94a50a9e]{position:absolute;width:14px;height:14px}.vc-lightness-slider__bar-handle[data-v-94a50a9e]{width:14px;height:14px;border-radius:6px;transform:translate(-7px,-2px);background-color:#f8f8f8;margin-top:2px;box-shadow:0 1px 4px #0000005e;cursor:pointer}.vc-lightness-slider__bar-handle.vertical[data-v-94a50a9e]{transform:translateY(-7px);margin-top:0}.vc-lightness-slider.small-slider[data-v-94a50a9e]{height:10px!important}.vc-lightness-slider.small-slider .small-bar[data-v-94a50a9e]{height:10px!important;width:10px!important}.vc-lightness-slider.small-slider .small-bar div[data-v-94a50a9e]{width:12px!important;height:12px!important;border-radius:5px!important;transform:translate(-6px,-2px);margin-top:1px!important}.vc-colorPicker__record[data-v-0f657238]{display:flex;align-items:center;margin-top:15px}.vc-colorPicker__record .text[data-v-0f657238]{width:48px;margin-right:10px;text-align:right;font-size:12px;color:#666}.vc-colorPicker__record .color-list[data-v-0f657238]{width:100%;display:flex;position:relative;margin:0;gap:2px}.vc-colorPicker__record .color-list .color-item[data-v-0f657238]{position:relative;flex:1;max-width:26px;height:26px;border-radius:2px;cursor:pointer;overflow:hidden;display:inline-block;vertical-align:middle;box-shadow:3px 0 5px #0000001a}.vc-colorPicker__record .color-list .color-item__round[data-v-0f657238]{border-radius:50%}.vc-colorPicker__record .color-list .color-item.transparent[data-v-0f657238]{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);background-repeat:repeat}.vc-colorPicker__record .color-list .color-item[data-v-0f657238]:hover{transform:scale(1.2);z-index:299;transition:transform .2s}.vc-colorPicker__record .color-list .color-item__display[data-v-0f657238]{width:100%;height:100%}.vc-display[data-v-7334ac20]{height:28px;display:flex;align-items:center;gap:8px}.vc-display .vc-current-color[data-v-7334ac20]{width:50px;height:100%;box-shadow:3px 0 5px #00000014;border-radius:2px;position:relative;cursor:pointer;overflow:hidden;display:inline-block;vertical-align:middle}.vc-display .vc-current-color.vc-transparent[data-v-7334ac20]{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);background-repeat:repeat}.vc-display .vc-current-color .color-cube[data-v-7334ac20]{width:100%;height:100%;text-align:center}.vc-display .vc-color-input[data-v-7334ac20]{height:100%;flex:1;flex-shrink:0;box-sizing:border-box;position:relative}.vc-display .vc-color-input input[data-v-7334ac20]{padding:0;border:0;outline:none;cursor:pointer;font-size:14px;text-align:center;box-sizing:border-box;background-color:#c8c8c840;color:#666;border-radius:2px;height:100%;width:100%}.vc-display .vc-rgb-input[data-v-7334ac20]{flex:1;font-size:12px;color:#666;text-align:center}.vc-display .vc-rgb-input input[data-v-7334ac20]{padding:4px 0;margin-bottom:2px;border:0;outline:none;cursor:pointer;font-size:14px;text-align:center;background-color:#c8c8c840;color:#666;border-radius:2px;width:100%}.vc-display .vc-alpha-input[data-v-7334ac20]{width:48px;height:100%;border:none;display:flex;justify-content:center;align-items:center;border-radius:2px;font-size:14px;background-color:#c8c8c840;padding:0 2px}.vc-display .vc-alpha-input>input[data-v-7334ac20]{width:100%;height:100%;padding:0;text-align:center;background-color:transparent;font-size:inherit}.vc-display .vc-alpha-input__inner[data-v-7334ac20]{padding:10px 12px;border-radius:4px;color:#000;font-size:14px;line-height:20px;outline:none;border:none;display:block;box-sizing:border-box;cursor:pointer}.vc-display .vc-input-toggle[data-v-7334ac20]{cursor:pointer;font-size:12px;line-height:12px;width:24px;border-radius:4px;padding:2px}.vc-display .vc-input-toggle[data-v-7334ac20]:hover{background-color:#efefef}.vc-display .vc-input-toggle[data-v-7334ac20]:before{height:0;width:0;margin:auto auto 2px;content:\"\";display:block;border-bottom:4px solid #888;border-left:4px solid transparent;border-right:4px solid transparent}.vc-display .vc-input-toggle[data-v-7334ac20]:after{height:0;width:0;margin:2px auto auto;content:\"\";display:block;border-top:4px solid #888;border-left:4px solid transparent;border-right:4px solid transparent}.vc-display .copy-text[data-v-7334ac20]{font-size:12px;line-height:28px;text-align:center;transform:scale(.8);display:inline-block}.vc-fk-colorPicker[data-v-48e3c224]{position:relative;box-sizing:border-box;border-radius:3px;-webkit-user-select:none;-moz-user-select:none;user-select:none;background-color:initial}.vc-fk-colorPicker__inner[data-v-48e3c224]{position:relative}.vc-fk-colorPicker__header[data-v-48e3c224]{z-index:999;text-align:left}.vc-fk-colorPicker__header .back[data-v-48e3c224]{border:2px solid rgba(150,150,150,.6);border-width:0 2px 2px 0;display:inline-block;padding:4px;margin-left:2px;margin-bottom:12px;transform:rotate(135deg)}.vc-fk-colorPicker__display[data-v-48e3c224]{position:relative;width:100%;margin:0;text-align:left}.vc-fk-colorPicker__display .transparent[data-v-48e3c224]{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);background-repeat:repeat}.vc-fk-colorPicker__display .current-color[data-v-48e3c224]{margin-right:10px;width:50px;height:24px;box-shadow:3px 0 5px #00000014;position:relative;cursor:pointer;overflow:hidden;display:inline-block;vertical-align:middle}.vc-fk-colorPicker__display .current-color .color-cube[data-v-48e3c224]{width:100%;height:100%}.vc-fk-colorPicker__display .hexColor-prefix[data-v-48e3c224]{position:relative;padding:0 4px;font-size:14px;display:inline-block;vertical-align:middle}.vc-fk-colorPicker__display input[data-v-48e3c224]{width:25px;text-align:center;outline:0;border-top:0;border-right:0;border-left:none;display:inline-block;vertical-align:middle;padding-bottom:3px;border-bottom:1px solid #e3e2e8}.vc-fk-colorPicker__display .hexColor-input[data-v-48e3c224]{width:64px}.vc-fk-colorPicker__display .action[data-v-48e3c224]{float:right;vertical-align:middle}.vc-fk-colorPicker__display .action .clear-btn[data-v-48e3c224]{border-color:transparent;color:#409eff;background:transparent;padding-left:0;padding-right:0;display:inline-block;vertical-align:middle;cursor:pointer}.vc-fk-colorPicker__display .action .copy-btn[data-v-48e3c224]{border-color:transparent;color:#13ce66cc;background:transparent;padding-left:0;padding-right:0;display:inline-block;margin-left:10px;vertical-align:middle;cursor:pointer}.vc-chrome-colorPicker[data-v-2611d66c]{position:relative;box-sizing:border-box;border-radius:3px;-webkit-user-select:none;-moz-user-select:none;user-select:none;background-color:initial}.vc-chrome-colorPicker-body[data-v-2611d66c]{position:relative}.vc-chrome-colorPicker-body .chrome-controls[data-v-2611d66c]{display:flex}.vc-chrome-colorPicker-body .chrome-controls .chrome-color-wrap[data-v-2611d66c]{position:relative;width:36px;height:36px;border-radius:50%;overflow:hidden;z-index:1}.vc-chrome-colorPicker-body .chrome-controls .chrome-color-wrap.transparent[data-v-2611d66c]{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);background-repeat:repeat}.vc-chrome-colorPicker-body .chrome-controls .chrome-color-wrap .current-color[data-v-2611d66c]{width:100%;height:100%}.vc-chrome-colorPicker-body .chrome-controls .chrome-sliders[data-v-2611d66c]{flex:1;margin-left:10px}.bee-angle{transform:rotate(90deg)}.bee-angle>*{display:inline-block;vertical-align:middle}.bee-angle.zero-right{transform:rotate(180deg)}.bee-angle.zero-bottom{transform:rotate(270deg)}.bee-angle__round{position:relative;width:16px;height:16px;border:1px solid #666;border-radius:50%;cursor:pointer;display:inline-block;vertical-align:middle}.bee-angle__round:before{content:\"\";position:absolute;top:50%;left:0;transform:translateY(-50%);width:50%;height:1px;background-color:#666}.vc-gradient-picker[data-v-c4d6d6ea]{position:relative}.vc-gradient-picker__header[data-v-c4d6d6ea]{margin-bottom:12px;z-index:999;text-align:left;display:flex;justify-content:space-between;align-items:center}.vc-gradient-picker__header .back[data-v-c4d6d6ea]{border:2px solid rgba(150,150,150,.65);border-width:0 2px 2px 0;display:inline-block;padding:4px;margin-left:2px;transform:rotate(135deg);margin-right:8px}.vc-gradient-picker .vc-gradient__types[data-v-c4d6d6ea]{display:flex;width:100%;justify-content:space-between}.vc-gradient-picker .vc-gradient__types .vc-gradient-wrap__types[data-v-c4d6d6ea]{display:flex;background-color:#c8c8c840;border-radius:4px;overflow:hidden;align-items:center}.vc-gradient-picker .vc-gradient__types .vc-gradient__type[data-v-c4d6d6ea]{padding:4px 8px;color:#666;cursor:pointer;font-size:12px}.vc-gradient-picker .vc-gradient__types .vc-gradient__type.active[data-v-c4d6d6ea]{color:#000;background-color:#c8c8c8cc}.vc-gradient-picker__body[data-v-c4d6d6ea]{margin-bottom:12px;display:flex;align-items:center}.vc-gradient-picker__body .vc-color-range[data-v-c4d6d6ea]{flex:1}.vc-gradient-picker__body .vc-color-range__container[data-v-c4d6d6ea]{position:relative;height:16px;border-radius:5px}.vc-gradient-picker__body .vc-color-range__container .vc-background[data-v-c4d6d6ea]{height:100%;border-radius:4px;box-shadow:inset 0 0 0 1px #0000000f}.vc-gradient-picker__body .vc-color-range__container .vc-gradient__stop__container[data-v-c4d6d6ea]{position:absolute;width:100%;top:0;height:100%;left:0}.vc-gradient-picker__body .vc-color-range__container .vc-gradient__stop__container .vc-gradient__stop[data-v-c4d6d6ea]{position:absolute;top:-2px;width:14px;height:16px;overflow:hidden;border:2px solid #fff;border-radius:2px;cursor:pointer;box-shadow:0 0 2px 1px #00000059;box-sizing:content-box;transform:translate(-9px)}.vc-gradient-picker__body .vc-color-range__container .vc-gradient__stop__container .vc-gradient__stop--inner[data-v-c4d6d6ea]{display:inline-block;height:100%}.vc-gradient-picker__body .vc-color-range__container .vc-gradient__stop__container .vc-gradient__stop--current[data-v-c4d6d6ea]{position:relative;z-index:1;box-shadow:0 0 2px 2px #2253f4,0 0 1px 1px #2253f480}.vc-gradient-picker .vc-degree-input[data-v-c4d6d6ea]{position:relative;z-index:2;font-size:12px;border-radius:4px;display:flex}.vc-gradient-picker .vc-degree-input:hover .vc-degree-input__panel[data-v-c4d6d6ea]{display:block}.vc-gradient-picker .vc-degree-input__control[data-v-c4d6d6ea]{width:100%;height:100%;display:flex;justify-content:center;align-items:center;border-radius:4px;background-color:#c8c8c840;color:#666;padding:0 6px 0 0}.vc-gradient-picker .vc-degree-input__control input[data-v-c4d6d6ea]{max-width:28px;text-align:center;border:none;outline:none;background-color:transparent;color:#666;font-size:inherit;overflow:visible}.vc-gradient-picker .vc-degree-input__panel[data-v-c4d6d6ea]{display:none;z-index:10;position:absolute;top:20px;left:0}.vc-gradient-picker .vc-degree-input__panel .vc-degree-input__disk[data-v-c4d6d6ea]{padding:4px;background-color:#f1f1f1;box-shadow:0 0 2px #00000029,0 1px 8px #0000000f,0 4px 12px #00000014;border-radius:4px;display:flex;justify-content:center;align-items:center;position:relative;transform:translate(0)}.vc-gradient-picker .vc-picker-degree-input[data-v-c4d6d6ea]{margin-left:8px}.vc-colorpicker[data-v-0492277d]{position:relative;box-sizing:border-box;border-radius:3px;box-shadow:0 0 10px #00000026;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:276px;z-index:10000}.vc-colorpicker *[data-v-0492277d]{outline:none;line-height:1}.vc-colorpicker--container[data-v-0492277d]{padding:16px}.vc-colorpicker--tabs[data-v-0492277d]{padding:2px;background:#f6f7f9;border-radius:6px;position:relative;margin-bottom:12px}.vc-colorpicker--tabs__inner[data-v-0492277d]{display:flex;justify-content:space-between;padding:0;background:#f6f7f9;border-bottom:none;position:relative;box-sizing:border-box}.vc-colorpicker--tabs__btn[data-v-0492277d]{flex:1;z-index:2;color:#636c78;font-size:14px;border-radius:4px;cursor:pointer}.vc-colorpicker--tabs__btn.vc-btn-active[data-v-0492277d]{color:#33383e;font-weight:600}.vc-colorpicker--tabs__btn button[data-v-0492277d]{width:100%;background-color:initial;padding:6px 0;font-size:14px;line-height:20px;color:#636c78;border:0;border-radius:0;outline:0;cursor:pointer;-moz-appearance:none;appearance:none;-webkit-appearance:none;font-weight:inherit}.vc-colorpicker--tabs__btn button .vc-btn__content[data-v-0492277d]{position:relative;white-space:nowrap}.vc-colorpicker--tabs__bg[data-v-0492277d]{position:absolute;top:0;bottom:0;background:#fff;box-shadow:0 1px 4px #0000001f;border-radius:4px;z-index:1;transition:left .2s ease-in-out}.vc-colorpicker.black[data-v-0492277d]{background-color:#000;color:#fff}.vc-colorpicker.white[data-v-0492277d]{background-color:#fff;color:#333}.vc-color-wrap[data-v-354ca836]{margin-right:10px;width:50px;height:24px;box-shadow:3px 0 5px #00000014;position:relative;cursor:pointer;overflow:hidden;display:inline-block;vertical-align:middle}.vc-color-wrap.transparent[data-v-354ca836]{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);background-repeat:repeat}.vc-color-wrap.round[data-v-354ca836]{width:22px;height:22px;border-radius:50%;border:1px solid #d8d8d8}.vc-color-wrap .current-color[data-v-354ca836]{width:100%;height:100%}.vc-color-extra[data-v-354ca836]{margin-top:10px}\n/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        var themes = {
          aqua: {
            "color-scheme": "dark",
            "primary": "#09ecf3",
            "primary-content": "#005355",
            "secondary": "#966fb3",
            "accent": "#ffe999",
            "neutral": "#3b8ac4",
            "base-100": "#345da7",
            "info": "#2563eb",
            "success": "#16a34a",
            "warning": "#d97706",
            "error": "oklch(73.95% 0.19 27.33)"
          },
          black: {
            "color-scheme": "dark",
            "primary": "#373737",
            "secondary": "#373737",
            "accent": "#373737",
            "base-100": "#000000",
            "base-200": "#141414",
            "base-300": "#262626",
            "base-content": "#d6d6d6",
            "neutral": "#373737",
            "info": "#0000ff",
            "success": "#008000",
            "warning": "#ffff00",
            "error": "#ff0000",
            "--rounded-box": "0",
            "--rounded-btn": "0",
            "--rounded-badge": "0",
            "--animation-btn": "0",
            "--animation-input": "0",
            "--btn-focus-scale": "1",
            "--tab-radius": "0"
          },
          bumblebee: {
            "color-scheme": "light",
            "primary": "oklch(89.51% 0.2132 96.61)",
            "primary-content": "oklch(38.92% 0.046 96.61)",
            "secondary": "oklch(80.39% 0.194 70.76)",
            "secondary-content": "oklch(39.38% 0.068 70.76)",
            "accent": "oklch(81.27% 0.157 56.52)",
            "neutral": "oklch(12.75% 0.075 281.99)",
            "base-100": "oklch(100% 0 0)"
          },
          cmyk: {
            "color-scheme": "light",
            "primary": "#45AEEE",
            "secondary": "#E8488A",
            "accent": "#FFF232",
            "neutral": "#1a1a1a",
            "base-100": "oklch(100% 0 0)",
            "info": "#4AA8C0",
            "success": "#823290",
            "warning": "#EE8133",
            "error": "#E93F33"
          },
          corporate: {
            "color-scheme": "light",
            "primary": "oklch(60.39% 0.228 269.1)",
            "secondary": "#7b92b2",
            "accent": "#67cba0",
            "neutral": "#181a2a",
            "neutral-content": "#edf2f7",
            "base-100": "oklch(100% 0 0)",
            "base-content": "#181a2a",
            "--rounded-box": "0.25rem",
            "--rounded-btn": ".125rem",
            "--rounded-badge": ".125rem",
            "--tab-radius": "0.25rem",
            "--animation-btn": "0",
            "--animation-input": "0",
            "--btn-focus-scale": "1"
          },
          cupcake: {
            "color-scheme": "light",
            "primary": "#65c3c8",
            "secondary": "#ef9fbc",
            "accent": "#eeaf3a",
            "neutral": "#291334",
            "base-100": "#faf7f5",
            "base-200": "#efeae6",
            "base-300": "#e7e2df",
            "base-content": "#291334",
            "--rounded-btn": "1.9rem",
            "--tab-border": "2px",
            "--tab-radius": "0.7rem"
          },
          cyberpunk: {
            "color-scheme": "light",
            "fontFamily": "ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace",
            "primary": "oklch(74.22% 0.209 6.35)",
            "secondary": "oklch(83.33% 0.184 204.72)",
            "accent": "oklch(71.86% 0.2176 310.43)",
            "neutral": "oklch(23.04% 0.065 269.31)",
            "neutral-content": "oklch(94.51% 0.179 104.32)",
            "base-100": "oklch(94.51% 0.179 104.32)",
            "--rounded-box": "0",
            "--rounded-btn": "0",
            "--rounded-badge": "0",
            "--tab-radius": "0"
          },
          dark: {
            "color-scheme": "dark",
            "primary": "oklch(65.69% 0.196 275.75)",
            "secondary": "oklch(74.8% 0.26 342.55)",
            "accent": "oklch(74.51% 0.167 183.61)",
            "neutral": "#2a323c",
            "neutral-content": "#A6ADBB",
            "base-100": "#1d232a",
            "base-200": "#191e24",
            "base-300": "#15191e",
            "base-content": "#A6ADBB"
          },
          dracula: {
            "color-scheme": "dark",
            "primary": "#ff79c6",
            "secondary": "#bd93f9",
            "accent": "#ffb86c",
            "neutral": "#414558",
            "base-100": "#282a36",
            "base-content": "#f8f8f2",
            "info": "#8be9fd",
            "success": "#50fa7b",
            "warning": "#f1fa8c",
            "error": "#ff5555"
          },
          emerald: {
            "color-scheme": "light",
            "primary": "#66cc8a",
            "primary-content": "#223D30",
            "secondary": "#377cfb",
            "secondary-content": "#fff",
            "accent": "#f68067",
            "accent-content": "#000",
            "neutral": "#333c4d",
            "neutral-content": "#f9fafb",
            "base-100": "oklch(100% 0 0)",
            "base-content": "#333c4d",
            "--animation-btn": "0",
            "--animation-input": "0",
            "--btn-focus-scale": "1"
          },
          fantasy: {
            "color-scheme": "light",
            "primary": "oklch(37.45% 0.189 325.02)",
            "secondary": "oklch(53.92% 0.162 241.36)",
            "accent": "oklch(75.98% 0.204 56.72)",
            "neutral": "#1f2937",
            "base-100": "oklch(100% 0 0)",
            "base-content": "#1f2937"
          },
          forest: {
            "color-scheme": "dark",
            "primary": "#1eb854",
            "primary-content": "#000000",
            "secondary": "#1DB88E",
            "accent": "#1DB8AB",
            "neutral": "#19362D",
            "base-100": "#171212",
            "--rounded-btn": "1.9rem"
          },
          garden: {
            "color-scheme": "light",
            "primary": "oklch(62.45% 0.278 3.8363600743192197)",
            "primary-content": "#fff",
            "secondary": "#8E4162",
            "accent": "#5c7f67",
            "neutral": "#291E00",
            "neutral-content": "#e9e7e7",
            "base-100": "#e9e7e7",
            "base-content": "#100f0f"
          },
          halloween: {
            "color-scheme": "dark",
            "primary": "oklch(77.48% 0.204 60.62)",
            "primary-content": "#131616",
            "secondary": "oklch(45.98% 0.248 305.03)",
            "accent": "oklch(64.8% 0.223 136.07347934356451)",
            "accent-content": "#000000",
            "neutral": "#2F1B05",
            "base-100": "#212121",
            "info": "#2563eb",
            "success": "#16a34a",
            "warning": "#d97706",
            "error": "oklch(65.72% 0.199 27.33)"
          },
          light: {
            "color-scheme": "light",
            "primary": "oklch(49.12% 0.3096 275.75)",
            "secondary": "oklch(69.71% 0.329 342.55)",
            "secondary-content": "oklch(98.71% 0.0106 342.55)",
            "accent": "oklch(76.76% 0.184 183.61)",
            "neutral": "#2B3440",
            "neutral-content": "#D7DDE4",
            "base-100": "oklch(100% 0 0)",
            "base-200": "#F2F2F2",
            "base-300": "#E5E6E6",
            "base-content": "#1f2937"
          },
          lofi: {
            "color-scheme": "light",
            "primary": "#0D0D0D",
            "primary-content": "oklch(100% 0 0)",
            "secondary": "#1A1919",
            "secondary-content": "oklch(100% 0 0)",
            "accent": "#262626",
            "accent-content": "oklch(100% 0 0)",
            "neutral": "#000000",
            "neutral-content": "oklch(100% 0 0)",
            "base-100": "oklch(100% 0 0)",
            "base-200": "#F2F2F2",
            "base-300": "#E6E5E5",
            "base-content": "#000000",
            "info": "oklch(79.54% 0.103 205.9)",
            "success": "oklch(90.13% 0.153 164.14)",
            "warning": "oklch(88.37% 0.135 79.94)",
            "error": "oklch(78.66% 0.15 28.47)",
            "--rounded-box": "0.25rem",
            "--rounded-btn": "0.125rem",
            "--rounded-badge": "0.125rem",
            "--tab-radius": "0.125rem",
            "--animation-btn": "0",
            "--animation-input": "0",
            "--btn-focus-scale": "1"
          },
          luxury: {
            "color-scheme": "dark",
            "primary": "oklch(100% 0 0)",
            "secondary": "#152747",
            "accent": "#513448",
            "neutral": "#331800",
            "neutral-content": "#FFE7A3",
            "base-100": "#09090b",
            "base-200": "#171618",
            "base-300": "#2e2d2f",
            "base-content": "#dca54c",
            "info": "#66c6ff",
            "success": "#87d039",
            "warning": "#e2d562",
            "error": "#ff6f6f"
          },
          pastel: {
            "color-scheme": "light",
            "primary": "#d1c1d7",
            "secondary": "#f6cbd1",
            "accent": "#b4e9d6",
            "neutral": "#70acc7",
            "base-100": "oklch(100% 0 0)",
            "base-200": "#f9fafb",
            "base-300": "#d1d5db",
            "--rounded-btn": "1.9rem",
            "--tab-radius": "0.7rem"
          },
          retro: {
            "color-scheme": "light",
            "primary": "#ef9995",
            "primary-content": "#282425",
            "secondary": "#a4cbb4",
            "secondary-content": "#282425",
            "accent": "#DC8850",
            "accent-content": "#282425",
            "neutral": "#2E282A",
            "neutral-content": "#EDE6D4",
            "base-100": "#ece3ca",
            "base-200": "#e4d8b4",
            "base-300": "#DBCA9A",
            "base-content": "#282425",
            "info": "#2563eb",
            "success": "#16a34a",
            "warning": "#d97706",
            "error": "oklch(65.72% 0.199 27.33)",
            "--rounded-box": "0.4rem",
            "--rounded-btn": "0.4rem",
            "--rounded-badge": "0.4rem",
            "--tab-radius": "0.4rem"
          },
          synthwave: {
            "color-scheme": "dark",
            "primary": "#e779c1",
            "secondary": "#58c7f3",
            "accent": "oklch(88.04% 0.206 93.72)",
            "neutral": "#221551",
            "neutral-content": "#f9f7fd",
            "base-100": "#1a103d",
            "base-content": "#f9f7fd",
            "info": "#53c0f3",
            "info-content": "#201047",
            "success": "#71ead2",
            "success-content": "#201047",
            "warning": "#eace6c",
            "warning-content": "#201047",
            "error": "#ec8c78",
            "error-content": "#201047"
          },
          valentine: {
            "color-scheme": "light",
            "primary": "#e96d7b",
            "secondary": "#a991f7",
            "accent": "#66b1b3",
            "neutral": "#af4670",
            "neutral-content": "#f0d6e8",
            "base-100": "#fae7f4",
            "base-content": "#632c3b",
            "info": "#2563eb",
            "success": "#16a34a",
            "warning": "#d97706",
            "error": "oklch(73.07% 0.207 27.33)",
            "--rounded-btn": "1.9rem",
            "--tab-radius": "0.7rem"
          },
          wireframe: {
            "color-scheme": "light",
            "fontFamily": "Chalkboard,comic sans ms,'sans-serif'",
            "primary": "#b8b8b8",
            "secondary": "#b8b8b8",
            "accent": "#b8b8b8",
            "neutral": "#ebebeb",
            "base-100": "oklch(100% 0 0)",
            "base-200": "#eeeeee",
            "base-300": "#dddddd",
            "info": "#0000ff",
            "success": "#008000",
            "warning": "#a6a659",
            "error": "#ff0000",
            "--rounded-box": "0.2rem",
            "--rounded-btn": "0.2rem",
            "--rounded-badge": "0.2rem",
            "--tab-radius": "0.2rem"
          },
          autumn: {
            "color-scheme": "light",
            "primary": "#8C0327",
            "secondary": "#D85251",
            "accent": "#D59B6A",
            "neutral": "#826A5C",
            "base-100": "#f1f1f1",
            "info": "#42ADBB",
            "success": "#499380",
            "warning": "#E97F14",
            "error": "oklch(53.07% 0.241 24.16)"
          },
          business: {
            "color-scheme": "dark",
            "primary": "#1C4E80",
            "secondary": "#7C909A",
            "accent": "#EA6947",
            "neutral": "#23282E",
            "base-100": "#202020",
            "info": "#0091D5",
            "success": "#6BB187",
            "warning": "#DBAE59",
            "error": "#AC3E31",
            "--rounded-box": "0.25rem",
            "--rounded-btn": ".125rem",
            "--rounded-badge": ".125rem"
          },
          acid: {
            "color-scheme": "light",
            "primary": "oklch(71.9% 0.357 330.7595734057481)",
            "secondary": "oklch(73.37% 0.224 48.25087840015526)",
            "accent": "oklch(92.78% 0.264 122.96295065960891)",
            "neutral": "oklch(21.31% 0.128 278.68)",
            "base-100": "#fafafa",
            "info": "oklch(60.72% 0.227 252.05)",
            "success": "oklch(85.72% 0.266 158.53)",
            "warning": "oklch(91.01% 0.212 100.5)",
            "error": "oklch(64.84% 0.293 29.34918758658804)",
            "--rounded-box": "1.25rem",
            "--rounded-btn": "1rem",
            "--rounded-badge": "1rem",
            "--tab-radius": "0.7rem"
          },
          lemonade: {
            "color-scheme": "light",
            "primary": "oklch(58.92% 0.199 134.6)",
            "secondary": "oklch(77.75% 0.196 111.09)",
            "accent": "oklch(85.39% 0.201 100.73)",
            "neutral": "oklch(30.98% 0.075 108.6)",
            "base-100": "oklch(98.71% 0.02 123.72)",
            "info": "oklch(86.19% 0.047 224.14)",
            "success": "oklch(86.19% 0.047 157.85)",
            "warning": "oklch(86.19% 0.047 102.15)",
            "error": "oklch(86.19% 0.047 25.85)"
          },
          night: {
            "color-scheme": "dark",
            "primary": "#38bdf8",
            "secondary": "#818CF8",
            "accent": "#F471B5",
            "neutral": "#1E293B",
            "base-100": "#0F172A",
            "info": "#0CA5E9",
            "info-content": "#000000",
            "success": "#2DD4BF",
            "warning": "#F4BF50",
            "error": "#FB7085"
          },
          coffee: {
            "color-scheme": "dark",
            "primary": "#DB924B",
            "secondary": "#263E3F",
            "accent": "#10576D",
            "neutral": "#120C12",
            "base-100": "#20161F",
            "base-content": "#c59f60",
            "info": "#8DCAC1",
            "success": "#9DB787",
            "warning": "#FFD25F",
            "error": "#FC9581"
          },
          winter: {
            "color-scheme": "light",
            "primary": "oklch(56.86% 0.255 257.57)",
            "secondary": "#463AA2",
            "accent": "#C148AC",
            "neutral": "#021431",
            "base-100": "oklch(100% 0 0)",
            "base-200": "#F2F7FF",
            "base-300": "#E3E9F4",
            "base-content": "#394E6A",
            "info": "#93E7FB",
            "success": "#81CFD1",
            "warning": "#EFD7BB",
            "error": "#E58B8B"
          },
          dim: {
            "color-scheme": "dark",
            "primary": "#9FE88D",
            "secondary": "#FF7D5C",
            "accent": "#C792E9",
            "neutral": "#1c212b",
            "neutral-content": "#B2CCD6",
            "base-100": "#2A303C",
            "base-200": "#242933",
            "base-300": "#20252E",
            "base-content": "#B2CCD6",
            "info": "#28ebff",
            "success": "#62efbd",
            "warning": "#efd057",
            "error": "#ffae9b"
          },
          nord: {
            "color-scheme": "light",
            "primary": "#5E81AC",
            "secondary": "#81A1C1",
            "accent": "#88C0D0",
            "neutral": "#4C566A",
            "neutral-content": "#D8DEE9",
            "base-100": "#ECEFF4",
            "base-200": "#E5E9F0",
            "base-300": "#D8DEE9",
            "base-content": "#2E3440",
            "info": "#B48EAD",
            "success": "#A3BE8C",
            "warning": "#EBCB8B",
            "error": "#BF616A",
            "--rounded-box": "0.4rem",
            "--rounded-btn": "0.2rem",
            "--rounded-badge": "0.4rem",
            "--tab-radius": "0.2rem"
          },
          sunset: {
            "color-scheme": "dark",
            "primary": "#FF865B",
            "secondary": "#FD6F9C",
            "accent": "#B387FA",
            "neutral": "oklch(26% 0.019 237.69)",
            "neutral-content": "oklch(70% 0.019 237.69)",
            "base-100": "oklch(22% 0.019 237.69)",
            "base-200": "oklch(20% 0.019 237.69)",
            "base-300": "oklch(18% 0.019 237.69)",
            "base-content": "#9fb9d0",
            "info": "#89e0eb",
            "success": "#addfad",
            "warning": "#f1c891",
            "error": "#ffbbbd",
            "--rounded-box": "1.2rem",
            "--rounded-btn": "0.8rem",
            "--rounded-badge": "0.4rem",
            "--tab-radius": "0.7rem"
          }
        };
        var daisyuiThemes = /*@__PURE__*/getDefaultExportFromCjs(themes);

        // This file is autogenerated. It's used to publish ESM to npm.
        function _typeof(obj) {
          "@babel/helpers - typeof";

          return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
            return typeof obj;
          } : function (obj) {
            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
          }, _typeof(obj);
        }

        // https://github.com/bgrins/TinyColor
        // Brian Grinstead, MIT License

        var trimLeft = /^\s+/;
        var trimRight = /\s+$/;
        function tinycolor(color, opts) {
          color = color ? color : "";
          opts = opts || {};

          // If input is already a tinycolor, return itself
          if (color instanceof tinycolor) {
            return color;
          }
          // If we are called as a function, call using new instead
          if (!(this instanceof tinycolor)) {
            return new tinycolor(color, opts);
          }
          var rgb = inputToRGB(color);
          this._originalInput = color, this._r = rgb.r, this._g = rgb.g, this._b = rgb.b, this._a = rgb.a, this._roundA = Math.round(100 * this._a) / 100, this._format = opts.format || rgb.format;
          this._gradientType = opts.gradientType;

          // Don't let the range of [0,255] come back in [0,1].
          // Potentially lose a little bit of precision here, but will fix issues where
          // .5 gets interpreted as half of the total, instead of half of 1
          // If it was supposed to be 128, this was already taken care of by `inputToRgb`
          if (this._r < 1) this._r = Math.round(this._r);
          if (this._g < 1) this._g = Math.round(this._g);
          if (this._b < 1) this._b = Math.round(this._b);
          this._ok = rgb.ok;
        }
        tinycolor.prototype = {
          isDark: function isDark() {
            return this.getBrightness() < 128;
          },
          isLight: function isLight() {
            return !this.isDark();
          },
          isValid: function isValid() {
            return this._ok;
          },
          getOriginalInput: function getOriginalInput() {
            return this._originalInput;
          },
          getFormat: function getFormat() {
            return this._format;
          },
          getAlpha: function getAlpha() {
            return this._a;
          },
          getBrightness: function getBrightness() {
            //http://www.w3.org/TR/AERT#color-contrast
            var rgb = this.toRgb();
            return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
          },
          getLuminance: function getLuminance() {
            //http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
            var rgb = this.toRgb();
            var RsRGB, GsRGB, BsRGB, R, G, B;
            RsRGB = rgb.r / 255;
            GsRGB = rgb.g / 255;
            BsRGB = rgb.b / 255;
            if (RsRGB <= 0.03928) R = RsRGB / 12.92;else R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
            if (GsRGB <= 0.03928) G = GsRGB / 12.92;else G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
            if (BsRGB <= 0.03928) B = BsRGB / 12.92;else B = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
            return 0.2126 * R + 0.7152 * G + 0.0722 * B;
          },
          setAlpha: function setAlpha(value) {
            this._a = boundAlpha(value);
            this._roundA = Math.round(100 * this._a) / 100;
            return this;
          },
          toHsv: function toHsv() {
            var hsv = rgbToHsv(this._r, this._g, this._b);
            return {
              h: hsv.h * 360,
              s: hsv.s,
              v: hsv.v,
              a: this._a
            };
          },
          toHsvString: function toHsvString() {
            var hsv = rgbToHsv(this._r, this._g, this._b);
            var h = Math.round(hsv.h * 360),
              s = Math.round(hsv.s * 100),
              v = Math.round(hsv.v * 100);
            return this._a == 1 ? "hsv(" + h + ", " + s + "%, " + v + "%)" : "hsva(" + h + ", " + s + "%, " + v + "%, " + this._roundA + ")";
          },
          toHsl: function toHsl() {
            var hsl = rgbToHsl(this._r, this._g, this._b);
            return {
              h: hsl.h * 360,
              s: hsl.s,
              l: hsl.l,
              a: this._a
            };
          },
          toHslString: function toHslString() {
            var hsl = rgbToHsl(this._r, this._g, this._b);
            var h = Math.round(hsl.h * 360),
              s = Math.round(hsl.s * 100),
              l = Math.round(hsl.l * 100);
            return this._a == 1 ? "hsl(" + h + ", " + s + "%, " + l + "%)" : "hsla(" + h + ", " + s + "%, " + l + "%, " + this._roundA + ")";
          },
          toHex: function toHex(allow3Char) {
            return rgbToHex(this._r, this._g, this._b, allow3Char);
          },
          toHexString: function toHexString(allow3Char) {
            return "#" + this.toHex(allow3Char);
          },
          toHex8: function toHex8(allow4Char) {
            return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
          },
          toHex8String: function toHex8String(allow4Char) {
            return "#" + this.toHex8(allow4Char);
          },
          toRgb: function toRgb() {
            return {
              r: Math.round(this._r),
              g: Math.round(this._g),
              b: Math.round(this._b),
              a: this._a
            };
          },
          toRgbString: function toRgbString() {
            return this._a == 1 ? "rgb(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ")" : "rgba(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ", " + this._roundA + ")";
          },
          toPercentageRgb: function toPercentageRgb() {
            return {
              r: Math.round(bound01(this._r, 255) * 100) + "%",
              g: Math.round(bound01(this._g, 255) * 100) + "%",
              b: Math.round(bound01(this._b, 255) * 100) + "%",
              a: this._a
            };
          },
          toPercentageRgbString: function toPercentageRgbString() {
            return this._a == 1 ? "rgb(" + Math.round(bound01(this._r, 255) * 100) + "%, " + Math.round(bound01(this._g, 255) * 100) + "%, " + Math.round(bound01(this._b, 255) * 100) + "%)" : "rgba(" + Math.round(bound01(this._r, 255) * 100) + "%, " + Math.round(bound01(this._g, 255) * 100) + "%, " + Math.round(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
          },
          toName: function toName() {
            if (this._a === 0) {
              return "transparent";
            }
            if (this._a < 1) {
              return false;
            }
            return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
          },
          toFilter: function toFilter(secondColor) {
            var hex8String = "#" + rgbaToArgbHex(this._r, this._g, this._b, this._a);
            var secondHex8String = hex8String;
            var gradientType = this._gradientType ? "GradientType = 1, " : "";
            if (secondColor) {
              var s = tinycolor(secondColor);
              secondHex8String = "#" + rgbaToArgbHex(s._r, s._g, s._b, s._a);
            }
            return "progid:DXImageTransform.Microsoft.gradient(" + gradientType + "startColorstr=" + hex8String + ",endColorstr=" + secondHex8String + ")";
          },
          toString: function toString(format) {
            var formatSet = !!format;
            format = format || this._format;
            var formattedString = false;
            var hasAlpha = this._a < 1 && this._a >= 0;
            var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name");
            if (needsAlphaFormat) {
              // Special case for "transparent", all other non-alpha formats
              // will return rgba when there is transparency.
              if (format === "name" && this._a === 0) {
                return this.toName();
              }
              return this.toRgbString();
            }
            if (format === "rgb") {
              formattedString = this.toRgbString();
            }
            if (format === "prgb") {
              formattedString = this.toPercentageRgbString();
            }
            if (format === "hex" || format === "hex6") {
              formattedString = this.toHexString();
            }
            if (format === "hex3") {
              formattedString = this.toHexString(true);
            }
            if (format === "hex4") {
              formattedString = this.toHex8String(true);
            }
            if (format === "hex8") {
              formattedString = this.toHex8String();
            }
            if (format === "name") {
              formattedString = this.toName();
            }
            if (format === "hsl") {
              formattedString = this.toHslString();
            }
            if (format === "hsv") {
              formattedString = this.toHsvString();
            }
            return formattedString || this.toHexString();
          },
          clone: function clone() {
            return tinycolor(this.toString());
          },
          _applyModification: function _applyModification(fn, args) {
            var color = fn.apply(null, [this].concat([].slice.call(args)));
            this._r = color._r;
            this._g = color._g;
            this._b = color._b;
            this.setAlpha(color._a);
            return this;
          },
          lighten: function lighten() {
            return this._applyModification(_lighten, arguments);
          },
          brighten: function brighten() {
            return this._applyModification(_brighten, arguments);
          },
          darken: function darken() {
            return this._applyModification(_darken, arguments);
          },
          desaturate: function desaturate() {
            return this._applyModification(_desaturate, arguments);
          },
          saturate: function saturate() {
            return this._applyModification(_saturate, arguments);
          },
          greyscale: function greyscale() {
            return this._applyModification(_greyscale, arguments);
          },
          spin: function spin() {
            return this._applyModification(_spin, arguments);
          },
          _applyCombination: function _applyCombination(fn, args) {
            return fn.apply(null, [this].concat([].slice.call(args)));
          },
          analogous: function analogous() {
            return this._applyCombination(_analogous, arguments);
          },
          complement: function complement() {
            return this._applyCombination(_complement, arguments);
          },
          monochromatic: function monochromatic() {
            return this._applyCombination(_monochromatic, arguments);
          },
          splitcomplement: function splitcomplement() {
            return this._applyCombination(_splitcomplement, arguments);
          },
          // Disabled until https://github.com/bgrins/TinyColor/issues/254
          // polyad: function (number) {
          //   return this._applyCombination(polyad, [number]);
          // },
          triad: function triad() {
            return this._applyCombination(polyad, [3]);
          },
          tetrad: function tetrad() {
            return this._applyCombination(polyad, [4]);
          }
        };

        // If input is an object, force 1 into "1.0" to handle ratios properly
        // String input requires "1.0" as input, so 1 will be treated as 1
        tinycolor.fromRatio = function (color, opts) {
          if (_typeof(color) == "object") {
            var newColor = {};
            for (var i in color) {
              if (color.hasOwnProperty(i)) {
                if (i === "a") {
                  newColor[i] = color[i];
                } else {
                  newColor[i] = convertToPercentage(color[i]);
                }
              }
            }
            color = newColor;
          }
          return tinycolor(color, opts);
        };

        // Given a string or object, convert that input to RGB
        // Possible string inputs:
        //
        //     "red"
        //     "#f00" or "f00"
        //     "#ff0000" or "ff0000"
        //     "#ff000000" or "ff000000"
        //     "rgb 255 0 0" or "rgb (255, 0, 0)"
        //     "rgb 1.0 0 0" or "rgb (1, 0, 0)"
        //     "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
        //     "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
        //     "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
        //     "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
        //     "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
        //
        function inputToRGB(color) {
          var rgb = {
            r: 0,
            g: 0,
            b: 0
          };
          var a = 1;
          var s = null;
          var v = null;
          var l = null;
          var ok = false;
          var format = false;
          if (typeof color == "string") {
            color = stringInputToObject(color);
          }
          if (_typeof(color) == "object") {
            if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
              rgb = rgbToRgb(color.r, color.g, color.b);
              ok = true;
              format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
            } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
              s = convertToPercentage(color.s);
              v = convertToPercentage(color.v);
              rgb = hsvToRgb(color.h, s, v);
              ok = true;
              format = "hsv";
            } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
              s = convertToPercentage(color.s);
              l = convertToPercentage(color.l);
              rgb = hslToRgb(color.h, s, l);
              ok = true;
              format = "hsl";
            }
            if (color.hasOwnProperty("a")) {
              a = color.a;
            }
          }
          a = boundAlpha(a);
          return {
            ok: ok,
            format: color.format || format,
            r: Math.min(255, Math.max(rgb.r, 0)),
            g: Math.min(255, Math.max(rgb.g, 0)),
            b: Math.min(255, Math.max(rgb.b, 0)),
            a: a
          };
        }

        // Conversion Functions
        // --------------------

        // `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
        // <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>

        // `rgbToRgb`
        // Handle bounds / percentage checking to conform to CSS color spec
        // <http://www.w3.org/TR/css3-color/>
        // *Assumes:* r, g, b in [0, 255] or [0, 1]
        // *Returns:* { r, g, b } in [0, 255]
        function rgbToRgb(r, g, b) {
          return {
            r: bound01(r, 255) * 255,
            g: bound01(g, 255) * 255,
            b: bound01(b, 255) * 255
          };
        }

        // `rgbToHsl`
        // Converts an RGB color value to HSL.
        // *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
        // *Returns:* { h, s, l } in [0,1]
        function rgbToHsl(r, g, b) {
          r = bound01(r, 255);
          g = bound01(g, 255);
          b = bound01(b, 255);
          var max = Math.max(r, g, b),
            min = Math.min(r, g, b);
          var h,
            s,
            l = (max + min) / 2;
          if (max == min) {
            h = s = 0; // achromatic
          } else {
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
              case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
              case g:
                h = (b - r) / d + 2;
                break;
              case b:
                h = (r - g) / d + 4;
                break;
            }
            h /= 6;
          }
          return {
            h: h,
            s: s,
            l: l
          };
        }

        // `hslToRgb`
        // Converts an HSL color value to RGB.
        // *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
        // *Returns:* { r, g, b } in the set [0, 255]
        function hslToRgb(h, s, l) {
          var r, g, b;
          h = bound01(h, 360);
          s = bound01(s, 100);
          l = bound01(l, 100);
          function hue2rgb(p, q, t) {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
          }
          if (s === 0) {
            r = g = b = l; // achromatic
          } else {
            var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            var p = 2 * l - q;
            r = hue2rgb(p, q, h + 1 / 3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1 / 3);
          }
          return {
            r: r * 255,
            g: g * 255,
            b: b * 255
          };
        }

        // `rgbToHsv`
        // Converts an RGB color value to HSV
        // *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
        // *Returns:* { h, s, v } in [0,1]
        function rgbToHsv(r, g, b) {
          r = bound01(r, 255);
          g = bound01(g, 255);
          b = bound01(b, 255);
          var max = Math.max(r, g, b),
            min = Math.min(r, g, b);
          var h,
            s,
            v = max;
          var d = max - min;
          s = max === 0 ? 0 : d / max;
          if (max == min) {
            h = 0; // achromatic
          } else {
            switch (max) {
              case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
              case g:
                h = (b - r) / d + 2;
                break;
              case b:
                h = (r - g) / d + 4;
                break;
            }
            h /= 6;
          }
          return {
            h: h,
            s: s,
            v: v
          };
        }

        // `hsvToRgb`
        // Converts an HSV color value to RGB.
        // *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
        // *Returns:* { r, g, b } in the set [0, 255]
        function hsvToRgb(h, s, v) {
          h = bound01(h, 360) * 6;
          s = bound01(s, 100);
          v = bound01(v, 100);
          var i = Math.floor(h),
            f = h - i,
            p = v * (1 - s),
            q = v * (1 - f * s),
            t = v * (1 - (1 - f) * s),
            mod = i % 6,
            r = [v, q, p, p, t, v][mod],
            g = [t, v, v, q, p, p][mod],
            b = [p, p, t, v, v, q][mod];
          return {
            r: r * 255,
            g: g * 255,
            b: b * 255
          };
        }

        // `rgbToHex`
        // Converts an RGB color to hex
        // Assumes r, g, and b are contained in the set [0, 255]
        // Returns a 3 or 6 character hex
        function rgbToHex(r, g, b, allow3Char) {
          var hex = [pad2(Math.round(r).toString(16)), pad2(Math.round(g).toString(16)), pad2(Math.round(b).toString(16))];

          // Return a 3 character hex if possible
          if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
            return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
          }
          return hex.join("");
        }

        // `rgbaToHex`
        // Converts an RGBA color plus alpha transparency to hex
        // Assumes r, g, b are contained in the set [0, 255] and
        // a in [0, 1]. Returns a 4 or 8 character rgba hex
        function rgbaToHex(r, g, b, a, allow4Char) {
          var hex = [pad2(Math.round(r).toString(16)), pad2(Math.round(g).toString(16)), pad2(Math.round(b).toString(16)), pad2(convertDecimalToHex(a))];

          // Return a 4 character hex if possible
          if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
            return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
          }
          return hex.join("");
        }

        // `rgbaToArgbHex`
        // Converts an RGBA color to an ARGB Hex8 string
        // Rarely used, but required for "toFilter()"
        function rgbaToArgbHex(r, g, b, a) {
          var hex = [pad2(convertDecimalToHex(a)), pad2(Math.round(r).toString(16)), pad2(Math.round(g).toString(16)), pad2(Math.round(b).toString(16))];
          return hex.join("");
        }

        // `equals`
        // Can be called with any tinycolor input
        tinycolor.equals = function (color1, color2) {
          if (!color1 || !color2) return false;
          return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
        };
        tinycolor.random = function () {
          return tinycolor.fromRatio({
            r: Math.random(),
            g: Math.random(),
            b: Math.random()
          });
        };

        // Modification Functions
        // ----------------------
        // Thanks to less.js for some of the basics here
        // <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>

        function _desaturate(color, amount) {
          amount = amount === 0 ? 0 : amount || 10;
          var hsl = tinycolor(color).toHsl();
          hsl.s -= amount / 100;
          hsl.s = clamp01(hsl.s);
          return tinycolor(hsl);
        }
        function _saturate(color, amount) {
          amount = amount === 0 ? 0 : amount || 10;
          var hsl = tinycolor(color).toHsl();
          hsl.s += amount / 100;
          hsl.s = clamp01(hsl.s);
          return tinycolor(hsl);
        }
        function _greyscale(color) {
          return tinycolor(color).desaturate(100);
        }
        function _lighten(color, amount) {
          amount = amount === 0 ? 0 : amount || 10;
          var hsl = tinycolor(color).toHsl();
          hsl.l += amount / 100;
          hsl.l = clamp01(hsl.l);
          return tinycolor(hsl);
        }
        function _brighten(color, amount) {
          amount = amount === 0 ? 0 : amount || 10;
          var rgb = tinycolor(color).toRgb();
          rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
          rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
          rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
          return tinycolor(rgb);
        }
        function _darken(color, amount) {
          amount = amount === 0 ? 0 : amount || 10;
          var hsl = tinycolor(color).toHsl();
          hsl.l -= amount / 100;
          hsl.l = clamp01(hsl.l);
          return tinycolor(hsl);
        }

        // Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
        // Values outside of this range will be wrapped into this range.
        function _spin(color, amount) {
          var hsl = tinycolor(color).toHsl();
          var hue = (hsl.h + amount) % 360;
          hsl.h = hue < 0 ? 360 + hue : hue;
          return tinycolor(hsl);
        }

        // Combination Functions
        // ---------------------
        // Thanks to jQuery xColor for some of the ideas behind these
        // <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>

        function _complement(color) {
          var hsl = tinycolor(color).toHsl();
          hsl.h = (hsl.h + 180) % 360;
          return tinycolor(hsl);
        }
        function polyad(color, number) {
          if (isNaN(number) || number <= 0) {
            throw new Error("Argument to polyad must be a positive number");
          }
          var hsl = tinycolor(color).toHsl();
          var result = [tinycolor(color)];
          var step = 360 / number;
          for (var i = 1; i < number; i++) {
            result.push(tinycolor({
              h: (hsl.h + i * step) % 360,
              s: hsl.s,
              l: hsl.l
            }));
          }
          return result;
        }
        function _splitcomplement(color) {
          var hsl = tinycolor(color).toHsl();
          var h = hsl.h;
          return [tinycolor(color), tinycolor({
            h: (h + 72) % 360,
            s: hsl.s,
            l: hsl.l
          }), tinycolor({
            h: (h + 216) % 360,
            s: hsl.s,
            l: hsl.l
          })];
        }
        function _analogous(color, results, slices) {
          results = results || 6;
          slices = slices || 30;
          var hsl = tinycolor(color).toHsl();
          var part = 360 / slices;
          var ret = [tinycolor(color)];
          for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results;) {
            hsl.h = (hsl.h + part) % 360;
            ret.push(tinycolor(hsl));
          }
          return ret;
        }
        function _monochromatic(color, results) {
          results = results || 6;
          var hsv = tinycolor(color).toHsv();
          var h = hsv.h,
            s = hsv.s,
            v = hsv.v;
          var ret = [];
          var modification = 1 / results;
          while (results--) {
            ret.push(tinycolor({
              h: h,
              s: s,
              v: v
            }));
            v = (v + modification) % 1;
          }
          return ret;
        }

        // Utility Functions
        // ---------------------

        tinycolor.mix = function (color1, color2, amount) {
          amount = amount === 0 ? 0 : amount || 50;
          var rgb1 = tinycolor(color1).toRgb();
          var rgb2 = tinycolor(color2).toRgb();
          var p = amount / 100;
          var rgba = {
            r: (rgb2.r - rgb1.r) * p + rgb1.r,
            g: (rgb2.g - rgb1.g) * p + rgb1.g,
            b: (rgb2.b - rgb1.b) * p + rgb1.b,
            a: (rgb2.a - rgb1.a) * p + rgb1.a
          };
          return tinycolor(rgba);
        };

        // Readability Functions
        // ---------------------
        // <http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef (WCAG Version 2)

        // `contrast`
        // Analyze the 2 colors and returns the color contrast defined by (WCAG Version 2)
        tinycolor.readability = function (color1, color2) {
          var c1 = tinycolor(color1);
          var c2 = tinycolor(color2);
          return (Math.max(c1.getLuminance(), c2.getLuminance()) + 0.05) / (Math.min(c1.getLuminance(), c2.getLuminance()) + 0.05);
        };

        // `isReadable`
        // Ensure that foreground and background color combinations meet WCAG2 guidelines.
        // The third argument is an optional Object.
        //      the 'level' property states 'AA' or 'AAA' - if missing or invalid, it defaults to 'AA';
        //      the 'size' property states 'large' or 'small' - if missing or invalid, it defaults to 'small'.
        // If the entire object is absent, isReadable defaults to {level:"AA",size:"small"}.

        // *Example*
        //    tinycolor.isReadable("#000", "#111") => false
        //    tinycolor.isReadable("#000", "#111",{level:"AA",size:"large"}) => false
        tinycolor.isReadable = function (color1, color2, wcag2) {
          var readability = tinycolor.readability(color1, color2);
          var wcag2Parms, out;
          out = false;
          wcag2Parms = validateWCAG2Parms(wcag2);
          switch (wcag2Parms.level + wcag2Parms.size) {
            case "AAsmall":
            case "AAAlarge":
              out = readability >= 4.5;
              break;
            case "AAlarge":
              out = readability >= 3;
              break;
            case "AAAsmall":
              out = readability >= 7;
              break;
          }
          return out;
        };

        // `mostReadable`
        // Given a base color and a list of possible foreground or background
        // colors for that base, returns the most readable color.
        // Optionally returns Black or White if the most readable color is unreadable.
        // *Example*
        //    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:false}).toHexString(); // "#112255"
        //    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:true}).toHexString();  // "#ffffff"
        //    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"large"}).toHexString(); // "#faf3f3"
        //    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"small"}).toHexString(); // "#ffffff"
        tinycolor.mostReadable = function (baseColor, colorList, args) {
          var bestColor = null;
          var bestScore = 0;
          var readability;
          var includeFallbackColors, level, size;
          args = args || {};
          includeFallbackColors = args.includeFallbackColors;
          level = args.level;
          size = args.size;
          for (var i = 0; i < colorList.length; i++) {
            readability = tinycolor.readability(baseColor, colorList[i]);
            if (readability > bestScore) {
              bestScore = readability;
              bestColor = tinycolor(colorList[i]);
            }
          }
          if (tinycolor.isReadable(baseColor, bestColor, {
            level: level,
            size: size
          }) || !includeFallbackColors) {
            return bestColor;
          } else {
            args.includeFallbackColors = false;
            return tinycolor.mostReadable(baseColor, ["#fff", "#000"], args);
          }
        };

        // Big List of Colors
        // ------------------
        // <https://www.w3.org/TR/css-color-4/#named-colors>
        var names = tinycolor.names = {
          aliceblue: "f0f8ff",
          antiquewhite: "faebd7",
          aqua: "0ff",
          aquamarine: "7fffd4",
          azure: "f0ffff",
          beige: "f5f5dc",
          bisque: "ffe4c4",
          black: "000",
          blanchedalmond: "ffebcd",
          blue: "00f",
          blueviolet: "8a2be2",
          brown: "a52a2a",
          burlywood: "deb887",
          burntsienna: "ea7e5d",
          cadetblue: "5f9ea0",
          chartreuse: "7fff00",
          chocolate: "d2691e",
          coral: "ff7f50",
          cornflowerblue: "6495ed",
          cornsilk: "fff8dc",
          crimson: "dc143c",
          cyan: "0ff",
          darkblue: "00008b",
          darkcyan: "008b8b",
          darkgoldenrod: "b8860b",
          darkgray: "a9a9a9",
          darkgreen: "006400",
          darkgrey: "a9a9a9",
          darkkhaki: "bdb76b",
          darkmagenta: "8b008b",
          darkolivegreen: "556b2f",
          darkorange: "ff8c00",
          darkorchid: "9932cc",
          darkred: "8b0000",
          darksalmon: "e9967a",
          darkseagreen: "8fbc8f",
          darkslateblue: "483d8b",
          darkslategray: "2f4f4f",
          darkslategrey: "2f4f4f",
          darkturquoise: "00ced1",
          darkviolet: "9400d3",
          deeppink: "ff1493",
          deepskyblue: "00bfff",
          dimgray: "696969",
          dimgrey: "696969",
          dodgerblue: "1e90ff",
          firebrick: "b22222",
          floralwhite: "fffaf0",
          forestgreen: "228b22",
          fuchsia: "f0f",
          gainsboro: "dcdcdc",
          ghostwhite: "f8f8ff",
          gold: "ffd700",
          goldenrod: "daa520",
          gray: "808080",
          green: "008000",
          greenyellow: "adff2f",
          grey: "808080",
          honeydew: "f0fff0",
          hotpink: "ff69b4",
          indianred: "cd5c5c",
          indigo: "4b0082",
          ivory: "fffff0",
          khaki: "f0e68c",
          lavender: "e6e6fa",
          lavenderblush: "fff0f5",
          lawngreen: "7cfc00",
          lemonchiffon: "fffacd",
          lightblue: "add8e6",
          lightcoral: "f08080",
          lightcyan: "e0ffff",
          lightgoldenrodyellow: "fafad2",
          lightgray: "d3d3d3",
          lightgreen: "90ee90",
          lightgrey: "d3d3d3",
          lightpink: "ffb6c1",
          lightsalmon: "ffa07a",
          lightseagreen: "20b2aa",
          lightskyblue: "87cefa",
          lightslategray: "789",
          lightslategrey: "789",
          lightsteelblue: "b0c4de",
          lightyellow: "ffffe0",
          lime: "0f0",
          limegreen: "32cd32",
          linen: "faf0e6",
          magenta: "f0f",
          maroon: "800000",
          mediumaquamarine: "66cdaa",
          mediumblue: "0000cd",
          mediumorchid: "ba55d3",
          mediumpurple: "9370db",
          mediumseagreen: "3cb371",
          mediumslateblue: "7b68ee",
          mediumspringgreen: "00fa9a",
          mediumturquoise: "48d1cc",
          mediumvioletred: "c71585",
          midnightblue: "191970",
          mintcream: "f5fffa",
          mistyrose: "ffe4e1",
          moccasin: "ffe4b5",
          navajowhite: "ffdead",
          navy: "000080",
          oldlace: "fdf5e6",
          olive: "808000",
          olivedrab: "6b8e23",
          orange: "ffa500",
          orangered: "ff4500",
          orchid: "da70d6",
          palegoldenrod: "eee8aa",
          palegreen: "98fb98",
          paleturquoise: "afeeee",
          palevioletred: "db7093",
          papayawhip: "ffefd5",
          peachpuff: "ffdab9",
          peru: "cd853f",
          pink: "ffc0cb",
          plum: "dda0dd",
          powderblue: "b0e0e6",
          purple: "800080",
          rebeccapurple: "663399",
          red: "f00",
          rosybrown: "bc8f8f",
          royalblue: "4169e1",
          saddlebrown: "8b4513",
          salmon: "fa8072",
          sandybrown: "f4a460",
          seagreen: "2e8b57",
          seashell: "fff5ee",
          sienna: "a0522d",
          silver: "c0c0c0",
          skyblue: "87ceeb",
          slateblue: "6a5acd",
          slategray: "708090",
          slategrey: "708090",
          snow: "fffafa",
          springgreen: "00ff7f",
          steelblue: "4682b4",
          tan: "d2b48c",
          teal: "008080",
          thistle: "d8bfd8",
          tomato: "ff6347",
          turquoise: "40e0d0",
          violet: "ee82ee",
          wheat: "f5deb3",
          white: "fff",
          whitesmoke: "f5f5f5",
          yellow: "ff0",
          yellowgreen: "9acd32"
        };

        // Make it easy to access colors via `hexNames[hex]`
        var hexNames = tinycolor.hexNames = flip$2(names);

        // Utilities
        // ---------

        // `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`
        function flip$2(o) {
          var flipped = {};
          for (var i in o) {
            if (o.hasOwnProperty(i)) {
              flipped[o[i]] = i;
            }
          }
          return flipped;
        }

        // Return a valid alpha value [0,1] with all invalid values being set to 1
        function boundAlpha(a) {
          a = parseFloat(a);
          if (isNaN(a) || a < 0 || a > 1) {
            a = 1;
          }
          return a;
        }

        // Take input from [0, n] and return it as [0, 1]
        function bound01(n, max) {
          if (isOnePointZero(n)) n = "100%";
          var processPercent = isPercentage(n);
          n = Math.min(max, Math.max(0, parseFloat(n)));

          // Automatically convert percentage into number
          if (processPercent) {
            n = parseInt(n * max, 10) / 100;
          }

          // Handle floating point rounding errors
          if (Math.abs(n - max) < 0.000001) {
            return 1;
          }

          // Convert into [0, 1] range if it isn't already
          return n % max / parseFloat(max);
        }

        // Force a number between 0 and 1
        function clamp01(val) {
          return Math.min(1, Math.max(0, val));
        }

        // Parse a base-16 hex value into a base-10 integer
        function parseIntFromHex(val) {
          return parseInt(val, 16);
        }

        // Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
        // <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
        function isOnePointZero(n) {
          return typeof n == "string" && n.indexOf(".") != -1 && parseFloat(n) === 1;
        }

        // Check to see if string passed in is a percentage
        function isPercentage(n) {
          return typeof n === "string" && n.indexOf("%") != -1;
        }

        // Force a hex value to have 2 characters
        function pad2(c) {
          return c.length == 1 ? "0" + c : "" + c;
        }

        // Replace a decimal with it's percentage value
        function convertToPercentage(n) {
          if (n <= 1) {
            n = n * 100 + "%";
          }
          return n;
        }

        // Converts a decimal to a hex value
        function convertDecimalToHex(d) {
          return Math.round(parseFloat(d) * 255).toString(16);
        }
        // Converts a hex value to a decimal
        function convertHexToDecimal(h) {
          return parseIntFromHex(h) / 255;
        }
        var matchers = function () {
          // <http://www.w3.org/TR/css3-values/#integers>
          var CSS_INTEGER = "[-\\+]?\\d+%?";

          // <http://www.w3.org/TR/css3-values/#number-value>
          var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";

          // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
          var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";

          // Actual matching.
          // Parentheses and commas are optional, but not required.
          // Whitespace can take the place of commas or opening paren
          var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
          var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
          return {
            CSS_UNIT: new RegExp(CSS_UNIT),
            rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
            rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
            hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
            hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
            hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
            hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
            hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
            hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
          };
        }();

        // `isValidCSSUnit`
        // Take in a single string / number and check to see if it looks like a CSS unit
        // (see `matchers` above for definition).
        function isValidCSSUnit(color) {
          return !!matchers.CSS_UNIT.exec(color);
        }

        // `stringInputToObject`
        // Permissive string parsing.  Take in a number of formats, and output an object
        // based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
        function stringInputToObject(color) {
          color = color.replace(trimLeft, "").replace(trimRight, "").toLowerCase();
          var named = false;
          if (names[color]) {
            color = names[color];
            named = true;
          } else if (color == "transparent") {
            return {
              r: 0,
              g: 0,
              b: 0,
              a: 0,
              format: "name"
            };
          }

          // Try to match string input using regular expressions.
          // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
          // Just return an object and let the conversion functions handle that.
          // This way the result will be the same whether the tinycolor is initialized with string or object.
          var match;
          if (match = matchers.rgb.exec(color)) {
            return {
              r: match[1],
              g: match[2],
              b: match[3]
            };
          }
          if (match = matchers.rgba.exec(color)) {
            return {
              r: match[1],
              g: match[2],
              b: match[3],
              a: match[4]
            };
          }
          if (match = matchers.hsl.exec(color)) {
            return {
              h: match[1],
              s: match[2],
              l: match[3]
            };
          }
          if (match = matchers.hsla.exec(color)) {
            return {
              h: match[1],
              s: match[2],
              l: match[3],
              a: match[4]
            };
          }
          if (match = matchers.hsv.exec(color)) {
            return {
              h: match[1],
              s: match[2],
              v: match[3]
            };
          }
          if (match = matchers.hsva.exec(color)) {
            return {
              h: match[1],
              s: match[2],
              v: match[3],
              a: match[4]
            };
          }
          if (match = matchers.hex8.exec(color)) {
            return {
              r: parseIntFromHex(match[1]),
              g: parseIntFromHex(match[2]),
              b: parseIntFromHex(match[3]),
              a: convertHexToDecimal(match[4]),
              format: named ? "name" : "hex8"
            };
          }
          if (match = matchers.hex6.exec(color)) {
            return {
              r: parseIntFromHex(match[1]),
              g: parseIntFromHex(match[2]),
              b: parseIntFromHex(match[3]),
              format: named ? "name" : "hex"
            };
          }
          if (match = matchers.hex4.exec(color)) {
            return {
              r: parseIntFromHex(match[1] + "" + match[1]),
              g: parseIntFromHex(match[2] + "" + match[2]),
              b: parseIntFromHex(match[3] + "" + match[3]),
              a: convertHexToDecimal(match[4] + "" + match[4]),
              format: named ? "name" : "hex8"
            };
          }
          if (match = matchers.hex3.exec(color)) {
            return {
              r: parseIntFromHex(match[1] + "" + match[1]),
              g: parseIntFromHex(match[2] + "" + match[2]),
              b: parseIntFromHex(match[3] + "" + match[3]),
              format: named ? "name" : "hex"
            };
          }
          return false;
        }
        function validateWCAG2Parms(parms) {
          // return valid WCAG2 parms for isReadable.
          // If input parms are invalid, return {"level":"AA", "size":"small"}
          var level, size;
          parms = parms || {
            level: "AA",
            size: "small"
          };
          level = (parms.level || "AA").toUpperCase();
          size = (parms.size || "small").toLowerCase();
          if (level !== "AA" && level !== "AAA") {
            level = "AA";
          }
          if (size !== "small" && size !== "large") {
            size = "small";
          }
          return {
            level: level,
            size: size
          };
        }

        // Copyright (c) 2014 Rafael Caricio. All rights reserved.
        // Use of this source code is governed by a BSD-style license that can be
        // found in the LICENSE file.

        var GradientParser = GradientParser || {};
        GradientParser.stringify = function () {
          var visitor = {
            'visit_linear-gradient': function visit_linearGradient(node) {
              return visitor.visit_gradient(node);
            },
            'visit_repeating-linear-gradient': function visit_repeatingLinearGradient(node) {
              return visitor.visit_gradient(node);
            },
            'visit_radial-gradient': function visit_radialGradient(node) {
              return visitor.visit_gradient(node);
            },
            'visit_repeating-radial-gradient': function visit_repeatingRadialGradient(node) {
              return visitor.visit_gradient(node);
            },
            'visit_gradient': function visit_gradient(node) {
              var orientation = visitor.visit(node.orientation);
              if (orientation) {
                orientation += ', ';
              }
              return node.type + '(' + orientation + visitor.visit(node.colorStops) + ')';
            },
            'visit_shape': function visit_shape(node) {
              var result = node.value,
                at = visitor.visit(node.at),
                style = visitor.visit(node.style);
              if (style) {
                result += ' ' + style;
              }
              if (at) {
                result += ' at ' + at;
              }
              return result;
            },
            'visit_default-radial': function visit_defaultRadial(node) {
              var result = '',
                at = visitor.visit(node.at);
              if (at) {
                result += at;
              }
              return result;
            },
            'visit_extent-keyword': function visit_extentKeyword(node) {
              var result = node.value,
                at = visitor.visit(node.at);
              if (at) {
                result += ' at ' + at;
              }
              return result;
            },
            'visit_position-keyword': function visit_positionKeyword(node) {
              return node.value;
            },
            'visit_position': function visit_position(node) {
              return visitor.visit(node.value.x) + ' ' + visitor.visit(node.value.y);
            },
            'visit_%': function visit_(node) {
              return node.value + '%';
            },
            'visit_em': function visit_em(node) {
              return node.value + 'em';
            },
            'visit_px': function visit_px(node) {
              return node.value + 'px';
            },
            'visit_literal': function visit_literal(node) {
              return visitor.visit_color(node.value, node);
            },
            'visit_hex': function visit_hex(node) {
              return visitor.visit_color('#' + node.value, node);
            },
            'visit_rgb': function visit_rgb(node) {
              return visitor.visit_color('rgb(' + node.value.join(', ') + ')', node);
            },
            'visit_rgba': function visit_rgba(node) {
              return visitor.visit_color('rgba(' + node.value.join(', ') + ')', node);
            },
            'visit_color': function visit_color(resultColor, node) {
              var result = resultColor,
                length = visitor.visit(node.length);
              if (length) {
                result += ' ' + length;
              }
              return result;
            },
            'visit_angular': function visit_angular(node) {
              return node.value + 'deg';
            },
            'visit_directional': function visit_directional(node) {
              return 'to ' + node.value;
            },
            'visit_array': function visit_array(elements) {
              var result = '',
                size = elements.length;
              elements.forEach(function (element, i) {
                result += visitor.visit(element);
                if (i < size - 1) {
                  result += ', ';
                }
              });
              return result;
            },
            'visit': function visit(element) {
              if (!element) {
                return '';
              }
              var result = '';
              if (element instanceof Array) {
                return visitor.visit_array(element, result);
              } else if (element.type) {
                var nodeVisitor = visitor['visit_' + element.type];
                if (nodeVisitor) {
                  return nodeVisitor(element);
                } else {
                  throw Error('Missing visitor visit_' + element.type);
                }
              } else {
                throw Error('Invalid node.');
              }
            }
          };
          return function (root) {
            return visitor.visit(root);
          };
        }();

        // Copyright (c) 2014 Rafael Caricio. All rights reserved.
        // Use of this source code is governed by a BSD-style license that can be
        // found in the LICENSE file.

        var GradientParser = GradientParser || {};
        GradientParser.parse = function () {
          var tokens = {
            linearGradient: /^(\-(webkit|o|ms|moz)\-)?(linear\-gradient)/i,
            repeatingLinearGradient: /^(\-(webkit|o|ms|moz)\-)?(repeating\-linear\-gradient)/i,
            radialGradient: /^(\-(webkit|o|ms|moz)\-)?(radial\-gradient)/i,
            repeatingRadialGradient: /^(\-(webkit|o|ms|moz)\-)?(repeating\-radial\-gradient)/i,
            sideOrCorner: /^to (left (top|bottom)|right (top|bottom)|left|right|top|bottom)/i,
            extentKeywords: /^(closest\-side|closest\-corner|farthest\-side|farthest\-corner|contain|cover)/,
            positionKeywords: /^(left|center|right|top|bottom)/i,
            pixelValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))px/,
            percentageValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))\%/,
            emValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))em/,
            angleValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))deg/,
            startCall: /^\(/,
            endCall: /^\)/,
            comma: /^,/,
            hexColor: /^\#([0-9a-fA-F]+)/,
            literalColor: /^([a-zA-Z]+)/,
            rgbColor: /^rgb/i,
            rgbaColor: /^rgba/i,
            number: /^(([0-9]*\.[0-9]+)|([0-9]+\.?))/
          };
          var input = '';
          function error(msg) {
            var err = new Error(input + ': ' + msg);
            err.source = input;
            throw err;
          }
          function getAST() {
            var ast = matchListDefinitions();
            if (input.length > 0) {
              error('Invalid input not EOF');
            }
            return ast;
          }
          function matchListDefinitions() {
            return matchListing(matchDefinition);
          }
          function matchDefinition() {
            return matchGradient('linear-gradient', tokens.linearGradient, matchLinearOrientation) || matchGradient('repeating-linear-gradient', tokens.repeatingLinearGradient, matchLinearOrientation) || matchGradient('radial-gradient', tokens.radialGradient, matchListRadialOrientations) || matchGradient('repeating-radial-gradient', tokens.repeatingRadialGradient, matchListRadialOrientations);
          }
          function matchGradient(gradientType, pattern, orientationMatcher) {
            return matchCall(pattern, function (captures) {
              var orientation = orientationMatcher();
              if (orientation) {
                if (!scan(tokens.comma)) {
                  error('Missing comma before color stops');
                }
              }
              return {
                type: gradientType,
                orientation: orientation,
                colorStops: matchListing(matchColorStop)
              };
            });
          }
          function matchCall(pattern, callback) {
            var captures = scan(pattern);
            if (captures) {
              if (!scan(tokens.startCall)) {
                error('Missing (');
              }
              var result = callback(captures);
              if (!scan(tokens.endCall)) {
                error('Missing )');
              }
              return result;
            }
          }
          function matchLinearOrientation() {
            return matchSideOrCorner() || matchAngle();
          }
          function matchSideOrCorner() {
            return match('directional', tokens.sideOrCorner, 1);
          }
          function matchAngle() {
            return match('angular', tokens.angleValue, 1);
          }
          function matchListRadialOrientations() {
            var radialOrientations,
              radialOrientation = matchRadialOrientation(),
              lookaheadCache;
            if (radialOrientation) {
              radialOrientations = [];
              radialOrientations.push(radialOrientation);
              lookaheadCache = input;
              if (scan(tokens.comma)) {
                radialOrientation = matchRadialOrientation();
                if (radialOrientation) {
                  radialOrientations.push(radialOrientation);
                } else {
                  input = lookaheadCache;
                }
              }
            }
            return radialOrientations;
          }
          function matchRadialOrientation() {
            var radialType = matchCircle() || matchEllipse();
            if (radialType) {
              radialType.at = matchAtPosition();
            } else {
              var extent = matchExtentKeyword();
              if (extent) {
                radialType = extent;
                var positionAt = matchAtPosition();
                if (positionAt) {
                  radialType.at = positionAt;
                }
              } else {
                var defaultPosition = matchPositioning();
                if (defaultPosition) {
                  radialType = {
                    type: 'default-radial',
                    at: defaultPosition
                  };
                }
              }
            }
            return radialType;
          }
          function matchCircle() {
            var circle = match('shape', /^(circle)/i, 0);
            if (circle) {
              circle.style = matchLength() || matchExtentKeyword();
            }
            return circle;
          }
          function matchEllipse() {
            var ellipse = match('shape', /^(ellipse)/i, 0);
            if (ellipse) {
              ellipse.style = matchDistance() || matchExtentKeyword();
            }
            return ellipse;
          }
          function matchExtentKeyword() {
            return match('extent-keyword', tokens.extentKeywords, 1);
          }
          function matchAtPosition() {
            if (match('position', /^at/, 0)) {
              var positioning = matchPositioning();
              if (!positioning) {
                error('Missing positioning value');
              }
              return positioning;
            }
          }
          function matchPositioning() {
            var location = matchCoordinates();
            if (location.x || location.y) {
              return {
                type: 'position',
                value: location
              };
            }
          }
          function matchCoordinates() {
            return {
              x: matchDistance(),
              y: matchDistance()
            };
          }
          function matchListing(matcher) {
            var captures = matcher(),
              result = [];
            if (captures) {
              result.push(captures);
              while (scan(tokens.comma)) {
                captures = matcher();
                if (captures) {
                  result.push(captures);
                } else {
                  error('One extra comma');
                }
              }
            }
            return result;
          }
          function matchColorStop() {
            var color = matchColor();
            if (!color) {
              error('Expected color definition');
            }
            color.length = matchDistance();
            return color;
          }
          function matchColor() {
            return matchHexColor() || matchRGBAColor() || matchRGBColor() || matchLiteralColor();
          }
          function matchLiteralColor() {
            return match('literal', tokens.literalColor, 0);
          }
          function matchHexColor() {
            return match('hex', tokens.hexColor, 1);
          }
          function matchRGBColor() {
            return matchCall(tokens.rgbColor, function () {
              return {
                type: 'rgb',
                value: matchListing(matchNumber)
              };
            });
          }
          function matchRGBAColor() {
            return matchCall(tokens.rgbaColor, function () {
              return {
                type: 'rgba',
                value: matchListing(matchNumber)
              };
            });
          }
          function matchNumber() {
            return scan(tokens.number)[1];
          }
          function matchDistance() {
            return match('%', tokens.percentageValue, 1) || matchPositionKeyword() || matchLength();
          }
          function matchPositionKeyword() {
            return match('position-keyword', tokens.positionKeywords, 1);
          }
          function matchLength() {
            return match('px', tokens.pixelValue, 1) || match('em', tokens.emValue, 1);
          }
          function match(type, pattern, captureIndex) {
            var captures = scan(pattern);
            if (captures) {
              return {
                type: type,
                value: captures[captureIndex]
              };
            }
          }
          function scan(regexp) {
            var captures, blankCaptures;
            blankCaptures = /^[\n\r\t\s]+/.exec(input);
            if (blankCaptures) {
              consume(blankCaptures[0].length);
            }
            captures = regexp.exec(input);
            if (captures) {
              consume(captures[0].length);
            }
            return captures;
          }
          function consume(size) {
            input = input.substr(size);
          }
          return function (code) {
            input = code.toString();
            return getAST();
          };
        }();
        var parse = GradientParser.parse;
        var stringify = GradientParser.stringify;
        var top = 'top';
        var bottom = 'bottom';
        var right = 'right';
        var left = 'left';
        var auto = 'auto';
        var basePlacements = [top, bottom, right, left];
        var start = 'start';
        var end = 'end';
        var clippingParents = 'clippingParents';
        var viewport = 'viewport';
        var popper = 'popper';
        var reference = 'reference';
        var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
          return acc.concat([placement + "-" + start, placement + "-" + end]);
        }, []);
        var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
          return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
        }, []); // modifiers that need to read the DOM

        var beforeRead = 'beforeRead';
        var read = 'read';
        var afterRead = 'afterRead'; // pure-logic modifiers

        var beforeMain = 'beforeMain';
        var main = 'main';
        var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

        var beforeWrite = 'beforeWrite';
        var write = 'write';
        var afterWrite = 'afterWrite';
        var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
        function getNodeName(element) {
          return element ? (element.nodeName || '').toLowerCase() : null;
        }
        function getWindow(node) {
          if (node == null) {
            return window;
          }
          if (node.toString() !== '[object Window]') {
            var ownerDocument = node.ownerDocument;
            return ownerDocument ? ownerDocument.defaultView || window : window;
          }
          return node;
        }
        function isElement(node) {
          var OwnElement = getWindow(node).Element;
          return node instanceof OwnElement || node instanceof Element;
        }
        function isHTMLElement(node) {
          var OwnElement = getWindow(node).HTMLElement;
          return node instanceof OwnElement || node instanceof HTMLElement;
        }
        function isShadowRoot(node) {
          // IE 11 has no ShadowRoot
          if (typeof ShadowRoot === 'undefined') {
            return false;
          }
          var OwnElement = getWindow(node).ShadowRoot;
          return node instanceof OwnElement || node instanceof ShadowRoot;
        }

        // and applies them to the HTMLElements such as popper and arrow

        function applyStyles(_ref) {
          var state = _ref.state;
          Object.keys(state.elements).forEach(function (name) {
            var style = state.styles[name] || {};
            var attributes = state.attributes[name] || {};
            var element = state.elements[name]; // arrow is optional + virtual elements

            if (!isHTMLElement(element) || !getNodeName(element)) {
              return;
            } // Flow doesn't support to extend this property, but it's the most
            // effective way to apply styles to an HTMLElement
            // $FlowFixMe[cannot-write]

            Object.assign(element.style, style);
            Object.keys(attributes).forEach(function (name) {
              var value = attributes[name];
              if (value === false) {
                element.removeAttribute(name);
              } else {
                element.setAttribute(name, value === true ? '' : value);
              }
            });
          });
        }
        function effect$2(_ref2) {
          var state = _ref2.state;
          var initialStyles = {
            popper: {
              position: state.options.strategy,
              left: '0',
              top: '0',
              margin: '0'
            },
            arrow: {
              position: 'absolute'
            },
            reference: {}
          };
          Object.assign(state.elements.popper.style, initialStyles.popper);
          state.styles = initialStyles;
          if (state.elements.arrow) {
            Object.assign(state.elements.arrow.style, initialStyles.arrow);
          }
          return function () {
            Object.keys(state.elements).forEach(function (name) {
              var element = state.elements[name];
              var attributes = state.attributes[name] || {};
              var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

              var style = styleProperties.reduce(function (style, property) {
                style[property] = '';
                return style;
              }, {}); // arrow is optional + virtual elements

              if (!isHTMLElement(element) || !getNodeName(element)) {
                return;
              }
              Object.assign(element.style, style);
              Object.keys(attributes).forEach(function (attribute) {
                element.removeAttribute(attribute);
              });
            });
          };
        } // eslint-disable-next-line import/no-unused-modules

        var applyStyles$1 = {
          name: 'applyStyles',
          enabled: true,
          phase: 'write',
          fn: applyStyles,
          effect: effect$2,
          requires: ['computeStyles']
        };
        function getBasePlacement(placement) {
          return placement.split('-')[0];
        }
        var max = Math.max;
        var min = Math.min;
        var round = Math.round;
        function getUAString() {
          var uaData = navigator.userAgentData;
          if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
            return uaData.brands.map(function (item) {
              return item.brand + "/" + item.version;
            }).join(' ');
          }
          return navigator.userAgent;
        }
        function isLayoutViewport() {
          return !/^((?!chrome|android).)*safari/i.test(getUAString());
        }
        function getBoundingClientRect(element, includeScale, isFixedStrategy) {
          if (includeScale === void 0) {
            includeScale = false;
          }
          if (isFixedStrategy === void 0) {
            isFixedStrategy = false;
          }
          var clientRect = element.getBoundingClientRect();
          var scaleX = 1;
          var scaleY = 1;
          if (includeScale && isHTMLElement(element)) {
            scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
            scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
          }
          var _ref = isElement(element) ? getWindow(element) : window,
            visualViewport = _ref.visualViewport;
          var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
          var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
          var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
          var width = clientRect.width / scaleX;
          var height = clientRect.height / scaleY;
          return {
            width: width,
            height: height,
            top: y,
            right: x + width,
            bottom: y + height,
            left: x,
            x: x,
            y: y
          };
        }

        // means it doesn't take into account transforms.

        function getLayoutRect(element) {
          var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
          // Fixes https://github.com/popperjs/popper-core/issues/1223

          var width = element.offsetWidth;
          var height = element.offsetHeight;
          if (Math.abs(clientRect.width - width) <= 1) {
            width = clientRect.width;
          }
          if (Math.abs(clientRect.height - height) <= 1) {
            height = clientRect.height;
          }
          return {
            x: element.offsetLeft,
            y: element.offsetTop,
            width: width,
            height: height
          };
        }
        function contains(parent, child) {
          var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

          if (parent.contains(child)) {
            return true;
          } // then fallback to custom implementation with Shadow DOM support
          else if (rootNode && isShadowRoot(rootNode)) {
            var next = child;
            do {
              if (next && parent.isSameNode(next)) {
                return true;
              } // $FlowFixMe[prop-missing]: need a better way to handle this...

              next = next.parentNode || next.host;
            } while (next);
          } // Give up, the result is false

          return false;
        }
        function getComputedStyle(element) {
          return getWindow(element).getComputedStyle(element);
        }
        function isTableElement(element) {
          return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
        }
        function getDocumentElement(element) {
          // $FlowFixMe[incompatible-return]: assume body is always available
          return ((isElement(element) ? element.ownerDocument :
          // $FlowFixMe[prop-missing]
          element.document) || window.document).documentElement;
        }
        function getParentNode(element) {
          if (getNodeName(element) === 'html') {
            return element;
          }
          return (
            // this is a quicker (but less type safe) way to save quite some bytes from the bundle
            // $FlowFixMe[incompatible-return]
            // $FlowFixMe[prop-missing]
            element.assignedSlot ||
            // step into the shadow DOM of the parent of a slotted node
            element.parentNode || (
            // DOM Element detected
            isShadowRoot(element) ? element.host : null) ||
            // ShadowRoot detected
            // $FlowFixMe[incompatible-call]: HTMLElement is a Node
            getDocumentElement(element) // fallback
          );
        }
        function getTrueOffsetParent(element) {
          if (!isHTMLElement(element) ||
          // https://github.com/popperjs/popper-core/issues/837
          getComputedStyle(element).position === 'fixed') {
            return null;
          }
          return element.offsetParent;
        } // `.offsetParent` reports `null` for fixed elements, while absolute elements
        // return the containing block

        function getContainingBlock(element) {
          var isFirefox = /firefox/i.test(getUAString());
          var isIE = /Trident/i.test(getUAString());
          if (isIE && isHTMLElement(element)) {
            // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
            var elementCss = getComputedStyle(element);
            if (elementCss.position === 'fixed') {
              return null;
            }
          }
          var currentNode = getParentNode(element);
          if (isShadowRoot(currentNode)) {
            currentNode = currentNode.host;
          }
          while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
            var css = getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
            // create a containing block.
            // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

            if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
              return currentNode;
            } else {
              currentNode = currentNode.parentNode;
            }
          }
          return null;
        } // Gets the closest ancestor positioned element. Handles some edge cases,
        // such as table ancestors and cross browser bugs.

        function getOffsetParent(element) {
          var window = getWindow(element);
          var offsetParent = getTrueOffsetParent(element);
          while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
            offsetParent = getTrueOffsetParent(offsetParent);
          }
          if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static')) {
            return window;
          }
          return offsetParent || getContainingBlock(element) || window;
        }
        function getMainAxisFromPlacement(placement) {
          return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
        }
        function within(min$1, value, max$1) {
          return max(min$1, min(value, max$1));
        }
        function withinMaxClamp(min, value, max) {
          var v = within(min, value, max);
          return v > max ? max : v;
        }
        function getFreshSideObject() {
          return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          };
        }
        function mergePaddingObject(paddingObject) {
          return Object.assign({}, getFreshSideObject(), paddingObject);
        }
        function expandToHashMap(value, keys) {
          return keys.reduce(function (hashMap, key) {
            hashMap[key] = value;
            return hashMap;
          }, {});
        }
        var toPaddingObject = function toPaddingObject(padding, state) {
          padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
            placement: state.placement
          })) : padding;
          return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
        };
        function arrow(_ref) {
          var _state$modifiersData$;
          var state = _ref.state,
            name = _ref.name,
            options = _ref.options;
          var arrowElement = state.elements.arrow;
          var popperOffsets = state.modifiersData.popperOffsets;
          var basePlacement = getBasePlacement(state.placement);
          var axis = getMainAxisFromPlacement(basePlacement);
          var isVertical = [left, right].indexOf(basePlacement) >= 0;
          var len = isVertical ? 'height' : 'width';
          if (!arrowElement || !popperOffsets) {
            return;
          }
          var paddingObject = toPaddingObject(options.padding, state);
          var arrowRect = getLayoutRect(arrowElement);
          var minProp = axis === 'y' ? top : left;
          var maxProp = axis === 'y' ? bottom : right;
          var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
          var startDiff = popperOffsets[axis] - state.rects.reference[axis];
          var arrowOffsetParent = getOffsetParent(arrowElement);
          var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
          var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
          // outside of the popper bounds

          var min = paddingObject[minProp];
          var max = clientSize - arrowRect[len] - paddingObject[maxProp];
          var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
          var offset = within(min, center, max); // Prevents breaking syntax highlighting...

          var axisProp = axis;
          state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
        }
        function effect$1(_ref2) {
          var state = _ref2.state,
            options = _ref2.options;
          var _options$element = options.element,
            arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;
          if (arrowElement == null) {
            return;
          } // CSS selector

          if (typeof arrowElement === 'string') {
            arrowElement = state.elements.popper.querySelector(arrowElement);
            if (!arrowElement) {
              return;
            }
          }
          if (!contains(state.elements.popper, arrowElement)) {
            return;
          }
          state.elements.arrow = arrowElement;
        } // eslint-disable-next-line import/no-unused-modules

        var arrow$1 = {
          name: 'arrow',
          enabled: true,
          phase: 'main',
          fn: arrow,
          effect: effect$1,
          requires: ['popperOffsets'],
          requiresIfExists: ['preventOverflow']
        };
        function getVariation(placement) {
          return placement.split('-')[1];
        }
        var unsetSides = {
          top: 'auto',
          right: 'auto',
          bottom: 'auto',
          left: 'auto'
        }; // Round the offsets to the nearest suitable subpixel based on the DPR.
        // Zooming can change the DPR, but it seems to report a value that will
        // cleanly divide the values into the appropriate subpixels.

        function roundOffsetsByDPR(_ref, win) {
          var x = _ref.x,
            y = _ref.y;
          var dpr = win.devicePixelRatio || 1;
          return {
            x: round(x * dpr) / dpr || 0,
            y: round(y * dpr) / dpr || 0
          };
        }
        function mapToStyles(_ref2) {
          var _Object$assign2;
          var popper = _ref2.popper,
            popperRect = _ref2.popperRect,
            placement = _ref2.placement,
            variation = _ref2.variation,
            offsets = _ref2.offsets,
            position = _ref2.position,
            gpuAcceleration = _ref2.gpuAcceleration,
            adaptive = _ref2.adaptive,
            roundOffsets = _ref2.roundOffsets,
            isFixed = _ref2.isFixed;
          var _offsets$x = offsets.x,
            x = _offsets$x === void 0 ? 0 : _offsets$x,
            _offsets$y = offsets.y,
            y = _offsets$y === void 0 ? 0 : _offsets$y;
          var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
            x: x,
            y: y
          }) : {
            x: x,
            y: y
          };
          x = _ref3.x;
          y = _ref3.y;
          var hasX = offsets.hasOwnProperty('x');
          var hasY = offsets.hasOwnProperty('y');
          var sideX = left;
          var sideY = top;
          var win = window;
          if (adaptive) {
            var offsetParent = getOffsetParent(popper);
            var heightProp = 'clientHeight';
            var widthProp = 'clientWidth';
            if (offsetParent === getWindow(popper)) {
              offsetParent = getDocumentElement(popper);
              if (getComputedStyle(offsetParent).position !== 'static' && position === 'absolute') {
                heightProp = 'scrollHeight';
                widthProp = 'scrollWidth';
              }
            } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it

            offsetParent = offsetParent;
            if (placement === top || (placement === left || placement === right) && variation === end) {
              sideY = bottom;
              var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height :
              // $FlowFixMe[prop-missing]
              offsetParent[heightProp];
              y -= offsetY - popperRect.height;
              y *= gpuAcceleration ? 1 : -1;
            }
            if (placement === left || (placement === top || placement === bottom) && variation === end) {
              sideX = right;
              var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width :
              // $FlowFixMe[prop-missing]
              offsetParent[widthProp];
              x -= offsetX - popperRect.width;
              x *= gpuAcceleration ? 1 : -1;
            }
          }
          var commonStyles = Object.assign({
            position: position
          }, adaptive && unsetSides);
          var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
            x: x,
            y: y
          }, getWindow(popper)) : {
            x: x,
            y: y
          };
          x = _ref4.x;
          y = _ref4.y;
          if (gpuAcceleration) {
            var _Object$assign;
            return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
          }
          return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
        }
        function computeStyles(_ref5) {
          var state = _ref5.state,
            options = _ref5.options;
          var _options$gpuAccelerat = options.gpuAcceleration,
            gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
            _options$adaptive = options.adaptive,
            adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
            _options$roundOffsets = options.roundOffsets,
            roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
          var commonStyles = {
            placement: getBasePlacement(state.placement),
            variation: getVariation(state.placement),
            popper: state.elements.popper,
            popperRect: state.rects.popper,
            gpuAcceleration: gpuAcceleration,
            isFixed: state.options.strategy === 'fixed'
          };
          if (state.modifiersData.popperOffsets != null) {
            state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
              offsets: state.modifiersData.popperOffsets,
              position: state.options.strategy,
              adaptive: adaptive,
              roundOffsets: roundOffsets
            })));
          }
          if (state.modifiersData.arrow != null) {
            state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
              offsets: state.modifiersData.arrow,
              position: 'absolute',
              adaptive: false,
              roundOffsets: roundOffsets
            })));
          }
          state.attributes.popper = Object.assign({}, state.attributes.popper, {
            'data-popper-placement': state.placement
          });
        } // eslint-disable-next-line import/no-unused-modules

        var computeStyles$1 = {
          name: 'computeStyles',
          enabled: true,
          phase: 'beforeWrite',
          fn: computeStyles,
          data: {}
        };
        var passive = {
          passive: true
        };
        function effect(_ref) {
          var state = _ref.state,
            instance = _ref.instance,
            options = _ref.options;
          var _options$scroll = options.scroll,
            scroll = _options$scroll === void 0 ? true : _options$scroll,
            _options$resize = options.resize,
            resize = _options$resize === void 0 ? true : _options$resize;
          var window = getWindow(state.elements.popper);
          var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
          if (scroll) {
            scrollParents.forEach(function (scrollParent) {
              scrollParent.addEventListener('scroll', instance.update, passive);
            });
          }
          if (resize) {
            window.addEventListener('resize', instance.update, passive);
          }
          return function () {
            if (scroll) {
              scrollParents.forEach(function (scrollParent) {
                scrollParent.removeEventListener('scroll', instance.update, passive);
              });
            }
            if (resize) {
              window.removeEventListener('resize', instance.update, passive);
            }
          };
        } // eslint-disable-next-line import/no-unused-modules

        var eventListeners = {
          name: 'eventListeners',
          enabled: true,
          phase: 'write',
          fn: function fn() {},
          effect: effect,
          data: {}
        };
        var hash$1 = {
          left: 'right',
          right: 'left',
          bottom: 'top',
          top: 'bottom'
        };
        function getOppositePlacement(placement) {
          return placement.replace(/left|right|bottom|top/g, function (matched) {
            return hash$1[matched];
          });
        }
        var hash = {
          start: 'end',
          end: 'start'
        };
        function getOppositeVariationPlacement(placement) {
          return placement.replace(/start|end/g, function (matched) {
            return hash[matched];
          });
        }
        function getWindowScroll(node) {
          var win = getWindow(node);
          var scrollLeft = win.pageXOffset;
          var scrollTop = win.pageYOffset;
          return {
            scrollLeft: scrollLeft,
            scrollTop: scrollTop
          };
        }
        function getWindowScrollBarX(element) {
          // If <html> has a CSS width greater than the viewport, then this will be
          // incorrect for RTL.
          // Popper 1 is broken in this case and never had a bug report so let's assume
          // it's not an issue. I don't think anyone ever specifies width on <html>
          // anyway.
          // Browsers where the left scrollbar doesn't cause an issue report `0` for
          // this (e.g. Edge 2019, IE11, Safari)
          return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
        }
        function getViewportRect(element, strategy) {
          var win = getWindow(element);
          var html = getDocumentElement(element);
          var visualViewport = win.visualViewport;
          var width = html.clientWidth;
          var height = html.clientHeight;
          var x = 0;
          var y = 0;
          if (visualViewport) {
            width = visualViewport.width;
            height = visualViewport.height;
            var layoutViewport = isLayoutViewport();
            if (layoutViewport || !layoutViewport && strategy === 'fixed') {
              x = visualViewport.offsetLeft;
              y = visualViewport.offsetTop;
            }
          }
          return {
            width: width,
            height: height,
            x: x + getWindowScrollBarX(element),
            y: y
          };
        }

        // of the `<html>` and `<body>` rect bounds if horizontally scrollable

        function getDocumentRect(element) {
          var _element$ownerDocumen;
          var html = getDocumentElement(element);
          var winScroll = getWindowScroll(element);
          var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
          var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
          var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
          var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
          var y = -winScroll.scrollTop;
          if (getComputedStyle(body || html).direction === 'rtl') {
            x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
          }
          return {
            width: width,
            height: height,
            x: x,
            y: y
          };
        }
        function isScrollParent(element) {
          // Firefox wants us to check `-x` and `-y` variations as well
          var _getComputedStyle = getComputedStyle(element),
            overflow = _getComputedStyle.overflow,
            overflowX = _getComputedStyle.overflowX,
            overflowY = _getComputedStyle.overflowY;
          return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
        }
        function getScrollParent(node) {
          if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
            // $FlowFixMe[incompatible-return]: assume body is always available
            return node.ownerDocument.body;
          }
          if (isHTMLElement(node) && isScrollParent(node)) {
            return node;
          }
          return getScrollParent(getParentNode(node));
        }

        /*
        given a DOM element, return the list of all scroll parents, up the list of ancesors
        until we get to the top window object. This list is what we attach scroll listeners
        to, because if any of these parent elements scroll, we'll need to re-calculate the
        reference element's position.
        */

        function listScrollParents(element, list) {
          var _element$ownerDocumen;
          if (list === void 0) {
            list = [];
          }
          var scrollParent = getScrollParent(element);
          var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
          var win = getWindow(scrollParent);
          var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
          var updatedList = list.concat(target);
          return isBody ? updatedList :
          // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
          updatedList.concat(listScrollParents(getParentNode(target)));
        }
        function rectToClientRect(rect) {
          return Object.assign({}, rect, {
            left: rect.x,
            top: rect.y,
            right: rect.x + rect.width,
            bottom: rect.y + rect.height
          });
        }
        function getInnerBoundingClientRect(element, strategy) {
          var rect = getBoundingClientRect(element, false, strategy === 'fixed');
          rect.top = rect.top + element.clientTop;
          rect.left = rect.left + element.clientLeft;
          rect.bottom = rect.top + element.clientHeight;
          rect.right = rect.left + element.clientWidth;
          rect.width = element.clientWidth;
          rect.height = element.clientHeight;
          rect.x = rect.left;
          rect.y = rect.top;
          return rect;
        }
        function getClientRectFromMixedType(element, clippingParent, strategy) {
          return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
        } // A "clipping parent" is an overflowable container with the characteristic of
        // clipping (or hiding) overflowing elements with a position different from
        // `initial`

        function getClippingParents(element) {
          var clippingParents = listScrollParents(getParentNode(element));
          var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
          var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
          if (!isElement(clipperElement)) {
            return [];
          } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414

          return clippingParents.filter(function (clippingParent) {
            return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
          });
        } // Gets the maximum area that the element is visible in due to any number of
        // clipping parents

        function getClippingRect(element, boundary, rootBoundary, strategy) {
          var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
          var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
          var firstClippingParent = clippingParents[0];
          var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
            var rect = getClientRectFromMixedType(element, clippingParent, strategy);
            accRect.top = max(rect.top, accRect.top);
            accRect.right = min(rect.right, accRect.right);
            accRect.bottom = min(rect.bottom, accRect.bottom);
            accRect.left = max(rect.left, accRect.left);
            return accRect;
          }, getClientRectFromMixedType(element, firstClippingParent, strategy));
          clippingRect.width = clippingRect.right - clippingRect.left;
          clippingRect.height = clippingRect.bottom - clippingRect.top;
          clippingRect.x = clippingRect.left;
          clippingRect.y = clippingRect.top;
          return clippingRect;
        }
        function computeOffsets(_ref) {
          var reference = _ref.reference,
            element = _ref.element,
            placement = _ref.placement;
          var basePlacement = placement ? getBasePlacement(placement) : null;
          var variation = placement ? getVariation(placement) : null;
          var commonX = reference.x + reference.width / 2 - element.width / 2;
          var commonY = reference.y + reference.height / 2 - element.height / 2;
          var offsets;
          switch (basePlacement) {
            case top:
              offsets = {
                x: commonX,
                y: reference.y - element.height
              };
              break;
            case bottom:
              offsets = {
                x: commonX,
                y: reference.y + reference.height
              };
              break;
            case right:
              offsets = {
                x: reference.x + reference.width,
                y: commonY
              };
              break;
            case left:
              offsets = {
                x: reference.x - element.width,
                y: commonY
              };
              break;
            default:
              offsets = {
                x: reference.x,
                y: reference.y
              };
          }
          var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
          if (mainAxis != null) {
            var len = mainAxis === 'y' ? 'height' : 'width';
            switch (variation) {
              case start:
                offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
                break;
              case end:
                offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
                break;
            }
          }
          return offsets;
        }
        function detectOverflow(state, options) {
          if (options === void 0) {
            options = {};
          }
          var _options = options,
            _options$placement = _options.placement,
            placement = _options$placement === void 0 ? state.placement : _options$placement,
            _options$strategy = _options.strategy,
            strategy = _options$strategy === void 0 ? state.strategy : _options$strategy,
            _options$boundary = _options.boundary,
            boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
            _options$rootBoundary = _options.rootBoundary,
            rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
            _options$elementConte = _options.elementContext,
            elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
            _options$altBoundary = _options.altBoundary,
            altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
            _options$padding = _options.padding,
            padding = _options$padding === void 0 ? 0 : _options$padding;
          var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
          var altContext = elementContext === popper ? reference : popper;
          var popperRect = state.rects.popper;
          var element = state.elements[altBoundary ? altContext : elementContext];
          var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
          var referenceClientRect = getBoundingClientRect(state.elements.reference);
          var popperOffsets = computeOffsets({
            reference: referenceClientRect,
            element: popperRect,
            strategy: 'absolute',
            placement: placement
          });
          var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
          var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
          // 0 or negative = within the clipping rect

          var overflowOffsets = {
            top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
            bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
            left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
            right: elementClientRect.right - clippingClientRect.right + paddingObject.right
          };
          var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

          if (elementContext === popper && offsetData) {
            var offset = offsetData[placement];
            Object.keys(overflowOffsets).forEach(function (key) {
              var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
              var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
              overflowOffsets[key] += offset[axis] * multiply;
            });
          }
          return overflowOffsets;
        }
        function computeAutoPlacement(state, options) {
          if (options === void 0) {
            options = {};
          }
          var _options = options,
            placement = _options.placement,
            boundary = _options.boundary,
            rootBoundary = _options.rootBoundary,
            padding = _options.padding,
            flipVariations = _options.flipVariations,
            _options$allowedAutoP = _options.allowedAutoPlacements,
            allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
          var variation = getVariation(placement);
          var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
            return getVariation(placement) === variation;
          }) : basePlacements;
          var allowedPlacements = placements$1.filter(function (placement) {
            return allowedAutoPlacements.indexOf(placement) >= 0;
          });
          if (allowedPlacements.length === 0) {
            allowedPlacements = placements$1;
          } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...

          var overflows = allowedPlacements.reduce(function (acc, placement) {
            acc[placement] = detectOverflow(state, {
              placement: placement,
              boundary: boundary,
              rootBoundary: rootBoundary,
              padding: padding
            })[getBasePlacement(placement)];
            return acc;
          }, {});
          return Object.keys(overflows).sort(function (a, b) {
            return overflows[a] - overflows[b];
          });
        }
        function getExpandedFallbackPlacements(placement) {
          if (getBasePlacement(placement) === auto) {
            return [];
          }
          var oppositePlacement = getOppositePlacement(placement);
          return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
        }
        function flip(_ref) {
          var state = _ref.state,
            options = _ref.options,
            name = _ref.name;
          if (state.modifiersData[name]._skip) {
            return;
          }
          var _options$mainAxis = options.mainAxis,
            checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
            _options$altAxis = options.altAxis,
            checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
            specifiedFallbackPlacements = options.fallbackPlacements,
            padding = options.padding,
            boundary = options.boundary,
            rootBoundary = options.rootBoundary,
            altBoundary = options.altBoundary,
            _options$flipVariatio = options.flipVariations,
            flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
            allowedAutoPlacements = options.allowedAutoPlacements;
          var preferredPlacement = state.options.placement;
          var basePlacement = getBasePlacement(preferredPlacement);
          var isBasePlacement = basePlacement === preferredPlacement;
          var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
          var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
            return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
              placement: placement,
              boundary: boundary,
              rootBoundary: rootBoundary,
              padding: padding,
              flipVariations: flipVariations,
              allowedAutoPlacements: allowedAutoPlacements
            }) : placement);
          }, []);
          var referenceRect = state.rects.reference;
          var popperRect = state.rects.popper;
          var checksMap = new Map();
          var makeFallbackChecks = true;
          var firstFittingPlacement = placements[0];
          for (var i = 0; i < placements.length; i++) {
            var placement = placements[i];
            var _basePlacement = getBasePlacement(placement);
            var isStartVariation = getVariation(placement) === start;
            var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
            var len = isVertical ? 'width' : 'height';
            var overflow = detectOverflow(state, {
              placement: placement,
              boundary: boundary,
              rootBoundary: rootBoundary,
              altBoundary: altBoundary,
              padding: padding
            });
            var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
            if (referenceRect[len] > popperRect[len]) {
              mainVariationSide = getOppositePlacement(mainVariationSide);
            }
            var altVariationSide = getOppositePlacement(mainVariationSide);
            var checks = [];
            if (checkMainAxis) {
              checks.push(overflow[_basePlacement] <= 0);
            }
            if (checkAltAxis) {
              checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
            }
            if (checks.every(function (check) {
              return check;
            })) {
              firstFittingPlacement = placement;
              makeFallbackChecks = false;
              break;
            }
            checksMap.set(placement, checks);
          }
          if (makeFallbackChecks) {
            // `2` may be desired in some cases – research later
            var numberOfChecks = flipVariations ? 3 : 1;
            var _loop = function _loop(_i) {
              var fittingPlacement = placements.find(function (placement) {
                var checks = checksMap.get(placement);
                if (checks) {
                  return checks.slice(0, _i).every(function (check) {
                    return check;
                  });
                }
              });
              if (fittingPlacement) {
                firstFittingPlacement = fittingPlacement;
                return "break";
              }
            };
            for (var _i = numberOfChecks; _i > 0; _i--) {
              var _ret = _loop(_i);
              if (_ret === "break") break;
            }
          }
          if (state.placement !== firstFittingPlacement) {
            state.modifiersData[name]._skip = true;
            state.placement = firstFittingPlacement;
            state.reset = true;
          }
        } // eslint-disable-next-line import/no-unused-modules

        var flip$1 = {
          name: 'flip',
          enabled: true,
          phase: 'main',
          fn: flip,
          requiresIfExists: ['offset'],
          data: {
            _skip: false
          }
        };
        function getSideOffsets(overflow, rect, preventedOffsets) {
          if (preventedOffsets === void 0) {
            preventedOffsets = {
              x: 0,
              y: 0
            };
          }
          return {
            top: overflow.top - rect.height - preventedOffsets.y,
            right: overflow.right - rect.width + preventedOffsets.x,
            bottom: overflow.bottom - rect.height + preventedOffsets.y,
            left: overflow.left - rect.width - preventedOffsets.x
          };
        }
        function isAnySideFullyClipped(overflow) {
          return [top, right, bottom, left].some(function (side) {
            return overflow[side] >= 0;
          });
        }
        function hide(_ref) {
          var state = _ref.state,
            name = _ref.name;
          var referenceRect = state.rects.reference;
          var popperRect = state.rects.popper;
          var preventedOffsets = state.modifiersData.preventOverflow;
          var referenceOverflow = detectOverflow(state, {
            elementContext: 'reference'
          });
          var popperAltOverflow = detectOverflow(state, {
            altBoundary: true
          });
          var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
          var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
          var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
          var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
          state.modifiersData[name] = {
            referenceClippingOffsets: referenceClippingOffsets,
            popperEscapeOffsets: popperEscapeOffsets,
            isReferenceHidden: isReferenceHidden,
            hasPopperEscaped: hasPopperEscaped
          };
          state.attributes.popper = Object.assign({}, state.attributes.popper, {
            'data-popper-reference-hidden': isReferenceHidden,
            'data-popper-escaped': hasPopperEscaped
          });
        } // eslint-disable-next-line import/no-unused-modules

        var hide$1 = {
          name: 'hide',
          enabled: true,
          phase: 'main',
          requiresIfExists: ['preventOverflow'],
          fn: hide
        };
        function distanceAndSkiddingToXY(placement, rects, offset) {
          var basePlacement = getBasePlacement(placement);
          var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
          var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
              placement: placement
            })) : offset,
            skidding = _ref[0],
            distance = _ref[1];
          skidding = skidding || 0;
          distance = (distance || 0) * invertDistance;
          return [left, right].indexOf(basePlacement) >= 0 ? {
            x: distance,
            y: skidding
          } : {
            x: skidding,
            y: distance
          };
        }
        function offset(_ref2) {
          var state = _ref2.state,
            options = _ref2.options,
            name = _ref2.name;
          var _options$offset = options.offset,
            offset = _options$offset === void 0 ? [0, 0] : _options$offset;
          var data = placements.reduce(function (acc, placement) {
            acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
            return acc;
          }, {});
          var _data$state$placement = data[state.placement],
            x = _data$state$placement.x,
            y = _data$state$placement.y;
          if (state.modifiersData.popperOffsets != null) {
            state.modifiersData.popperOffsets.x += x;
            state.modifiersData.popperOffsets.y += y;
          }
          state.modifiersData[name] = data;
        } // eslint-disable-next-line import/no-unused-modules

        var offset$1 = {
          name: 'offset',
          enabled: true,
          phase: 'main',
          requires: ['popperOffsets'],
          fn: offset
        };
        function popperOffsets(_ref) {
          var state = _ref.state,
            name = _ref.name;
          // Offsets are the actual position the popper needs to have to be
          // properly positioned near its reference element
          // This is the most basic placement, and will be adjusted by
          // the modifiers in the next step
          state.modifiersData[name] = computeOffsets({
            reference: state.rects.reference,
            element: state.rects.popper,
            strategy: 'absolute',
            placement: state.placement
          });
        } // eslint-disable-next-line import/no-unused-modules

        var popperOffsets$1 = {
          name: 'popperOffsets',
          enabled: true,
          phase: 'read',
          fn: popperOffsets,
          data: {}
        };
        function getAltAxis(axis) {
          return axis === 'x' ? 'y' : 'x';
        }
        function preventOverflow(_ref) {
          var state = _ref.state,
            options = _ref.options,
            name = _ref.name;
          var _options$mainAxis = options.mainAxis,
            checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
            _options$altAxis = options.altAxis,
            checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
            boundary = options.boundary,
            rootBoundary = options.rootBoundary,
            altBoundary = options.altBoundary,
            padding = options.padding,
            _options$tether = options.tether,
            tether = _options$tether === void 0 ? true : _options$tether,
            _options$tetherOffset = options.tetherOffset,
            tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
          var overflow = detectOverflow(state, {
            boundary: boundary,
            rootBoundary: rootBoundary,
            padding: padding,
            altBoundary: altBoundary
          });
          var basePlacement = getBasePlacement(state.placement);
          var variation = getVariation(state.placement);
          var isBasePlacement = !variation;
          var mainAxis = getMainAxisFromPlacement(basePlacement);
          var altAxis = getAltAxis(mainAxis);
          var popperOffsets = state.modifiersData.popperOffsets;
          var referenceRect = state.rects.reference;
          var popperRect = state.rects.popper;
          var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
            placement: state.placement
          })) : tetherOffset;
          var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
            mainAxis: tetherOffsetValue,
            altAxis: tetherOffsetValue
          } : Object.assign({
            mainAxis: 0,
            altAxis: 0
          }, tetherOffsetValue);
          var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
          var data = {
            x: 0,
            y: 0
          };
          if (!popperOffsets) {
            return;
          }
          if (checkMainAxis) {
            var _offsetModifierState$;
            var mainSide = mainAxis === 'y' ? top : left;
            var altSide = mainAxis === 'y' ? bottom : right;
            var len = mainAxis === 'y' ? 'height' : 'width';
            var offset = popperOffsets[mainAxis];
            var min$1 = offset + overflow[mainSide];
            var max$1 = offset - overflow[altSide];
            var additive = tether ? -popperRect[len] / 2 : 0;
            var minLen = variation === start ? referenceRect[len] : popperRect[len];
            var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
            // outside the reference bounds

            var arrowElement = state.elements.arrow;
            var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
              width: 0,
              height: 0
            };
            var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
            var arrowPaddingMin = arrowPaddingObject[mainSide];
            var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
            // to include its full size in the calculation. If the reference is small
            // and near the edge of a boundary, the popper can overflow even if the
            // reference is not overflowing as well (e.g. virtual elements with no
            // width or height)

            var arrowLen = within(0, referenceRect[len], arrowRect[len]);
            var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
            var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
            var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
            var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
            var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
            var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
            var tetherMax = offset + maxOffset - offsetModifierValue;
            var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
            popperOffsets[mainAxis] = preventedOffset;
            data[mainAxis] = preventedOffset - offset;
          }
          if (checkAltAxis) {
            var _offsetModifierState$2;
            var _mainSide = mainAxis === 'x' ? top : left;
            var _altSide = mainAxis === 'x' ? bottom : right;
            var _offset = popperOffsets[altAxis];
            var _len = altAxis === 'y' ? 'height' : 'width';
            var _min = _offset + overflow[_mainSide];
            var _max = _offset - overflow[_altSide];
            var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
            var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
            var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
            var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
            var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
            popperOffsets[altAxis] = _preventedOffset;
            data[altAxis] = _preventedOffset - _offset;
          }
          state.modifiersData[name] = data;
        } // eslint-disable-next-line import/no-unused-modules

        var preventOverflow$1 = {
          name: 'preventOverflow',
          enabled: true,
          phase: 'main',
          fn: preventOverflow,
          requiresIfExists: ['offset']
        };
        function getHTMLElementScroll(element) {
          return {
            scrollLeft: element.scrollLeft,
            scrollTop: element.scrollTop
          };
        }
        function getNodeScroll(node) {
          if (node === getWindow(node) || !isHTMLElement(node)) {
            return getWindowScroll(node);
          } else {
            return getHTMLElementScroll(node);
          }
        }
        function isElementScaled(element) {
          var rect = element.getBoundingClientRect();
          var scaleX = round(rect.width) / element.offsetWidth || 1;
          var scaleY = round(rect.height) / element.offsetHeight || 1;
          return scaleX !== 1 || scaleY !== 1;
        } // Returns the composite rect of an element relative to its offsetParent.
        // Composite means it takes into account transforms as well as layout.

        function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
          if (isFixed === void 0) {
            isFixed = false;
          }
          var isOffsetParentAnElement = isHTMLElement(offsetParent);
          var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
          var documentElement = getDocumentElement(offsetParent);
          var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
          var scroll = {
            scrollLeft: 0,
            scrollTop: 0
          };
          var offsets = {
            x: 0,
            y: 0
          };
          if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
            if (getNodeName(offsetParent) !== 'body' ||
            // https://github.com/popperjs/popper-core/issues/1078
            isScrollParent(documentElement)) {
              scroll = getNodeScroll(offsetParent);
            }
            if (isHTMLElement(offsetParent)) {
              offsets = getBoundingClientRect(offsetParent, true);
              offsets.x += offsetParent.clientLeft;
              offsets.y += offsetParent.clientTop;
            } else if (documentElement) {
              offsets.x = getWindowScrollBarX(documentElement);
            }
          }
          return {
            x: rect.left + scroll.scrollLeft - offsets.x,
            y: rect.top + scroll.scrollTop - offsets.y,
            width: rect.width,
            height: rect.height
          };
        }
        function order(modifiers) {
          var map = new Map();
          var visited = new Set();
          var result = [];
          modifiers.forEach(function (modifier) {
            map.set(modifier.name, modifier);
          }); // On visiting object, check for its dependencies and visit them recursively

          function sort(modifier) {
            visited.add(modifier.name);
            var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
            requires.forEach(function (dep) {
              if (!visited.has(dep)) {
                var depModifier = map.get(dep);
                if (depModifier) {
                  sort(depModifier);
                }
              }
            });
            result.push(modifier);
          }
          modifiers.forEach(function (modifier) {
            if (!visited.has(modifier.name)) {
              // check for visited object
              sort(modifier);
            }
          });
          return result;
        }
        function orderModifiers(modifiers) {
          // order based on dependencies
          var orderedModifiers = order(modifiers); // order based on phase

          return modifierPhases.reduce(function (acc, phase) {
            return acc.concat(orderedModifiers.filter(function (modifier) {
              return modifier.phase === phase;
            }));
          }, []);
        }
        function debounce(fn) {
          var pending;
          return function () {
            if (!pending) {
              pending = new Promise(function (resolve) {
                Promise.resolve().then(function () {
                  pending = undefined;
                  resolve(fn());
                });
              });
            }
            return pending;
          };
        }
        function mergeByName(modifiers) {
          var merged = modifiers.reduce(function (merged, current) {
            var existing = merged[current.name];
            merged[current.name] = existing ? Object.assign({}, existing, current, {
              options: Object.assign({}, existing.options, current.options),
              data: Object.assign({}, existing.data, current.data)
            }) : current;
            return merged;
          }, {}); // IE11 does not support Object.values

          return Object.keys(merged).map(function (key) {
            return merged[key];
          });
        }
        var DEFAULT_OPTIONS = {
          placement: 'bottom',
          modifiers: [],
          strategy: 'absolute'
        };
        function areValidElements() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return !args.some(function (element) {
            return !(element && typeof element.getBoundingClientRect === 'function');
          });
        }
        function popperGenerator(generatorOptions) {
          if (generatorOptions === void 0) {
            generatorOptions = {};
          }
          var _generatorOptions = generatorOptions,
            _generatorOptions$def = _generatorOptions.defaultModifiers,
            defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
            _generatorOptions$def2 = _generatorOptions.defaultOptions,
            defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
          return function createPopper(reference, popper, options) {
            if (options === void 0) {
              options = defaultOptions;
            }
            var state = {
              placement: 'bottom',
              orderedModifiers: [],
              options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
              modifiersData: {},
              elements: {
                reference: reference,
                popper: popper
              },
              attributes: {},
              styles: {}
            };
            var effectCleanupFns = [];
            var isDestroyed = false;
            var instance = {
              state: state,
              setOptions: function setOptions(setOptionsAction) {
                var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
                cleanupModifierEffects();
                state.options = Object.assign({}, defaultOptions, state.options, options);
                state.scrollParents = {
                  reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
                  popper: listScrollParents(popper)
                }; // Orders the modifiers based on their dependencies and `phase`
                // properties

                var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

                state.orderedModifiers = orderedModifiers.filter(function (m) {
                  return m.enabled;
                });
                runModifierEffects();
                return instance.update();
              },
              // Sync update – it will always be executed, even if not necessary. This
              // is useful for low frequency updates where sync behavior simplifies the
              // logic.
              // For high frequency updates (e.g. `resize` and `scroll` events), always
              // prefer the async Popper#update method
              forceUpdate: function forceUpdate() {
                if (isDestroyed) {
                  return;
                }
                var _state$elements = state.elements,
                  reference = _state$elements.reference,
                  popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
                // anymore

                if (!areValidElements(reference, popper)) {
                  return;
                } // Store the reference and popper rects to be read by modifiers

                state.rects = {
                  reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
                  popper: getLayoutRect(popper)
                }; // Modifiers have the ability to reset the current update cycle. The
                // most common use case for this is the `flip` modifier changing the
                // placement, which then needs to re-run all the modifiers, because the
                // logic was previously ran for the previous placement and is therefore
                // stale/incorrect

                state.reset = false;
                state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
                // is filled with the initial data specified by the modifier. This means
                // it doesn't persist and is fresh on each update.
                // To ensure persistent data, use `${name}#persistent`

                state.orderedModifiers.forEach(function (modifier) {
                  return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
                });
                for (var index = 0; index < state.orderedModifiers.length; index++) {
                  if (state.reset === true) {
                    state.reset = false;
                    index = -1;
                    continue;
                  }
                  var _state$orderedModifie = state.orderedModifiers[index],
                    fn = _state$orderedModifie.fn,
                    _state$orderedModifie2 = _state$orderedModifie.options,
                    _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
                    name = _state$orderedModifie.name;
                  if (typeof fn === 'function') {
                    state = fn({
                      state: state,
                      options: _options,
                      name: name,
                      instance: instance
                    }) || state;
                  }
                }
              },
              // Async and optimistically optimized update – it will not be executed if
              // not necessary (debounced to run at most once-per-tick)
              update: debounce(function () {
                return new Promise(function (resolve) {
                  instance.forceUpdate();
                  resolve(state);
                });
              }),
              destroy: function destroy() {
                cleanupModifierEffects();
                isDestroyed = true;
              }
            };
            if (!areValidElements(reference, popper)) {
              return instance;
            }
            instance.setOptions(options).then(function (state) {
              if (!isDestroyed && options.onFirstUpdate) {
                options.onFirstUpdate(state);
              }
            }); // Modifiers have the ability to execute arbitrary code before the first
            // update cycle runs. They will be executed in the same order as the update
            // cycle. This is useful when a modifier adds some persistent data that
            // other modifiers need to use, but the modifier is run after the dependent
            // one.

            function runModifierEffects() {
              state.orderedModifiers.forEach(function (_ref) {
                var name = _ref.name,
                  _ref$options = _ref.options,
                  options = _ref$options === void 0 ? {} : _ref$options,
                  effect = _ref.effect;
                if (typeof effect === 'function') {
                  var cleanupFn = effect({
                    state: state,
                    name: name,
                    instance: instance,
                    options: options
                  });
                  var noopFn = function noopFn() {};
                  effectCleanupFns.push(cleanupFn || noopFn);
                }
              });
            }
            function cleanupModifierEffects() {
              effectCleanupFns.forEach(function (fn) {
                return fn();
              });
              effectCleanupFns = [];
            }
            return instance;
          };
        }
        var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
        var createPopper = /*#__PURE__*/popperGenerator({
          defaultModifiers: defaultModifiers
        }); // eslint-disable-next-line import/no-unused-modules

        /*!
         * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
         *
         * Copyright (c) 2014-2017, Jon Schlinkert.
         * Released under the MIT License.
         */

        function isObject$1(o) {
          return Object.prototype.toString.call(o) === '[object Object]';
        }
        function isPlainObject$1(o) {
          var ctor, prot;
          if (isObject$1(o) === false) return false;

          // If has modified constructor
          ctor = o.constructor;
          if (ctor === undefined) return true;

          // If has modified prototype
          prot = ctor.prototype;
          if (isObject$1(prot) === false) return false;

          // If constructor does not have an Object-specific method
          if (prot.hasOwnProperty('isPrototypeOf') === false) {
            return false;
          }

          // Most likely a plain Object
          return true;
        }
        function t$1() {
          return t$1 = Object.assign ? Object.assign.bind() : function (e2) {
            for (var t2 = 1; t2 < arguments.length; t2++) {
              var r2 = arguments[t2];
              for (var n2 in r2) Object.prototype.hasOwnProperty.call(r2, n2) && (e2[n2] = r2[n2]);
            }
            return e2;
          }, t$1.apply(this, arguments);
        }
        function r$1(e2, t2) {
          if (null == e2) return {};
          var r2,
            n2,
            i2 = {},
            o2 = Object.keys(e2);
          for (n2 = 0; n2 < o2.length; n2++) t2.indexOf(r2 = o2[n2]) >= 0 || (i2[r2] = e2[r2]);
          return i2;
        }
        var n$1 = {
            silent: false,
            logLevel: "warn"
          },
          i$1 = ["validator"],
          o$1 = Object.prototype,
          a$1 = o$1.toString,
          s$1 = o$1.hasOwnProperty,
          u$1 = /^\s*function (\w+)/;
        function l$1(e2) {
          var t2;
          var r2 = null !== (t2 = null == e2 ? void 0 : e2.type) && void 0 !== t2 ? t2 : e2;
          if (r2) {
            var e3 = r2.toString().match(u$1);
            return e3 ? e3[1] : "";
          }
          return "";
        }
        var c$1 = isPlainObject$1,
          f$1 = function f$1(e2) {
            return e2;
          };
        var d$1 = f$1;
        var p$1 = function p$1(e2, t2) {
            return s$1.call(e2, t2);
          },
          y$1 = Number.isInteger || function (e2) {
            return "number" == typeof e2 && isFinite(e2) && Math.floor(e2) === e2;
          },
          v$1 = Array.isArray || function (e2) {
            return "[object Array]" === a$1.call(e2);
          },
          h$1 = function h$1(e2) {
            return "[object Function]" === a$1.call(e2);
          },
          b$1 = function b$1(e2) {
            return c$1(e2) && p$1(e2, "_vueTypes_name");
          },
          g$1 = function g$1(e2) {
            return c$1(e2) && (p$1(e2, "type") || ["_vueTypes_name", "validator", "default", "required"].some(function (t2) {
              return p$1(e2, t2);
            }));
          };
        function O$1(e2, t2) {
          return Object.defineProperty(e2.bind(t2), "__original", {
            value: e2
          });
        }
        function m$1(e2, t2) {
          var r2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          var n2,
            i2 = true,
            o2 = "";
          n2 = c$1(e2) ? e2 : {
            type: e2
          };
          var a2 = b$1(n2) ? n2._vueTypes_name + " - " : "";
          if (g$1(n2) && null !== n2.type) {
            if (void 0 === n2.type || true === n2.type) return i2;
            if (!n2.required && void 0 === t2) return i2;
            v$1(n2.type) ? (i2 = n2.type.some(function (e3) {
              return true === m$1(e3, t2, true);
            }), o2 = n2.type.map(function (e3) {
              return l$1(e3);
            }).join(" or ")) : (o2 = l$1(n2), i2 = "Array" === o2 ? v$1(t2) : "Object" === o2 ? c$1(t2) : "String" === o2 || "Number" === o2 || "Boolean" === o2 || "Function" === o2 ? function (e3) {
              if (null == e3) return "";
              var t3 = e3.constructor.toString().match(u$1);
              return t3 ? t3[1] : "";
            }(t2) === o2 : t2 instanceof n2.type);
          }
          if (!i2) {
            var e3 = "".concat(a2, "value \"").concat(t2, "\" should be of type \"").concat(o2, "\"");
            return false === r2 ? (d$1(e3), false) : e3;
          }
          if (p$1(n2, "validator") && h$1(n2.validator)) {
            var _e2 = d$1,
              o3 = [];
            if (d$1 = function d$1(e4) {
              o3.push(e4);
            }, i2 = n2.validator(t2), d$1 = _e2, !i2) {
              var e4 = (o3.length > 1 ? "* " : "") + o3.join("\n* ");
              return o3.length = 0, false === r2 ? (d$1(e4), i2) : e4;
            }
          }
          return i2;
        }
        function j$1(e2, t2) {
          var r2 = Object.defineProperties(t2, {
              _vueTypes_name: {
                value: e2,
                writable: true
              },
              isRequired: {
                get: function get() {
                  return this.required = true, this;
                }
              },
              def: {
                value: function value(e3) {
                  return void 0 === e3 ? (p$1(this, "default") && delete this.default, this) : h$1(e3) || true === m$1(this, e3, true) ? (this.default = v$1(e3) ? function () {
                    return _toConsumableArray(e3);
                  } : c$1(e3) ? function () {
                    return Object.assign({}, e3);
                  } : e3, this) : (d$1("".concat(this._vueTypes_name, " - invalid default value: \"").concat(e3, "\"")), this);
                }
              }
            }),
            n2 = r2.validator;
          return h$1(n2) && (r2.validator = O$1(n2, r2)), r2;
        }
        function _$1(e2, t2) {
          var r2 = j$1(e2, t2);
          return Object.defineProperty(r2, "validate", {
            value: function value(e3) {
              return h$1(this.validator) && d$1("".concat(this._vueTypes_name, " - calling .validate() will overwrite the current custom validator function. Validator info:\n").concat(JSON.stringify(this))), this.validator = O$1(e3, this), this;
            }
          });
        }
        function T$1(e2, t2, n2) {
          var o2 = function (e3) {
            var t3 = {};
            return Object.getOwnPropertyNames(e3).forEach(function (r2) {
              t3[r2] = Object.getOwnPropertyDescriptor(e3, r2);
            }), Object.defineProperties({}, t3);
          }(t2);
          if (o2._vueTypes_name = e2, !c$1(n2)) return o2;
          var a2 = n2.validator,
            s2 = r$1(n2, i$1);
          if (h$1(a2)) {
            var e3 = o2.validator;
            e3 && (e3 = null !== (l2 = (u2 = e3).__original) && void 0 !== l2 ? l2 : u2), o2.validator = O$1(e3 ? function (t3) {
              return e3.call(this, t3) && a2.call(this, t3);
            } : a2, o2);
          }
          var u2, l2;
          return Object.assign(o2, s2);
        }
        function $$1(e2) {
          return e2.replace(/^(?!\s*$)/gm, "  ");
        }
        var w$1 = function w$1() {
            return _$1("any", {});
          },
          P$2 = function P$2() {
            return _$1("function", {
              type: Function
            });
          },
          x$1 = function x$1() {
            return _$1("boolean", {
              type: Boolean
            });
          },
          E$1 = function E$1() {
            return _$1("string", {
              type: String
            });
          },
          N$1 = function N$1() {
            return _$1("number", {
              type: Number
            });
          },
          q$2 = function q$2() {
            return _$1("array", {
              type: Array
            });
          },
          A$2 = function A$2() {
            return _$1("object", {
              type: Object
            });
          },
          V$1 = function V$1() {
            return j$1("integer", {
              type: Number,
              validator: function validator(e2) {
                return y$1(e2);
              }
            });
          },
          S$1 = function S$1() {
            return j$1("symbol", {
              validator: function validator(e2) {
                return "symbol" == _typeof2(e2);
              }
            });
          };
        function D$1(e2) {
          var t2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "custom validation failed";
          if ("function" != typeof e2) throw new TypeError("[VueTypes error]: You must provide a function as argument");
          return j$1(e2.name || "<<anonymous function>>", {
            type: null,
            validator: function validator(r2) {
              var n2 = e2(r2);
              return n2 || d$1("".concat(this._vueTypes_name, " - ").concat(t2)), n2;
            }
          });
        }
        function L$1(e2) {
          if (!v$1(e2)) throw new TypeError("[VueTypes error]: You must provide an array as argument.");
          var t2 = "oneOf - value should be one of \"".concat(e2.join('", "'), "\"."),
            r2 = e2.reduce(function (e3, t3) {
              if (null != t3) {
                var r3 = t3.constructor;
                -1 === e3.indexOf(r3) && e3.push(r3);
              }
              return e3;
            }, []);
          return j$1("oneOf", {
            type: r2.length > 0 ? r2 : void 0,
            validator: function validator(r3) {
              var n2 = -1 !== e2.indexOf(r3);
              return n2 || d$1(t2), n2;
            }
          });
        }
        function F$1(e2) {
          if (!v$1(e2)) throw new TypeError("[VueTypes error]: You must provide an array as argument");
          var t2 = false,
            r2 = [];
          for (var n3 = 0; n3 < e2.length; n3 += 1) {
            var i2 = e2[n3];
            if (g$1(i2)) {
              if (b$1(i2) && "oneOf" === i2._vueTypes_name && i2.type) {
                r2 = r2.concat(i2.type);
                continue;
              }
              if (h$1(i2.validator) && (t2 = true), true === i2.type || !i2.type) {
                d$1('oneOfType - invalid usage of "true" or "null" as types.');
                continue;
              }
              r2 = r2.concat(i2.type);
            } else r2.push(i2);
          }
          r2 = r2.filter(function (e3, t3) {
            return r2.indexOf(e3) === t3;
          });
          var n2 = r2.length > 0 ? r2 : null;
          return j$1("oneOfType", t2 ? {
            type: n2,
            validator: function validator(t3) {
              var r3 = [],
                n3 = e2.some(function (e3) {
                  var n4 = m$1(b$1(e3) && "oneOf" === e3._vueTypes_name ? e3.type || null : e3, t3, true);
                  return "string" == typeof n4 && r3.push(n4), true === n4;
                });
              return n3 || d$1("oneOfType - provided value does not match any of the ".concat(r3.length, " passed-in validators:\n").concat($$1(r3.join("\n")))), n3;
            }
          } : {
            type: n2
          });
        }
        function Y$1(e2) {
          return j$1("arrayOf", {
            type: Array,
            validator: function validator(t2) {
              var r2 = "";
              var n2 = t2.every(function (t3) {
                return r2 = m$1(e2, t3, true), true === r2;
              });
              return n2 || d$1("arrayOf - value validation error:\n".concat($$1(r2))), n2;
            }
          });
        }
        function B$1(e2) {
          return j$1("instanceOf", {
            type: e2
          });
        }
        function I$1(e2) {
          return j$1("objectOf", {
            type: Object,
            validator: function validator(t2) {
              var r2 = "";
              var n2 = Object.keys(t2).every(function (n3) {
                return r2 = m$1(e2, t2[n3], true), true === r2;
              });
              return n2 || d$1("objectOf - value validation error:\n".concat($$1(r2))), n2;
            }
          });
        }
        function J$1(e2) {
          var t2 = Object.keys(e2),
            r2 = t2.filter(function (t3) {
              var r3;
              return !(null === (r3 = e2[t3]) || void 0 === r3 || !r3.required);
            }),
            n2 = j$1("shape", {
              type: Object,
              validator: function validator(n3) {
                var _this = this;
                if (!c$1(n3)) return false;
                var i2 = Object.keys(n3);
                if (r2.length > 0 && r2.some(function (e3) {
                  return -1 === i2.indexOf(e3);
                })) {
                  var e3 = r2.filter(function (e4) {
                    return -1 === i2.indexOf(e4);
                  });
                  return d$1(1 === e3.length ? "shape - required property \"".concat(e3[0], "\" is not defined.") : "shape - required properties \"".concat(e3.join('", "'), "\" are not defined.")), false;
                }
                return i2.every(function (r3) {
                  if (-1 === t2.indexOf(r3)) return true === _this._vueTypes_isLoose || (d$1("shape - shape definition does not include a \"".concat(r3, "\" property. Allowed keys: \"").concat(t2.join('", "'), "\".")), false);
                  var i3 = m$1(e2[r3], n3[r3], true);
                  return "string" == typeof i3 && d$1("shape - \"".concat(r3, "\" property validation error:\n ").concat($$1(i3))), true === i3;
                });
              }
            });
          return Object.defineProperty(n2, "_vueTypes_isLoose", {
            writable: true,
            value: false
          }), Object.defineProperty(n2, "loose", {
            get: function get() {
              return this._vueTypes_isLoose = true, this;
            }
          }), n2;
        }
        var M$1 = ["name", "validate", "getter"],
          R$1 = /* @__PURE__ */function () {
            var e2;
            return (e2 = /*#__PURE__*/function () {
              function e2() {
                _classCallCheck(this, e2);
              }
              return _createClass(e2, null, [{
                key: "any",
                get: function get() {
                  return w$1();
                }
              }, {
                key: "func",
                get: function get() {
                  return P$2().def(this.defaults.func);
                }
              }, {
                key: "bool",
                get: function get() {
                  return x$1().def(this.defaults.bool);
                }
              }, {
                key: "string",
                get: function get() {
                  return E$1().def(this.defaults.string);
                }
              }, {
                key: "number",
                get: function get() {
                  return N$1().def(this.defaults.number);
                }
              }, {
                key: "array",
                get: function get() {
                  return q$2().def(this.defaults.array);
                }
              }, {
                key: "object",
                get: function get() {
                  return A$2().def(this.defaults.object);
                }
              }, {
                key: "integer",
                get: function get() {
                  return V$1().def(this.defaults.integer);
                }
              }, {
                key: "symbol",
                get: function get() {
                  return S$1();
                }
              }, {
                key: "nullable",
                get: function get() {
                  return {
                    type: null
                  };
                }
              }, {
                key: "extend",
                value: function extend(e3) {
                  var _this2 = this;
                  if (v$1(e3)) return e3.forEach(function (e4) {
                    return _this2.extend(e4);
                  }), this;
                  var t2 = e3.name,
                    _e3$validate = e3.validate,
                    n2 = _e3$validate === void 0 ? false : _e3$validate,
                    _e3$getter = e3.getter,
                    i2 = _e3$getter === void 0 ? false : _e3$getter,
                    o2 = r$1(e3, M$1);
                  if (p$1(this, t2)) throw new TypeError("[VueTypes error]: Type \"".concat(t2, "\" already defined"));
                  var a2 = o2.type;
                  if (b$1(a2)) return delete o2.type, Object.defineProperty(this, t2, i2 ? {
                    get: function get() {
                      return T$1(t2, a2, o2);
                    }
                  } : {
                    value: function value() {
                      var _r2$validator;
                      var r2 = T$1(t2, a2, o2);
                      for (var _len2 = arguments.length, e4 = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                        e4[_key2] = arguments[_key2];
                      }
                      return r2.validator && (r2.validator = (_r2$validator = r2.validator).bind.apply(_r2$validator, [r2].concat(e4))), r2;
                    }
                  });
                  var s2;
                  return s2 = i2 ? {
                    get: function get() {
                      var e4 = Object.assign({}, o2);
                      return n2 ? _$1(t2, e4) : j$1(t2, e4);
                    },
                    enumerable: true
                  } : {
                    value: function value() {
                      var _r2$validator2;
                      var r2 = Object.assign({}, o2);
                      var i3;
                      for (var _len3 = arguments.length, e4 = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                        e4[_key3] = arguments[_key3];
                      }
                      return i3 = n2 ? _$1(t2, r2) : j$1(t2, r2), r2.validator && (i3.validator = (_r2$validator2 = r2.validator).bind.apply(_r2$validator2, [i3].concat(e4))), i3;
                    },
                    enumerable: true
                  }, Object.defineProperty(this, t2, s2);
                }
              }]);
            }()).defaults = {}, e2.sensibleDefaults = void 0, e2.config = n$1, e2.custom = D$1, e2.oneOf = L$1, e2.instanceOf = B$1, e2.oneOfType = F$1, e2.arrayOf = Y$1, e2.objectOf = I$1, e2.shape = J$1, e2.utils = {
              validate: function validate(e3, t2) {
                return true === m$1(t2, e3, true);
              },
              toType: function toType(e3, t2) {
                var r2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
                return r2 ? _$1(e3, t2) : j$1(e3, t2);
              }
            }, e2;
          }();
        function z$2() {
          var e2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
            func: function func() {},
            bool: true,
            string: "",
            number: 0,
            array: function array() {
              return [];
            },
            object: function object() {
              return {};
            },
            integer: 0
          };
          var r2;
          return (r2 = /*#__PURE__*/function (_R$) {
            function r2() {
              _classCallCheck(this, r2);
              return _callSuper(this, r2, arguments);
            }
            _inherits(r2, _R$);
            return _createClass(r2, null, [{
              key: "sensibleDefaults",
              get: function get() {
                return t$1({}, this.defaults);
              },
              set: function set(r3) {
                this.defaults = false !== r3 ? t$1({}, true !== r3 ? r3 : e2) : {};
              }
            }]);
          }(R$1)).defaults = t$1({}, e2), r2;
        }
        var C$1 = /*#__PURE__*/function (_z$) {
          function C() {
            _classCallCheck(this, C);
            return _callSuper(this, C, arguments);
          }
          _inherits(C, _z$);
          return _createClass(C);
        }(z$2());
        var t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
        function e(t) {
          var e = {
            exports: {}
          };
          return t(e, e.exports), e.exports;
        }
        var n = function n(t) {
            return t && t.Math == Math && t;
          },
          r = n("object" == (typeof globalThis === "undefined" ? "undefined" : _typeof2(globalThis)) && globalThis) || n("object" == (typeof window === "undefined" ? "undefined" : _typeof2(window)) && window) || n("object" == (typeof self === "undefined" ? "undefined" : _typeof2(self)) && self) || n("object" == _typeof2(t) && t) || function () {
            return this;
          }() || Function("return this")(),
          o = function o(t) {
            try {
              return !!t();
            } catch (t) {
              return !0;
            }
          },
          i = !o(function () {
            return 7 != Object.defineProperty({}, 1, {
              get: function get() {
                return 7;
              }
            })[1];
          }),
          u = {}.propertyIsEnumerable,
          a = Object.getOwnPropertyDescriptor,
          c = {
            f: a && !u.call({
              1: 2
            }, 1) ? function (t) {
              var e = a(this, t);
              return !!e && e.enumerable;
            } : u
          },
          l = function l(t, e) {
            return {
              enumerable: !(1 & t),
              configurable: !(2 & t),
              writable: !(4 & t),
              value: e
            };
          },
          f = {}.toString,
          s = function s(t) {
            return f.call(t).slice(8, -1);
          },
          d = "".split,
          v = o(function () {
            return !Object("z").propertyIsEnumerable(0);
          }) ? function (t) {
            return "String" == s(t) ? d.call(t, "") : Object(t);
          } : Object,
          p = function p(t) {
            if (null == t) throw TypeError("Can't call method on " + t);
            return t;
          },
          g = function g(t) {
            return v(p(t));
          },
          h = function h(t) {
            return "object" == _typeof2(t) ? null !== t : "function" == typeof t;
          },
          y = function y(t, e) {
            if (!h(t)) return t;
            var n, r;
            if (e && "function" == typeof (n = t.toString) && !h(r = n.call(t))) return r;
            if ("function" == typeof (n = t.valueOf) && !h(r = n.call(t))) return r;
            if (!e && "function" == typeof (n = t.toString) && !h(r = n.call(t))) return r;
            throw TypeError("Can't convert object to primitive value");
          },
          m = {}.hasOwnProperty,
          S = function S(t, e) {
            return m.call(t, e);
          },
          x = r.document,
          b = h(x) && h(x.createElement),
          E = function E(t) {
            return b ? x.createElement(t) : {};
          },
          w = !i && !o(function () {
            return 7 != Object.defineProperty(E("div"), "a", {
              get: function get() {
                return 7;
              }
            }).a;
          }),
          O = Object.getOwnPropertyDescriptor,
          T = {
            f: i ? O : function (t, e) {
              if (t = g(t), e = y(e, !0), w) try {
                return O(t, e);
              } catch (t) {}
              if (S(t, e)) return l(!c.f.call(t, e), t[e]);
            }
          },
          A$1 = function A$1(t) {
            if (!h(t)) throw TypeError(String(t) + " is not an object");
            return t;
          },
          k = Object.defineProperty,
          R = {
            f: i ? k : function (t, e, n) {
              if (A$1(t), e = y(e, !0), A$1(n), w) try {
                return k(t, e, n);
              } catch (t) {}
              if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
              return "value" in n && (t[e] = n.value), t;
            }
          },
          I = i ? function (t, e, n) {
            return R.f(t, e, l(1, n));
          } : function (t, e, n) {
            return t[e] = n, t;
          },
          j = function j(t, e) {
            try {
              I(r, t, e);
            } catch (n) {
              r[t] = e;
            }
            return e;
          },
          C = r["__core-js_shared__"] || j("__core-js_shared__", {}),
          L = Function.toString;
        "function" != typeof C.inspectSource && (C.inspectSource = function (t) {
          return L.call(t);
        });
        var P$1,
          M,
          _,
          D = C.inspectSource,
          U = r.WeakMap,
          N = "function" == typeof U && /native code/.test(D(U)),
          F = e(function (t) {
            (t.exports = function (t, e) {
              return C[t] || (C[t] = void 0 !== e ? e : {});
            })("versions", []).push({
              version: "3.8.3",
              mode: "global",
              copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
            });
          }),
          W$1 = 0,
          z$1 = Math.random(),
          $ = function $(t) {
            return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++W$1 + z$1).toString(36);
          },
          B = F("keys"),
          Y = function Y(t) {
            return B[t] || (B[t] = $(t));
          },
          G = {},
          H = r.WeakMap;
        if (N) {
          var X = C.state || (C.state = new H()),
            V = X.get,
            K = X.has,
            q$1 = X.set;
          P$1 = function P$1(t, e) {
            return e.facade = t, q$1.call(X, t, e), e;
          }, M = function M(t) {
            return V.call(X, t) || {};
          }, _ = function _(t) {
            return K.call(X, t);
          };
        } else {
          var Q = Y("state");
          G[Q] = !0, P$1 = function P$1(t, e) {
            return e.facade = t, I(t, Q, e), e;
          }, M = function M(t) {
            return S(t, Q) ? t[Q] : {};
          }, _ = function _(t) {
            return S(t, Q);
          };
        }
        var J = {
            set: P$1,
            get: M,
            has: _,
            enforce: function enforce(t) {
              return _(t) ? M(t) : P$1(t, {});
            },
            getterFor: function getterFor(t) {
              return function (e) {
                var n;
                if (!h(e) || (n = M(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
                return n;
              };
            }
          },
          Z = e(function (t) {
            var e = J.get,
              n = J.enforce,
              o = String(String).split("String");
            (t.exports = function (t, e, i, u) {
              var a,
                c = !!u && !!u.unsafe,
                l = !!u && !!u.enumerable,
                f = !!u && !!u.noTargetGet;
              "function" == typeof i && ("string" != typeof e || S(i, "name") || I(i, "name", e), (a = n(i)).source || (a.source = o.join("string" == typeof e ? e : ""))), t !== r ? (c ? !f && t[e] && (l = !0) : delete t[e], l ? t[e] = i : I(t, e, i)) : l ? t[e] = i : j(e, i);
            })(Function.prototype, "toString", function () {
              return "function" == typeof this && e(this).source || D(this);
            });
          }),
          tt = r,
          et = function et(t) {
            return "function" == typeof t ? t : void 0;
          },
          nt = function nt(t, e) {
            return arguments.length < 2 ? et(tt[t]) || et(r[t]) : tt[t] && tt[t][e] || r[t] && r[t][e];
          },
          rt = Math.ceil,
          ot = Math.floor,
          it$1 = function it$1(t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? ot : rt)(t);
          },
          ut$1 = Math.min,
          at = function at(t) {
            return t > 0 ? ut$1(it$1(t), 9007199254740991) : 0;
          },
          ct$1 = Math.max,
          lt$1 = Math.min,
          ft$1 = function ft$1(t, e) {
            var n = it$1(t);
            return n < 0 ? ct$1(n + e, 0) : lt$1(n, e);
          },
          st$1 = function st$1(t) {
            return function (e, n, r) {
              var o,
                i = g(e),
                u = at(i.length),
                a = ft$1(r, u);
              if (t && n != n) {
                for (; u > a;) if ((o = i[a++]) != o) return !0;
              } else for (; u > a; a++) if ((t || a in i) && i[a] === n) return t || a || 0;
              return !t && -1;
            };
          },
          dt$1 = {
            includes: st$1(!0),
            indexOf: st$1(!1)
          },
          vt$1 = dt$1.indexOf,
          pt$1 = function pt$1(t, e) {
            var n,
              r = g(t),
              o = 0,
              i = [];
            for (n in r) !S(G, n) && S(r, n) && i.push(n);
            for (; e.length > o;) S(r, n = e[o++]) && (~vt$1(i, n) || i.push(n));
            return i;
          },
          gt$1 = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
          ht$1 = gt$1.concat("length", "prototype"),
          yt$1 = {
            f: Object.getOwnPropertyNames || function (t) {
              return pt$1(t, ht$1);
            }
          },
          mt$1 = {
            f: Object.getOwnPropertySymbols
          },
          St$1 = nt("Reflect", "ownKeys") || function (t) {
            var e = yt$1.f(A$1(t)),
              n = mt$1.f;
            return n ? e.concat(n(t)) : e;
          },
          xt$1 = function xt$1(t, e) {
            for (var n = St$1(e), r = R.f, o = T.f, i = 0; i < n.length; i++) {
              var u = n[i];
              S(t, u) || r(t, u, o(e, u));
            }
          },
          bt$1 = /#|\.prototype\./,
          Et$1 = function Et$1(t, e) {
            var n = Ot$1[wt$1(t)];
            return n == At$1 || n != Tt$1 && ("function" == typeof e ? o(e) : !!e);
          },
          wt$1 = Et$1.normalize = function (t) {
            return String(t).replace(bt$1, ".").toLowerCase();
          },
          Ot$1 = Et$1.data = {},
          Tt$1 = Et$1.NATIVE = "N",
          At$1 = Et$1.POLYFILL = "P",
          kt$1 = Et$1,
          Rt$1 = T.f,
          It$1 = function It$1(t, e) {
            var n,
              o,
              i,
              u,
              a,
              c = t.target,
              l = t.global,
              f = t.stat;
            if (n = l ? r : f ? r[c] || j(c, {}) : (r[c] || {}).prototype) for (o in e) {
              if (u = e[o], i = t.noTargetGet ? (a = Rt$1(n, o)) && a.value : n[o], !kt$1(l ? o : c + (f ? "." : "#") + o, t.forced) && void 0 !== i) {
                if (_typeof2(u) == _typeof2(i)) continue;
                xt$1(u, i);
              }
              (t.sham || i && i.sham) && I(u, "sham", !0), Z(n, o, u, t);
            }
          },
          jt$1 = function jt$1(t, e) {
            var n = [][t];
            return !!n && o(function () {
              n.call(null, e || function () {
                throw 1;
              }, 1);
            });
          },
          Ct$1 = Object.defineProperty,
          Lt$1 = {},
          Pt$1 = function Pt$1(t) {
            throw t;
          },
          Mt$1 = function Mt$1(t, e) {
            if (S(Lt$1, t)) return Lt$1[t];
            e || (e = {});
            var n = [][t],
              r = !!S(e, "ACCESSORS") && e.ACCESSORS,
              u = S(e, 0) ? e[0] : Pt$1,
              a = S(e, 1) ? e[1] : void 0;
            return Lt$1[t] = !!n && !o(function () {
              if (r && !i) return !0;
              var t = {
                length: -1
              };
              r ? Ct$1(t, 1, {
                enumerable: !0,
                get: Pt$1
              }) : t[1] = 1, n.call(t, u, a);
            });
          },
          _t$1 = dt$1.indexOf,
          Dt$1 = [].indexOf,
          Ut$1 = !!Dt$1 && 1 / [1].indexOf(1, -0) < 0,
          Nt$1 = jt$1("indexOf"),
          Ft$1 = Mt$1("indexOf", {
            ACCESSORS: !0,
            1: 0
          });
        function Wt$1(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }
        function zt$1(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
          }
        }
        function $t$1(t, e, n) {
          return n && zt$1(t, n), t;
        }
        It$1({
          target: "Array",
          proto: !0,
          forced: Ut$1 || !Nt$1 || !Ft$1
        }, {
          indexOf: function indexOf(t) {
            return Ut$1 ? Dt$1.apply(this, arguments) || 0 : _t$1(this, t, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
        (function () {
          function t() {
            Wt$1(this, t);
          }
          return $t$1(t, null, [{
            key: "isInBrowser",
            value: function value() {
              return "undefined" != typeof window;
            }
          }, {
            key: "isServer",
            value: function value() {
              return "undefined" == typeof window;
            }
          }, {
            key: "getUA",
            value: function value() {
              return t.isInBrowser() ? window.navigator.userAgent.toLowerCase() : "";
            }
          }, {
            key: "isMobile",
            value: function value() {
              return /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(navigator.appVersion);
            }
          }, {
            key: "isOpera",
            value: function value() {
              return -1 !== navigator.userAgent.indexOf("Opera");
            }
          }, {
            key: "isIE",
            value: function value() {
              var e = t.getUA();
              return "" !== e && e.indexOf("msie") > 0;
            }
          }, {
            key: "isIE9",
            value: function value() {
              var e = t.getUA();
              return "" !== e && e.indexOf("msie 9.0") > 0;
            }
          }, {
            key: "isEdge",
            value: function value() {
              var e = t.getUA();
              return "" !== e && e.indexOf("edge/") > 0;
            }
          }, {
            key: "isChrome",
            value: function value() {
              var e = t.getUA();
              return "" !== e && /chrome\/\d+/.test(e) && !t.isEdge();
            }
          }, {
            key: "isPhantomJS",
            value: function value() {
              var e = t.getUA();
              return "" !== e && /phantomjs/.test(e);
            }
          }, {
            key: "isFirefox",
            value: function value() {
              var e = t.getUA();
              return "" !== e && /firefox/.test(e);
            }
          }]), t;
        })();
        var Yt$1 = [].join,
          Gt$1 = v != Object,
          Ht$1 = jt$1("join", ",");
        It$1({
          target: "Array",
          proto: !0,
          forced: Gt$1 || !Ht$1
        }, {
          join: function join(t) {
            return Yt$1.call(g(this), void 0 === t ? "," : t);
          }
        });
        var Xt$1,
          Vt$1,
          Kt$1 = function Kt$1(t) {
            return Object(p(t));
          },
          qt$1 = Array.isArray || function (t) {
            return "Array" == s(t);
          },
          Qt$1 = !!Object.getOwnPropertySymbols && !o(function () {
            return !String(Symbol());
          }),
          Jt$1 = Qt$1 && !Symbol.sham && "symbol" == _typeof2(Symbol.iterator),
          Zt$1 = F("wks"),
          te = r.Symbol,
          ee = Jt$1 ? te : te && te.withoutSetter || $,
          ne = function ne(t) {
            return S(Zt$1, t) || (Qt$1 && S(te, t) ? Zt$1[t] = te[t] : Zt$1[t] = ee("Symbol." + t)), Zt$1[t];
          },
          re$1 = ne("species"),
          oe = function oe(t, e) {
            var n;
            return qt$1(t) && ("function" != typeof (n = t.constructor) || n !== Array && !qt$1(n.prototype) ? h(n) && null === (n = n[re$1]) && (n = void 0) : n = void 0), new (void 0 === n ? Array : n)(0 === e ? 0 : e);
          },
          ie = function ie(t, e, n) {
            var r = y(e);
            r in t ? R.f(t, r, l(0, n)) : t[r] = n;
          },
          ue$1 = nt("navigator", "userAgent") || "",
          ae = r.process,
          ce = ae && ae.versions,
          le = ce && ce.v8;
        le ? Vt$1 = (Xt$1 = le.split("."))[0] + Xt$1[1] : ue$1 && (!(Xt$1 = ue$1.match(/Edge\/(\d+)/)) || Xt$1[1] >= 74) && (Xt$1 = ue$1.match(/Chrome\/(\d+)/)) && (Vt$1 = Xt$1[1]);
        var fe$1 = Vt$1 && +Vt$1,
          se = ne("species"),
          de$1 = function de$1(t) {
            return fe$1 >= 51 || !o(function () {
              var e = [];
              return (e.constructor = {})[se] = function () {
                return {
                  foo: 1
                };
              }, 1 !== e[t](Boolean).foo;
            });
          },
          ve$1 = de$1("splice"),
          pe = Mt$1("splice", {
            ACCESSORS: !0,
            0: 0,
            1: 2
          }),
          ge = Math.max,
          he = Math.min;
        It$1({
          target: "Array",
          proto: !0,
          forced: !ve$1 || !pe
        }, {
          splice: function splice(t, e) {
            var n,
              r,
              o,
              i,
              u,
              a,
              c = Kt$1(this),
              l = at(c.length),
              f = ft$1(t, l),
              s = arguments.length;
            if (0 === s ? n = r = 0 : 1 === s ? (n = 0, r = l - f) : (n = s - 2, r = he(ge(it$1(e), 0), l - f)), l + n - r > 9007199254740991) throw TypeError("Maximum allowed length exceeded");
            for (o = oe(c, r), i = 0; i < r; i++) (u = f + i) in c && ie(o, i, c[u]);
            if (o.length = r, n < r) {
              for (i = f; i < l - r; i++) a = i + n, (u = i + r) in c ? c[a] = c[u] : delete c[a];
              for (i = l; i > l - r + n; i--) delete c[i - 1];
            } else if (n > r) for (i = l - r; i > f; i--) a = i + n - 1, (u = i + r - 1) in c ? c[a] = c[u] : delete c[a];
            for (i = 0; i < n; i++) c[i + f] = arguments[i + 2];
            return c.length = l - r + n, o;
          }
        });
        var ye$1 = {};
        ye$1[ne("toStringTag")] = "z";
        var me$1 = "[object z]" === String(ye$1),
          Se$1 = ne("toStringTag"),
          xe = "Arguments" == s(function () {
            return arguments;
          }()),
          be$1 = me$1 ? s : function (t) {
            var e, n, r;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = function (t, e) {
              try {
                return t[e];
              } catch (t) {}
            }(e = Object(t), Se$1)) ? n : xe ? s(e) : "Object" == (r = s(e)) && "function" == typeof e.callee ? "Arguments" : r;
          },
          Ee = me$1 ? {}.toString : function () {
            return "[object " + be$1(this) + "]";
          };
        me$1 || Z(Object.prototype, "toString", Ee, {
          unsafe: !0
        });
        var we = function we() {
          var t = A$1(this),
            e = "";
          return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.sticky && (e += "y"), e;
        };
        function Oe(t, e) {
          return RegExp(t, e);
        }
        var Te,
          Ae$1,
          ke$1 = {
            UNSUPPORTED_Y: o(function () {
              var t = Oe("a", "y");
              return t.lastIndex = 2, null != t.exec("abcd");
            }),
            BROKEN_CARET: o(function () {
              var t = Oe("^r", "gy");
              return t.lastIndex = 2, null != t.exec("str");
            })
          },
          Re = RegExp.prototype.exec,
          Ie = String.prototype.replace,
          je = Re,
          Ce$1 = (Te = /a/, Ae$1 = /b*/g, Re.call(Te, "a"), Re.call(Ae$1, "a"), 0 !== Te.lastIndex || 0 !== Ae$1.lastIndex),
          Le$1 = ke$1.UNSUPPORTED_Y || ke$1.BROKEN_CARET,
          Pe$1 = void 0 !== /()??/.exec("")[1];
        (Ce$1 || Pe$1 || Le$1) && (je = function je(t) {
          var e,
            n,
            r,
            o,
            i = this,
            u = Le$1 && i.sticky,
            a = we.call(i),
            c = i.source,
            l = 0,
            f = t;
          return u && (-1 === (a = a.replace("y", "")).indexOf("g") && (a += "g"), f = String(t).slice(i.lastIndex), i.lastIndex > 0 && (!i.multiline || i.multiline && "\n" !== t[i.lastIndex - 1]) && (c = "(?: " + c + ")", f = " " + f, l++), n = new RegExp("^(?:" + c + ")", a)), Pe$1 && (n = new RegExp("^" + c + "$(?!\\s)", a)), Ce$1 && (e = i.lastIndex), r = Re.call(u ? n : i, f), u ? r ? (r.input = r.input.slice(l), r[0] = r[0].slice(l), r.index = i.lastIndex, i.lastIndex += r[0].length) : i.lastIndex = 0 : Ce$1 && r && (i.lastIndex = i.global ? r.index + r[0].length : e), Pe$1 && r && r.length > 1 && Ie.call(r[0], n, function () {
            for (o = 1; o < arguments.length - 2; o++) void 0 === arguments[o] && (r[o] = void 0);
          }), r;
        });
        var Me$1 = je;
        It$1({
          target: "RegExp",
          proto: !0,
          forced: /./.exec !== Me$1
        }, {
          exec: Me$1
        });
        var _e$1 = RegExp.prototype,
          De = _e$1.toString,
          Ue = o(function () {
            return "/a/b" != De.call({
              source: "a",
              flags: "b"
            });
          }),
          Ne$1 = "toString" != De.name;
        (Ue || Ne$1) && Z(RegExp.prototype, "toString", function () {
          var t = A$1(this),
            e = String(t.source),
            n = t.flags;
          return "/" + e + "/" + String(void 0 === n && t instanceof RegExp && !("flags" in _e$1) ? we.call(t) : n);
        }, {
          unsafe: !0
        });
        var Fe = ne("species"),
          We = !o(function () {
            var t = /./;
            return t.exec = function () {
              var t = [];
              return t.groups = {
                a: "7"
              }, t;
            }, "7" !== "".replace(t, "$<a>");
          }),
          ze = "$0" === "a".replace(/./, "$0"),
          $e = ne("replace"),
          Be = !!/./[$e] && "" === /./[$e]("a", "$0"),
          Ye$1 = !o(function () {
            var t = /(?:)/,
              e = t.exec;
            t.exec = function () {
              return e.apply(this, arguments);
            };
            var n = "ab".split(t);
            return 2 !== n.length || "a" !== n[0] || "b" !== n[1];
          }),
          Ge = function Ge(t, e, n, r) {
            var i = ne(t),
              u = !o(function () {
                var e = {};
                return e[i] = function () {
                  return 7;
                }, 7 != ""[t](e);
              }),
              a = u && !o(function () {
                var e = !1,
                  n = /a/;
                return "split" === t && ((n = {}).constructor = {}, n.constructor[Fe] = function () {
                  return n;
                }, n.flags = "", n[i] = /./[i]), n.exec = function () {
                  return e = !0, null;
                }, n[i](""), !e;
              });
            if (!u || !a || "replace" === t && (!We || !ze || Be) || "split" === t && !Ye$1) {
              var c = /./[i],
                l = n(i, ""[t], function (t, e, n, r, o) {
                  return e.exec === Me$1 ? u && !o ? {
                    done: !0,
                    value: c.call(e, n, r)
                  } : {
                    done: !0,
                    value: t.call(n, e, r)
                  } : {
                    done: !1
                  };
                }, {
                  REPLACE_KEEPS_$0: ze,
                  REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: Be
                }),
                f = l[0],
                s = l[1];
              Z(String.prototype, t, f), Z(RegExp.prototype, i, function (t, e) {
                return s.call(t, this, e);
              });
            }
            r && I(RegExp.prototype[i], "sham", !0);
          },
          He = ne("match"),
          Xe = function Xe(t) {
            var e;
            return h(t) && (void 0 !== (e = t[He]) ? !!e : "RegExp" == s(t));
          },
          Ve$1 = function Ve$1(t) {
            if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
            return t;
          },
          Ke$1 = ne("species"),
          qe$1 = function qe$1(t) {
            return function (e, n) {
              var r,
                o,
                i = String(p(e)),
                u = it$1(n),
                a = i.length;
              return u < 0 || u >= a ? t ? "" : void 0 : (r = i.charCodeAt(u)) < 55296 || r > 56319 || u + 1 === a || (o = i.charCodeAt(u + 1)) < 56320 || o > 57343 ? t ? i.charAt(u) : r : t ? i.slice(u, u + 2) : o - 56320 + (r - 55296 << 10) + 65536;
            };
          },
          Qe = {
            codeAt: qe$1(!1),
            charAt: qe$1(!0)
          },
          Je = Qe.charAt,
          Ze = function Ze(t, e, n) {
            return e + (n ? Je(t, e).length : 1);
          },
          tn = function tn(t, e) {
            var n = t.exec;
            if ("function" == typeof n) {
              var r = n.call(t, e);
              if ("object" != _typeof2(r)) throw TypeError("RegExp exec method returned something other than an Object or null");
              return r;
            }
            if ("RegExp" !== s(t)) throw TypeError("RegExp#exec called on incompatible receiver");
            return Me$1.call(t, e);
          },
          en = [].push,
          nn = Math.min,
          rn = !o(function () {
            return !RegExp(4294967295, "y");
          });
        Ge("split", 2, function (t, e, n) {
          var r;
          return r = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function (t, n) {
            var r = String(p(this)),
              o = void 0 === n ? 4294967295 : n >>> 0;
            if (0 === o) return [];
            if (void 0 === t) return [r];
            if (!Xe(t)) return e.call(r, t, o);
            for (var i, u, a, c = [], l = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), f = 0, s = new RegExp(t.source, l + "g"); (i = Me$1.call(s, r)) && !((u = s.lastIndex) > f && (c.push(r.slice(f, i.index)), i.length > 1 && i.index < r.length && en.apply(c, i.slice(1)), a = i[0].length, f = u, c.length >= o));) s.lastIndex === i.index && s.lastIndex++;
            return f === r.length ? !a && s.test("") || c.push("") : c.push(r.slice(f)), c.length > o ? c.slice(0, o) : c;
          } : "0".split(void 0, 0).length ? function (t, n) {
            return void 0 === t && 0 === n ? [] : e.call(this, t, n);
          } : e, [function (e, n) {
            var o = p(this),
              i = null == e ? void 0 : e[t];
            return void 0 !== i ? i.call(e, o, n) : r.call(String(o), e, n);
          }, function (t, o) {
            var i = n(r, t, this, o, r !== e);
            if (i.done) return i.value;
            var u = A$1(t),
              a = String(this),
              c = function (t, e) {
                var n,
                  r = A$1(t).constructor;
                return void 0 === r || null == (n = A$1(r)[Ke$1]) ? e : Ve$1(n);
              }(u, RegExp),
              l = u.unicode,
              f = (u.ignoreCase ? "i" : "") + (u.multiline ? "m" : "") + (u.unicode ? "u" : "") + (rn ? "y" : "g"),
              s = new c(rn ? u : "^(?:" + u.source + ")", f),
              d = void 0 === o ? 4294967295 : o >>> 0;
            if (0 === d) return [];
            if (0 === a.length) return null === tn(s, a) ? [a] : [];
            for (var v = 0, p = 0, g = []; p < a.length;) {
              s.lastIndex = rn ? p : 0;
              var h,
                y = tn(s, rn ? a : a.slice(p));
              if (null === y || (h = nn(at(s.lastIndex + (rn ? 0 : p)), a.length)) === v) p = Ze(a, p, l);else {
                if (g.push(a.slice(v, p)), g.length === d) return g;
                for (var m = 1; m <= y.length - 1; m++) if (g.push(y[m]), g.length === d) return g;
                p = v = h;
              }
            }
            return g.push(a.slice(v)), g;
          }];
        }, !rn);
        var on = "\t\n\x0B\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF",
          un = "[" + on + "]",
          an = RegExp("^" + un + un + "*"),
          cn = RegExp(un + un + "*$"),
          ln = function ln(t) {
            return function (e) {
              var n = String(p(e));
              return 1 & t && (n = n.replace(an, "")), 2 & t && (n = n.replace(cn, "")), n;
            };
          },
          fn = {
            start: ln(1),
            end: ln(2),
            trim: ln(3)
          },
          sn = fn.trim;
        It$1({
          target: "String",
          proto: !0,
          forced: function (t) {
            return o(function () {
              return !!on[t]() || "​᠎" != "​᠎"[t]() || on[t].name !== t;
            });
          }("trim")
        }, {
          trim: function trim() {
            return sn(this);
          }
        });
        var dn = de$1("slice"),
          vn = Mt$1("slice", {
            ACCESSORS: !0,
            0: 0,
            1: 2
          }),
          pn = ne("species"),
          gn = [].slice,
          hn = Math.max;
        It$1({
          target: "Array",
          proto: !0,
          forced: !dn || !vn
        }, {
          slice: function slice(t, e) {
            var n,
              r,
              o,
              i = g(this),
              u = at(i.length),
              a = ft$1(t, u),
              c = ft$1(void 0 === e ? u : e, u);
            if (qt$1(i) && ("function" != typeof (n = i.constructor) || n !== Array && !qt$1(n.prototype) ? h(n) && null === (n = n[pn]) && (n = void 0) : n = void 0, n === Array || void 0 === n)) return gn.call(i, a, c);
            for (r = new (void 0 === n ? Array : n)(hn(c - a, 0)), o = 0; a < c; a++, o++) a in i && ie(r, o, i[a]);
            return r.length = o, r;
          }
        });
        var yn = Object.keys || function (t) {
            return pt$1(t, gt$1);
          },
          mn = o(function () {
            yn(1);
          });
        It$1({
          target: "Object",
          stat: !0,
          forced: mn
        }, {
          keys: function keys(t) {
            return yn(Kt$1(t));
          }
        });
        var Sn,
          xn = function xn(t) {
            if (Xe(t)) throw TypeError("The method doesn't accept regular expressions");
            return t;
          },
          bn = ne("match"),
          En = T.f,
          wn = "".startsWith,
          On = Math.min,
          Tn = function (t) {
            var e = /./;
            try {
              "/./"[t](e);
            } catch (n) {
              try {
                return e[bn] = !1, "/./"[t](e);
              } catch (t) {}
            }
            return !1;
          }("startsWith"),
          An = !(Tn || (Sn = En(String.prototype, "startsWith"), !Sn || Sn.writable));
        function kn(t) {
          return (kn = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (t) {
            return _typeof2(t);
          } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof2(t);
          })(t);
        }
        It$1({
          target: "String",
          proto: !0,
          forced: !An && !Tn
        }, {
          startsWith: function startsWith(t) {
            var e = String(p(this));
            xn(t);
            var n = at(On(arguments.length > 1 ? arguments[1] : void 0, e.length)),
              r = String(t);
            return wn ? wn.call(e, r, n) : e.slice(n, n + r.length) === r;
          }
        });
        var jn = function jn(t) {
            return "string" == typeof t;
          },
          Mn = function Mn(t) {
            return null !== t && "object" === kn(t);
          },
          Vn = function () {
            function t() {
              Wt$1(this, t);
            }
            return $t$1(t, null, [{
              key: "isWindow",
              value: function value(t) {
                return t === window;
              }
            }, {
              key: "addEventListener",
              value: function value(t, e, n) {
                var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                t && e && n && t.addEventListener(e, n, r);
              }
            }, {
              key: "removeEventListener",
              value: function value(t, e, n) {
                var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                t && e && n && t.removeEventListener(e, n, r);
              }
            }, {
              key: "triggerDragEvent",
              value: function value(e, n) {
                var r = !1,
                  o = function o(t) {
                    var e;
                    null === (e = n.drag) || void 0 === e || e.call(n, t);
                  },
                  i = function e(i) {
                    var u;
                    t.removeEventListener(document, "mousemove", o), t.removeEventListener(document, "mouseup", e), document.onselectstart = null, document.ondragstart = null, r = !1, null === (u = n.end) || void 0 === u || u.call(n, i);
                  };
                t.addEventListener(e, "mousedown", function (e) {
                  var u;
                  r || (document.onselectstart = function () {
                    return !1;
                  }, document.ondragstart = function () {
                    return !1;
                  }, t.addEventListener(document, "mousemove", o), t.addEventListener(document, "mouseup", i), r = !0, null === (u = n.start) || void 0 === u || u.call(n, e));
                });
              }
            }, {
              key: "getBoundingClientRect",
              value: function value(t) {
                return t && Mn(t) && 1 === t.nodeType ? t.getBoundingClientRect() : null;
              }
            }, {
              key: "hasClass",
              value: function value(t, e) {
                return !!(t && Mn(t) && jn(e) && 1 === t.nodeType) && t.classList.contains(e.trim());
              }
            }, {
              key: "addClass",
              value: function value(e, n) {
                if (e && Mn(e) && jn(n) && 1 === e.nodeType && (n = n.trim(), !t.hasClass(e, n))) {
                  var r = e.className;
                  e.className = r ? r + " " + n : n;
                }
              }
            }, {
              key: "removeClass",
              value: function value(t, e) {
                if (t && Mn(t) && jn(e) && 1 === t.nodeType && "string" == typeof t.className) {
                  e = e.trim();
                  for (var n = t.className.trim().split(" "), r = n.length - 1; r >= 0; r--) n[r] = n[r].trim(), n[r] && n[r] !== e || n.splice(r, 1);
                  t.className = n.join(" ");
                }
              }
            }, {
              key: "toggleClass",
              value: function value(t, e, n) {
                t && Mn(t) && jn(e) && 1 === t.nodeType && t.classList.toggle(e, n);
              }
            }, {
              key: "replaceClass",
              value: function value(e, n, r) {
                e && Mn(e) && jn(n) && jn(r) && 1 === e.nodeType && (n = n.trim(), r = r.trim(), t.removeClass(e, n), t.addClass(e, r));
              }
            }, {
              key: "getScrollTop",
              value: function value(t) {
                var e = "scrollTop" in t ? t.scrollTop : t.pageYOffset;
                return Math.max(e, 0);
              }
            }, {
              key: "setScrollTop",
              value: function value(t, e) {
                "scrollTop" in t ? t.scrollTop = e : t.scrollTo(t.scrollX, e);
              }
            }, {
              key: "getRootScrollTop",
              value: function value() {
                return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
              }
            }, {
              key: "setRootScrollTop",
              value: function value(e) {
                t.setScrollTop(window, e), t.setScrollTop(document.body, e);
              }
            }, {
              key: "getElementTop",
              value: function value(e, n) {
                if (t.isWindow(e)) return 0;
                var r = n ? t.getScrollTop(n) : t.getRootScrollTop();
                return e.getBoundingClientRect().top + r;
              }
            }, {
              key: "getVisibleHeight",
              value: function value(e) {
                return t.isWindow(e) ? e.innerHeight : e.getBoundingClientRect().height;
              }
            }, {
              key: "isHidden",
              value: function value(t) {
                if (!t) return !1;
                var e = window.getComputedStyle(t),
                  n = "none" === e.display,
                  r = null === t.offsetParent && "fixed" !== e.position;
                return n || r;
              }
            }, {
              key: "triggerEvent",
              value: function value(t, e) {
                if ("createEvent" in document) {
                  var n = document.createEvent("HTMLEvents");
                  n.initEvent(e, !1, !0), t.dispatchEvent(n);
                }
              }
            }, {
              key: "calcAngle",
              value: function value(t, e) {
                var n = t.getBoundingClientRect(),
                  r = n.left + n.width / 2,
                  o = n.top + n.height / 2,
                  i = Math.abs(r - e.clientX),
                  u = Math.abs(o - e.clientY),
                  a = u / Math.sqrt(Math.pow(i, 2) + Math.pow(u, 2)),
                  c = Math.acos(a),
                  l = Math.floor(180 / (Math.PI / c));
                return e.clientX > r && e.clientY > o && (l = 180 - l), e.clientX == r && e.clientY > o && (l = 180), e.clientX > r && e.clientY == o && (l = 90), e.clientX < r && e.clientY > o && (l = 180 + l), e.clientX < r && e.clientY == o && (l = 270), e.clientX < r && e.clientY < o && (l = 360 - l), l;
              }
            }, {
              key: "querySelector",
              value: function value(t, e) {
                return e ? e.querySelector(t) : document.querySelector(t);
              }
            }, {
              key: "createElement",
              value: function value(t) {
                for (var e = document.createElement(t), n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                for (var i = 0; i < r.length; i++) r[i] && e.classList.add(r[i]);
                return e;
              }
            }, {
              key: "appendChild",
              value: function value(t) {
                for (var e = 0; e < (arguments.length <= 1 ? 0 : arguments.length - 1); e++) t.appendChild(e + 1 < 1 || arguments.length <= e + 1 ? void 0 : arguments[e + 1]);
              }
            }, {
              key: "getWindow",
              value: function value(t) {
                if ("[object Window]" !== t.toString()) {
                  var e = t.ownerDocument;
                  return e && e.defaultView || window;
                }
                return t;
              }
            }, {
              key: "isElement",
              value: function value(t) {
                return t instanceof this.getWindow(t).Element || t instanceof Element;
              }
            }, {
              key: "isHTMLElement",
              value: function value(t) {
                return t instanceof this.getWindow(t).HTMLElement || t instanceof HTMLElement;
              }
            }, {
              key: "isShadowRoot",
              value: function value(t) {
                return "undefined" != typeof ShadowRoot && (t instanceof this.getWindow(t).ShadowRoot || t instanceof ShadowRoot);
              }
            }, {
              key: "getWindowScroll",
              value: function value(t) {
                var e = this.getWindow(t);
                return {
                  scrollLeft: e.pageXOffset || 0,
                  scrollTop: e.pageYOffset || 0
                };
              }
            }]), t;
          }(),
          Kn = Math.floor,
          qn = "".replace,
          Qn = /\$([$&'`]|\d\d?|<[^>]*>)/g,
          Jn = /\$([$&'`]|\d\d?)/g,
          Zn = function Zn(t, e, n, r, o, i) {
            var u = n + t.length,
              a = r.length,
              c = Jn;
            return void 0 !== o && (o = Kt$1(o), c = Qn), qn.call(i, c, function (i, c) {
              var l;
              switch (c.charAt(0)) {
                case "$":
                  return "$";
                case "&":
                  return t;
                case "`":
                  return e.slice(0, n);
                case "'":
                  return e.slice(u);
                case "<":
                  l = o[c.slice(1, -1)];
                  break;
                default:
                  var f = +c;
                  if (0 === f) return i;
                  if (f > a) {
                    var s = Kn(f / 10);
                    return 0 === s ? i : s <= a ? void 0 === r[s - 1] ? c.charAt(1) : r[s - 1] + c.charAt(1) : i;
                  }
                  l = r[f - 1];
              }
              return void 0 === l ? "" : l;
            });
          },
          tr = Math.max,
          er = Math.min;
        Ge("replace", 2, function (t, e, n, r) {
          var o = r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
            i = r.REPLACE_KEEPS_$0,
            u = o ? "$" : "$0";
          return [function (n, r) {
            var o = p(this),
              i = null == n ? void 0 : n[t];
            return void 0 !== i ? i.call(n, o, r) : e.call(String(o), n, r);
          }, function (t, r) {
            if (!o && i || "string" == typeof r && -1 === r.indexOf(u)) {
              var a = n(e, t, this, r);
              if (a.done) return a.value;
            }
            var c = A$1(t),
              l = String(this),
              f = "function" == typeof r;
            f || (r = String(r));
            var s = c.global;
            if (s) {
              var d = c.unicode;
              c.lastIndex = 0;
            }
            for (var v = [];;) {
              var p = tn(c, l);
              if (null === p) break;
              if (v.push(p), !s) break;
              "" === String(p[0]) && (c.lastIndex = Ze(l, at(c.lastIndex), d));
            }
            for (var g, h = "", y = 0, m = 0; m < v.length; m++) {
              p = v[m];
              for (var S = String(p[0]), x = tr(er(it$1(p.index), l.length), 0), b = [], E = 1; E < p.length; E++) b.push(void 0 === (g = p[E]) ? g : String(g));
              var w = p.groups;
              if (f) {
                var O = [S].concat(b, x, l);
                void 0 !== w && O.push(w);
                var T = String(r.apply(void 0, O));
              } else T = Zn(S, l, x, b, w, r);
              x >= y && (h += l.slice(y, x) + T, y = x + S.length);
            }
            return h + l.slice(y);
          }];
        });
        (function () {
          function t() {
            Wt$1(this, t);
          }
          return $t$1(t, null, [{
            key: "camelize",
            value: function value(t) {
              return t.replace(/-(\w)/g, function (t, e) {
                return e ? e.toUpperCase() : "";
              });
            }
          }, {
            key: "capitalize",
            value: function value(t) {
              return t.charAt(0).toUpperCase() + t.slice(1);
            }
          }]), t;
        })();
        (function () {
          function t() {
            Wt$1(this, t);
          }
          return $t$1(t, null, [{
            key: "_clone",
            value: function value() {}
          }]), t;
        })();
        var or = ne("isConcatSpreadable"),
          ir = fe$1 >= 51 || !o(function () {
            var t = [];
            return t[or] = !1, t.concat()[0] !== t;
          }),
          ur = de$1("concat"),
          ar = function ar(t) {
            if (!h(t)) return !1;
            var e = t[or];
            return void 0 !== e ? !!e : qt$1(t);
          };
        It$1({
          target: "Array",
          proto: !0,
          forced: !ir || !ur
        }, {
          concat: function concat(t) {
            var e,
              n,
              r,
              o,
              i,
              u = Kt$1(this),
              a = oe(u, 0),
              c = 0;
            for (e = -1, r = arguments.length; e < r; e++) if (ar(i = -1 === e ? u : arguments[e])) {
              if (c + (o = at(i.length)) > 9007199254740991) throw TypeError("Maximum allowed index exceeded");
              for (n = 0; n < o; n++, c++) n in i && ie(a, c, i[n]);
            } else {
              if (c >= 9007199254740991) throw TypeError("Maximum allowed index exceeded");
              ie(a, c++, i);
            }
            return a.length = c, a;
          }
        });
        var cr,
          lr = function lr(t, e, n) {
            if (Ve$1(t), void 0 === e) return t;
            switch (n) {
              case 0:
                return function () {
                  return t.call(e);
                };
              case 1:
                return function (n) {
                  return t.call(e, n);
                };
              case 2:
                return function (n, r) {
                  return t.call(e, n, r);
                };
              case 3:
                return function (n, r, o) {
                  return t.call(e, n, r, o);
                };
            }
            return function () {
              return t.apply(e, arguments);
            };
          },
          fr = [].push,
          sr = function sr(t) {
            var e = 1 == t,
              n = 2 == t,
              r = 3 == t,
              o = 4 == t,
              i = 6 == t,
              u = 7 == t,
              a = 5 == t || i;
            return function (c, l, f, s) {
              for (var d, p, g = Kt$1(c), h = v(g), y = lr(l, f, 3), m = at(h.length), S = 0, x = s || oe, b = e ? x(c, m) : n || u ? x(c, 0) : void 0; m > S; S++) if ((a || S in h) && (p = y(d = h[S], S, g), t)) if (e) b[S] = p;else if (p) switch (t) {
                case 3:
                  return !0;
                case 5:
                  return d;
                case 6:
                  return S;
                case 2:
                  fr.call(b, d);
              } else switch (t) {
                case 4:
                  return !1;
                case 7:
                  fr.call(b, d);
              }
              return i ? -1 : r || o ? o : b;
            };
          },
          dr = {
            forEach: sr(0),
            map: sr(1),
            filter: sr(2),
            some: sr(3),
            every: sr(4),
            find: sr(5),
            findIndex: sr(6),
            filterOut: sr(7)
          },
          vr = i ? Object.defineProperties : function (t, e) {
            A$1(t);
            for (var n, r = yn(e), o = r.length, i = 0; o > i;) R.f(t, n = r[i++], e[n]);
            return t;
          },
          pr = nt("document", "documentElement"),
          gr = Y("IE_PROTO"),
          hr = function hr() {},
          yr = function yr(t) {
            return "<script>" + t + "<\/script>";
          },
          _mr = function mr() {
            try {
              cr = document.domain && new ActiveXObject("htmlfile");
            } catch (t) {}
            var t, e;
            _mr = cr ? function (t) {
              t.write(yr("")), t.close();
              var e = t.parentWindow.Object;
              return t = null, e;
            }(cr) : ((e = E("iframe")).style.display = "none", pr.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write(yr("document.F=Object")), t.close(), t.F);
            for (var n = gt$1.length; n--;) delete _mr.prototype[gt$1[n]];
            return _mr();
          };
        G[gr] = !0;
        var Sr = Object.create || function (t, e) {
            var n;
            return null !== t ? (hr.prototype = A$1(t), n = new hr(), hr.prototype = null, n[gr] = t) : n = _mr(), void 0 === e ? n : vr(n, e);
          },
          xr = ne("unscopables"),
          br = Array.prototype;
        null == br[xr] && R.f(br, xr, {
          configurable: !0,
          value: Sr(null)
        });
        var Er = function Er(t) {
            br[xr][t] = !0;
          },
          wr = dr.find,
          Or = !0,
          Tr = Mt$1("find");
        "find" in [] && Array(1).find(function () {
          Or = !1;
        }), It$1({
          target: "Array",
          proto: !0,
          forced: Or || !Tr
        }, {
          find: function find(t) {
            return wr(this, t, arguments.length > 1 ? arguments[1] : void 0);
          }
        }), Er("find");
        var Ar = dr.findIndex,
          kr = !0,
          Rr = Mt$1("findIndex");
        "findIndex" in [] && Array(1).findIndex(function () {
          kr = !1;
        }), It$1({
          target: "Array",
          proto: !0,
          forced: kr || !Rr
        }, {
          findIndex: function findIndex(t) {
            return Ar(this, t, arguments.length > 1 ? arguments[1] : void 0);
          }
        }), Er("findIndex");
        var _Ir = function Ir(t, e, n, r, o, i, u, a) {
            for (var c, l = o, f = 0, s = !!u && lr(u, a, 3); f < r;) {
              if (f in n) {
                if (c = s ? s(n[f], f, e) : n[f], i > 0 && qt$1(c)) l = _Ir(t, e, c, at(c.length), l, i - 1) - 1;else {
                  if (l >= 9007199254740991) throw TypeError("Exceed the acceptable array length");
                  t[l] = c;
                }
                l++;
              }
              f++;
            }
            return l;
          },
          jr = _Ir;
        It$1({
          target: "Array",
          proto: !0
        }, {
          flat: function flat() {
            var t = arguments.length ? arguments[0] : void 0,
              e = Kt$1(this),
              n = at(e.length),
              r = oe(e, 0);
            return r.length = jr(r, e, e, n, 0, void 0 === t ? 1 : it$1(t)), r;
          }
        });
        var Cr = function Cr(t) {
            var e = t.return;
            if (void 0 !== e) return A$1(e.call(t)).value;
          },
          Lr = function Lr(t, e, n, r) {
            try {
              return r ? e(A$1(n)[0], n[1]) : e(n);
            } catch (e) {
              throw Cr(t), e;
            }
          },
          Pr = {},
          Mr = ne("iterator"),
          _r = Array.prototype,
          Dr = function Dr(t) {
            return void 0 !== t && (Pr.Array === t || _r[Mr] === t);
          },
          Ur = ne("iterator"),
          Nr = function Nr(t) {
            if (null != t) return t[Ur] || t["@@iterator"] || Pr[be$1(t)];
          },
          Fr = ne("iterator"),
          Wr = !1;
        try {
          var zr = 0,
            $r = {
              next: function next() {
                return {
                  done: !!zr++
                };
              },
              return: function _return() {
                Wr = !0;
              }
            };
          $r[Fr] = function () {
            return this;
          }, Array.from($r, function () {
            throw 2;
          });
        } catch (t) {}
        var Br = function Br(t, e) {
            if (!Wr) return !1;
            var n = !1;
            try {
              var r = {};
              r[Fr] = function () {
                return {
                  next: function next() {
                    return {
                      done: n = !0
                    };
                  }
                };
              }, t(r);
            } catch (t) {}
            return n;
          },
          Yr = !Br(function (t) {
            Array.from(t);
          });
        It$1({
          target: "Array",
          stat: !0,
          forced: Yr
        }, {
          from: function from(t) {
            var e,
              n,
              r,
              o,
              i,
              u,
              a = Kt$1(t),
              c = "function" == typeof this ? this : Array,
              l = arguments.length,
              f = l > 1 ? arguments[1] : void 0,
              s = void 0 !== f,
              d = Nr(a),
              v = 0;
            if (s && (f = lr(f, l > 2 ? arguments[2] : void 0, 2)), null == d || c == Array && Dr(d)) for (n = new c(e = at(a.length)); e > v; v++) u = s ? f(a[v], v) : a[v], ie(n, v, u);else for (i = (o = d.call(a)).next, n = new c(); !(r = i.call(o)).done; v++) u = s ? Lr(o, f, [r.value, v], !0) : r.value, ie(n, v, u);
            return n.length = v, n;
          }
        });
        var Gr = function Gr(t) {
            return function (e, n, r, o) {
              Ve$1(n);
              var i = Kt$1(e),
                u = v(i),
                a = at(i.length),
                c = t ? a - 1 : 0,
                l = t ? -1 : 1;
              if (r < 2) for (;;) {
                if (c in u) {
                  o = u[c], c += l;
                  break;
                }
                if (c += l, t ? c < 0 : a <= c) throw TypeError("Reduce of empty array with no initial value");
              }
              for (; t ? c >= 0 : a > c; c += l) c in u && (o = n(o, u[c], c, i));
              return o;
            };
          },
          Hr = {
            left: Gr(!1),
            right: Gr(!0)
          },
          Xr = "process" == s(r.process),
          Vr = Hr.left,
          Kr = jt$1("reduce"),
          qr = Mt$1("reduce", {
            1: 0
          });
        It$1({
          target: "Array",
          proto: !0,
          forced: !Kr || !qr || !Xr && fe$1 > 79 && fe$1 < 83
        }, {
          reduce: function reduce(t) {
            return Vr(this, t, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
          }
        }), Er("flat");
        var Qr,
          Jr,
          Zr,
          to$1 = !o(function () {
            return Object.isExtensible(Object.preventExtensions({}));
          }),
          eo$1 = e(function (t) {
            var e = R.f,
              n = $("meta"),
              r = 0,
              o = Object.isExtensible || function () {
                return !0;
              },
              i = function i(t) {
                e(t, n, {
                  value: {
                    objectID: "O" + ++r,
                    weakData: {}
                  }
                });
              },
              u = t.exports = {
                REQUIRED: !1,
                fastKey: function fastKey(t, e) {
                  if (!h(t)) return "symbol" == _typeof2(t) ? t : ("string" == typeof t ? "S" : "P") + t;
                  if (!S(t, n)) {
                    if (!o(t)) return "F";
                    if (!e) return "E";
                    i(t);
                  }
                  return t[n].objectID;
                },
                getWeakData: function getWeakData(t, e) {
                  if (!S(t, n)) {
                    if (!o(t)) return !0;
                    if (!e) return !1;
                    i(t);
                  }
                  return t[n].weakData;
                },
                onFreeze: function onFreeze(t) {
                  return to$1 && u.REQUIRED && o(t) && !S(t, n) && i(t), t;
                }
              };
            G[n] = !0;
          }),
          no$1 = function no$1(t, e) {
            this.stopped = t, this.result = e;
          },
          ro$1 = function ro$1(t, e, n) {
            var r,
              o,
              i,
              u,
              a,
              c,
              l,
              f = n && n.that,
              s = !(!n || !n.AS_ENTRIES),
              d = !(!n || !n.IS_ITERATOR),
              v = !(!n || !n.INTERRUPTED),
              p = lr(e, f, 1 + s + v),
              g = function g(t) {
                return r && Cr(r), new no$1(!0, t);
              },
              h = function h(t) {
                return s ? (A$1(t), v ? p(t[0], t[1], g) : p(t[0], t[1])) : v ? p(t, g) : p(t);
              };
            if (d) r = t;else {
              if ("function" != typeof (o = Nr(t))) throw TypeError("Target is not iterable");
              if (Dr(o)) {
                for (i = 0, u = at(t.length); u > i; i++) if ((a = h(t[i])) && a instanceof no$1) return a;
                return new no$1(!1);
              }
              r = o.call(t);
            }
            for (c = r.next; !(l = c.call(r)).done;) {
              try {
                a = h(l.value);
              } catch (t) {
                throw Cr(r), t;
              }
              if ("object" == _typeof2(a) && a && a instanceof no$1) return a;
            }
            return new no$1(!1);
          },
          oo$1 = function oo$1(t, e, n) {
            if (!(t instanceof e)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
            return t;
          },
          io$1 = R.f,
          uo$1 = ne("toStringTag"),
          ao$1 = function ao$1(t, e, n) {
            t && !S(t = n ? t : t.prototype, uo$1) && io$1(t, uo$1, {
              configurable: !0,
              value: e
            });
          },
          co$1 = Object.setPrototypeOf || ("__proto__" in {} ? function () {
            var t,
              e = !1,
              n = {};
            try {
              (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), e = n instanceof Array;
            } catch (t) {}
            return function (n, r) {
              return A$1(n), function (t) {
                if (!h(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype");
              }(r), e ? t.call(n, r) : n.__proto__ = r, n;
            };
          }() : void 0),
          lo$1 = function lo$1(t, e, n) {
            for (var r in e) Z(t, r, e[r], n);
            return t;
          },
          fo$1 = !o(function () {
            function t() {}
            return t.prototype.constructor = null, Object.getPrototypeOf(new t()) !== t.prototype;
          }),
          so$1 = Y("IE_PROTO"),
          vo$1 = Object.prototype,
          po$1 = fo$1 ? Object.getPrototypeOf : function (t) {
            return t = Kt$1(t), S(t, so$1) ? t[so$1] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? vo$1 : null;
          },
          go$1 = ne("iterator"),
          ho$1 = !1;
        [].keys && ("next" in (Zr = [].keys()) ? (Jr = po$1(po$1(Zr))) !== Object.prototype && (Qr = Jr) : ho$1 = !0), (null == Qr || o(function () {
          var t = {};
          return Qr[go$1].call(t) !== t;
        })) && (Qr = {}), S(Qr, go$1) || I(Qr, go$1, function () {
          return this;
        });
        var yo$1 = {
            IteratorPrototype: Qr,
            BUGGY_SAFARI_ITERATORS: ho$1
          },
          mo$1 = yo$1.IteratorPrototype,
          So$1 = function So$1() {
            return this;
          },
          xo = yo$1.IteratorPrototype,
          bo$1 = yo$1.BUGGY_SAFARI_ITERATORS,
          Eo$1 = ne("iterator"),
          wo$1 = function wo$1() {
            return this;
          },
          Oo$1 = function Oo$1(t, e, n, r, o, i, u) {
            !function (t, e, n) {
              var r = e + " Iterator";
              t.prototype = Sr(mo$1, {
                next: l(1, n)
              }), ao$1(t, r, !1), Pr[r] = So$1;
            }(n, e, r);
            var a,
              c,
              f,
              s = function s(t) {
                if (t === o && h) return h;
                if (!bo$1 && t in p) return p[t];
                switch (t) {
                  case "keys":
                  case "values":
                  case "entries":
                    return function () {
                      return new n(this, t);
                    };
                }
                return function () {
                  return new n(this);
                };
              },
              d = e + " Iterator",
              v = !1,
              p = t.prototype,
              g = p[Eo$1] || p["@@iterator"] || o && p[o],
              h = !bo$1 && g || s(o),
              y = "Array" == e && p.entries || g;
            if (y && (a = po$1(y.call(new t())), xo !== Object.prototype && a.next && (po$1(a) !== xo && (co$1 ? co$1(a, xo) : "function" != typeof a[Eo$1] && I(a, Eo$1, wo$1)), ao$1(a, d, !0))), "values" == o && g && "values" !== g.name && (v = !0, h = function h() {
              return g.call(this);
            }), p[Eo$1] !== h && I(p, Eo$1, h), Pr[e] = h, o) if (c = {
              values: s("values"),
              keys: i ? h : s("keys"),
              entries: s("entries")
            }, u) for (f in c) (bo$1 || v || !(f in p)) && Z(p, f, c[f]);else It$1({
              target: e,
              proto: !0,
              forced: bo$1 || v
            }, c);
            return c;
          },
          To$1 = ne("species"),
          Ao$1 = R.f,
          ko$1 = eo$1.fastKey,
          Ro$1 = J.set,
          Io$1 = J.getterFor;
        !function (t, e, n) {
          var i = -1 !== t.indexOf("Map"),
            u = -1 !== t.indexOf("Weak"),
            a = i ? "set" : "add",
            c = r[t],
            l = c && c.prototype,
            f = c,
            s = {},
            d = function d(t) {
              var e = l[t];
              Z(l, t, "add" == t ? function (t) {
                return e.call(this, 0 === t ? 0 : t), this;
              } : "delete" == t ? function (t) {
                return !(u && !h(t)) && e.call(this, 0 === t ? 0 : t);
              } : "get" == t ? function (t) {
                return u && !h(t) ? void 0 : e.call(this, 0 === t ? 0 : t);
              } : "has" == t ? function (t) {
                return !(u && !h(t)) && e.call(this, 0 === t ? 0 : t);
              } : function (t, n) {
                return e.call(this, 0 === t ? 0 : t, n), this;
              });
            };
          if (kt$1(t, "function" != typeof c || !(u || l.forEach && !o(function () {
            new c().entries().next();
          })))) f = n.getConstructor(e, t, i, a), eo$1.REQUIRED = !0;else if (kt$1(t, !0)) {
            var v = new f(),
              p = v[a](u ? {} : -0, 1) != v,
              g = o(function () {
                v.has(1);
              }),
              y = Br(function (t) {
                new c(t);
              }),
              m = !u && o(function () {
                for (var t = new c(), e = 5; e--;) t[a](e, e);
                return !t.has(-0);
              });
            y || ((f = e(function (e, n) {
              oo$1(e, f, t);
              var r = function (t, e, n) {
                var r, o;
                return co$1 && "function" == typeof (r = e.constructor) && r !== n && h(o = r.prototype) && o !== n.prototype && co$1(t, o), t;
              }(new c(), e, f);
              return null != n && ro$1(n, r[a], {
                that: r,
                AS_ENTRIES: i
              }), r;
            })).prototype = l, l.constructor = f), (g || m) && (d("delete"), d("has"), i && d("get")), (m || p) && d(a), u && l.clear && delete l.clear;
          }
          s[t] = f, It$1({
            global: !0,
            forced: f != c
          }, s), ao$1(f, t), u || n.setStrong(f, t, i);
        }("Set", function (t) {
          return function () {
            return t(this, arguments.length ? arguments[0] : void 0);
          };
        }, {
          getConstructor: function getConstructor(t, e, n, r) {
            var o = t(function (t, u) {
                oo$1(t, o, e), Ro$1(t, {
                  type: e,
                  index: Sr(null),
                  first: void 0,
                  last: void 0,
                  size: 0
                }), i || (t.size = 0), null != u && ro$1(u, t[r], {
                  that: t,
                  AS_ENTRIES: n
                });
              }),
              u = Io$1(e),
              a = function a(t, e, n) {
                var r,
                  o,
                  a = u(t),
                  l = c(t, e);
                return l ? l.value = n : (a.last = l = {
                  index: o = ko$1(e, !0),
                  key: e,
                  value: n,
                  previous: r = a.last,
                  next: void 0,
                  removed: !1
                }, a.first || (a.first = l), r && (r.next = l), i ? a.size++ : t.size++, "F" !== o && (a.index[o] = l)), t;
              },
              c = function c(t, e) {
                var n,
                  r = u(t),
                  o = ko$1(e);
                if ("F" !== o) return r.index[o];
                for (n = r.first; n; n = n.next) if (n.key == e) return n;
              };
            return lo$1(o.prototype, {
              clear: function clear() {
                for (var t = u(this), e = t.index, n = t.first; n;) n.removed = !0, n.previous && (n.previous = n.previous.next = void 0), delete e[n.index], n = n.next;
                t.first = t.last = void 0, i ? t.size = 0 : this.size = 0;
              },
              delete: function _delete(t) {
                var e = this,
                  n = u(e),
                  r = c(e, t);
                if (r) {
                  var o = r.next,
                    a = r.previous;
                  delete n.index[r.index], r.removed = !0, a && (a.next = o), o && (o.previous = a), n.first == r && (n.first = o), n.last == r && (n.last = a), i ? n.size-- : e.size--;
                }
                return !!r;
              },
              forEach: function forEach(t) {
                for (var e, n = u(this), r = lr(t, arguments.length > 1 ? arguments[1] : void 0, 3); e = e ? e.next : n.first;) for (r(e.value, e.key, this); e && e.removed;) e = e.previous;
              },
              has: function has(t) {
                return !!c(this, t);
              }
            }), lo$1(o.prototype, n ? {
              get: function get(t) {
                var e = c(this, t);
                return e && e.value;
              },
              set: function set(t, e) {
                return a(this, 0 === t ? 0 : t, e);
              }
            } : {
              add: function add(t) {
                return a(this, t = 0 === t ? 0 : t, t);
              }
            }), i && Ao$1(o.prototype, "size", {
              get: function get() {
                return u(this).size;
              }
            }), o;
          },
          setStrong: function setStrong(t, e, n) {
            var r = e + " Iterator",
              o = Io$1(e),
              u = Io$1(r);
            Oo$1(t, e, function (t, e) {
              Ro$1(this, {
                type: r,
                target: t,
                state: o(t),
                kind: e,
                last: void 0
              });
            }, function () {
              for (var t = u(this), e = t.kind, n = t.last; n && n.removed;) n = n.previous;
              return t.target && (t.last = n = n ? n.next : t.state.first) ? "keys" == e ? {
                value: n.key,
                done: !1
              } : "values" == e ? {
                value: n.value,
                done: !1
              } : {
                value: [n.key, n.value],
                done: !1
              } : (t.target = void 0, {
                value: void 0,
                done: !0
              });
            }, n ? "entries" : "values", !n, !0), function (t) {
              var e = nt(t),
                n = R.f;
              i && e && !e[To$1] && n(e, To$1, {
                configurable: !0,
                get: function get() {
                  return this;
                }
              });
            }(e);
          }
        });
        var jo$1 = Qe.charAt,
          Co$1 = J.set,
          Lo$1 = J.getterFor("String Iterator");
        Oo$1(String, "String", function (t) {
          Co$1(this, {
            type: "String Iterator",
            string: String(t),
            index: 0
          });
        }, function () {
          var t,
            e = Lo$1(this),
            n = e.string,
            r = e.index;
          return r >= n.length ? {
            value: void 0,
            done: !0
          } : (t = jo$1(n, r), e.index += t.length, {
            value: t,
            done: !1
          });
        });
        var Po$1 = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0
          },
          Mo$1 = J.set,
          _o$1 = J.getterFor("Array Iterator"),
          Do$1 = Oo$1(Array, "Array", function (t, e) {
            Mo$1(this, {
              type: "Array Iterator",
              target: g(t),
              index: 0,
              kind: e
            });
          }, function () {
            var t = _o$1(this),
              e = t.target,
              n = t.kind,
              r = t.index++;
            return !e || r >= e.length ? (t.target = void 0, {
              value: void 0,
              done: !0
            }) : "keys" == n ? {
              value: r,
              done: !1
            } : "values" == n ? {
              value: e[r],
              done: !1
            } : {
              value: [r, e[r]],
              done: !1
            };
          }, "values");
        Pr.Arguments = Pr.Array, Er("keys"), Er("values"), Er("entries");
        var Uo$1 = ne("iterator"),
          No$1 = ne("toStringTag"),
          Fo$1 = Do$1.values;
        for (var Wo$1 in Po$1) {
          var zo$1 = r[Wo$1],
            $o$1 = zo$1 && zo$1.prototype;
          if ($o$1) {
            if ($o$1[Uo$1] !== Fo$1) try {
              I($o$1, Uo$1, Fo$1);
            } catch (t) {
              $o$1[Uo$1] = Fo$1;
            }
            if ($o$1[No$1] || I($o$1, No$1, Wo$1), Po$1[Wo$1]) for (var Bo$1 in Do$1) if ($o$1[Bo$1] !== Do$1[Bo$1]) try {
              I($o$1, Bo$1, Do$1[Bo$1]);
            } catch (t) {
              $o$1[Bo$1] = Do$1[Bo$1];
            }
          }
        }
        (function () {
          function t() {
            Wt$1(this, t);
          }
          return $t$1(t, null, [{
            key: "deduplicate",
            value: function value(t) {
              return Array.from(new Set(t));
            }
          }, {
            key: "flat",
            value: function value(e) {
              return e.reduce(function (e, n) {
                var r = Array.isArray(n) ? t.flat(n) : n;
                return e.concat(r);
              }, []);
            }
          }, {
            key: "find",
            value: function value(t, e) {
              return t.find(e);
            }
          }, {
            key: "findIndex",
            value: function value(t, e) {
              return t.findIndex(e);
            }
          }]), t;
        })();
        (function () {
          function t() {
            Wt$1(this, t);
          }
          return $t$1(t, null, [{
            key: "today",
            value: function value() {
              return new Date();
            }
          }]), t;
        })();
        (function () {
          function t() {
            Wt$1(this, t);
          }
          return $t$1(t, null, [{
            key: "range",
            value: function value(t, e, n) {
              return Math.min(Math.max(t, e), n);
            }
          }, {
            key: "clamp",
            value: function value(t, e, n) {
              return e < n ? t < e ? e : t > n ? n : t : t < n ? n : t > e ? e : t;
            }
          }]), t;
        })();

        /** Detect free variable `global` from Node.js. */
        var freeGlobal = (typeof global === "undefined" ? "undefined" : _typeof2(global)) == 'object' && global && global.Object === Object && global;

        /** Detect free variable `self`. */
        var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof2(self)) == 'object' && self && self.Object === Object && self;

        /** Used as a reference to the global object. */
        var root = freeGlobal || freeSelf || Function('return this')();

        /** Built-in value references. */
        var Symbol$1 = root.Symbol;

        /** Used for built-in method references. */
        var objectProto$9 = Object.prototype;

        /** Used to check objects for own properties. */
        var hasOwnProperty$7 = objectProto$9.hasOwnProperty;

        /**
         * Used to resolve the
         * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
         * of values.
         */
        var nativeObjectToString$1 = objectProto$9.toString;

        /** Built-in value references. */
        var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : undefined;

        /**
         * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
         *
         * @private
         * @param {*} value The value to query.
         * @returns {string} Returns the raw `toStringTag`.
         */
        function getRawTag(value) {
          var isOwn = hasOwnProperty$7.call(value, symToStringTag$1),
            tag = value[symToStringTag$1];
          try {
            value[symToStringTag$1] = undefined;
            var unmasked = true;
          } catch (e) {}
          var result = nativeObjectToString$1.call(value);
          if (unmasked) {
            if (isOwn) {
              value[symToStringTag$1] = tag;
            } else {
              delete value[symToStringTag$1];
            }
          }
          return result;
        }

        /** Used for built-in method references. */
        var objectProto$8 = Object.prototype;

        /**
         * Used to resolve the
         * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
         * of values.
         */
        var nativeObjectToString = objectProto$8.toString;

        /**
         * Converts `value` to a string using `Object.prototype.toString`.
         *
         * @private
         * @param {*} value The value to convert.
         * @returns {string} Returns the converted string.
         */
        function objectToString(value) {
          return nativeObjectToString.call(value);
        }

        /** `Object#toString` result references. */
        var nullTag = '[object Null]',
          undefinedTag = '[object Undefined]';

        /** Built-in value references. */
        var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;

        /**
         * The base implementation of `getTag` without fallbacks for buggy environments.
         *
         * @private
         * @param {*} value The value to query.
         * @returns {string} Returns the `toStringTag`.
         */
        function baseGetTag(value) {
          if (value == null) {
            return value === undefined ? undefinedTag : nullTag;
          }
          return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
        }

        /**
         * Checks if `value` is object-like. A value is object-like if it's not `null`
         * and has a `typeof` result of "object".
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
         * @example
         *
         * _.isObjectLike({});
         * // => true
         *
         * _.isObjectLike([1, 2, 3]);
         * // => true
         *
         * _.isObjectLike(_.noop);
         * // => false
         *
         * _.isObjectLike(null);
         * // => false
         */
        function isObjectLike(value) {
          return value != null && _typeof2(value) == 'object';
        }

        /**
         * Checks if `value` is classified as an `Array` object.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is an array, else `false`.
         * @example
         *
         * _.isArray([1, 2, 3]);
         * // => true
         *
         * _.isArray(document.body.children);
         * // => false
         *
         * _.isArray('abc');
         * // => false
         *
         * _.isArray(_.noop);
         * // => false
         */
        var isArray = Array.isArray;

        /**
         * Checks if `value` is the
         * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
         * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is an object, else `false`.
         * @example
         *
         * _.isObject({});
         * // => true
         *
         * _.isObject([1, 2, 3]);
         * // => true
         *
         * _.isObject(_.noop);
         * // => true
         *
         * _.isObject(null);
         * // => false
         */
        function isObject(value) {
          var type = _typeof2(value);
          return value != null && (type == 'object' || type == 'function');
        }

        /**
         * This method returns the first argument it receives.
         *
         * @static
         * @since 0.1.0
         * @memberOf _
         * @category Util
         * @param {*} value Any value.
         * @returns {*} Returns `value`.
         * @example
         *
         * var object = { 'a': 1 };
         *
         * console.log(_.identity(object) === object);
         * // => true
         */
        function identity(value) {
          return value;
        }

        /** `Object#toString` result references. */
        var asyncTag = '[object AsyncFunction]',
          funcTag$1 = '[object Function]',
          genTag = '[object GeneratorFunction]',
          proxyTag = '[object Proxy]';

        /**
         * Checks if `value` is classified as a `Function` object.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a function, else `false`.
         * @example
         *
         * _.isFunction(_);
         * // => true
         *
         * _.isFunction(/abc/);
         * // => false
         */
        function isFunction(value) {
          if (!isObject(value)) {
            return false;
          }
          // The use of `Object#toString` avoids issues with the `typeof` operator
          // in Safari 9 which returns 'object' for typed arrays and other constructors.
          var tag = baseGetTag(value);
          return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
        }

        /** Used to detect overreaching core-js shims. */
        var coreJsData = root['__core-js_shared__'];

        /** Used to detect methods masquerading as native. */
        var maskSrcKey = function () {
          var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
          return uid ? 'Symbol(src)_1.' + uid : '';
        }();

        /**
         * Checks if `func` has its source masked.
         *
         * @private
         * @param {Function} func The function to check.
         * @returns {boolean} Returns `true` if `func` is masked, else `false`.
         */
        function isMasked(func) {
          return !!maskSrcKey && maskSrcKey in func;
        }

        /** Used for built-in method references. */
        var funcProto$2 = Function.prototype;

        /** Used to resolve the decompiled source of functions. */
        var funcToString$2 = funcProto$2.toString;

        /**
         * Converts `func` to its source code.
         *
         * @private
         * @param {Function} func The function to convert.
         * @returns {string} Returns the source code.
         */
        function toSource(func) {
          if (func != null) {
            try {
              return funcToString$2.call(func);
            } catch (e) {}
            try {
              return func + '';
            } catch (e) {}
          }
          return '';
        }

        /**
         * Used to match `RegExp`
         * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
         */
        var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

        /** Used to detect host constructors (Safari). */
        var reIsHostCtor = /^\[object .+?Constructor\]$/;

        /** Used for built-in method references. */
        var funcProto$1 = Function.prototype,
          objectProto$7 = Object.prototype;

        /** Used to resolve the decompiled source of functions. */
        var funcToString$1 = funcProto$1.toString;

        /** Used to check objects for own properties. */
        var hasOwnProperty$6 = objectProto$7.hasOwnProperty;

        /** Used to detect if a method is native. */
        var reIsNative = RegExp('^' + funcToString$1.call(hasOwnProperty$6).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

        /**
         * The base implementation of `_.isNative` without bad shim checks.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a native function,
         *  else `false`.
         */
        function baseIsNative(value) {
          if (!isObject(value) || isMasked(value)) {
            return false;
          }
          var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
          return pattern.test(toSource(value));
        }

        /**
         * Gets the value at `key` of `object`.
         *
         * @private
         * @param {Object} [object] The object to query.
         * @param {string} key The key of the property to get.
         * @returns {*} Returns the property value.
         */
        function getValue(object, key) {
          return object == null ? undefined : object[key];
        }

        /**
         * Gets the native function at `key` of `object`.
         *
         * @private
         * @param {Object} object The object to query.
         * @param {string} key The key of the method to get.
         * @returns {*} Returns the function if it's native, else `undefined`.
         */
        function getNative(object, key) {
          var value = getValue(object, key);
          return baseIsNative(value) ? value : undefined;
        }

        /** Built-in value references. */
        var objectCreate = Object.create;

        /**
         * The base implementation of `_.create` without support for assigning
         * properties to the created object.
         *
         * @private
         * @param {Object} proto The object to inherit from.
         * @returns {Object} Returns the new object.
         */
        var baseCreate = function () {
          function object() {}
          return function (proto) {
            if (!isObject(proto)) {
              return {};
            }
            if (objectCreate) {
              return objectCreate(proto);
            }
            object.prototype = proto;
            var result = new object();
            object.prototype = undefined;
            return result;
          };
        }();

        /**
         * A faster alternative to `Function#apply`, this function invokes `func`
         * with the `this` binding of `thisArg` and the arguments of `args`.
         *
         * @private
         * @param {Function} func The function to invoke.
         * @param {*} thisArg The `this` binding of `func`.
         * @param {Array} args The arguments to invoke `func` with.
         * @returns {*} Returns the result of `func`.
         */
        function apply(func, thisArg, args) {
          switch (args.length) {
            case 0:
              return func.call(thisArg);
            case 1:
              return func.call(thisArg, args[0]);
            case 2:
              return func.call(thisArg, args[0], args[1]);
            case 3:
              return func.call(thisArg, args[0], args[1], args[2]);
          }
          return func.apply(thisArg, args);
        }

        /**
         * Copies the values of `source` to `array`.
         *
         * @private
         * @param {Array} source The array to copy values from.
         * @param {Array} [array=[]] The array to copy values to.
         * @returns {Array} Returns `array`.
         */
        function copyArray(source, array) {
          var index = -1,
            length = source.length;
          array || (array = Array(length));
          while (++index < length) {
            array[index] = source[index];
          }
          return array;
        }

        /** Used to detect hot functions by number of calls within a span of milliseconds. */
        var HOT_COUNT = 800,
          HOT_SPAN = 16;

        /* Built-in method references for those with the same name as other `lodash` methods. */
        var nativeNow = Date.now;

        /**
         * Creates a function that'll short out and invoke `identity` instead
         * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
         * milliseconds.
         *
         * @private
         * @param {Function} func The function to restrict.
         * @returns {Function} Returns the new shortable function.
         */
        function shortOut(func) {
          var count = 0,
            lastCalled = 0;
          return function () {
            var stamp = nativeNow(),
              remaining = HOT_SPAN - (stamp - lastCalled);
            lastCalled = stamp;
            if (remaining > 0) {
              if (++count >= HOT_COUNT) {
                return arguments[0];
              }
            } else {
              count = 0;
            }
            return func.apply(undefined, arguments);
          };
        }

        /**
         * Creates a function that returns `value`.
         *
         * @static
         * @memberOf _
         * @since 2.4.0
         * @category Util
         * @param {*} value The value to return from the new function.
         * @returns {Function} Returns the new constant function.
         * @example
         *
         * var objects = _.times(2, _.constant({ 'a': 1 }));
         *
         * console.log(objects);
         * // => [{ 'a': 1 }, { 'a': 1 }]
         *
         * console.log(objects[0] === objects[1]);
         * // => true
         */
        function constant(value) {
          return function () {
            return value;
          };
        }
        var defineProperty = function () {
          try {
            var func = getNative(Object, 'defineProperty');
            func({}, '', {});
            return func;
          } catch (e) {}
        }();

        /**
         * The base implementation of `setToString` without support for hot loop shorting.
         *
         * @private
         * @param {Function} func The function to modify.
         * @param {Function} string The `toString` result.
         * @returns {Function} Returns `func`.
         */
        var baseSetToString = !defineProperty ? identity : function (func, string) {
          return defineProperty(func, 'toString', {
            'configurable': true,
            'enumerable': false,
            'value': constant(string),
            'writable': true
          });
        };

        /**
         * Sets the `toString` method of `func` to return `string`.
         *
         * @private
         * @param {Function} func The function to modify.
         * @param {Function} string The `toString` result.
         * @returns {Function} Returns `func`.
         */
        var setToString = shortOut(baseSetToString);

        /** Used as references for various `Number` constants. */
        var MAX_SAFE_INTEGER$1 = 9007199254740991;

        /** Used to detect unsigned integer values. */
        var reIsUint = /^(?:0|[1-9]\d*)$/;

        /**
         * Checks if `value` is a valid array-like index.
         *
         * @private
         * @param {*} value The value to check.
         * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
         * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
         */
        function isIndex(value, length) {
          var type = _typeof2(value);
          length = length == null ? MAX_SAFE_INTEGER$1 : length;
          return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
        }

        /**
         * The base implementation of `assignValue` and `assignMergeValue` without
         * value checks.
         *
         * @private
         * @param {Object} object The object to modify.
         * @param {string} key The key of the property to assign.
         * @param {*} value The value to assign.
         */
        function baseAssignValue(object, key, value) {
          if (key == '__proto__' && defineProperty) {
            defineProperty(object, key, {
              'configurable': true,
              'enumerable': true,
              'value': value,
              'writable': true
            });
          } else {
            object[key] = value;
          }
        }

        /**
         * Performs a
         * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
         * comparison between two values to determine if they are equivalent.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to compare.
         * @param {*} other The other value to compare.
         * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
         * @example
         *
         * var object = { 'a': 1 };
         * var other = { 'a': 1 };
         *
         * _.eq(object, object);
         * // => true
         *
         * _.eq(object, other);
         * // => false
         *
         * _.eq('a', 'a');
         * // => true
         *
         * _.eq('a', Object('a'));
         * // => false
         *
         * _.eq(NaN, NaN);
         * // => true
         */
        function eq(value, other) {
          return value === other || value !== value && other !== other;
        }

        /** Used for built-in method references. */
        var objectProto$6 = Object.prototype;

        /** Used to check objects for own properties. */
        var hasOwnProperty$5 = objectProto$6.hasOwnProperty;

        /**
         * Assigns `value` to `key` of `object` if the existing value is not equivalent
         * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
         * for equality comparisons.
         *
         * @private
         * @param {Object} object The object to modify.
         * @param {string} key The key of the property to assign.
         * @param {*} value The value to assign.
         */
        function assignValue(object, key, value) {
          var objValue = object[key];
          if (!(hasOwnProperty$5.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
            baseAssignValue(object, key, value);
          }
        }

        /**
         * Copies properties of `source` to `object`.
         *
         * @private
         * @param {Object} source The object to copy properties from.
         * @param {Array} props The property identifiers to copy.
         * @param {Object} [object={}] The object to copy properties to.
         * @param {Function} [customizer] The function to customize copied values.
         * @returns {Object} Returns `object`.
         */
        function copyObject(source, props, object, customizer) {
          var isNew = !object;
          object || (object = {});
          var index = -1,
            length = props.length;
          while (++index < length) {
            var key = props[index];
            var newValue = undefined;
            if (newValue === undefined) {
              newValue = source[key];
            }
            if (isNew) {
              baseAssignValue(object, key, newValue);
            } else {
              assignValue(object, key, newValue);
            }
          }
          return object;
        }

        /* Built-in method references for those with the same name as other `lodash` methods. */
        var nativeMax = Math.max;

        /**
         * A specialized version of `baseRest` which transforms the rest array.
         *
         * @private
         * @param {Function} func The function to apply a rest parameter to.
         * @param {number} [start=func.length-1] The start position of the rest parameter.
         * @param {Function} transform The rest array transform.
         * @returns {Function} Returns the new function.
         */
        function overRest(func, start, transform) {
          start = nativeMax(start === undefined ? func.length - 1 : start, 0);
          return function () {
            var args = arguments,
              index = -1,
              length = nativeMax(args.length - start, 0),
              array = Array(length);
            while (++index < length) {
              array[index] = args[start + index];
            }
            index = -1;
            var otherArgs = Array(start + 1);
            while (++index < start) {
              otherArgs[index] = args[index];
            }
            otherArgs[start] = transform(array);
            return apply(func, this, otherArgs);
          };
        }

        /**
         * The base implementation of `_.rest` which doesn't validate or coerce arguments.
         *
         * @private
         * @param {Function} func The function to apply a rest parameter to.
         * @param {number} [start=func.length-1] The start position of the rest parameter.
         * @returns {Function} Returns the new function.
         */
        function baseRest(func, start) {
          return setToString(overRest(func, start, identity), func + '');
        }

        /** Used as references for various `Number` constants. */
        var MAX_SAFE_INTEGER = 9007199254740991;

        /**
         * Checks if `value` is a valid array-like length.
         *
         * **Note:** This method is loosely based on
         * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
         * @example
         *
         * _.isLength(3);
         * // => true
         *
         * _.isLength(Number.MIN_VALUE);
         * // => false
         *
         * _.isLength(Infinity);
         * // => false
         *
         * _.isLength('3');
         * // => false
         */
        function isLength(value) {
          return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
        }

        /**
         * Checks if `value` is array-like. A value is considered array-like if it's
         * not a function and has a `value.length` that's an integer greater than or
         * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
         * @example
         *
         * _.isArrayLike([1, 2, 3]);
         * // => true
         *
         * _.isArrayLike(document.body.children);
         * // => true
         *
         * _.isArrayLike('abc');
         * // => true
         *
         * _.isArrayLike(_.noop);
         * // => false
         */
        function isArrayLike(value) {
          return value != null && isLength(value.length) && !isFunction(value);
        }

        /**
         * Checks if the given arguments are from an iteratee call.
         *
         * @private
         * @param {*} value The potential iteratee value argument.
         * @param {*} index The potential iteratee index or key argument.
         * @param {*} object The potential iteratee object argument.
         * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
         *  else `false`.
         */
        function isIterateeCall(value, index, object) {
          if (!isObject(object)) {
            return false;
          }
          var type = _typeof2(index);
          if (type == 'number' ? isArrayLike(object) && isIndex(index, object.length) : type == 'string' && index in object) {
            return eq(object[index], value);
          }
          return false;
        }

        /**
         * Creates a function like `_.assign`.
         *
         * @private
         * @param {Function} assigner The function to assign values.
         * @returns {Function} Returns the new assigner function.
         */
        function createAssigner(assigner) {
          return baseRest(function (object, sources) {
            var index = -1,
              length = sources.length,
              customizer = length > 1 ? sources[length - 1] : undefined,
              guard = length > 2 ? sources[2] : undefined;
            customizer = assigner.length > 3 && typeof customizer == 'function' ? (length--, customizer) : undefined;
            if (guard && isIterateeCall(sources[0], sources[1], guard)) {
              customizer = length < 3 ? undefined : customizer;
              length = 1;
            }
            object = Object(object);
            while (++index < length) {
              var source = sources[index];
              if (source) {
                assigner(object, source, index, customizer);
              }
            }
            return object;
          });
        }

        /** Used for built-in method references. */
        var objectProto$5 = Object.prototype;

        /**
         * Checks if `value` is likely a prototype object.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
         */
        function isPrototype(value) {
          var Ctor = value && value.constructor,
            proto = typeof Ctor == 'function' && Ctor.prototype || objectProto$5;
          return value === proto;
        }

        /**
         * The base implementation of `_.times` without support for iteratee shorthands
         * or max array length checks.
         *
         * @private
         * @param {number} n The number of times to invoke `iteratee`.
         * @param {Function} iteratee The function invoked per iteration.
         * @returns {Array} Returns the array of results.
         */
        function baseTimes(n, iteratee) {
          var index = -1,
            result = Array(n);
          while (++index < n) {
            result[index] = iteratee(index);
          }
          return result;
        }

        /** `Object#toString` result references. */
        var argsTag$1 = '[object Arguments]';

        /**
         * The base implementation of `_.isArguments`.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is an `arguments` object,
         */
        function baseIsArguments(value) {
          return isObjectLike(value) && baseGetTag(value) == argsTag$1;
        }

        /** Used for built-in method references. */
        var objectProto$4 = Object.prototype;

        /** Used to check objects for own properties. */
        var hasOwnProperty$4 = objectProto$4.hasOwnProperty;

        /** Built-in value references. */
        var propertyIsEnumerable = objectProto$4.propertyIsEnumerable;

        /**
         * Checks if `value` is likely an `arguments` object.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is an `arguments` object,
         *  else `false`.
         * @example
         *
         * _.isArguments(function() { return arguments; }());
         * // => true
         *
         * _.isArguments([1, 2, 3]);
         * // => false
         */
        var isArguments = baseIsArguments(function () {
          return arguments;
        }()) ? baseIsArguments : function (value) {
          return isObjectLike(value) && hasOwnProperty$4.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
        };

        /**
         * This method returns `false`.
         *
         * @static
         * @memberOf _
         * @since 4.13.0
         * @category Util
         * @returns {boolean} Returns `false`.
         * @example
         *
         * _.times(2, _.stubFalse);
         * // => [false, false]
         */
        function stubFalse() {
          return false;
        }

        /** Detect free variable `exports`. */
        var freeExports$2 = _typeof2(exports) == 'object' && exports && !exports.nodeType && exports;

        /** Detect free variable `module`. */
        var freeModule$2 = freeExports$2 && _typeof2(module) == 'object' && module && !module.nodeType && module;

        /** Detect the popular CommonJS extension `module.exports`. */
        var moduleExports$2 = freeModule$2 && freeModule$2.exports === freeExports$2;

        /** Built-in value references. */
        var Buffer$1 = moduleExports$2 ? root.Buffer : undefined;

        /* Built-in method references for those with the same name as other `lodash` methods. */
        var nativeIsBuffer = Buffer$1 ? Buffer$1.isBuffer : undefined;

        /**
         * Checks if `value` is a buffer.
         *
         * @static
         * @memberOf _
         * @since 4.3.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
         * @example
         *
         * _.isBuffer(new Buffer(2));
         * // => true
         *
         * _.isBuffer(new Uint8Array(2));
         * // => false
         */
        var isBuffer = nativeIsBuffer || stubFalse;

        /** `Object#toString` result references. */
        var argsTag = '[object Arguments]',
          arrayTag = '[object Array]',
          boolTag = '[object Boolean]',
          dateTag = '[object Date]',
          errorTag = '[object Error]',
          funcTag = '[object Function]',
          mapTag = '[object Map]',
          numberTag = '[object Number]',
          objectTag$1 = '[object Object]',
          regexpTag = '[object RegExp]',
          setTag = '[object Set]',
          stringTag = '[object String]',
          weakMapTag = '[object WeakMap]';
        var arrayBufferTag = '[object ArrayBuffer]',
          dataViewTag = '[object DataView]',
          float32Tag = '[object Float32Array]',
          float64Tag = '[object Float64Array]',
          int8Tag = '[object Int8Array]',
          int16Tag = '[object Int16Array]',
          int32Tag = '[object Int32Array]',
          uint8Tag = '[object Uint8Array]',
          uint8ClampedTag = '[object Uint8ClampedArray]',
          uint16Tag = '[object Uint16Array]',
          uint32Tag = '[object Uint32Array]';

        /** Used to identify `toStringTag` values of typed arrays. */
        var typedArrayTags = {};
        typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
        typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag$1] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

        /**
         * The base implementation of `_.isTypedArray` without Node.js optimizations.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
         */
        function baseIsTypedArray(value) {
          return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
        }

        /**
         * The base implementation of `_.unary` without support for storing metadata.
         *
         * @private
         * @param {Function} func The function to cap arguments for.
         * @returns {Function} Returns the new capped function.
         */
        function baseUnary(func) {
          return function (value) {
            return func(value);
          };
        }

        /** Detect free variable `exports`. */
        var freeExports$1 = _typeof2(exports) == 'object' && exports && !exports.nodeType && exports;

        /** Detect free variable `module`. */
        var freeModule$1 = freeExports$1 && _typeof2(module) == 'object' && module && !module.nodeType && module;

        /** Detect the popular CommonJS extension `module.exports`. */
        var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;

        /** Detect free variable `process` from Node.js. */
        var freeProcess = moduleExports$1 && freeGlobal.process;

        /** Used to access faster Node.js helpers. */
        var nodeUtil = function () {
          try {
            // Use `util.types` for Node.js 10+.
            var types = freeModule$1 && freeModule$1.require && freeModule$1.require('util').types;
            if (types) {
              return types;
            }

            // Legacy `process.binding('util')` for Node.js < 10.
            return freeProcess && freeProcess.binding && freeProcess.binding('util');
          } catch (e) {}
        }();

        /* Node.js helper references. */
        var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

        /**
         * Checks if `value` is classified as a typed array.
         *
         * @static
         * @memberOf _
         * @since 3.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
         * @example
         *
         * _.isTypedArray(new Uint8Array);
         * // => true
         *
         * _.isTypedArray([]);
         * // => false
         */
        var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

        /**
         * Creates an array of the enumerable property names of the array-like `value`.
         *
         * @private
         * @param {*} value The value to query.
         * @param {boolean} inherited Specify returning inherited property names.
         * @returns {Array} Returns the array of property names.
         */
        function arrayLikeKeys(value, inherited) {
          var isArr = isArray(value),
            isArg = !isArr && isArguments(value),
            isBuff = !isArr && !isArg && isBuffer(value),
            isType = !isArr && !isArg && !isBuff && isTypedArray(value),
            skipIndexes = isArr || isArg || isBuff || isType,
            result = skipIndexes ? baseTimes(value.length, String) : [],
            length = result.length;
          for (var key in value) {
            if (!(skipIndexes && (
            // Safari 9 has enumerable `arguments.length` in strict mode.
            key == 'length' ||
            // Node.js 0.10 has enumerable non-index properties on buffers.
            isBuff && (key == 'offset' || key == 'parent') ||
            // PhantomJS 2 has enumerable non-index properties on typed arrays.
            isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') ||
            // Skip index properties.
            isIndex(key, length)))) {
              result.push(key);
            }
          }
          return result;
        }

        /**
         * Creates a unary function that invokes `func` with its argument transformed.
         *
         * @private
         * @param {Function} func The function to wrap.
         * @param {Function} transform The argument transform.
         * @returns {Function} Returns the new function.
         */
        function overArg(func, transform) {
          return function (arg) {
            return func(transform(arg));
          };
        }

        /**
         * This function is like
         * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
         * except that it includes inherited enumerable properties.
         *
         * @private
         * @param {Object} object The object to query.
         * @returns {Array} Returns the array of property names.
         */
        function nativeKeysIn(object) {
          var result = [];
          if (object != null) {
            for (var key in Object(object)) {
              result.push(key);
            }
          }
          return result;
        }

        /** Used for built-in method references. */
        var objectProto$3 = Object.prototype;

        /** Used to check objects for own properties. */
        var hasOwnProperty$3 = objectProto$3.hasOwnProperty;

        /**
         * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
         *
         * @private
         * @param {Object} object The object to query.
         * @returns {Array} Returns the array of property names.
         */
        function baseKeysIn(object) {
          if (!isObject(object)) {
            return nativeKeysIn(object);
          }
          var isProto = isPrototype(object),
            result = [];
          for (var key in object) {
            if (!(key == 'constructor' && (isProto || !hasOwnProperty$3.call(object, key)))) {
              result.push(key);
            }
          }
          return result;
        }

        /**
         * Creates an array of the own and inherited enumerable property names of `object`.
         *
         * **Note:** Non-object values are coerced to objects.
         *
         * @static
         * @memberOf _
         * @since 3.0.0
         * @category Object
         * @param {Object} object The object to query.
         * @returns {Array} Returns the array of property names.
         * @example
         *
         * function Foo() {
         *   this.a = 1;
         *   this.b = 2;
         * }
         *
         * Foo.prototype.c = 3;
         *
         * _.keysIn(new Foo);
         * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
         */
        function keysIn(object) {
          return isArrayLike(object) ? arrayLikeKeys(object) : baseKeysIn(object);
        }

        /* Built-in method references that are verified to be native. */
        var nativeCreate = getNative(Object, 'create');

        /**
         * Removes all key-value entries from the hash.
         *
         * @private
         * @name clear
         * @memberOf Hash
         */
        function hashClear() {
          this.__data__ = nativeCreate ? nativeCreate(null) : {};
          this.size = 0;
        }

        /**
         * Removes `key` and its value from the hash.
         *
         * @private
         * @name delete
         * @memberOf Hash
         * @param {Object} hash The hash to modify.
         * @param {string} key The key of the value to remove.
         * @returns {boolean} Returns `true` if the entry was removed, else `false`.
         */
        function hashDelete(key) {
          var result = this.has(key) && delete this.__data__[key];
          this.size -= result ? 1 : 0;
          return result;
        }

        /** Used to stand-in for `undefined` hash values. */
        var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

        /** Used for built-in method references. */
        var objectProto$2 = Object.prototype;

        /** Used to check objects for own properties. */
        var hasOwnProperty$2 = objectProto$2.hasOwnProperty;

        /**
         * Gets the hash value for `key`.
         *
         * @private
         * @name get
         * @memberOf Hash
         * @param {string} key The key of the value to get.
         * @returns {*} Returns the entry value.
         */
        function hashGet(key) {
          var data = this.__data__;
          if (nativeCreate) {
            var result = data[key];
            return result === HASH_UNDEFINED$1 ? undefined : result;
          }
          return hasOwnProperty$2.call(data, key) ? data[key] : undefined;
        }

        /** Used for built-in method references. */
        var objectProto$1 = Object.prototype;

        /** Used to check objects for own properties. */
        var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

        /**
         * Checks if a hash value for `key` exists.
         *
         * @private
         * @name has
         * @memberOf Hash
         * @param {string} key The key of the entry to check.
         * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
         */
        function hashHas(key) {
          var data = this.__data__;
          return nativeCreate ? data[key] !== undefined : hasOwnProperty$1.call(data, key);
        }

        /** Used to stand-in for `undefined` hash values. */
        var HASH_UNDEFINED = '__lodash_hash_undefined__';

        /**
         * Sets the hash `key` to `value`.
         *
         * @private
         * @name set
         * @memberOf Hash
         * @param {string} key The key of the value to set.
         * @param {*} value The value to set.
         * @returns {Object} Returns the hash instance.
         */
        function hashSet(key, value) {
          var data = this.__data__;
          this.size += this.has(key) ? 0 : 1;
          data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
          return this;
        }

        /**
         * Creates a hash object.
         *
         * @private
         * @constructor
         * @param {Array} [entries] The key-value pairs to cache.
         */
        function Hash(entries) {
          var index = -1,
            length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }

        // Add methods to `Hash`.
        Hash.prototype.clear = hashClear;
        Hash.prototype['delete'] = hashDelete;
        Hash.prototype.get = hashGet;
        Hash.prototype.has = hashHas;
        Hash.prototype.set = hashSet;

        /**
         * Removes all key-value entries from the list cache.
         *
         * @private
         * @name clear
         * @memberOf ListCache
         */
        function listCacheClear() {
          this.__data__ = [];
          this.size = 0;
        }

        /**
         * Gets the index at which the `key` is found in `array` of key-value pairs.
         *
         * @private
         * @param {Array} array The array to inspect.
         * @param {*} key The key to search for.
         * @returns {number} Returns the index of the matched value, else `-1`.
         */
        function assocIndexOf(array, key) {
          var length = array.length;
          while (length--) {
            if (eq(array[length][0], key)) {
              return length;
            }
          }
          return -1;
        }

        /** Used for built-in method references. */
        var arrayProto = Array.prototype;

        /** Built-in value references. */
        var splice = arrayProto.splice;

        /**
         * Removes `key` and its value from the list cache.
         *
         * @private
         * @name delete
         * @memberOf ListCache
         * @param {string} key The key of the value to remove.
         * @returns {boolean} Returns `true` if the entry was removed, else `false`.
         */
        function listCacheDelete(key) {
          var data = this.__data__,
            index = assocIndexOf(data, key);
          if (index < 0) {
            return false;
          }
          var lastIndex = data.length - 1;
          if (index == lastIndex) {
            data.pop();
          } else {
            splice.call(data, index, 1);
          }
          --this.size;
          return true;
        }

        /**
         * Gets the list cache value for `key`.
         *
         * @private
         * @name get
         * @memberOf ListCache
         * @param {string} key The key of the value to get.
         * @returns {*} Returns the entry value.
         */
        function listCacheGet(key) {
          var data = this.__data__,
            index = assocIndexOf(data, key);
          return index < 0 ? undefined : data[index][1];
        }

        /**
         * Checks if a list cache value for `key` exists.
         *
         * @private
         * @name has
         * @memberOf ListCache
         * @param {string} key The key of the entry to check.
         * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
         */
        function listCacheHas(key) {
          return assocIndexOf(this.__data__, key) > -1;
        }

        /**
         * Sets the list cache `key` to `value`.
         *
         * @private
         * @name set
         * @memberOf ListCache
         * @param {string} key The key of the value to set.
         * @param {*} value The value to set.
         * @returns {Object} Returns the list cache instance.
         */
        function listCacheSet(key, value) {
          var data = this.__data__,
            index = assocIndexOf(data, key);
          if (index < 0) {
            ++this.size;
            data.push([key, value]);
          } else {
            data[index][1] = value;
          }
          return this;
        }

        /**
         * Creates an list cache object.
         *
         * @private
         * @constructor
         * @param {Array} [entries] The key-value pairs to cache.
         */
        function ListCache(entries) {
          var index = -1,
            length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }

        // Add methods to `ListCache`.
        ListCache.prototype.clear = listCacheClear;
        ListCache.prototype['delete'] = listCacheDelete;
        ListCache.prototype.get = listCacheGet;
        ListCache.prototype.has = listCacheHas;
        ListCache.prototype.set = listCacheSet;

        /* Built-in method references that are verified to be native. */
        var Map$1 = getNative(root, 'Map');

        /**
         * Removes all key-value entries from the map.
         *
         * @private
         * @name clear
         * @memberOf MapCache
         */
        function mapCacheClear() {
          this.size = 0;
          this.__data__ = {
            'hash': new Hash(),
            'map': new (Map$1 || ListCache)(),
            'string': new Hash()
          };
        }

        /**
         * Checks if `value` is suitable for use as unique object key.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
         */
        function isKeyable(value) {
          var type = _typeof2(value);
          return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
        }

        /**
         * Gets the data for `map`.
         *
         * @private
         * @param {Object} map The map to query.
         * @param {string} key The reference key.
         * @returns {*} Returns the map data.
         */
        function getMapData(map, key) {
          var data = map.__data__;
          return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
        }

        /**
         * Removes `key` and its value from the map.
         *
         * @private
         * @name delete
         * @memberOf MapCache
         * @param {string} key The key of the value to remove.
         * @returns {boolean} Returns `true` if the entry was removed, else `false`.
         */
        function mapCacheDelete(key) {
          var result = getMapData(this, key)['delete'](key);
          this.size -= result ? 1 : 0;
          return result;
        }

        /**
         * Gets the map value for `key`.
         *
         * @private
         * @name get
         * @memberOf MapCache
         * @param {string} key The key of the value to get.
         * @returns {*} Returns the entry value.
         */
        function mapCacheGet(key) {
          return getMapData(this, key).get(key);
        }

        /**
         * Checks if a map value for `key` exists.
         *
         * @private
         * @name has
         * @memberOf MapCache
         * @param {string} key The key of the entry to check.
         * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
         */
        function mapCacheHas(key) {
          return getMapData(this, key).has(key);
        }

        /**
         * Sets the map `key` to `value`.
         *
         * @private
         * @name set
         * @memberOf MapCache
         * @param {string} key The key of the value to set.
         * @param {*} value The value to set.
         * @returns {Object} Returns the map cache instance.
         */
        function mapCacheSet(key, value) {
          var data = getMapData(this, key),
            size = data.size;
          data.set(key, value);
          this.size += data.size == size ? 0 : 1;
          return this;
        }

        /**
         * Creates a map cache object to store key-value pairs.
         *
         * @private
         * @constructor
         * @param {Array} [entries] The key-value pairs to cache.
         */
        function MapCache(entries) {
          var index = -1,
            length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }

        // Add methods to `MapCache`.
        MapCache.prototype.clear = mapCacheClear;
        MapCache.prototype['delete'] = mapCacheDelete;
        MapCache.prototype.get = mapCacheGet;
        MapCache.prototype.has = mapCacheHas;
        MapCache.prototype.set = mapCacheSet;

        /** Built-in value references. */
        var getPrototype = overArg(Object.getPrototypeOf, Object);

        /** `Object#toString` result references. */
        var objectTag = '[object Object]';

        /** Used for built-in method references. */
        var funcProto = Function.prototype,
          objectProto = Object.prototype;

        /** Used to resolve the decompiled source of functions. */
        var funcToString = funcProto.toString;

        /** Used to check objects for own properties. */
        var hasOwnProperty = objectProto.hasOwnProperty;

        /** Used to infer the `Object` constructor. */
        var objectCtorString = funcToString.call(Object);

        /**
         * Checks if `value` is a plain object, that is, an object created by the
         * `Object` constructor or one with a `[[Prototype]]` of `null`.
         *
         * @static
         * @memberOf _
         * @since 0.8.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
         * @example
         *
         * function Foo() {
         *   this.a = 1;
         * }
         *
         * _.isPlainObject(new Foo);
         * // => false
         *
         * _.isPlainObject([1, 2, 3]);
         * // => false
         *
         * _.isPlainObject({ 'x': 0, 'y': 0 });
         * // => true
         *
         * _.isPlainObject(Object.create(null));
         * // => true
         */
        function isPlainObject(value) {
          if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
            return false;
          }
          var proto = getPrototype(value);
          if (proto === null) {
            return true;
          }
          var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
          return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
        }

        /**
         * Removes all key-value entries from the stack.
         *
         * @private
         * @name clear
         * @memberOf Stack
         */
        function stackClear() {
          this.__data__ = new ListCache();
          this.size = 0;
        }

        /**
         * Removes `key` and its value from the stack.
         *
         * @private
         * @name delete
         * @memberOf Stack
         * @param {string} key The key of the value to remove.
         * @returns {boolean} Returns `true` if the entry was removed, else `false`.
         */
        function stackDelete(key) {
          var data = this.__data__,
            result = data['delete'](key);
          this.size = data.size;
          return result;
        }

        /**
         * Gets the stack value for `key`.
         *
         * @private
         * @name get
         * @memberOf Stack
         * @param {string} key The key of the value to get.
         * @returns {*} Returns the entry value.
         */
        function stackGet(key) {
          return this.__data__.get(key);
        }

        /**
         * Checks if a stack value for `key` exists.
         *
         * @private
         * @name has
         * @memberOf Stack
         * @param {string} key The key of the entry to check.
         * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
         */
        function stackHas(key) {
          return this.__data__.has(key);
        }

        /** Used as the size to enable large array optimizations. */
        var LARGE_ARRAY_SIZE = 200;

        /**
         * Sets the stack `key` to `value`.
         *
         * @private
         * @name set
         * @memberOf Stack
         * @param {string} key The key of the value to set.
         * @param {*} value The value to set.
         * @returns {Object} Returns the stack cache instance.
         */
        function stackSet(key, value) {
          var data = this.__data__;
          if (data instanceof ListCache) {
            var pairs = data.__data__;
            if (!Map$1 || pairs.length < LARGE_ARRAY_SIZE - 1) {
              pairs.push([key, value]);
              this.size = ++data.size;
              return this;
            }
            data = this.__data__ = new MapCache(pairs);
          }
          data.set(key, value);
          this.size = data.size;
          return this;
        }

        /**
         * Creates a stack cache object to store key-value pairs.
         *
         * @private
         * @constructor
         * @param {Array} [entries] The key-value pairs to cache.
         */
        function Stack(entries) {
          var data = this.__data__ = new ListCache(entries);
          this.size = data.size;
        }

        // Add methods to `Stack`.
        Stack.prototype.clear = stackClear;
        Stack.prototype['delete'] = stackDelete;
        Stack.prototype.get = stackGet;
        Stack.prototype.has = stackHas;
        Stack.prototype.set = stackSet;

        /** Detect free variable `exports`. */
        var freeExports = _typeof2(exports) == 'object' && exports && !exports.nodeType && exports;

        /** Detect free variable `module`. */
        var freeModule = freeExports && _typeof2(module) == 'object' && module && !module.nodeType && module;

        /** Detect the popular CommonJS extension `module.exports`. */
        var moduleExports = freeModule && freeModule.exports === freeExports;

        /** Built-in value references. */
        var Buffer = moduleExports ? root.Buffer : undefined;
        Buffer ? Buffer.allocUnsafe : undefined;

        /**
         * Creates a clone of  `buffer`.
         *
         * @private
         * @param {Buffer} buffer The buffer to clone.
         * @param {boolean} [isDeep] Specify a deep clone.
         * @returns {Buffer} Returns the cloned buffer.
         */
        function cloneBuffer(buffer, isDeep) {
          {
            return buffer.slice();
          }
        }

        /** Built-in value references. */
        var Uint8Array = root.Uint8Array;

        /**
         * Creates a clone of `arrayBuffer`.
         *
         * @private
         * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
         * @returns {ArrayBuffer} Returns the cloned array buffer.
         */
        function cloneArrayBuffer(arrayBuffer) {
          var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
          new Uint8Array(result).set(new Uint8Array(arrayBuffer));
          return result;
        }

        /**
         * Creates a clone of `typedArray`.
         *
         * @private
         * @param {Object} typedArray The typed array to clone.
         * @param {boolean} [isDeep] Specify a deep clone.
         * @returns {Object} Returns the cloned typed array.
         */
        function cloneTypedArray(typedArray, isDeep) {
          var buffer = cloneArrayBuffer(typedArray.buffer);
          return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
        }

        /**
         * Initializes an object clone.
         *
         * @private
         * @param {Object} object The object to clone.
         * @returns {Object} Returns the initialized clone.
         */
        function initCloneObject(object) {
          return typeof object.constructor == 'function' && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
        }

        /**
         * Creates a base function for methods like `_.forIn` and `_.forOwn`.
         *
         * @private
         * @param {boolean} [fromRight] Specify iterating from right to left.
         * @returns {Function} Returns the new base function.
         */
        function createBaseFor(fromRight) {
          return function (object, iteratee, keysFunc) {
            var index = -1,
              iterable = Object(object),
              props = keysFunc(object),
              length = props.length;
            while (length--) {
              var key = props[++index];
              if (iteratee(iterable[key], key, iterable) === false) {
                break;
              }
            }
            return object;
          };
        }

        /**
         * The base implementation of `baseForOwn` which iterates over `object`
         * properties returned by `keysFunc` and invokes `iteratee` for each property.
         * Iteratee functions may exit iteration early by explicitly returning `false`.
         *
         * @private
         * @param {Object} object The object to iterate over.
         * @param {Function} iteratee The function invoked per iteration.
         * @param {Function} keysFunc The function to get the keys of `object`.
         * @returns {Object} Returns `object`.
         */
        var baseFor = createBaseFor();

        /**
         * This function is like `assignValue` except that it doesn't assign
         * `undefined` values.
         *
         * @private
         * @param {Object} object The object to modify.
         * @param {string} key The key of the property to assign.
         * @param {*} value The value to assign.
         */
        function assignMergeValue(object, key, value) {
          if (value !== undefined && !eq(object[key], value) || value === undefined && !(key in object)) {
            baseAssignValue(object, key, value);
          }
        }

        /**
         * This method is like `_.isArrayLike` except that it also checks if `value`
         * is an object.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is an array-like object,
         *  else `false`.
         * @example
         *
         * _.isArrayLikeObject([1, 2, 3]);
         * // => true
         *
         * _.isArrayLikeObject(document.body.children);
         * // => true
         *
         * _.isArrayLikeObject('abc');
         * // => false
         *
         * _.isArrayLikeObject(_.noop);
         * // => false
         */
        function isArrayLikeObject(value) {
          return isObjectLike(value) && isArrayLike(value);
        }

        /**
         * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
         *
         * @private
         * @param {Object} object The object to query.
         * @param {string} key The key of the property to get.
         * @returns {*} Returns the property value.
         */
        function safeGet(object, key) {
          if (key === 'constructor' && typeof object[key] === 'function') {
            return;
          }
          if (key == '__proto__') {
            return;
          }
          return object[key];
        }

        /**
         * Converts `value` to a plain object flattening inherited enumerable string
         * keyed properties of `value` to own properties of the plain object.
         *
         * @static
         * @memberOf _
         * @since 3.0.0
         * @category Lang
         * @param {*} value The value to convert.
         * @returns {Object} Returns the converted plain object.
         * @example
         *
         * function Foo() {
         *   this.b = 2;
         * }
         *
         * Foo.prototype.c = 3;
         *
         * _.assign({ 'a': 1 }, new Foo);
         * // => { 'a': 1, 'b': 2 }
         *
         * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
         * // => { 'a': 1, 'b': 2, 'c': 3 }
         */
        function toPlainObject(value) {
          return copyObject(value, keysIn(value));
        }

        /**
         * A specialized version of `baseMerge` for arrays and objects which performs
         * deep merges and tracks traversed objects enabling objects with circular
         * references to be merged.
         *
         * @private
         * @param {Object} object The destination object.
         * @param {Object} source The source object.
         * @param {string} key The key of the value to merge.
         * @param {number} srcIndex The index of `source`.
         * @param {Function} mergeFunc The function to merge values.
         * @param {Function} [customizer] The function to customize assigned values.
         * @param {Object} [stack] Tracks traversed source values and their merged
         *  counterparts.
         */
        function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
          var objValue = safeGet(object, key),
            srcValue = safeGet(source, key),
            stacked = stack.get(srcValue);
          if (stacked) {
            assignMergeValue(object, key, stacked);
            return;
          }
          var newValue = customizer ? customizer(objValue, srcValue, key + '', object, source, stack) : undefined;
          var isCommon = newValue === undefined;
          if (isCommon) {
            var isArr = isArray(srcValue),
              isBuff = !isArr && isBuffer(srcValue),
              isTyped = !isArr && !isBuff && isTypedArray(srcValue);
            newValue = srcValue;
            if (isArr || isBuff || isTyped) {
              if (isArray(objValue)) {
                newValue = objValue;
              } else if (isArrayLikeObject(objValue)) {
                newValue = copyArray(objValue);
              } else if (isBuff) {
                isCommon = false;
                newValue = cloneBuffer(srcValue);
              } else if (isTyped) {
                isCommon = false;
                newValue = cloneTypedArray(srcValue);
              } else {
                newValue = [];
              }
            } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
              newValue = objValue;
              if (isArguments(objValue)) {
                newValue = toPlainObject(objValue);
              } else if (!isObject(objValue) || isFunction(objValue)) {
                newValue = initCloneObject(srcValue);
              }
            } else {
              isCommon = false;
            }
          }
          if (isCommon) {
            // Recursively merge objects and arrays (susceptible to call stack limits).
            stack.set(srcValue, newValue);
            mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
            stack['delete'](srcValue);
          }
          assignMergeValue(object, key, newValue);
        }

        /**
         * The base implementation of `_.merge` without support for multiple sources.
         *
         * @private
         * @param {Object} object The destination object.
         * @param {Object} source The source object.
         * @param {number} srcIndex The index of `source`.
         * @param {Function} [customizer] The function to customize merged values.
         * @param {Object} [stack] Tracks traversed source values and their merged
         *  counterparts.
         */
        function baseMerge(object, source, srcIndex, customizer, stack) {
          if (object === source) {
            return;
          }
          baseFor(source, function (srcValue, key) {
            stack || (stack = new Stack());
            if (isObject(srcValue)) {
              baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
            } else {
              var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + '', object, source, stack) : undefined;
              if (newValue === undefined) {
                newValue = srcValue;
              }
              assignMergeValue(object, key, newValue);
            }
          }, keysIn);
        }

        /**
         * This method is like `_.assign` except that it recursively merges own and
         * inherited enumerable string keyed properties of source objects into the
         * destination object. Source properties that resolve to `undefined` are
         * skipped if a destination value exists. Array and plain object properties
         * are merged recursively. Other objects and value types are overridden by
         * assignment. Source objects are applied from left to right. Subsequent
         * sources overwrite property assignments of previous sources.
         *
         * **Note:** This method mutates `object`.
         *
         * @static
         * @memberOf _
         * @since 0.5.0
         * @category Object
         * @param {Object} object The destination object.
         * @param {...Object} [sources] The source objects.
         * @returns {Object} Returns `object`.
         * @example
         *
         * var object = {
         *   'a': [{ 'b': 2 }, { 'd': 4 }]
         * };
         *
         * var other = {
         *   'a': [{ 'c': 3 }, { 'e': 5 }]
         * };
         *
         * _.merge(object, other);
         * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
         */
        var merge = createAssigner(function (object, source, srcIndex) {
          baseMerge(object, source, srcIndex);
        });
        var qe = Object.defineProperty;
        var Ye = function Ye(e, t, o) {
          return t in e ? qe(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: o
          }) : e[t] = o;
        };
        var W = function W(e, t, o) {
          return Ye(e, _typeof2(t) != "symbol" ? t + "" : t, o), o;
        };
        var P = function P(e) {
          return Math.round(e * 100) / 100;
        };
        var A = /*#__PURE__*/function () {
          function A(t) {
            var _this3 = this;
            _classCallCheck(this, A);
            W(this, "instance");
            W(this, "alphaValue", 0);
            // RGB
            W(this, "redValue", 0);
            W(this, "greenValue", 0);
            W(this, "blueValue", 0);
            // HSV
            W(this, "hueValue", 0);
            W(this, "saturationValue", 0);
            W(this, "brightnessValue", 0);
            // HSL
            W(this, "hslSaturationValue", 0);
            W(this, "lightnessValue", 0);
            W(this, "initAlpha", function () {
              var t = _this3.instance.getAlpha();
              _this3.alphaValue = Math.min(1, t) * 100;
            });
            W(this, "initLightness", function () {
              var _this3$instance$toHsl = _this3.instance.toHsl(),
                t = _this3$instance$toHsl.s,
                o = _this3$instance$toHsl.l;
              _this3.hslSaturationValue = P(t), _this3.lightnessValue = P(o);
            });
            W(this, "initRgb", function () {
              var _this3$instance$toRgb = _this3.instance.toRgb(),
                t = _this3$instance$toRgb.r,
                o = _this3$instance$toRgb.g,
                n = _this3$instance$toRgb.b;
              _this3.redValue = P(t), _this3.greenValue = P(o), _this3.blueValue = P(n);
            });
            W(this, "initHsb", function () {
              var _this3$instance$toHsv = _this3.instance.toHsv(),
                t = _this3$instance$toHsv.h,
                o = _this3$instance$toHsv.s,
                n = _this3$instance$toHsv.v;
              _this3.hueValue = Math.min(360, Math.ceil(t)), _this3.saturationValue = P(o), _this3.brightnessValue = P(n);
            });
            W(this, "toHexString", function () {
              return _this3.instance.toHexString();
            });
            W(this, "toRgbString", function () {
              return _this3.instance.toRgbString();
            });
            this.instance = tinycolor(t), this.initRgb(), this.initHsb(), this.initLightness(), this.initAlpha();
          }
          return _createClass(A, [{
            key: "toString",
            value: function toString(t) {
              return this.instance.toString(t);
            }
          }, {
            key: "hex",
            get: function get() {
              return this.instance.toHex();
            },
            set: function set(t) {
              this.instance = tinycolor(t), this.initHsb(), this.initRgb(), this.initAlpha(), this.initLightness();
            }
            // 色调
          }, {
            key: "hue",
            get: function get() {
              return this.hueValue;
            }
            // 饱和度
            ,
            set: function set(t) {
              this.saturation === 0 && this.brightness === 0 && (this.saturationValue = 1, this.brightnessValue = 1), this.instance = tinycolor({
                h: P(t),
                s: this.saturation,
                v: this.brightness,
                a: this.alphaValue / 100
              }), this.initRgb(), this.initLightness(), this.hueValue = P(t);
            }
          }, {
            key: "saturation",
            get: function get() {
              return this.saturationValue;
            }
            // 明度
            ,
            set: function set(t) {
              this.instance = tinycolor({
                h: this.hue,
                s: P(t),
                v: this.brightness,
                a: this.alphaValue / 100
              }), this.initRgb(), this.initLightness(), this.saturationValue = P(t);
            }
          }, {
            key: "brightness",
            get: function get() {
              return this.brightnessValue;
            }
            // 亮度
            ,
            set: function set(t) {
              this.instance = tinycolor({
                h: this.hue,
                s: this.saturation,
                v: P(t),
                a: this.alphaValue / 100
              }), this.initRgb(), this.initLightness(), this.brightnessValue = P(t);
            }
          }, {
            key: "lightness",
            get: function get() {
              return this.lightnessValue;
            }
            // red
            ,
            set: function set(t) {
              this.instance = tinycolor({
                h: this.hue,
                s: this.hslSaturationValue,
                l: P(t),
                a: this.alphaValue / 100
              }), this.initRgb(), this.initHsb(), this.lightnessValue = P(t);
            }
          }, {
            key: "red",
            get: function get() {
              return this.redValue;
            }
            // green
            ,
            set: function set(t) {
              var o = this.instance.toRgb();
              this.instance = tinycolor(_objectSpread(_objectSpread({}, o), {}, {
                r: P(t),
                a: this.alphaValue / 100
              })), this.initHsb(), this.initLightness(), this.redValue = P(t);
            }
          }, {
            key: "green",
            get: function get() {
              return this.greenValue;
            }
            // blue
            ,
            set: function set(t) {
              var o = this.instance.toRgb();
              this.instance = tinycolor(_objectSpread(_objectSpread({}, o), {}, {
                g: P(t),
                a: this.alphaValue / 100
              })), this.initHsb(), this.initLightness(), this.greenValue = P(t);
            }
          }, {
            key: "blue",
            get: function get() {
              return this.blueValue;
            }
            // alpha
            ,
            set: function set(t) {
              var o = this.instance.toRgb();
              this.instance = tinycolor(_objectSpread(_objectSpread({}, o), {}, {
                b: P(t),
                a: this.alphaValue / 100
              })), this.initHsb(), this.initLightness(), this.blueValue = P(t);
            }
          }, {
            key: "alpha",
            get: function get() {
              return this.alphaValue;
            },
            set: function set(t) {
              this.instance.setAlpha(t / 100), this.alphaValue = t;
            }
          }, {
            key: "RGB",
            get: function get() {
              return [this.red, this.green, this.blue, parseFloat((this.alpha / 100).toFixed(2))];
            }
          }, {
            key: "HSB",
            get: function get() {
              return [this.hue, this.saturation, this.brightness, parseFloat((this.alpha / 100).toFixed(2))];
            }
          }, {
            key: "HSL",
            get: function get() {
              return [this.hue, this.hslSaturationValue, this.lightness, parseFloat((this.alpha / 100).toFixed(2))];
            }
          }]);
        }();
        function Ae(e, t, o, n) {
          return "rgba(".concat([e, t, o, n / 100].join(","), ")");
        }
        var ue = function ue(e, t, o) {
            return t < o ? e < t ? t : e > o ? o : e : e < o ? o : e > t ? t : e;
          },
          fe = "color-history",
          Ce = 8;
        var q = function q(e, t) {
            var o = e.__vccOpts || e;
            var _iterator = _createForOfIteratorHelper(t),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var _step$value = _slicedToArray(_step.value, 2),
                  _n = _step$value[0],
                  _i2 = _step$value[1];
                o[_n] = _i2;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            return o;
          },
          lt = defineComponent({
            name: "Alpha",
            props: {
              color: C$1.instanceOf(A),
              size: C$1.oneOf(["small", "default"]).def("default")
            },
            emits: ["change"],
            setup: function setup(e, _ref6) {
              var t = _ref6.emit;
              var o = ref(null),
                n = ref(null);
              var i = e.color || new A();
              var l = reactive({
                red: i.red,
                green: i.green,
                blue: i.blue,
                alpha: i.alpha
              });
              watch(function () {
                return e.color;
              }, function (g) {
                g && (i = g, merge(l, {
                  red: g.red,
                  green: g.green,
                  blue: g.blue,
                  alpha: g.alpha
                }));
              }, {
                deep: !0
              });
              var a = computed(function () {
                  var g = Ae(l.red, l.green, l.blue, 0),
                    d = Ae(l.red, l.green, l.blue, 100);
                  return {
                    background: "linear-gradient(to right, ".concat(g, " , ").concat(d, ")")
                  };
                }),
                r = function r() {
                  if (o.value && n.value) {
                    var _g = l.alpha / 100,
                      _d2 = o.value.getBoundingClientRect(),
                      _m = n.value.offsetWidth;
                    return Math.round(_g * (_d2.width - _m) + _m / 2);
                  }
                  return 0;
                },
                c = computed(function () {
                  return {
                    left: r() + "px",
                    top: 0
                  };
                }),
                k = function k(g) {
                  g.target !== o.value && p(g);
                },
                p = function p(g) {
                  if (g.stopPropagation(), o.value && n.value) {
                    var _d3 = o.value.getBoundingClientRect(),
                      _m2 = n.value.offsetWidth;
                    var _b2 = g.clientX - _d3.left;
                    _b2 = Math.max(_m2 / 2, _b2), _b2 = Math.min(_b2, _d3.width - _m2 / 2);
                    var _h = Math.round((_b2 - _m2 / 2) / (_d3.width - _m2) * 100);
                    i.alpha = _h, l.alpha = _h, t("change", _h);
                  }
                };
              return tryOnMounted(function () {
                var g = {
                  drag: function drag(d) {
                    p(d);
                  },
                  end: function end(d) {
                    p(d);
                  }
                };
                o.value && n.value && Vn.triggerDragEvent(o.value, g);
              }), {
                barElement: o,
                cursorElement: n,
                getCursorStyle: c,
                getBackgroundStyle: a,
                onClickSider: k
              };
            }
          }),
          st = function st(e) {
            return pushScopeId("data-v-18925ba6"), e = e(), popScopeId(), e;
          },
          it = /* @__PURE__ */st(function () {
            return /* @__PURE__ */createBaseVNode("div", {
              class: "vc-alpha-slider__bar-handle"
            }, null, -1);
          }),
          ct = [it];
        function ut(e, t, o, n, i, l) {
          return openBlock(), createElementBlock("div", {
            class: normalizeClass(["vc-alpha-slider", "transparent", {
              "small-slider": e.size === "small"
            }])
          }, [createBaseVNode("div", {
            ref: "barElement",
            class: "vc-alpha-slider__bar",
            style: normalizeStyle(e.getBackgroundStyle),
            onClick: t[0] || (t[0] = function () {
              return e.onClickSider && e.onClickSider.apply(e, arguments);
            })
          }, [createBaseVNode("div", {
            class: normalizeClass(["vc-alpha-slider__bar-pointer", {
              "small-bar": e.size === "small"
            }]),
            ref: "cursorElement",
            style: normalizeStyle(e.getCursorStyle)
          }, ct, 6)], 4)], 2);
        }
        var ve = /* @__PURE__ */q(lt, [["render", ut], ["__scopeId", "data-v-18925ba6"]]);
        var dt = [
          // 第一行
          ["#fcc02e", "#f67c01", "#e64a19", "#d81b43", "#8e24aa", "#512da7", "#1f87e8", "#008781", "#05a045"],
          // 第二行
          ["#fed835", "#fb8c00", "#f5511e", "#eb1d4e", "#9c28b1", "#5d35b0", "#2097f3", "#029688", "#4cb050"],
          // 第三行
          ["#ffeb3c", "#ffa727", "#fe5722", "#eb4165", "#aa47bc", "#673bb7", "#42a5f6", "#26a59a", "#83c683"],
          // 第四行
          ["#fff176", "#ffb74e", "#ff8a66", "#f1627e", "#b968c7", "#7986cc", "#64b5f6", "#80cbc4", "#a5d6a7"],
          // 第五行
          ["#fff59c", "#ffcc80", "#ffab91", "#fb879e", "#cf93d9", "#9ea8db", "#90caf8", "#b2dfdc", "#c8e6ca"],
          // 最后一行
          ["transparent", "#ffffff", "#dedede", "#a9a9a9", "#4b4b4b", "#353535", "#212121", "#000000", "advance"]],
          gt = defineComponent({
            name: "Palette",
            emits: ["change"],
            setup: function setup(e, _ref7) {
              var t = _ref7.emit;
              return {
                palettes: dt,
                computedBgStyle: function computedBgStyle(i) {
                  return i === "transparent" ? i : i === "advance" ? {} : {
                    background: tinycolor(i).toRgbString()
                  };
                },
                onColorChange: function onColorChange(i) {
                  t("change", i);
                }
              };
            }
          }),
          ht = {
            class: "vc-compact"
          },
          pt = ["onClick"];
        function ft(e, t, o, n, i, l) {
          return openBlock(), createElementBlock("div", ht, [(openBlock(!0), createElementBlock(Fragment, null, renderList(e.palettes, function (a, r) {
            return openBlock(), createElementBlock("div", {
              key: r,
              class: "vc-compact__row"
            }, [(openBlock(!0), createElementBlock(Fragment, null, renderList(a, function (c, k) {
              return openBlock(), createElementBlock("div", {
                key: k,
                class: "vc-compact__color-cube--wrap",
                onClick: function onClick(p) {
                  return e.onColorChange(c);
                }
              }, [createBaseVNode("div", {
                class: normalizeClass(["vc-compact__color_cube", {
                  advance: c === "advance",
                  transparent: c === "transparent"
                }]),
                style: normalizeStyle(e.computedBgStyle(c))
              }, null, 6)], 8, pt);
            }), 128))]);
          }), 128))]);
        }
        var Ke = /* @__PURE__ */q(gt, [["render", ft], ["__scopeId", "data-v-b969fd48"]]);
        var Ct = defineComponent({
            name: "Board",
            props: {
              color: C$1.instanceOf(A),
              round: C$1.bool.def(!1),
              hide: C$1.bool.def(!0)
            },
            emits: ["change"],
            setup: function setup(e, _ref8) {
              var t = _ref8.emit;
              var y, f, w;
              var o = getCurrentInstance(),
                n = {
                  h: ((y = e.color) == null ? void 0 : y.hue) || 0,
                  s: 1,
                  v: 1
                },
                i = new A(n).toHexString(),
                l = reactive({
                  hueColor: i,
                  saturation: ((f = e.color) == null ? void 0 : f.saturation) || 0,
                  brightness: ((w = e.color) == null ? void 0 : w.brightness) || 0
                }),
                a = ref(0),
                r = ref(0),
                c = ref(),
                k = computed(function () {
                  return {
                    top: a.value + "px",
                    left: r.value + "px"
                  };
                }),
                p = function p() {
                  if (o) {
                    var _S = o.vnode.el;
                    r.value = l.saturation * (_S == null ? void 0 : _S.clientWidth), a.value = (1 - l.brightness) * (_S == null ? void 0 : _S.clientHeight);
                  }
                };
              var g = !1;
              var d = function d(S) {
                  g = !0, h(S);
                },
                m = function m(S) {
                  g && h(S);
                },
                b = function b() {
                  g = !1;
                },
                h = function h(S) {
                  if (o) {
                    var _F = o.vnode.el,
                      _E = _F == null ? void 0 : _F.getBoundingClientRect();
                    var _L = S.clientX - _E.left,
                      _U = S.clientY - _E.top;
                    _L = ue(_L, 0, _E.width), _U = ue(_U, 0, _E.height);
                    var _J = _L / _E.width,
                      _X = ue(-(_U / _E.height) + 1, 0, 1);
                    r.value = _L, a.value = _U, l.saturation = _J, l.brightness = _X, t("change", _J, _X);
                  }
                };
              return tryOnMounted(function () {
                o && o.vnode.el && c.value && nextTick(function () {
                  p();
                });
              }), whenever(function () {
                return e.color;
              }, function (S) {
                merge(l, {
                  hueColor: new A({
                    h: S.hue,
                    s: 1,
                    v: 1
                  }).toHexString(),
                  saturation: S.saturation,
                  brightness: S.brightness
                }), p();
              }, {
                deep: !0
              }), {
                state: l,
                cursorElement: c,
                getCursorStyle: k,
                onClickBoard: d,
                onDrag: m,
                onDragEnd: b
              };
            }
          }),
          be = function be(e) {
            return pushScopeId("data-v-7f0cdcdf"), e = e(), popScopeId(), e;
          },
          vt = /* @__PURE__ */be(function () {
            return /* @__PURE__ */createBaseVNode("div", {
              class: "vc-saturation__white"
            }, null, -1);
          }),
          bt = /* @__PURE__ */be(function () {
            return /* @__PURE__ */createBaseVNode("div", {
              class: "vc-saturation__black"
            }, null, -1);
          }),
          yt = /* @__PURE__ */be(function () {
            return /* @__PURE__ */createBaseVNode("div", null, null, -1);
          }),
          _t = [yt];
        function mt(e, t, o, n, i, l) {
          return openBlock(), createElementBlock("div", {
            ref: "boardElement",
            class: normalizeClass(["vc-saturation", {
              "vc-saturation__chrome": e.round,
              "vc-saturation__hidden": e.hide
            }]),
            style: normalizeStyle({
              backgroundColor: e.state.hueColor
            }),
            onMousedown: t[0] || (t[0] = function () {
              return e.onClickBoard && e.onClickBoard.apply(e, arguments);
            }),
            onMousemove: t[1] || (t[1] = function () {
              return e.onDrag && e.onDrag.apply(e, arguments);
            }),
            onMouseup: t[2] || (t[2] = function () {
              return e.onDragEnd && e.onDragEnd.apply(e, arguments);
            })
          }, [vt, bt, createBaseVNode("div", {
            class: "vc-saturation__cursor",
            ref: "cursorElement",
            style: normalizeStyle(e.getCursorStyle)
          }, _t, 4)], 38);
        }
        var ye = /* @__PURE__ */q(Ct, [["render", mt], ["__scopeId", "data-v-7f0cdcdf"]]);
        var St = defineComponent({
            name: "Hue",
            props: {
              color: C$1.instanceOf(A),
              size: C$1.oneOf(["small", "default"]).def("default")
            },
            emits: ["change"],
            setup: function setup(e, _ref9) {
              var t = _ref9.emit;
              var o = ref(null),
                n = ref(null);
              var i = e.color || new A();
              var l = reactive({
                hue: i.hue || 0
              });
              watch(function () {
                return e.color;
              }, function (p) {
                p && (i = p, merge(l, {
                  hue: i.hue
                }));
              }, {
                deep: !0
              });
              var a = function a() {
                  if (o.value && n.value) {
                    var _p = o.value.getBoundingClientRect(),
                      _g2 = n.value.offsetWidth;
                    return l.hue === 360 ? _p.width - _g2 / 2 : l.hue % 360 * (_p.width - _g2) / 360 + _g2 / 2;
                  }
                  return 0;
                },
                r = computed(function () {
                  return {
                    left: a() + "px",
                    top: 0
                  };
                }),
                c = function c(p) {
                  p.target !== o.value && k(p);
                },
                k = function k(p) {
                  if (p.stopPropagation(), o.value && n.value) {
                    var _g3 = o.value.getBoundingClientRect(),
                      _d4 = n.value.offsetWidth;
                    var _m3 = p.clientX - _g3.left;
                    _m3 = Math.min(_m3, _g3.width - _d4 / 2), _m3 = Math.max(_d4 / 2, _m3);
                    var _b3 = Math.round((_m3 - _d4 / 2) / (_g3.width - _d4) * 360);
                    i.hue = _b3, l.hue = _b3, t("change", _b3);
                  }
                };
              return tryOnMounted(function () {
                var p = {
                  drag: function drag(g) {
                    k(g);
                  },
                  end: function end(g) {
                    k(g);
                  }
                };
                o.value && n.value && Vn.triggerDragEvent(o.value, p);
              }), {
                barElement: o,
                cursorElement: n,
                getCursorStyle: r,
                onClickSider: c
              };
            }
          }),
          kt = function kt(e) {
            return pushScopeId("data-v-e1a08576"), e = e(), popScopeId(), e;
          },
          $t = /* @__PURE__ */kt(function () {
            return /* @__PURE__ */createBaseVNode("div", {
              class: "vc-hue-slider__bar-handle"
            }, null, -1);
          }),
          wt = [$t];
        function Bt(e, t, o, n, i, l) {
          return openBlock(), createElementBlock("div", {
            class: normalizeClass(["vc-hue-slider", {
              "small-slider": e.size === "small"
            }])
          }, [createBaseVNode("div", {
            ref: "barElement",
            class: "vc-hue-slider__bar",
            onClick: t[0] || (t[0] = function () {
              return e.onClickSider && e.onClickSider.apply(e, arguments);
            })
          }, [createBaseVNode("div", {
            class: normalizeClass(["vc-hue-slider__bar-pointer", {
              "small-bar": e.size === "small"
            }]),
            ref: "cursorElement",
            style: normalizeStyle(e.getCursorStyle)
          }, wt, 6)], 512)], 2);
        }
        var _e = /* @__PURE__ */q(St, [["render", Bt], ["__scopeId", "data-v-e1a08576"]]);
        var Ht = defineComponent({
            name: "Lightness",
            props: {
              color: C$1.instanceOf(A),
              size: C$1.oneOf(["small", "default"]).def("default")
            },
            emits: ["change"],
            setup: function setup(e, _ref10) {
              var t = _ref10.emit;
              var o = ref(null),
                n = ref(null);
              var i = e.color || new A();
              var _i$HSL = _slicedToArray(i.HSL, 3),
                l = _i$HSL[0],
                a = _i$HSL[1],
                r = _i$HSL[2],
                c = reactive({
                  hue: l,
                  saturation: a,
                  lightness: r
                });
              watch(function () {
                return e.color;
              }, function (b) {
                if (b) {
                  i = b;
                  var _i$HSL2 = _slicedToArray(i.HSL, 3),
                    _h2 = _i$HSL2[0],
                    _y = _i$HSL2[1],
                    _f = _i$HSL2[2];
                  merge(c, {
                    hue: _h2,
                    saturation: _y,
                    lightness: _f
                  });
                }
              }, {
                deep: !0
              });
              var k = computed(function () {
                  var b = tinycolor({
                      h: c.hue,
                      s: c.saturation,
                      l: 0.8
                    }).toPercentageRgbString(),
                    h = tinycolor({
                      h: c.hue,
                      s: c.saturation,
                      l: 0.6
                    }).toPercentageRgbString(),
                    y = tinycolor({
                      h: c.hue,
                      s: c.saturation,
                      l: 0.4
                    }).toPercentageRgbString(),
                    f = tinycolor({
                      h: c.hue,
                      s: c.saturation,
                      l: 0.2
                    }).toPercentageRgbString();
                  return {
                    background: ["linear-gradient(to right, rgb(255, 255, 255), ".concat(b, ", ").concat(h, ", ").concat(y, ", ").concat(f, ", rgb(0, 0, 0))"), "-webkit-linear-gradient(left, rgb(255, 255, 255), ".concat(b, ", ").concat(h, ", ").concat(y, ", ").concat(f, ", rgb(0, 0, 0))"), "-moz-linear-gradient(left, rgb(255, 255, 255), ".concat(b, ", ").concat(h, ", ").concat(y, ", ").concat(f, ", rgb(0, 0, 0))"), "-ms-linear-gradient(left, rgb(255, 255, 255), ".concat(b, ", ").concat(h, ", ").concat(y, ", ").concat(f, ", rgb(0, 0, 0))")]
                  };
                }),
                p = function p() {
                  if (o.value && n.value) {
                    var _b4 = c.lightness,
                      _h3 = o.value.getBoundingClientRect(),
                      _y2 = n.value.offsetWidth;
                    return (1 - _b4) * (_h3.width - _y2) + _y2 / 2;
                  }
                  return 0;
                },
                g = computed(function () {
                  return {
                    left: p() + "px",
                    top: 0
                  };
                }),
                d = function d(b) {
                  b.target !== o.value && m(b);
                },
                m = function m(b) {
                  if (b.stopPropagation(), o.value && n.value) {
                    var _h4 = o.value.getBoundingClientRect(),
                      _y3 = n.value.offsetWidth;
                    var _f2 = b.clientX - _h4.left;
                    _f2 = Math.max(_y3 / 2, _f2), _f2 = Math.min(_f2, _h4.width - _y3 / 2);
                    var _w = 1 - (_f2 - _y3 / 2) / (_h4.width - _y3);
                    i.lightness = _w, t("change", _w);
                  }
                };
              return tryOnMounted(function () {
                var b = {
                  drag: function drag(h) {
                    m(h);
                  },
                  end: function end(h) {
                    m(h);
                  }
                };
                o.value && n.value && Vn.triggerDragEvent(o.value, b);
              }), {
                barElement: o,
                cursorElement: n,
                getCursorStyle: g,
                getBackgroundStyle: k,
                onClickSider: d
              };
            }
          }),
          Rt = function Rt(e) {
            return pushScopeId("data-v-94a50a9e"), e = e(), popScopeId(), e;
          },
          At = /* @__PURE__ */Rt(function () {
            return /* @__PURE__ */createBaseVNode("div", {
              class: "vc-lightness-slider__bar-handle"
            }, null, -1);
          }),
          Pt = [At];
        function Vt(e, t, o, n, i, l) {
          return openBlock(), createElementBlock("div", {
            class: normalizeClass(["vc-lightness-slider", {
              "small-slider": e.size === "small"
            }])
          }, [createBaseVNode("div", {
            ref: "barElement",
            class: "vc-lightness-slider__bar",
            style: normalizeStyle(e.getBackgroundStyle),
            onClick: t[0] || (t[0] = function () {
              return e.onClickSider && e.onClickSider.apply(e, arguments);
            })
          }, [createBaseVNode("div", {
            class: normalizeClass(["vc-lightness-slider__bar-pointer", {
              "small-bar": e.size === "small"
            }]),
            ref: "cursorElement",
            style: normalizeStyle(e.getCursorStyle)
          }, Pt, 6)], 4)], 2);
        }
        var Le = /* @__PURE__ */q(Ht, [["render", Vt], ["__scopeId", "data-v-94a50a9e"]]);
        var Mt = defineComponent({
            name: "History",
            props: {
              colors: C$1.arrayOf(String).def(function () {
                return [];
              }),
              round: C$1.bool.def(!1)
            },
            emits: ["change"],
            setup: function setup(e, _ref11) {
              var t = _ref11.emit;
              return {
                onColorSelect: function onColorSelect(n) {
                  t("change", n);
                }
              };
            }
          }),
          Et = {
            key: 0,
            class: "vc-colorPicker__record"
          },
          It = {
            class: "color-list"
          },
          Kt = ["onClick"];
        function Lt(e, t, o, n, i, l) {
          return e.colors && e.colors.length > 0 ? (openBlock(), createElementBlock("div", Et, [createBaseVNode("div", It, [(openBlock(!0), createElementBlock(Fragment, null, renderList(e.colors, function (a, r) {
            return openBlock(), createElementBlock("div", {
              key: r,
              class: normalizeClass(["color-item", "transparent", {
                "color-item__round": e.round
              }]),
              onClick: function onClick(c) {
                return e.onColorSelect(a);
              }
            }, [createBaseVNode("div", {
              class: "color-item__display",
              style: normalizeStyle({
                backgroundColor: a
              })
            }, null, 4)], 10, Kt);
          }), 128))])])) : createCommentVNode("", !0);
        }
        var me = /* @__PURE__ */q(Mt, [["render", Lt], ["__scopeId", "data-v-0f657238"]]);
        var Nt = defineComponent({
            name: "Display",
            props: {
              color: C$1.instanceOf(A),
              disableAlpha: C$1.bool.def(!1)
            },
            emits: ["update:color", "change"],
            setup: function setup(e, _ref12) {
              var t = _ref12.emit;
              var m, b, h, y;
              var _useClipboard = useClipboard(),
                o = _useClipboard.copy,
                n = _useClipboard.copied,
                i = _useClipboard.isSupported,
                l = ref("hex"),
                a = reactive({
                  color: e.color,
                  hex: (m = e.color) == null ? void 0 : m.hex,
                  alpha: Math.round(((b = e.color) == null ? void 0 : b.alpha) || 100),
                  rgba: (h = e.color) == null ? void 0 : h.RGB,
                  previewBgColor: (y = e.color) == null ? void 0 : y.toRgbString()
                }),
                r = computed(function () {
                  return {
                    background: a.previewBgColor
                  };
                }),
                c = function c() {
                  l.value = l.value === "rgba" ? "hex" : "rgba";
                },
                k = useDebounceFn(function (f) {
                  if (!f.target.value) return;
                  var w = parseInt(f.target.value.replace("%", ""));
                  w > 100 && (f.target.value = "100", w = 100), w < 0 && (f.target.value = "0", w = 0), isNaN(w) && (f.target.value = "100", w = 100), !isNaN(w) && a.color && (a.color.alpha = w), t("change", a.color);
                }, 300),
                p = useDebounceFn(function (f, w) {
                  if (a.color) {
                    if (l.value === "hex") {
                      var _S2 = f.target.value.replace("#", "");
                      tinycolor(_S2).isValid() ? [3, 4].includes(_S2.length) && (a.color.hex = _S2) : a.color.hex = "000000", t("change", a.color);
                    } else if (l.value === "rgba" && w === 3 && f.target.value.toString() === "0." && a.rgba) {
                      a.rgba[w] = f.target.value;
                      var _a$rgba = _slicedToArray(a.rgba, 4),
                        _S3 = _a$rgba[0],
                        _F2 = _a$rgba[1],
                        _E2 = _a$rgba[2],
                        _L2 = _a$rgba[3];
                      a.color.hex = tinycolor({
                        r: _S3,
                        g: _F2,
                        b: _E2
                      }).toHex(), a.color.alpha = Math.round(_L2 * 100), t("change", a.color);
                    }
                  }
                }, 100),
                g = useDebounceFn(function (f, w) {
                  if (f.target.value) {
                    if (l.value === "hex") {
                      var _S4 = f.target.value.replace("#", "");
                      tinycolor(_S4).isValid() && a.color && [6, 8].includes(_S4.length) && (a.color.hex = _S4);
                    } else if (w !== void 0 && a.rgba && a.color) {
                      if (f.target.value < 0 && (f.target.value = 0), w === 3 && ((f.target.value > 1 || isNaN(f.target.value)) && (f.target.value = 1), f.target.value.toString() === "0.")) return;
                      w < 3 && f.target.value > 255 && (f.target.value = 255), a.rgba[w] = f.target.value;
                      var _a$rgba2 = _slicedToArray(a.rgba, 4),
                        _S5 = _a$rgba2[0],
                        _F3 = _a$rgba2[1],
                        _E3 = _a$rgba2[2],
                        _L3 = _a$rgba2[3];
                      a.color.hex = tinycolor({
                        r: _S5,
                        g: _F3,
                        b: _E3
                      }).toHex(), a.color.alpha = Math.round(_L3 * 100);
                    }
                    t("change", a.color);
                  }
                }, 300),
                d = function d() {
                  if (i && a.color) {
                    var _f3 = l.value === "hex" ? a.color.toString(a.color.alpha === 100 ? "hex6" : "hex8") : a.color.toRgbString();
                    o(_f3 || "");
                  }
                };
              return whenever(function () {
                return e.color;
              }, function (f) {
                f && (a.color = f, a.alpha = Math.round(a.color.alpha), a.hex = a.color.hex, a.rgba = a.color.RGB);
              }, {
                deep: !0
              }), whenever(function () {
                return a.color;
              }, function () {
                a.color && (a.previewBgColor = a.color.toRgbString());
              }, {
                deep: !0
              }), {
                state: a,
                getBgColorStyle: r,
                inputType: l,
                copied: n,
                onInputTypeChange: c,
                onAlphaBlur: k,
                onInputChange: g,
                onBlurChange: p,
                onCopyColorStr: d
              };
            }
          }),
          Wt = {
            class: "vc-display"
          },
          Dt = {
            class: "vc-current-color vc-transparent"
          },
          Tt = {
            key: 0,
            class: "copy-text"
          },
          Ot = {
            key: 0,
            style: {
              display: "flex",
              flex: "1",
              gap: "4px",
              height: "100%"
            }
          },
          zt = {
            class: "vc-color-input"
          },
          Gt = {
            key: 0,
            class: "vc-alpha-input"
          },
          Ft = ["value"],
          Xt = {
            key: 1,
            style: {
              display: "flex",
              flex: "1",
              gap: "4px",
              height: "100%"
            }
          },
          qt = ["value", "onInput", "onBlur"];
        function Yt(e, t, o, n, i, l) {
          return openBlock(), createElementBlock("div", Wt, [createBaseVNode("div", Dt, [createBaseVNode("div", {
            class: "color-cube",
            style: normalizeStyle(e.getBgColorStyle),
            onClick: t[0] || (t[0] = function () {
              return e.onCopyColorStr && e.onCopyColorStr.apply(e, arguments);
            })
          }, [e.copied ? (openBlock(), createElementBlock("span", Tt, "Copied!")) : createCommentVNode("", !0)], 4)]), e.inputType === "hex" ? (openBlock(), createElementBlock("div", Ot, [createBaseVNode("div", zt, [withDirectives(createBaseVNode("input", {
            "onUpdate:modelValue": t[1] || (t[1] = function (a) {
              return e.state.hex = a;
            }),
            maxlength: "8",
            onInput: t[2] || (t[2] = function () {
              return e.onInputChange && e.onInputChange.apply(e, arguments);
            }),
            onBlur: t[3] || (t[3] = function () {
              return e.onBlurChange && e.onBlurChange.apply(e, arguments);
            })
          }, null, 544), [[vModelText, e.state.hex]])]), e.disableAlpha ? createCommentVNode("", !0) : (openBlock(), createElementBlock("div", Gt, [createBaseVNode("input", {
            class: "vc-alpha-input__inner",
            value: e.state.alpha,
            onInput: t[4] || (t[4] = function () {
              return e.onAlphaBlur && e.onAlphaBlur.apply(e, arguments);
            })
          }, null, 40, Ft), createTextVNode("% ")]))])) : e.state.rgba ? (openBlock(), createElementBlock("div", Xt, [(openBlock(!0), createElementBlock(Fragment, null, renderList(e.state.rgba, function (a, r) {
            return openBlock(), createElementBlock("div", {
              class: "vc-color-input",
              key: r
            }, [createBaseVNode("input", {
              value: a,
              onInput: function onInput(c) {
                return e.onInputChange(c, r);
              },
              onBlur: function onBlur(c) {
                return e.onBlurChange(c, r);
              }
            }, null, 40, qt)]);
          }), 128))])) : createCommentVNode("", !0), createBaseVNode("div", {
            class: "vc-input-toggle",
            onClick: t[5] || (t[5] = function () {
              return e.onInputTypeChange && e.onInputTypeChange.apply(e, arguments);
            })
          }, toDisplayString(e.inputType), 1)]);
        }
        var Se = /* @__PURE__ */q(Nt, [["render", Yt], ["__scopeId", "data-v-7334ac20"]]);
        var Ut = defineComponent({
            name: "FkColorPicker",
            components: {
              Display: Se,
              Alpha: ve,
              Palette: Ke,
              Board: ye,
              Hue: _e,
              Lightness: Le,
              History: me
            },
            props: {
              color: C$1.instanceOf(A),
              disableHistory: C$1.bool.def(!1),
              roundHistory: C$1.bool.def(!1),
              disableAlpha: C$1.bool.def(!1)
            },
            emits: ["update:color", "change", "advanceChange"],
            setup: function setup(e, _ref13) {
              var t = _ref13.emit;
              var o = e.color || new A(),
                n = reactive({
                  color: o,
                  hex: o.toHexString(),
                  rgb: o.toRgbString()
                }),
                i = ref(!1),
                l = computed(function () {
                  return {
                    background: n.rgb
                  };
                }),
                a = function a() {
                  i.value = !1, t("advanceChange", !1);
                },
                r = useLocalStorage(fe, [], {}),
                c = useDebounceFn(function () {
                  if (e.disableHistory) return;
                  var h = n.color.toRgbString();
                  if (r.value = r.value.filter(function (y) {
                    return !tinycolor.equals(y, h);
                  }), !r.value.includes(h)) {
                    for (; r.value.length > Ce;) r.value.pop();
                    r.value.unshift(h);
                  }
                }, 500),
                k = function k(h) {
                  h === "advance" ? (i.value = !0, t("advanceChange", !0)) : (n.color.hex = h, t("advanceChange", !1));
                },
                p = function p(h) {
                  n.color.alpha = h;
                },
                g = function g(h) {
                  n.color.hue = h;
                },
                d = function d(h, y) {
                  n.color.saturation = h, n.color.brightness = y;
                },
                m = function m(h) {
                  n.color.lightness = h;
                },
                b = function b(h) {
                  var f = h.target.value.replace("#", "");
                  tinycolor(f).isValid() && (n.color.hex = f);
                };
              return whenever(function () {
                return e.color;
              }, function (h) {
                h && (n.color = h);
              }, {
                deep: !0
              }), whenever(function () {
                return n.color;
              }, function () {
                n.hex = n.color.hex, n.rgb = n.color.toRgbString(), c(), t("update:color", n.color), t("change", n.color);
              }, {
                deep: !0
              }), {
                state: n,
                advancePanelShow: i,
                onBack: a,
                onCompactChange: k,
                onAlphaChange: p,
                onHueChange: g,
                onBoardChange: d,
                onLightChange: m,
                onInputChange: b,
                previewStyle: l,
                historyColors: r
              };
            }
          }),
          jt = function jt(e) {
            return pushScopeId("data-v-48e3c224"), e = e(), popScopeId(), e;
          },
          Zt = {
            class: "vc-fk-colorPicker"
          },
          Jt = {
            class: "vc-fk-colorPicker__inner"
          },
          Qt = {
            class: "vc-fk-colorPicker__header"
          },
          xt = /* @__PURE__ */jt(function () {
            return /* @__PURE__ */createBaseVNode("div", {
              class: "back"
            }, null, -1);
          }),
          eo = [xt];
        function to(e, t, o, n, i, l) {
          var a = resolveComponent("Palette"),
            r = resolveComponent("Board"),
            c = resolveComponent("Hue"),
            k = resolveComponent("Lightness"),
            p = resolveComponent("Alpha"),
            g = resolveComponent("Display"),
            d = resolveComponent("History");
          return openBlock(), createElementBlock("div", Zt, [createBaseVNode("div", Jt, [createBaseVNode("div", Qt, [e.advancePanelShow ? (openBlock(), createElementBlock("span", {
            key: 0,
            style: {
              cursor: "pointer"
            },
            onClick: t[0] || (t[0] = function () {
              return e.onBack && e.onBack.apply(e, arguments);
            })
          }, eo)) : createCommentVNode("", !0)]), e.advancePanelShow ? createCommentVNode("", !0) : (openBlock(), createBlock(a, {
            key: 0,
            onChange: e.onCompactChange
          }, null, 8, ["onChange"])), e.advancePanelShow ? (openBlock(), createBlock(r, {
            key: 1,
            color: e.state.color,
            onChange: e.onBoardChange
          }, null, 8, ["color", "onChange"])) : createCommentVNode("", !0), e.advancePanelShow ? (openBlock(), createBlock(c, {
            key: 2,
            color: e.state.color,
            onChange: e.onHueChange
          }, null, 8, ["color", "onChange"])) : createCommentVNode("", !0), e.advancePanelShow ? createCommentVNode("", !0) : (openBlock(), createBlock(k, {
            key: 3,
            color: e.state.color,
            onChange: e.onLightChange
          }, null, 8, ["color", "onChange"])), e.disableAlpha ? createCommentVNode("", !0) : (openBlock(), createBlock(p, {
            key: 4,
            color: e.state.color,
            onChange: e.onAlphaChange
          }, null, 8, ["color", "onChange"])), createVNode(g, {
            color: e.state.color,
            "disable-alpha": e.disableAlpha
          }, null, 8, ["color", "disable-alpha"]), e.disableHistory ? createCommentVNode("", !0) : (openBlock(), createBlock(d, {
            key: 5,
            round: e.roundHistory,
            colors: e.historyColors,
            onChange: e.onCompactChange
          }, null, 8, ["round", "colors", "onChange"]))])]);
        }
        var Pe = /* @__PURE__ */q(Ut, [["render", to], ["__scopeId", "data-v-48e3c224"]]);
        var oo = defineComponent({
            name: "ChromeColorPicker",
            components: {
              Display: Se,
              Alpha: ve,
              Board: ye,
              Hue: _e,
              History: me
            },
            props: {
              color: C$1.instanceOf(A),
              disableHistory: C$1.bool.def(!1),
              roundHistory: C$1.bool.def(!1),
              disableAlpha: C$1.bool.def(!1)
            },
            emits: ["update:color", "change"],
            setup: function setup(e, _ref14) {
              var t = _ref14.emit;
              var o = e.color || new A(),
                n = reactive({
                  color: o,
                  hex: o.toHexString(),
                  rgb: o.toRgbString()
                }),
                i = computed(function () {
                  return {
                    background: n.rgb
                  };
                }),
                l = useLocalStorage(fe, [], {}),
                a = useDebounceFn(function () {
                  if (e.disableHistory) return;
                  var d = n.color.toRgbString();
                  if (l.value = l.value.filter(function (m) {
                    return !tinycolor.equals(m, d);
                  }), !l.value.includes(d)) {
                    for (; l.value.length > Ce;) l.value.pop();
                    l.value.unshift(d);
                  }
                }, 500),
                r = function r(d) {
                  n.color.alpha = d;
                },
                c = function c(d) {
                  n.color.hue = d;
                },
                k = function k(d) {
                  d.hex !== void 0 && (n.color.hex = d.hex), d.alpha !== void 0 && (n.color.alpha = d.alpha);
                },
                p = function p(d, m) {
                  n.color.saturation = d, n.color.brightness = m;
                },
                g = function g(d) {
                  d !== "advance" && (n.color.hex = d);
                };
              return whenever(function () {
                return e.color;
              }, function (d) {
                d && (n.color = d);
              }, {
                deep: !0
              }), whenever(function () {
                return n.color;
              }, function () {
                n.hex = n.color.hex, n.rgb = n.color.toRgbString(), a(), t("update:color", n.color), t("change", n.color);
              }, {
                deep: !0
              }), {
                state: n,
                previewStyle: i,
                historyColors: l,
                onAlphaChange: r,
                onHueChange: c,
                onBoardChange: p,
                onInputChange: k,
                onCompactChange: g
              };
            }
          }),
          no = {
            class: "vc-chrome-colorPicker"
          },
          ao = {
            class: "vc-chrome-colorPicker-body"
          },
          ro = {
            class: "chrome-controls"
          },
          lo = {
            class: "chrome-sliders"
          };
        function so(e, t, o, n, i, l) {
          var a = resolveComponent("Board"),
            r = resolveComponent("Hue"),
            c = resolveComponent("Alpha"),
            k = resolveComponent("Display"),
            p = resolveComponent("History");
          return openBlock(), createElementBlock("div", no, [createVNode(a, {
            round: !0,
            hide: !1,
            color: e.state.color,
            onChange: e.onBoardChange
          }, null, 8, ["color", "onChange"]), createBaseVNode("div", ao, [createBaseVNode("div", ro, [createBaseVNode("div", lo, [createVNode(r, {
            size: "small",
            color: e.state.color,
            onChange: e.onHueChange
          }, null, 8, ["color", "onChange"]), e.disableAlpha ? createCommentVNode("", !0) : (openBlock(), createBlock(c, {
            key: 0,
            size: "small",
            color: e.state.color,
            onChange: e.onAlphaChange
          }, null, 8, ["color", "onChange"]))])]), createVNode(k, {
            color: e.state.color,
            "disable-alpha": e.disableAlpha
          }, null, 8, ["color", "disable-alpha"]), e.disableHistory ? createCommentVNode("", !0) : (openBlock(), createBlock(p, {
            key: 0,
            round: e.roundHistory,
            colors: e.historyColors,
            onChange: e.onCompactChange
          }, null, 8, ["round", "colors", "onChange"]))])]);
        }
        var Ve = /* @__PURE__ */q(oo, [["render", so], ["__scopeId", "data-v-2611d66c"]]),
          ke = "Vue3ColorPickerProvider",
          io = function io(e, t) {
            var o = e.getBoundingClientRect(),
              n = o.left + o.width / 2,
              i = o.top + o.height / 2,
              l = Math.abs(n - t.clientX),
              a = Math.abs(i - t.clientY),
              r = Math.sqrt(Math.pow(l, 2) + Math.pow(a, 2)),
              c = a / r,
              k = Math.acos(c);
            var p = Math.floor(180 / (Math.PI / k));
            return t.clientX > n && t.clientY > i && (p = 180 - p), t.clientX == n && t.clientY > i && (p = 180), t.clientX > n && t.clientY == i && (p = 90), t.clientX < n && t.clientY > i && (p = 180 + p), t.clientX < n && t.clientY == i && (p = 270), t.clientX < n && t.clientY < i && (p = 360 - p), p;
          };
        var de = !1;
        var co = function co(e, t) {
          var o = function o(i) {
              var l;
              (l = t.drag) == null || l.call(t, i);
            },
            _n2 = function n(i) {
              var l;
              document.removeEventListener("mousemove", o, !1), document.removeEventListener("mouseup", _n2, !1), document.onselectstart = null, document.ondragstart = null, de = !1, (l = t.end) == null || l.call(t, i);
            };
          e && e.addEventListener("mousedown", function (i) {
            var l;
            de || (document.onselectstart = function () {
              return !1;
            }, document.ondragstart = function () {
              return !1;
            }, document.addEventListener("mousemove", o, !1), document.addEventListener("mouseup", _n2, !1), de = !0, (l = t.start) == null || l.call(t, i));
          });
        };
        var uo = {
            angle: {
              type: Number,
              default: 0
            },
            size: {
              type: Number,
              default: 16,
              validator: function validator(e) {
                return e >= 16;
              }
            },
            borderWidth: {
              type: Number,
              default: 1,
              validator: function validator(e) {
                return e >= 1;
              }
            },
            borderColor: {
              type: String,
              default: "#666"
            }
          },
          go = defineComponent({
            name: "Angle",
            props: uo,
            emits: ["update:angle", "change"],
            setup: function setup(e, _ref15) {
              var t = _ref15.emit;
              var o = ref(null),
                n = ref(0);
              watch(function () {
                return e.angle;
              }, function (r) {
                n.value = r;
              });
              var i = function i() {
                  var r = Number(n.value);
                  isNaN(r) || (r = r > 360 || r < 0 ? e.angle : r, n.value = r === 360 ? 0 : r, t("update:angle", n.value), t("change", n.value));
                },
                l = computed(function () {
                  return {
                    width: e.size + "px",
                    height: e.size + "px",
                    borderWidth: e.borderWidth + "px",
                    borderColor: e.borderColor,
                    transform: "rotate(".concat(n.value, "deg)")
                  };
                }),
                a = function a(r) {
                  o.value && (n.value = io(o.value, r) % 360, i());
                };
              return onMounted(function () {
                var r = {
                  drag: function drag(c) {
                    a(c);
                  },
                  end: function end(c) {
                    a(c);
                  }
                };
                o.value && co(o.value, r);
              }), function () {
                return createVNode("div", {
                  class: "bee-angle"
                }, [createVNode("div", {
                  class: "bee-angle__round",
                  ref: o,
                  style: l.value
                }, null)]);
              };
            }
          });
        var ho = defineComponent({
            name: "GradientColorPicker",
            components: {
              Angle: go,
              Display: Se,
              Alpha: ve,
              Palette: Ke,
              Board: ye,
              Hue: _e,
              Lightness: Le,
              History: me
            },
            props: {
              startColor: C$1.instanceOf(A).isRequired,
              endColor: C$1.instanceOf(A).isRequired,
              startColorStop: C$1.number.def(0),
              endColorStop: C$1.number.def(100),
              angle: C$1.number.def(0),
              type: C$1.oneOf(["linear", "radial"]).def("linear"),
              disableHistory: C$1.bool.def(!1),
              roundHistory: C$1.bool.def(!1),
              disableAlpha: C$1.bool.def(!1),
              pickerType: C$1.oneOf(["fk", "chrome"]).def("fk")
            },
            emits: ["update:startColor", "update:endColor", "update:angle", "update:startColorStop", "update:endColorStop", "startColorChange", "endColorChange", "advanceChange", "angleChange", "startColorStopChange", "endColorStopChange", "typeChange"],
            setup: function setup(e, _ref16) {
              var t = _ref16.emit;
              var o = reactive({
                  startActive: !0,
                  startColor: e.startColor,
                  endColor: e.endColor,
                  startColorStop: e.startColorStop,
                  endColorStop: e.endColorStop,
                  angle: e.angle,
                  type: e.type,
                  // rgba
                  startColorRgba: e.startColor.toRgbString(),
                  endColorRgba: e.endColor.toRgbString()
                }),
                n = inject(ke),
                i = ref(e.pickerType === "chrome"),
                l = ref(),
                a = ref(),
                r = ref();
              watch(function () {
                return [e.startColor, e.endColor, e.angle];
              }, function (s) {
                o.startColor = s[0], o.endColor = s[1], o.angle = s[2];
              }), watch(function () {
                return e.type;
              }, function (s) {
                o.type = s;
              });
              var c = computed({
                  get: function get() {
                    return o.startActive ? o.startColor : o.endColor;
                  },
                  set: function set(s) {
                    if (o.startActive) {
                      o.startColor = s;
                      return;
                    }
                    o.endColor = s;
                  }
                }),
                k = computed(function () {
                  if (r.value && l.value) {
                    var _s = o.startColorStop / 100,
                      _2 = r.value.getBoundingClientRect(),
                      _H = l.value.offsetWidth;
                    return Math.round(_s * (_2.width - _H) + _H / 2);
                  }
                  return 0;
                }),
                p = computed(function () {
                  if (r.value && a.value) {
                    var _s2 = o.endColorStop / 100,
                      _3 = r.value.getBoundingClientRect(),
                      _H2 = a.value.offsetWidth;
                    return Math.round(_s2 * (_3.width - _H2) + _H2 / 2);
                  }
                  return 0;
                }),
                g = computed(function () {
                  var s = "background: linear-gradient(".concat(o.angle, "deg, ").concat(o.startColorRgba, " ").concat(o.startColorStop, "%, ").concat(o.endColorRgba, " ").concat(o.endColorStop, "%)");
                  return o.type === "radial" && (s = "background: radial-gradient(circle, ".concat(o.startColorRgba, " ").concat(o.startColorStop, "%, ").concat(o.endColorRgba, " ").concat(o.endColorStop, "%)")), s;
                }),
                d = function d(s) {
                  var _;
                  if (o.startActive = !0, r.value && l.value) {
                    var _H3 = (_ = r.value) == null ? void 0 : _.getBoundingClientRect();
                    var _N = s.clientX - _H3.left;
                    _N = Math.max(l.value.offsetWidth / 2, _N), _N = Math.min(_N, _H3.width - l.value.offsetWidth / 2), o.startColorStop = Math.round((_N - l.value.offsetWidth / 2) / (_H3.width - l.value.offsetWidth) * 100), t("update:startColorStop", o.startColorStop), t("startColorStopChange", o.startColorStop);
                  }
                },
                m = function m(s) {
                  var _;
                  if (o.startActive = !1, r.value && a.value) {
                    var _H4 = (_ = r.value) == null ? void 0 : _.getBoundingClientRect();
                    var _N2 = s.clientX - _H4.left;
                    _N2 = Math.max(a.value.offsetWidth / 2, _N2), _N2 = Math.min(_N2, _H4.width - a.value.offsetWidth / 2), o.endColorStop = Math.round((_N2 - a.value.offsetWidth / 2) / (_H4.width - a.value.offsetWidth) * 100), t("update:endColorStop", o.endColorStop), t("endColorStopChange", o.endColorStop);
                  }
                },
                b = function b(s) {
                  var _ = s.target,
                    H = parseInt(_.value.replace("°", ""));
                  isNaN(H) || (o.angle = H % 360), t("update:angle", o.angle), t("angleChange", o.angle);
                },
                h = function h(s) {
                  o.angle = s, t("update:angle", o.angle), t("angleChange", o.angle);
                },
                y = function y(s) {
                  s === "advance" ? (i.value = !0, t("advanceChange", !0)) : (c.value.hex = s, t("advanceChange", !1)), L();
                },
                f = function f(s) {
                  c.value.alpha = s, L();
                },
                w = function w(s) {
                  c.value.hue = s, L();
                },
                S = function S(s, _) {
                  c.value.saturation = s, c.value.brightness = _, L();
                },
                F = function F(s) {
                  c.value.lightness = s, L();
                },
                E = function E() {
                  L();
                },
                L = function L() {
                  o.startActive ? (t("update:startColor", o.startColor), t("startColorChange", o.startColor)) : (t("update:endColor", o.endColor), t("endColorChange", o.endColor));
                },
                U = function U() {
                  i.value = !1, t("advanceChange", !1);
                },
                J = function J() {
                  o.type = o.type === "linear" ? "radial" : "linear", t("typeChange", o.type);
                },
                X = useLocalStorage(fe, [], {}),
                ce = useDebounceFn(function () {
                  if (e.disableHistory) return;
                  var s = c.value.toRgbString();
                  if (X.value = X.value.filter(function (_) {
                    return !tinycolor.equals(_, s);
                  }), !X.value.includes(s)) {
                    for (; X.value.length > Ce;) X.value.pop();
                    X.value.unshift(s);
                  }
                }, 500);
              return tryOnMounted(function () {
                a.value && l.value && (Vn.triggerDragEvent(a.value, {
                  drag: function drag(s) {
                    m(s);
                  },
                  end: function end(s) {
                    m(s);
                  }
                }), Vn.triggerDragEvent(l.value, {
                  drag: function drag(s) {
                    d(s);
                  },
                  end: function end(s) {
                    d(s);
                  }
                }));
              }), whenever(function () {
                return o.startColor;
              }, function (s) {
                o.startColorRgba = s.toRgbString();
              }, {
                deep: !0
              }), whenever(function () {
                return o.endColor;
              }, function (s) {
                o.endColorRgba = s.toRgbString();
              }, {
                deep: !0
              }), whenever(function () {
                return c.value;
              }, function () {
                ce();
              }, {
                deep: !0
              }), {
                startGradientRef: l,
                stopGradientRef: a,
                colorRangeRef: r,
                state: o,
                currentColor: c,
                getStartColorLeft: k,
                getEndColorLeft: p,
                gradientBg: g,
                advancePanelShow: i,
                onDegreeBlur: b,
                onCompactChange: y,
                onAlphaChange: f,
                onHueChange: w,
                onBoardChange: S,
                onLightChange: F,
                historyColors: X,
                onBack: U,
                onDegreeChange: h,
                onDisplayChange: E,
                onTypeChange: J,
                lang: n == null ? void 0 : n.lang
              };
            }
          }),
          Ne = function Ne(e) {
            return pushScopeId("data-v-c4d6d6ea"), e = e(), popScopeId(), e;
          },
          po = {
            class: "vc-gradient-picker"
          },
          fo = {
            class: "vc-gradient-picker__header"
          },
          Co = {
            class: "vc-gradient__types"
          },
          vo = {
            class: "vc-gradient-wrap__types"
          },
          bo = {
            class: "vc-picker-degree-input vc-degree-input"
          },
          yo = {
            class: "vc-degree-input__control"
          },
          _o = ["value"],
          mo = {
            class: "vc-degree-input__panel"
          },
          So = {
            class: "vc-degree-input__disk"
          },
          ko = {
            class: "vc-gradient-picker__body"
          },
          $o = {
            class: "vc-color-range",
            ref: "colorRangeRef"
          },
          wo = {
            class: "vc-color-range__container"
          },
          Bo = {
            class: "vc-gradient__stop__container"
          },
          Ho = ["title"],
          Ro = /* @__PURE__ */Ne(function () {
            return /* @__PURE__ */createBaseVNode("span", {
              class: "vc-gradient__stop--inner"
            }, null, -1);
          }),
          Ao = [Ro],
          Po = ["title"],
          Vo = /* @__PURE__ */Ne(function () {
            return /* @__PURE__ */createBaseVNode("span", {
              class: "vc-gradient__stop--inner"
            }, null, -1);
          }),
          Mo = [Vo];
        function Eo(e, t, o, n, i, l) {
          var b, h;
          var a = resolveComponent("Angle"),
            r = resolveComponent("Board"),
            c = resolveComponent("Hue"),
            k = resolveComponent("Palette"),
            p = resolveComponent("Lightness"),
            g = resolveComponent("Alpha"),
            d = resolveComponent("Display"),
            m = resolveComponent("History");
          return openBlock(), createElementBlock("div", po, [createBaseVNode("div", fo, [createBaseVNode("div", null, [withDirectives(createBaseVNode("div", {
            class: "back",
            style: {
              cursor: "pointer"
            },
            onClick: t[0] || (t[0] = function () {
              return e.onBack && e.onBack.apply(e, arguments);
            })
          }, null, 512), [[vShow, e.pickerType === "fk" && e.advancePanelShow]])]), createBaseVNode("div", Co, [createBaseVNode("div", vo, [(openBlock(), createElementBlock(Fragment, null, renderList(["linear", "radial"], function (y) {
            return createBaseVNode("div", {
              class: normalizeClass(["vc-gradient__type", {
                active: e.state.type === y
              }]),
              key: y,
              onClick: t[1] || (t[1] = function () {
                return e.onTypeChange && e.onTypeChange.apply(e, arguments);
              })
            }, toDisplayString(e.lang ? e.lang[y] : y), 3);
          }), 64))]), withDirectives(createBaseVNode("div", bo, [createBaseVNode("div", yo, [createBaseVNode("input", {
            value: e.state.angle,
            onBlur: t[2] || (t[2] = function () {
              return e.onDegreeBlur && e.onDegreeBlur.apply(e, arguments);
            })
          }, null, 40, _o), createTextVNode("deg ")]), createBaseVNode("div", mo, [createBaseVNode("div", So, [createVNode(a, {
            angle: e.state.angle,
            "onUpdate:angle": t[3] || (t[3] = function (y) {
              return e.state.angle = y;
            }),
            size: 40,
            onChange: e.onDegreeChange
          }, null, 8, ["angle", "onChange"])])])], 512), [[vShow, e.state.type === "linear"]])])]), createBaseVNode("div", ko, [createBaseVNode("div", $o, [createBaseVNode("div", wo, [createBaseVNode("div", {
            class: "vc-background",
            style: normalizeStyle(e.gradientBg)
          }, null, 4), createBaseVNode("div", Bo, [createBaseVNode("div", {
            class: normalizeClass(["vc-gradient__stop", {
              "vc-gradient__stop--current": e.state.startActive
            }]),
            ref: "startGradientRef",
            title: (b = e.lang) == null ? void 0 : b.start,
            style: normalizeStyle({
              left: e.getStartColorLeft + "px",
              backgroundColor: e.state.startColorRgba
            })
          }, Ao, 14, Ho), createBaseVNode("div", {
            class: normalizeClass(["vc-gradient__stop", {
              "vc-gradient__stop--current": !e.state.startActive
            }]),
            ref: "stopGradientRef",
            title: (h = e.lang) == null ? void 0 : h.end,
            style: normalizeStyle({
              left: e.getEndColorLeft + "px",
              backgroundColor: e.state.endColorRgba
            })
          }, Mo, 14, Po)])])], 512)]), e.advancePanelShow ? (openBlock(), createBlock(r, {
            key: 0,
            color: e.currentColor,
            onChange: e.onBoardChange
          }, null, 8, ["color", "onChange"])) : createCommentVNode("", !0), e.advancePanelShow ? (openBlock(), createBlock(c, {
            key: 1,
            color: e.currentColor,
            onChange: e.onHueChange
          }, null, 8, ["color", "onChange"])) : createCommentVNode("", !0), e.advancePanelShow ? createCommentVNode("", !0) : (openBlock(), createBlock(k, {
            key: 2,
            onChange: e.onCompactChange
          }, null, 8, ["onChange"])), e.advancePanelShow ? createCommentVNode("", !0) : (openBlock(), createBlock(p, {
            key: 3,
            color: e.currentColor,
            onChange: e.onLightChange
          }, null, 8, ["color", "onChange"])), e.disableAlpha ? createCommentVNode("", !0) : (openBlock(), createBlock(g, {
            key: 4,
            color: e.currentColor,
            onChange: e.onAlphaChange
          }, null, 8, ["color", "onChange"])), createVNode(d, {
            color: e.currentColor,
            "disable-alpha": e.disableAlpha,
            onChange: e.onDisplayChange
          }, null, 8, ["color", "disable-alpha", "onChange"]), e.disableHistory ? createCommentVNode("", !0) : (openBlock(), createBlock(m, {
            key: 5,
            round: e.roundHistory,
            colors: e.historyColors,
            onChange: e.onCompactChange
          }, null, 8, ["round", "colors", "onChange"]))]);
        }
        var Me = /* @__PURE__ */q(ho, [["render", Eo], ["__scopeId", "data-v-c4d6d6ea"]]);
        var Io = defineComponent({
            name: "WrapContainer",
            props: {
              theme: C$1.oneOf(["white", "black"]).def("white"),
              showTab: C$1.bool.def(!1),
              activeKey: C$1.oneOf(["pure", "gradient"]).def("pure")
            },
            emits: ["update:activeKey", "change"],
            setup: function setup(e, _ref17) {
              var t = _ref17.emit;
              var o = reactive({
                  activeKey: e.activeKey
                }),
                n = inject(ke),
                i = function i(l) {
                  o.activeKey = l, t("update:activeKey", l), t("change", l);
                };
              return whenever(function () {
                return e.activeKey;
              }, function (l) {
                o.activeKey = l;
              }), {
                state: o,
                onActiveKeyChange: i,
                lang: n == null ? void 0 : n.lang
              };
            }
          }),
          Ko = {
            class: "vc-colorpicker--container"
          },
          Lo = {
            key: 0,
            class: "vc-colorpicker--tabs"
          },
          No = {
            class: "vc-colorpicker--tabs__inner"
          },
          Wo = {
            class: "vc-btn__content"
          },
          Do = {
            class: "vc-btn__content"
          };
        function To(e, t, o, n, i, l) {
          var a, r;
          return openBlock(), createElementBlock("div", {
            class: normalizeClass(["vc-colorpicker", e.theme])
          }, [createBaseVNode("div", Ko, [e.showTab ? (openBlock(), createElementBlock("div", Lo, [createBaseVNode("div", No, [createBaseVNode("div", {
            class: normalizeClass(["vc-colorpicker--tabs__btn", {
              "vc-btn-active": e.state.activeKey === "pure"
            }]),
            onClick: t[0] || (t[0] = function (c) {
              return e.onActiveKeyChange("pure");
            })
          }, [createBaseVNode("button", null, [createBaseVNode("div", Wo, toDisplayString((a = e.lang) == null ? void 0 : a.pure), 1)])], 2), createBaseVNode("div", {
            class: normalizeClass(["vc-colorpicker--tabs__btn", {
              "vc-btn-active": e.state.activeKey === "gradient"
            }]),
            onClick: t[1] || (t[1] = function (c) {
              return e.onActiveKeyChange("gradient");
            })
          }, [createBaseVNode("button", null, [createBaseVNode("div", Do, toDisplayString((r = e.lang) == null ? void 0 : r.gradient), 1)])], 2), createBaseVNode("div", {
            class: "vc-colorpicker--tabs__bg",
            style: normalizeStyle({
              width: "50%",
              left: "calc(".concat(e.state.activeKey === "gradient" ? 50 : 0, "%)")
            })
          }, null, 4)])])) : createCommentVNode("", !0), renderSlot(e.$slots, "default", {}, void 0, !0)])], 2);
        }
        var Oo = /* @__PURE__ */q(Io, [["render", To], ["__scopeId", "data-v-0492277d"]]),
          zo = {
            start: "Start",
            end: "End",
            pure: "Pure",
            gradient: "Gradient",
            linear: "linear",
            radial: "radial"
          },
          Go = {
            start: "开始",
            end: "结束",
            pure: "纯色",
            gradient: "渐变",
            linear: "线性",
            radial: "径向"
          },
          Fo = {
            En: zo,
            "ZH-cn": Go
          };
        var Xo = {
            isWidget: C$1.bool.def(!1),
            pickerType: C$1.oneOf(["fk", "chrome"]).def("fk"),
            shape: C$1.oneOf(["circle", "square"]).def("square"),
            pureColor: {
              type: [String, Object],
              default: "#000000"
            },
            gradientColor: C$1.string.def("linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(0, 0, 0, 1) 100%)"),
            format: {
              type: String,
              default: "rgb"
            },
            disableAlpha: C$1.bool.def(!1),
            disableHistory: C$1.bool.def(!1),
            roundHistory: C$1.bool.def(!1),
            useType: C$1.oneOf(["pure", "gradient", "both"]).def("pure"),
            activeKey: C$1.oneOf(["pure", "gradient"]).def("pure"),
            lang: {
              type: String,
              default: "ZH-cn"
            },
            zIndex: C$1.number.def(9999),
            pickerContainer: {
              type: [String, HTMLElement],
              default: "body"
            },
            debounce: C$1.number.def(100),
            theme: C$1.oneOf(["white", "black"]).def("white"),
            blurClose: C$1.bool.def(!1),
            defaultPopup: C$1.bool.def(!1)
          },
          qo = defineComponent({
            name: "ColorPicker",
            components: {
              FkColorPicker: Pe,
              ChromeColorPicker: Ve,
              GradientColorPicker: Me,
              WrapContainer: Oo
            },
            inheritAttrs: !1,
            props: Xo,
            emits: ["update:pureColor", "pureColorChange", "update:gradientColor", "gradientColorChange", "update:activeKey", "activeKeyChange"],
            setup: function setup(e, _ref18) {
              var t = _ref18.emit;
              provide(ke, {
                lang: computed(function () {
                  return Fo[e.lang || "ZH-cn"];
                })
              });
              var o = !!useSlots().extra,
                n = reactive({
                  pureColor: e.pureColor || "",
                  activeKey: e.useType === "gradient" ? "gradient" : e.activeKey,
                  //  "pure" | "gradient"
                  isAdvanceMode: !1
                }),
                i = new A("#000"),
                l = new A("#000"),
                a = new A(n.pureColor),
                r = reactive({
                  startColor: i,
                  endColor: l,
                  startColorStop: 0,
                  endColorStop: 100,
                  angle: 0,
                  type: "linear",
                  gradientColor: e.gradientColor
                }),
                c = ref(a),
                k = ref(e.defaultPopup),
                p = ref(null),
                g = ref(null);
              var d = null;
              var m = computed(function () {
                  return {
                    background: n.activeKey !== "gradient" ? tinycolor(n.pureColor).toRgbString() : r.gradientColor
                  };
                }),
                b = computed(function () {
                  return n.activeKey === "gradient" ? Me.name : e.pickerType === "fk" ? Pe.name : Ve.name;
                }),
                h = function h(s) {
                  n.isAdvanceMode = s;
                },
                y = computed(function () {
                  var s = {
                    disableAlpha: e.disableAlpha,
                    disableHistory: e.disableHistory,
                    roundHistory: e.roundHistory,
                    pickerType: e.pickerType
                  };
                  return n.activeKey === "gradient" ? _objectSpread(_objectSpread({}, s), {}, {
                    startColor: r.startColor,
                    endColor: r.endColor,
                    angle: r.angle,
                    type: r.type,
                    startColorStop: r.startColorStop,
                    endColorStop: r.endColorStop,
                    onStartColorChange: function onStartColorChange(_) {
                      r.startColor = _, E();
                    },
                    onEndColorChange: function onEndColorChange(_) {
                      r.endColor = _, E();
                    },
                    onStartColorStopChange: function onStartColorStopChange(_) {
                      r.startColorStop = _, E();
                    },
                    onEndColorStopChange: function onEndColorStopChange(_) {
                      r.endColorStop = _, E();
                    },
                    onAngleChange: function onAngleChange(_) {
                      r.angle = _, E();
                    },
                    onTypeChange: function onTypeChange(_) {
                      r.type = _, E();
                    },
                    onAdvanceChange: h
                  }) : _objectSpread(_objectSpread({}, s), {}, {
                    disableAlpha: e.disableAlpha,
                    disableHistory: e.disableHistory,
                    roundHistory: e.roundHistory,
                    color: c.value,
                    onChange: J,
                    onAdvanceChange: h
                  });
                }),
                f = function f() {
                  k.value = !0, d ? d.update() : U();
                },
                w = function w() {
                  k.value = !1;
                },
                S = useDebounceFn(function () {
                  !e.isWidget && e.blurClose && w();
                }, 100);
              onClickOutside(g, function () {
                w();
              });
              var F = function F() {
                  var s, _, H, N;
                  try {
                    var _parse = parse(r.gradientColor),
                      _parse2 = _slicedToArray(_parse, 1),
                      _z = _parse2[0];
                    if (_z && _z.type.includes("gradient") && _z.colorStops.length >= 2) {
                      var _$e = _z.colorStops[0],
                        _we = _z.colorStops[1];
                      r.startColorStop = Number((s = _$e.length) == null ? void 0 : s.value) || 0, r.endColorStop = Number((_ = _we.length) == null ? void 0 : _.value) || 0, _z.type === "linear-gradient" && ((H = _z.orientation) == null ? void 0 : H.type) === "angular" && (r.angle = Number((N = _z.orientation) == null ? void 0 : N.value) || 0), r.type = _z.type.split("-")[0];
                      var _$e$value = _slicedToArray(_$e.value, 4),
                        _We = _$e$value[0],
                        _De = _$e$value[1],
                        _Te = _$e$value[2],
                        _Oe = _$e$value[3],
                        _we$value = _slicedToArray(_we.value, 4),
                        _ze = _we$value[0],
                        _Ge = _we$value[1],
                        _Fe = _we$value[2],
                        _Xe = _we$value[3];
                      r.startColor = new A({
                        r: Number(_We),
                        g: Number(_De),
                        b: Number(_Te),
                        a: Number(_Oe)
                      }), r.endColor = new A({
                        r: Number(_ze),
                        g: Number(_Ge),
                        b: Number(_Fe),
                        a: Number(_Xe)
                      });
                    }
                  } catch (z) {
                    console.log("[Parse Color]: ".concat(z));
                  }
                },
                E = useDebounceFn(function () {
                  var s = L();
                  try {
                    r.gradientColor = stringify(s), t("update:gradientColor", r.gradientColor), t("gradientColorChange", r.gradientColor);
                  } catch (_) {
                    console.log(_);
                  }
                }, e.debounce),
                L = function L() {
                  var s = [],
                    _ = r.startColor.RGB.map(function (z) {
                      return z.toString();
                    }),
                    H = r.endColor.RGB.map(function (z) {
                      return z.toString();
                    }),
                    N = [{
                      type: "rgba",
                      value: [_[0], _[1], _[2], _[3]],
                      length: {
                        value: r.startColorStop + "",
                        type: "%"
                      }
                    }, {
                      type: "rgba",
                      value: [H[0], H[1], H[2], H[3]],
                      length: {
                        value: r.endColorStop + "",
                        type: "%"
                      }
                    }];
                  return r.type === "linear" ? s.push({
                    type: "linear-gradient",
                    orientation: {
                      type: "angular",
                      value: r.angle + ""
                    },
                    colorStops: N
                  }) : r.type === "radial" && s.push({
                    type: "radial-gradient",
                    orientation: [{
                      type: "shape",
                      value: "circle"
                    }],
                    colorStops: N
                  }), s;
                },
                U = function U() {
                  p.value && g.value && (d = createPopper(p.value, g.value, {
                    placement: "auto",
                    modifiers: [{
                      name: "offset",
                      options: {
                        offset: [0, 8]
                      }
                    }, {
                      name: "flip",
                      options: {
                        allowedAutoPlacements: ["top", "bottom", "left", "right"],
                        rootBoundary: "viewport"
                      }
                    }]
                  }));
                },
                J = function J(s) {
                  c.value = s, n.pureColor = s.toString(e.format), X();
                },
                X = useDebounceFn(function () {
                  t("update:pureColor", n.pureColor), t("pureColorChange", n.pureColor);
                }, e.debounce),
                ce = function ce(s) {
                  n.activeKey = s, t("update:activeKey", s), t("activeKeyChange", s);
                };
              return tryOnMounted(function () {
                F(), d || U();
              }), whenever(function () {
                return e.gradientColor;
              }, function (s) {
                s != r.gradientColor && (r.gradientColor = s);
              }), whenever(function () {
                return r.gradientColor;
              }, function () {
                F();
              }), whenever(function () {
                return e.activeKey;
              }, function (s) {
                n.activeKey = s;
              }), whenever(function () {
                return e.useType;
              }, function (s) {
                n.activeKey !== "gradient" && s === "gradient" ? n.activeKey = "gradient" : n.activeKey = "pure";
              }), whenever(function () {
                return e.pureColor;
              }, function (s) {
                tinycolor.equals(s, n.pureColor) || (n.pureColor = s, c.value = new A(s));
              }, {
                deep: !0
              }), {
                colorCubeRef: p,
                pickerRef: g,
                showPicker: k,
                colorInstance: c,
                getBgColorStyle: m,
                getComponentName: b,
                getBindArgs: y,
                state: n,
                hasExtra: o,
                onColorChange: J,
                onShowPicker: f,
                onActiveKeyChange: ce,
                onAutoClose: S
              };
            }
          }),
          Yo = {
            key: 0,
            class: "vc-color-extra"
          },
          Uo = {
            key: 0,
            class: "vc-color-extra"
          };
        function jo(e, t, o, n, i, l) {
          var a = resolveComponent("WrapContainer");
          return openBlock(), createElementBlock(Fragment, null, [e.isWidget ? (openBlock(), createBlock(a, {
            key: 0,
            "active-key": e.state.activeKey,
            "onUpdate:activeKey": t[0] || (t[0] = function (r) {
              return e.state.activeKey = r;
            }),
            "show-tab": e.useType === "both",
            style: normalizeStyle({
              zIndex: e.zIndex
            }),
            theme: e.theme,
            onChange: e.onActiveKeyChange
          }, {
            default: withCtx(function () {
              return [(openBlock(), createBlock(resolveDynamicComponent(e.getComponentName), mergeProps({
                key: e.getComponentName
              }, e.getBindArgs), null, 16)), e.hasExtra ? (openBlock(), createElementBlock("div", Yo, [renderSlot(e.$slots, "extra", {}, void 0, !0)])) : createCommentVNode("", !0)];
            }),
            _: 3
          }, 8, ["active-key", "show-tab", "style", "theme", "onChange"])) : createCommentVNode("", !0), e.isWidget ? createCommentVNode("", !0) : (openBlock(), createElementBlock(Fragment, {
            key: 1
          }, [createBaseVNode("div", {
            class: normalizeClass(["vc-color-wrap transparent", {
              round: e.shape === "circle"
            }]),
            ref: "colorCubeRef"
          }, [createBaseVNode("div", {
            class: "current-color",
            style: normalizeStyle(e.getBgColorStyle),
            onClick: t[1] || (t[1] = function () {
              return e.onShowPicker && e.onShowPicker.apply(e, arguments);
            })
          }, null, 4)], 2), (openBlock(), createBlock(Teleport, {
            to: e.pickerContainer
          }, [withDirectives(createBaseVNode("div", {
            ref: "pickerRef",
            style: normalizeStyle({
              zIndex: e.zIndex
            }),
            onMouseleave: t[3] || (t[3] = function () {
              return e.onAutoClose && e.onAutoClose.apply(e, arguments);
            })
          }, [e.showPicker ? (openBlock(), createBlock(a, {
            key: 0,
            "show-tab": e.useType === "both" && !e.state.isAdvanceMode,
            theme: e.theme,
            "active-key": e.state.activeKey,
            "onUpdate:activeKey": t[2] || (t[2] = function (r) {
              return e.state.activeKey = r;
            }),
            onChange: e.onActiveKeyChange
          }, {
            default: withCtx(function () {
              return [(openBlock(), createBlock(resolveDynamicComponent(e.getComponentName), mergeProps({
                key: e.getComponentName
              }, e.getBindArgs), null, 16)), e.hasExtra ? (openBlock(), createElementBlock("div", Uo, [renderSlot(e.$slots, "extra", {}, void 0, !0)])) : createCommentVNode("", !0)];
            }),
            _: 3
          }, 8, ["show-tab", "theme", "active-key", "onChange"])) : createCommentVNode("", !0)], 36), [[vShow, e.showPicker]])], 8, ["to"]))], 64))], 64);
        }
        var re = /* @__PURE__ */q(qo, [["render", jo], ["__scopeId", "data-v-354ca836"]]);
        var util;
        (function (util) {
          util.assertEqual = function (val) {
            return val;
          };
          function assertIs(_arg) {}
          util.assertIs = assertIs;
          function assertNever(_x) {
            throw new Error();
          }
          util.assertNever = assertNever;
          util.arrayToEnum = function (items) {
            var obj = {};
            var _iterator2 = _createForOfIteratorHelper(items),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var item = _step2.value;
                obj[item] = item;
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
            return obj;
          };
          util.getValidEnumValues = function (obj) {
            var validKeys = util.objectKeys(obj).filter(function (k) {
              return typeof obj[obj[k]] !== "number";
            });
            var filtered = {};
            var _iterator3 = _createForOfIteratorHelper(validKeys),
              _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var _k = _step3.value;
                filtered[_k] = obj[_k];
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
            return util.objectValues(filtered);
          };
          util.objectValues = function (obj) {
            return util.objectKeys(obj).map(function (e) {
              return obj[e];
            });
          };
          util.objectKeys = typeof Object.keys === "function" // eslint-disable-line ban/ban
          ? function (obj) {
            return Object.keys(obj);
          } // eslint-disable-line ban/ban
          : function (object) {
            var keys = [];
            for (var key in object) {
              if (Object.prototype.hasOwnProperty.call(object, key)) {
                keys.push(key);
              }
            }
            return keys;
          };
          util.find = function (arr, checker) {
            var _iterator4 = _createForOfIteratorHelper(arr),
              _step4;
            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var item = _step4.value;
                if (checker(item)) return item;
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
            return undefined;
          };
          util.isInteger = typeof Number.isInteger === "function" ? function (val) {
            return Number.isInteger(val);
          } // eslint-disable-line ban/ban
          : function (val) {
            return typeof val === "number" && isFinite(val) && Math.floor(val) === val;
          };
          function joinValues(array) {
            var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : " | ";
            return array.map(function (val) {
              return typeof val === "string" ? "'".concat(val, "'") : val;
            }).join(separator);
          }
          util.joinValues = joinValues;
          util.jsonStringifyReplacer = function (_, value) {
            if (typeof value === "bigint") {
              return value.toString();
            }
            return value;
          };
        })(util || (util = {}));
        var objectUtil;
        (function (objectUtil) {
          objectUtil.mergeShapes = function (first, second) {
            return _objectSpread(_objectSpread({}, first), second);
          };
        })(objectUtil || (objectUtil = {}));
        var ZodParsedType = util.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]);
        var getParsedType = function getParsedType(data) {
          var t = _typeof2(data);
          switch (t) {
            case "undefined":
              return ZodParsedType.undefined;
            case "string":
              return ZodParsedType.string;
            case "number":
              return isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
            case "boolean":
              return ZodParsedType.boolean;
            case "function":
              return ZodParsedType.function;
            case "bigint":
              return ZodParsedType.bigint;
            case "symbol":
              return ZodParsedType.symbol;
            case "object":
              if (Array.isArray(data)) {
                return ZodParsedType.array;
              }
              if (data === null) {
                return ZodParsedType.null;
              }
              if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
                return ZodParsedType.promise;
              }
              if (typeof Map !== "undefined" && data instanceof Map) {
                return ZodParsedType.map;
              }
              if (typeof Set !== "undefined" && data instanceof Set) {
                return ZodParsedType.set;
              }
              if (typeof Date !== "undefined" && data instanceof Date) {
                return ZodParsedType.date;
              }
              return ZodParsedType.object;
            default:
              return ZodParsedType.unknown;
          }
        };
        var ZodIssueCode = util.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
        var quotelessJson = function quotelessJson(obj) {
          var json = JSON.stringify(obj, null, 2);
          return json.replace(/"([^"]+)":/g, "$1:");
        };
        var ZodError = /*#__PURE__*/function (_Error) {
          function ZodError(issues) {
            var _this4;
            _classCallCheck(this, ZodError);
            _this4 = _callSuper(this, ZodError);
            _this4.issues = [];
            _this4.addIssue = function (sub) {
              _this4.issues = [].concat(_toConsumableArray(_this4.issues), [sub]);
            };
            _this4.addIssues = function () {
              var subs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
              _this4.issues = [].concat(_toConsumableArray(_this4.issues), _toConsumableArray(subs));
            };
            var actualProto = (this instanceof ZodError ? this.constructor : void 0).prototype;
            if (Object.setPrototypeOf) {
              // eslint-disable-next-line ban/ban
              Object.setPrototypeOf(_this4, actualProto);
            } else {
              _this4.__proto__ = actualProto;
            }
            _this4.name = "ZodError";
            _this4.issues = issues;
            return _this4;
          }
          _inherits(ZodError, _Error);
          return _createClass(ZodError, [{
            key: "errors",
            get: function get() {
              return this.issues;
            }
          }, {
            key: "format",
            value: function format(_mapper) {
              var mapper = _mapper || function (issue) {
                return issue.message;
              };
              var fieldErrors = {
                _errors: []
              };
              var _processError = function processError(error) {
                var _iterator5 = _createForOfIteratorHelper(error.issues),
                  _step5;
                try {
                  for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                    var issue = _step5.value;
                    if (issue.code === "invalid_union") {
                      issue.unionErrors.map(_processError);
                    } else if (issue.code === "invalid_return_type") {
                      _processError(issue.returnTypeError);
                    } else if (issue.code === "invalid_arguments") {
                      _processError(issue.argumentsError);
                    } else if (issue.path.length === 0) {
                      fieldErrors._errors.push(mapper(issue));
                    } else {
                      var curr = fieldErrors;
                      var _i3 = 0;
                      while (_i3 < issue.path.length) {
                        var el = issue.path[_i3];
                        var terminal = _i3 === issue.path.length - 1;
                        if (!terminal) {
                          curr[el] = curr[el] || {
                            _errors: []
                          };
                          // if (typeof el === "string") {
                          //   curr[el] = curr[el] || { _errors: [] };
                          // } else if (typeof el === "number") {
                          //   const errorArray: any = [];
                          //   errorArray._errors = [];
                          //   curr[el] = curr[el] || errorArray;
                          // }
                        } else {
                          curr[el] = curr[el] || {
                            _errors: []
                          };
                          curr[el]._errors.push(mapper(issue));
                        }
                        curr = curr[el];
                        _i3++;
                      }
                    }
                  }
                } catch (err) {
                  _iterator5.e(err);
                } finally {
                  _iterator5.f();
                }
              };
              _processError(this);
              return fieldErrors;
            }
          }, {
            key: "toString",
            value: function toString() {
              return this.message;
            }
          }, {
            key: "message",
            get: function get() {
              return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
            }
          }, {
            key: "isEmpty",
            get: function get() {
              return this.issues.length === 0;
            }
          }, {
            key: "flatten",
            value: function flatten() {
              var mapper = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (issue) {
                return issue.message;
              };
              var fieldErrors = {};
              var formErrors = [];
              var _iterator6 = _createForOfIteratorHelper(this.issues),
                _step6;
              try {
                for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                  var sub = _step6.value;
                  if (sub.path.length > 0) {
                    fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
                    fieldErrors[sub.path[0]].push(mapper(sub));
                  } else {
                    formErrors.push(mapper(sub));
                  }
                }
              } catch (err) {
                _iterator6.e(err);
              } finally {
                _iterator6.f();
              }
              return {
                formErrors: formErrors,
                fieldErrors: fieldErrors
              };
            }
          }, {
            key: "formErrors",
            get: function get() {
              return this.flatten();
            }
          }], [{
            key: "assert",
            value: function assert(value) {
              if (!(value instanceof ZodError)) {
                throw new Error("Not a ZodError: ".concat(value));
              }
            }
          }]);
        }(/*#__PURE__*/_wrapNativeSuper(Error));
        ZodError.create = function (issues) {
          var error = new ZodError(issues);
          return error;
        };
        var errorMap = function errorMap(issue, _ctx) {
          var message;
          switch (issue.code) {
            case ZodIssueCode.invalid_type:
              if (issue.received === ZodParsedType.undefined) {
                message = "Required";
              } else {
                message = "Expected ".concat(issue.expected, ", received ").concat(issue.received);
              }
              break;
            case ZodIssueCode.invalid_literal:
              message = "Invalid literal value, expected ".concat(JSON.stringify(issue.expected, util.jsonStringifyReplacer));
              break;
            case ZodIssueCode.unrecognized_keys:
              message = "Unrecognized key(s) in object: ".concat(util.joinValues(issue.keys, ", "));
              break;
            case ZodIssueCode.invalid_union:
              message = "Invalid input";
              break;
            case ZodIssueCode.invalid_union_discriminator:
              message = "Invalid discriminator value. Expected ".concat(util.joinValues(issue.options));
              break;
            case ZodIssueCode.invalid_enum_value:
              message = "Invalid enum value. Expected ".concat(util.joinValues(issue.options), ", received '").concat(issue.received, "'");
              break;
            case ZodIssueCode.invalid_arguments:
              message = "Invalid function arguments";
              break;
            case ZodIssueCode.invalid_return_type:
              message = "Invalid function return type";
              break;
            case ZodIssueCode.invalid_date:
              message = "Invalid date";
              break;
            case ZodIssueCode.invalid_string:
              if (_typeof2(issue.validation) === "object") {
                if ("includes" in issue.validation) {
                  message = "Invalid input: must include \"".concat(issue.validation.includes, "\"");
                  if (typeof issue.validation.position === "number") {
                    message = "".concat(message, " at one or more positions greater than or equal to ").concat(issue.validation.position);
                  }
                } else if ("startsWith" in issue.validation) {
                  message = "Invalid input: must start with \"".concat(issue.validation.startsWith, "\"");
                } else if ("endsWith" in issue.validation) {
                  message = "Invalid input: must end with \"".concat(issue.validation.endsWith, "\"");
                } else {
                  util.assertNever(issue.validation);
                }
              } else if (issue.validation !== "regex") {
                message = "Invalid ".concat(issue.validation);
              } else {
                message = "Invalid";
              }
              break;
            case ZodIssueCode.too_small:
              if (issue.type === "array") message = "Array must contain ".concat(issue.exact ? "exactly" : issue.inclusive ? "at least" : "more than", " ").concat(issue.minimum, " element(s)");else if (issue.type === "string") message = "String must contain ".concat(issue.exact ? "exactly" : issue.inclusive ? "at least" : "over", " ").concat(issue.minimum, " character(s)");else if (issue.type === "number") message = "Number must be ".concat(issue.exact ? "exactly equal to " : issue.inclusive ? "greater than or equal to " : "greater than ").concat(issue.minimum);else if (issue.type === "date") message = "Date must be ".concat(issue.exact ? "exactly equal to " : issue.inclusive ? "greater than or equal to " : "greater than ").concat(new Date(Number(issue.minimum)));else message = "Invalid input";
              break;
            case ZodIssueCode.too_big:
              if (issue.type === "array") message = "Array must contain ".concat(issue.exact ? "exactly" : issue.inclusive ? "at most" : "less than", " ").concat(issue.maximum, " element(s)");else if (issue.type === "string") message = "String must contain ".concat(issue.exact ? "exactly" : issue.inclusive ? "at most" : "under", " ").concat(issue.maximum, " character(s)");else if (issue.type === "number") message = "Number must be ".concat(issue.exact ? "exactly" : issue.inclusive ? "less than or equal to" : "less than", " ").concat(issue.maximum);else if (issue.type === "bigint") message = "BigInt must be ".concat(issue.exact ? "exactly" : issue.inclusive ? "less than or equal to" : "less than", " ").concat(issue.maximum);else if (issue.type === "date") message = "Date must be ".concat(issue.exact ? "exactly" : issue.inclusive ? "smaller than or equal to" : "smaller than", " ").concat(new Date(Number(issue.maximum)));else message = "Invalid input";
              break;
            case ZodIssueCode.custom:
              message = "Invalid input";
              break;
            case ZodIssueCode.invalid_intersection_types:
              message = "Intersection results could not be merged";
              break;
            case ZodIssueCode.not_multiple_of:
              message = "Number must be a multiple of ".concat(issue.multipleOf);
              break;
            case ZodIssueCode.not_finite:
              message = "Number must be finite";
              break;
            default:
              message = _ctx.defaultError;
              util.assertNever(issue);
          }
          return {
            message: message
          };
        };
        var overrideErrorMap = errorMap;
        function setErrorMap(map) {
          overrideErrorMap = map;
        }
        function getErrorMap() {
          return overrideErrorMap;
        }
        var makeIssue = function makeIssue(params) {
          var data = params.data,
            path = params.path,
            errorMaps = params.errorMaps,
            issueData = params.issueData;
          var fullPath = [].concat(_toConsumableArray(path), _toConsumableArray(issueData.path || []));
          var fullIssue = _objectSpread(_objectSpread({}, issueData), {}, {
            path: fullPath
          });
          if (issueData.message !== undefined) {
            return _objectSpread(_objectSpread({}, issueData), {}, {
              path: fullPath,
              message: issueData.message
            });
          }
          var errorMessage = "";
          var maps = errorMaps.filter(function (m) {
            return !!m;
          }).slice().reverse();
          var _iterator7 = _createForOfIteratorHelper(maps),
            _step7;
          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var map = _step7.value;
              errorMessage = map(fullIssue, {
                data: data,
                defaultError: errorMessage
              }).message;
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }
          return _objectSpread(_objectSpread({}, issueData), {}, {
            path: fullPath,
            message: errorMessage
          });
        };
        var EMPTY_PATH = [];
        function addIssueToContext(ctx, issueData) {
          var overrideMap = getErrorMap();
          var issue = makeIssue({
            issueData: issueData,
            data: ctx.data,
            path: ctx.path,
            errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, overrideMap, overrideMap === errorMap ? undefined : errorMap // then global default map
            ].filter(function (x) {
              return !!x;
            })
          });
          ctx.common.issues.push(issue);
        }
        var ParseStatus = /*#__PURE__*/function () {
          function ParseStatus() {
            _classCallCheck(this, ParseStatus);
            this.value = "valid";
          }
          return _createClass(ParseStatus, [{
            key: "dirty",
            value: function dirty() {
              if (this.value === "valid") this.value = "dirty";
            }
          }, {
            key: "abort",
            value: function abort() {
              if (this.value !== "aborted") this.value = "aborted";
            }
          }], [{
            key: "mergeArray",
            value: function mergeArray(status, results) {
              var arrayValue = [];
              var _iterator8 = _createForOfIteratorHelper(results),
                _step8;
              try {
                for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                  var _s3 = _step8.value;
                  if (_s3.status === "aborted") return INVALID;
                  if (_s3.status === "dirty") status.dirty();
                  arrayValue.push(_s3.value);
                }
              } catch (err) {
                _iterator8.e(err);
              } finally {
                _iterator8.f();
              }
              return {
                status: status.value,
                value: arrayValue
              };
            }
          }, {
            key: "mergeObjectAsync",
            value: function () {
              var _mergeObjectAsync = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(status, pairs) {
                var syncPairs, _iterator9, _step9, pair, key, value;
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      syncPairs = [];
                      _iterator9 = _createForOfIteratorHelper(pairs);
                      _context.prev = 2;
                      _iterator9.s();
                    case 4:
                      if ((_step9 = _iterator9.n()).done) {
                        _context.next = 15;
                        break;
                      }
                      pair = _step9.value;
                      _context.next = 8;
                      return pair.key;
                    case 8:
                      key = _context.sent;
                      _context.next = 11;
                      return pair.value;
                    case 11:
                      value = _context.sent;
                      syncPairs.push({
                        key: key,
                        value: value
                      });
                    case 13:
                      _context.next = 4;
                      break;
                    case 15:
                      _context.next = 20;
                      break;
                    case 17:
                      _context.prev = 17;
                      _context.t0 = _context["catch"](2);
                      _iterator9.e(_context.t0);
                    case 20:
                      _context.prev = 20;
                      _iterator9.f();
                      return _context.finish(20);
                    case 23:
                      return _context.abrupt("return", ParseStatus.mergeObjectSync(status, syncPairs));
                    case 24:
                    case "end":
                      return _context.stop();
                  }
                }, _callee, null, [[2, 17, 20, 23]]);
              }));
              function mergeObjectAsync(_x2, _x3) {
                return _mergeObjectAsync.apply(this, arguments);
              }
              return mergeObjectAsync;
            }()
          }, {
            key: "mergeObjectSync",
            value: function mergeObjectSync(status, pairs) {
              var finalObject = {};
              var _iterator10 = _createForOfIteratorHelper(pairs),
                _step10;
              try {
                for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                  var pair = _step10.value;
                  var key = pair.key,
                    value = pair.value;
                  if (key.status === "aborted") return INVALID;
                  if (value.status === "aborted") return INVALID;
                  if (key.status === "dirty") status.dirty();
                  if (value.status === "dirty") status.dirty();
                  if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
                    finalObject[key.value] = value.value;
                  }
                }
              } catch (err) {
                _iterator10.e(err);
              } finally {
                _iterator10.f();
              }
              return {
                status: status.value,
                value: finalObject
              };
            }
          }]);
        }();
        var INVALID = Object.freeze({
          status: "aborted"
        });
        var DIRTY = function DIRTY(value) {
          return {
            status: "dirty",
            value: value
          };
        };
        var OK = function OK(value) {
          return {
            status: "valid",
            value: value
          };
        };
        var isAborted = function isAborted(x) {
          return x.status === "aborted";
        };
        var isDirty = function isDirty(x) {
          return x.status === "dirty";
        };
        var isValid = function isValid(x) {
          return x.status === "valid";
        };
        var isAsync = function isAsync(x) {
          return typeof Promise !== "undefined" && x instanceof Promise;
        };

        /******************************************************************************
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

        function __classPrivateFieldGet(receiver, state, kind, f) {
          if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return state.get(receiver);
        }
        function __classPrivateFieldSet(receiver, state, value, kind, f) {
          if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
          return state.set(receiver, value), value;
        }
        typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
          var e = new Error(message);
          return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
        };
        var errorUtil;
        (function (errorUtil) {
          errorUtil.errToObj = function (message) {
            return typeof message === "string" ? {
              message: message
            } : message || {};
          };
          errorUtil.toString = function (message) {
            return typeof message === "string" ? message : message === null || message === void 0 ? void 0 : message.message;
          };
        })(errorUtil || (errorUtil = {}));
        var _ZodEnum_cache, _ZodNativeEnum_cache;
        var ParseInputLazyPath = /*#__PURE__*/function () {
          function ParseInputLazyPath(parent, value, path, key) {
            _classCallCheck(this, ParseInputLazyPath);
            this._cachedPath = [];
            this.parent = parent;
            this.data = value;
            this._path = path;
            this._key = key;
          }
          return _createClass(ParseInputLazyPath, [{
            key: "path",
            get: function get() {
              if (!this._cachedPath.length) {
                if (this._key instanceof Array) {
                  var _this$_cachedPath;
                  (_this$_cachedPath = this._cachedPath).push.apply(_this$_cachedPath, _toConsumableArray(this._path).concat(_toConsumableArray(this._key)));
                } else {
                  var _this$_cachedPath2;
                  (_this$_cachedPath2 = this._cachedPath).push.apply(_this$_cachedPath2, _toConsumableArray(this._path).concat([this._key]));
                }
              }
              return this._cachedPath;
            }
          }]);
        }();
        var handleResult = function handleResult(ctx, result) {
          if (isValid(result)) {
            return {
              success: true,
              data: result.value
            };
          } else {
            if (!ctx.common.issues.length) {
              throw new Error("Validation failed but no issues detected.");
            }
            return {
              success: false,
              get error() {
                if (this._error) return this._error;
                var error = new ZodError(ctx.common.issues);
                this._error = error;
                return this._error;
              }
            };
          }
        };
        function processCreateParams(params) {
          if (!params) return {};
          var errorMap = params.errorMap,
            invalid_type_error = params.invalid_type_error,
            required_error = params.required_error,
            description = params.description;
          if (errorMap && (invalid_type_error || required_error)) {
            throw new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
          }
          if (errorMap) return {
            errorMap: errorMap,
            description: description
          };
          var customMap = function customMap(iss, ctx) {
            var _a, _b;
            var message = params.message;
            if (iss.code === "invalid_enum_value") {
              return {
                message: message !== null && message !== void 0 ? message : ctx.defaultError
              };
            }
            if (typeof ctx.data === "undefined") {
              return {
                message: (_a = message !== null && message !== void 0 ? message : required_error) !== null && _a !== void 0 ? _a : ctx.defaultError
              };
            }
            if (iss.code !== "invalid_type") return {
              message: ctx.defaultError
            };
            return {
              message: (_b = message !== null && message !== void 0 ? message : invalid_type_error) !== null && _b !== void 0 ? _b : ctx.defaultError
            };
          };
          return {
            errorMap: customMap,
            description: description
          };
        }
        var ZodType = /*#__PURE__*/function () {
          function ZodType(def) {
            _classCallCheck(this, ZodType);
            /** Alias of safeParseAsync */
            this.spa = this.safeParseAsync;
            this._def = def;
            this.parse = this.parse.bind(this);
            this.safeParse = this.safeParse.bind(this);
            this.parseAsync = this.parseAsync.bind(this);
            this.safeParseAsync = this.safeParseAsync.bind(this);
            this.spa = this.spa.bind(this);
            this.refine = this.refine.bind(this);
            this.refinement = this.refinement.bind(this);
            this.superRefine = this.superRefine.bind(this);
            this.optional = this.optional.bind(this);
            this.nullable = this.nullable.bind(this);
            this.nullish = this.nullish.bind(this);
            this.array = this.array.bind(this);
            this.promise = this.promise.bind(this);
            this.or = this.or.bind(this);
            this.and = this.and.bind(this);
            this.transform = this.transform.bind(this);
            this.brand = this.brand.bind(this);
            this.default = this.default.bind(this);
            this.catch = this.catch.bind(this);
            this.describe = this.describe.bind(this);
            this.pipe = this.pipe.bind(this);
            this.readonly = this.readonly.bind(this);
            this.isNullable = this.isNullable.bind(this);
            this.isOptional = this.isOptional.bind(this);
          }
          return _createClass(ZodType, [{
            key: "description",
            get: function get() {
              return this._def.description;
            }
          }, {
            key: "_getType",
            value: function _getType(input) {
              return getParsedType(input.data);
            }
          }, {
            key: "_getOrReturnCtx",
            value: function _getOrReturnCtx(input, ctx) {
              return ctx || {
                common: input.parent.common,
                data: input.data,
                parsedType: getParsedType(input.data),
                schemaErrorMap: this._def.errorMap,
                path: input.path,
                parent: input.parent
              };
            }
          }, {
            key: "_processInputParams",
            value: function _processInputParams(input) {
              return {
                status: new ParseStatus(),
                ctx: {
                  common: input.parent.common,
                  data: input.data,
                  parsedType: getParsedType(input.data),
                  schemaErrorMap: this._def.errorMap,
                  path: input.path,
                  parent: input.parent
                }
              };
            }
          }, {
            key: "_parseSync",
            value: function _parseSync(input) {
              var result = this._parse(input);
              if (isAsync(result)) {
                throw new Error("Synchronous parse encountered promise.");
              }
              return result;
            }
          }, {
            key: "_parseAsync",
            value: function _parseAsync(input) {
              var result = this._parse(input);
              return Promise.resolve(result);
            }
          }, {
            key: "parse",
            value: function parse(data, params) {
              var result = this.safeParse(data, params);
              if (result.success) return result.data;
              throw result.error;
            }
          }, {
            key: "safeParse",
            value: function safeParse(data, params) {
              var _a;
              var ctx = {
                common: {
                  issues: [],
                  async: (_a = params === null || params === void 0 ? void 0 : params.async) !== null && _a !== void 0 ? _a : false,
                  contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap
                },
                path: (params === null || params === void 0 ? void 0 : params.path) || [],
                schemaErrorMap: this._def.errorMap,
                parent: null,
                data: data,
                parsedType: getParsedType(data)
              };
              var result = this._parseSync({
                data: data,
                path: ctx.path,
                parent: ctx
              });
              return handleResult(ctx, result);
            }
          }, {
            key: "parseAsync",
            value: function () {
              var _parseAsync2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(data, params) {
                var result;
                return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.safeParseAsync(data, params);
                    case 2:
                      result = _context2.sent;
                      if (!result.success) {
                        _context2.next = 5;
                        break;
                      }
                      return _context2.abrupt("return", result.data);
                    case 5:
                      throw result.error;
                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }, _callee2, this);
              }));
              function parseAsync(_x4, _x5) {
                return _parseAsync2.apply(this, arguments);
              }
              return parseAsync;
            }()
          }, {
            key: "safeParseAsync",
            value: function () {
              var _safeParseAsync = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(data, params) {
                var ctx, maybeAsyncResult, result;
                return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                  while (1) switch (_context3.prev = _context3.next) {
                    case 0:
                      ctx = {
                        common: {
                          issues: [],
                          contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap,
                          async: true
                        },
                        path: (params === null || params === void 0 ? void 0 : params.path) || [],
                        schemaErrorMap: this._def.errorMap,
                        parent: null,
                        data: data,
                        parsedType: getParsedType(data)
                      };
                      maybeAsyncResult = this._parse({
                        data: data,
                        path: ctx.path,
                        parent: ctx
                      });
                      _context3.next = 4;
                      return isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult);
                    case 4:
                      result = _context3.sent;
                      return _context3.abrupt("return", handleResult(ctx, result));
                    case 6:
                    case "end":
                      return _context3.stop();
                  }
                }, _callee3, this);
              }));
              function safeParseAsync(_x6, _x7) {
                return _safeParseAsync.apply(this, arguments);
              }
              return safeParseAsync;
            }()
          }, {
            key: "refine",
            value: function refine(check, message) {
              var getIssueProperties = function getIssueProperties(val) {
                if (typeof message === "string" || typeof message === "undefined") {
                  return {
                    message: message
                  };
                } else if (typeof message === "function") {
                  return message(val);
                } else {
                  return message;
                }
              };
              return this._refinement(function (val, ctx) {
                var result = check(val);
                var setError = function setError() {
                  return ctx.addIssue(_objectSpread({
                    code: ZodIssueCode.custom
                  }, getIssueProperties(val)));
                };
                if (typeof Promise !== "undefined" && result instanceof Promise) {
                  return result.then(function (data) {
                    if (!data) {
                      setError();
                      return false;
                    } else {
                      return true;
                    }
                  });
                }
                if (!result) {
                  setError();
                  return false;
                } else {
                  return true;
                }
              });
            }
          }, {
            key: "refinement",
            value: function refinement(check, refinementData) {
              return this._refinement(function (val, ctx) {
                if (!check(val)) {
                  ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
                  return false;
                } else {
                  return true;
                }
              });
            }
          }, {
            key: "_refinement",
            value: function _refinement(refinement) {
              return new ZodEffects({
                schema: this,
                typeName: ZodFirstPartyTypeKind.ZodEffects,
                effect: {
                  type: "refinement",
                  refinement: refinement
                }
              });
            }
          }, {
            key: "superRefine",
            value: function superRefine(refinement) {
              return this._refinement(refinement);
            }
          }, {
            key: "optional",
            value: function optional() {
              return ZodOptional.create(this, this._def);
            }
          }, {
            key: "nullable",
            value: function nullable() {
              return ZodNullable.create(this, this._def);
            }
          }, {
            key: "nullish",
            value: function nullish() {
              return this.nullable().optional();
            }
          }, {
            key: "array",
            value: function array() {
              return ZodArray.create(this, this._def);
            }
          }, {
            key: "promise",
            value: function promise() {
              return ZodPromise.create(this, this._def);
            }
          }, {
            key: "or",
            value: function or(option) {
              return ZodUnion.create([this, option], this._def);
            }
          }, {
            key: "and",
            value: function and(incoming) {
              return ZodIntersection.create(this, incoming, this._def);
            }
          }, {
            key: "transform",
            value: function transform(_transform) {
              return new ZodEffects(_objectSpread(_objectSpread({}, processCreateParams(this._def)), {}, {
                schema: this,
                typeName: ZodFirstPartyTypeKind.ZodEffects,
                effect: {
                  type: "transform",
                  transform: _transform
                }
              }));
            }
          }, {
            key: "default",
            value: function _default(def) {
              var defaultValueFunc = typeof def === "function" ? def : function () {
                return def;
              };
              return new ZodDefault(_objectSpread(_objectSpread({}, processCreateParams(this._def)), {}, {
                innerType: this,
                defaultValue: defaultValueFunc,
                typeName: ZodFirstPartyTypeKind.ZodDefault
              }));
            }
          }, {
            key: "brand",
            value: function brand() {
              return new ZodBranded(_objectSpread({
                typeName: ZodFirstPartyTypeKind.ZodBranded,
                type: this
              }, processCreateParams(this._def)));
            }
          }, {
            key: "catch",
            value: function _catch(def) {
              var catchValueFunc = typeof def === "function" ? def : function () {
                return def;
              };
              return new ZodCatch(_objectSpread(_objectSpread({}, processCreateParams(this._def)), {}, {
                innerType: this,
                catchValue: catchValueFunc,
                typeName: ZodFirstPartyTypeKind.ZodCatch
              }));
            }
          }, {
            key: "describe",
            value: function describe(description) {
              var This = this.constructor;
              return new This(_objectSpread(_objectSpread({}, this._def), {}, {
                description: description
              }));
            }
          }, {
            key: "pipe",
            value: function pipe(target) {
              return ZodPipeline.create(this, target);
            }
          }, {
            key: "readonly",
            value: function readonly() {
              return ZodReadonly.create(this);
            }
          }, {
            key: "isOptional",
            value: function isOptional() {
              return this.safeParse(undefined).success;
            }
          }, {
            key: "isNullable",
            value: function isNullable() {
              return this.safeParse(null).success;
            }
          }]);
        }();
        var cuidRegex = /^c[^\s-]{8,}$/i;
        var cuid2Regex = /^[0-9a-z]+$/;
        var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/;
        // const uuidRegex =
        //   /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i;
        var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
        var nanoidRegex = /^[a-z0-9_-]{21}$/i;
        var durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
        // from https://stackoverflow.com/a/46181/1550155
        // old version: too slow, didn't support unicode
        // const emailRegex = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
        //old email regex
        // const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@((?!-)([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{1,})[^-<>()[\].,;:\s@"]$/i;
        // eslint-disable-next-line
        // const emailRegex =
        //   /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/;
        // const emailRegex =
        //   /^[a-zA-Z0-9\.\!\#\$\%\&\'\*\+\/\=\?\^\_\`\{\|\}\~\-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        // const emailRegex =
        //   /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
        var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
        // const emailRegex =
        //   /^[a-z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9\-]+)*$/i;
        // from https://thekevinscott.com/emojis-in-javascript/#writing-a-regular-expression
        var _emojiRegex = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
        var emojiRegex;
        // faster, simpler, safer
        var ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
        var ipv6Regex = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
        // https://stackoverflow.com/questions/7860392/determine-if-string-is-in-base64-using-javascript
        var base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
        // simple
        // const dateRegexSource = `\\d{4}-\\d{2}-\\d{2}`;
        // no leap year validation
        // const dateRegexSource = `\\d{4}-((0[13578]|10|12)-31|(0[13-9]|1[0-2])-30|(0[1-9]|1[0-2])-(0[1-9]|1\\d|2\\d))`;
        // with leap year validation
        var dateRegexSource = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))";
        var dateRegex = new RegExp("^".concat(dateRegexSource, "$"));
        function timeRegexSource(args) {
          // let regex = `\\d{2}:\\d{2}:\\d{2}`;
          var regex = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
          if (args.precision) {
            regex = "".concat(regex, "\\.\\d{").concat(args.precision, "}");
          } else if (args.precision == null) {
            regex = "".concat(regex, "(\\.\\d+)?");
          }
          return regex;
        }
        function timeRegex(args) {
          return new RegExp("^".concat(timeRegexSource(args), "$"));
        }
        // Adapted from https://stackoverflow.com/a/3143231
        function datetimeRegex(args) {
          var regex = "".concat(dateRegexSource, "T").concat(timeRegexSource(args));
          var opts = [];
          opts.push(args.local ? "Z?" : "Z");
          if (args.offset) opts.push("([+-]\\d{2}:?\\d{2})");
          regex = "".concat(regex, "(").concat(opts.join("|"), ")");
          return new RegExp("^".concat(regex, "$"));
        }
        function isValidIP(ip, version) {
          if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
            return true;
          }
          if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
            return true;
          }
          return false;
        }
        var ZodString = /*#__PURE__*/function (_ZodType) {
          function ZodString() {
            _classCallCheck(this, ZodString);
            return _callSuper(this, ZodString, arguments);
          }
          _inherits(ZodString, _ZodType);
          return _createClass(ZodString, [{
            key: "_parse",
            value: function _parse(input) {
              if (this._def.coerce) {
                input.data = String(input.data);
              }
              var parsedType = this._getType(input);
              if (parsedType !== ZodParsedType.string) {
                var _ctx2 = this._getOrReturnCtx(input);
                addIssueToContext(_ctx2, {
                  code: ZodIssueCode.invalid_type,
                  expected: ZodParsedType.string,
                  received: _ctx2.parsedType
                });
                return INVALID;
              }
              var status = new ParseStatus();
              var ctx = undefined;
              var _iterator11 = _createForOfIteratorHelper(this._def.checks),
                _step11;
              try {
                for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                  var check = _step11.value;
                  if (check.kind === "min") {
                    if (input.data.length < check.value) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                        code: ZodIssueCode.too_small,
                        minimum: check.value,
                        type: "string",
                        inclusive: true,
                        exact: false,
                        message: check.message
                      });
                      status.dirty();
                    }
                  } else if (check.kind === "max") {
                    if (input.data.length > check.value) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                        code: ZodIssueCode.too_big,
                        maximum: check.value,
                        type: "string",
                        inclusive: true,
                        exact: false,
                        message: check.message
                      });
                      status.dirty();
                    }
                  } else if (check.kind === "length") {
                    var tooBig = input.data.length > check.value;
                    var tooSmall = input.data.length < check.value;
                    if (tooBig || tooSmall) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      if (tooBig) {
                        addIssueToContext(ctx, {
                          code: ZodIssueCode.too_big,
                          maximum: check.value,
                          type: "string",
                          inclusive: true,
                          exact: true,
                          message: check.message
                        });
                      } else if (tooSmall) {
                        addIssueToContext(ctx, {
                          code: ZodIssueCode.too_small,
                          minimum: check.value,
                          type: "string",
                          inclusive: true,
                          exact: true,
                          message: check.message
                        });
                      }
                      status.dirty();
                    }
                  } else if (check.kind === "email") {
                    if (!emailRegex.test(input.data)) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                        validation: "email",
                        code: ZodIssueCode.invalid_string,
                        message: check.message
                      });
                      status.dirty();
                    }
                  } else if (check.kind === "emoji") {
                    if (!emojiRegex) {
                      emojiRegex = new RegExp(_emojiRegex, "u");
                    }
                    if (!emojiRegex.test(input.data)) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                        validation: "emoji",
                        code: ZodIssueCode.invalid_string,
                        message: check.message
                      });
                      status.dirty();
                    }
                  } else if (check.kind === "uuid") {
                    if (!uuidRegex.test(input.data)) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                        validation: "uuid",
                        code: ZodIssueCode.invalid_string,
                        message: check.message
                      });
                      status.dirty();
                    }
                  } else if (check.kind === "nanoid") {
                    if (!nanoidRegex.test(input.data)) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                        validation: "nanoid",
                        code: ZodIssueCode.invalid_string,
                        message: check.message
                      });
                      status.dirty();
                    }
                  } else if (check.kind === "cuid") {
                    if (!cuidRegex.test(input.data)) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                        validation: "cuid",
                        code: ZodIssueCode.invalid_string,
                        message: check.message
                      });
                      status.dirty();
                    }
                  } else if (check.kind === "cuid2") {
                    if (!cuid2Regex.test(input.data)) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                        validation: "cuid2",
                        code: ZodIssueCode.invalid_string,
                        message: check.message
                      });
                      status.dirty();
                    }
                  } else if (check.kind === "ulid") {
                    if (!ulidRegex.test(input.data)) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                        validation: "ulid",
                        code: ZodIssueCode.invalid_string,
                        message: check.message
                      });
                      status.dirty();
                    }
                  } else if (check.kind === "url") {
                    try {
                      new URL(input.data);
                    } catch (_a) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                        validation: "url",
                        code: ZodIssueCode.invalid_string,
                        message: check.message
                      });
                      status.dirty();
                    }
                  } else if (check.kind === "regex") {
                    check.regex.lastIndex = 0;
                    var testResult = check.regex.test(input.data);
                    if (!testResult) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                        validation: "regex",
                        code: ZodIssueCode.invalid_string,
                        message: check.message
                      });
                      status.dirty();
                    }
                  } else if (check.kind === "trim") {
                    input.data = input.data.trim();
                  } else if (check.kind === "includes") {
                    if (!input.data.includes(check.value, check.position)) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_string,
                        validation: {
                          includes: check.value,
                          position: check.position
                        },
                        message: check.message
                      });
                      status.dirty();
                    }
                  } else if (check.kind === "toLowerCase") {
                    input.data = input.data.toLowerCase();
                  } else if (check.kind === "toUpperCase") {
                    input.data = input.data.toUpperCase();
                  } else if (check.kind === "startsWith") {
                    if (!input.data.startsWith(check.value)) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_string,
                        validation: {
                          startsWith: check.value
                        },
                        message: check.message
                      });
                      status.dirty();
                    }
                  } else if (check.kind === "endsWith") {
                    if (!input.data.endsWith(check.value)) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_string,
                        validation: {
                          endsWith: check.value
                        },
                        message: check.message
                      });
                      status.dirty();
                    }
                  } else if (check.kind === "datetime") {
                    var regex = datetimeRegex(check);
                    if (!regex.test(input.data)) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_string,
                        validation: "datetime",
                        message: check.message
                      });
                      status.dirty();
                    }
                  } else if (check.kind === "date") {
                    var _regex3 = dateRegex;
                    if (!_regex3.test(input.data)) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_string,
                        validation: "date",
                        message: check.message
                      });
                      status.dirty();
                    }
                  } else if (check.kind === "time") {
                    var _regex4 = timeRegex(check);
                    if (!_regex4.test(input.data)) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_string,
                        validation: "time",
                        message: check.message
                      });
                      status.dirty();
                    }
                  } else if (check.kind === "duration") {
                    if (!durationRegex.test(input.data)) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                        validation: "duration",
                        code: ZodIssueCode.invalid_string,
                        message: check.message
                      });
                      status.dirty();
                    }
                  } else if (check.kind === "ip") {
                    if (!isValidIP(input.data, check.version)) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                        validation: "ip",
                        code: ZodIssueCode.invalid_string,
                        message: check.message
                      });
                      status.dirty();
                    }
                  } else if (check.kind === "base64") {
                    if (!base64Regex.test(input.data)) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                        validation: "base64",
                        code: ZodIssueCode.invalid_string,
                        message: check.message
                      });
                      status.dirty();
                    }
                  } else {
                    util.assertNever(check);
                  }
                }
              } catch (err) {
                _iterator11.e(err);
              } finally {
                _iterator11.f();
              }
              return {
                status: status.value,
                value: input.data
              };
            }
          }, {
            key: "_regex",
            value: function _regex(regex, validation, message) {
              return this.refinement(function (data) {
                return regex.test(data);
              }, _objectSpread({
                validation: validation,
                code: ZodIssueCode.invalid_string
              }, errorUtil.errToObj(message)));
            }
          }, {
            key: "_addCheck",
            value: function _addCheck(check) {
              return new ZodString(_objectSpread(_objectSpread({}, this._def), {}, {
                checks: [].concat(_toConsumableArray(this._def.checks), [check])
              }));
            }
          }, {
            key: "email",
            value: function email(message) {
              return this._addCheck(_objectSpread({
                kind: "email"
              }, errorUtil.errToObj(message)));
            }
          }, {
            key: "url",
            value: function url(message) {
              return this._addCheck(_objectSpread({
                kind: "url"
              }, errorUtil.errToObj(message)));
            }
          }, {
            key: "emoji",
            value: function emoji(message) {
              return this._addCheck(_objectSpread({
                kind: "emoji"
              }, errorUtil.errToObj(message)));
            }
          }, {
            key: "uuid",
            value: function uuid(message) {
              return this._addCheck(_objectSpread({
                kind: "uuid"
              }, errorUtil.errToObj(message)));
            }
          }, {
            key: "nanoid",
            value: function nanoid(message) {
              return this._addCheck(_objectSpread({
                kind: "nanoid"
              }, errorUtil.errToObj(message)));
            }
          }, {
            key: "cuid",
            value: function cuid(message) {
              return this._addCheck(_objectSpread({
                kind: "cuid"
              }, errorUtil.errToObj(message)));
            }
          }, {
            key: "cuid2",
            value: function cuid2(message) {
              return this._addCheck(_objectSpread({
                kind: "cuid2"
              }, errorUtil.errToObj(message)));
            }
          }, {
            key: "ulid",
            value: function ulid(message) {
              return this._addCheck(_objectSpread({
                kind: "ulid"
              }, errorUtil.errToObj(message)));
            }
          }, {
            key: "base64",
            value: function base64(message) {
              return this._addCheck(_objectSpread({
                kind: "base64"
              }, errorUtil.errToObj(message)));
            }
          }, {
            key: "ip",
            value: function ip(options) {
              return this._addCheck(_objectSpread({
                kind: "ip"
              }, errorUtil.errToObj(options)));
            }
          }, {
            key: "datetime",
            value: function datetime(options) {
              var _a, _b;
              if (typeof options === "string") {
                return this._addCheck({
                  kind: "datetime",
                  precision: null,
                  offset: false,
                  local: false,
                  message: options
                });
              }
              return this._addCheck(_objectSpread({
                kind: "datetime",
                precision: typeof (options === null || options === void 0 ? void 0 : options.precision) === "undefined" ? null : options === null || options === void 0 ? void 0 : options.precision,
                offset: (_a = options === null || options === void 0 ? void 0 : options.offset) !== null && _a !== void 0 ? _a : false,
                local: (_b = options === null || options === void 0 ? void 0 : options.local) !== null && _b !== void 0 ? _b : false
              }, errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)));
            }
          }, {
            key: "date",
            value: function date(message) {
              return this._addCheck({
                kind: "date",
                message: message
              });
            }
          }, {
            key: "time",
            value: function time(options) {
              if (typeof options === "string") {
                return this._addCheck({
                  kind: "time",
                  precision: null,
                  message: options
                });
              }
              return this._addCheck(_objectSpread({
                kind: "time",
                precision: typeof (options === null || options === void 0 ? void 0 : options.precision) === "undefined" ? null : options === null || options === void 0 ? void 0 : options.precision
              }, errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)));
            }
          }, {
            key: "duration",
            value: function duration(message) {
              return this._addCheck(_objectSpread({
                kind: "duration"
              }, errorUtil.errToObj(message)));
            }
          }, {
            key: "regex",
            value: function regex(_regex2, message) {
              return this._addCheck(_objectSpread({
                kind: "regex",
                regex: _regex2
              }, errorUtil.errToObj(message)));
            }
          }, {
            key: "includes",
            value: function includes(value, options) {
              return this._addCheck(_objectSpread({
                kind: "includes",
                value: value,
                position: options === null || options === void 0 ? void 0 : options.position
              }, errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)));
            }
          }, {
            key: "startsWith",
            value: function startsWith(value, message) {
              return this._addCheck(_objectSpread({
                kind: "startsWith",
                value: value
              }, errorUtil.errToObj(message)));
            }
          }, {
            key: "endsWith",
            value: function endsWith(value, message) {
              return this._addCheck(_objectSpread({
                kind: "endsWith",
                value: value
              }, errorUtil.errToObj(message)));
            }
          }, {
            key: "min",
            value: function min(minLength, message) {
              return this._addCheck(_objectSpread({
                kind: "min",
                value: minLength
              }, errorUtil.errToObj(message)));
            }
          }, {
            key: "max",
            value: function max(maxLength, message) {
              return this._addCheck(_objectSpread({
                kind: "max",
                value: maxLength
              }, errorUtil.errToObj(message)));
            }
          }, {
            key: "length",
            value: function length(len, message) {
              return this._addCheck(_objectSpread({
                kind: "length",
                value: len
              }, errorUtil.errToObj(message)));
            }
            /**
             * @deprecated Use z.string().min(1) instead.
             * @see {@link ZodString.min}
             */
          }, {
            key: "nonempty",
            value: function nonempty(message) {
              return this.min(1, errorUtil.errToObj(message));
            }
          }, {
            key: "trim",
            value: function trim() {
              return new ZodString(_objectSpread(_objectSpread({}, this._def), {}, {
                checks: [].concat(_toConsumableArray(this._def.checks), [{
                  kind: "trim"
                }])
              }));
            }
          }, {
            key: "toLowerCase",
            value: function toLowerCase() {
              return new ZodString(_objectSpread(_objectSpread({}, this._def), {}, {
                checks: [].concat(_toConsumableArray(this._def.checks), [{
                  kind: "toLowerCase"
                }])
              }));
            }
          }, {
            key: "toUpperCase",
            value: function toUpperCase() {
              return new ZodString(_objectSpread(_objectSpread({}, this._def), {}, {
                checks: [].concat(_toConsumableArray(this._def.checks), [{
                  kind: "toUpperCase"
                }])
              }));
            }
          }, {
            key: "isDatetime",
            get: function get() {
              return !!this._def.checks.find(function (ch) {
                return ch.kind === "datetime";
              });
            }
          }, {
            key: "isDate",
            get: function get() {
              return !!this._def.checks.find(function (ch) {
                return ch.kind === "date";
              });
            }
          }, {
            key: "isTime",
            get: function get() {
              return !!this._def.checks.find(function (ch) {
                return ch.kind === "time";
              });
            }
          }, {
            key: "isDuration",
            get: function get() {
              return !!this._def.checks.find(function (ch) {
                return ch.kind === "duration";
              });
            }
          }, {
            key: "isEmail",
            get: function get() {
              return !!this._def.checks.find(function (ch) {
                return ch.kind === "email";
              });
            }
          }, {
            key: "isURL",
            get: function get() {
              return !!this._def.checks.find(function (ch) {
                return ch.kind === "url";
              });
            }
          }, {
            key: "isEmoji",
            get: function get() {
              return !!this._def.checks.find(function (ch) {
                return ch.kind === "emoji";
              });
            }
          }, {
            key: "isUUID",
            get: function get() {
              return !!this._def.checks.find(function (ch) {
                return ch.kind === "uuid";
              });
            }
          }, {
            key: "isNANOID",
            get: function get() {
              return !!this._def.checks.find(function (ch) {
                return ch.kind === "nanoid";
              });
            }
          }, {
            key: "isCUID",
            get: function get() {
              return !!this._def.checks.find(function (ch) {
                return ch.kind === "cuid";
              });
            }
          }, {
            key: "isCUID2",
            get: function get() {
              return !!this._def.checks.find(function (ch) {
                return ch.kind === "cuid2";
              });
            }
          }, {
            key: "isULID",
            get: function get() {
              return !!this._def.checks.find(function (ch) {
                return ch.kind === "ulid";
              });
            }
          }, {
            key: "isIP",
            get: function get() {
              return !!this._def.checks.find(function (ch) {
                return ch.kind === "ip";
              });
            }
          }, {
            key: "isBase64",
            get: function get() {
              return !!this._def.checks.find(function (ch) {
                return ch.kind === "base64";
              });
            }
          }, {
            key: "minLength",
            get: function get() {
              var min = null;
              var _iterator12 = _createForOfIteratorHelper(this._def.checks),
                _step12;
              try {
                for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                  var ch = _step12.value;
                  if (ch.kind === "min") {
                    if (min === null || ch.value > min) min = ch.value;
                  }
                }
              } catch (err) {
                _iterator12.e(err);
              } finally {
                _iterator12.f();
              }
              return min;
            }
          }, {
            key: "maxLength",
            get: function get() {
              var max = null;
              var _iterator13 = _createForOfIteratorHelper(this._def.checks),
                _step13;
              try {
                for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                  var ch = _step13.value;
                  if (ch.kind === "max") {
                    if (max === null || ch.value < max) max = ch.value;
                  }
                }
              } catch (err) {
                _iterator13.e(err);
              } finally {
                _iterator13.f();
              }
              return max;
            }
          }]);
        }(ZodType);
        ZodString.create = function (params) {
          var _a;
          return new ZodString(_objectSpread({
            checks: [],
            typeName: ZodFirstPartyTypeKind.ZodString,
            coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false
          }, processCreateParams(params)));
        };
        // https://stackoverflow.com/questions/3966484/why-does-modulus-operator-return-fractional-number-in-javascript/31711034#31711034
        function floatSafeRemainder(val, step) {
          var valDecCount = (val.toString().split(".")[1] || "").length;
          var stepDecCount = (step.toString().split(".")[1] || "").length;
          var decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
          var valInt = parseInt(val.toFixed(decCount).replace(".", ""));
          var stepInt = parseInt(step.toFixed(decCount).replace(".", ""));
          return valInt % stepInt / Math.pow(10, decCount);
        }
        var ZodNumber = /*#__PURE__*/function (_ZodType2) {
          function ZodNumber() {
            var _this5;
            _classCallCheck(this, ZodNumber);
            _this5 = _callSuper(this, ZodNumber, arguments);
            _this5.min = _this5.gte;
            _this5.max = _this5.lte;
            _this5.step = _this5.multipleOf;
            return _this5;
          }
          _inherits(ZodNumber, _ZodType2);
          return _createClass(ZodNumber, [{
            key: "_parse",
            value: function _parse(input) {
              if (this._def.coerce) {
                input.data = Number(input.data);
              }
              var parsedType = this._getType(input);
              if (parsedType !== ZodParsedType.number) {
                var _ctx3 = this._getOrReturnCtx(input);
                addIssueToContext(_ctx3, {
                  code: ZodIssueCode.invalid_type,
                  expected: ZodParsedType.number,
                  received: _ctx3.parsedType
                });
                return INVALID;
              }
              var ctx = undefined;
              var status = new ParseStatus();
              var _iterator14 = _createForOfIteratorHelper(this._def.checks),
                _step14;
              try {
                for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                  var check = _step14.value;
                  if (check.kind === "int") {
                    if (!util.isInteger(input.data)) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_type,
                        expected: "integer",
                        received: "float",
                        message: check.message
                      });
                      status.dirty();
                    }
                  } else if (check.kind === "min") {
                    var tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
                    if (tooSmall) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                        code: ZodIssueCode.too_small,
                        minimum: check.value,
                        type: "number",
                        inclusive: check.inclusive,
                        exact: false,
                        message: check.message
                      });
                      status.dirty();
                    }
                  } else if (check.kind === "max") {
                    var tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
                    if (tooBig) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                        code: ZodIssueCode.too_big,
                        maximum: check.value,
                        type: "number",
                        inclusive: check.inclusive,
                        exact: false,
                        message: check.message
                      });
                      status.dirty();
                    }
                  } else if (check.kind === "multipleOf") {
                    if (floatSafeRemainder(input.data, check.value) !== 0) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                        code: ZodIssueCode.not_multiple_of,
                        multipleOf: check.value,
                        message: check.message
                      });
                      status.dirty();
                    }
                  } else if (check.kind === "finite") {
                    if (!Number.isFinite(input.data)) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                        code: ZodIssueCode.not_finite,
                        message: check.message
                      });
                      status.dirty();
                    }
                  } else {
                    util.assertNever(check);
                  }
                }
              } catch (err) {
                _iterator14.e(err);
              } finally {
                _iterator14.f();
              }
              return {
                status: status.value,
                value: input.data
              };
            }
          }, {
            key: "gte",
            value: function gte(value, message) {
              return this.setLimit("min", value, true, errorUtil.toString(message));
            }
          }, {
            key: "gt",
            value: function gt(value, message) {
              return this.setLimit("min", value, false, errorUtil.toString(message));
            }
          }, {
            key: "lte",
            value: function lte(value, message) {
              return this.setLimit("max", value, true, errorUtil.toString(message));
            }
          }, {
            key: "lt",
            value: function lt(value, message) {
              return this.setLimit("max", value, false, errorUtil.toString(message));
            }
          }, {
            key: "setLimit",
            value: function setLimit(kind, value, inclusive, message) {
              return new ZodNumber(_objectSpread(_objectSpread({}, this._def), {}, {
                checks: [].concat(_toConsumableArray(this._def.checks), [{
                  kind: kind,
                  value: value,
                  inclusive: inclusive,
                  message: errorUtil.toString(message)
                }])
              }));
            }
          }, {
            key: "_addCheck",
            value: function _addCheck(check) {
              return new ZodNumber(_objectSpread(_objectSpread({}, this._def), {}, {
                checks: [].concat(_toConsumableArray(this._def.checks), [check])
              }));
            }
          }, {
            key: "int",
            value: function int(message) {
              return this._addCheck({
                kind: "int",
                message: errorUtil.toString(message)
              });
            }
          }, {
            key: "positive",
            value: function positive(message) {
              return this._addCheck({
                kind: "min",
                value: 0,
                inclusive: false,
                message: errorUtil.toString(message)
              });
            }
          }, {
            key: "negative",
            value: function negative(message) {
              return this._addCheck({
                kind: "max",
                value: 0,
                inclusive: false,
                message: errorUtil.toString(message)
              });
            }
          }, {
            key: "nonpositive",
            value: function nonpositive(message) {
              return this._addCheck({
                kind: "max",
                value: 0,
                inclusive: true,
                message: errorUtil.toString(message)
              });
            }
          }, {
            key: "nonnegative",
            value: function nonnegative(message) {
              return this._addCheck({
                kind: "min",
                value: 0,
                inclusive: true,
                message: errorUtil.toString(message)
              });
            }
          }, {
            key: "multipleOf",
            value: function multipleOf(value, message) {
              return this._addCheck({
                kind: "multipleOf",
                value: value,
                message: errorUtil.toString(message)
              });
            }
          }, {
            key: "finite",
            value: function finite(message) {
              return this._addCheck({
                kind: "finite",
                message: errorUtil.toString(message)
              });
            }
          }, {
            key: "safe",
            value: function safe(message) {
              return this._addCheck({
                kind: "min",
                inclusive: true,
                value: Number.MIN_SAFE_INTEGER,
                message: errorUtil.toString(message)
              })._addCheck({
                kind: "max",
                inclusive: true,
                value: Number.MAX_SAFE_INTEGER,
                message: errorUtil.toString(message)
              });
            }
          }, {
            key: "minValue",
            get: function get() {
              var min = null;
              var _iterator15 = _createForOfIteratorHelper(this._def.checks),
                _step15;
              try {
                for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                  var ch = _step15.value;
                  if (ch.kind === "min") {
                    if (min === null || ch.value > min) min = ch.value;
                  }
                }
              } catch (err) {
                _iterator15.e(err);
              } finally {
                _iterator15.f();
              }
              return min;
            }
          }, {
            key: "maxValue",
            get: function get() {
              var max = null;
              var _iterator16 = _createForOfIteratorHelper(this._def.checks),
                _step16;
              try {
                for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                  var ch = _step16.value;
                  if (ch.kind === "max") {
                    if (max === null || ch.value < max) max = ch.value;
                  }
                }
              } catch (err) {
                _iterator16.e(err);
              } finally {
                _iterator16.f();
              }
              return max;
            }
          }, {
            key: "isInt",
            get: function get() {
              return !!this._def.checks.find(function (ch) {
                return ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value);
              });
            }
          }, {
            key: "isFinite",
            get: function get() {
              var max = null,
                min = null;
              var _iterator17 = _createForOfIteratorHelper(this._def.checks),
                _step17;
              try {
                for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                  var ch = _step17.value;
                  if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
                    return true;
                  } else if (ch.kind === "min") {
                    if (min === null || ch.value > min) min = ch.value;
                  } else if (ch.kind === "max") {
                    if (max === null || ch.value < max) max = ch.value;
                  }
                }
              } catch (err) {
                _iterator17.e(err);
              } finally {
                _iterator17.f();
              }
              return Number.isFinite(min) && Number.isFinite(max);
            }
          }]);
        }(ZodType);
        ZodNumber.create = function (params) {
          return new ZodNumber(_objectSpread({
            checks: [],
            typeName: ZodFirstPartyTypeKind.ZodNumber,
            coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false
          }, processCreateParams(params)));
        };
        var ZodBigInt = /*#__PURE__*/function (_ZodType3) {
          function ZodBigInt() {
            var _this6;
            _classCallCheck(this, ZodBigInt);
            _this6 = _callSuper(this, ZodBigInt, arguments);
            _this6.min = _this6.gte;
            _this6.max = _this6.lte;
            return _this6;
          }
          _inherits(ZodBigInt, _ZodType3);
          return _createClass(ZodBigInt, [{
            key: "_parse",
            value: function _parse(input) {
              if (this._def.coerce) {
                input.data = BigInt(input.data);
              }
              var parsedType = this._getType(input);
              if (parsedType !== ZodParsedType.bigint) {
                var _ctx4 = this._getOrReturnCtx(input);
                addIssueToContext(_ctx4, {
                  code: ZodIssueCode.invalid_type,
                  expected: ZodParsedType.bigint,
                  received: _ctx4.parsedType
                });
                return INVALID;
              }
              var ctx = undefined;
              var status = new ParseStatus();
              var _iterator18 = _createForOfIteratorHelper(this._def.checks),
                _step18;
              try {
                for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                  var check = _step18.value;
                  if (check.kind === "min") {
                    var tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
                    if (tooSmall) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                        code: ZodIssueCode.too_small,
                        type: "bigint",
                        minimum: check.value,
                        inclusive: check.inclusive,
                        message: check.message
                      });
                      status.dirty();
                    }
                  } else if (check.kind === "max") {
                    var tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
                    if (tooBig) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                        code: ZodIssueCode.too_big,
                        type: "bigint",
                        maximum: check.value,
                        inclusive: check.inclusive,
                        message: check.message
                      });
                      status.dirty();
                    }
                  } else if (check.kind === "multipleOf") {
                    if (input.data % check.value !== BigInt(0)) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                        code: ZodIssueCode.not_multiple_of,
                        multipleOf: check.value,
                        message: check.message
                      });
                      status.dirty();
                    }
                  } else {
                    util.assertNever(check);
                  }
                }
              } catch (err) {
                _iterator18.e(err);
              } finally {
                _iterator18.f();
              }
              return {
                status: status.value,
                value: input.data
              };
            }
          }, {
            key: "gte",
            value: function gte(value, message) {
              return this.setLimit("min", value, true, errorUtil.toString(message));
            }
          }, {
            key: "gt",
            value: function gt(value, message) {
              return this.setLimit("min", value, false, errorUtil.toString(message));
            }
          }, {
            key: "lte",
            value: function lte(value, message) {
              return this.setLimit("max", value, true, errorUtil.toString(message));
            }
          }, {
            key: "lt",
            value: function lt(value, message) {
              return this.setLimit("max", value, false, errorUtil.toString(message));
            }
          }, {
            key: "setLimit",
            value: function setLimit(kind, value, inclusive, message) {
              return new ZodBigInt(_objectSpread(_objectSpread({}, this._def), {}, {
                checks: [].concat(_toConsumableArray(this._def.checks), [{
                  kind: kind,
                  value: value,
                  inclusive: inclusive,
                  message: errorUtil.toString(message)
                }])
              }));
            }
          }, {
            key: "_addCheck",
            value: function _addCheck(check) {
              return new ZodBigInt(_objectSpread(_objectSpread({}, this._def), {}, {
                checks: [].concat(_toConsumableArray(this._def.checks), [check])
              }));
            }
          }, {
            key: "positive",
            value: function positive(message) {
              return this._addCheck({
                kind: "min",
                value: BigInt(0),
                inclusive: false,
                message: errorUtil.toString(message)
              });
            }
          }, {
            key: "negative",
            value: function negative(message) {
              return this._addCheck({
                kind: "max",
                value: BigInt(0),
                inclusive: false,
                message: errorUtil.toString(message)
              });
            }
          }, {
            key: "nonpositive",
            value: function nonpositive(message) {
              return this._addCheck({
                kind: "max",
                value: BigInt(0),
                inclusive: true,
                message: errorUtil.toString(message)
              });
            }
          }, {
            key: "nonnegative",
            value: function nonnegative(message) {
              return this._addCheck({
                kind: "min",
                value: BigInt(0),
                inclusive: true,
                message: errorUtil.toString(message)
              });
            }
          }, {
            key: "multipleOf",
            value: function multipleOf(value, message) {
              return this._addCheck({
                kind: "multipleOf",
                value: value,
                message: errorUtil.toString(message)
              });
            }
          }, {
            key: "minValue",
            get: function get() {
              var min = null;
              var _iterator19 = _createForOfIteratorHelper(this._def.checks),
                _step19;
              try {
                for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                  var ch = _step19.value;
                  if (ch.kind === "min") {
                    if (min === null || ch.value > min) min = ch.value;
                  }
                }
              } catch (err) {
                _iterator19.e(err);
              } finally {
                _iterator19.f();
              }
              return min;
            }
          }, {
            key: "maxValue",
            get: function get() {
              var max = null;
              var _iterator20 = _createForOfIteratorHelper(this._def.checks),
                _step20;
              try {
                for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                  var ch = _step20.value;
                  if (ch.kind === "max") {
                    if (max === null || ch.value < max) max = ch.value;
                  }
                }
              } catch (err) {
                _iterator20.e(err);
              } finally {
                _iterator20.f();
              }
              return max;
            }
          }]);
        }(ZodType);
        ZodBigInt.create = function (params) {
          var _a;
          return new ZodBigInt(_objectSpread({
            checks: [],
            typeName: ZodFirstPartyTypeKind.ZodBigInt,
            coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false
          }, processCreateParams(params)));
        };
        var ZodBoolean = /*#__PURE__*/function (_ZodType4) {
          function ZodBoolean() {
            _classCallCheck(this, ZodBoolean);
            return _callSuper(this, ZodBoolean, arguments);
          }
          _inherits(ZodBoolean, _ZodType4);
          return _createClass(ZodBoolean, [{
            key: "_parse",
            value: function _parse(input) {
              if (this._def.coerce) {
                input.data = Boolean(input.data);
              }
              var parsedType = this._getType(input);
              if (parsedType !== ZodParsedType.boolean) {
                var ctx = this._getOrReturnCtx(input);
                addIssueToContext(ctx, {
                  code: ZodIssueCode.invalid_type,
                  expected: ZodParsedType.boolean,
                  received: ctx.parsedType
                });
                return INVALID;
              }
              return OK(input.data);
            }
          }]);
        }(ZodType);
        ZodBoolean.create = function (params) {
          return new ZodBoolean(_objectSpread({
            typeName: ZodFirstPartyTypeKind.ZodBoolean,
            coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false
          }, processCreateParams(params)));
        };
        var ZodDate = /*#__PURE__*/function (_ZodType5) {
          function ZodDate() {
            _classCallCheck(this, ZodDate);
            return _callSuper(this, ZodDate, arguments);
          }
          _inherits(ZodDate, _ZodType5);
          return _createClass(ZodDate, [{
            key: "_parse",
            value: function _parse(input) {
              if (this._def.coerce) {
                input.data = new Date(input.data);
              }
              var parsedType = this._getType(input);
              if (parsedType !== ZodParsedType.date) {
                var _ctx5 = this._getOrReturnCtx(input);
                addIssueToContext(_ctx5, {
                  code: ZodIssueCode.invalid_type,
                  expected: ZodParsedType.date,
                  received: _ctx5.parsedType
                });
                return INVALID;
              }
              if (isNaN(input.data.getTime())) {
                var _ctx6 = this._getOrReturnCtx(input);
                addIssueToContext(_ctx6, {
                  code: ZodIssueCode.invalid_date
                });
                return INVALID;
              }
              var status = new ParseStatus();
              var ctx = undefined;
              var _iterator21 = _createForOfIteratorHelper(this._def.checks),
                _step21;
              try {
                for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                  var check = _step21.value;
                  if (check.kind === "min") {
                    if (input.data.getTime() < check.value) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                        code: ZodIssueCode.too_small,
                        message: check.message,
                        inclusive: true,
                        exact: false,
                        minimum: check.value,
                        type: "date"
                      });
                      status.dirty();
                    }
                  } else if (check.kind === "max") {
                    if (input.data.getTime() > check.value) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                        code: ZodIssueCode.too_big,
                        message: check.message,
                        inclusive: true,
                        exact: false,
                        maximum: check.value,
                        type: "date"
                      });
                      status.dirty();
                    }
                  } else {
                    util.assertNever(check);
                  }
                }
              } catch (err) {
                _iterator21.e(err);
              } finally {
                _iterator21.f();
              }
              return {
                status: status.value,
                value: new Date(input.data.getTime())
              };
            }
          }, {
            key: "_addCheck",
            value: function _addCheck(check) {
              return new ZodDate(_objectSpread(_objectSpread({}, this._def), {}, {
                checks: [].concat(_toConsumableArray(this._def.checks), [check])
              }));
            }
          }, {
            key: "min",
            value: function min(minDate, message) {
              return this._addCheck({
                kind: "min",
                value: minDate.getTime(),
                message: errorUtil.toString(message)
              });
            }
          }, {
            key: "max",
            value: function max(maxDate, message) {
              return this._addCheck({
                kind: "max",
                value: maxDate.getTime(),
                message: errorUtil.toString(message)
              });
            }
          }, {
            key: "minDate",
            get: function get() {
              var min = null;
              var _iterator22 = _createForOfIteratorHelper(this._def.checks),
                _step22;
              try {
                for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
                  var ch = _step22.value;
                  if (ch.kind === "min") {
                    if (min === null || ch.value > min) min = ch.value;
                  }
                }
              } catch (err) {
                _iterator22.e(err);
              } finally {
                _iterator22.f();
              }
              return min != null ? new Date(min) : null;
            }
          }, {
            key: "maxDate",
            get: function get() {
              var max = null;
              var _iterator23 = _createForOfIteratorHelper(this._def.checks),
                _step23;
              try {
                for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
                  var ch = _step23.value;
                  if (ch.kind === "max") {
                    if (max === null || ch.value < max) max = ch.value;
                  }
                }
              } catch (err) {
                _iterator23.e(err);
              } finally {
                _iterator23.f();
              }
              return max != null ? new Date(max) : null;
            }
          }]);
        }(ZodType);
        ZodDate.create = function (params) {
          return new ZodDate(_objectSpread({
            checks: [],
            coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
            typeName: ZodFirstPartyTypeKind.ZodDate
          }, processCreateParams(params)));
        };
        var ZodSymbol = /*#__PURE__*/function (_ZodType6) {
          function ZodSymbol() {
            _classCallCheck(this, ZodSymbol);
            return _callSuper(this, ZodSymbol, arguments);
          }
          _inherits(ZodSymbol, _ZodType6);
          return _createClass(ZodSymbol, [{
            key: "_parse",
            value: function _parse(input) {
              var parsedType = this._getType(input);
              if (parsedType !== ZodParsedType.symbol) {
                var ctx = this._getOrReturnCtx(input);
                addIssueToContext(ctx, {
                  code: ZodIssueCode.invalid_type,
                  expected: ZodParsedType.symbol,
                  received: ctx.parsedType
                });
                return INVALID;
              }
              return OK(input.data);
            }
          }]);
        }(ZodType);
        ZodSymbol.create = function (params) {
          return new ZodSymbol(_objectSpread({
            typeName: ZodFirstPartyTypeKind.ZodSymbol
          }, processCreateParams(params)));
        };
        var ZodUndefined = /*#__PURE__*/function (_ZodType7) {
          function ZodUndefined() {
            _classCallCheck(this, ZodUndefined);
            return _callSuper(this, ZodUndefined, arguments);
          }
          _inherits(ZodUndefined, _ZodType7);
          return _createClass(ZodUndefined, [{
            key: "_parse",
            value: function _parse(input) {
              var parsedType = this._getType(input);
              if (parsedType !== ZodParsedType.undefined) {
                var ctx = this._getOrReturnCtx(input);
                addIssueToContext(ctx, {
                  code: ZodIssueCode.invalid_type,
                  expected: ZodParsedType.undefined,
                  received: ctx.parsedType
                });
                return INVALID;
              }
              return OK(input.data);
            }
          }]);
        }(ZodType);
        ZodUndefined.create = function (params) {
          return new ZodUndefined(_objectSpread({
            typeName: ZodFirstPartyTypeKind.ZodUndefined
          }, processCreateParams(params)));
        };
        var ZodNull = /*#__PURE__*/function (_ZodType8) {
          function ZodNull() {
            _classCallCheck(this, ZodNull);
            return _callSuper(this, ZodNull, arguments);
          }
          _inherits(ZodNull, _ZodType8);
          return _createClass(ZodNull, [{
            key: "_parse",
            value: function _parse(input) {
              var parsedType = this._getType(input);
              if (parsedType !== ZodParsedType.null) {
                var ctx = this._getOrReturnCtx(input);
                addIssueToContext(ctx, {
                  code: ZodIssueCode.invalid_type,
                  expected: ZodParsedType.null,
                  received: ctx.parsedType
                });
                return INVALID;
              }
              return OK(input.data);
            }
          }]);
        }(ZodType);
        ZodNull.create = function (params) {
          return new ZodNull(_objectSpread({
            typeName: ZodFirstPartyTypeKind.ZodNull
          }, processCreateParams(params)));
        };
        var ZodAny = /*#__PURE__*/function (_ZodType9) {
          function ZodAny() {
            var _this7;
            _classCallCheck(this, ZodAny);
            _this7 = _callSuper(this, ZodAny, arguments);
            // to prevent instances of other classes from extending ZodAny. this causes issues with catchall in ZodObject.
            _this7._any = true;
            return _this7;
          }
          _inherits(ZodAny, _ZodType9);
          return _createClass(ZodAny, [{
            key: "_parse",
            value: function _parse(input) {
              return OK(input.data);
            }
          }]);
        }(ZodType);
        ZodAny.create = function (params) {
          return new ZodAny(_objectSpread({
            typeName: ZodFirstPartyTypeKind.ZodAny
          }, processCreateParams(params)));
        };
        var ZodUnknown = /*#__PURE__*/function (_ZodType10) {
          function ZodUnknown() {
            var _this8;
            _classCallCheck(this, ZodUnknown);
            _this8 = _callSuper(this, ZodUnknown, arguments);
            // required
            _this8._unknown = true;
            return _this8;
          }
          _inherits(ZodUnknown, _ZodType10);
          return _createClass(ZodUnknown, [{
            key: "_parse",
            value: function _parse(input) {
              return OK(input.data);
            }
          }]);
        }(ZodType);
        ZodUnknown.create = function (params) {
          return new ZodUnknown(_objectSpread({
            typeName: ZodFirstPartyTypeKind.ZodUnknown
          }, processCreateParams(params)));
        };
        var ZodNever = /*#__PURE__*/function (_ZodType11) {
          function ZodNever() {
            _classCallCheck(this, ZodNever);
            return _callSuper(this, ZodNever, arguments);
          }
          _inherits(ZodNever, _ZodType11);
          return _createClass(ZodNever, [{
            key: "_parse",
            value: function _parse(input) {
              var ctx = this._getOrReturnCtx(input);
              addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.never,
                received: ctx.parsedType
              });
              return INVALID;
            }
          }]);
        }(ZodType);
        ZodNever.create = function (params) {
          return new ZodNever(_objectSpread({
            typeName: ZodFirstPartyTypeKind.ZodNever
          }, processCreateParams(params)));
        };
        var ZodVoid = /*#__PURE__*/function (_ZodType12) {
          function ZodVoid() {
            _classCallCheck(this, ZodVoid);
            return _callSuper(this, ZodVoid, arguments);
          }
          _inherits(ZodVoid, _ZodType12);
          return _createClass(ZodVoid, [{
            key: "_parse",
            value: function _parse(input) {
              var parsedType = this._getType(input);
              if (parsedType !== ZodParsedType.undefined) {
                var ctx = this._getOrReturnCtx(input);
                addIssueToContext(ctx, {
                  code: ZodIssueCode.invalid_type,
                  expected: ZodParsedType.void,
                  received: ctx.parsedType
                });
                return INVALID;
              }
              return OK(input.data);
            }
          }]);
        }(ZodType);
        ZodVoid.create = function (params) {
          return new ZodVoid(_objectSpread({
            typeName: ZodFirstPartyTypeKind.ZodVoid
          }, processCreateParams(params)));
        };
        var ZodArray = /*#__PURE__*/function (_ZodType13) {
          function ZodArray() {
            _classCallCheck(this, ZodArray);
            return _callSuper(this, ZodArray, arguments);
          }
          _inherits(ZodArray, _ZodType13);
          return _createClass(ZodArray, [{
            key: "_parse",
            value: function _parse(input) {
              var _this$_processInputPa = this._processInputParams(input),
                ctx = _this$_processInputPa.ctx,
                status = _this$_processInputPa.status;
              var def = this._def;
              if (ctx.parsedType !== ZodParsedType.array) {
                addIssueToContext(ctx, {
                  code: ZodIssueCode.invalid_type,
                  expected: ZodParsedType.array,
                  received: ctx.parsedType
                });
                return INVALID;
              }
              if (def.exactLength !== null) {
                var tooBig = ctx.data.length > def.exactLength.value;
                var tooSmall = ctx.data.length < def.exactLength.value;
                if (tooBig || tooSmall) {
                  addIssueToContext(ctx, {
                    code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
                    minimum: tooSmall ? def.exactLength.value : undefined,
                    maximum: tooBig ? def.exactLength.value : undefined,
                    type: "array",
                    inclusive: true,
                    exact: true,
                    message: def.exactLength.message
                  });
                  status.dirty();
                }
              }
              if (def.minLength !== null) {
                if (ctx.data.length < def.minLength.value) {
                  addIssueToContext(ctx, {
                    code: ZodIssueCode.too_small,
                    minimum: def.minLength.value,
                    type: "array",
                    inclusive: true,
                    exact: false,
                    message: def.minLength.message
                  });
                  status.dirty();
                }
              }
              if (def.maxLength !== null) {
                if (ctx.data.length > def.maxLength.value) {
                  addIssueToContext(ctx, {
                    code: ZodIssueCode.too_big,
                    maximum: def.maxLength.value,
                    type: "array",
                    inclusive: true,
                    exact: false,
                    message: def.maxLength.message
                  });
                  status.dirty();
                }
              }
              if (ctx.common.async) {
                return Promise.all(_toConsumableArray(ctx.data).map(function (item, i) {
                  return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
                })).then(function (result) {
                  return ParseStatus.mergeArray(status, result);
                });
              }
              var result = _toConsumableArray(ctx.data).map(function (item, i) {
                return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
              });
              return ParseStatus.mergeArray(status, result);
            }
          }, {
            key: "element",
            get: function get() {
              return this._def.type;
            }
          }, {
            key: "min",
            value: function min(minLength, message) {
              return new ZodArray(_objectSpread(_objectSpread({}, this._def), {}, {
                minLength: {
                  value: minLength,
                  message: errorUtil.toString(message)
                }
              }));
            }
          }, {
            key: "max",
            value: function max(maxLength, message) {
              return new ZodArray(_objectSpread(_objectSpread({}, this._def), {}, {
                maxLength: {
                  value: maxLength,
                  message: errorUtil.toString(message)
                }
              }));
            }
          }, {
            key: "length",
            value: function length(len, message) {
              return new ZodArray(_objectSpread(_objectSpread({}, this._def), {}, {
                exactLength: {
                  value: len,
                  message: errorUtil.toString(message)
                }
              }));
            }
          }, {
            key: "nonempty",
            value: function nonempty(message) {
              return this.min(1, message);
            }
          }]);
        }(ZodType);
        ZodArray.create = function (schema, params) {
          return new ZodArray(_objectSpread({
            type: schema,
            minLength: null,
            maxLength: null,
            exactLength: null,
            typeName: ZodFirstPartyTypeKind.ZodArray
          }, processCreateParams(params)));
        };
        function deepPartialify(schema) {
          if (schema instanceof ZodObject) {
            var newShape = {};
            for (var key in schema.shape) {
              var fieldSchema = schema.shape[key];
              newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
            }
            return new ZodObject(_objectSpread(_objectSpread({}, schema._def), {}, {
              shape: function shape() {
                return newShape;
              }
            }));
          } else if (schema instanceof ZodArray) {
            return new ZodArray(_objectSpread(_objectSpread({}, schema._def), {}, {
              type: deepPartialify(schema.element)
            }));
          } else if (schema instanceof ZodOptional) {
            return ZodOptional.create(deepPartialify(schema.unwrap()));
          } else if (schema instanceof ZodNullable) {
            return ZodNullable.create(deepPartialify(schema.unwrap()));
          } else if (schema instanceof ZodTuple) {
            return ZodTuple.create(schema.items.map(function (item) {
              return deepPartialify(item);
            }));
          } else {
            return schema;
          }
        }
        var ZodObject = /*#__PURE__*/function (_ZodType14) {
          function ZodObject() {
            var _this9;
            _classCallCheck(this, ZodObject);
            _this9 = _callSuper(this, ZodObject, arguments);
            _this9._cached = null;
            /**
             * @deprecated In most cases, this is no longer needed - unknown properties are now silently stripped.
             * If you want to pass through unknown properties, use `.passthrough()` instead.
             */
            _this9.nonstrict = _this9.passthrough;
            // extend<
            //   Augmentation extends ZodRawShape,
            //   NewOutput extends util.flatten<{
            //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
            //       ? Augmentation[k]["_output"]
            //       : k extends keyof Output
            //       ? Output[k]
            //       : never;
            //   }>,
            //   NewInput extends util.flatten<{
            //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
            //       ? Augmentation[k]["_input"]
            //       : k extends keyof Input
            //       ? Input[k]
            //       : never;
            //   }>
            // >(
            //   augmentation: Augmentation
            // ): ZodObject<
            //   extendShape<T, Augmentation>,
            //   UnknownKeys,
            //   Catchall,
            //   NewOutput,
            //   NewInput
            // > {
            //   return new ZodObject({
            //     ...this._def,
            //     shape: () => ({
            //       ...this._def.shape(),
            //       ...augmentation,
            //     }),
            //   }) as any;
            // }
            /**
             * @deprecated Use `.extend` instead
             *  */
            _this9.augment = _this9.extend;
            return _this9;
          }
          _inherits(ZodObject, _ZodType14);
          return _createClass(ZodObject, [{
            key: "_getCached",
            value: function _getCached() {
              if (this._cached !== null) return this._cached;
              var shape = this._def.shape();
              var keys = util.objectKeys(shape);
              return this._cached = {
                shape: shape,
                keys: keys
              };
            }
          }, {
            key: "_parse",
            value: function _parse(input) {
              var parsedType = this._getType(input);
              if (parsedType !== ZodParsedType.object) {
                var _ctx7 = this._getOrReturnCtx(input);
                addIssueToContext(_ctx7, {
                  code: ZodIssueCode.invalid_type,
                  expected: ZodParsedType.object,
                  received: _ctx7.parsedType
                });
                return INVALID;
              }
              var _this$_processInputPa2 = this._processInputParams(input),
                status = _this$_processInputPa2.status,
                ctx = _this$_processInputPa2.ctx;
              var _this$_getCached = this._getCached(),
                shape = _this$_getCached.shape,
                shapeKeys = _this$_getCached.keys;
              var extraKeys = [];
              if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
                for (var key in ctx.data) {
                  if (!shapeKeys.includes(key)) {
                    extraKeys.push(key);
                  }
                }
              }
              var pairs = [];
              var _iterator24 = _createForOfIteratorHelper(shapeKeys),
                _step24;
              try {
                for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
                  var _key7 = _step24.value;
                  var keyValidator = shape[_key7];
                  var _value2 = ctx.data[_key7];
                  pairs.push({
                    key: {
                      status: "valid",
                      value: _key7
                    },
                    value: keyValidator._parse(new ParseInputLazyPath(ctx, _value2, ctx.path, _key7)),
                    alwaysSet: _key7 in ctx.data
                  });
                }
              } catch (err) {
                _iterator24.e(err);
              } finally {
                _iterator24.f();
              }
              if (this._def.catchall instanceof ZodNever) {
                var unknownKeys = this._def.unknownKeys;
                if (unknownKeys === "passthrough") {
                  var _iterator25 = _createForOfIteratorHelper(extraKeys),
                    _step25;
                  try {
                    for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
                      var _key4 = _step25.value;
                      pairs.push({
                        key: {
                          status: "valid",
                          value: _key4
                        },
                        value: {
                          status: "valid",
                          value: ctx.data[_key4]
                        }
                      });
                    }
                  } catch (err) {
                    _iterator25.e(err);
                  } finally {
                    _iterator25.f();
                  }
                } else if (unknownKeys === "strict") {
                  if (extraKeys.length > 0) {
                    addIssueToContext(ctx, {
                      code: ZodIssueCode.unrecognized_keys,
                      keys: extraKeys
                    });
                    status.dirty();
                  }
                } else if (unknownKeys === "strip") ;else {
                  throw new Error("Internal ZodObject error: invalid unknownKeys value.");
                }
              } else {
                // run catchall validation
                var catchall = this._def.catchall;
                var _iterator26 = _createForOfIteratorHelper(extraKeys),
                  _step26;
                try {
                  for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
                    var _key5 = _step26.value;
                    var value = ctx.data[_key5];
                    pairs.push({
                      key: {
                        status: "valid",
                        value: _key5
                      },
                      value: catchall._parse(new ParseInputLazyPath(ctx, value, ctx.path, _key5) //, ctx.child(key), value, getParsedType(value)
                      ),
                      alwaysSet: _key5 in ctx.data
                    });
                  }
                } catch (err) {
                  _iterator26.e(err);
                } finally {
                  _iterator26.f();
                }
              }
              if (ctx.common.async) {
                return Promise.resolve().then(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
                  var syncPairs, _iterator27, _step27, pair, _key6, _value;
                  return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                    while (1) switch (_context4.prev = _context4.next) {
                      case 0:
                        syncPairs = [];
                        _iterator27 = _createForOfIteratorHelper(pairs);
                        _context4.prev = 2;
                        _iterator27.s();
                      case 4:
                        if ((_step27 = _iterator27.n()).done) {
                          _context4.next = 15;
                          break;
                        }
                        pair = _step27.value;
                        _context4.next = 8;
                        return pair.key;
                      case 8:
                        _key6 = _context4.sent;
                        _context4.next = 11;
                        return pair.value;
                      case 11:
                        _value = _context4.sent;
                        syncPairs.push({
                          key: _key6,
                          value: _value,
                          alwaysSet: pair.alwaysSet
                        });
                      case 13:
                        _context4.next = 4;
                        break;
                      case 15:
                        _context4.next = 20;
                        break;
                      case 17:
                        _context4.prev = 17;
                        _context4.t0 = _context4["catch"](2);
                        _iterator27.e(_context4.t0);
                      case 20:
                        _context4.prev = 20;
                        _iterator27.f();
                        return _context4.finish(20);
                      case 23:
                        return _context4.abrupt("return", syncPairs);
                      case 24:
                      case "end":
                        return _context4.stop();
                    }
                  }, _callee4, null, [[2, 17, 20, 23]]);
                }))).then(function (syncPairs) {
                  return ParseStatus.mergeObjectSync(status, syncPairs);
                });
              } else {
                return ParseStatus.mergeObjectSync(status, pairs);
              }
            }
          }, {
            key: "shape",
            get: function get() {
              return this._def.shape();
            }
          }, {
            key: "strict",
            value: function strict(message) {
              var _this10 = this;
              errorUtil.errToObj;
              return new ZodObject(_objectSpread(_objectSpread({}, this._def), {}, {
                unknownKeys: "strict"
              }, message !== undefined ? {
                errorMap: function errorMap(issue, ctx) {
                  var _a, _b, _c, _d;
                  var defaultError = (_c = (_b = (_a = _this10._def).errorMap) === null || _b === void 0 ? void 0 : _b.call(_a, issue, ctx).message) !== null && _c !== void 0 ? _c : ctx.defaultError;
                  if (issue.code === "unrecognized_keys") return {
                    message: (_d = errorUtil.errToObj(message).message) !== null && _d !== void 0 ? _d : defaultError
                  };
                  return {
                    message: defaultError
                  };
                }
              } : {}));
            }
          }, {
            key: "strip",
            value: function strip() {
              return new ZodObject(_objectSpread(_objectSpread({}, this._def), {}, {
                unknownKeys: "strip"
              }));
            }
          }, {
            key: "passthrough",
            value: function passthrough() {
              return new ZodObject(_objectSpread(_objectSpread({}, this._def), {}, {
                unknownKeys: "passthrough"
              }));
            }
            // const AugmentFactory =
            //   <Def extends ZodObjectDef>(def: Def) =>
            //   <Augmentation extends ZodRawShape>(
            //     augmentation: Augmentation
            //   ): ZodObject<
            //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
            //     Def["unknownKeys"],
            //     Def["catchall"]
            //   > => {
            //     return new ZodObject({
            //       ...def,
            //       shape: () => ({
            //         ...def.shape(),
            //         ...augmentation,
            //       }),
            //     }) as any;
            //   };
          }, {
            key: "extend",
            value: function extend(augmentation) {
              var _this11 = this;
              return new ZodObject(_objectSpread(_objectSpread({}, this._def), {}, {
                shape: function shape() {
                  return _objectSpread(_objectSpread({}, _this11._def.shape()), augmentation);
                }
              }));
            }
            /**
             * Prior to zod@1.0.12 there was a bug in the
             * inferred type of merged objects. Please
             * upgrade if you are experiencing issues.
             */
          }, {
            key: "merge",
            value: function merge(merging) {
              var _this12 = this;
              var merged = new ZodObject({
                unknownKeys: merging._def.unknownKeys,
                catchall: merging._def.catchall,
                shape: function shape() {
                  return _objectSpread(_objectSpread({}, _this12._def.shape()), merging._def.shape());
                },
                typeName: ZodFirstPartyTypeKind.ZodObject
              });
              return merged;
            }
            // merge<
            //   Incoming extends AnyZodObject,
            //   Augmentation extends Incoming["shape"],
            //   NewOutput extends {
            //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
            //       ? Augmentation[k]["_output"]
            //       : k extends keyof Output
            //       ? Output[k]
            //       : never;
            //   },
            //   NewInput extends {
            //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
            //       ? Augmentation[k]["_input"]
            //       : k extends keyof Input
            //       ? Input[k]
            //       : never;
            //   }
            // >(
            //   merging: Incoming
            // ): ZodObject<
            //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
            //   Incoming["_def"]["unknownKeys"],
            //   Incoming["_def"]["catchall"],
            //   NewOutput,
            //   NewInput
            // > {
            //   const merged: any = new ZodObject({
            //     unknownKeys: merging._def.unknownKeys,
            //     catchall: merging._def.catchall,
            //     shape: () =>
            //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
            //     typeName: ZodFirstPartyTypeKind.ZodObject,
            //   }) as any;
            //   return merged;
            // }
          }, {
            key: "setKey",
            value: function setKey(key, schema) {
              return this.augment(_defineProperty({}, key, schema));
            }
            // merge<Incoming extends AnyZodObject>(
            //   merging: Incoming
            // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
            // ZodObject<
            //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
            //   Incoming["_def"]["unknownKeys"],
            //   Incoming["_def"]["catchall"]
            // > {
            //   // const mergedShape = objectUtil.mergeShapes(
            //   //   this._def.shape(),
            //   //   merging._def.shape()
            //   // );
            //   const merged: any = new ZodObject({
            //     unknownKeys: merging._def.unknownKeys,
            //     catchall: merging._def.catchall,
            //     shape: () =>
            //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
            //     typeName: ZodFirstPartyTypeKind.ZodObject,
            //   }) as any;
            //   return merged;
            // }
          }, {
            key: "catchall",
            value: function catchall(index) {
              return new ZodObject(_objectSpread(_objectSpread({}, this._def), {}, {
                catchall: index
              }));
            }
          }, {
            key: "pick",
            value: function pick(mask) {
              var _this13 = this;
              var _shape = {};
              util.objectKeys(mask).forEach(function (key) {
                if (mask[key] && _this13.shape[key]) {
                  _shape[key] = _this13.shape[key];
                }
              });
              return new ZodObject(_objectSpread(_objectSpread({}, this._def), {}, {
                shape: function shape() {
                  return _shape;
                }
              }));
            }
          }, {
            key: "omit",
            value: function omit(mask) {
              var _this14 = this;
              var _shape2 = {};
              util.objectKeys(this.shape).forEach(function (key) {
                if (!mask[key]) {
                  _shape2[key] = _this14.shape[key];
                }
              });
              return new ZodObject(_objectSpread(_objectSpread({}, this._def), {}, {
                shape: function shape() {
                  return _shape2;
                }
              }));
            }
            /**
             * @deprecated
             */
          }, {
            key: "deepPartial",
            value: function deepPartial() {
              return deepPartialify(this);
            }
          }, {
            key: "partial",
            value: function partial(mask) {
              var _this15 = this;
              var newShape = {};
              util.objectKeys(this.shape).forEach(function (key) {
                var fieldSchema = _this15.shape[key];
                if (mask && !mask[key]) {
                  newShape[key] = fieldSchema;
                } else {
                  newShape[key] = fieldSchema.optional();
                }
              });
              return new ZodObject(_objectSpread(_objectSpread({}, this._def), {}, {
                shape: function shape() {
                  return newShape;
                }
              }));
            }
          }, {
            key: "required",
            value: function required(mask) {
              var _this16 = this;
              var newShape = {};
              util.objectKeys(this.shape).forEach(function (key) {
                if (mask && !mask[key]) {
                  newShape[key] = _this16.shape[key];
                } else {
                  var fieldSchema = _this16.shape[key];
                  var newField = fieldSchema;
                  while (newField instanceof ZodOptional) {
                    newField = newField._def.innerType;
                  }
                  newShape[key] = newField;
                }
              });
              return new ZodObject(_objectSpread(_objectSpread({}, this._def), {}, {
                shape: function shape() {
                  return newShape;
                }
              }));
            }
          }, {
            key: "keyof",
            value: function keyof() {
              return createZodEnum(util.objectKeys(this.shape));
            }
          }]);
        }(ZodType);
        ZodObject.create = function (_shape3, params) {
          return new ZodObject(_objectSpread({
            shape: function shape() {
              return _shape3;
            },
            unknownKeys: "strip",
            catchall: ZodNever.create(),
            typeName: ZodFirstPartyTypeKind.ZodObject
          }, processCreateParams(params)));
        };
        ZodObject.strictCreate = function (_shape4, params) {
          return new ZodObject(_objectSpread({
            shape: function shape() {
              return _shape4;
            },
            unknownKeys: "strict",
            catchall: ZodNever.create(),
            typeName: ZodFirstPartyTypeKind.ZodObject
          }, processCreateParams(params)));
        };
        ZodObject.lazycreate = function (shape, params) {
          return new ZodObject(_objectSpread({
            shape: shape,
            unknownKeys: "strip",
            catchall: ZodNever.create(),
            typeName: ZodFirstPartyTypeKind.ZodObject
          }, processCreateParams(params)));
        };
        var ZodUnion = /*#__PURE__*/function (_ZodType15) {
          function ZodUnion() {
            _classCallCheck(this, ZodUnion);
            return _callSuper(this, ZodUnion, arguments);
          }
          _inherits(ZodUnion, _ZodType15);
          return _createClass(ZodUnion, [{
            key: "_parse",
            value: function _parse(input) {
              var _this$_processInputPa3 = this._processInputParams(input),
                ctx = _this$_processInputPa3.ctx;
              var options = this._def.options;
              function handleResults(results) {
                // return first issue-free validation if it exists
                var _iterator28 = _createForOfIteratorHelper(results),
                  _step28;
                try {
                  for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
                    var result = _step28.value;
                    if (result.result.status === "valid") {
                      return result.result;
                    }
                  }
                } catch (err) {
                  _iterator28.e(err);
                } finally {
                  _iterator28.f();
                }
                var _iterator29 = _createForOfIteratorHelper(results),
                  _step29;
                try {
                  for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
                    var _result = _step29.value;
                    if (_result.result.status === "dirty") {
                      var _ctx$common$issues;
                      // add issues from dirty option
                      (_ctx$common$issues = ctx.common.issues).push.apply(_ctx$common$issues, _toConsumableArray(_result.ctx.common.issues));
                      return _result.result;
                    }
                  }
                  // return invalid
                } catch (err) {
                  _iterator29.e(err);
                } finally {
                  _iterator29.f();
                }
                var unionErrors = results.map(function (result) {
                  return new ZodError(result.ctx.common.issues);
                });
                addIssueToContext(ctx, {
                  code: ZodIssueCode.invalid_union,
                  unionErrors: unionErrors
                });
                return INVALID;
              }
              if (ctx.common.async) {
                return Promise.all(options.map(/*#__PURE__*/function () {
                  var _ref20 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(option) {
                    var childCtx;
                    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                      while (1) switch (_context5.prev = _context5.next) {
                        case 0:
                          childCtx = _objectSpread(_objectSpread({}, ctx), {}, {
                            common: _objectSpread(_objectSpread({}, ctx.common), {}, {
                              issues: []
                            }),
                            parent: null
                          });
                          _context5.next = 3;
                          return option._parseAsync({
                            data: ctx.data,
                            path: ctx.path,
                            parent: childCtx
                          });
                        case 3:
                          _context5.t0 = _context5.sent;
                          _context5.t1 = childCtx;
                          return _context5.abrupt("return", {
                            result: _context5.t0,
                            ctx: _context5.t1
                          });
                        case 6:
                        case "end":
                          return _context5.stop();
                      }
                    }, _callee5);
                  }));
                  return function (_x8) {
                    return _ref20.apply(this, arguments);
                  };
                }())).then(handleResults);
              } else {
                var dirty = undefined;
                var issues = [];
                var _iterator30 = _createForOfIteratorHelper(options),
                  _step30;
                try {
                  for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
                    var option = _step30.value;
                    var childCtx = _objectSpread(_objectSpread({}, ctx), {}, {
                      common: _objectSpread(_objectSpread({}, ctx.common), {}, {
                        issues: []
                      }),
                      parent: null
                    });
                    var result = option._parseSync({
                      data: ctx.data,
                      path: ctx.path,
                      parent: childCtx
                    });
                    if (result.status === "valid") {
                      return result;
                    } else if (result.status === "dirty" && !dirty) {
                      dirty = {
                        result: result,
                        ctx: childCtx
                      };
                    }
                    if (childCtx.common.issues.length) {
                      issues.push(childCtx.common.issues);
                    }
                  }
                } catch (err) {
                  _iterator30.e(err);
                } finally {
                  _iterator30.f();
                }
                if (dirty) {
                  var _ctx$common$issues2;
                  (_ctx$common$issues2 = ctx.common.issues).push.apply(_ctx$common$issues2, _toConsumableArray(dirty.ctx.common.issues));
                  return dirty.result;
                }
                var unionErrors = issues.map(function (issues) {
                  return new ZodError(issues);
                });
                addIssueToContext(ctx, {
                  code: ZodIssueCode.invalid_union,
                  unionErrors: unionErrors
                });
                return INVALID;
              }
            }
          }, {
            key: "options",
            get: function get() {
              return this._def.options;
            }
          }]);
        }(ZodType);
        ZodUnion.create = function (types, params) {
          return new ZodUnion(_objectSpread({
            options: types,
            typeName: ZodFirstPartyTypeKind.ZodUnion
          }, processCreateParams(params)));
        };
        /////////////////////////////////////////////////////
        /////////////////////////////////////////////////////
        //////////                                 //////////
        //////////      ZodDiscriminatedUnion      //////////
        //////////                                 //////////
        /////////////////////////////////////////////////////
        /////////////////////////////////////////////////////
        var _getDiscriminator = function getDiscriminator(type) {
          if (type instanceof ZodLazy) {
            return _getDiscriminator(type.schema);
          } else if (type instanceof ZodEffects) {
            return _getDiscriminator(type.innerType());
          } else if (type instanceof ZodLiteral) {
            return [type.value];
          } else if (type instanceof ZodEnum) {
            return type.options;
          } else if (type instanceof ZodNativeEnum) {
            // eslint-disable-next-line ban/ban
            return util.objectValues(type.enum);
          } else if (type instanceof ZodDefault) {
            return _getDiscriminator(type._def.innerType);
          } else if (type instanceof ZodUndefined) {
            return [undefined];
          } else if (type instanceof ZodNull) {
            return [null];
          } else if (type instanceof ZodOptional) {
            return [undefined].concat(_toConsumableArray(_getDiscriminator(type.unwrap())));
          } else if (type instanceof ZodNullable) {
            return [null].concat(_toConsumableArray(_getDiscriminator(type.unwrap())));
          } else if (type instanceof ZodBranded) {
            return _getDiscriminator(type.unwrap());
          } else if (type instanceof ZodReadonly) {
            return _getDiscriminator(type.unwrap());
          } else if (type instanceof ZodCatch) {
            return _getDiscriminator(type._def.innerType);
          } else {
            return [];
          }
        };
        var ZodDiscriminatedUnion = /*#__PURE__*/function (_ZodType16) {
          function ZodDiscriminatedUnion() {
            _classCallCheck(this, ZodDiscriminatedUnion);
            return _callSuper(this, ZodDiscriminatedUnion, arguments);
          }
          _inherits(ZodDiscriminatedUnion, _ZodType16);
          return _createClass(ZodDiscriminatedUnion, [{
            key: "_parse",
            value: function _parse(input) {
              var _this$_processInputPa4 = this._processInputParams(input),
                ctx = _this$_processInputPa4.ctx;
              if (ctx.parsedType !== ZodParsedType.object) {
                addIssueToContext(ctx, {
                  code: ZodIssueCode.invalid_type,
                  expected: ZodParsedType.object,
                  received: ctx.parsedType
                });
                return INVALID;
              }
              var discriminator = this.discriminator;
              var discriminatorValue = ctx.data[discriminator];
              var option = this.optionsMap.get(discriminatorValue);
              if (!option) {
                addIssueToContext(ctx, {
                  code: ZodIssueCode.invalid_union_discriminator,
                  options: Array.from(this.optionsMap.keys()),
                  path: [discriminator]
                });
                return INVALID;
              }
              if (ctx.common.async) {
                return option._parseAsync({
                  data: ctx.data,
                  path: ctx.path,
                  parent: ctx
                });
              } else {
                return option._parseSync({
                  data: ctx.data,
                  path: ctx.path,
                  parent: ctx
                });
              }
            }
          }, {
            key: "discriminator",
            get: function get() {
              return this._def.discriminator;
            }
          }, {
            key: "options",
            get: function get() {
              return this._def.options;
            }
          }, {
            key: "optionsMap",
            get: function get() {
              return this._def.optionsMap;
            }
            /**
             * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
             * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
             * have a different value for each object in the union.
             * @param discriminator the name of the discriminator property
             * @param types an array of object schemas
             * @param params
             */
          }], [{
            key: "create",
            value: function create(discriminator, options, params) {
              // Get all the valid discriminator values
              var optionsMap = new Map();
              // try {
              var _iterator31 = _createForOfIteratorHelper(options),
                _step31;
              try {
                for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
                  var type = _step31.value;
                  var discriminatorValues = _getDiscriminator(type.shape[discriminator]);
                  if (!discriminatorValues.length) {
                    throw new Error("A discriminator value for key `".concat(discriminator, "` could not be extracted from all schema options"));
                  }
                  var _iterator32 = _createForOfIteratorHelper(discriminatorValues),
                    _step32;
                  try {
                    for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
                      var value = _step32.value;
                      if (optionsMap.has(value)) {
                        throw new Error("Discriminator property ".concat(String(discriminator), " has duplicate value ").concat(String(value)));
                      }
                      optionsMap.set(value, type);
                    }
                  } catch (err) {
                    _iterator32.e(err);
                  } finally {
                    _iterator32.f();
                  }
                }
              } catch (err) {
                _iterator31.e(err);
              } finally {
                _iterator31.f();
              }
              return new ZodDiscriminatedUnion(_objectSpread({
                typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
                discriminator: discriminator,
                options: options,
                optionsMap: optionsMap
              }, processCreateParams(params)));
            }
          }]);
        }(ZodType);
        function mergeValues(a, b) {
          var aType = getParsedType(a);
          var bType = getParsedType(b);
          if (a === b) {
            return {
              valid: true,
              data: a
            };
          } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
            var bKeys = util.objectKeys(b);
            var sharedKeys = util.objectKeys(a).filter(function (key) {
              return bKeys.indexOf(key) !== -1;
            });
            var newObj = _objectSpread(_objectSpread({}, a), b);
            var _iterator33 = _createForOfIteratorHelper(sharedKeys),
              _step33;
            try {
              for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
                var key = _step33.value;
                var sharedValue = mergeValues(a[key], b[key]);
                if (!sharedValue.valid) {
                  return {
                    valid: false
                  };
                }
                newObj[key] = sharedValue.data;
              }
            } catch (err) {
              _iterator33.e(err);
            } finally {
              _iterator33.f();
            }
            return {
              valid: true,
              data: newObj
            };
          } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
            if (a.length !== b.length) {
              return {
                valid: false
              };
            }
            var newArray = [];
            for (var index = 0; index < a.length; index++) {
              var itemA = a[index];
              var itemB = b[index];
              var _sharedValue = mergeValues(itemA, itemB);
              if (!_sharedValue.valid) {
                return {
                  valid: false
                };
              }
              newArray.push(_sharedValue.data);
            }
            return {
              valid: true,
              data: newArray
            };
          } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) {
            return {
              valid: true,
              data: a
            };
          } else {
            return {
              valid: false
            };
          }
        }
        var ZodIntersection = /*#__PURE__*/function (_ZodType17) {
          function ZodIntersection() {
            _classCallCheck(this, ZodIntersection);
            return _callSuper(this, ZodIntersection, arguments);
          }
          _inherits(ZodIntersection, _ZodType17);
          return _createClass(ZodIntersection, [{
            key: "_parse",
            value: function _parse(input) {
              var _this$_processInputPa5 = this._processInputParams(input),
                status = _this$_processInputPa5.status,
                ctx = _this$_processInputPa5.ctx;
              var handleParsed = function handleParsed(parsedLeft, parsedRight) {
                if (isAborted(parsedLeft) || isAborted(parsedRight)) {
                  return INVALID;
                }
                var merged = mergeValues(parsedLeft.value, parsedRight.value);
                if (!merged.valid) {
                  addIssueToContext(ctx, {
                    code: ZodIssueCode.invalid_intersection_types
                  });
                  return INVALID;
                }
                if (isDirty(parsedLeft) || isDirty(parsedRight)) {
                  status.dirty();
                }
                return {
                  status: status.value,
                  value: merged.data
                };
              };
              if (ctx.common.async) {
                return Promise.all([this._def.left._parseAsync({
                  data: ctx.data,
                  path: ctx.path,
                  parent: ctx
                }), this._def.right._parseAsync({
                  data: ctx.data,
                  path: ctx.path,
                  parent: ctx
                })]).then(function (_ref21) {
                  var _ref22 = _slicedToArray(_ref21, 2),
                    left = _ref22[0],
                    right = _ref22[1];
                  return handleParsed(left, right);
                });
              } else {
                return handleParsed(this._def.left._parseSync({
                  data: ctx.data,
                  path: ctx.path,
                  parent: ctx
                }), this._def.right._parseSync({
                  data: ctx.data,
                  path: ctx.path,
                  parent: ctx
                }));
              }
            }
          }]);
        }(ZodType);
        ZodIntersection.create = function (left, right, params) {
          return new ZodIntersection(_objectSpread({
            left: left,
            right: right,
            typeName: ZodFirstPartyTypeKind.ZodIntersection
          }, processCreateParams(params)));
        };
        var ZodTuple = /*#__PURE__*/function (_ZodType18) {
          function ZodTuple() {
            _classCallCheck(this, ZodTuple);
            return _callSuper(this, ZodTuple, arguments);
          }
          _inherits(ZodTuple, _ZodType18);
          return _createClass(ZodTuple, [{
            key: "_parse",
            value: function _parse(input) {
              var _this17 = this;
              var _this$_processInputPa6 = this._processInputParams(input),
                status = _this$_processInputPa6.status,
                ctx = _this$_processInputPa6.ctx;
              if (ctx.parsedType !== ZodParsedType.array) {
                addIssueToContext(ctx, {
                  code: ZodIssueCode.invalid_type,
                  expected: ZodParsedType.array,
                  received: ctx.parsedType
                });
                return INVALID;
              }
              if (ctx.data.length < this._def.items.length) {
                addIssueToContext(ctx, {
                  code: ZodIssueCode.too_small,
                  minimum: this._def.items.length,
                  inclusive: true,
                  exact: false,
                  type: "array"
                });
                return INVALID;
              }
              var rest = this._def.rest;
              if (!rest && ctx.data.length > this._def.items.length) {
                addIssueToContext(ctx, {
                  code: ZodIssueCode.too_big,
                  maximum: this._def.items.length,
                  inclusive: true,
                  exact: false,
                  type: "array"
                });
                status.dirty();
              }
              var items = _toConsumableArray(ctx.data).map(function (item, itemIndex) {
                var schema = _this17._def.items[itemIndex] || _this17._def.rest;
                if (!schema) return null;
                return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
              }).filter(function (x) {
                return !!x;
              }); // filter nulls
              if (ctx.common.async) {
                return Promise.all(items).then(function (results) {
                  return ParseStatus.mergeArray(status, results);
                });
              } else {
                return ParseStatus.mergeArray(status, items);
              }
            }
          }, {
            key: "items",
            get: function get() {
              return this._def.items;
            }
          }, {
            key: "rest",
            value: function rest(_rest) {
              return new ZodTuple(_objectSpread(_objectSpread({}, this._def), {}, {
                rest: _rest
              }));
            }
          }]);
        }(ZodType);
        ZodTuple.create = function (schemas, params) {
          if (!Array.isArray(schemas)) {
            throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
          }
          return new ZodTuple(_objectSpread({
            items: schemas,
            typeName: ZodFirstPartyTypeKind.ZodTuple,
            rest: null
          }, processCreateParams(params)));
        };
        var ZodRecord = /*#__PURE__*/function (_ZodType19) {
          function ZodRecord() {
            _classCallCheck(this, ZodRecord);
            return _callSuper(this, ZodRecord, arguments);
          }
          _inherits(ZodRecord, _ZodType19);
          return _createClass(ZodRecord, [{
            key: "keySchema",
            get: function get() {
              return this._def.keyType;
            }
          }, {
            key: "valueSchema",
            get: function get() {
              return this._def.valueType;
            }
          }, {
            key: "_parse",
            value: function _parse(input) {
              var _this$_processInputPa7 = this._processInputParams(input),
                status = _this$_processInputPa7.status,
                ctx = _this$_processInputPa7.ctx;
              if (ctx.parsedType !== ZodParsedType.object) {
                addIssueToContext(ctx, {
                  code: ZodIssueCode.invalid_type,
                  expected: ZodParsedType.object,
                  received: ctx.parsedType
                });
                return INVALID;
              }
              var pairs = [];
              var keyType = this._def.keyType;
              var valueType = this._def.valueType;
              for (var key in ctx.data) {
                pairs.push({
                  key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
                  value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
                  alwaysSet: key in ctx.data
                });
              }
              if (ctx.common.async) {
                return ParseStatus.mergeObjectAsync(status, pairs);
              } else {
                return ParseStatus.mergeObjectSync(status, pairs);
              }
            }
          }, {
            key: "element",
            get: function get() {
              return this._def.valueType;
            }
          }], [{
            key: "create",
            value: function create(first, second, third) {
              if (second instanceof ZodType) {
                return new ZodRecord(_objectSpread({
                  keyType: first,
                  valueType: second,
                  typeName: ZodFirstPartyTypeKind.ZodRecord
                }, processCreateParams(third)));
              }
              return new ZodRecord(_objectSpread({
                keyType: ZodString.create(),
                valueType: first,
                typeName: ZodFirstPartyTypeKind.ZodRecord
              }, processCreateParams(second)));
            }
          }]);
        }(ZodType);
        var ZodMap = /*#__PURE__*/function (_ZodType20) {
          function ZodMap() {
            _classCallCheck(this, ZodMap);
            return _callSuper(this, ZodMap, arguments);
          }
          _inherits(ZodMap, _ZodType20);
          return _createClass(ZodMap, [{
            key: "keySchema",
            get: function get() {
              return this._def.keyType;
            }
          }, {
            key: "valueSchema",
            get: function get() {
              return this._def.valueType;
            }
          }, {
            key: "_parse",
            value: function _parse(input) {
              var _this$_processInputPa8 = this._processInputParams(input),
                status = _this$_processInputPa8.status,
                ctx = _this$_processInputPa8.ctx;
              if (ctx.parsedType !== ZodParsedType.map) {
                addIssueToContext(ctx, {
                  code: ZodIssueCode.invalid_type,
                  expected: ZodParsedType.map,
                  received: ctx.parsedType
                });
                return INVALID;
              }
              var keyType = this._def.keyType;
              var valueType = this._def.valueType;
              var pairs = _toConsumableArray(ctx.data.entries()).map(function (_ref23, index) {
                var _ref24 = _slicedToArray(_ref23, 2),
                  key = _ref24[0],
                  value = _ref24[1];
                return {
                  key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
                  value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
                };
              });
              if (ctx.common.async) {
                var finalMap = new Map();
                return Promise.resolve().then(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
                  var _iterator34, _step34, pair, key, value;
                  return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                    while (1) switch (_context6.prev = _context6.next) {
                      case 0:
                        _iterator34 = _createForOfIteratorHelper(pairs);
                        _context6.prev = 1;
                        _iterator34.s();
                      case 3:
                        if ((_step34 = _iterator34.n()).done) {
                          _context6.next = 17;
                          break;
                        }
                        pair = _step34.value;
                        _context6.next = 7;
                        return pair.key;
                      case 7:
                        key = _context6.sent;
                        _context6.next = 10;
                        return pair.value;
                      case 10:
                        value = _context6.sent;
                        if (!(key.status === "aborted" || value.status === "aborted")) {
                          _context6.next = 13;
                          break;
                        }
                        return _context6.abrupt("return", INVALID);
                      case 13:
                        if (key.status === "dirty" || value.status === "dirty") {
                          status.dirty();
                        }
                        finalMap.set(key.value, value.value);
                      case 15:
                        _context6.next = 3;
                        break;
                      case 17:
                        _context6.next = 22;
                        break;
                      case 19:
                        _context6.prev = 19;
                        _context6.t0 = _context6["catch"](1);
                        _iterator34.e(_context6.t0);
                      case 22:
                        _context6.prev = 22;
                        _iterator34.f();
                        return _context6.finish(22);
                      case 25:
                        return _context6.abrupt("return", {
                          status: status.value,
                          value: finalMap
                        });
                      case 26:
                      case "end":
                        return _context6.stop();
                    }
                  }, _callee6, null, [[1, 19, 22, 25]]);
                })));
              } else {
                var _finalMap = new Map();
                var _iterator35 = _createForOfIteratorHelper(pairs),
                  _step35;
                try {
                  for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
                    var pair = _step35.value;
                    var key = pair.key;
                    var value = pair.value;
                    if (key.status === "aborted" || value.status === "aborted") {
                      return INVALID;
                    }
                    if (key.status === "dirty" || value.status === "dirty") {
                      status.dirty();
                    }
                    _finalMap.set(key.value, value.value);
                  }
                } catch (err) {
                  _iterator35.e(err);
                } finally {
                  _iterator35.f();
                }
                return {
                  status: status.value,
                  value: _finalMap
                };
              }
            }
          }]);
        }(ZodType);
        ZodMap.create = function (keyType, valueType, params) {
          return new ZodMap(_objectSpread({
            valueType: valueType,
            keyType: keyType,
            typeName: ZodFirstPartyTypeKind.ZodMap
          }, processCreateParams(params)));
        };
        var ZodSet = /*#__PURE__*/function (_ZodType21) {
          function ZodSet() {
            _classCallCheck(this, ZodSet);
            return _callSuper(this, ZodSet, arguments);
          }
          _inherits(ZodSet, _ZodType21);
          return _createClass(ZodSet, [{
            key: "_parse",
            value: function _parse(input) {
              var _this$_processInputPa9 = this._processInputParams(input),
                status = _this$_processInputPa9.status,
                ctx = _this$_processInputPa9.ctx;
              if (ctx.parsedType !== ZodParsedType.set) {
                addIssueToContext(ctx, {
                  code: ZodIssueCode.invalid_type,
                  expected: ZodParsedType.set,
                  received: ctx.parsedType
                });
                return INVALID;
              }
              var def = this._def;
              if (def.minSize !== null) {
                if (ctx.data.size < def.minSize.value) {
                  addIssueToContext(ctx, {
                    code: ZodIssueCode.too_small,
                    minimum: def.minSize.value,
                    type: "set",
                    inclusive: true,
                    exact: false,
                    message: def.minSize.message
                  });
                  status.dirty();
                }
              }
              if (def.maxSize !== null) {
                if (ctx.data.size > def.maxSize.value) {
                  addIssueToContext(ctx, {
                    code: ZodIssueCode.too_big,
                    maximum: def.maxSize.value,
                    type: "set",
                    inclusive: true,
                    exact: false,
                    message: def.maxSize.message
                  });
                  status.dirty();
                }
              }
              var valueType = this._def.valueType;
              function finalizeSet(elements) {
                var parsedSet = new Set();
                var _iterator36 = _createForOfIteratorHelper(elements),
                  _step36;
                try {
                  for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
                    var element = _step36.value;
                    if (element.status === "aborted") return INVALID;
                    if (element.status === "dirty") status.dirty();
                    parsedSet.add(element.value);
                  }
                } catch (err) {
                  _iterator36.e(err);
                } finally {
                  _iterator36.f();
                }
                return {
                  status: status.value,
                  value: parsedSet
                };
              }
              var elements = _toConsumableArray(ctx.data.values()).map(function (item, i) {
                return valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i));
              });
              if (ctx.common.async) {
                return Promise.all(elements).then(function (elements) {
                  return finalizeSet(elements);
                });
              } else {
                return finalizeSet(elements);
              }
            }
          }, {
            key: "min",
            value: function min(minSize, message) {
              return new ZodSet(_objectSpread(_objectSpread({}, this._def), {}, {
                minSize: {
                  value: minSize,
                  message: errorUtil.toString(message)
                }
              }));
            }
          }, {
            key: "max",
            value: function max(maxSize, message) {
              return new ZodSet(_objectSpread(_objectSpread({}, this._def), {}, {
                maxSize: {
                  value: maxSize,
                  message: errorUtil.toString(message)
                }
              }));
            }
          }, {
            key: "size",
            value: function size(_size, message) {
              return this.min(_size, message).max(_size, message);
            }
          }, {
            key: "nonempty",
            value: function nonempty(message) {
              return this.min(1, message);
            }
          }]);
        }(ZodType);
        ZodSet.create = function (valueType, params) {
          return new ZodSet(_objectSpread({
            valueType: valueType,
            minSize: null,
            maxSize: null,
            typeName: ZodFirstPartyTypeKind.ZodSet
          }, processCreateParams(params)));
        };
        var ZodFunction = /*#__PURE__*/function (_ZodType22) {
          function ZodFunction() {
            var _this18;
            _classCallCheck(this, ZodFunction);
            _this18 = _callSuper(this, ZodFunction, arguments);
            _this18.validate = _this18.implement;
            return _this18;
          }
          _inherits(ZodFunction, _ZodType22);
          return _createClass(ZodFunction, [{
            key: "_parse",
            value: function _parse(input) {
              var _this$_processInputPa10 = this._processInputParams(input),
                ctx = _this$_processInputPa10.ctx;
              if (ctx.parsedType !== ZodParsedType.function) {
                addIssueToContext(ctx, {
                  code: ZodIssueCode.invalid_type,
                  expected: ZodParsedType.function,
                  received: ctx.parsedType
                });
                return INVALID;
              }
              function makeArgsIssue(args, error) {
                return makeIssue({
                  data: args,
                  path: ctx.path,
                  errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), errorMap].filter(function (x) {
                    return !!x;
                  }),
                  issueData: {
                    code: ZodIssueCode.invalid_arguments,
                    argumentsError: error
                  }
                });
              }
              function makeReturnsIssue(returns, error) {
                return makeIssue({
                  data: returns,
                  path: ctx.path,
                  errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), errorMap].filter(function (x) {
                    return !!x;
                  }),
                  issueData: {
                    code: ZodIssueCode.invalid_return_type,
                    returnTypeError: error
                  }
                });
              }
              var params = {
                errorMap: ctx.common.contextualErrorMap
              };
              var fn = ctx.data;
              if (this._def.returns instanceof ZodPromise) {
                // Would love a way to avoid disabling this rule, but we need
                // an alias (using an arrow function was what caused 2651).
                // eslint-disable-next-line @typescript-eslint/no-this-alias
                var _me = this;
                return OK(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
                  var _len4,
                    args,
                    _key8,
                    error,
                    parsedArgs,
                    result,
                    parsedReturns,
                    _args7 = arguments;
                  return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                    while (1) switch (_context7.prev = _context7.next) {
                      case 0:
                        for (_len4 = _args7.length, args = new Array(_len4), _key8 = 0; _key8 < _len4; _key8++) {
                          args[_key8] = _args7[_key8];
                        }
                        error = new ZodError([]);
                        _context7.next = 4;
                        return _me._def.args.parseAsync(args, params).catch(function (e) {
                          error.addIssue(makeArgsIssue(args, e));
                          throw error;
                        });
                      case 4:
                        parsedArgs = _context7.sent;
                        _context7.next = 7;
                        return Reflect.apply(fn, this, parsedArgs);
                      case 7:
                        result = _context7.sent;
                        _context7.next = 10;
                        return _me._def.returns._def.type.parseAsync(result, params).catch(function (e) {
                          error.addIssue(makeReturnsIssue(result, e));
                          throw error;
                        });
                      case 10:
                        parsedReturns = _context7.sent;
                        return _context7.abrupt("return", parsedReturns);
                      case 12:
                      case "end":
                        return _context7.stop();
                    }
                  }, _callee7, this);
                })));
              } else {
                // Would love a way to avoid disabling this rule, but we need
                // an alias (using an arrow function was what caused 2651).
                // eslint-disable-next-line @typescript-eslint/no-this-alias
                var _me2 = this;
                return OK(function () {
                  for (var _len5 = arguments.length, args = new Array(_len5), _key9 = 0; _key9 < _len5; _key9++) {
                    args[_key9] = arguments[_key9];
                  }
                  var parsedArgs = _me2._def.args.safeParse(args, params);
                  if (!parsedArgs.success) {
                    throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
                  }
                  var result = Reflect.apply(fn, this, parsedArgs.data);
                  var parsedReturns = _me2._def.returns.safeParse(result, params);
                  if (!parsedReturns.success) {
                    throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
                  }
                  return parsedReturns.data;
                });
              }
            }
          }, {
            key: "parameters",
            value: function parameters() {
              return this._def.args;
            }
          }, {
            key: "returnType",
            value: function returnType() {
              return this._def.returns;
            }
          }, {
            key: "args",
            value: function args() {
              for (var _len6 = arguments.length, items = new Array(_len6), _key10 = 0; _key10 < _len6; _key10++) {
                items[_key10] = arguments[_key10];
              }
              return new ZodFunction(_objectSpread(_objectSpread({}, this._def), {}, {
                args: ZodTuple.create(items).rest(ZodUnknown.create())
              }));
            }
          }, {
            key: "returns",
            value: function returns(returnType) {
              return new ZodFunction(_objectSpread(_objectSpread({}, this._def), {}, {
                returns: returnType
              }));
            }
          }, {
            key: "implement",
            value: function implement(func) {
              var validatedFunc = this.parse(func);
              return validatedFunc;
            }
          }, {
            key: "strictImplement",
            value: function strictImplement(func) {
              var validatedFunc = this.parse(func);
              return validatedFunc;
            }
          }], [{
            key: "create",
            value: function create(args, returns, params) {
              return new ZodFunction(_objectSpread({
                args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
                returns: returns || ZodUnknown.create(),
                typeName: ZodFirstPartyTypeKind.ZodFunction
              }, processCreateParams(params)));
            }
          }]);
        }(ZodType);
        var ZodLazy = /*#__PURE__*/function (_ZodType23) {
          function ZodLazy() {
            _classCallCheck(this, ZodLazy);
            return _callSuper(this, ZodLazy, arguments);
          }
          _inherits(ZodLazy, _ZodType23);
          return _createClass(ZodLazy, [{
            key: "schema",
            get: function get() {
              return this._def.getter();
            }
          }, {
            key: "_parse",
            value: function _parse(input) {
              var _this$_processInputPa11 = this._processInputParams(input),
                ctx = _this$_processInputPa11.ctx;
              var lazySchema = this._def.getter();
              return lazySchema._parse({
                data: ctx.data,
                path: ctx.path,
                parent: ctx
              });
            }
          }]);
        }(ZodType);
        ZodLazy.create = function (getter, params) {
          return new ZodLazy(_objectSpread({
            getter: getter,
            typeName: ZodFirstPartyTypeKind.ZodLazy
          }, processCreateParams(params)));
        };
        var ZodLiteral = /*#__PURE__*/function (_ZodType24) {
          function ZodLiteral() {
            _classCallCheck(this, ZodLiteral);
            return _callSuper(this, ZodLiteral, arguments);
          }
          _inherits(ZodLiteral, _ZodType24);
          return _createClass(ZodLiteral, [{
            key: "_parse",
            value: function _parse(input) {
              if (input.data !== this._def.value) {
                var ctx = this._getOrReturnCtx(input);
                addIssueToContext(ctx, {
                  received: ctx.data,
                  code: ZodIssueCode.invalid_literal,
                  expected: this._def.value
                });
                return INVALID;
              }
              return {
                status: "valid",
                value: input.data
              };
            }
          }, {
            key: "value",
            get: function get() {
              return this._def.value;
            }
          }]);
        }(ZodType);
        ZodLiteral.create = function (value, params) {
          return new ZodLiteral(_objectSpread({
            value: value,
            typeName: ZodFirstPartyTypeKind.ZodLiteral
          }, processCreateParams(params)));
        };
        function createZodEnum(values, params) {
          return new ZodEnum(_objectSpread({
            values: values,
            typeName: ZodFirstPartyTypeKind.ZodEnum
          }, processCreateParams(params)));
        }
        var ZodEnum = /*#__PURE__*/function (_ZodType25) {
          function ZodEnum() {
            var _this19;
            _classCallCheck(this, ZodEnum);
            _this19 = _callSuper(this, ZodEnum, arguments);
            _ZodEnum_cache.set(_this19, void 0);
            return _this19;
          }
          _inherits(ZodEnum, _ZodType25);
          return _createClass(ZodEnum, [{
            key: "_parse",
            value: function _parse(input) {
              if (typeof input.data !== "string") {
                var ctx = this._getOrReturnCtx(input);
                var expectedValues = this._def.values;
                addIssueToContext(ctx, {
                  expected: util.joinValues(expectedValues),
                  received: ctx.parsedType,
                  code: ZodIssueCode.invalid_type
                });
                return INVALID;
              }
              if (!__classPrivateFieldGet(this, _ZodEnum_cache)) {
                __classPrivateFieldSet(this, _ZodEnum_cache, new Set(this._def.values));
              }
              if (!__classPrivateFieldGet(this, _ZodEnum_cache).has(input.data)) {
                var _ctx8 = this._getOrReturnCtx(input);
                var _expectedValues = this._def.values;
                addIssueToContext(_ctx8, {
                  received: _ctx8.data,
                  code: ZodIssueCode.invalid_enum_value,
                  options: _expectedValues
                });
                return INVALID;
              }
              return OK(input.data);
            }
          }, {
            key: "options",
            get: function get() {
              return this._def.values;
            }
          }, {
            key: "enum",
            get: function get() {
              var enumValues = {};
              var _iterator37 = _createForOfIteratorHelper(this._def.values),
                _step37;
              try {
                for (_iterator37.s(); !(_step37 = _iterator37.n()).done;) {
                  var val = _step37.value;
                  enumValues[val] = val;
                }
              } catch (err) {
                _iterator37.e(err);
              } finally {
                _iterator37.f();
              }
              return enumValues;
            }
          }, {
            key: "Values",
            get: function get() {
              var enumValues = {};
              var _iterator38 = _createForOfIteratorHelper(this._def.values),
                _step38;
              try {
                for (_iterator38.s(); !(_step38 = _iterator38.n()).done;) {
                  var val = _step38.value;
                  enumValues[val] = val;
                }
              } catch (err) {
                _iterator38.e(err);
              } finally {
                _iterator38.f();
              }
              return enumValues;
            }
          }, {
            key: "Enum",
            get: function get() {
              var enumValues = {};
              var _iterator39 = _createForOfIteratorHelper(this._def.values),
                _step39;
              try {
                for (_iterator39.s(); !(_step39 = _iterator39.n()).done;) {
                  var val = _step39.value;
                  enumValues[val] = val;
                }
              } catch (err) {
                _iterator39.e(err);
              } finally {
                _iterator39.f();
              }
              return enumValues;
            }
          }, {
            key: "extract",
            value: function extract(values) {
              var newDef = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._def;
              return ZodEnum.create(values, _objectSpread(_objectSpread({}, this._def), newDef));
            }
          }, {
            key: "exclude",
            value: function exclude(values) {
              var newDef = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._def;
              return ZodEnum.create(this.options.filter(function (opt) {
                return !values.includes(opt);
              }), _objectSpread(_objectSpread({}, this._def), newDef));
            }
          }]);
        }(ZodType);
        _ZodEnum_cache = new WeakMap();
        ZodEnum.create = createZodEnum;
        var ZodNativeEnum = /*#__PURE__*/function (_ZodType26) {
          function ZodNativeEnum() {
            var _this20;
            _classCallCheck(this, ZodNativeEnum);
            _this20 = _callSuper(this, ZodNativeEnum, arguments);
            _ZodNativeEnum_cache.set(_this20, void 0);
            return _this20;
          }
          _inherits(ZodNativeEnum, _ZodType26);
          return _createClass(ZodNativeEnum, [{
            key: "_parse",
            value: function _parse(input) {
              var nativeEnumValues = util.getValidEnumValues(this._def.values);
              var ctx = this._getOrReturnCtx(input);
              if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
                var expectedValues = util.objectValues(nativeEnumValues);
                addIssueToContext(ctx, {
                  expected: util.joinValues(expectedValues),
                  received: ctx.parsedType,
                  code: ZodIssueCode.invalid_type
                });
                return INVALID;
              }
              if (!__classPrivateFieldGet(this, _ZodNativeEnum_cache)) {
                __classPrivateFieldSet(this, _ZodNativeEnum_cache, new Set(util.getValidEnumValues(this._def.values)));
              }
              if (!__classPrivateFieldGet(this, _ZodNativeEnum_cache).has(input.data)) {
                var _expectedValues2 = util.objectValues(nativeEnumValues);
                addIssueToContext(ctx, {
                  received: ctx.data,
                  code: ZodIssueCode.invalid_enum_value,
                  options: _expectedValues2
                });
                return INVALID;
              }
              return OK(input.data);
            }
          }, {
            key: "enum",
            get: function get() {
              return this._def.values;
            }
          }]);
        }(ZodType);
        _ZodNativeEnum_cache = new WeakMap();
        ZodNativeEnum.create = function (values, params) {
          return new ZodNativeEnum(_objectSpread({
            values: values,
            typeName: ZodFirstPartyTypeKind.ZodNativeEnum
          }, processCreateParams(params)));
        };
        var ZodPromise = /*#__PURE__*/function (_ZodType27) {
          function ZodPromise() {
            _classCallCheck(this, ZodPromise);
            return _callSuper(this, ZodPromise, arguments);
          }
          _inherits(ZodPromise, _ZodType27);
          return _createClass(ZodPromise, [{
            key: "unwrap",
            value: function unwrap() {
              return this._def.type;
            }
          }, {
            key: "_parse",
            value: function _parse(input) {
              var _this21 = this;
              var _this$_processInputPa12 = this._processInputParams(input),
                ctx = _this$_processInputPa12.ctx;
              if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
                addIssueToContext(ctx, {
                  code: ZodIssueCode.invalid_type,
                  expected: ZodParsedType.promise,
                  received: ctx.parsedType
                });
                return INVALID;
              }
              var promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
              return OK(promisified.then(function (data) {
                return _this21._def.type.parseAsync(data, {
                  path: ctx.path,
                  errorMap: ctx.common.contextualErrorMap
                });
              }));
            }
          }]);
        }(ZodType);
        ZodPromise.create = function (schema, params) {
          return new ZodPromise(_objectSpread({
            type: schema,
            typeName: ZodFirstPartyTypeKind.ZodPromise
          }, processCreateParams(params)));
        };
        var ZodEffects = /*#__PURE__*/function (_ZodType28) {
          function ZodEffects() {
            _classCallCheck(this, ZodEffects);
            return _callSuper(this, ZodEffects, arguments);
          }
          _inherits(ZodEffects, _ZodType28);
          return _createClass(ZodEffects, [{
            key: "innerType",
            value: function innerType() {
              return this._def.schema;
            }
          }, {
            key: "sourceType",
            value: function sourceType() {
              return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
            }
          }, {
            key: "_parse",
            value: function _parse(input) {
              var _this22 = this;
              var _this$_processInputPa13 = this._processInputParams(input),
                status = _this$_processInputPa13.status,
                ctx = _this$_processInputPa13.ctx;
              var effect = this._def.effect || null;
              var checkCtx = {
                addIssue: function addIssue(arg) {
                  addIssueToContext(ctx, arg);
                  if (arg.fatal) {
                    status.abort();
                  } else {
                    status.dirty();
                  }
                },
                get path() {
                  return ctx.path;
                }
              };
              checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
              if (effect.type === "preprocess") {
                var processed = effect.transform(ctx.data, checkCtx);
                if (ctx.common.async) {
                  return Promise.resolve(processed).then(/*#__PURE__*/function () {
                    var _ref27 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(processed) {
                      var result;
                      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                        while (1) switch (_context8.prev = _context8.next) {
                          case 0:
                            if (!(status.value === "aborted")) {
                              _context8.next = 2;
                              break;
                            }
                            return _context8.abrupt("return", INVALID);
                          case 2:
                            _context8.next = 4;
                            return _this22._def.schema._parseAsync({
                              data: processed,
                              path: ctx.path,
                              parent: ctx
                            });
                          case 4:
                            result = _context8.sent;
                            if (!(result.status === "aborted")) {
                              _context8.next = 7;
                              break;
                            }
                            return _context8.abrupt("return", INVALID);
                          case 7:
                            if (!(result.status === "dirty")) {
                              _context8.next = 9;
                              break;
                            }
                            return _context8.abrupt("return", DIRTY(result.value));
                          case 9:
                            if (!(status.value === "dirty")) {
                              _context8.next = 11;
                              break;
                            }
                            return _context8.abrupt("return", DIRTY(result.value));
                          case 11:
                            return _context8.abrupt("return", result);
                          case 12:
                          case "end":
                            return _context8.stop();
                        }
                      }, _callee8);
                    }));
                    return function (_x9) {
                      return _ref27.apply(this, arguments);
                    };
                  }());
                } else {
                  if (status.value === "aborted") return INVALID;
                  var result = this._def.schema._parseSync({
                    data: processed,
                    path: ctx.path,
                    parent: ctx
                  });
                  if (result.status === "aborted") return INVALID;
                  if (result.status === "dirty") return DIRTY(result.value);
                  if (status.value === "dirty") return DIRTY(result.value);
                  return result;
                }
              }
              if (effect.type === "refinement") {
                var executeRefinement = function executeRefinement(acc) {
                  var result = effect.refinement(acc, checkCtx);
                  if (ctx.common.async) {
                    return Promise.resolve(result);
                  }
                  if (result instanceof Promise) {
                    throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                  }
                  return acc;
                };
                if (ctx.common.async === false) {
                  var inner = this._def.schema._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx
                  });
                  if (inner.status === "aborted") return INVALID;
                  if (inner.status === "dirty") status.dirty();
                  // return value is ignored
                  executeRefinement(inner.value);
                  return {
                    status: status.value,
                    value: inner.value
                  };
                } else {
                  return this._def.schema._parseAsync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx
                  }).then(function (inner) {
                    if (inner.status === "aborted") return INVALID;
                    if (inner.status === "dirty") status.dirty();
                    return executeRefinement(inner.value).then(function () {
                      return {
                        status: status.value,
                        value: inner.value
                      };
                    });
                  });
                }
              }
              if (effect.type === "transform") {
                if (ctx.common.async === false) {
                  var base = this._def.schema._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx
                  });
                  if (!isValid(base)) return base;
                  var _result2 = effect.transform(base.value, checkCtx);
                  if (_result2 instanceof Promise) {
                    throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
                  }
                  return {
                    status: status.value,
                    value: _result2
                  };
                } else {
                  return this._def.schema._parseAsync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx
                  }).then(function (base) {
                    if (!isValid(base)) return base;
                    return Promise.resolve(effect.transform(base.value, checkCtx)).then(function (result) {
                      return {
                        status: status.value,
                        value: result
                      };
                    });
                  });
                }
              }
              util.assertNever(effect);
            }
          }]);
        }(ZodType);
        ZodEffects.create = function (schema, effect, params) {
          return new ZodEffects(_objectSpread({
            schema: schema,
            typeName: ZodFirstPartyTypeKind.ZodEffects,
            effect: effect
          }, processCreateParams(params)));
        };
        ZodEffects.createWithPreprocess = function (preprocess, schema, params) {
          return new ZodEffects(_objectSpread({
            schema: schema,
            effect: {
              type: "preprocess",
              transform: preprocess
            },
            typeName: ZodFirstPartyTypeKind.ZodEffects
          }, processCreateParams(params)));
        };
        var ZodOptional = /*#__PURE__*/function (_ZodType29) {
          function ZodOptional() {
            _classCallCheck(this, ZodOptional);
            return _callSuper(this, ZodOptional, arguments);
          }
          _inherits(ZodOptional, _ZodType29);
          return _createClass(ZodOptional, [{
            key: "_parse",
            value: function _parse(input) {
              var parsedType = this._getType(input);
              if (parsedType === ZodParsedType.undefined) {
                return OK(undefined);
              }
              return this._def.innerType._parse(input);
            }
          }, {
            key: "unwrap",
            value: function unwrap() {
              return this._def.innerType;
            }
          }]);
        }(ZodType);
        ZodOptional.create = function (type, params) {
          return new ZodOptional(_objectSpread({
            innerType: type,
            typeName: ZodFirstPartyTypeKind.ZodOptional
          }, processCreateParams(params)));
        };
        var ZodNullable = /*#__PURE__*/function (_ZodType30) {
          function ZodNullable() {
            _classCallCheck(this, ZodNullable);
            return _callSuper(this, ZodNullable, arguments);
          }
          _inherits(ZodNullable, _ZodType30);
          return _createClass(ZodNullable, [{
            key: "_parse",
            value: function _parse(input) {
              var parsedType = this._getType(input);
              if (parsedType === ZodParsedType.null) {
                return OK(null);
              }
              return this._def.innerType._parse(input);
            }
          }, {
            key: "unwrap",
            value: function unwrap() {
              return this._def.innerType;
            }
          }]);
        }(ZodType);
        ZodNullable.create = function (type, params) {
          return new ZodNullable(_objectSpread({
            innerType: type,
            typeName: ZodFirstPartyTypeKind.ZodNullable
          }, processCreateParams(params)));
        };
        var ZodDefault = /*#__PURE__*/function (_ZodType31) {
          function ZodDefault() {
            _classCallCheck(this, ZodDefault);
            return _callSuper(this, ZodDefault, arguments);
          }
          _inherits(ZodDefault, _ZodType31);
          return _createClass(ZodDefault, [{
            key: "_parse",
            value: function _parse(input) {
              var _this$_processInputPa14 = this._processInputParams(input),
                ctx = _this$_processInputPa14.ctx;
              var data = ctx.data;
              if (ctx.parsedType === ZodParsedType.undefined) {
                data = this._def.defaultValue();
              }
              return this._def.innerType._parse({
                data: data,
                path: ctx.path,
                parent: ctx
              });
            }
          }, {
            key: "removeDefault",
            value: function removeDefault() {
              return this._def.innerType;
            }
          }]);
        }(ZodType);
        ZodDefault.create = function (type, params) {
          return new ZodDefault(_objectSpread({
            innerType: type,
            typeName: ZodFirstPartyTypeKind.ZodDefault,
            defaultValue: typeof params.default === "function" ? params.default : function () {
              return params.default;
            }
          }, processCreateParams(params)));
        };
        var ZodCatch = /*#__PURE__*/function (_ZodType32) {
          function ZodCatch() {
            _classCallCheck(this, ZodCatch);
            return _callSuper(this, ZodCatch, arguments);
          }
          _inherits(ZodCatch, _ZodType32);
          return _createClass(ZodCatch, [{
            key: "_parse",
            value: function _parse(input) {
              var _this23 = this;
              var _this$_processInputPa15 = this._processInputParams(input),
                ctx = _this$_processInputPa15.ctx;
              // newCtx is used to not collect issues from inner types in ctx
              var newCtx = _objectSpread(_objectSpread({}, ctx), {}, {
                common: _objectSpread(_objectSpread({}, ctx.common), {}, {
                  issues: []
                })
              });
              var result = this._def.innerType._parse({
                data: newCtx.data,
                path: newCtx.path,
                parent: _objectSpread({}, newCtx)
              });
              if (isAsync(result)) {
                return result.then(function (result) {
                  return {
                    status: "valid",
                    value: result.status === "valid" ? result.value : _this23._def.catchValue({
                      get error() {
                        return new ZodError(newCtx.common.issues);
                      },
                      input: newCtx.data
                    })
                  };
                });
              } else {
                return {
                  status: "valid",
                  value: result.status === "valid" ? result.value : this._def.catchValue({
                    get error() {
                      return new ZodError(newCtx.common.issues);
                    },
                    input: newCtx.data
                  })
                };
              }
            }
          }, {
            key: "removeCatch",
            value: function removeCatch() {
              return this._def.innerType;
            }
          }]);
        }(ZodType);
        ZodCatch.create = function (type, params) {
          return new ZodCatch(_objectSpread({
            innerType: type,
            typeName: ZodFirstPartyTypeKind.ZodCatch,
            catchValue: typeof params.catch === "function" ? params.catch : function () {
              return params.catch;
            }
          }, processCreateParams(params)));
        };
        var ZodNaN = /*#__PURE__*/function (_ZodType33) {
          function ZodNaN() {
            _classCallCheck(this, ZodNaN);
            return _callSuper(this, ZodNaN, arguments);
          }
          _inherits(ZodNaN, _ZodType33);
          return _createClass(ZodNaN, [{
            key: "_parse",
            value: function _parse(input) {
              var parsedType = this._getType(input);
              if (parsedType !== ZodParsedType.nan) {
                var ctx = this._getOrReturnCtx(input);
                addIssueToContext(ctx, {
                  code: ZodIssueCode.invalid_type,
                  expected: ZodParsedType.nan,
                  received: ctx.parsedType
                });
                return INVALID;
              }
              return {
                status: "valid",
                value: input.data
              };
            }
          }]);
        }(ZodType);
        ZodNaN.create = function (params) {
          return new ZodNaN(_objectSpread({
            typeName: ZodFirstPartyTypeKind.ZodNaN
          }, processCreateParams(params)));
        };
        var BRAND = Symbol("zod_brand");
        var ZodBranded = /*#__PURE__*/function (_ZodType34) {
          function ZodBranded() {
            _classCallCheck(this, ZodBranded);
            return _callSuper(this, ZodBranded, arguments);
          }
          _inherits(ZodBranded, _ZodType34);
          return _createClass(ZodBranded, [{
            key: "_parse",
            value: function _parse(input) {
              var _this$_processInputPa16 = this._processInputParams(input),
                ctx = _this$_processInputPa16.ctx;
              var data = ctx.data;
              return this._def.type._parse({
                data: data,
                path: ctx.path,
                parent: ctx
              });
            }
          }, {
            key: "unwrap",
            value: function unwrap() {
              return this._def.type;
            }
          }]);
        }(ZodType);
        var ZodPipeline = /*#__PURE__*/function (_ZodType35) {
          function ZodPipeline() {
            _classCallCheck(this, ZodPipeline);
            return _callSuper(this, ZodPipeline, arguments);
          }
          _inherits(ZodPipeline, _ZodType35);
          return _createClass(ZodPipeline, [{
            key: "_parse",
            value: function _parse(input) {
              var _this24 = this;
              var _this$_processInputPa17 = this._processInputParams(input),
                status = _this$_processInputPa17.status,
                ctx = _this$_processInputPa17.ctx;
              if (ctx.common.async) {
                var handleAsync = /*#__PURE__*/function () {
                  var _ref28 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
                    var inResult;
                    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                      while (1) switch (_context9.prev = _context9.next) {
                        case 0:
                          _context9.next = 2;
                          return _this24._def.in._parseAsync({
                            data: ctx.data,
                            path: ctx.path,
                            parent: ctx
                          });
                        case 2:
                          inResult = _context9.sent;
                          if (!(inResult.status === "aborted")) {
                            _context9.next = 5;
                            break;
                          }
                          return _context9.abrupt("return", INVALID);
                        case 5:
                          if (!(inResult.status === "dirty")) {
                            _context9.next = 10;
                            break;
                          }
                          status.dirty();
                          return _context9.abrupt("return", DIRTY(inResult.value));
                        case 10:
                          return _context9.abrupt("return", _this24._def.out._parseAsync({
                            data: inResult.value,
                            path: ctx.path,
                            parent: ctx
                          }));
                        case 11:
                        case "end":
                          return _context9.stop();
                      }
                    }, _callee9);
                  }));
                  return function handleAsync() {
                    return _ref28.apply(this, arguments);
                  };
                }();
                return handleAsync();
              } else {
                var inResult = this._def.in._parseSync({
                  data: ctx.data,
                  path: ctx.path,
                  parent: ctx
                });
                if (inResult.status === "aborted") return INVALID;
                if (inResult.status === "dirty") {
                  status.dirty();
                  return {
                    status: "dirty",
                    value: inResult.value
                  };
                } else {
                  return this._def.out._parseSync({
                    data: inResult.value,
                    path: ctx.path,
                    parent: ctx
                  });
                }
              }
            }
          }], [{
            key: "create",
            value: function create(a, b) {
              return new ZodPipeline({
                in: a,
                out: b,
                typeName: ZodFirstPartyTypeKind.ZodPipeline
              });
            }
          }]);
        }(ZodType);
        var ZodReadonly = /*#__PURE__*/function (_ZodType36) {
          function ZodReadonly() {
            _classCallCheck(this, ZodReadonly);
            return _callSuper(this, ZodReadonly, arguments);
          }
          _inherits(ZodReadonly, _ZodType36);
          return _createClass(ZodReadonly, [{
            key: "_parse",
            value: function _parse(input) {
              var result = this._def.innerType._parse(input);
              var freeze = function freeze(data) {
                if (isValid(data)) {
                  data.value = Object.freeze(data.value);
                }
                return data;
              };
              return isAsync(result) ? result.then(function (data) {
                return freeze(data);
              }) : freeze(result);
            }
          }, {
            key: "unwrap",
            value: function unwrap() {
              return this._def.innerType;
            }
          }]);
        }(ZodType);
        ZodReadonly.create = function (type, params) {
          return new ZodReadonly(_objectSpread({
            innerType: type,
            typeName: ZodFirstPartyTypeKind.ZodReadonly
          }, processCreateParams(params)));
        };
        function custom(check) {
          var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var
          /**
           * @deprecated
           *
           * Pass `fatal` into the params object instead:
           *
           * ```ts
           * z.string().custom((val) => val.length > 5, { fatal: false })
           * ```
           *
           */
          fatal = arguments.length > 2 ? arguments[2] : undefined;
          if (check) return ZodAny.create().superRefine(function (data, ctx) {
            var _a, _b;
            if (!check(data)) {
              var _p2 = typeof params === "function" ? params(data) : typeof params === "string" ? {
                message: params
              } : params;
              var _fatal = (_b = (_a = _p2.fatal) !== null && _a !== void 0 ? _a : fatal) !== null && _b !== void 0 ? _b : true;
              var p2 = typeof _p2 === "string" ? {
                message: _p2
              } : _p2;
              ctx.addIssue(_objectSpread(_objectSpread({
                code: "custom"
              }, p2), {}, {
                fatal: _fatal
              }));
            }
          });
          return ZodAny.create();
        }
        var late = {
          object: ZodObject.lazycreate
        };
        var ZodFirstPartyTypeKind;
        (function (ZodFirstPartyTypeKind) {
          ZodFirstPartyTypeKind["ZodString"] = "ZodString";
          ZodFirstPartyTypeKind["ZodNumber"] = "ZodNumber";
          ZodFirstPartyTypeKind["ZodNaN"] = "ZodNaN";
          ZodFirstPartyTypeKind["ZodBigInt"] = "ZodBigInt";
          ZodFirstPartyTypeKind["ZodBoolean"] = "ZodBoolean";
          ZodFirstPartyTypeKind["ZodDate"] = "ZodDate";
          ZodFirstPartyTypeKind["ZodSymbol"] = "ZodSymbol";
          ZodFirstPartyTypeKind["ZodUndefined"] = "ZodUndefined";
          ZodFirstPartyTypeKind["ZodNull"] = "ZodNull";
          ZodFirstPartyTypeKind["ZodAny"] = "ZodAny";
          ZodFirstPartyTypeKind["ZodUnknown"] = "ZodUnknown";
          ZodFirstPartyTypeKind["ZodNever"] = "ZodNever";
          ZodFirstPartyTypeKind["ZodVoid"] = "ZodVoid";
          ZodFirstPartyTypeKind["ZodArray"] = "ZodArray";
          ZodFirstPartyTypeKind["ZodObject"] = "ZodObject";
          ZodFirstPartyTypeKind["ZodUnion"] = "ZodUnion";
          ZodFirstPartyTypeKind["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
          ZodFirstPartyTypeKind["ZodIntersection"] = "ZodIntersection";
          ZodFirstPartyTypeKind["ZodTuple"] = "ZodTuple";
          ZodFirstPartyTypeKind["ZodRecord"] = "ZodRecord";
          ZodFirstPartyTypeKind["ZodMap"] = "ZodMap";
          ZodFirstPartyTypeKind["ZodSet"] = "ZodSet";
          ZodFirstPartyTypeKind["ZodFunction"] = "ZodFunction";
          ZodFirstPartyTypeKind["ZodLazy"] = "ZodLazy";
          ZodFirstPartyTypeKind["ZodLiteral"] = "ZodLiteral";
          ZodFirstPartyTypeKind["ZodEnum"] = "ZodEnum";
          ZodFirstPartyTypeKind["ZodEffects"] = "ZodEffects";
          ZodFirstPartyTypeKind["ZodNativeEnum"] = "ZodNativeEnum";
          ZodFirstPartyTypeKind["ZodOptional"] = "ZodOptional";
          ZodFirstPartyTypeKind["ZodNullable"] = "ZodNullable";
          ZodFirstPartyTypeKind["ZodDefault"] = "ZodDefault";
          ZodFirstPartyTypeKind["ZodCatch"] = "ZodCatch";
          ZodFirstPartyTypeKind["ZodPromise"] = "ZodPromise";
          ZodFirstPartyTypeKind["ZodBranded"] = "ZodBranded";
          ZodFirstPartyTypeKind["ZodPipeline"] = "ZodPipeline";
          ZodFirstPartyTypeKind["ZodReadonly"] = "ZodReadonly";
        })(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
        var instanceOfType = function instanceOfType(
        // const instanceOfType = <T extends new (...args: any[]) => any>(
        cls) {
          var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
            message: "Input not instance of ".concat(cls.name)
          };
          return custom(function (data) {
            return data instanceof cls;
          }, params);
        };
        var stringType = ZodString.create;
        var numberType = ZodNumber.create;
        var nanType = ZodNaN.create;
        var bigIntType = ZodBigInt.create;
        var booleanType = ZodBoolean.create;
        var dateType = ZodDate.create;
        var symbolType = ZodSymbol.create;
        var undefinedType = ZodUndefined.create;
        var nullType = ZodNull.create;
        var anyType = ZodAny.create;
        var unknownType = ZodUnknown.create;
        var neverType = ZodNever.create;
        var voidType = ZodVoid.create;
        var arrayType = ZodArray.create;
        var objectType = ZodObject.create;
        var strictObjectType = ZodObject.strictCreate;
        var unionType = ZodUnion.create;
        var discriminatedUnionType = ZodDiscriminatedUnion.create;
        var intersectionType = ZodIntersection.create;
        var tupleType = ZodTuple.create;
        var recordType = ZodRecord.create;
        var mapType = ZodMap.create;
        var setType = ZodSet.create;
        var functionType = ZodFunction.create;
        var lazyType = ZodLazy.create;
        var literalType = ZodLiteral.create;
        var enumType = ZodEnum.create;
        var nativeEnumType = ZodNativeEnum.create;
        var promiseType = ZodPromise.create;
        var effectsType = ZodEffects.create;
        var optionalType = ZodOptional.create;
        var nullableType = ZodNullable.create;
        var preprocessType = ZodEffects.createWithPreprocess;
        var pipelineType = ZodPipeline.create;
        var ostring = function ostring() {
          return stringType().optional();
        };
        var onumber = function onumber() {
          return numberType().optional();
        };
        var oboolean = function oboolean() {
          return booleanType().optional();
        };
        var coerce = {
          string: function string(arg) {
            return ZodString.create(_objectSpread(_objectSpread({}, arg), {}, {
              coerce: true
            }));
          },
          number: function number(arg) {
            return ZodNumber.create(_objectSpread(_objectSpread({}, arg), {}, {
              coerce: true
            }));
          },
          boolean: function boolean(arg) {
            return ZodBoolean.create(_objectSpread(_objectSpread({}, arg), {}, {
              coerce: true
            }));
          },
          bigint: function bigint(arg) {
            return ZodBigInt.create(_objectSpread(_objectSpread({}, arg), {}, {
              coerce: true
            }));
          },
          date: function date(arg) {
            return ZodDate.create(_objectSpread(_objectSpread({}, arg), {}, {
              coerce: true
            }));
          }
        };
        var NEVER = INVALID;
        var z = /*#__PURE__*/Object.freeze({
          __proto__: null,
          defaultErrorMap: errorMap,
          setErrorMap: setErrorMap,
          getErrorMap: getErrorMap,
          makeIssue: makeIssue,
          EMPTY_PATH: EMPTY_PATH,
          addIssueToContext: addIssueToContext,
          ParseStatus: ParseStatus,
          INVALID: INVALID,
          DIRTY: DIRTY,
          OK: OK,
          isAborted: isAborted,
          isDirty: isDirty,
          isValid: isValid,
          isAsync: isAsync,
          get util() {
            return util;
          },
          get objectUtil() {
            return objectUtil;
          },
          ZodParsedType: ZodParsedType,
          getParsedType: getParsedType,
          ZodType: ZodType,
          datetimeRegex: datetimeRegex,
          ZodString: ZodString,
          ZodNumber: ZodNumber,
          ZodBigInt: ZodBigInt,
          ZodBoolean: ZodBoolean,
          ZodDate: ZodDate,
          ZodSymbol: ZodSymbol,
          ZodUndefined: ZodUndefined,
          ZodNull: ZodNull,
          ZodAny: ZodAny,
          ZodUnknown: ZodUnknown,
          ZodNever: ZodNever,
          ZodVoid: ZodVoid,
          ZodArray: ZodArray,
          ZodObject: ZodObject,
          ZodUnion: ZodUnion,
          ZodDiscriminatedUnion: ZodDiscriminatedUnion,
          ZodIntersection: ZodIntersection,
          ZodTuple: ZodTuple,
          ZodRecord: ZodRecord,
          ZodMap: ZodMap,
          ZodSet: ZodSet,
          ZodFunction: ZodFunction,
          ZodLazy: ZodLazy,
          ZodLiteral: ZodLiteral,
          ZodEnum: ZodEnum,
          ZodNativeEnum: ZodNativeEnum,
          ZodPromise: ZodPromise,
          ZodEffects: ZodEffects,
          ZodTransformer: ZodEffects,
          ZodOptional: ZodOptional,
          ZodNullable: ZodNullable,
          ZodDefault: ZodDefault,
          ZodCatch: ZodCatch,
          ZodNaN: ZodNaN,
          BRAND: BRAND,
          ZodBranded: ZodBranded,
          ZodPipeline: ZodPipeline,
          ZodReadonly: ZodReadonly,
          custom: custom,
          Schema: ZodType,
          ZodSchema: ZodType,
          late: late,
          get ZodFirstPartyTypeKind() {
            return ZodFirstPartyTypeKind;
          },
          coerce: coerce,
          any: anyType,
          array: arrayType,
          bigint: bigIntType,
          boolean: booleanType,
          date: dateType,
          discriminatedUnion: discriminatedUnionType,
          effect: effectsType,
          'enum': enumType,
          'function': functionType,
          'instanceof': instanceOfType,
          intersection: intersectionType,
          lazy: lazyType,
          literal: literalType,
          map: mapType,
          nan: nanType,
          nativeEnum: nativeEnumType,
          never: neverType,
          'null': nullType,
          nullable: nullableType,
          number: numberType,
          object: objectType,
          oboolean: oboolean,
          onumber: onumber,
          optional: optionalType,
          ostring: ostring,
          pipeline: pipelineType,
          preprocess: preprocessType,
          promise: promiseType,
          record: recordType,
          set: setType,
          strictObject: strictObjectType,
          string: stringType,
          symbol: symbolType,
          transformer: effectsType,
          tuple: tupleType,
          'undefined': undefinedType,
          union: unionType,
          unknown: unknownType,
          'void': voidType,
          NEVER: NEVER,
          ZodIssueCode: ZodIssueCode,
          quotelessJson: quotelessJson,
          ZodError: ZodError
        });
        var _hoisted_1$1 = {
          class: "w-full h-auto"
        };
        var _hoisted_2$1 = ["onClick"];
        var _sfc_main$1 = /* @__PURE__ */defineComponent({
          __name: "PatternSetting",
          props: {
            rowCount: {
              type: Number,
              default: 17
            },
            cardColor: {
              type: String,
              default: "#fff"
            },
            patternColor: {
              type: String,
              default: "#000"
            },
            patternList: {
              type: Array,
              default: function _default() {
                return [];
              }
            }
          },
          setup: function setup(__props) {
            var props = __props;
            var data = computed(function () {
              return props;
            });
            function updatePatternList(event, item) {
              if (data.value.patternList.includes(item)) {
                var index = data.value.patternList.indexOf(item);
                data.value.patternList.splice(index, 1);
              } else {
                data.value.patternList.push(item);
              }
            }
            return function (_ctx, _cache) {
              return openBlock(), createElementBlock("div", _hoisted_1$1, [createBaseVNode("ul", {
                class: "pattern-list",
                style: normalizeStyle({
                  gridTemplateColumns: "repeat(".concat(data.value.rowCount, ",1fr)")
                })
              }, [(openBlock(true), createElementBlock(Fragment, null, renderList(data.value.rowCount * 7, function (item) {
                return openBlock(), createElementBlock("li", {
                  key: item,
                  class: "w-5 h-5",
                  style: normalizeStyle({
                    backgroundColor: data.value.patternList.includes(item) ? data.value.patternColor : data.value.cardColor
                  }),
                  onClick: withModifiers(function (event) {
                    return updatePatternList(event, item);
                  }, ["stop"])
                }, null, 12, _hoisted_2$1);
              }), 128))], 4)]);
            };
          }
        });

        /* unplugin-vue-components disabled */

        var PatternSetting = /* @__PURE__ */_export_sfc(_sfc_main$1, [["__scopeId", "data-v-5b2b02ea"]]);
        var _hoisted_1 = {
          class: "modal-box"
        };
        var _hoisted_2 = {
          class: "text-lg font-bold"
        };
        var _hoisted_3 = {
          class: "py-4"
        };
        var _hoisted_4 = {
          class: "modal-action"
        };
        var _hoisted_5 = {
          method: "dialog",
          class: "flex gap-3"
        };
        var _hoisted_6 = {
          class: "mb-8"
        };
        var _hoisted_7 = {
          class: "flex flex-row items-center w-full gap-24 mb-10 form-control"
        };
        var _hoisted_8 = {
          class: ""
        };
        var _hoisted_9 = {
          class: "label"
        };
        var _hoisted_10 = {
          class: "label-text"
        };
        var _hoisted_11 = ["placeholder"];
        var _hoisted_12 = {
          class: "flex flex-row items-center w-full gap-24 mb-10 form-control"
        };
        var _hoisted_13 = {
          class: ""
        };
        var _hoisted_14 = {
          class: "label"
        };
        var _hoisted_15 = {
          class: "label-text"
        };
        var _hoisted_16 = {
          class: "help"
        };
        var _hoisted_17 = {
          key: 0,
          class: "text-sm text-red-400 help-text"
        };
        var _hoisted_18 = ["data-tip"];
        var _hoisted_19 = ["disabled"];
        var _hoisted_20 = {
          class: "loading loading-ring loading-md"
        };
        var _hoisted_21 = {
          class: "w-full max-w-xs form-control"
        };
        var _hoisted_22 = {
          class: "label"
        };
        var _hoisted_23 = {
          class: "label-text"
        };
        var _hoisted_24 = {
          disabled: "",
          selected: ""
        };
        var _hoisted_25 = ["value"];
        var _hoisted_26 = {
          class: "w-full max-w-xs form-control"
        };
        var _hoisted_27 = {
          class: "label"
        };
        var _hoisted_28 = {
          class: "label-text"
        };
        var _hoisted_29 = {
          disabled: "",
          selected: ""
        };
        var _hoisted_30 = ["value"];
        var _hoisted_31 = {
          class: "w-full max-w-xs form-control"
        };
        var _hoisted_32 = {
          class: "label"
        };
        var _hoisted_33 = {
          class: "label-text"
        };
        var _hoisted_34 = {
          disabled: "",
          selected: ""
        };
        var _hoisted_35 = ["value"];
        var _hoisted_36 = {
          class: "w-full max-w-xs form-control"
        };
        var _hoisted_37 = {
          class: "label"
        };
        var _hoisted_38 = {
          class: "label-text"
        };
        var _hoisted_39 = {
          class: "w-full max-w-xs form-control"
        };
        var _hoisted_40 = {
          class: "label"
        };
        var _hoisted_41 = {
          class: "label-text"
        };
        var _hoisted_42 = {
          class: "w-full max-w-xs form-control"
        };
        var _hoisted_43 = {
          class: "label"
        };
        var _hoisted_44 = {
          class: "label-text"
        };
        var _hoisted_45 = {
          class: "flex flex-row w-full max-w-xs gap-10 mb-10 form-control"
        };
        var _hoisted_46 = {
          class: "label"
        };
        var _hoisted_47 = {
          class: "label-text"
        };
        var _hoisted_48 = {
          class: "label"
        };
        var _hoisted_49 = {
          class: "label-text"
        };
        var _hoisted_50 = {
          class: "w-full max-w-xs mb-10 form-control"
        };
        var _hoisted_51 = {
          class: "label"
        };
        var _hoisted_52 = {
          class: "label-text"
        };
        var _hoisted_53 = {
          class: "w-full max-w-xs form-control"
        };
        var _hoisted_54 = {
          class: "label"
        };
        var _hoisted_55 = {
          class: "label-text"
        };
        var _hoisted_56 = {
          class: "flex flex-row items-center w-full gap-24 mb-0 form-control"
        };
        var _hoisted_57 = {
          class: "label"
        };
        var _hoisted_58 = {
          class: "label-text"
        };
        var _hoisted_59 = {
          class: "h-auto"
        };
        var _hoisted_60 = {
          class: "flex w-full h-24 gap-3 m-0"
        };
        var _hoisted_61 = ["data-tip"];
        var _hoisted_62 = {
          class: "w-full max-w-xs mb-10 form-control"
        };
        var _hoisted_63 = {
          class: "label"
        };
        var _hoisted_64 = {
          class: "label-text"
        };
        var _hoisted_65 = ["checked"];
        var _hoisted_66 = {
          class: "w-full max-w-xs mb-10 form-control"
        };
        var _hoisted_67 = {
          class: "label"
        };
        var _hoisted_68 = {
          class: "label-text"
        };
        var _hoisted_69 = ["checked"];
        var _sfc_main = exports("default", /* @__PURE__ */defineComponent({
          __name: "FaceConfig",
          setup: function setup(__props) {
            var _useI18n = useI18n(),
              t = _useI18n.t;
            var globalConfig = useStore().globalConfig;
            var personConfig = useStore().personConfig;
            var prizeConfig = useStore().prizeConfig;
            var _storeToRefs = storeToRefs(globalConfig),
              topTitle = _storeToRefs.getTopTitle,
              localTheme = _storeToRefs.getTheme,
              patternColor = _storeToRefs.getPatterColor,
              patternList = _storeToRefs.getPatternList,
              cardColor = _storeToRefs.getCardColor,
              luckyCardColor = _storeToRefs.getLuckyColor,
              textColor = _storeToRefs.getTextColor,
              cardSize = _storeToRefs.getCardSize,
              textSize = _storeToRefs.getTextSize,
              rowCount = _storeToRefs.getRowCount,
              isShowPrizeList = _storeToRefs.getIsShowPrizeList,
              userLanguage = _storeToRefs.getLanguage,
              backgroundImage = _storeToRefs.getBackground,
              imageList = _storeToRefs.getImageList,
              isShowAvatar = _storeToRefs.getIsShowAvatar;
            var _storeToRefs2 = storeToRefs(personConfig),
              alreadyPersonList = _storeToRefs2.getAlreadyPersonList,
              notPersonList = _storeToRefs2.getNotPersonList;
            var colorPickerRef = ref();
            var resetDataDialogRef = ref();
            var isRowCountChange = ref(0);
            var themeValue = ref(localTheme.value.name);
            var topTitleValue = ref(structuredClone(topTitle.value));
            var cardColorValue = ref(structuredClone(cardColor.value));
            var luckyCardColorValue = ref(structuredClone(luckyCardColor.value));
            var textColorValue = ref(structuredClone(textColor.value));
            var cardSizeValue = ref(structuredClone(cardSize.value));
            var textSizeValue = ref(structuredClone(textSize.value));
            var rowCountValue = ref(structuredClone(rowCount.value));
            var languageValue = ref(structuredClone(userLanguage.value));
            var isShowPrizeListValue = ref(structuredClone(isShowPrizeList.value));
            var isShowAvatarValue = ref(structuredClone(isShowAvatar.value));
            var patternColorValue = ref(structuredClone(patternColor.value));
            var themeList = ref(Object.keys(daisyuiThemes));
            var daisyuiThemeList = ref(daisyuiThemes);
            var backgroundImageValue = ref(backgroundImage.value);
            var formData = ref({
              rowCount: rowCountValue
            });
            var formErr = ref({
              rowCount: ""
            });
            var schema = z.object({
              rowCount: z.number({
                required_error: i18n.global.t("error.require"),
                invalid_type_error: i18n.global.t("error.requireNumber")
              }).min(1, i18n.global.t("error.minNumber1")).max(100, i18n.global.t("error.maxNumber100"))
              // 格式化
            });
            var payload = {
              rowCount: formData.value.rowCount
            };
            function parseSchema(props) {
              return schema.parseAsync(props);
            }
            function resetPersonLayout() {
              isRowCountChange.value = 2;
              setTimeout(function () {
                var alreadyLen = alreadyPersonList.value.length;
                var notLen = notPersonList.value.length;
                if (alreadyLen <= 0 && notLen <= 0) {
                  return;
                }
                var allPersonList = alreadyPersonList.value.concat(notPersonList.value);
                var newAlreadyPersonList = allPersonList.slice(0, alreadyLen);
                var newNotPersonList = allPersonList.slice(alreadyLen, notLen + alreadyLen);
                personConfig.deleteAllPerson();
                personConfig.addNotPersonList(newNotPersonList);
                personConfig.addAlreadyPersonList(newAlreadyPersonList, null);
                isRowCountChange.value = 0;
              }, 1e3);
            }
            function clearPattern() {
              globalConfig.setPatternList([]);
            }
            function resetPattern() {
              globalConfig.resetPatternList();
            }
            function resetData() {
              globalConfig.reset();
              personConfig.reset();
              prizeConfig.resetDefault();
              localStorage.removeItem("globalConfig");
              localStorage.removeItem("personConfig");
              localStorage.removeItem("prizeConfig");
              window.location.reload();
            }
            watch(function () {
              return formData.value.rowCount;
            }, function () {
              payload.rowCount = formData.value.rowCount;
              parseSchema(payload).then(function (res) {
                if (res.rowCount) {
                  isRowCountChange.value = 1;
                  globalConfig.setRowCount(res.rowCount);
                }
              }).catch(function (err) {
                formErr.value.rowCount = err.issues[0].message;
              });
            });
            watch(topTitleValue, function (val) {
              globalConfig.setTopTitle(val);
            });
            watch(themeValue, function (val) {
              var selectedThemeDetail = daisyuiThemeList.value[val];
              globalConfig.setTheme({
                name: val,
                detail: selectedThemeDetail
              });
              themeChange(val);
              if (selectedThemeDetail.primary && (isHex(selectedThemeDetail.primary) || isRgbOrRgba(selectedThemeDetail.primary))) {
                globalConfig.setCardColor(selectedThemeDetail.primary);
              }
            }, {
              deep: true
            });
            watch(cardColorValue, function (val) {
              globalConfig.setCardColor(val);
            }, {
              deep: true
            });
            watch(luckyCardColorValue, function (val) {
              globalConfig.setLuckyCardColor(val);
            }, {
              deep: true
            });
            watch(patternColorValue, function (val) {
              globalConfig.setPatterColor(val);
            });
            watch(textColorValue, function (val) {
              globalConfig.setTextColor(val);
            }, {
              deep: true
            });
            watch(cardSizeValue, function (val) {
              globalConfig.setCardSize(val);
            }, {
              deep: true
            });
            watch(isShowPrizeListValue, function () {
              globalConfig.setIsShowPrizeList(isShowPrizeListValue.value);
            });
            watch(backgroundImageValue, function (val) {
              globalConfig.setBackground(val);
            });
            watch(languageValue, function (val) {
              globalConfig.setLanguage(val);
            });
            watch(isShowAvatarValue, function () {
              globalConfig.setIsShowAvatar(isShowAvatarValue.value);
            });
            onMounted(function () {});
            return function (_ctx, _cache) {
              return openBlock(), createElementBlock(Fragment, null, [createBaseVNode("dialog", {
                id: "my_modal_1",
                ref_key: "resetDataDialogRef",
                ref: resetDataDialogRef,
                class: "border-none modal"
              }, [createBaseVNode("div", _hoisted_1, [createBaseVNode("h3", _hoisted_2, toDisplayString(unref(t)("dialog.titleTip")), 1), createBaseVNode("p", _hoisted_3, toDisplayString(unref(t)("dialog.dialogResetAllData")), 1), createBaseVNode("div", _hoisted_4, [createBaseVNode("form", _hoisted_5, [createBaseVNode("button", {
                class: "btn",
                onClick: _cache[0] || (_cache[0] = function ($event) {
                  return resetDataDialogRef.value.close();
                })
              }, toDisplayString(unref(t)("button.cancel")), 1), createBaseVNode("button", {
                class: "btn",
                onClick: resetData
              }, toDisplayString(unref(t)("button.confirm")), 1)])])])], 512), createBaseVNode("div", null, [createBaseVNode("h2", null, toDisplayString(unref(t)("viewTitle.globalSetting")), 1), createBaseVNode("div", _hoisted_6, [createBaseVNode("button", {
                class: "btn btn-sm btn-primary",
                onClick: _cache[1] || (_cache[1] = function ($event) {
                  return resetDataDialogRef.value.showModal();
                })
              }, toDisplayString(unref(t)("button.resetAllData")), 1)]), createBaseVNode("label", _hoisted_7, [createBaseVNode("div", _hoisted_8, [createBaseVNode("div", _hoisted_9, [createBaseVNode("span", _hoisted_10, toDisplayString(unref(t)("table.title")), 1)]), withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                  return topTitleValue.value = $event;
                }),
                type: "text",
                placeholder: unref(t)("placeHolder.enterTitle"),
                class: "w-full max-w-xs input input-bordered"
              }, null, 8, _hoisted_11), [[vModelText, topTitleValue.value]])])]), createBaseVNode("label", _hoisted_12, [createBaseVNode("div", _hoisted_13, [createBaseVNode("div", _hoisted_14, [createBaseVNode("span", _hoisted_15, toDisplayString(unref(t)("table.columnNumber")), 1)]), withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
                  return formData.value.rowCount = $event;
                }),
                type: "number",
                placeholder: "Type here",
                class: "w-full max-w-xs input input-bordered"
              }, null, 512), [[vModelText, formData.value.rowCount]]), createBaseVNode("div", _hoisted_16, [formErr.value.rowCount ? (openBlock(), createElementBlock("span", _hoisted_17, toDisplayString(formErr.value.rowCount), 1)) : createCommentVNode("", true)])]), createBaseVNode("div", null, [createBaseVNode("div", {
                class: "tooltip",
                "data-tip": unref(t)("tooltip.resetLayout")
              }, [createBaseVNode("button", {
                class: "mt-5 btn btn-info btn-sm",
                disabled: isRowCountChange.value !== 1,
                onClick: resetPersonLayout
              }, [createBaseVNode("span", null, toDisplayString(unref(t)("button.setLayout")), 1), withDirectives(createBaseVNode("span", _hoisted_20, null, 512), [[vShow, isRowCountChange.value === 2]])], 8, _hoisted_19)], 8, _hoisted_18)])]), createBaseVNode("label", _hoisted_21, [createBaseVNode("div", _hoisted_22, [createBaseVNode("span", _hoisted_23, toDisplayString(unref(t)("table.language")), 1)]), withDirectives(createBaseVNode("select", {
                "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
                  return languageValue.value = $event;
                }),
                "data-choose-theme": "",
                class: "w-full max-w-xs border-solid select border-1"
              }, [createBaseVNode("option", _hoisted_24, toDisplayString(unref(t)("table.language")), 1), (openBlock(true), createElementBlock(Fragment, null, renderList(unref(languageList), function (item) {
                return openBlock(), createElementBlock("option", {
                  key: item.key,
                  value: item.key
                }, toDisplayString(item.name), 9, _hoisted_25);
              }), 128))], 512), [[vModelSelect, languageValue.value]])]), createBaseVNode("label", _hoisted_26, [createBaseVNode("div", _hoisted_27, [createBaseVNode("span", _hoisted_28, toDisplayString(unref(t)("table.theme")), 1)]), withDirectives(createBaseVNode("select", {
                "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
                  return themeValue.value = $event;
                }),
                "data-choose-theme": "",
                class: "w-full max-w-xs border-solid select border-1"
              }, [createBaseVNode("option", _hoisted_29, toDisplayString(unref(t)("table.theme")), 1), (openBlock(true), createElementBlock(Fragment, null, renderList(themeList.value, function (item, index) {
                return openBlock(), createElementBlock("option", {
                  key: index,
                  value: item
                }, toDisplayString(item), 9, _hoisted_30);
              }), 128))], 512), [[vModelSelect, themeValue.value]])]), createBaseVNode("label", _hoisted_31, [createBaseVNode("div", _hoisted_32, [createBaseVNode("span", _hoisted_33, toDisplayString(unref(t)("table.backgroundImage")), 1)]), withDirectives(createBaseVNode("select", {
                "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
                  return backgroundImageValue.value = $event;
                }),
                "data-choose-theme": "",
                class: "w-full max-w-xs border-solid select border-1"
              }, [createBaseVNode("option", _hoisted_34, toDisplayString(unref(t)("table.backgroundImage")), 1), (openBlock(true), createElementBlock(Fragment, null, renderList([{
                name: "❌",
                url: "",
                id: ""
              }].concat(_toConsumableArray(unref(imageList))), function (item, index) {
                return openBlock(), createElementBlock("option", {
                  key: index,
                  value: item
                }, toDisplayString(item.name), 9, _hoisted_35);
              }), 128))], 512), [[vModelSelect, backgroundImageValue.value]])]), createBaseVNode("label", _hoisted_36, [createBaseVNode("div", _hoisted_37, [createBaseVNode("span", _hoisted_38, toDisplayString(unref(t)("table.cardColor")), 1)]), createVNode(unref(re), {
                ref_key: "colorPickerRef",
                ref: colorPickerRef,
                modelValue: cardColorValue.value,
                "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
                  return cardColorValue.value = $event;
                }),
                "pure-color": cardColorValue.value,
                "onUpdate:pureColor": _cache[8] || (_cache[8] = function ($event) {
                  return cardColorValue.value = $event;
                })
              }, null, 8, ["modelValue", "pure-color"])]), createBaseVNode("label", _hoisted_39, [createBaseVNode("div", _hoisted_40, [createBaseVNode("span", _hoisted_41, toDisplayString(unref(t)("table.winnerColor")), 1)]), createVNode(unref(re), {
                ref_key: "colorPickerRef",
                ref: colorPickerRef,
                modelValue: luckyCardColorValue.value,
                "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
                  return luckyCardColorValue.value = $event;
                }),
                "pure-color": luckyCardColorValue.value,
                "onUpdate:pureColor": _cache[10] || (_cache[10] = function ($event) {
                  return luckyCardColorValue.value = $event;
                })
              }, null, 8, ["modelValue", "pure-color"])]), createBaseVNode("label", _hoisted_42, [createBaseVNode("div", _hoisted_43, [createBaseVNode("span", _hoisted_44, toDisplayString(unref(t)("table.textColor")), 1)]), createVNode(unref(re), {
                ref_key: "colorPickerRef",
                ref: colorPickerRef,
                modelValue: textColorValue.value,
                "onUpdate:modelValue": _cache[11] || (_cache[11] = function ($event) {
                  return textColorValue.value = $event;
                }),
                "pure-color": textColorValue.value,
                "onUpdate:pureColor": _cache[12] || (_cache[12] = function ($event) {
                  return textColorValue.value = $event;
                })
              }, null, 8, ["modelValue", "pure-color"])]), createBaseVNode("label", _hoisted_45, [createBaseVNode("div", null, [createBaseVNode("div", _hoisted_46, [createBaseVNode("span", _hoisted_47, toDisplayString(unref(t)("table.cardWidth")), 1)]), withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[13] || (_cache[13] = function ($event) {
                  return cardSizeValue.value.width = $event;
                }),
                type: "number",
                placeholder: "Type here",
                class: "w-full max-w-xs input input-bordered"
              }, null, 512), [[vModelText, cardSizeValue.value.width]])]), createBaseVNode("div", null, [createBaseVNode("div", _hoisted_48, [createBaseVNode("span", _hoisted_49, toDisplayString(unref(t)("table.cardHeight")), 1)]), withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[14] || (_cache[14] = function ($event) {
                  return cardSizeValue.value.height = $event;
                }),
                type: "number",
                placeholder: "Type here",
                class: "w-full max-w-xs input input-bordered"
              }, null, 512), [[vModelText, cardSizeValue.value.height]])])]), createBaseVNode("label", _hoisted_50, [createBaseVNode("div", _hoisted_51, [createBaseVNode("span", _hoisted_52, toDisplayString(unref(t)("table.textSize")), 1)]), withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[15] || (_cache[15] = function ($event) {
                  return textSizeValue.value = $event;
                }),
                type: "number",
                placeholder: "Type here",
                class: "w-full max-w-xs input input-bordered"
              }, null, 512), [[vModelText, textSizeValue.value]])]), createBaseVNode("label", _hoisted_53, [createBaseVNode("div", _hoisted_54, [createBaseVNode("span", _hoisted_55, toDisplayString(unref(t)("table.highlightColor")), 1)]), createVNode(unref(re), {
                ref_key: "colorPickerRef",
                ref: colorPickerRef,
                modelValue: patternColorValue.value,
                "onUpdate:modelValue": _cache[16] || (_cache[16] = function ($event) {
                  return patternColorValue.value = $event;
                }),
                "pure-color": patternColorValue.value,
                "onUpdate:pureColor": _cache[17] || (_cache[17] = function ($event) {
                  return patternColorValue.value = $event;
                })
              }, null, 8, ["modelValue", "pure-color"])]), createBaseVNode("label", _hoisted_56, [createBaseVNode("div", null, [createBaseVNode("div", _hoisted_57, [createBaseVNode("span", _hoisted_58, toDisplayString(unref(t)("table.patternSetting")), 1)]), createBaseVNode("div", _hoisted_59, [createVNode(PatternSetting, {
                "row-count": unref(rowCount),
                "card-color": unref(cardColor),
                "pattern-color": unref(patternColor),
                "pattern-list": unref(patternList)
              }, null, 8, ["row-count", "card-color", "pattern-color", "pattern-list"])])])]), createBaseVNode("div", _hoisted_60, [createBaseVNode("button", {
                class: "mt-5 btn btn-info btn-sm",
                onClick: withModifiers(clearPattern, ["stop"])
              }, [createBaseVNode("span", null, toDisplayString(unref(t)("button.clearPattern")), 1)]), createBaseVNode("div", {
                class: "tooltip",
                "data-tip": unref(t)("tooltip.defaultLayout")
              }, [createBaseVNode("button", {
                class: "mt-5 btn btn-info btn-sm",
                onClick: resetPattern
              }, [createBaseVNode("span", null, toDisplayString(unref(t)("button.DefaultPattern")), 1)])], 8, _hoisted_61)]), createBaseVNode("label", _hoisted_62, [createBaseVNode("div", _hoisted_63, [createBaseVNode("span", _hoisted_64, toDisplayString(unref(t)("table.alwaysDisplay")), 1)]), createBaseVNode("input", {
                type: "checkbox",
                checked: isShowPrizeListValue.value,
                class: "mt-2 border-solid checkbox checkbox-secondary border-1",
                onChange: _cache[18] || (_cache[18] = function ($event) {
                  return isShowPrizeListValue.value = !isShowPrizeListValue.value;
                })
              }, null, 40, _hoisted_65)]), createBaseVNode("label", _hoisted_66, [createBaseVNode("div", _hoisted_67, [createBaseVNode("span", _hoisted_68, toDisplayString(unref(t)("table.avatarDisplay")), 1)]), createBaseVNode("input", {
                type: "checkbox",
                checked: isShowAvatarValue.value,
                class: "mt-2 border-solid checkbox checkbox-secondary border-1",
                onChange: _cache[19] || (_cache[19] = function ($event) {
                  return isShowAvatarValue.value = !isShowAvatarValue.value;
                })
              }, null, 40, _hoisted_69)])])], 64);
            };
          }
        }));
      }
    };
  });
})();
