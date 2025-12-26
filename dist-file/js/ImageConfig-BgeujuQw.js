import { d as defineComponent, m as useI18n, p as useStore, s as storeToRefs, r as ref, C as localforage, v as onMounted, D as watch, o as openBlock, c as createElementBlock, a as createBaseVNode, t as toDisplayString, j as unref, z as createCommentVNode, F as Fragment, b as renderList, e as createVNode, a7 as _sfc_main$1 } from "./index-DasOlK5F.js";
import { a as readFileData } from "./file-DHO1LCeI.js";
const _hoisted_1 = { class: "toast toast-top toast-end" };
const _hoisted_2 = {
  key: 0,
  class: "alert alert-error"
};
const _hoisted_3 = {
  key: 1,
  class: "alert alert-success"
};
const _hoisted_4 = {
  key: 2,
  class: "alert alert-error"
};
const _hoisted_5 = { class: "p-6" };
const _hoisted_6 = { class: "" };
const _hoisted_7 = { for: "explore" };
const _hoisted_8 = ["accept"];
const _hoisted_9 = { class: "btn btn-primary btn-sm" };
const _hoisted_10 = { class: "p-0" };
const _hoisted_11 = { class: "flex items-center gap-8" };
const _hoisted_12 = { class: "avatar h-14" };
const _hoisted_13 = { class: "w-12 h-12 mask mask-squircle hover:w-14 hover:h-14" };
const _hoisted_14 = { class: "w-64" };
const _hoisted_15 = { class: "overflow-hidden font-bold whitespace-nowrap text-ellipsis" };
const _hoisted_16 = ["onClick"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ImageConfig",
  setup(__props) {
    const { t } = useI18n();
    const globalConfig = useStore().globalConfig;
    const { getImageList: localImageList } = storeToRefs(globalConfig);
    const limitType = ref("image/*");
    const imgUploadToast = ref(0);
    const imageDbStore = localforage.createInstance({
      name: "imgStore"
    });
    async function handleFileChange(e) {
      const isImage = /image*/.test(e.target.files[0].type);
      if (!isImage) {
        imgUploadToast.value = 3;
        return;
      }
      const { dataUrl, fileName } = await readFileData(e.target.files[0]);
      imageDbStore.setItem("".concat((/* @__PURE__ */ new Date()).getTime().toString(), "+").concat(fileName), dataUrl).then(() => {
        imgUploadToast.value = 1;
        getImageDbStore();
      }).catch(() => {
        imgUploadToast.value = 2;
      });
    }
    async function getImageDbStore() {
      const keys = await imageDbStore.keys();
      if (keys.length > 0) {
        imageDbStore.iterate((value, key) => {
          globalConfig.addImage({
            id: key,
            name: key,
            url: "Storage"
          });
        });
      }
    }
    function removeImage(item) {
      if (item.url === "Storage") {
        imageDbStore.removeItem(item.id).then(() => {
          globalConfig.removeImage(item.id);
        });
      }
      globalConfig.removeImage(item.id);
    }
    onMounted(() => {
    });
    watch(() => imgUploadToast.value, (val) => {
      if (val !== 0) {
        setTimeout(() => {
          imgUploadToast.value = 0;
        }, 2e3);
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          imgUploadToast.value === 2 ? (openBlock(), createElementBlock("div", _hoisted_2, [
            createBaseVNode("span", null, toDisplayString(unref(t)("error.uploadFail")), 1)
          ])) : createCommentVNode("", true),
          imgUploadToast.value === 1 ? (openBlock(), createElementBlock("div", _hoisted_3, [
            createBaseVNode("span", null, toDisplayString(unref(t)("error.uploadSuccess")), 1)
          ])) : createCommentVNode("", true),
          imgUploadToast.value === 3 ? (openBlock(), createElementBlock("div", _hoisted_4, [
            createBaseVNode("span", null, toDisplayString(unref(t)("error.notImage")), 1)
          ])) : createCommentVNode("", true)
        ]),
        createBaseVNode("div", _hoisted_5, [
          createBaseVNode("div", _hoisted_6, [
            createBaseVNode("label", _hoisted_7, [
              createBaseVNode("input", {
                id: "explore",
                type: "file",
                class: "",
                style: { "display": "none" },
                accept: limitType.value,
                onChange: handleFileChange
              }, null, 40, _hoisted_8),
              createBaseVNode("span", _hoisted_9, toDisplayString(unref(t)("button.upload")), 1)
            ])
          ]),
          createBaseVNode("ul", _hoisted_10, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(localImageList), (item) => {
              return openBlock(), createElementBlock("li", {
                key: item.id,
                class: "mb-3"
              }, [
                createBaseVNode("div", _hoisted_11, [
                  createBaseVNode("div", _hoisted_12, [
                    createBaseVNode("div", _hoisted_13, [
                      createVNode(_sfc_main$1, { "img-item": item }, null, 8, ["img-item"])
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_14, [
                    createBaseVNode("div", _hoisted_15, toDisplayString(item.name), 1)
                  ]),
                  createBaseVNode("div", null, [
                    createBaseVNode("button", {
                      class: "btn btn-error btn-xs",
                      onClick: ($event) => removeImage(item)
                    }, toDisplayString(unref(t)("button.delete")), 9, _hoisted_16)
                  ])
                ])
              ]);
            }), 128))
          ])
        ])
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
