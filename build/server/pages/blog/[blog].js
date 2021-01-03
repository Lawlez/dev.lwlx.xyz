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
/******/ 			var chunk = require("../../" + ({}[chunkId]||chunkId) + "." + {"8":"6830199ea394f720e55f","9":"a2ba811ba4f163f6cd10","10":"8ea08114b127c013e5d0","11":"65171676de74d8f4b3df","12":"61a1ccb01fa327f0173c","13":"a05d672993284c7a8e9a","14":"cd02eb85aa56278aafcc"}[chunkId] + ".js");
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

module.exports = __webpack_require__("6Vsw");


/***/ }),

/***/ "2XLG":
/***/ (function(module, exports) {

module.exports = require("glob");

/***/ }),

/***/ "6Vsw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return /* binding */ getStaticPaths; });
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "glob"
var external_glob_ = __webpack_require__("2XLG");
var external_glob_default = /*#__PURE__*/__webpack_require__.n(external_glob_);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

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
      width: "100%"
    },
    className: style_default.a.dynamic([["2295438688", [globals["a" /* globals */].secondaryColor]]]) + " " + "devii-markdown",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(with_html_default.a, {
      source: props.source,
      renderers: {
        code: Code_Code
      },
      escapeHtml: false
    }, "content"), /*#__PURE__*/Object(jsx_runtime_["jsx"])(style_default.a, {
      id: "2295438688",
      dynamic: [globals["a" /* globals */].secondaryColor],
      children: [".devii-markdown p,.devii-markdown li{line-height:32px;font-size:21px;color:#333;overflow-wrap:break-word;}", ".devii-markdown h1,.devii-markdown h2,.devii-markdown h3,.devii-markdown h4,.devii-markdown h5,.devii-markdown h6{margin:0px;padding:0px;}", ".devii-markdown h1>a,.devii-markdown h2>a,.devii-markdown h3>a,.devii-markdown h4>a,.devii-markdown h5>a,.devii-markdown h6>a{-webkit-text-decoration:underline;text-decoration:underline;color:#f07693;}", ".devii-markdown hr{margin:20px 0px;opacity:0.35;}", ".devii-markdown h1{font-size:46px;line-height:56px;padding-top:30px;padding-bottom:10px;margin-top:30px;margin-bottom:30px;}", ".devii-markdown h2{padding-top:25px;padding-bottom:10px;margin-top:25px;margin-bottom:25px;}", ".devii-markdown h3{padding-top:20px;padding-bottom:10px;margin-top:20px;margin-bottom:20px;}", ".devii-markdown h4{padding-top:15px;padding-bottom:10px;margin-top:15px;margin-bottom:15px;}", ".devii-markdown h5{padding-top:10px;padding-bottom:10px;margin-top:10px;margin-bottom:10px;}", ".devii-markdown h6{padding-top:5px;padding-bottom:10px;margin-top:5px;margin-bottom:5px;}", ".devii-markdown p{padding:10px 0px;margin:10px 0px;}", ".devii-markdown li{padding:10px 0px;}", ".devii-markdown img{width:100%;border-radius:8px;box-shadow:0px 4px 30px #00000040;}", ".devii-markdown code{background-color:#f0769320;padding:3px 3px;border-radius:2px;font-size:1em;}", ".devii-markdown pre{margin:20px 0px !important;}", ".devii-markdown ol pre,.devii-markdown ol p{margin:0px 0px !important;}", `.devii-markdown blockquote{margin:0px;padding-left:1em;border-left:4px solid ${globals["a" /* globals */].secondaryColor};}`, "a{-webkit-text-decoration:underline;text-decoration:underline;color:#f07693;}", "@media only screen and (min-width:768px){.devii-markdown code{background-color:#f0769320;padding:3px 3px;border-radius:2px;font-size:16px;}}"]
    })]
  });
};
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/Meta.tsx





const Meta = props => {
  const {
    meta
  } = props;
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
      children: meta.title
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      name: "copyright",
      content: "lwlx. 2020"
    }), meta.link && /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
      rel: "canonical",
      href: meta.link
    }), meta.desc && /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      name: "description",
      content: meta.desc
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      property: "og:type",
      content: "website"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      name: "og:title",
      property: "og:title",
      content: meta.title
    }), meta.desc && /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      name: "og:description",
      property: "og:description",
      content: meta.desc
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      property: "og:site_name",
      content: globals["a" /* globals */].siteName
    }), meta.link && /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      property: "og:url",
      content: `${meta.link}`
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      name: "twitter:card",
      content: "summary_large_image"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      name: "twitter:title",
      content: meta.title
    }), meta.desc && /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      name: "twitter:description",
      content: meta.desc
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      name: "twitter:site",
      content: globals["a" /* globals */].twitterHandle
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      name: "twitter:creator",
      content: globals["a" /* globals */].twitterHandle
    }), meta.image && /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      name: "twitter:image",
      content: "https://dev.lwlx.xyz" + meta.image
    }), meta.image && /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      property: "og:image",
      content: `https://dev.lwlx.xyz${meta.image}`
    })]
  });
};
// CONCATENATED MODULE: ./components/PostMeta.tsx



const PostMeta = ({
  post
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Meta, {
    meta: {
      title: post.subtitle ? post.title + post.subtitle : post.title,
      desc: post.description,
      link: post.canonicalUrl,
      image: post.bannerPhoto
    }
  });
};
// EXTERNAL MODULE: external "fecha"
var external_fecha_ = __webpack_require__("Wsj/");

// CONCATENATED MODULE: ./components/Author.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const FollowButton = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
    href: "/newsletter",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      style: {
        display: 'inline-block',
        border: `1px solid ${globals["a" /* globals */].accentColor}`,
        borderRadius: '4px',
        padding: '2px 10px',
        color: globals["a" /* globals */].accentColor,
        fontSize: '10pt',
        marginBottom: '2px',
        marginLeft: '4px'
      },
      children: "Follow"
    })
  });
};
const Author = props => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    style: {
      margin: '0px',
      padding: '0px'
    },
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      style: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
      },
      children: [props.post.authorPhoto && /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        src: props.post.authorPhoto,
        style: {
          width: '70px',
          height: '70px',
          borderRadius: '35px',
          margin: '0px 10px 0px 0px'
        }
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(AuthorLines, {
        post: props.post
      })]
    })
  });
};
const AuthorLines = props => {
  const lineStyle = {
    margin: '2px',
    padding: 0,
    lineHeight: 1.2,
    fontSize: '11pt'
  };
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      style: _objectSpread({}, lineStyle),
      children: props.post.author ? props.post.author : ''
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      style: _objectSpread({
        opacity: 0.6
      }, lineStyle),
      children: props.post.datePublished ? Object(external_fecha_["format"])(new Date(props.post.datePublished), 'MMMM Do, YYYY') : ''
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      style: _objectSpread({}, lineStyle),
      children: props.post.authorTwitter && /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        style: {
          textDecoration: 'none',
          color: globals["a" /* globals */].primaryColor
        },
        href: `https://twitter.com/${props.post.authorTwitter}`,
        children: `@${props.post.authorTwitter}`
      })
    })]
  });
};
// CONCATENATED MODULE: ./components/BlogPost.tsx








const BlogPost = ({
  post
}) => {
  const {
    title,
    subtitle
  } = post;
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    style: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      width: "100%",
      padding: "0px 0px 100px 0px"
    },
    className: "jsx-2285729993",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(style_default.a, {
      id: "2285729993",
      children: [".blog-post{width:100%;max-width:1080px;}"]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(PostMeta, {
      post: post
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "jsx-2285729993" + " " + "blog-post",
      children: [post.bannerPhoto && /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        style: {
          width: "100%",
          maxWidth: "100%",
          margin: "0px"
        },
        src: post.bannerPhoto,
        className: "jsx-2285729993"
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        style: {
          padding: "50px 3vw 50px 3vw"
        },
        className: "jsx-2285729993",
        children: [title && /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
          style: {
            margin: "10px 0px 10px 0px",
            padding: 0,
            border: "none",
            fontSize: 46
          },
          className: "jsx-2285729993",
          children: title
        }), subtitle && /*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
          style: {
            margin: "10px 0px",
            padding: 0,
            border: "none",
            fontWeight: 400,
            opacity: "0.6"
          },
          className: "jsx-2285729993",
          children: subtitle
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("hr", {
          style: {
            height: "2px",
            background: globals["a" /* globals */].primaryColor,
            margin: "25px 0px",
            border: "none",
            borderRadius: 1
          },
          className: "jsx-2285729993"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Author, {
          post: post
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        style: {
          width: "100%",
          padding: "0px 3vw"
        },
        className: "jsx-2285729993",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Markdown, {
          source: post.content
        })
      })]
    })]
  });
};
// EXTERNAL MODULE: ./loader.ts
var loader = __webpack_require__("NGu5");

// CONCATENATED MODULE: ./pages/blog/[blog].tsx






function Post(props) {
  const {
    post
  } = props;
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(BlogPost, {
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
  const post = await Object(loader["b" /* loadPost */])(`blog/${params.blog}.md`);
  return {
    props: {
      post
    }
  };
};
/* harmony default export */ var _blog_ = __webpack_exports__["default"] = (Post);

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
/* unused harmony export loadMarkdownFile */
/* unused harmony export mdToPost */
/* unused harmony export loadMarkdownFiles */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return loadPost; });
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
  return await loadMarkdownFiles(`blog/*.md`).then(md => md.map(mdToPost).filter(p => p.published).sort((a, b) => (b.datePublished || 0) - (a.datePublished || 0)));
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
  const version = _globals.version = "0.4.3";
  const yourName = _globals.yourName = "lwlx.";
  const siteName = _globals.siteName = `dev.lwlx.xyz`;
  const siteDescription = _globals.siteDescription = "Dev / Sec / Ops | Cybersecurity blog";
  const siteCreationDate = _globals.siteCreationDate = "Oct 21, 2020 04:00:00 GMT";
  const twitterHandle = _globals.twitterHandle = "@0x0000005";
  const email = _globals.email = `lwlx@lwlx.xyz`;
  const url = _globals.url = "https://dev.lwlx.xyz";
  const primaryColor = _globals.primaryColor = `#1177AB`;
  const secondaryColor = _globals.secondaryColor = `#F07693`;
  const accentColor = _globals.accentColor = `#04060A`;
  const backgroundColor = _globals.backgroundColor = `#C9C0BE`;
  const googleAnalyticsId = _globals.googleAnalyticsId = `G-TZ2VB384DV`;
})(globals || (globals = {}));

/***/ }),

/***/ "uo/4":
/***/ (function(module, exports) {

module.exports = require("gray-matter");

/***/ }),

/***/ "waFX":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./archive/features.md": [
		"MDza",
		8
	],
	"./archive/the-ultimate-tech-stack.md": [
		"TStj",
		9
	],
	"./blog/Sick-Security-and-Dev-Tools.md": [
		"OMah",
		10
	],
	"./blog/abuse-WPAD-protocol-to-MitM-any-network.md": [
		"A0ZA",
		11
	],
	"./blog/consistent-x-device-encryption-in-javascript.md": [
		"O3H+",
		12
	],
	"./blog/features.md": [
		"43ik",
		13
	],
	"./blog/hacker101-ctf-photo-gallery.md": [
		"NpAA",
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