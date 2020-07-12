(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{236:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(4),r=n(12),i=(n(0),n(399)),o={id:"from-0-18",title:"Migration to 1.0.0"},c={id:"migration/from-0-18",isDocsHomePage:!1,title:"Migration to 1.0.0",description:"March 20th, 2019",source:"@site/docs/migration/from-0-18.md",permalink:"/docs/migration/from-0-18",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/migration/from-0-18.md",sidebar:"sidebar",previous:{title:"Contributing",permalink:"/docs/custom-codegen/contributing"},next:{title:"Migration from 0.13 to 0.18",permalink:"/docs/migration/from-0-13"}},p=[{value:"What has changed?",id:"what-has-changed",children:[{value:"New TypeScript Libraries",id:"new-typescript-libraries",children:[]}]},{value:"How to migrate?",id:"how-to-migrate",children:[]},{value:"Breaking Changes &amp; Semver",id:"breaking-changes--semver",children:[]}],l={rightToc:p};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"March 20th, 2019")),Object(i.b)("h2",{id:"what-has-changed"},"What has changed?"),Object(i.b)("p",null,"Our goals (and achievements) for 1.0.0 release was:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Rename all package from ",Object(i.b)("inlineCode",{parentName:"li"},"graphql-codegen-...")," to scoped packages ",Object(i.b)("inlineCode",{parentName:"li"},"@graphql-codegen/..."),"."),Object(i.b)("li",{parentName:"ul"},"Stabilize the core package and the YML configuration file."),Object(i.b)("li",{parentName:"ul"},"Remove the old, deprecated code from this repostory (everything related to ",Object(i.b)("inlineCode",{parentName:"li"},"flattenDocuments")," and ",Object(i.b)("inlineCode",{parentName:"li"},"buildSchemaContext"),")."),Object(i.b)("li",{parentName:"ul"},"Separate the CLI package from the core package, and create an easy-to-use and easy-to-consume core package."),Object(i.b)("li",{parentName:"ul"},"Add better support for running the codegen in non-node environments, by clearing unused dependencies and add support for tree shaking."),Object(i.b)("li",{parentName:"ul"},"Remove the dependency for Handlebars from this repository."),Object(i.b)("li",{parentName:"ul"},"Introduce a new, easy-to-use common base for plugins, based on ",Object(i.b)("inlineCode",{parentName:"li"},"Visitor")," pattern, that uses ",Object(i.b)("inlineCode",{parentName:"li"},"visit")," from ",Object(i.b)("inlineCode",{parentName:"li"},"graphql")," package."),Object(i.b)("li",{parentName:"ul"},"Better unit tests for all plugins packages, by use TypeScript compiler to compile each test result- makes it much easier to detect mismatches and invalid output."),Object(i.b)("li",{parentName:"ul"},"Refactor the entire TypeScript plugin, and create better and optimized output."),Object(i.b)("li",{parentName:"ul"},"Fix most of the GitHub issues."),Object(i.b)("li",{parentName:"ul"},"Update website and documentation for all plugins.")),Object(i.b)("h3",{id:"new-typescript-libraries"},"New TypeScript Libraries"),Object(i.b)("p",null,"During the refactor, we rewrote all TypeScript-related plugins. By doing that, we introducted some breaking changes."),Object(i.b)("p",null,"Before those changes, you had to depend on ",Object(i.b)("inlineCode",{parentName:"p"},"typescript-common")," plugin, and add ",Object(i.b)("inlineCode",{parentName:"p"},"typescript-server")," and ",Object(i.b)("inlineCode",{parentName:"p"},"typescript-client")," (and others) on top of it."),Object(i.b)("p",null,"Now, ",Object(i.b)("inlineCode",{parentName:"p"},"typescript")," plugin is the plugin you need to use for backend (it combines ",Object(i.b)("inlineCode",{parentName:"p"},"typescript-common")," and ",Object(i.b)("inlineCode",{parentName:"p"},"typescript-server"),"), and use ",Object(i.b)("inlineCode",{parentName:"p"},"typescript-operations")," on top of it for the client-side."),Object(i.b)("p",null,"The reason for this change is the fact that now ",Object(i.b)("inlineCode",{parentName:"p"},"typescript-operations")," uses ",Object(i.b)("inlineCode",{parentName:"p"},"Pick<>")," to create the client-side types, instead of generating tons of ",Object(i.b)("inlineCode",{parentName:"p"},"namepsace"),"s and ",Object(i.b)("inlineCode",{parentName:"p"},"interface"),"s."),Object(i.b)("h2",{id:"how-to-migrate"},"How to migrate?"),Object(i.b)("p",null,"First, the new packages have a different name, that means that you need to manually update those packages names, and not just it's version."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"graphql-code-generator")," package is now ",Object(i.b)("inlineCode",{parentName:"p"},"@graphql-codegen/cli")," and all other packages has been changes from ",Object(i.b)("inlineCode",{parentName:"p"},"graphql-codegen-...")," to ",Object(i.b)("inlineCode",{parentName:"p"},"@graphql-codegen/..."),"."),Object(i.b)("p",null,"So start by updating your ",Object(i.b)("inlineCode",{parentName:"p"},"package.json"),":"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Before:")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "devDependencies": {\n    "graphql-code-generator": "0.18.0",\n    "graphql-codegen-typescript-common": "0.18.0",\n    "graphql-codegen-typescript": "0.18.0",\n    "graphql-codegen-typescript-documents": "0.18.0"\n  }\n}\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"After:")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "devDependencies": {\n    "@graphql-codegen/cli": "^1.0.0",\n    "@graphql-codegen/typescript": "^1.0.0",\n    "@graphql-codegen/typescript-operations": "^1.0.0"\n  }\n}\n')),Object(i.b)("p",null,"Also, make sure to update your YML config file:"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Before"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"./my-file.ts:\n  schema: schema.json\n  plugins:\n    - typescript-common\n    - typescript-server\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"After:")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"./my-file.ts:\n  schema: schema.json\n  plugins:\n    - typescript\n")),Object(i.b)("p",null,"And for client-side:"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Before"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"./my-file.ts:\n  schema: schema.json\n  plugins:\n    - typescript-common\n    - typescript-client\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"After:")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"./my-file.ts:\n  schema: schema.json\n  plugins:\n    - typescript\n    - typescript-operations\n")),Object(i.b)("h2",{id:"breaking-changes--semver"},"Breaking Changes & Semver"),Object(i.b)("p",null,"We tried to avoid breaking changes, but it's not always possible. We had a lot of issues we couldn't fix before because we didn't want to introduce breaking changes."),Object(i.b)("p",null,"It was very hard for us to track breaking changes in the past, but it it's easier for us, and we promise to be semver-compatiable."),Object(i.b)("p",null,"You can find a list of all breaking changes in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/dotansimha/graphql-code-generator/releases/"}),"GitHub Releases page"),"."),Object(i.b)("p",null,"We also created a new plugin, called ",Object(i.b)("inlineCode",{parentName:"p"},"typescript-compatibility")," that generates backward compatibility for the ",Object(i.b)("inlineCode",{parentName:"p"},"typescript-operations")," and ",Object(i.b)("inlineCode",{parentName:"p"},"typescript-react-apollo")," plugins.\nIt will generates for you types that are pointing to the new form of types. It supports ",Object(i.b)("em",{parentName:"p"},"most")," of the use-cases."),Object(i.b)("p",null,"To use it, start by installing from NPM:"),Object(i.b)("p",null,"\\$ yarn add -D @graphql-codegen/typescript-compatibility"),Object(i.b)("p",null,"Then, add it to your codegen configuration:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"./my-file.ts:\n  schema: schema.json\n  plugins:\n    - typescript\n    - typescript-operations\n    - typescript-compatibility\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note: If ",Object(i.b)("inlineCode",{parentName:"p"},"typescript-react-apollo")," plugin also specified in your config file, it will generate backward-compatibily for it.")))}s.isMDXComponent=!0},399:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=s(n),u=a,d=b["".concat(o,".").concat(u)]||b[u]||m[u]||i;return n?r.a.createElement(d,c(c({ref:t},l),{},{components:n})):r.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);