import { d as defineComponent, m as useI18n, C as localforage, p as useStore, s as storeToRefs, r as ref, v as onMounted, D as watch, o as openBlock, c as createElementBlock, a as createBaseVNode, t as toDisplayString, j as unref, F as Fragment, b as renderList, e as createVNode, E as _sfc_main$1, q as i18n, B as normalizeClass, x as withDirectives, G as vModelText, H as vModelSelect, z as createCommentVNode, n as normalizeStyle, _ as __unplugin_components_0 } from "./index-DasOlK5F.js";
const _hoisted_1 = { class: "flex w-full gap-3 mb-6" };
const _hoisted_2 = { class: "p-0 m-0" };
const _hoisted_3 = { class: "max-w-xs mb-10 form-control" };
const _hoisted_4 = { class: "flex flex-col items-center gap-2 pt-5" };
const _hoisted_5 = { class: "w-1/2 max-w-xs mb-10 form-control" };
const _hoisted_6 = { class: "label" };
const _hoisted_7 = { class: "label-text" };
const _hoisted_8 = ["onUpdate:modelValue", "placeholder"];
const _hoisted_9 = { class: "w-1/2 max-w-xs mb-10 form-control" };
const _hoisted_10 = { class: "label" };
const _hoisted_11 = { class: "label-text" };
const _hoisted_12 = ["checked", "onChange"];
const _hoisted_13 = { class: "w-1/2 max-w-xs mb-10 form-control" };
const _hoisted_14 = { class: "label" };
const _hoisted_15 = { class: "label-text" };
const _hoisted_16 = ["onUpdate:modelValue", "placeholder", "onChange"];
const _hoisted_17 = ["data-tip"];
const _hoisted_18 = ["value", "max"];
const _hoisted_19 = { class: "w-1/2 max-w-xs mb-10 form-control" };
const _hoisted_20 = { class: "label" };
const _hoisted_21 = { class: "label-text" };
const _hoisted_22 = ["checked", "onChange"];
const _hoisted_23 = { class: "w-full max-w-xs mb-10 form-control" };
const _hoisted_24 = { class: "label" };
const _hoisted_25 = { class: "label-text" };
const _hoisted_26 = ["onUpdate:modelValue"];
const _hoisted_27 = {
  key: 0,
  value: { id: "", name: "", url: "" }
};
const _hoisted_28 = {
  disabled: "",
  selected: ""
};
const _hoisted_29 = ["value"];
const _hoisted_30 = {
  key: 0,
  class: "w-full max-w-xs mb-10 form-control"
};
const _hoisted_31 = { class: "label" };
const _hoisted_32 = { class: "label-text" };
const _hoisted_33 = ["onClick"];
const _hoisted_34 = {
  key: 0,
  class: "flex flex-wrap w-full h-full gap-1 p-0 pt-1 m-0 cursor-pointer"
};
const _hoisted_35 = ["data-tip"];
const _hoisted_36 = {
  key: 1,
  class: "btn btn-secondary btn-xs"
};
const _hoisted_37 = { class: "w-full max-w-xs mb-10 form-control" };
const _hoisted_38 = { class: "label" };
const _hoisted_39 = { class: "label-text" };
const _hoisted_40 = { class: "flex gap-2" };
const _hoisted_41 = ["onClick"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PrizeConfig",
  setup(__props) {
    const { t } = useI18n();
    const imageDbStore = localforage.createInstance({
      name: "imgStore"
    });
    const prizeConfig = useStore().prizeConfig;
    const globalConfig = useStore().globalConfig;
    const { getPrizeConfig: localPrizeList, getCurrentPrize: currentPrize } = storeToRefs(prizeConfig);
    const { getImageList: localImageList } = storeToRefs(globalConfig);
    const prizeList = ref(localPrizeList);
    const imgList = ref([]);
    const selectedPrize = ref();
    function addPrize() {
      const defaultPrizeCOnfig = {
        id: (/* @__PURE__ */ new Date()).getTime().toString(),
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
        countList: [
          {
            id: "0",
            count: item.count,
            isUsedCount: 0
          }
        ]
      };
    }
    function changePrizeStatus(item) {
      item.isUsed ? item.isUsedCount = 0 : item.isUsedCount = item.count;
      item.separateCount.countList = [];
      item.isUsed = !item.isUsed;
    }
    function changePrizePerson(item) {
      let indexPrize = -1;
      for (let i = 0; i < prizeList.value.length; i++) {
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
    async function getImageDbStore() {
      const keys = await imageDbStore.keys();
      if (keys.length > 0) {
        imageDbStore.iterate((value, key) => {
          imgList.value.push({
            key,
            value
          });
        });
      }
    }
    function sort(item, isUp) {
      const itemIndex = prizeList.value.indexOf(item);
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
    async function delAll() {
      await prizeConfig.deleteAllPrizeConfig();
    }
    onMounted(() => {
      getImageDbStore();
    });
    watch(() => prizeList.value, (val) => {
      prizeConfig.setPrizeConfig(val);
    }, { deep: true });
    return (_ctx, _cache) => {
      var _a, _b;
      const _component_svg_icon = __unplugin_components_0;
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("h2", null, toDisplayString(unref(t)("viewTitle.prizeManagement")), 1),
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("button", {
            class: "btn btn-info btn-sm",
            onClick: addPrize
          }, toDisplayString(unref(t)("button.add")), 1),
          createBaseVNode("button", {
            class: "btn btn-info btn-sm",
            onClick: resetDefault
          }, toDisplayString(unref(t)("button.resetDefault")), 1),
          createBaseVNode("button", {
            class: "btn btn-error btn-sm",
            onClick: delAll
          }, toDisplayString(unref(t)("button.allDelete")), 1)
        ]),
        createBaseVNode("ul", _hoisted_2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(prizeList.value, (item) => {
            return openBlock(), createElementBlock("li", {
              key: item.id,
              class: normalizeClass(["flex gap-10", unref(currentPrize).id === item.id ? "border-1 border-dotted rounded-xl" : null])
            }, [
              createBaseVNode("label", _hoisted_3, [
                createBaseVNode("div", _hoisted_4, [
                  createVNode(_component_svg_icon, {
                    class: normalizeClass(["cursor-pointer hover:text-blue-400", prizeList.value.indexOf(item) === 0 ? "opacity-0 cursor-default" : ""]),
                    name: "up",
                    onClick: ($event) => sort(item, 1)
                  }, null, 8, ["class", "onClick"]),
                  createVNode(_component_svg_icon, {
                    class: normalizeClass(["cursor-pointer hover:text-blue-400", prizeList.value.indexOf(item) === prizeList.value.length - 1 ? "opacity-0 cursor-default" : ""]),
                    name: "down",
                    onClick: ($event) => sort(item, 0)
                  }, null, 8, ["class", "onClick"])
                ])
              ]),
              createBaseVNode("label", _hoisted_5, [
                createBaseVNode("div", _hoisted_6, [
                  createBaseVNode("span", _hoisted_7, toDisplayString(unref(t)("table.prizeName")), 1)
                ]),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": ($event) => item.name = $event,
                  type: "text",
                  placeholder: unref(t)("placeHolder.name"),
                  class: "w-full max-w-xs input-sm input input-bordered"
                }, null, 8, _hoisted_8), [
                  [vModelText, item.name]
                ])
              ]),
              createBaseVNode("label", _hoisted_9, [
                createBaseVNode("div", _hoisted_10, [
                  createBaseVNode("span", _hoisted_11, toDisplayString(unref(t)("table.fullParticipation")), 1)
                ]),
                createBaseVNode("input", {
                  type: "checkbox",
                  checked: item.isAll,
                  class: "mt-2 border-solid checkbox checkbox-secondary border-1",
                  onChange: ($event) => item.isAll = !item.isAll
                }, null, 40, _hoisted_12)
              ]),
              createBaseVNode("label", _hoisted_13, [
                createBaseVNode("div", _hoisted_14, [
                  createBaseVNode("span", _hoisted_15, toDisplayString(unref(t)("table.numberParticipants")), 1)
                ]),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": ($event) => item.count = $event,
                  type: "number",
                  placeholder: unref(t)("placeHolder.winnerCount"),
                  class: "w-full max-w-xs p-0 m-0 input-sm input input-bordered",
                  onChange: ($event) => changePrizePerson(item)
                }, null, 40, _hoisted_16), [
                  [vModelText, item.count]
                ]),
                createBaseVNode("div", {
                  class: "tooltip tooltip-bottom",
                  "data-tip": "".concat(unref(t)("table.isDone") + item.isUsedCount, "/").concat(item.count)
                }, [
                  createBaseVNode("progress", {
                    class: "w-full progress",
                    value: item.isUsedCount,
                    max: item.count
                  }, null, 8, _hoisted_18)
                ], 8, _hoisted_17)
              ]),
              createBaseVNode("label", _hoisted_19, [
                createBaseVNode("div", _hoisted_20, [
                  createBaseVNode("span", _hoisted_21, toDisplayString(unref(t)("table.isDone")), 1)
                ]),
                createBaseVNode("input", {
                  type: "checkbox",
                  checked: item.isUsed,
                  class: "mt-2 border-solid checkbox checkbox-secondary border-1",
                  onChange: ($event) => changePrizeStatus(item)
                }, null, 40, _hoisted_22)
              ]),
              createBaseVNode("label", _hoisted_23, [
                createBaseVNode("div", _hoisted_24, [
                  createBaseVNode("span", _hoisted_25, toDisplayString(unref(t)("table.image")), 1)
                ]),
                withDirectives(createBaseVNode("select", {
                  "onUpdate:modelValue": ($event) => item.picture = $event,
                  class: "w-full max-w-xs select select-warning select-sm"
                }, [
                  item.picture.id ? (openBlock(), createElementBlock("option", _hoisted_27, "❌")) : createCommentVNode("", true),
                  createBaseVNode("option", _hoisted_28, toDisplayString(unref(t)("table.selectPicture")), 1),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(localImageList), (picItem) => {
                    return openBlock(), createElementBlock("option", {
                      key: picItem.id,
                      value: picItem
                    }, toDisplayString(picItem.name), 9, _hoisted_29);
                  }), 128))
                ], 8, _hoisted_26), [
                  [vModelSelect, item.picture]
                ])
              ]),
              item.separateCount ? (openBlock(), createElementBlock("label", _hoisted_30, [
                createBaseVNode("div", _hoisted_31, [
                  createBaseVNode("span", _hoisted_32, toDisplayString(unref(t)("table.onceNumber")), 1)
                ]),
                createBaseVNode("div", {
                  class: "flex justify-start w-full h-full",
                  onClick: ($event) => selectPrize(item)
                }, [
                  item.separateCount.countList.length ? (openBlock(), createElementBlock("ul", _hoisted_34, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(item.separateCount.countList, (se) => {
                      return openBlock(), createElementBlock("li", {
                        key: se.id,
                        class: "relative flex items-center justify-center w-8 h-8 bg-slate-600/60 separated"
                      }, [
                        createBaseVNode("div", {
                          class: "flex items-center justify-center w-full h-full tooltip",
                          "data-tip": "".concat(unref(t)("tooltip.doneCount") + se.isUsedCount, "/").concat(se.count)
                        }, [
                          createBaseVNode("div", {
                            class: "absolute left-0 z-50 h-full bg-blue-300/80",
                            style: normalizeStyle("width:".concat(se.isUsedCount * 100 / se.count, "%"))
                          }, null, 4),
                          createBaseVNode("span", null, toDisplayString(se.count), 1)
                        ], 8, _hoisted_35)
                      ]);
                    }), 128))
                  ])) : (openBlock(), createElementBlock("button", _hoisted_36, toDisplayString(unref(t)("button.setting")), 1))
                ], 8, _hoisted_33)
              ])) : createCommentVNode("", true),
              createBaseVNode("label", _hoisted_37, [
                createBaseVNode("div", _hoisted_38, [
                  createBaseVNode("span", _hoisted_39, toDisplayString(unref(t)("table.operation")), 1)
                ]),
                createBaseVNode("div", _hoisted_40, [
                  createBaseVNode("button", {
                    class: "btn btn-error btn-sm",
                    onClick: ($event) => delItem(item)
                  }, toDisplayString(unref(t)("button.delete")), 9, _hoisted_41)
                ])
              ])
            ], 2);
          }), 128))
        ]),
        createVNode(_sfc_main$1, {
          "total-number": (_a = selectedPrize.value) == null ? void 0 : _a.count,
          "separated-number": (_b = selectedPrize.value) == null ? void 0 : _b.separateCount.countList,
          onSubmitData: submitData
        }, null, 8, ["total-number", "separated-number"])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
