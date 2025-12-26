;
(function () {
  System.register([], function (exports, module) {
    'use strict';

    return {
      execute: function execute() {
        exports({
          a: readFileData,
          r: readFileBinary
        });
        function readFileBinary(file) {
          return new Promise(function (resolve) {
            var reader = new FileReader();
            reader.readAsBinaryString(file);
            reader.onload = function (ev) {
              resolve(ev.target.result);
            };
          });
        }
        function readFileData(file) {
          return new Promise(function (resolve) {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function (ev) {
              resolve({
                dataUrl: ev.target.result,
                fileName: file.name
              });
            };
          });
        }
      }
    };
  });
})();
