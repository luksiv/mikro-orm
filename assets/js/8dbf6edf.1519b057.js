"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[88037],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3914:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),a=["components"],s={title:"Installation & Usage"},l=void 0,p={unversionedId:"installation",id:"version-2.7/installation",title:"Installation & Usage",description:"First install the module via yarn or npm and do not forget to install the database driver as well:",source:"@site/versioned_docs/version-2.7/installation.md",sourceDirName:".",slug:"/installation",permalink:"/docs/2.7/installation",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-2.7/installation.md",tags:[],version:"2.7",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1643585396,formattedLastUpdatedAt:"1/30/2022",frontMatter:{title:"Installation & Usage"},sidebar:"version-2.7/docs",next:{title:"Defining entities",permalink:"/docs/2.7/defining-entities"}},c=[{value:"Entity discovery in TypeScript",id:"entity-discovery-in-typescript",children:[],level:2},{value:"Request context",id:"request-context",children:[],level:2}],u={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"First install the module via ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"npm")," and do not forget to install the database driver as well:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ yarn add mikro-orm mongodb # for mongo\n$ yarn add mikro-orm mysql2  # for mysql\n$ yarn add mikro-orm pg      # for postgresql\n$ yarn add mikro-orm sqlite  # for sqlite\n")),(0,i.kt)("p",null,"or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ npm i -s mikro-orm mongodb # for mongo\n$ npm i -s mikro-orm mysql2  # for mysql\n$ npm i -s mikro-orm pg      # for postgresql\n$ npm i -s mikro-orm sqlite  # for sqlite\n")),(0,i.kt)("p",null,"Next you will need to enable support for ",(0,i.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/decorators.html"},"decorators"),"\nin ",(0,i.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," via:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"experimentalDecorators": true\n')),(0,i.kt)("p",null,"Then call ",(0,i.kt)("inlineCode",{parentName:"p"},"MikroORM.init")," as part of bootstrapping your app:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const orm = await MikroORM.init({\n  entities: [Author, Book, BookTag],\n  dbName: 'my-db-name',\n  clientUrl: '...', // defaults to 'mongodb://localhost:27017' for mongodb driver\n  autoFlush: false, // read more here: https://mikro-orm.io/unit-of-work/\n});\nconsole.log(orm.em); // access EntityManager via `em` property\n")),(0,i.kt)("p",null,"You can also provide paths where you store your entities via ",(0,i.kt)("inlineCode",{parentName:"p"},"entitiesDirs")," array. Internally\nit uses ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/sindresorhus/globby"},(0,i.kt)("inlineCode",{parentName:"a"},"globby"))," so you can use\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/sindresorhus/globby#globbing-patterns"},"globbing patterns"),". "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const orm = await MikroORM.init({\n  entitiesDirs: ['./dist/app/**/entities'],\n  // ...\n});\n")),(0,i.kt)("p",null,"You should provide list of directories, not paths to entities directly. If you want to do that\ninstead, you should use ",(0,i.kt)("inlineCode",{parentName:"p"},"entities")," array and use ",(0,i.kt)("inlineCode",{parentName:"p"},"globby")," manually:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { sync } from 'globby';\n\nconst orm = await MikroORM.init({\n  entities: sync('./dist/app/**/entities/*.js').map(require),\n  // ...\n});\n")),(0,i.kt)("h2",{id:"entity-discovery-in-typescript"},"Entity discovery in TypeScript"),(0,i.kt)("p",null,"Internally, ",(0,i.kt)("inlineCode",{parentName:"p"},"MikroORM")," uses ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.7/metadata-cache"},"performs analysis")," of source files of entities\nto sniff types of all properties. This process can be slow if your project contains lots of\nfiles. To speed up the discovery process a bit, you can provide more accurate paths where your\nentity source files are: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const orm = await MikroORM.init({\n  entitiesDirs: ['./dist/entities'], // path to your JS entities (dist), relative to `baseDir`\n  entitiesDirsTs: ['./src/entities'], // path to your TS entities (source), relative to `baseDir`\n  // ...\n});\n")),(0,i.kt)("h2",{id:"request-context"},"Request context"),(0,i.kt)("p",null,"Then you will need to fork entity manager for each request so their identity maps will not\ncollide. To do so, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"RequestContext")," helper:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const app = express();\n\napp.use((req, res, next) => {\n  RequestContext.create(orm.em, next);\n});\n")),(0,i.kt)("p",null,"More info about ",(0,i.kt)("inlineCode",{parentName:"p"},"RequestContext")," is described ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.7/identity-map#request-context"},"here"),"."),(0,i.kt)("p",null,"Now you can start ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.7/defining-entities"},"defining your entities")," (in one of the ",(0,i.kt)("inlineCode",{parentName:"p"},"entitiesDirs")," folders)."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/2.7/#table-of-contents"},"\u2190"," Back to table of contents")))}d.isMDXComponent=!0}}]);