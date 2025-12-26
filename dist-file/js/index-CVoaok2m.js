import { d as defineComponent, r as ref, o as openBlock, c as createElementBlock, a as createBaseVNode, F as Fragment, b as renderList, e as createVNode, f as createTextVNode, u as useRouter, g as useRoute, h as configRoutes, i as resolveComponent, _ as __unplugin_components_0, t as toDisplayString, n as normalizeStyle, j as unref } from "./index-DasOlK5F.js";
const _hoisted_1 = { class: "flex min-h-[calc(100%-280px)]" };
const _hoisted_2 = { class: "w-56 m-0 mr-3 min-w-56 menu bg-base-200 pt-14" };
const _hoisted_3 = {
  key: 0,
  open: ""
};
const _hoisted_4 = {
  key: 0,
  open: ""
};
const _hoisted_5 = ["onClick"];
const _hoisted_6 = ["onClick"];
const _hoisted_7 = ["onClick"];
const _hoisted_8 = { class: "p-10 rounded footer footer-center bg-base-200 text-base-content" };
const _hoisted_9 = { class: "flex items-center justify-center gap-2" };
const _hoisted_10 = {
  href: "https://github.com/xiaolinbaba/luck",
  target: "_blank",
  rel: "noopener noreferrer",
  class: "cursor-pointer text-inherit hover:opacity-80 transition-opacity"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const router = useRouter();
    const route = useRoute();
    const menuList = ref(configRoutes.children);
    function cleanMenuList(menu) {
      const newList = menu;
      for (let i = 0; i < newList.length; i++) {
        if (newList[i].children) {
          cleanMenuList(newList[i].children);
        }
        if (!newList[i].meta) {
          newList.splice(i, 1);
          i--;
        }
      }
      return newList;
    }
    menuList.value = cleanMenuList(menuList.value);
    function skip(path) {
      router.push(path);
    }
    return (_ctx, _cache) => {
      const _component_router_view = resolveComponent("router-view");
      const _component_svg_icon = __unplugin_components_0;
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("ul", _hoisted_2, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(menuList.value, (item) => {
              return openBlock(), createElementBlock("li", {
                key: item.name
              }, [
                item.children ? (openBlock(), createElementBlock("details", _hoisted_3, [
                  createBaseVNode("summary", null, toDisplayString(item.meta.title), 1),
                  createBaseVNode("ul", null, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(item.children, (subItem) => {
                      return openBlock(), createElementBlock("li", {
                        key: subItem.name
                      }, [
                        subItem.children ? (openBlock(), createElementBlock("details", _hoisted_4, [
                          createBaseVNode("summary", null, toDisplayString(subItem.meta.title), 1),
                          createBaseVNode("ul", null, [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(subItem.children, (subSubItem) => {
                              return openBlock(), createElementBlock("li", {
                                key: subSubItem.name
                              }, [
                                createBaseVNode("a", {
                                  style: normalizeStyle(subSubItem.name === unref(route).name ? "background-color:rgba(12,12,12,0.2)" : ""),
                                  onClick: ($event) => skip(subItem.path)
                                }, toDisplayString(subSubItem.meta.title), 13, _hoisted_5)
                              ]);
                            }), 128))
                          ])
                        ])) : (openBlock(), createElementBlock("a", {
                          key: 1,
                          style: normalizeStyle(subItem.name === unref(route).name ? "background-color:rgba(12,12,12,0.2)" : ""),
                          onClick: ($event) => skip(subItem.path)
                        }, toDisplayString(subItem.meta.title), 13, _hoisted_6))
                      ]);
                    }), 128))
                  ])
                ])) : (openBlock(), createElementBlock("a", {
                  key: 1,
                  style: normalizeStyle(item.name === unref(route).name ? "background-color:rgba(12,12,12,0.2)" : ""),
                  onClick: ($event) => skip(item.path)
                }, toDisplayString(item.meta.title), 13, _hoisted_7))
              ]);
            }), 128))
          ]),
          createVNode(_component_router_view, { class: "flex-1 mt-5" })
        ]),
        createBaseVNode("footer", _hoisted_8, [
          createBaseVNode("aside", null, [
            createBaseVNode("div", _hoisted_9, [
              _cache[0] || (_cache[0] = createBaseVNode("p", { class: "p-0 m-0 text-center" }, [
                createTextVNode(" Copyright © 2025-2030. "),
                createBaseVNode("a", {
                  href: "https://thus.chat/",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  class: "text-inherit no-underline font-normal"
                }, "nabin-cn"),
                createTextVNode(". "),
                createBaseVNode("a", {
                  href: "https://jinshuju.com/f/vaSGYu",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  class: "ml-1 text-inherit no-underline font-normal"
                }, "意见反馈."),
                createBaseVNode("a", {
                  href: "https://donate.nabin.cn/",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  class: "ml-1 text-inherit no-underline font-normal"
                }, "赞赏."),
                createTextVNode(" All Rights Reserved. ")
              ], -1)),
              createBaseVNode("a", _hoisted_10, [
                createVNode(_component_svg_icon, { name: "github" })
              ])
            ])
          ])
        ])
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
