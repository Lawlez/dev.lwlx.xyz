module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		8: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + "." + {"0":"62c19013d22e12d3b6cb","9":"a312e78ed3328f17ff9a","10":"db40015de709b3fe69bb","11":"1cf26a59b494826d1c3d","12":"274e57352f20a31bdb77","13":"2653859699e7dd70033e","14":"018ee768b5c328f8080a"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("VeiZ");


/***/ }),

/***/ "2XLG":
/***/ (function(module, exports) {

module.exports = require("glob");

/***/ }),

/***/ "4/34":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Markdown; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-markdown/with-html"
var with_html_ = __webpack_require__("Q25H");
var with_html_default = /*#__PURE__*/__webpack_require__.n(with_html_);

// EXTERNAL MODULE: external "react-syntax-highlighter"
var external_react_syntax_highlighter_ = __webpack_require__("RyM3");

// CONCATENATED MODULE: ./components/Code.tsx



const converted = {
  'pre[class*="language-"], code[class*="language-"]': {
    color: '#C9C0BE',
    fontSize: '0.95em',
    textShadow: "none",
    fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    direction: "ltr",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    lineHeight: 1.5,
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: 4,
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none"
  },
  'pre[class*="language-"]::selection, code[class*="language-"]::selection, pre[class*="language-"]::mozselection, code[class*="language-"]::mozselection': {
    textShadow: "none",
    background: "#b3d4fc"
  },
  "@media print": {
    'pre[class*="language-"],   code[class*="language-"]': {
      textShadow: "none"
    }
  },
  'pre[class*="language-"]': {
    padding: "1em",
    margin: ".5em 0",
    overflow: "auto",
    background: "#04060a"
  },
  ':not(pre) > code[class*="language-"]': {
    padding: ".1em .3em",
    borderRadius: ".3em",
    color: '#C9C0BE',
    background: "#f07693"
  },
  namespace: {
    opacity: 0.8
  },
  comment: {
    color: "#4e5c63"
  },
  prolog: {
    color: "#4e5c63"
  },
  doctype: {
    color: "#4e5c63"
  },
  cdata: {
    color: "#4e5c63"
  },
  punctuation: {
    color: "#999999"
  },
  property: {
    color: "#4499ee"
  },
  tag: {
    color: "#4499ee"
  },
  boolean: {
    color: "#4499ee"
  },
  number: {
    color: "#4499ee"
  },
  constant: {
    color: "#4499ee"
  },
  symbol: {
    color: "#4499ee"
  },
  deleted: {
    color: "#4499ee"
  },
  selector: {
    color: "#f07693"
  },
  'attr-name': {
    color: "#f07693"
  },
  char: {
    color: "#f07693"
  },
  builtin: {
    color: "#f07693"
  },
  inserted: {
    color: "#f07693"
  },
  operator: {
    color: "#c9c0be",
    background: "#000000"
  },
  entity: {
    color: "#c9c0be",
    background: "#000000",
    cursor: "help"
  },
  url: {
    color: "#c9c0be",
    background: "#000000",
    textDecoration: 'underline'
  },
  'language-css': {
    color: "#c9c0be",
    background: "#000000"
  },
  string: {
    color: "#c9c0be",
    background: "#000000"
  },
  style: {
    color: "#c9c0be",
    background: "#000000"
  },
  atrule: {
    color: "#1177ab"
  },
  'attr-value': {
    color: "#1177ab"
  },
  keyword: {
    color: "#1177ab"
  },
  function: {
    color: "#c7526d"
  },
  regex: {
    color: "#ee9900"
  },
  important: {
    color: "#ee9900",
    fontWeight: "bold"
  },
  variable: {
    color: "#ee9900"
  },
  bold: {
    fontWeight: "bold"
  },
  italic: {
    fontStyle: "italic"
  },
  "pre[data-line]": {
    position: "relative"
  },
  'pre[class*="language-"] > code[class*="language-"]': {
    position: "relative",
    zIndex: 1
  },
  ".line-highlight": {
    position: "absolute",
    left: "0",
    right: "0",
    padding: "inherit 0",
    marginTop: "1em",
    background: "#222222",
    boxShadow: "inset 5px 0 0 #f07693",
    zIndex: 0,
    pointerEvents: "none",
    lineHeight: "inherit",
    whiteSpace: "pre"
  },
  'code > span': {
    color: '#C9C0BE'
  }
};
class Code_Code extends external_react_default.a.PureComponent {
  render() {
    const {
      language,
      value
    } = this.props;
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_syntax_highlighter_["Prism"], {
      language: language ? language : 'javascript',
      style: converted,
      showLineNumbers: true,
      wrapLines: true,
      codeTagProps: {
        style: {
          backgroundColor: 'transparent',
          color: '#C9C0BE',
          width: '1024px'
        }
      },
      children: value
    });
  }

}
// EXTERNAL MODULE: ./globals.ts
var globals = __webpack_require__("nB16");

// CONCATENATED MODULE: ./components/Markdown.tsx







const Markdown = props => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    style: {
      width: '100%'
    },
    className: style_default.a.dynamic([["1943567829", [globals["a" /* globals */].secondaryColor]]]) + " " + "devii-markdown",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(with_html_default.a, {
      source: props.source,
      renderers: {
        code: Code_Code
      },
      escapeHtml: false
    }, "content"), /*#__PURE__*/Object(jsx_runtime_["jsx"])(style_default.a, {
      id: "1943567829",
      dynamic: [globals["a" /* globals */].secondaryColor],
      children: [".devii-markdown p,.devii-markdown li{line-height:1.7;color:#333;}", ".devii-markdown h1,.devii-markdown h2,.devii-markdown h3,.devii-markdown h4,.devii-markdown h5,.devii-markdown h6{margin:0px;padding:0px;}", ".devii-markdown h1>a,.devii-markdown h2>a,.devii-markdown h3>a,.devii-markdown h4>a,.devii-markdown h5>a,.devii-markdown h6>a{-webkit-text-decoration:underline;text-decoration:underline;color:#F07693;}", ".devii-markdown hr{margin:20px 0px;opacity:0.35;}", ".devii-markdown h1{padding-top:30px;padding-bottom:10px;margin-top:30px;margin-bottom:30px;}", ".devii-markdown h2{padding-top:25px;padding-bottom:10px;margin-top:25px;margin-bottom:25px;}", ".devii-markdown h3{padding-top:20px;padding-bottom:10px;margin-top:20px;margin-bottom:20px;}", ".devii-markdown h4{padding-top:15px;padding-bottom:10px;margin-top:15px;margin-bottom:15px;}", ".devii-markdown h5{padding-top:10px;padding-bottom:10px;margin-top:10px;margin-bottom:10px;}", ".devii-markdown h6{padding-top:5px;padding-bottom:10px;margin-top:5px;margin-bottom:5px;}", ".devii-markdown p{padding:10px 0px;margin:10px 0px;}", ".devii-markdown li{padding:10px 0px;}", ".devii-markdown img{width:100%;border-radius:8px;box-shadow:0px 4px 30px #00000040;}", ".devii-markdown code{background-color:#F0769320;padding:3px 3px;border-radius:2px;font-size:16px;}", ".devii-markdown pre{margin:20px 0px !important;}", ".devii-markdown ol pre,.devii-markdown ol p{margin:0px 0px !important;}", `.devii-markdown blockquote{margin:0px;padding-left:1em;border-left:4px solid ${globals["a" /* globals */].secondaryColor};}`, "a{-webkit-text-decoration:underline;text-decoration:underline;color:#F07693;}"]
    })]
  });
};

/***/ }),

/***/ "4ugE":
/***/ (function(module, exports) {

module.exports = require("showdown");

/***/ }),

/***/ "90ZH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return generateRSS; });
/* harmony import */ var rss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bHcg");
/* harmony import */ var rss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("mw/K");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var showdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4ugE");
/* harmony import */ var showdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(showdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("nB16");




const generateRSS = async posts => {
  posts.map(post => {
    if (!post.canonicalUrl) throw new Error("Missing canonicalUrl. A canonical URL is required for RSS feed generation. If you don't care about RSS, uncomment `generateRSS(posts)` at the bottom of index.tsx.");
    return post;
  });
  const feed = new rss__WEBPACK_IMPORTED_MODULE_0___default.a({
    title: _globals__WEBPACK_IMPORTED_MODULE_3__[/* globals */ "a"].siteName,
    description: _globals__WEBPACK_IMPORTED_MODULE_3__[/* globals */ "a"].siteDescription,
    feed_url: `${_globals__WEBPACK_IMPORTED_MODULE_3__[/* globals */ "a"].url}/rss.xml`,
    site_url: _globals__WEBPACK_IMPORTED_MODULE_3__[/* globals */ "a"].url,
    image_url: `${_globals__WEBPACK_IMPORTED_MODULE_3__[/* globals */ "a"].url}/icon.png`,
    managingEditor: _globals__WEBPACK_IMPORTED_MODULE_3__[/* globals */ "a"].email,
    webMaster: _globals__WEBPACK_IMPORTED_MODULE_3__[/* globals */ "a"].email,
    copyright: `${new Date().getFullYear()} ${_globals__WEBPACK_IMPORTED_MODULE_3__[/* globals */ "a"].yourName}`,
    language: 'en',
    pubDate: _globals__WEBPACK_IMPORTED_MODULE_3__[/* globals */ "a"].siteCreationDate,
    ttl: 60
  });
  let isValid = true;

  for (const post of posts) {
    const converter = new showdown__WEBPACK_IMPORTED_MODULE_2___default.a.Converter();
    const html = converter.makeHtml(post.content);

    if (!post.datePublished) {
      isValid = false;
      console.warn('All posts must have a publishedDate timestamp when generating RSS feed.');
      console.warn('Not generating rss.xml.');
    }

    feed.item({
      title: post.title,
      description: html,
      url: `https://dev.lwlx.xyz/blog/${post.path}`,
      categories: post.tags || [],
      author: post.author || 'Dominik Feger',
      date: new Date(post.datePublished || 0).toISOString()
    });
  }

  if (!isValid) return; // writes RSS.xml to public directory

  const path = `${process.cwd()}/public/rss.xml`;
  fs__WEBPACK_IMPORTED_MODULE_1___default.a.writeFileSync(path, feed.xml(), 'utf8');
  console.log(`generated RSS feed`);
};

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "NGu5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return loadMarkdownFile; });
/* unused harmony export mdToPost */
/* unused harmony export loadMarkdownFiles */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return loadPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return loadBlogPosts; });
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("uo/4");
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var glob__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2XLG");
/* harmony import */ var glob__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(glob__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nB16");



const loadMarkdownFile = async path => {
  const mdFile = await __webpack_require__("waFX")(`./${path}`);
  return {
    path,
    contents: mdFile.default
  };
};
const mdToPost = file => {
  const metadata = gray_matter__WEBPACK_IMPORTED_MODULE_0___default()(file.contents);
  const path = file.path.replace('.md', '');
  const post = {
    path,
    title: metadata.data.title,
    subtitle: metadata.data.subtitle || null,
    published: metadata.data.published || false,
    datePublished: metadata.data.datePublished || null,
    tags: metadata.data.tags || null,
    description: metadata.data.description || null,
    canonicalUrl: metadata.data.canonicalUrl || `${_globals__WEBPACK_IMPORTED_MODULE_2__[/* globals */ "a"].url}/${path}`,
    author: metadata.data.author || null,
    authorPhoto: metadata.data.authorPhoto || null,
    authorTwitter: metadata.data.authorTwitter || null,
    bannerPhoto: metadata.data.bannerPhoto || null,
    thumbnailPhoto: metadata.data.thumbnailPhoto || null,
    content: metadata.content
  };
  if (!post.title) throw new Error(`Missing required field: title.`);
  if (!post.content) throw new Error(`Missing required field: content.`);
  if (!post.datePublished) throw new Error(`Missing required field: datePublished.`);
  return post;
};
const loadMarkdownFiles = async path => {
  const blogPaths = glob__WEBPACK_IMPORTED_MODULE_1___default.a.sync(`./md/${path}`);
  const postDataList = await Promise.all(blogPaths.map(blogPath => {
    const modPath = blogPath.slice(blogPath.indexOf(`md/`) + 3);
    return loadMarkdownFile(`${modPath}`);
  }));
  return postDataList;
};
const loadPost = async path => {
  const file = await loadMarkdownFile(path);
  return mdToPost(file);
};
const loadBlogPosts = async () => {
  return await (await loadMarkdownFiles(`blog/*.md`)).map(mdToPost).filter(p => p.published).sort((a, b) => (b.datePublished || 0) - (a.datePublished || 0));
};

/***/ }),

/***/ "Q25H":
/***/ (function(module, exports) {

module.exports = require("react-markdown/with-html");

/***/ }),

/***/ "RyM3":
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter");

/***/ }),

/***/ "VeiZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("NGu5");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ikY9");
/* harmony import */ var _rssUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("90ZH");
/* harmony import */ var _components_Markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("4/34");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("nB16");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const sectionStyle = {
  width: '100%',
  padding: '100px 3vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

const Home = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    style: {
      width: '100%'
    },
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("title", {
        children: "Introducing dev.lwlx.xyz"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      style: {
        maxWidth: '550px',
        margin: 'auto',
        padding: '50px 3vw'
      },
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_Markdown__WEBPACK_IMPORTED_MODULE_5__[/* Markdown */ "a"], {
        source: props.introduction
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      style: sectionStyle,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h2", {
        style: {
          margin: '4px 0px',
          fontSize: '34pt'
        },
        children: "Features"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        style: {
          maxWidth: '550px'
        },
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_Markdown__WEBPACK_IMPORTED_MODULE_5__[/* Markdown */ "a"], {
          source: props.features
        })
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      style: sectionStyle,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h2", {
        style: {
          margin: '4px 0px',
          fontSize: '34pt'
        },
        children: "My blog posts"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
        style: {
          maxWidth: '550px',
          paddingBottom: '30px',
          lineHeight: 1.7
        },
        children: ["This section demonstrates the power of dynamic imports. Every Markdown file under ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("code", {
          children: "/md/blog"
        }), " is automatically parsed into a structured TypeScript object and available in the", ' ', /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("code", {
          children: "props.posts"
        }), " array. These blog post \"cards\" are implemented in the", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("code", {
          children: "/components/PostCard.tsx"
        }), " component."]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        style: {
          display: 'grid',
          gridTemplateColumns: `repeat(auto-fit, minmax(300px, 1fr))`,
          gridRowGap: '8px',
          gridColumnGap: '8px',
          width: '100%',
          padding: '0px 7vw'
        },
        children: props.posts.map((post, j) => {
          return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_PostCard__WEBPACK_IMPORTED_MODULE_3__[/* PostCard */ "a"], {
            post: post
          }, j);
        })
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      style: _objectSpread({}, sectionStyle),
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h2", {
        style: {
          textAlign: 'center',
          fontSize: '34pt'
        },
        children: "Testimonials"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("blockquote", {
        style: {
          borderLeft: `3px solid ${_globals__WEBPACK_IMPORTED_MODULE_6__[/* globals */ "a"].accentColor}`,
          paddingLeft: '20px'
        },
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
          style: {
            fontSize: '20pt'
          },
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("em", {
            children: "Seems like it might be useful!"
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
          style: {
            textAlign: 'right'
          },
          children: ["\u2014 Dan Abramov, taken", ' ', /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
            href: "https://github.com/Lawlez/dev.lwlx.xyz/issues/2",
            target: "_blank",
            children: "utterly out of context"
          })]
        })]
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      style: _objectSpread({}, sectionStyle),
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h2", {
        style: {
          textAlign: 'center',
          fontSize: '34pt'
        },
        children: "README.md"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
        style: {
          textAlign: 'center',
          maxWidth: '600px',
          margin: 'auto',
          lineHeight: 1.7
        },
        children: ["Below is the README.md for devii. It was imported and rendered using Next.js dynamic imports. The rest of this page (including this paragraph) are rendered with React. You can also read the README on GitHub at", ' ', /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
          href: "https://github.com/Lawlez/dev.lwlx.xyz",
          children: "https://github.com/Lawlez/dev.lwlx.xyz"
        }), "."]
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      style: {
        width: '100%',
        backgroundColor: '#eeeeee',
        padding: '0px 3vw 50px 3vw'
      },
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        style: {
          maxWidth: '600px',
          margin: 'auto'
        },
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_Markdown__WEBPACK_IMPORTED_MODULE_5__[/* Markdown */ "a"], {
          source: props.readme
        })
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      style: sectionStyle,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h2", {
        style: {
          margin: '4px 0px',
          fontSize: '22pt',
          paddingBottom: '30px'
        },
        children: "Get started"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
        href: "https://github.com/Lawlez/dev.lwlx.xyz",
        style: {
          cursor: 'pointer'
        },
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
          style: {
            padding: '10px 30px',
            backgroundColor: _globals__WEBPACK_IMPORTED_MODULE_6__[/* globals */ "a"].accentColor,
            color: 'white',
            fontSize: '14pt',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer'
          },
          children: "Fork dev.lwlx.xyz on GitHub"
        })
      })]
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Home);
const getStaticProps = async () => {
  const introduction = await Object(_loader__WEBPACK_IMPORTED_MODULE_2__[/* loadMarkdownFile */ "b"])('introduction.md');
  const features = await Object(_loader__WEBPACK_IMPORTED_MODULE_2__[/* loadMarkdownFile */ "b"])('features.md');
  const readmeFile = await __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, "gql7"));
  const readme = readmeFile.default;
  const posts = await Object(_loader__WEBPACK_IMPORTED_MODULE_2__[/* loadBlogPosts */ "a"])(); // comment out to turn off RSS generation during build step.

  await Object(_rssUtil__WEBPACK_IMPORTED_MODULE_4__[/* generateRSS */ "a"])(posts);
  const props = {
    introduction: introduction.contents,
    features: features.contents,
    readme: readme,
    posts
  };
  return {
    props
  };
};

/***/ }),

/***/ "Wsj/":
/***/ (function(module, exports) {

module.exports = require("fecha");

/***/ }),

/***/ "bHcg":
/***/ (function(module, exports) {

module.exports = require("rss");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "ikY9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ PostCard; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "fecha"
var external_fecha_ = __webpack_require__("Wsj/");

// CONCATENATED MODULE: ./components/Tag.tsx


const Tag = props => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    style: {
      display: 'inline-block',
      padding: '3px 12px',
      borderRadius: '20px',
      backgroundColor: '#dddddd',
      color: '#333333',
      marginRight: '8px',
      boxShadow: '0px 1px 1px #00000030'
    },
    children: props.tag
  });
};
// CONCATENATED MODULE: ./components/PostCard.tsx





const PostCard = props => {
  const post = props.post;
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
    href: `/${post.path}`,
    style: {
      textDecoration: 'inherit',
      color: 'inherit',
      margin: '10px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      height: '300px'
    },
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      style: {
        opacity: 0.92,
        boxShadow: '0px 2px 10px #00000040',
        width: '100%',
        maxWidth: '960px',
        overflow: 'hidden',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      },
      children: [post.thumbnailPhoto && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        style: {
          background: `url(${post.thumbnailPhoto}) no-repeat center center`,
          backgroundSize: 'cover',
          width: '100%',
          flex: 1
        }
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        style: {
          padding: '15px 10px',
          display: 'flex',
          flexDirection: 'column',
          borderTop: '1px solid #00000020'
        },
        children: [post.title && /*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
          style: {
            margin: '0px 0px 8px 0px',
            fontSize: '14pt',
            fontWeight: 600,
            padding: '2px 10%',
            textAlign: 'center'
          },
          children: post.title
        }),  false && /*#__PURE__*/false, /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          style: {
            opacity: 0.6,
            textAlign: 'center',
            margin: '0px'
          },
          children: props.post.datePublished ? Object(external_fecha_["format"])(new Date(props.post.datePublished), 'MMMM Do, YYYY') : ''
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          style: {
            flex: 1
          },
          children: " "
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          style: {
            marginTop: '8px'
          },
          children: post.tags && (post.tags || []).map(tag => /*#__PURE__*/Object(jsx_runtime_["jsx"])(Tag, {
            tag: tag
          }))
        })]
      })]
    })
  });
};

/***/ }),

/***/ "mw/K":
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "nB16":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return globals; });
let globals;

(function (_globals) {
  const version = _globals.version = '0.1.0';
  const yourName = _globals.yourName = 'Dominik (lwlx) Feger';
  const siteName = _globals.siteName = `dev.lwlx.xyz`;
  const siteDescription = _globals.siteDescription = "Dev / Sec / Ops ";
  const siteCreationDate = _globals.siteCreationDate = 'Oct 27, 2020 04:00:00 GMT';
  const twitterHandle = _globals.twitterHandle = '@lwlx';
  const email = _globals.email = `lwlx@lwlx.xyz`;
  const url = _globals.url = 'https://dev.lwlx.xyz';
  const primaryColor = _globals.primaryColor = `#1177AB`;
  const secondaryColor = _globals.secondaryColor = `#F07693`;
  const accentColor = _globals.accentColor = `#04060A`;
  const backgroundColor = _globals.backgroundColor = `#C9C0BE`;
  const googleAnalyticsId = _globals.googleAnalyticsId = ``;
})(globals || (globals = {}));

/***/ }),

/***/ "uo/4":
/***/ (function(module, exports) {

module.exports = require("gray-matter");

/***/ }),

/***/ "waFX":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./archive/dan-abramov.md": [
		"q/Ub",
		9
	],
	"./archive/devii.md": [
		"66Ls",
		10
	],
	"./archive/the-ultimate-tech-stack.md": [
		"TStj",
		11
	],
	"./blog/consistent-x-device-encryption.md": [
		"2IaP",
		12
	],
	"./features.md": [
		"bnIu",
		13
	],
	"./introduction.md": [
		"uqF7",
		14
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "waFX";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });