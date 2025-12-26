;
(function () {
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
  function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
  function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
  System.register(['./index-legacy-BMrJCZb9.js'], function (exports, module) {
    'use strict';

    var defineComponent, useI18n, localforage, useStore, storeToRefs, ref, onMounted, watch, openBlock, createElementBlock, createBaseVNode, toDisplayString, unref, Fragment, renderList, createVNode, _sfc_main$1, i18n, normalizeClass, withDirectives, vModelText, vModelSelect, createCommentVNode, normalizeStyle, __unplugin_components_0;
    return {
      setters: [function (module) {
        defineComponent = module.d;
        useI18n = module.m;
        localforage = module.C;
        useStore = module.p;
        storeToRefs = module.s;
        ref = module.r;
        onMounted = module.v;
        watch = module.D;
        openBlock = module.o;
        createElementBlock = module.c;
        createBaseVNode = module.a;
        toDisplayString = module.t;
        unref = module.j;
        Fragment = module.F;
        renderList = module.b;
        createVNode = module.e;
        _sfc_main$1 = module.E;
        i18n = module.q;
        normalizeClass = module.B;
        withDirectives = module.x;
        vModelText = module.G;
        vModelSelect = module.H;
        createCommentVNode = module.z;
        normalizeStyle = module.n;
        __unplugin_components_0 = module._;
      }],
      execute: function execute() {
        var _hoisted_1 = {
          class: "flex w-full gap-3 mb-6"
        };
        var _hoisted_2 = {
          class: "p-0 m-0"
        };
        var _hoisted_3 = {
          class: "max-w-xs mb-10 form-control"
        };
        var _hoisted_4 = {
          class: "flex flex-col items-center gap-2 pt-5"
        };
        var _hoisted_5 = {
          class: "w-1/2 max-w-xs mb-10 form-control"
        };
        var _hoisted_6 = {
          class: "label"
        };
        var _hoisted_7 = {
          class: "label-text"
        };
        var _hoisted_8 = ["onUpdate:modelValue", "placeholder"];
        var _hoisted_9 = {
          class: "w-1/2 max-w-xs mb-10 form-control"
        };
        var _hoisted_10 = {
          class: "label"
        };
        var _hoisted_11 = {
          class: "label-text"
        };
        var _hoisted_12 = ["checked", "onChange"];
        var _hoisted_13 = {
          class: "w-1/2 max-w-xs mb-10 form-control"
        };
        var _hoisted_14 = {
          class: "label"
        };
        var _hoisted_15 = {
          class: "label-text"
        };
        var _hoisted_16 = ["onUpdate:modelValue", "placeholder", "onChange"];
        var _hoisted_17 = ["data-tip"];
        var _hoisted_18 = ["value", "max"];
        var _hoisted_19 = {
          class: "w-1/2 max-w-xs mb-10 form-control"
        };
        var _hoisted_20 = {
          class: "label"
        };
        var _hoisted_21 = {
          class: "label-text"
        };
        var _hoisted_22 = ["checked", "onChange"];
        var _hoisted_23 = {
          class: "w-full max-w-xs mb-10 form-control"
        };
        var _hoisted_24 = {
          class: "label"
        };
        var _hoisted_25 = {
          class: "label-text"
        };
        var _hoisted_26 = ["onUpdate:modelValue"];
        var _hoisted_27 = {
          key: 0,
          value: {
            id: "",
            name: "",
            url: ""
          }
        };
        var _hoisted_28 = {
          disabled: "",
          selected: ""
        };
        var _hoisted_29 = ["value"];
        var _hoisted_30 = {
          key: 0,
          class: "w-full max-w-xs mb-10 form-control"
        };
        var _hoisted_31 = {
          class: "label"
        };
        var _hoisted_32 = {
          class: "label-text"
        };
        var _hoisted_33 = ["onClick"];
        var _hoisted_34 = {
          key: 0,
          class: "flex flex-wrap w-full h-full gap-1 p-0 pt-1 m-0 cursor-pointer"
        };
        var _hoisted_35 = ["data-tip"];
        var _hoisted_36 = {
          key: 1,
          class: "btn btn-secondary btn-xs"
        };
        var _hoisted_37 = {
          class: "w-full max-w-xs mb-10 form-control"
        };
        var _hoisted_38 = {
          class: "label"
        };
        var _hoisted_39 = {
          class: "label-text"
        };
        var _hoisted_40 = {
          class: "flex gap-2"
        };
        var _hoisted_41 = ["onClick"];
        var _sfc_main = exports("default", /* @__PURE__ */defineComponent({
          __name: "PrizeConfig",
          setup: function setup(__props) {
            var _useI18n = useI18n(),
              t = _useI18n.t;
            var imageDbStore = localforage.createInstance({
              name: "imgStore"
            });
            var prizeConfig = useStore().prizeConfig;
            var globalConfig = useStore().globalConfig;
            var _storeToRefs = storeToRefs(prizeConfig),
              localPrizeList = _storeToRefs.getPrizeConfig,
              currentPrize = _storeToRefs.getCurrentPrize;
            var _storeToRefs2 = storeToRefs(globalConfig),
              localImageList = _storeToRefs2.getImageList;
            var prizeList = ref(localPrizeList);
            var imgList = ref([]);
            var selectedPrize = ref();
            function addPrize() {
              var defaultPrizeCOnfig = {
                id: (/* @__PURE__ */new Date()).getTime().toString(),
                name: i18n.global.t("data.prizeName"),
                sort: 0,
                isAll: false,
                count: 1,
                isUsedCount: 0,
                picture: {
                  id: "",
                  name: "",
                  url: ""
                },
                separateCount: {
                  enable: false,
                  countList: []
                },
                desc: "",
                isUsed: false,
                isShow: true,
                frequency: 1
              };
              prizeConfig.addPrizeConfig(defaultPrizeCOnfig);
            }
            function selectPrize(item) {
              selectedPrize.value = item;
              selectedPrize.value.isUsedCount = 0;
              selectedPrize.value.isUsed = false;
              if (selectedPrize.value.separateCount.countList.length > 1) {
                return;
              }
              selectedPrize.value.separateCount = {
                enable: true,
                countList: [{
                  id: "0",
                  count: item.count,
                  isUsedCount: 0
                }]
              };
            }
            function changePrizeStatus(item) {
              item.isUsed ? item.isUsedCount = 0 : item.isUsedCount = item.count;
              item.separateCount.countList = [];
              item.isUsed = !item.isUsed;
            }
            function changePrizePerson(item) {
              var indexPrize = -1;
              for (var i = 0; i < prizeList.value.length; i++) {
                if (prizeList.value[i].id === item.id) {
                  indexPrize = i;
                  break;
                }
              }
              if (indexPrize > -1) {
                prizeList.value[indexPrize].separateCount.countList = [];
                prizeList.value[indexPrize].isUsed ? prizeList.value[indexPrize].isUsedCount = prizeList.value[indexPrize].count : prizeList.value[indexPrize].isUsedCount = 0;
              }
            }
            function submitData(value) {
              selectedPrize.value.separateCount.countList = value;
              selectedPrize.value = null;
            }
            function resetDefault() {
              prizeConfig.resetDefault();
            }
            function getImageDbStore() {
              return _getImageDbStore.apply(this, arguments);
            }
            function _getImageDbStore() {
              _getImageDbStore = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                var keys;
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return imageDbStore.keys();
                    case 2:
                      keys = _context.sent;
                      if (keys.length > 0) {
                        imageDbStore.iterate(function (value, key) {
                          imgList.value.push({
                            key: key,
                            value: value
                          });
                        });
                      }
                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }, _callee);
              }));
              return _getImageDbStore.apply(this, arguments);
            }
            function sort(item, isUp) {
              var itemIndex = prizeList.value.indexOf(item);
              if (isUp === 1) {
                prizeList.value.splice(itemIndex, 1);
                prizeList.value.splice(itemIndex - 1, 0, item);
              } else {
                prizeList.value.splice(itemIndex, 1);
                prizeList.value.splice(itemIndex + 1, 0, item);
              }
            }
            function delItem(item) {
              prizeConfig.deletePrizeConfig(item.id);
            }
            function delAll() {
              return _delAll.apply(this, arguments);
            }
            function _delAll() {
              _delAll = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return prizeConfig.deleteAllPrizeConfig();
                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }, _callee2);
              }));
              return _delAll.apply(this, arguments);
            }
            onMounted(function () {
              getImageDbStore();
            });
            watch(function () {
              return prizeList.value;
            }, function (val) {
              prizeConfig.setPrizeConfig(val);
            }, {
              deep: true
            });
            return function (_ctx, _cache) {
              var _selectedPrize$value, _selectedPrize$value2;
              var _component_svg_icon = __unplugin_components_0;
              return openBlock(), createElementBlock("div", null, [createBaseVNode("h2", null, toDisplayString(unref(t)("viewTitle.prizeManagement")), 1), createBaseVNode("div", _hoisted_1, [createBaseVNode("button", {
                class: "btn btn-info btn-sm",
                onClick: addPrize
              }, toDisplayString(unref(t)("button.add")), 1), createBaseVNode("button", {
                class: "btn btn-info btn-sm",
                onClick: resetDefault
              }, toDisplayString(unref(t)("button.resetDefault")), 1), createBaseVNode("button", {
                class: "btn btn-error btn-sm",
                onClick: delAll
              }, toDisplayString(unref(t)("button.allDelete")), 1)]), createBaseVNode("ul", _hoisted_2, [(openBlock(true), createElementBlock(Fragment, null, renderList(prizeList.value, function (item) {
                return openBlock(), createElementBlock("li", {
                  key: item.id,
                  class: normalizeClass(["flex gap-10", unref(currentPrize).id === item.id ? "border-1 border-dotted rounded-xl" : null])
                }, [createBaseVNode("label", _hoisted_3, [createBaseVNode("div", _hoisted_4, [createVNode(_component_svg_icon, {
                  class: normalizeClass(["cursor-pointer hover:text-blue-400", prizeList.value.indexOf(item) === 0 ? "opacity-0 cursor-default" : ""]),
                  name: "up",
                  onClick: function onClick($event) {
                    return sort(item, 1);
                  }
                }, null, 8, ["class", "onClick"]), createVNode(_component_svg_icon, {
                  class: normalizeClass(["cursor-pointer hover:text-blue-400", prizeList.value.indexOf(item) === prizeList.value.length - 1 ? "opacity-0 cursor-default" : ""]),
                  name: "down",
                  onClick: function onClick($event) {
                    return sort(item, 0);
                  }
                }, null, 8, ["class", "onClick"])])]), createBaseVNode("label", _hoisted_5, [createBaseVNode("div", _hoisted_6, [createBaseVNode("span", _hoisted_7, toDisplayString(unref(t)("table.prizeName")), 1)]), withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": function onUpdateModelValue($event) {
                    return item.name = $event;
                  },
                  type: "text",
                  placeholder: unref(t)("placeHolder.name"),
                  class: "w-full max-w-xs input-sm input input-bordered"
                }, null, 8, _hoisted_8), [[vModelText, item.name]])]), createBaseVNode("label", _hoisted_9, [createBaseVNode("div", _hoisted_10, [createBaseVNode("span", _hoisted_11, toDisplayString(unref(t)("table.fullParticipation")), 1)]), createBaseVNode("input", {
                  type: "checkbox",
                  checked: item.isAll,
                  class: "mt-2 border-solid checkbox checkbox-secondary border-1",
                  onChange: function onChange($event) {
                    return item.isAll = !item.isAll;
                  }
                }, null, 40, _hoisted_12)]), createBaseVNode("label", _hoisted_13, [createBaseVNode("div", _hoisted_14, [createBaseVNode("span", _hoisted_15, toDisplayString(unref(t)("table.numberParticipants")), 1)]), withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": function onUpdateModelValue($event) {
                    return item.count = $event;
                  },
                  type: "number",
                  placeholder: unref(t)("placeHolder.winnerCount"),
                  class: "w-full max-w-xs p-0 m-0 input-sm input input-bordered",
                  onChange: function onChange($event) {
                    return changePrizePerson(item);
                  }
                }, null, 40, _hoisted_16), [[vModelText, item.count]]), createBaseVNode("div", {
                  class: "tooltip tooltip-bottom",
                  "data-tip": "".concat(unref(t)("table.isDone") + item.isUsedCount, "/").concat(item.count)
                }, [createBaseVNode("progress", {
                  class: "w-full progress",
                  value: item.isUsedCount,
                  max: item.count
                }, null, 8, _hoisted_18)], 8, _hoisted_17)]), createBaseVNode("label", _hoisted_19, [createBaseVNode("div", _hoisted_20, [createBaseVNode("span", _hoisted_21, toDisplayString(unref(t)("table.isDone")), 1)]), createBaseVNode("input", {
                  type: "checkbox",
                  checked: item.isUsed,
                  class: "mt-2 border-solid checkbox checkbox-secondary border-1",
                  onChange: function onChange($event) {
                    return changePrizeStatus(item);
                  }
                }, null, 40, _hoisted_22)]), createBaseVNode("label", _hoisted_23, [createBaseVNode("div", _hoisted_24, [createBaseVNode("span", _hoisted_25, toDisplayString(unref(t)("table.image")), 1)]), withDirectives(createBaseVNode("select", {
                  "onUpdate:modelValue": function onUpdateModelValue($event) {
                    return item.picture = $event;
                  },
                  class: "w-full max-w-xs select select-warning select-sm"
                }, [item.picture.id ? (openBlock(), createElementBlock("option", _hoisted_27, "❌")) : createCommentVNode("", true), createBaseVNode("option", _hoisted_28, toDisplayString(unref(t)("table.selectPicture")), 1), (openBlock(true), createElementBlock(Fragment, null, renderList(unref(localImageList), function (picItem) {
                  return openBlock(), createElementBlock("option", {
                    key: picItem.id,
                    value: picItem
                  }, toDisplayString(picItem.name), 9, _hoisted_29);
                }), 128))], 8, _hoisted_26), [[vModelSelect, item.picture]])]), item.separateCount ? (openBlock(), createElementBlock("label", _hoisted_30, [createBaseVNode("div", _hoisted_31, [createBaseVNode("span", _hoisted_32, toDisplayString(unref(t)("table.onceNumber")), 1)]), createBaseVNode("div", {
                  class: "flex justify-start w-full h-full",
                  onClick: function onClick($event) {
                    return selectPrize(item);
                  }
                }, [item.separateCount.countList.length ? (openBlock(), createElementBlock("ul", _hoisted_34, [(openBlock(true), createElementBlock(Fragment, null, renderList(item.separateCount.countList, function (se) {
                  return openBlock(), createElementBlock("li", {
                    key: se.id,
                    class: "relative flex items-center justify-center w-8 h-8 bg-slate-600/60 separated"
                  }, [createBaseVNode("div", {
                    class: "flex items-center justify-center w-full h-full tooltip",
                    "data-tip": "".concat(unref(t)("tooltip.doneCount") + se.isUsedCount, "/").concat(se.count)
                  }, [createBaseVNode("div", {
                    class: "absolute left-0 z-50 h-full bg-blue-300/80",
                    style: normalizeStyle("width:".concat(se.isUsedCount * 100 / se.count, "%"))
                  }, null, 4), createBaseVNode("span", null, toDisplayString(se.count), 1)], 8, _hoisted_35)]);
                }), 128))])) : (openBlock(), createElementBlock("button", _hoisted_36, toDisplayString(unref(t)("button.setting")), 1))], 8, _hoisted_33)])) : createCommentVNode("", true), createBaseVNode("label", _hoisted_37, [createBaseVNode("div", _hoisted_38, [createBaseVNode("span", _hoisted_39, toDisplayString(unref(t)("table.operation")), 1)]), createBaseVNode("div", _hoisted_40, [createBaseVNode("button", {
                  class: "btn btn-error btn-sm",
                  onClick: function onClick($event) {
                    return delItem(item);
                  }
                }, toDisplayString(unref(t)("button.delete")), 9, _hoisted_41)])])], 2);
              }), 128))]), createVNode(_sfc_main$1, {
                "total-number": (_selectedPrize$value = selectedPrize.value) === null || _selectedPrize$value === void 0 ? void 0 : _selectedPrize$value.count,
                "separated-number": (_selectedPrize$value2 = selectedPrize.value) === null || _selectedPrize$value2 === void 0 ? void 0 : _selectedPrize$value2.separateCount.countList,
                onSubmitData: submitData
              }, null, 8, ["total-number", "separated-number"])]);
            };
          }
        }));
      }
    };
  });
})();
