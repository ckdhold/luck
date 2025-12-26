import { d as defineComponent, m as useI18n, r as ref, C as localforage, p as useStore, s as storeToRefs, v as onMounted, o as openBlock, c as createElementBlock, a as createBaseVNode, t as toDisplayString, j as unref, F as Fragment, b as renderList } from "./index-DasOlK5F.js";
import { a as readFileData } from "./file-DHO1LCeI.js";
const _hoisted_1 = { class: "flex gap-3" };
const _hoisted_2 = { for: "explore" };
const _hoisted_3 = ["accept"];
const _hoisted_4 = { class: "btn btn-primary btn-sm" };
const _hoisted_5 = { class: "p-0" };
const _hoisted_6 = { class: "mr-12 overflow-hidden w-72 whitespace-nowrap text-ellipsis" };
const _hoisted_7 = { class: "flex gap-3" };
const _hoisted_8 = ["onClick"];
const _hoisted_9 = ["onClick"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MusicConfig",
  setup(__props) {
    const { t } = useI18n();
    const audioUploadToast = ref(0);
    const audioDbStore = localforage.createInstance({
      name: "audioStore"
    });
    const globalConfig = useStore().globalConfig;
    const { getMusicList: localMusicList } = storeToRefs(globalConfig);
    const limitType = ref("audio/*");
    const localMusicListValue = ref(localMusicList);
    async function play(item) {
      globalConfig.setCurrentMusic(item, false);
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
    async function getMusicDbStore() {
      const keys = await audioDbStore.keys();
      if (keys.length > 0) {
        audioDbStore.iterate((value, key) => {
          globalConfig.addMusic({
            id: key + (/* @__PURE__ */ new Date()).getTime().toString(),
            name: key,
            url: "Storage"
          });
        });
      }
    }
    async function handleFileChange(e) {
      const isAudio = /audio*/.test(e.target.files[0].type);
      if (!isAudio) {
        audioUploadToast.value = 3;
        return;
      }
      const { dataUrl, fileName } = await readFileData(e.target.files[0]);
      audioDbStore.setItem("".concat((/* @__PURE__ */ new Date()).getTime().toString(), "+").concat(fileName), dataUrl).then(() => {
        audioUploadToast.value = 1;
        getMusicDbStore();
      }).catch(() => {
        audioUploadToast.value = 2;
      });
    }
    onMounted(() => {
      getMusicDbStore();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("button", {
            class: "btn btn-primary btn-sm",
            onClick: resetMusic
          }, toDisplayString(unref(t)("button.reset")), 1),
          createBaseVNode("label", _hoisted_2, [
            createBaseVNode("input", {
              id: "explore",
              type: "file",
              class: "",
              style: { "display": "none" },
              accept: limitType.value,
              onChange: handleFileChange
            }, null, 40, _hoisted_3),
            createBaseVNode("span", _hoisted_4, toDisplayString(unref(t)("button.upload")), 1)
          ]),
          createBaseVNode("button", {
            class: "btn btn-error btn-sm",
            onClick: deleteAll
          }, toDisplayString(unref(t)("button.allDelete")), 1)
        ]),
        createBaseVNode("div", null, [
          createBaseVNode("ul", _hoisted_5, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(localMusicListValue.value, (item) => {
              return openBlock(), createElementBlock("li", {
                key: item.id,
                class: "flex items-center gap-6 pb-2 mb-3 divide-y"
              }, [
                createBaseVNode("div", _hoisted_6, [
                  createBaseVNode("span", null, toDisplayString(item.name), 1)
                ]),
                createBaseVNode("div", _hoisted_7, [
                  createBaseVNode("button", {
                    class: "btn btn-primary btn-xs",
                    onClick: ($event) => play(item)
                  }, toDisplayString(unref(t)("button.play")), 9, _hoisted_8),
                  createBaseVNode("button", {
                    class: "btn btn-error btn-xs",
                    onClick: ($event) => deleteMusic(item)
                  }, toDisplayString(unref(t)("button.delete")), 9, _hoisted_9)
                ])
              ]);
            }), 128))
          ])
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
