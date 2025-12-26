;
(function () {
  System.register(['./index-legacy-BMrJCZb9.js', './index.vue_vue_type_script_setup_true_lang-legacy-BPc56bCn.js'], function (exports, module) {
    'use strict';

    var defineComponent, useI18n, useStore, storeToRefs, ref, i18n, openBlock, createElementBlock, createBaseVNode, toDisplayString, unref, withDirectives, vModelCheckbox, createBlock, createCommentVNode, _sfc_main$1;
    return {
      setters: [function (module) {
        defineComponent = module.d;
        useI18n = module.m;
        useStore = module.p;
        storeToRefs = module.s;
        ref = module.r;
        i18n = module.q;
        openBlock = module.o;
        createElementBlock = module.c;
        createBaseVNode = module.a;
        toDisplayString = module.t;
        unref = module.j;
        withDirectives = module.x;
        vModelCheckbox = module.y;
        createBlock = module.l;
        createCommentVNode = module.z;
      }, function (module) {
        _sfc_main$1 = module._;
      }],
      execute: function execute() {
        var _hoisted_1 = {
          class: "overflow-y-auto"
        };
        var _hoisted_2 = {
          class: "flex items-center justify-start gap-10"
        };
        var _hoisted_3 = {
          class: "flex flex-col"
        };
        var _hoisted_4 = {
          class: "form-control"
        };
        var _hoisted_5 = {
          class: "cursor-pointer label"
        };
        var _hoisted_6 = {
          class: "label-text"
        };
        var _sfc_main = exports("default", /* @__PURE__ */defineComponent({
          __name: "PersonAlready",
          setup: function setup(__props) {
            var _useI18n = useI18n(),
              t = _useI18n.t;
            var personConfig = useStore().personConfig;
            var _storeToRefs = storeToRefs(personConfig),
              alreadyPersonList = _storeToRefs.getAlreadyPersonList,
              alreadyPersonDetail = _storeToRefs.getAlreadyPersonDetail;
            var isDetail = ref(false);
            function handleMoveNotPerson(row) {
              personConfig.moveAlreadyToNot(row);
            }
            var tableColumnsList = [{
              label: i18n.global.t("data.number"),
              props: "uid",
              sort: true
            }, {
              label: i18n.global.t("data.name"),
              props: "name"
            }, {
              label: i18n.global.t("data.avatar"),
              props: "avatar",
              formatValue: function formatValue(row) {
                return row.avatar ? "<img src=\"".concat(row.avatar, "\" alt=\"avatar\" style=\"width: 50px; height: 50px;\"/>") : "-";
              }
            }, {
              label: i18n.global.t("data.department"),
              props: "department"
            }, {
              label: i18n.global.t("data.identity"),
              props: "identity"
            }, {
              label: i18n.global.t("data.prizeName"),
              props: "prizeName",
              sort: true
            }, {
              label: i18n.global.t("data.operation"),
              actions: [{
                label: i18n.global.t("data.removePerson"),
                type: "btn-info",
                onClick: function onClick(row) {
                  handleMoveNotPerson(row);
                }
              }]
            }];
            var tableColumnsDetail = [{
              label: i18n.global.t("data.number"),
              props: "uid",
              sort: true
            }, {
              label: i18n.global.t("data.number"),
              props: "name"
            }, {
              label: i18n.global.t("data.avatar"),
              props: "avatar",
              formatValue: function formatValue(row) {
                return row.avatar ? "<img src=\"".concat(row.avatar, "\" alt=\"avatar\" style=\"width: 50px; height: 50px;\"/>") : "-";
              }
            }, {
              label: i18n.global.t("data.department"),
              props: "department"
            }, {
              label: i18n.global.t("data.identity"),
              props: "identity"
            }, {
              label: i18n.global.t("data.prizeName"),
              props: "prizeName",
              sort: true
            }, {
              label: i18n.global.t("data.prizeTime"),
              props: "prizeTime"
            }, {
              label: i18n.global.t("data.operation"),
              actions: [{
                label: i18n.global.t("data.removePerson"),
                type: "btn-info",
                onClick: function onClick(row) {
                  handleMoveNotPerson(row);
                }
              }]
            }];
            return function (_ctx, _cache) {
              return openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("h2", null, toDisplayString(unref(t)("viewTitle.winnerManagement")), 1), createBaseVNode("div", _hoisted_2, [createBaseVNode("div", null, [createBaseVNode("span", null, toDisplayString(unref(t)("table.luckyPeopleNumber")) + "：", 1), createBaseVNode("span", null, toDisplayString(unref(alreadyPersonList).length), 1)]), createBaseVNode("div", _hoisted_3, [createBaseVNode("div", _hoisted_4, [createBaseVNode("label", _hoisted_5, [createBaseVNode("span", _hoisted_6, toDisplayString(unref(t)("table.detail")) + ":", 1), withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
                  return isDetail.value = $event;
                }),
                type: "checkbox",
                class: "border-solid toggle toggle-primary border-1"
              }, null, 512), [[vModelCheckbox, isDetail.value]])])])])]), !isDetail.value ? (openBlock(), createBlock(_sfc_main$1, {
                key: 0,
                "table-columns": tableColumnsList,
                data: unref(alreadyPersonList)
              }, null, 8, ["data"])) : createCommentVNode("", true), isDetail.value ? (openBlock(), createBlock(_sfc_main$1, {
                key: 1,
                "table-columns": tableColumnsDetail,
                data: unref(alreadyPersonDetail)
              }, null, 8, ["data"])) : createCommentVNode("", true)]);
            };
          }
        }));
      }
    };
  });
})();
