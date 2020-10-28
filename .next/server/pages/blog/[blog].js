module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		6: 0
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
/******/ 			var chunk = require("../../" + ({}[chunkId]||chunkId) + "." + {"9":"30515909aa4744892f99","10":"3750b4fa7f0a1e7a0927","11":"c95bea62d06891d4b466","12":"30f64b4f0d4340116f4c","13":"b53e3cc7ab7d645f7a19"}[chunkId] + ".js");
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("6Vsw");


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

/***/ "6Vsw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return /* binding */ getStaticPaths; });
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "glob"
var external_glob_ = __webpack_require__("2XLG");
var external_glob_default = /*#__PURE__*/__webpack_require__.n(external_glob_);

// EXTERNAL MODULE: ./components/Markdown.tsx + 1 modules
var Markdown = __webpack_require__("4/34");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./globals.ts
var globals = __webpack_require__("nB16");

// CONCATENATED MODULE: ./components/Meta.tsx
var __jsx = external_react_default.a.createElement;



const Meta = props => {
  const {
    meta
  } = props;
  return __jsx(head_default.a, null, __jsx("title", null, meta.title), __jsx("meta", {
    name: "copyright",
    content: "Colin McDonnell"
  }), meta.link && __jsx("link", {
    rel: "canonical",
    href: meta.link
  }), meta.desc && __jsx("meta", {
    name: "description",
    content: meta.desc
  }), __jsx("meta", {
    property: "og:type",
    content: "website"
  }), __jsx("meta", {
    name: "og:title",
    property: "og:title",
    content: meta.title
  }), meta.desc && __jsx("meta", {
    name: "og:description",
    property: "og:description",
    content: meta.desc
  }), __jsx("meta", {
    property: "og:site_name",
    content: globals["a" /* globals */].siteName
  }), meta.link && __jsx("meta", {
    property: "og:url",
    content: `${meta.link}`
  }), __jsx("meta", {
    name: "twitter:card",
    content: "summary"
  }), __jsx("meta", {
    name: "twitter:title",
    content: meta.title
  }), meta.desc && __jsx("meta", {
    name: "twitter:description",
    content: meta.desc
  }), __jsx("meta", {
    name: "twitter:site",
    content: globals["a" /* globals */].twitterHandle
  }), __jsx("meta", {
    name: "twitter:creator",
    content: globals["a" /* globals */].twitterHandle
  }), meta.image && __jsx("meta", {
    name: "twitter:image",
    content: meta.image
  }), meta.image && __jsx("meta", {
    property: "og:image",
    content: `${meta.image}`
  }));
};
// CONCATENATED MODULE: ./components/PostMeta.tsx
var PostMeta_jsx = external_react_default.a.createElement;


const PostMeta = ({
  post
}) => {
  return PostMeta_jsx(Meta, {
    meta: {
      title: post.title,
      desc: post.description,
      link: post.canonicalUrl,
      image: post.bannerPhoto
    }
  });
};
// EXTERNAL MODULE: external "fecha"
var external_fecha_ = __webpack_require__("Wsj/");

// CONCATENATED MODULE: ./components/Author.tsx
var Author_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const FollowButton = () => {
  return Author_jsx("a", {
    href: "/newsletter"
  }, Author_jsx("div", {
    style: {
      display: 'inline-block',
      border: `1px solid ${globals["a" /* globals */].accentColor}`,
      borderRadius: '4px',
      padding: '2px 10px',
      color: globals["a" /* globals */].accentColor,
      fontSize: '10pt',
      marginBottom: '2px',
      marginLeft: '4px'
    }
  }, "Follow"));
};
const Author = props => {
  return Author_jsx("div", {
    style: {
      margin: '0px',
      padding: '0px'
    }
  }, Author_jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start'
    }
  }, props.post.authorPhoto && Author_jsx("img", {
    src: props.post.authorPhoto,
    style: {
      width: '70px',
      height: '70px',
      borderRadius: '35px',
      margin: '0px 10px 0px 0px'
    }
  }), Author_jsx(AuthorLines, {
    post: props.post
  })));
};
const AuthorLines = props => {
  const lineStyle = {
    margin: '2px',
    padding: 0,
    lineHeight: 1.2,
    fontSize: '11pt'
  };
  return Author_jsx("div", null, Author_jsx("p", {
    style: _objectSpread({}, lineStyle)
  }, props.post.author ? props.post.author : ''), Author_jsx("p", {
    style: _objectSpread({
      opacity: 0.6
    }, lineStyle)
  }, props.post.datePublished ? Object(external_fecha_["format"])(new Date(props.post.datePublished), 'MMMM Do, YYYY') : ''), Author_jsx("p", {
    style: _objectSpread({}, lineStyle)
  }, props.post.authorTwitter && Author_jsx("a", {
    style: {
      textDecoration: 'none',
      color: '#3b9488'
    },
    href: `https://twitter.com/${props.post.authorTwitter}`
  }, `@${props.post.authorTwitter}`)));
};
// CONCATENATED MODULE: ./components/BlogPost.tsx
var BlogPost_jsx = external_react_default.a.createElement;




const BlogPost = ({
  post
}) => {
  const {
    title,
    subtitle
  } = post;
  return BlogPost_jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      width: '100%',
      padding: '0px 0px 100px 0px'
    }
  }, BlogPost_jsx(PostMeta, {
    post: post
  }), BlogPost_jsx("div", {
    style: {
      width: '100%',
      maxWidth: '960px'
    }
  }, post.bannerPhoto && BlogPost_jsx("img", {
    style: {
      width: '100%',
      maxWidth: '100%',
      margin: '0px'
    },
    src: post.bannerPhoto
  }), BlogPost_jsx("div", {
    style: {
      padding: '50px 3vw 50px 3vw'
    }
  }, title && BlogPost_jsx("h1", {
    style: {
      margin: '10px 0px 10px 0px',
      padding: 0,
      border: 'none'
    }
  }, title), subtitle && BlogPost_jsx("h2", {
    style: {
      margin: '10px 0px',
      padding: 0,
      border: 'none',
      fontWeight: 400,
      opacity: '0.6'
    }
  }, subtitle), BlogPost_jsx("hr", {
    style: {
      height: '1px',
      color: '#eee',
      opacity: 0.2,
      margin: '25px 0px'
    }
  }), BlogPost_jsx(Author, {
    post: post
  })), BlogPost_jsx("div", {
    style: {
      width: '100%',
      padding: '0px 3vw'
    }
  }, BlogPost_jsx(Markdown["a" /* Markdown */], {
    source: post.content
  }))));
};
// EXTERNAL MODULE: ./loader.ts
var loader = __webpack_require__("NGu5");

// CONCATENATED MODULE: ./pages/blog/[blog].tsx
var _blog_jsx = external_react_default.a.createElement;





function Post(props) {
  const {
    post
  } = props;
  return _blog_jsx(BlogPost, {
    post: post
  });
}

const getStaticPaths = () => {
  const blogs = external_glob_default.a.sync('./md/blog/*.md');
  const slugs = blogs.map(file => {
    const popped = file.split('/').pop();
    if (!popped) throw new Error(`Invalid blog path: ${file}`);
    return popped.slice(0, -3).trim();
  });
  const paths = slugs.map(slug => `/blog/${slug}`);
  return {
    paths,
    fallback: false
  };
};
const getStaticProps = async ({
  params
}) => {
  const post = await Object(loader["c" /* loadPost */])(`blog/${params.blog}.md`);
  return {
    props: {
      post
    }
  };
};
/* harmony default export */ var _blog_ = __webpack_exports__["default"] = (Post);

/***/ }),

/***/ "88KH":
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/dist/cjs/styles/prism");

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

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

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