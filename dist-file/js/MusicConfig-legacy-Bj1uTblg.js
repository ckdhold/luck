;
(function () {
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
  function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
  function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
  System.register(['./index-legacy-BMrJCZb9.js', './file-legacy-TkTjZk5x.js'], function (exports, module) {
    'use strict';

    var defineComponent, useI18n, ref, localforage, useStore, storeToRefs, onMounted, openBlock, createElementBlock, createBaseVNode, toDisplayString, unref, Fragment, renderList, readFileData;
    return {
      setters: [function (module) {
        defineComponent = module.d;
        useI18n = module.m;
        ref = module.r;
        localforage = module.C;
        useStore = module.p;
        storeToRefs = module.s;
        onMounted = module.v;
        openBlock = module.o;
        createElementBlock = module.c;
        createBaseVNode = module.a;
        toDisplayString = module.t;
        unref = module.j;
        Fragment = module.F;
        renderList = module.b;
      }, function (module) {
        readFileData = module.a;
      }],
      execute: function execute() {
        var _hoisted_1 = {
          class: "flex gap-3"
        };
        var _hoisted_2 = {
          for: "explore"
        };
        var _hoisted_3 = ["accept"];
        var _hoisted_4 = {
          class: "btn btn-primary btn-sm"
        };
        var _hoisted_5 = {
          class: "p-0"
        };
        var _hoisted_6 = {
          class: "mr-12 overflow-hidden w-72 whitespace-nowrap text-ellipsis"
        };
        var _hoisted_7 = {
          class: "flex gap-3"
        };
        var _hoisted_8 = ["onClick"];
        var _hoisted_9 = ["onClick"];
        var _sfc_main = exports("default", /* @__PURE__ */defineComponent({
          __name: "MusicConfig",
          setup: function setup(__props) {
            var _useI18n = useI18n(),
              t = _useI18n.t;
            var audioUploadToast = ref(0);
            var audioDbStore = localforage.createInstance({
              name: "audioStore"
            });
            var globalConfig = useStore().globalConfig;
            var _storeToRefs = storeToRefs(globalConfig),
              localMusicList = _storeToRefs.getMusicList;
            var limitType = ref("audio/*");
            var localMusicListValue = ref(localMusicList);
            function play(_x) {
              return _play.apply(this, arguments);
            }
            function _play() {
              _play = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(item) {
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      globalConfig.setCurrentMusic(item, false);
                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }, _callee);
              }));
              return _play.apply(this, arguments);
            }
            function deleteMusic(item) {
              globalConfig.removeMusic(item.id);
              audioDbStore.removeItem(item.name);
            }
            function resetMusic() {
              globalConfig.resetMusicList();
              audioDbStore.clear();
            }
            function deleteAll() {
              globalConfig.clearMusicList();
              audioDbStore.clear();
            }
            function getMusicDbStore() {
              return _getMusicDbStore.apply(this, arguments);
            }
            function _getMusicDbStore() {
              _getMusicDbStore = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                var keys;
                return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return audioDbStore.keys();
                    case 2:
                      keys = _context2.sent;
                      if (keys.length > 0) {
                        audioDbStore.iterate(function (value, key) {
                          globalConfig.addMusic({
                            id: key + (/* @__PURE__ */new Date()).getTime().toString(),
                            name: key,
                            url: "Storage"
                          });
                        });
                      }
                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }, _callee2);
              }));
              return _getMusicDbStore.apply(this, arguments);
            }
            function handleFileChange(_x2) {
              return _handleFileChange.apply(this, arguments);
            }
            function _handleFileChange() {
              _handleFileChange = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(e) {
                var isAudio, _yield$readFileData, dataUrl, fileName;
                return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                  while (1) switch (_context3.prev = _context3.next) {
                    case 0:
                      isAudio = /audio*/.test(e.target.files[0].type);
                      if (isAudio) {
                        _context3.next = 4;
                        break;
                      }
                      audioUploadToast.value = 3;
                      return _context3.abrupt("return");
                    case 4:
                      _context3.next = 6;
                      return readFileData(e.target.files[0]);
                    case 6:
                      _yield$readFileData = _context3.sent;
                      dataUrl = _yield$readFileData.dataUrl;
                      fileName = _yield$readFileData.fileName;
                      audioDbStore.setItem("".concat((/* @__PURE__ */new Date()).getTime().toString(), "+").concat(fileName), dataUrl).then(function () {
                        audioUploadToast.value = 1;
                        getMusicDbStore();
                      }).catch(function () {
                        audioUploadToast.value = 2;
                      });
                    case 10:
                    case "end":
                      return _context3.stop();
                  }
                }, _callee3);
              }));
              return _handleFileChange.apply(this, arguments);
            }
            onMounted(function () {
              getMusicDbStore();
            });
            return function (_ctx, _cache) {
              return openBlock(), createElementBlock("div", null, [createBaseVNode("div", _hoisted_1, [createBaseVNode("button", {
                class: "btn btn-primary btn-sm",
                onClick: resetMusic
              }, toDisplayString(unref(t)("button.reset")), 1), createBaseVNode("label", _hoisted_2, [createBaseVNode("input", {
                id: "explore",
                type: "file",
                class: "",
                style: {
                  "display": "none"
                },
                accept: limitType.value,
                onChange: handleFileChange
              }, null, 40, _hoisted_3), createBaseVNode("span", _hoisted_4, toDisplayString(unref(t)("button.upload")), 1)]), createBaseVNode("button", {
                class: "btn btn-error btn-sm",
                onClick: deleteAll
              }, toDisplayString(unref(t)("button.allDelete")), 1)]), createBaseVNode("div", null, [createBaseVNode("ul", _hoisted_5, [(openBlock(true), createElementBlock(Fragment, null, renderList(localMusicListValue.value, function (item) {
                return openBlock(), createElementBlock("li", {
                  key: item.id,
                  class: "flex items-center gap-6 pb-2 mb-3 divide-y"
                }, [createBaseVNode("div", _hoisted_6, [createBaseVNode("span", null, toDisplayString(item.name), 1)]), createBaseVNode("div", _hoisted_7, [createBaseVNode("button", {
                  class: "btn btn-primary btn-xs",
                  onClick: function onClick($event) {
                    return play(item);
                  }
                }, toDisplayString(unref(t)("button.play")), 9, _hoisted_8), createBaseVNode("button", {
                  class: "btn btn-error btn-xs",
                  onClick: function onClick($event) {
                    return deleteMusic(item);
                  }
                }, toDisplayString(unref(t)("button.delete")), 9, _hoisted_9)])]);
              }), 128))])])]);
            };
          }
        }));
      }
    };
  });
})();
