"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2954],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||r;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5231:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var a=n(3117),i=n(102),r=(n(7294),n(3905)),o=["components"],s={title:"Using Multiple Schemas"},l=void 0,c={unversionedId:"multiple-schemas",id:"multiple-schemas",title:"Using Multiple Schemas",description:"In MySQL and PostgreSQL is is possible to define your entities in multiple schemas. In MySQL",source:"@site/docs/multiple-schemas.md",sourceDirName:".",slug:"/multiple-schemas",permalink:"/docs/next/multiple-schemas",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/multiple-schemas.md",tags:[],version:"current",lastUpdatedBy:"asiFarran",lastUpdatedAt:1646061161,formattedLastUpdatedAt:"2/28/2022",frontMatter:{title:"Using Multiple Schemas"},sidebar:"docs",previous:{title:"Using Entity Constructors",permalink:"/docs/next/entity-constructors"},next:{title:"Using native BigInt PKs (MySQL and PostgreSQL)",permalink:"/docs/next/using-bigint-pks"}},u=[{value:"Wildcard Schema",id:"wildcard-schema",children:[{value:"Note about migrations",id:"note-about-migrations",children:[],level:3}],level:2}],p={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In MySQL and PostgreSQL is is possible to define your entities in multiple schemas. In MySQL\nterminology, it is called database, but from implementation point of view, it is a schema. "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"To use multiple schemas, your connection needs to have access to all of them (multiple\nconnections are not supported in a single MikroORM instance).")),(0,r.kt)("p",null,"All you need to do is simply define the schema name via ",(0,r.kt)("inlineCode",{parentName:"p"},"schema")," options, or\ntable name including schema name in ",(0,r.kt)("inlineCode",{parentName:"p"},"tableName")," option:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"@Entity({ schema: 'first_schema' })\nexport class Foo { ... }\n\n// or alternatively we can specify it inside custom table name\n@Entity({ tableName: 'second_schema.bar' })\nexport class Bar { ... }\n")),(0,r.kt)("p",null,"Then use those entities as usual. Resulting SQL queries will use this ",(0,r.kt)("inlineCode",{parentName:"p"},"tableName")," value as a\ntable name so as long as your connection has access to given schema, everything should work\nas expected."),(0,r.kt)("p",null,"You can also query for entity in specific schema via ",(0,r.kt)("inlineCode",{parentName:"p"},"EntityManager"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"EntityRepository")," or\n",(0,r.kt)("inlineCode",{parentName:"p"},"QueryBuilder"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const user = await em.findOne(User, { ... }, { schema: 'client-123' });\n")),(0,r.kt)("p",null,"To create entity in specific schema, you will need to use ",(0,r.kt)("inlineCode",{parentName:"p"},"QueryBuilder"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const qb = em.createQueryBuilder(User);\nawait qb.insert({ email: 'foo@bar.com' }).withSchema('client-123');\n")),(0,r.kt)("h2",{id:"wildcard-schema"},"Wildcard Schema"),(0,r.kt)("p",null,"Since v5, MikroORM also supports defining entities that can exist in multiple\nschemas. To do that, we just specify wildcard schema:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"@Entity({ schema: '*' })\nexport class Book {\n\n  @PrimaryKey()\n  id!: number;\n\n  @Property({ nullable: true })\n  name?: string;\n\n  @ManyToOne(() => Author, { nullable: true, onDelete: 'cascade' })\n  author?: Author;\n\n  @ManyToOne(() => Book, { nullable: true })\n  basedOn?: Book;\n\n}\n")),(0,r.kt)("p",null,"Entities like this will be by default ignored when using ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaGenerator"),",\nas we need to specify which schema to use. For that we need to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"schema"),"\noption of the ",(0,r.kt)("inlineCode",{parentName:"p"},"createSchema/updateSchema/dropSchema")," methods or the ",(0,r.kt)("inlineCode",{parentName:"p"},"--schema"),"\nCLI parameter."),(0,r.kt)("p",null,"On runtime, the wildcard schema will be replaced with either ",(0,r.kt)("inlineCode",{parentName:"p"},"FindOptions.schema"),",\nor with the ",(0,r.kt)("inlineCode",{parentName:"p"},"schema")," option from the ORM config."),(0,r.kt)("h3",{id:"note-about-migrations"},"Note about migrations"),(0,r.kt)("p",null,"Currently, this is not supported via migrations, they will always ignore\nwildcard schema entities, and ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaGenerator")," needs to be used explicitly.\nGiven the dynamic nature of such entities, it makes sense to only sync the\nschema dynamically, e.g. in an API endpoint. We could still use the ORM\nmigrations, but we need to add the dynamic schema queries manually to migration\nfiles. It makes sense to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"safe")," mode for such queries."))}m.isMDXComponent=!0}}]);