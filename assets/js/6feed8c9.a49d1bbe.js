"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[11610],{3905:function(e,t,r){r.d(t,{Zo:function(){return o},kt:function(){return u}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),m=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},o=function(e){var t=m(e.components);return a.createElement(i.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,o=d(e,["components","mdxType","originalType","parentName"]),s=m(r),u=n,c=s["".concat(i,".").concat(u)]||s[u]||k[u]||l;return r?a.createElement(c,p(p({ref:t},o),{},{components:r})):a.createElement(c,p({ref:t},o))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,p=new Array(l);p[0]=s;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d.mdxType="string"==typeof e?e:n,p[1]=d;for(var m=2;m<l;m++)p[m]=r[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},74602:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return d},contentTitle:function(){return i},metadata:function(){return m},toc:function(){return o},default:function(){return s}});var a=r(83117),n=r(80102),l=(r(67294),r(3905)),p=["components"],d={id:"knex.knex-1.orderby",title:"Interface: OrderBy<TRecord, TResult>",sidebar_label:"OrderBy",custom_edit_url:null,hide_title:!0},i="Interface: OrderBy<TRecord, TResult>",m={unversionedId:"api/interfaces/knex.knex-1.orderby",id:"version-4.5/api/interfaces/knex.knex-1.orderby",title:"Interface: OrderBy<TRecord, TResult>",description:"knex.Knex.OrderBy",source:"@site/versioned_docs/version-4.5/api/interfaces/knex.knex-1.orderby.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/knex.knex-1.orderby",permalink:"/docs/api/interfaces/knex.knex-1.orderby",editUrl:null,tags:[],version:"4.5",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1643585396,formattedLastUpdatedAt:"1/30/2022",frontMatter:{id:"knex.knex-1.orderby",title:"Interface: OrderBy<TRecord, TResult>",sidebar_label:"OrderBy",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"OracleDbConnectionConfig",permalink:"/docs/api/interfaces/knex.knex-1.oracledbconnectionconfig"},next:{title:"PgConnectionConfig",permalink:"/docs/api/interfaces/knex.knex-1.pgconnectionconfig"}},o=[{value:"Type parameters",id:"type-parameters",children:[],level:2},{value:"Callable",id:"callable",children:[{value:"Parameters:",id:"parameters",children:[],level:4},{value:"Parameters:",id:"parameters-1",children:[],level:4},{value:"Parameters:",id:"parameters-2",children:[],level:4},{value:"Parameters:",id:"parameters-3",children:[],level:4}],level:2}],k={toc:o};function s(e){var t=e.components,r=(0,n.Z)(e,p);return(0,l.kt)("wrapper",(0,a.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"interface-orderbytrecord-tresult"},"Interface: OrderBy<TRecord, TResult",">"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",(0,l.kt)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".OrderBy"),(0,l.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"TRecord")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"any"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"TResult")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"unknown"),"[]")))),(0,l.kt)("h2",{id:"callable"},"Callable"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"OrderBy"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"columnName"),": ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<any, any",">"," ","|"," keyof TRecord, ",(0,l.kt)("inlineCode",{parentName:"p"},"order?"),": ",(0,l.kt)("em",{parentName:"p"},"asc")," ","|"," ",(0,l.kt)("em",{parentName:"p"},"desc"),"): ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),(0,l.kt)("h4",{id:"parameters"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"columnName")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<any, any",">"," ","|"," keyof TRecord")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"order?")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"asc")," ","|"," ",(0,l.kt)("em",{parentName:"td"},"desc"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),(0,l.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1369"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"OrderBy"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"columnName"),": ",(0,l.kt)("em",{parentName:"p"},"string")," ","|"," ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<any, any",">",", ",(0,l.kt)("inlineCode",{parentName:"p"},"order?"),": ",(0,l.kt)("em",{parentName:"p"},"string"),"): ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),(0,l.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"columnName")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("a",{parentName:"td",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<any, any",">")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"order?")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"string"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),(0,l.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1373"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"OrderBy"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"columnDefs"),": (keyof TRecord ","|"," ",(0,l.kt)("em",{parentName:"p"},"Readonly"),"<{ ",(0,l.kt)("inlineCode",{parentName:"p"},"column"),": ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<any, any",">"," ","|"," keyof TRecord ; ",(0,l.kt)("inlineCode",{parentName:"p"},"order?"),": ",(0,l.kt)("em",{parentName:"p"},"asc")," ","|"," ",(0,l.kt)("em",{parentName:"p"},"desc"),"  }",">",")[]): ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),(0,l.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"columnDefs")),(0,l.kt)("td",{parentName:"tr",align:"left"},"(keyof TRecord ","|"," ",(0,l.kt)("em",{parentName:"td"},"Readonly"),"<{ ",(0,l.kt)("inlineCode",{parentName:"td"},"column"),": ",(0,l.kt)("a",{parentName:"td",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<any, any",">"," ","|"," keyof TRecord ; ",(0,l.kt)("inlineCode",{parentName:"td"},"order?"),": ",(0,l.kt)("em",{parentName:"td"},"asc")," ","|"," ",(0,l.kt)("em",{parentName:"td"},"desc"),"  }",">",")[]")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),(0,l.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1374"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"OrderBy"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"columnDefs"),": (",(0,l.kt)("em",{parentName:"p"},"string")," ","|"," ",(0,l.kt)("em",{parentName:"p"},"Readonly"),"<{ ",(0,l.kt)("inlineCode",{parentName:"p"},"column"),": ",(0,l.kt)("em",{parentName:"p"},"string")," ","|"," ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<any, any",">"," ; ",(0,l.kt)("inlineCode",{parentName:"p"},"order?"),": ",(0,l.kt)("em",{parentName:"p"},"string"),"  }",">",")[]): ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),(0,l.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"columnDefs")),(0,l.kt)("td",{parentName:"tr",align:"left"},"(",(0,l.kt)("em",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("em",{parentName:"td"},"Readonly"),"<{ ",(0,l.kt)("inlineCode",{parentName:"td"},"column"),": ",(0,l.kt)("em",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("a",{parentName:"td",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<any, any",">"," ; ",(0,l.kt)("inlineCode",{parentName:"td"},"order?"),": ",(0,l.kt)("em",{parentName:"td"},"string"),"  }",">",")[]")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),(0,l.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1382"))}s.isMDXComponent=!0}}]);