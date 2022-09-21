"use strict";
(() => {
var exports = {};
exports.id = 818;
exports.ids = [818];
exports.modules = {

/***/ 963:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _hello_)
});

;// CONCATENATED MODULE: external "slugify"
const external_slugify_namespaceObject = require("slugify");
var external_slugify_default = /*#__PURE__*/__webpack_require__.n(external_slugify_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/wish/[hello].js

/* harmony default export */ const _hello_ = ((req, res)=>{
    const crush = req.query.hello;
    const seo_title = external_slugify_default()(crush, {
        replacement: "-",
        remove: /[*+~.()'"!:@]/g,
        lower: false,
        strict: false
    });
    if (crush == "null") {
        const crushname = [
            {
                content: "Greetings",
                slug: "Greetings"
            }, 
        ];
        res.status(200).json(crushname);
    } else {
        const crushname1 = [
            {
                content: seo_title.replace(/[-]/g, " ") || "Hello World",
                slug: seo_title || "Hello World"
            }, 
        ];
        res.status(200).json(crushname1);
    }
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(963));
module.exports = __webpack_exports__;

})();