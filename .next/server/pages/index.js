module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		7: 0
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
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + "." + {"0":"62c19013d22e12d3b6cb","9":"30515909aa4744892f99","10":"3750b4fa7f0a1e7a0927","11":"c95bea62d06891d4b466","12":"30f64b4f0d4340116f4c","13":"b53e3cc7ab7d645f7a19"}[chunkId] + ".js");
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "23aj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("NGu5");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ikY9");
/* harmony import */ var _rssUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("90ZH");
/* harmony import */ var _components_Markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("4/34");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("nB16");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

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
  return __jsx("div", {
    style: {
      width: '100%'
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, "Introducing dev.lwlx.xyz"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico"
  })), __jsx("div", {
    style: sectionStyle
  }, __jsx("h2", {
    style: {
      margin: '4px 0px',
      fontSize: '34pt'
    }
  }, "recent posts"), __jsx("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(auto-fit, minmax(300px, 1fr))`,
      gridRowGap: '8px',
      gridColumnGap: '8px',
      width: '100%',
      padding: '0px 7vw'
    }
  }, props.posts.map((post, j) => {
    return __jsx(_components_PostCard__WEBPACK_IMPORTED_MODULE_3__[/* PostCard */ "a"], {
      post: post,
      key: j
    });
  }))), __jsx("div", {
    style: _objectSpread({}, sectionStyle)
  }, __jsx("h2", {
    style: {
      textAlign: 'center',
      fontSize: '34pt'
    }
  }, "README.md"), __jsx("p", {
    style: {
      textAlign: 'center',
      maxWidth: '960px',
      margin: 'auto',
      lineHeight: 1.7
    }
  }, "Below is the README.md for devii. It was imported and rendered using Next.js dynamic imports. The rest of this page (including this paragraph) are rendered with React. You can also read the README on GitHub at", ' ', __jsx("a", {
    href: "https://github.com/Lawlez/dev.lwlx.xyz"
  }, "https://github.com/Lawlez/dev.lwlx.xyz"), ".")), __jsx("div", {
    style: {
      width: '100%',
      backgroundColor: '#eeeeee',
      padding: '0px 3vw 50px 3vw'
    }
  }, __jsx("div", {
    style: {
      maxWidth: '960px',
      margin: 'auto'
    }
  }, __jsx(_components_Markdown__WEBPACK_IMPORTED_MODULE_5__[/* Markdown */ "a"], {
    source: props.readme
  }))), __jsx("div", {
    style: sectionStyle
  }, __jsx("h2", {
    style: {
      margin: '4px 0px',
      fontSize: '22pt',
      paddingBottom: '30px'
    }
  }, "Get started"), __jsx("a", {
    href: "https://github.com/Lawlez/dev.lwlx.xyz",
    style: {
      cursor: 'pointer'
    }
  }, __jsx("button", {
    style: {
      padding: '10px 30px',
      backgroundColor: _globals__WEBPACK_IMPORTED_MODULE_6__[/* globals */ "a"].accentColor,
      color: 'white',
      fontSize: '14pt',
      border: 'none',
      borderRadius: '10px',
      cursor: 'pointer'
    }
  }, "Fork dev.lwlx.xyz on GitHub"))));
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

/***/ "2XLG":
/***/ (function(module, exports) {

module.exports = require("glob");

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("23aj");


/***/ }),

/***/ "4/34":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Markdown; });

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

// EXTERNAL MODULE: external "react-syntax-highlighter/dist/cjs/styles/prism"
var prism_ = __webpack_require__("88KH");

// CONCATENATED MODULE: ./components/Code.tsx
var __jsx = external_react_default.a.createElement;



class Code_Code extends external_react_default.a.PureComponent {
  render() {
    const {
      language,
      value
    } = this.props;
    return __jsx(external_react_syntax_highlighter_["Prism"], {
      language: (language === 'ts' ? 'typescript' : language) || 'typescript',
      style: prism_["darcula"]
    }, value);
  }

}
// EXTERNAL MODULE: ./globals.ts
var globals = __webpack_require__("nB16");

// CONCATENATED MODULE: ./components/Markdown.tsx

var Markdown_jsx = external_react_default.a.createElement;




const Markdown = props => {
  return Markdown_jsx("div", {
    style: {
      width: '100%'
    },
    className: style_default.a.dynamic([["314242526", [globals["a" /* globals */].accentColor]]]) + " " + "devii-markdown"
  }, Markdown_jsx(with_html_default.a, {
    key: "content",
    source: props.source,
    renderers: {
      code: Code_Code
    },
    escapeHtml: false
  }), Markdown_jsx(style_default.a, {
    id: "314242526",
    dynamic: [globals["a" /* globals */].accentColor]
  }, [".devii-markdown p,.devii-markdown li{line-height:1.7;color:#333;}", ".devii-markdown h1,.devii-markdown h2,.devii-markdown h3,.devii-markdown h4,.devii-markdown h5,.devii-markdown h6{margin:0px;padding:0px;}", ".devii-markdown h1>a,.devii-markdown h2>a,.devii-markdown h3>a,.devii-markdown h4>a,.devii-markdown h5>a,.devii-markdown h6>a{-webkit-text-decoration:none;text-decoration:none;}", ".devii-markdown hr{margin:20px 0px;opacity:0.35;}", ".devii-markdown h1{padding-top:30px;padding-bottom:10px;margin-top:30px;margin-bottom:30px;}", ".devii-markdown h2{padding-top:25px;padding-bottom:10px;margin-top:25px;margin-bottom:25px;}", ".devii-markdown h3{padding-top:20px;padding-bottom:10px;margin-top:20px;margin-bottom:20px;}", ".devii-markdown h4{padding-top:15px;padding-bottom:10px;margin-top:15px;margin-bottom:15px;}", ".devii-markdown h5{padding-top:10px;padding-bottom:10px;margin-top:10px;margin-bottom:10px;}", ".devii-markdown h6{padding-top:5px;padding-bottom:10px;margin-top:5px;margin-bottom:5px;}", ".devii-markdown p{padding:10px 0px;margin:10px 0px;}", ".devii-markdown li{padding:10px 0px;}", ".devii-markdown img{width:100%;border-radius:8px;box-shadow:0px 4px 30px #00000040;}", ".devii-markdown code{background-color:#00000010;padding:3px 3px;border-radius:2px;}", ".devii-markdown pre{margin:20px 0px !important;}", ".devii-markdown ol pre,.devii-markdown ol p{margin:0px 0px !important;}", `.devii-markdown blockquote{margin:0px;padding-left:1em;border-left:4px solid ${globals["a" /* globals */].accentColor};}`]));
};

/***/ }),

/***/ "4ugE":
/***/ (function(module, exports) {

module.exports = require("showdown");

/***/ }),

/***/ "88KH":
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/dist/cjs/styles/prism");

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
      url: `https://vriad.com/${post.path}`,
      categories: post.tags || [],
      author: post.author || 'Colin McDonnell',
      date: new Date(post.datePublished || 0).toISOString()
    });
  }

  if (!isValid) return; // writes RSS.xml to public directory

  const path = `${process.cwd()}/public/rss.xml`;
  fs__WEBPACK_IMPORTED_MODULE_1___default.a.writeFileSync(path, feed.xml(), 'utf8');
  console.log(`generated RSS feed`);
};

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

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "fecha"
var external_fecha_ = __webpack_require__("Wsj/");

// CONCATENATED MODULE: ./components/Tag.tsx
var __jsx = external_react_default.a.createElement;

const Tag = props => {
  return __jsx("div", {
    style: {
      display: 'inline-block',
      padding: '3px 12px',
      borderRadius: '20px',
      backgroundColor: '#dddddd',
      color: '#333333',
      marginRight: '7px',
      boxShadow: '0px 1px 1px #00000030'
    }
  }, props.tag);
};
// CONCATENATED MODULE: ./components/PostCard.tsx
var PostCard_jsx = external_react_default.a.createElement;



const PostCard = props => {
  const post = props.post;
  return PostCard_jsx("a", {
    href: `/${post.path}`,
    style: {
      textDecoration: 'inherit',
      color: 'inherit',
      margin: '10px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      height: '300px'
    }
  }, PostCard_jsx("div", {
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
    }
  }, post.thumbnailPhoto && PostCard_jsx("div", {
    style: {
      background: `url(${post.thumbnailPhoto}) no-repeat center center`,
      backgroundSize: 'cover',
      width: '100%',
      flex: 1
    }
  }), PostCard_jsx("div", {
    style: {
      padding: '15px 10px',
      display: 'flex',
      flexDirection: 'column',
      borderTop: '1px solid #00000020'
    }
  }, post.title && PostCard_jsx("h2", {
    style: {
      margin: '0px 0px 7px 0px',
      fontSize: '14pt',
      fontWeight: 600,
      padding: '2px 10%',
      textAlign: 'center'
    }
  }, post.title),  false && false, PostCard_jsx("p", {
    style: {
      opacity: 0.6,
      textAlign: 'center',
      margin: '0px'
    }
  }, props.post.datePublished ? Object(external_fecha_["format"])(new Date(props.post.datePublished), 'MMMM Do, YYYY') : ''), PostCard_jsx("div", {
    style: {
      flex: 1
    }
  }, " "),  false && false)));
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
  const yourName = _globals.yourName = 'Dominik (lwlx) Feger';
  const siteName = _globals.siteName = `dev.lwlx.xyz`;
  const siteDescription = _globals.siteDescription = "Dev / Sec / Ops ";
  const siteCreationDate = _globals.siteCreationDate = 'Oct 27, 2020 04:00:00 GMT';
  const twitterHandle = _globals.twitterHandle = '@lwlx';
  const email = _globals.email = `lwlx@lwlx.xyz`;
  const url = _globals.url = 'https://dev.lwlx.xyz';
  const accentColor = _globals.accentColor = `#4E5C63`;
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
	"./blog/dan-abramov.md": [
		"LvrK",
		9
	],
	"./blog/devii.md": [
		"zghA",
		10
	],
	"./blog/the-ultimate-tech-stack.md": [
		"N8vF",
		11
	],
	"./features.md": [
		"bnIu",
		12
	],
	"./introduction.md": [
		"uqF7",
		13
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