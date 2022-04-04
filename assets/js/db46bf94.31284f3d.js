"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9502],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=d(n),u=r,h=m["".concat(l,".").concat(u)]||m[u]||p[u]||i;return n?a.createElement(h,o(o({ref:t},s),{},{components:n})):a.createElement(h,o({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},55352:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return p}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=["components"],c={title:"Metadata Cache"},l=void 0,d={unversionedId:"metadata-cache",id:"version-5.0/metadata-cache",title:"Metadata Cache",description:"In v4 and later versions, we need to explicitly install @mikro-orm/reflection",source:"@site/versioned_docs/version-5.0/metadata-cache.md",sourceDirName:".",slug:"/metadata-cache",permalink:"/docs/5.0/metadata-cache",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-5.0/metadata-cache.md",tags:[],version:"5.0",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1649056298,formattedLastUpdatedAt:"4/4/2022",frontMatter:{title:"Metadata Cache"},sidebar:"docs",previous:{title:"Metadata Providers",permalink:"/docs/5.0/metadata-providers"},next:{title:"Schema Generator",permalink:"/docs/5.0/schema-generator"}},s={},p=[{value:"Automatic Invalidation",id:"automatic-invalidation",level:2},{value:"Disabling Metadata Cache",id:"disabling-metadata-cache",level:2},{value:"Pretty Printing",id:"pretty-printing",level:2},{value:"Using Different temp Folder",id:"using-different-temp-folder",level:2},{value:"Providing Custom Cache Adapter",id:"providing-custom-cache-adapter",level:2}],m={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"In v4 and later versions, we need to explicitly install ",(0,i.kt)("inlineCode",{parentName:"p"},"@mikro-orm/reflection"),"\nto use ",(0,i.kt)("inlineCode",{parentName:"p"},"TsMorphMetadataProvider"),".")),(0,i.kt)("p",null,"MikroORM allows different ways to ",(0,i.kt)("a",{parentName:"p",href:"/docs/5.0/metadata-providers"},"obtain entity metadata"),".\nOne way is to use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/dsherret/ts-morph"},(0,i.kt)("inlineCode",{parentName:"a"},"ts-morph"))," to read\nTypeScript source files of all entities to be able to detect all types. This\nprocess can be performance heavy and time-consuming. For this reason, metadata\ncache is automatically enabled for ",(0,i.kt)("inlineCode",{parentName:"p"},"TsMorphMetadataProvider"),". It can be optionally\nenabled for the other metadata providers, but it should not be needed."),(0,i.kt)("p",null,"After the discovery process ends, all metadata will be cached. By default,\n",(0,i.kt)("inlineCode",{parentName:"p"},"FileCacheAdapter")," will be used to store the cache inside ",(0,i.kt)("inlineCode",{parentName:"p"},"./temp")," folder to JSON\nfiles."),(0,i.kt)("p",null,"If we use folder based discovery, cache will be dependent on environment - if we\nrun via ts-node, the cache will be generated for TS files. To generate production\ncache, we can use the CLI command ",(0,i.kt)("inlineCode",{parentName:"p"},"mikro-orm cache:generate"),"."),(0,i.kt)("h2",{id:"automatic-invalidation"},"Automatic Invalidation"),(0,i.kt)("p",null,"Entity metadata are cached together with modified time of the source file, and every time\nthe cache is requested, it first checks if the cache is not invalid. This way we can forget\nabout the caching mechanism most of the time."),(0,i.kt)("p",null,"One case where we can end up needing to wipe the cache manually is when we work withing a\ngit branch where contents of entities folder differs. "),(0,i.kt)("h2",{id:"disabling-metadata-cache"},"Disabling Metadata Cache"),(0,i.kt)("p",null,"We can disable metadata caching via:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"await MikroORM.init({\n  cache: { enabled: false },\n  // ...\n});\n")),(0,i.kt)("h2",{id:"pretty-printing"},"Pretty Printing"),(0,i.kt)("p",null,"By default, cached metadata will be one line JSON string. You can force pretty printing it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"await MikroORM.init({\n  cache: { pretty: true },\n  // ...\n});\n")),(0,i.kt)("h2",{id:"using-different-temp-folder"},"Using Different temp Folder"),(0,i.kt)("p",null,"We can set the cache directory via:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"await MikroORM.init({\n  // defaults to `./temp`\n  cache: { options: { cacheDir: '...' } },\n  // ...\n});\n")),(0,i.kt)("h2",{id:"providing-custom-cache-adapter"},"Providing Custom Cache Adapter"),(0,i.kt)("p",null,"You can also implement your own cache adapter, for example to store the cache in redis.\nTo do so, just implement simple ",(0,i.kt)("inlineCode",{parentName:"p"},"CacheAdapter")," interface:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export interface CacheAdapter {\n\n  /**\n   * Gets the items under `name` key from the cache.\n   */\n  get(name: string): Promise<any>;\n\n  /**\n   * Sets the item to the cache. `origin` is used for cache invalidation and should reflect the change in data.\n   */\n  set(name: string, data: any, origin: string, expiration?: number): Promise<void>;\n\n  /**\n   * Clears all items stored in the cache.\n   */\n  clear(): Promise<void>;\n\n  /**\n   * Called inside `MikroORM.close()` Allows graceful shutdowns (e.g. for redis).\n   */\n  close?(): Promise<void>;\n\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export class RedisCacheAdapter implements CacheAdapter { ... }\n")),(0,i.kt)("p",null,"And provide the implementation in ",(0,i.kt)("inlineCode",{parentName:"p"},"cache.adapter")," option:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"await MikroORM.init({\n  cache: { adapter: RedisCacheAdapter, options: { ... } },\n  // ...\n});\n")))}u.isMDXComponent=!0}}]);