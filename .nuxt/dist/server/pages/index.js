exports.ids = [1];
exports.modules = {

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(37);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("42e37632", content, true, context)
};

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Logonetflix.31da8f7.png";

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/en.1152b7e.png";

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/en1.e496bb6.png";

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/en2.2d614de.png";

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/en3.4bc859d.png";

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_72c189b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_72c189b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_72c189b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_72c189b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_72c189b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_72c189b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(38);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(39);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, ".bg-image[data-v-72c189b4]{background-image:linear-gradient(90deg,rgba(24,14,59,.966),rgba(0,0,0,.36471)),url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-size:cover}.bg-background-form[data-v-72c189b4]{background-color:rgba(0,0,0,.36471);border:.5px solid #fff}hr[data-v-72c189b4]{border:4px solid #120446}.bg-card[data-v-72c189b4]{background:linear-gradient(to right bottom,rgba(255,0,0,.678) 2%,#0e0433 50%)}.bg-hero[data-v-72c189b4]{background-color:#0a0227}.bg-hero-card[data-v-72c189b4]{background-color:#0e0433}.bg-color[data-v-72c189b4]{background-color:red}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/back.8173244.jpg";

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=72c189b4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bg-hero"},[_vm._ssrNode("<div class=\"bg-image  h-screen lg-py-56\" data-v-72c189b4><div class=\"flex flex-row justify-between p-8 gap-8\" data-v-72c189b4><div data-v-72c189b4><img"+(_vm._ssrAttr("src",__webpack_require__(31)))+" alt class=\"w-48 h-15\" data-v-72c189b4></div> <div data-v-72c189b4><button class=\"bg-color px-4 py-2 rounded text-white text-sm font-bold\" data-v-72c189b4>\n          Sign in\n        </button></div></div> <div class=\"items-center container lg:pt-8 px-8 lg:px-32 lg:mx-12\" data-v-72c189b4><h2 class=\"lg:text-6xl text-3xl text-white font-bold lg:w-3/4\" data-v-72c189b4>Unlimited movies, TV shows, and more.</h2> <p class=\"text-white  lg:text-xl text-md font-bold lg:w-1/2 lg:mb-6 mb-4\" data-v-72c189b4>\n        Plans now start at US$2.99/month. </p> <p class=\"text-white  lg:text-xl text-md font-bold mb-4\" data-v-72c189b4>\n        Ready to watch? Enter your email to create or restart your membership.</p> <div class=\"flex lg:w-1/2 gap-2 mb-8\" data-v-72c189b4><input type=\"email\" name=\"email\" id=\"email\" placeholder=\"Email Address\" required=\"required\" class=\"block w-full bg-background-form shadow rounded outline-none focus:border-green-700 mb-2 p-4\" data-v-72c189b4> <button class=\"bg-color flex mb-2 p-4 rounded text-white text-sm font-bold block w-1/2 lg:text-xl\" data-v-72c189b4><span data-v-72c189b4>Get Started\n          </span> <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" class=\"w-6 text-white\" data-v-72c189b4><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 5l7 7-7 7\" data-v-72c189b4></path></svg></button></div></div></div> <div class=\"shadow-2xl rounded-lg lg:mx-12 transform -translate-y-10 left-0 \" data-v-72c189b4><div class=\"lg:flex bg-card shadow-2xl rounded-lg lg:flex-row sm:flex sm:flex-col lg:justify-between lg:gap-12 lg:px-24 lg:py-24 p-8 sm:items-center\" data-v-72c189b4><div data-v-72c189b4><h2 class=\"lg:text-5xl text-4xl text-white font-bold\" data-v-72c189b4>Enjoy on your TV.</h2> <p class=\"text-white  lg:text-xl text-md font-bold\" data-v-72c189b4>\n          Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.\n        </p></div> <div data-v-72c189b4><img"+(_vm._ssrAttr("src",__webpack_require__(32)))+" alt=\"Image\" data-v-72c189b4></div></div> <div class=\"lg:px-24  bg-hero-card\" data-v-72c189b4><hr data-v-72c189b4></div> <div class=\"lg:flex bg-hero-card lg:flex-row sm:flex sm:flex-col lg:justify-between lg:gap-12 lg:px-24 p-8 sm:items-center\" data-v-72c189b4><div data-v-72c189b4><img"+(_vm._ssrAttr("src",__webpack_require__(33)))+" alt=\"Image\" data-v-72c189b4></div> <div data-v-72c189b4><h2 class=\"lg:text-5xl text-4xl text-white font-bold\" data-v-72c189b4>Watch everywhere.</h2> <p class=\"text-white  lg:text-xl text-md font-bold\" data-v-72c189b4>\n          Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.\n        </p></div></div> <div class=\"lg:px-24 pb-4 bg-hero-card\" data-v-72c189b4><hr data-v-72c189b4></div> <div class=\"lg:flex bg-hero-card lg:flex-row sm:flex sm:flex-col lg:justify-between lg:gap-12 lg:px-24 p-8 sm:items-center\" data-v-72c189b4><div data-v-72c189b4><h2 class=\"lg:text-5xl text-4xl text-white font-bold\" data-v-72c189b4>Create profiles for kids.</h2> <p class=\"text-white  lg:text-xl text-md font-bold\" data-v-72c189b4>\n          Send kids on adventures with their favorite characters in a space made just for them—free with your\n          membership. </p></div> <div data-v-72c189b4><img"+(_vm._ssrAttr("src",__webpack_require__(34)))+" alt=\"Image\" data-v-72c189b4></div></div> <div class=\"lg:px-24 pb-4 bg-hero-card\" data-v-72c189b4><hr data-v-72c189b4></div> <div class=\"lg:flex bg-hero-card shadow-2xl rounded-lg lg:flex-row sm:flex sm:flex-col lg:justify-between lg:gap-12 lg:px-24 p-8 sm:items-center\" data-v-72c189b4><div data-v-72c189b4><img"+(_vm._ssrAttr("src",__webpack_require__(35)))+" alt=\"Image\" data-v-72c189b4></div> <div data-v-72c189b4><h2 class=\"lg:text-5xl text-4xl text-white font-bold\" data-v-72c189b4>Download your shows to watch offline.</h2> <p class=\"text-white  lg:text-xl text-md font-bold\" data-v-72c189b4>\n          Save your favorites easily and always have something to watch.\n        </p></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=72c189b4&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  data() {
    return {
      title: 'Netflix - Watch TV Shows Online, Watch Movies Online'
    };
  }

});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(36)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "72c189b4",
  "14c5edde"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map