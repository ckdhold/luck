;
(function () {
  System.register(['./index-legacy-BMrJCZb9.js'], function (exports, module) {
    'use strict';

    var _export_sfc, createElementBlock, createBaseVNode, openBlock;
    return {
      setters: [function (module) {
        _export_sfc = module.k;
        createElementBlock = module.c;
        createBaseVNode = module.a;
        openBlock = module.o;
      }],
      execute: function execute() {
        /* unplugin-vue-components disabled */var _sfc_main = {};
        function _sfc_render(_ctx, _cache) {
          return openBlock(), createElementBlock("div", null, _cache[0] || (_cache[0] = [createBaseVNode("button", {
            class: "btn btn-error"
          }, " 打印 ", -1)]));
        }
        var index = exports("default", /*#__PURE__*/_export_sfc(_sfc_main, [['render', _sfc_render]]));
      }
    };
  });
})();
