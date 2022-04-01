"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[261],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),m=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=m(n),u=a,d=g["".concat(l,".").concat(u)]||g[u]||c[u]||r;return n?i.createElement(d,o(o({ref:t},p),{},{components:n})):i.createElement(d,o({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var m=2;m<r;m++)o[m]=n[m];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},84504:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return c}});var i=n(83117),a=n(80102),r=(n(67294),n(3905)),o=["components"],s={title:"Migrations"},l=void 0,m={unversionedId:"migrations",id:"version-5.0/migrations",title:"Migrations",description:"To use migrations we need to first install @mikro-orm/migrations package.",source:"@site/versioned_docs/version-5.0/migrations.md",sourceDirName:".",slug:"/migrations",permalink:"/docs/5.0/migrations",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-5.0/migrations.md",tags:[],version:"5.0",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1648803288,formattedLastUpdatedAt:"4/1/2022",frontMatter:{title:"Migrations"},sidebar:"docs",previous:{title:"Property Validation",permalink:"/docs/5.0/property-validation"},next:{title:"Seeding",permalink:"/docs/5.0/seeding"}},p={},c=[{value:"Migration class",id:"migration-class",level:2},{value:"Initial migration",id:"initial-migration",level:2},{value:"Snapshots",id:"snapshots",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Running migrations in production",id:"running-migrations-in-production",level:2},{value:"Using custom <code>MigrationGenerator</code>",id:"using-custom-migrationgenerator",level:2},{value:"Using via CLI",id:"using-via-cli",level:2},{value:"Using the Migrator programmatically",id:"using-the-migrator-programmatically",level:2},{value:"Providing transaction context",id:"providing-transaction-context",level:2},{value:"Importing migrations statically",id:"importing-migrations-statically",level:2},{value:"Limitations",id:"limitations",level:2},{value:"MySQL",id:"mysql",level:3}],g={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"To use migrations we need to first install ",(0,r.kt)("inlineCode",{parentName:"p"},"@mikro-orm/migrations")," package.")),(0,r.kt)("p",null,"MikroORM has integrated support for migrations via ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sequelize/umzug"},"umzug"),".\nIt allows we to generate migrations with current schema differences."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Since v5, migrations are stored without extension.")),(0,r.kt)("p",null,"By default, each migration will be all executed inside a transaction, and all of them will\nbe wrapped in one master transaction, so if one of them fails, everything will be rolled back. "),(0,r.kt)("h2",{id:"migration-class"},"Migration class"),(0,r.kt)("p",null,"Migrations are classes that extend Migration abstract class:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Migration } from '@mikro-orm/migrations';\n\nexport class Migration20191019195930 extends Migration {\n\n  async up(): Promise<void> {\n    this.addSql('select 1 + 1');\n  }\n\n}\n")),(0,r.kt)("p",null,"To support undoing those changed, we can implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"down")," method, which throws an error by default. "),(0,r.kt)("p",null,"Migrations are by default wrapped in a transaction. You can override this behaviour on\nper migration basis by implementing the ",(0,r.kt)("inlineCode",{parentName:"p"},"isTransactional(): boolean")," method."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Configuration")," object and driver instance are available in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Migration")," class context."),(0,r.kt)("p",null,"You can execute queries in the migration via ",(0,r.kt)("inlineCode",{parentName:"p"},"Migration.execute()")," method, which\nwill run queries in the same transaction as the rest of the migration. The\n",(0,r.kt)("inlineCode",{parentName:"p"},"Migration.addSql()")," method also accepts instances of knex. Knex instance can be\naccessed via ",(0,r.kt)("inlineCode",{parentName:"p"},"Migration.getKnex()"),"; "),(0,r.kt)("h2",{id:"initial-migration"},"Initial migration"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This is optional and only needed for the specific use case, when both entities and schema already exist.")),(0,r.kt)("p",null,"If we want to start using migrations, and we already have the schema generated,\nwe can do so by creating so called initial migration:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Initial migration can be created only if there are no migrations previously\ngenerated or executed. ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npx mikro-orm migration:create --initial\n")),(0,r.kt)("p",null,"This will create the initial migration, containing the schema dump from\n",(0,r.kt)("inlineCode",{parentName:"p"},"schema:create")," command. The migration will be automatically marked as executed. "),(0,r.kt)("h2",{id:"snapshots"},"Snapshots"),(0,r.kt)("p",null,"Creating new migration will automatically save the target schema snapshot into\nmigrations folder. This snapshot will be then used if we try to create new migration,\ninstead of using current database schema. This means that if we try to create new\nmigration before we run the pending ones, we still get the right schema diff."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Snapshots should be versioned just like the regular migration files.")),(0,r.kt)("p",null,"Snapshotting can be disabled via ",(0,r.kt)("inlineCode",{parentName:"p"},"migrations.snapshot: false")," in the ORM config."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Since v5, ",(0,r.kt)("inlineCode",{parentName:"p"},"umzug")," 3.0 is used, and ",(0,r.kt)("inlineCode",{parentName:"p"},"pattern")," option has been replaced with ",(0,r.kt)("inlineCode",{parentName:"p"},"glob"),".")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"migrations.path")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"migrations.pathTs")," works the same way as ",(0,r.kt)("inlineCode",{parentName:"p"},"entities")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"entitiesTs")," in entity discovery.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"await MikroORM.init({\n  // default values:\n  migrations: {\n    tableName: 'mikro_orm_migrations', // name of database table with log of executed transactions\n    path: './migrations', // path to the folder with migrations\n    pathTs: undefined, // path to the folder with TS migrations (if used, we should put path to compiled files in `path`)\n    glob: '!(*.d).{js,ts}', // how to match migration files (all .js and .ts files, but not .d.ts)\n    transactional: true, // wrap each migration in a transaction\n    disableForeignKeys: true, // wrap statements with `set foreign_key_checks = 0` or equivalent\n    allOrNothing: true, // wrap all migrations in master transaction\n    dropTables: true, // allow to disable table dropping\n    safe: false, // allow to disable table and column dropping\n    snapshot: true, // save snapshot when creating new migrations\n    emit: 'ts', // migration generation mode\n    generator: TSMigrationGenerator, // migration generator, e.g. to allow custom formatting\n  },\n})\n")),(0,r.kt)("h2",{id:"running-migrations-in-production"},"Running migrations in production"),(0,r.kt)("p",null,"In production environment we might want to use compiled migration files. Since v5,\nthis should work almost out of box, all we need to do is to configure the migration\npath accordingly:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { MikroORM, Utils } from '@mikro-orm/core';\n\nawait MikroORM.init({\n  migrations: {\n    path: 'dist/migrations',\n    pathTs: 'src/migrations',\n  },\n  // or alternatively\n  // migrations: {\n  //   path: Utils.detectTsNode() ? 'src/migrations' : 'dist/migrations',\n  // },\n  // ...\n});\n")),(0,r.kt)("p",null,"This should allow using CLI to generate TS migration files (as in CLI we probably\nhave TS support enabled), while using compiled JS files in production, where ts-node\nis not registered."),(0,r.kt)("h2",{id:"using-custom-migrationgenerator"},"Using custom ",(0,r.kt)("inlineCode",{parentName:"h2"},"MigrationGenerator")),(0,r.kt)("p",null,"When we generate new migrations, ",(0,r.kt)("inlineCode",{parentName:"p"},"MigrationGenerator")," class is responsible for\ngenerating the file contents. We can provide our own implementation to do things\nlike formatting the SQL statement. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { TSMigrationGenerator } from '@mikro-orm/migrations';\nimport { format } from 'sql-formatter';\n\nclass CustomMigrationGenerator extends TSMigrationGenerator {\n\n  generateMigrationFile(className: string, diff: { up: string[]; down: string[] }): string {\n    const comment = '// this file was generated via custom migration generator\\n\\n';\n    return comment + super.generateMigrationFile(className, diff);\n  }\n\n  createStatement(sql: string, padLeft: number): string {\n    sql = format(sql, { language: 'postgresql' });\n    // a bit of indenting magic\n    sql = sql.split('\\n').map((l, i) => i === 0 ? l : `${' '.repeat(padLeft + 13)}${l}`).join('\\n');\n\n    return super.createStatement(sql, padLeft);\n  }\n\n}\n\nawait MikroORM.init({\n  // ...\n  migrations: {\n    generator: CustomMigrationGenerator,\n  },\n});\n")),(0,r.kt)("h2",{id:"using-via-cli"},"Using via CLI"),(0,r.kt)("p",null,"You can use it via CLI: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npx mikro-orm migration:create   # Create new migration with current schema diff\nnpx mikro-orm migration:up       # Migrate up to the latest version\nnpx mikro-orm migration:down     # Migrate one step down\nnpx mikro-orm migration:list     # List all executed migrations\nnpx mikro-orm migration:pending  # List all pending migrations\nnpx mikro-orm migration:fresh    # Drop the database and migrate up to the latest version\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"To create blank migration file, we can use\n",(0,r.kt)("inlineCode",{parentName:"p"},"npx mikro-orm migration:create --blank"),".")),(0,r.kt)("p",null,"For ",(0,r.kt)("inlineCode",{parentName:"p"},"migration:up")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"migration:down")," commands we can specify ",(0,r.kt)("inlineCode",{parentName:"p"},"--from")," (",(0,r.kt)("inlineCode",{parentName:"p"},"-f"),"), ",(0,r.kt)("inlineCode",{parentName:"p"},"--to")," (",(0,r.kt)("inlineCode",{parentName:"p"},"-t"),")\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"--only")," (",(0,r.kt)("inlineCode",{parentName:"p"},"-o"),") options to run only a subset of migrations:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npx mikro-orm migration:up --from 2019101911 --to 2019102117  # the same as above\nnpx mikro-orm migration:up --only 2019101923                  # apply a single migration\nnpx mikro-orm migration:down --to 0                           # migrate down all migrations\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"To run TS migration files, we will need to ",(0,r.kt)("a",{parentName:"p",href:"/docs/5.0/installation#setting-up-the-commandline-tool"},"enable ",(0,r.kt)("inlineCode",{parentName:"a"},"useTsNode")," flag"),"\nin our ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),".")),(0,r.kt)("p",null,"For the ",(0,r.kt)("inlineCode",{parentName:"p"},"migration:fresh")," command we can specify ",(0,r.kt)("inlineCode",{parentName:"p"},"--seed")," to seed the database after migrating."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npx mikro-orm migration:fresh --seed              # seed the database with the default database seeder\nnpx mikro-orm migration:fresh --seed=UsersSeeder  # seed the database with the UsersSeeder\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can specify the default database seeder in the orm config with the key ",(0,r.kt)("inlineCode",{parentName:"p"},"config.seeder.defaultSeeder"))),(0,r.kt)("h2",{id:"using-the-migrator-programmatically"},"Using the Migrator programmatically"),(0,r.kt)("p",null,"Or we can create a simple script where we initialize MikroORM like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./migrate.ts"',title:'"./migrate.ts"'},"import { MikroORM } from '@mikro-orm/core';\n\n(async () => {\n  const orm = await MikroORM.init({\n    dbName: 'our-db-name',\n    // ...\n  });\n\n  const migrator = orm.getMigrator();\n  await migrator.createMigration(); // creates file Migration20191019195930.ts\n  await migrator.up(); // runs migrations up to the latest\n  await migrator.up('name'); // runs only given migration, up\n  await migrator.up({ to: 'up-to-name' }); // runs migrations up to given version\n  await migrator.down(); // migrates one step down\n  await migrator.down('name'); // runs only given migration, down\n  await migrator.down({ to: 'down-to-name' }); // runs migrations down to given version\n  await migrator.down({ to: 0 }); // migrates down to the first version\n\n  await orm.close(true);\n})();\n")),(0,r.kt)("p",null,"Then run this script via ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-node")," (or compile it to plain JS and use ",(0,r.kt)("inlineCode",{parentName:"p"},"node"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ ts-node migrate\n")),(0,r.kt)("h2",{id:"providing-transaction-context"},"Providing transaction context"),(0,r.kt)("p",null,"In some cases we might want to control the transaction context ourselves:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"await orm.em.transactional(async em => {\n  await migrator.up({ transaction: em.getTransactionContext() });\n});\n")),(0,r.kt)("h2",{id:"importing-migrations-statically"},"Importing migrations statically"),(0,r.kt)("p",null,"If we do not want to dynamically import a folder (e.g. when bundling our code with webpack) we can import migrations\ndirectly."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { MikroORM } from '@mikro-orm/core';\nimport { Migration20191019195930 } from '../migrations/Migration20191019195930.ts';\n\nawait MikroORM.init({\n  migrations: {\n    migrationsList: [\n      {\n        name: 'Migration20191019195930.ts',\n        class: Migration20191019195930,\n      },\n    ],\n  },\n});\n")),(0,r.kt)("p",null,"With the help of ",(0,r.kt)("a",{parentName:"p",href:"https://webpack.js.org/guides/dependency-management/#context-module-api"},"webpack's context module api"),"\nwe can dynamically import the migrations making it possible to import all files in a folder."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { MikroORM } from '@mikro-orm/core';\nimport { basename } from 'path';\n\nconst migrations = {};\n\nfunction importAll(r) {\n  r.keys().forEach(\n    (key) => (migrations[basename(key)] = Object.values(r(key))[0])\n  );\n}\n\nimportAll(require.context('../migrations', false, /\\.ts$/));\n\nconst migrationsList = Object.keys(migrations).map((migrationName) => ({\n  name: migrationName,\n  class: migrations[migrationName],\n}));\n\nawait MikroORM.init({\n  migrations: {\n    migrationsList,\n  },\n});\n")),(0,r.kt)("h2",{id:"limitations"},"Limitations"),(0,r.kt)("h3",{id:"mysql"},"MySQL"),(0,r.kt)("p",null,"There is no way to rollback DDL changes in MySQL. An implicit commit is forced for those\nqueries automatically, so transactions are not working as expected. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/mikro-orm/mikro-orm/issues/217"},"https://github.com/mikro-orm/mikro-orm/issues/217")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dev.mysql.com/doc/refman/5.7/en/implicit-commit.html"},"https://dev.mysql.com/doc/refman/5.7/en/implicit-commit.html"))))}u.isMDXComponent=!0}}]);