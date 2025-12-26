import { d as defineComponent, m as useI18n, A as computed, o as openBlock, c as createElementBlock, a as createBaseVNode, F as Fragment, b as renderList, t as toDisplayString, j as unref, B as normalizeClass } from "./index-DasOlK5F.js";
const _hoisted_1 = { class: "overflow-x-auto" };
const _hoisted_2 = { class: "table min-w-[600px]" };
const _hoisted_3 = { key: 0 };
const _hoisted_4 = ["innerHTML"];
const _hoisted_5 = { key: 1 };
const _hoisted_6 = ["onClick"];
const _hoisted_7 = { key: 1 };
const _hoisted_8 = {
  colspan: "5",
  class: "text-center"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
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
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    const dataColumns = computed(() => {
      const columns = props.tableColumns.filter((item) => !item.actions);
      return columns;
    });
    const actionsColumns = computed(() => {
      const columns = props.tableColumns.filter((item) => item.actions);
      return columns;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("table", _hoisted_2, [
          createBaseVNode("thead", null, [
            createBaseVNode("tr", null, [
              _cache[0] || (_cache[0] = createBaseVNode("th", null, null, -1)),
              (openBlock(true), createElementBlock(Fragment, null, renderList(dataColumns.value, (item, index) => {
                return openBlock(), createElementBlock("th", { key: index }, toDisplayString(item.label), 1);
              }), 128)),
              (openBlock(true), createElementBlock(Fragment, null, renderList(actionsColumns.value, (item, index) => {
                return openBlock(), createElementBlock("th", { key: index }, toDisplayString(unref(t)("table.operation")), 1);
              }), 128)),
              _cache[1] || (_cache[1] = createBaseVNode("th", null, null, -1))
            ])
          ]),
          __props.data.length > 0 ? (openBlock(), createElementBlock("tbody", _hoisted_3, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.data, (item) => {
              return openBlock(), createElementBlock("tr", {
                key: item.id,
                class: "hover"
              }, [
                createBaseVNode("th", null, toDisplayString(item.id), 1),
                (openBlock(true), createElementBlock(Fragment, null, renderList(dataColumns.value, (column, index) => {
                  return openBlock(), createElementBlock("td", { key: index }, [
                    column.formatValue ? (openBlock(), createElementBlock("span", {
                      key: 0,
                      innerHTML: column.formatValue(item)
                    }, null, 8, _hoisted_4)) : (openBlock(), createElementBlock("span", _hoisted_5, toDisplayString(item[column.props]), 1))
                  ]);
                }), 128)),
                (openBlock(true), createElementBlock(Fragment, null, renderList(actionsColumns.value, (column, index) => {
                  return openBlock(), createElementBlock("td", {
                    key: index,
                    class: "flex gap-2"
                  }, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(column.actions, (action) => {
                      return openBlock(), createElementBlock("button", {
                        key: action.name,
                        class: normalizeClass(["btn btn-xs", action.type]),
                        onClick: ($event) => action.onClick(item)
                      }, toDisplayString(action.label), 11, _hoisted_6);
                    }), 128))
                  ]);
                }), 128))
              ]);
            }), 128))
          ])) : (openBlock(), createElementBlock("tbody", _hoisted_7, [
            createBaseVNode("tr", null, [
              createBaseVNode("td", _hoisted_8, toDisplayString(unref(t)("table.noneData")), 1)
            ])
          ]))
        ])
      ]);
    };
  }
});
export {
  _sfc_main as _
};
