"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[636],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(t),f=i,k=m["".concat(c,".").concat(f)]||m[f]||d[f]||a;return t?r.createElement(k,l(l({ref:n},s),{},{components:t})):r.createElement(k,l({ref:n},s))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},51234:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var r=t(83117),i=t(80102),a=(t(67294),t(3905)),l=["components"],o={id:"knex.SchemaDifference",title:"Interface: SchemaDifference",sidebar_label:"SchemaDifference",custom_edit_url:null},c=void 0,p={unversionedId:"api/interfaces/knex.SchemaDifference",id:"api/interfaces/knex.SchemaDifference",title:"Interface: SchemaDifference",description:"knex.SchemaDifference",source:"@site/docs/api/interfaces/knex.SchemaDifference.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/knex.SchemaDifference",permalink:"/docs/next/api/interfaces/knex.SchemaDifference",editUrl:null,tags:[],version:"current",frontMatter:{id:"knex.SchemaDifference",title:"Interface: SchemaDifference",sidebar_label:"SchemaDifference",custom_edit_url:null},sidebar:"API",previous:{title:"RunQueryBuilder",permalink:"/docs/next/api/interfaces/knex.RunQueryBuilder"},next:{title:"SelectQueryBuilder",permalink:"/docs/next/api/interfaces/knex.SelectQueryBuilder"}},s=[{value:"Properties",id:"properties",children:[{value:"changedTables",id:"changedtables",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"fromSchema",id:"fromschema",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"newNamespaces",id:"newnamespaces",children:[{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"newTables",id:"newtables",children:[{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3},{value:"orphanedForeignKeys",id:"orphanedforeignkeys",children:[{value:"Defined in",id:"defined-in-4",children:[],level:4}],level:3},{value:"removedNamespaces",id:"removednamespaces",children:[{value:"Defined in",id:"defined-in-5",children:[],level:4}],level:3},{value:"removedTables",id:"removedtables",children:[{value:"Defined in",id:"defined-in-6",children:[],level:4}],level:3}],level:2}],d={toc:s};function m(e){var n=e.components,t=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../modules/knex"},"knex"),".SchemaDifference"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"changedtables"},"changedTables"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"changedTables"),": ",(0,a.kt)("a",{parentName:"p",href:"../modules/core#dictionary"},(0,a.kt)("inlineCode",{parentName:"a"},"Dictionary")),"<",(0,a.kt)("a",{parentName:"p",href:"knex.TableDifference"},(0,a.kt)("inlineCode",{parentName:"a"},"TableDifference")),">"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/02e2278/packages/knex/src/typings.ts#L99"},"packages/knex/src/typings.ts:99")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"fromschema"},"fromSchema"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"fromSchema"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"DatabaseSchema")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/02e2278/packages/knex/src/typings.ts#L103"},"packages/knex/src/typings.ts:103")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"newnamespaces"},"newNamespaces"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"newNamespaces"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Set"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/02e2278/packages/knex/src/typings.ts#L97"},"packages/knex/src/typings.ts:97")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"newtables"},"newTables"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"newTables"),": ",(0,a.kt)("a",{parentName:"p",href:"../modules/core#dictionary"},(0,a.kt)("inlineCode",{parentName:"a"},"Dictionary")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"DatabaseTable"),">"),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/02e2278/packages/knex/src/typings.ts#L98"},"packages/knex/src/typings.ts:98")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"orphanedforeignkeys"},"orphanedForeignKeys"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"orphanedForeignKeys"),": ",(0,a.kt)("a",{parentName:"p",href:"knex.ForeignKey"},(0,a.kt)("inlineCode",{parentName:"a"},"ForeignKey")),"[]"),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/02e2278/packages/knex/src/typings.ts#L102"},"packages/knex/src/typings.ts:102")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"removednamespaces"},"removedNamespaces"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"removedNamespaces"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Set"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/02e2278/packages/knex/src/typings.ts#L101"},"packages/knex/src/typings.ts:101")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"removedtables"},"removedTables"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"removedTables"),": ",(0,a.kt)("a",{parentName:"p",href:"../modules/core#dictionary"},(0,a.kt)("inlineCode",{parentName:"a"},"Dictionary")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"DatabaseTable"),">"),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/02e2278/packages/knex/src/typings.ts#L100"},"packages/knex/src/typings.ts:100")))}m.isMDXComponent=!0}}]);