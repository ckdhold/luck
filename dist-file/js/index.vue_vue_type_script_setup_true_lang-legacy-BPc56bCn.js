;
(function () {
  System.register(['./index-legacy-BMrJCZb9.js'], function (exports, module) {
    'use strict';

    var defineComponent, useI18n, computed, openBlock, createElementBlock, createBaseVNode, Fragment, renderList, toDisplayString, unref, normalizeClass;
    return {
      setters: [function (module) {
        defineComponent = module.d;
        useI18n = module.m;
        computed = module.A;
        openBlock = module.o;
        createElementBlock = module.c;
        createBaseVNode = module.a;
        Fragment = module.F;
        renderList = module.b;
        toDisplayString = module.t;
        unref = module.j;
        normalizeClass = module.B;
      }],
      execute: function execute() {
        var _hoisted_1 = {
          class: "overflow-x-auto"
        };
        var _hoisted_2 = {
          class: "table min-w-[600px]"
        };
        var _hoisted_3 = {
          key: 0
        };
        var _hoisted_4 = ["innerHTML"];
        var _hoisted_5 = {
          key: 1
        };
        var _hoisted_6 = ["onClick"];
        var _hoisted_7 = {
          key: 1
        };
        var _hoisted_8 = {
          colspan: "5",
          class: "text-center"
        };
        var _sfc_main = exports("_", /* @__PURE__ */defineComponent({
          __name: "index",
          props: {
            data: {
              type: Array,
              default: []
            },
            tableColumns: {
              type: Array,
              default: []
            }
          },
          setup: function setup(__props) {
            var props = __props;
            var _useI18n = useI18n(),
              t = _useI18n.t;
            var dataColumns = computed(function () {
              var columns = props.tableColumns.filter(function (item) {
                return !item.actions;
              });
              return columns;
            });
            var actionsColumns = computed(function () {
              var columns = props.tableColumns.filter(function (item) {
                return item.actions;
              });
              return columns;
            });
            return function (_ctx, _cache) {
              return openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("table", _hoisted_2, [createBaseVNode("thead", null, [createBaseVNode("tr", null, [_cache[0] || (_cache[0] = createBaseVNode("th", null, null, -1)), (openBlock(true), createElementBlock(Fragment, null, renderList(dataColumns.value, function (item, index) {
                return openBlock(), createElementBlock("th", {
                  key: index
                }, toDisplayString(item.label), 1);
              }), 128)), (openBlock(true), createElementBlock(Fragment, null, renderList(actionsColumns.value, function (item, index) {
                return openBlock(), createElementBlock("th", {
                  key: index
                }, toDisplayString(unref(t)("table.operation")), 1);
              }), 128)), _cache[1] || (_cache[1] = createBaseVNode("th", null, null, -1))])]), __props.data.length > 0 ? (openBlock(), createElementBlock("tbody", _hoisted_3, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.data, function (item) {
                return openBlock(), createElementBlock("tr", {
                  key: item.id,
                  class: "hover"
                }, [createBaseVNode("th", null, toDisplayString(item.id), 1), (openBlock(true), createElementBlock(Fragment, null, renderList(dataColumns.value, function (column, index) {
                  return openBlock(), createElementBlock("td", {
                    key: index
                  }, [column.formatValue ? (openBlock(), createElementBlock("span", {
                    key: 0,
                    innerHTML: column.formatValue(item)
                  }, null, 8, _hoisted_4)) : (openBlock(), createElementBlock("span", _hoisted_5, toDisplayString(item[column.props]), 1))]);
                }), 128)), (openBlock(true), createElementBlock(Fragment, null, renderList(actionsColumns.value, function (column, index) {
                  return openBlock(), createElementBlock("td", {
                    key: index,
                    class: "flex gap-2"
                  }, [(openBlock(true), createElementBlock(Fragment, null, renderList(column.actions, function (action) {
                    return openBlock(), createElementBlock("button", {
                      key: action.name,
                      class: normalizeClass(["btn btn-xs", action.type]),
                      onClick: function onClick($event) {
                        return action.onClick(item);
                      }
                    }, toDisplayString(action.label), 11, _hoisted_6);
                  }), 128))]);
                }), 128))]);
              }), 128))])) : (openBlock(), createElementBlock("tbody", _hoisted_7, [createBaseVNode("tr", null, [createBaseVNode("td", _hoisted_8, toDisplayString(unref(t)("table.noneData")), 1)])]))])]);
            };
          }
        }));
      }
    };
  });
})();
