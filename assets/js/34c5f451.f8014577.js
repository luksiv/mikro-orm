"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4726],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),m=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=m(n),g=r,d=u["".concat(s,".").concat(g)]||u[g]||c[g]||a;return n?i.createElement(d,o(o({ref:t},p),{},{components:n})):i.createElement(d,o({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var m=2;m<a;m++)o[m]=n[m];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},16139:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return c}});var i=n(83117),r=n(80102),a=(n(67294),n(3905)),o=["components"],l={title:"Migrations"},s=void 0,m={unversionedId:"migrations",id:"version-3.6/migrations",title:"Migrations",description:"MikroORM has integrated support for migrations via umzug.",source:"@site/versioned_docs/version-3.6/migrations.md",sourceDirName:".",slug:"/migrations",permalink:"/docs/3.6/migrations",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-3.6/migrations.md",tags:[],version:"3.6",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1648026140,formattedLastUpdatedAt:"3/23/2022",frontMatter:{title:"Migrations"},sidebar:"version-3.6/docs",previous:{title:"Entity Generator",permalink:"/docs/3.6/entity-generator"},next:{title:"Read Replica Connections",permalink:"/docs/3.6/read-connections"}},p={},c=[{value:"Migration class",id:"migration-class",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Using via CLI",id:"using-via-cli",level:2},{value:"Using the Migrator programmatically",id:"using-the-migrator-programmatically",level:2},{value:"Limitations",id:"limitations",level:2},{value:"MySQL",id:"mysql",level:3}],u={toc:c};function g(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"MikroORM has integrated support for migrations via ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/sequelize/umzug"},"umzug"),".\nIt allows you to generate migrations with current schema differences."),(0,a.kt)("p",null,"By default, each migration will be all executed inside a transaction, and all of them will\nbe wrapped in one master transaction, so if one of them fails, everything will be rolled back. "),(0,a.kt)("h2",{id:"migration-class"},"Migration class"),(0,a.kt)("p",null,"Migrations are classes that extend Migration abstract class:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export class Migration20191019195930 extends Migration {\n\n  async up(): Promise<void> {\n    this.addSql('select 1 + 1');\n  }\n\n}\n")),(0,a.kt)("p",null,"To support undoing those changed, you can implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"down")," method, which throws an error by default. "),(0,a.kt)("p",null,"Migrations are by default wrapped in a transaction. You can override this behaviour on\nper migration basis by implementing the ",(0,a.kt)("inlineCode",{parentName:"p"},"isTransactional(): boolean")," method."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Configuration")," object and driver instance are available in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Migration")," class context."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"await MikroORM.init({\n  // default values:\n  migrations: {\n    tableName: 'mikro_orm_migrations', // name of database table with log of executed transactions\n    path: './migrations', // path to the folder with migrations\n    pattern: /^[\\w-]+\\d+\\.ts$/, // regex pattern for the migration files\n    transactional: true, // wrap each migration in a transaction\n    disableForeignKeys: true, // wrap statements with `set foreign_key_checks = 0` or equivalent\n    allOrNothing: true, // wrap all migrations in master transaction\n    dropTables: true, // allow to disable table dropping\n    safe: false, // allow to disable table and column dropping\n    emit: 'ts', // migration generation mode\n  },\n})\n")),(0,a.kt)("h2",{id:"using-via-cli"},"Using via CLI"),(0,a.kt)("p",null,"You can use it via CLI: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx mikro-orm migration:create   # Create new migration with current schema diff\nnpx mikro-orm migration:up       # Migrate up to the latest version\nnpx mikro-orm migration:down     # Migrate one step down\nnpx mikro-orm migration:list     # List all executed migrations\nnpx mikro-orm migration:pending  # List all pending migrations\n")),(0,a.kt)("p",null,"For ",(0,a.kt)("inlineCode",{parentName:"p"},"migration:up")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"migration:down")," commands you can specify ",(0,a.kt)("inlineCode",{parentName:"p"},"--from")," (",(0,a.kt)("inlineCode",{parentName:"p"},"-f"),"), ",(0,a.kt)("inlineCode",{parentName:"p"},"--to")," (",(0,a.kt)("inlineCode",{parentName:"p"},"-t"),")\nand ",(0,a.kt)("inlineCode",{parentName:"p"},"--only")," (",(0,a.kt)("inlineCode",{parentName:"p"},"-o"),") options to run only a subset of migrations:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx mikro-orm migration:up --from 2019101911 --to 2019102117  # the same as above\nnpx mikro-orm migration:up --only 2019101923                  # apply a single migration\nnpx mikro-orm migration:down --to 0                           # migratee down all migrations\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"To run TS migration files, you will need to ",(0,a.kt)("a",{parentName:"p",href:"/docs/3.6/installation"},"enable ",(0,a.kt)("inlineCode",{parentName:"a"},"useTsNode")," flag"),"\nin your ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),".")),(0,a.kt)("h2",{id:"using-the-migrator-programmatically"},"Using the Migrator programmatically"),(0,a.kt)("p",null,"Or you can create a simple script where you initialize MikroORM like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="./migrate.ts"',title:'"./migrate.ts"'},"import { MikroORM } from 'mikro-orm';\n\n(async () => {\n  const orm = await MikroORM.init({\n    dbName: 'your-db-name',\n    // ...\n  });\n\n  const migrator = orm.getMigrator();\n  await migrator.createMigration(); // creates file Migration20191019195930.ts\n  await migrator.up(); // runs migrations up to the latest\n  await migrator.up('name'); // runs only given migration, up\n  await migrator.up({ to: 'up-to-name' }); // runs migrations up to given version\n  await migrator.down(); // migrates one step down\n  await migrator.down('name'); // runs only given migration, down\n  await migrator.down({ to: 'down-to-name' }); // runs migrations down to given version\n  await migrator.down({ to: 0 }); // migrates down to the first version\n\n  await orm.close(true);\n})();\n")),(0,a.kt)("p",null,"Then run this script via ",(0,a.kt)("inlineCode",{parentName:"p"},"ts-node")," (or compile it to plain JS and use ",(0,a.kt)("inlineCode",{parentName:"p"},"node"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ ts-node migrate\n")),(0,a.kt)("h2",{id:"limitations"},"Limitations"),(0,a.kt)("h3",{id:"mysql"},"MySQL"),(0,a.kt)("p",null,"There is no way to rollback DDL changes in MySQL. An implicit commit is forced for those\nqueries automatically, so transactions are not working as expected. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/mikro-orm/mikro-orm/issues/217"},"https://github.com/mikro-orm/mikro-orm/issues/217")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://dev.mysql.com/doc/refman/5.7/en/implicit-commit.html"},"https://dev.mysql.com/doc/refman/5.7/en/implicit-commit.html"))))}g.isMDXComponent=!0}}]);