import { d as defineComponent, m as useI18n, p as useStore, s as storeToRefs, r as ref, q as i18n, o as openBlock, c as createElementBlock, a as createBaseVNode, t as toDisplayString, j as unref, x as withDirectives, y as vModelCheckbox, l as createBlock, z as createCommentVNode } from "./index-DasOlK5F.js";
import { _ as _sfc_main$1 } from "./index.vue_vue_type_script_setup_true_lang-CuTBtXo8.js";
const _hoisted_1 = { class: "overflow-y-auto" };
const _hoisted_2 = { class: "flex items-center justify-start gap-10" };
const _hoisted_3 = { class: "flex flex-col" };
const _hoisted_4 = { class: "form-control" };
const _hoisted_5 = { class: "cursor-pointer label" };
const _hoisted_6 = { class: "label-text" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PersonAlready",
  setup(__props) {
    const { t } = useI18n();
    const personConfig = useStore().personConfig;
    const { getAlreadyPersonList: alreadyPersonList, getAlreadyPersonDetail: alreadyPersonDetail } = storeToRefs(personConfig);
    const isDetail = ref(false);
    function handleMoveNotPerson(row) {
      personConfig.moveAlreadyToNot(row);
    }
    const tableColumnsList = [
      {
        label: i18n.global.t("data.number"),
        props: "uid",
        sort: true
      },
      {
        label: i18n.global.t("data.name"),
        props: "name"
      },
      {
        label: i18n.global.t("data.avatar"),
        props: "avatar",
        formatValue(row) {
          return row.avatar ? '<img src="'.concat(row.avatar, '" alt="avatar" style="width: 50px; height: 50px;"/>') : "-";
        }
      },
      {
        label: i18n.global.t("data.department"),
        props: "department"
      },
      {
        label: i18n.global.t("data.identity"),
        props: "identity"
      },
      {
        label: i18n.global.t("data.prizeName"),
        props: "prizeName",
        sort: true
      },
      {
        label: i18n.global.t("data.operation"),
        actions: [
          {
            label: i18n.global.t("data.removePerson"),
            type: "btn-info",
            onClick: (row) => {
              handleMoveNotPerson(row);
            }
          }
        ]
      }
    ];
    const tableColumnsDetail = [
      {
        label: i18n.global.t("data.number"),
        props: "uid",
        sort: true
      },
      {
        label: i18n.global.t("data.number"),
        props: "name"
      },
      {
        label: i18n.global.t("data.avatar"),
        props: "avatar",
        formatValue(row) {
          return row.avatar ? '<img src="'.concat(row.avatar, '" alt="avatar" style="width: 50px; height: 50px;"/>') : "-";
        }
      },
      {
        label: i18n.global.t("data.department"),
        props: "department"
      },
      {
        label: i18n.global.t("data.identity"),
        props: "identity"
      },
      {
        label: i18n.global.t("data.prizeName"),
        props: "prizeName",
        sort: true
      },
      {
        label: i18n.global.t("data.prizeTime"),
        props: "prizeTime"
      },
      {
        label: i18n.global.t("data.operation"),
        actions: [
          {
            label: i18n.global.t("data.removePerson"),
            type: "btn-info",
            onClick: (row) => {
              handleMoveNotPerson(row);
            }
          }
        ]
      }
    ];
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("h2", null, toDisplayString(unref(t)("viewTitle.winnerManagement")), 1),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", null, [
            createBaseVNode("span", null, toDisplayString(unref(t)("table.luckyPeopleNumber")) + "：", 1),
            createBaseVNode("span", null, toDisplayString(unref(alreadyPersonList).length), 1)
          ]),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("label", _hoisted_5, [
                createBaseVNode("span", _hoisted_6, toDisplayString(unref(t)("table.detail")) + ":", 1),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isDetail.value = $event),
                  type: "checkbox",
                  class: "border-solid toggle toggle-primary border-1"
                }, null, 512), [
                  [vModelCheckbox, isDetail.value]
                ])
              ])
            ])
          ])
        ]),
        !isDetail.value ? (openBlock(), createBlock(_sfc_main$1, {
          key: 0,
          "table-columns": tableColumnsList,
          data: unref(alreadyPersonList)
        }, null, 8, ["data"])) : createCommentVNode("", true),
        isDetail.value ? (openBlock(), createBlock(_sfc_main$1, {
          key: 1,
          "table-columns": tableColumnsDetail,
          data: unref(alreadyPersonDetail)
        }, null, 8, ["data"])) : createCommentVNode("", true)
      ]);
    };
  }
});
export {
  _sfc_main as default
};
