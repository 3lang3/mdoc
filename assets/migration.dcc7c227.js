import{a as e,j as n}from"./main.888a8346.js";const i=function({previewer:o=()=>null,api:s=()=>null}){const t=o;return e("div",{children:n("div",{children:[e("h1",{id:"migrating-from-v2","data-anchor":"migrating-from-v2",children:"Migrating from v2"}),e("p",{children:`v5 is a completely rewritten version, so there are lots of differences between v2 and v5. Actually, this shouldn't be called as "migration". It's about replacing one component library with another one.`}),e("p",{children:"In order to reduce the cost of migration, you can try to use some methods mentioned below to make v2 and v5 live alongside in your project at the same time."}),e("h2",{id:"method-1-use-antd-mobile-v2-recommended","data-anchor":"method-1-use-antd-mobile-v2-recommended",children:"Method 1: Use antd-mobile-v2 (Recommended)"}),n("p",{children:["We have published a shadow npm package for v2 which is name as ",e("code",{children:"antd-mobile-v2"}),". You can replace the v2 antd-mobile package in your project with this one."]}),n("p",{children:["First, install ",e("code",{children:"antd-mobile-v2"}),":"]}),e(t,{code:`$ npm install --save antd-mobile-v2
# or
$ yarn add antd-mobile-v2`,lang:"bash"}),n("p",{children:["And then, replace everything that uses ",e("code",{children:"antd-mobile"})," with ",e("code",{children:"antd-mobile-v2"}),". For example:"]}),e(t,{code:`import {Button} from 'antd-mobile'
// \u2B07\uFE0F
import {Button} from 'antd-mobile-v2'`,lang:"diff"}),n("p",{children:["Next, remove the old ",e("code",{children:"antd-mobile"})," dependency. And try to run/test/build your project. Check if everything is working fine."]}),e("p",{children:"If you find that the component styles of v2 are lost at this time, you can manually import the style file in the entry file:"}),e(t,{code:"import 'antd-mobile-v2/dist/antd-mobile.less'; // or 'antd-mobile-v2/dist/antd-mobile.css'",lang:"js"}),n("p",{children:["Finally, reinstall the ",e("code",{children:"antd-mobile"})," package as v5:"]}),e(t,{code:`$ npm install --save antd-mobile
# or
$ yarn add antd-mobile`,lang:"bash"}),n("p",{children:["Now, the ",e("code",{children:"antd-mobile"})," in project is v5, and ",e("code",{children:"antd-mobile-v2"})," is v2."]}),n("blockquote",{children:[e("p",{children:"Although the above approach is simple to operate, it may lead to the full import of v2 components, which will bring a certain amount of package size overhead. If you have such strict requirements on package volume, you can configure antd-mobile-v2 Let's take a look at babel-plugin-import. The specific configuration method will not be introduced here, and it needs to be analyzed in detail."}),e("p",{children:"However, please note that v5 components do not need to configure babel-plugin-import. When configuring, please be careful not to write the libraryName wrong."})]}),e("h2",{id:"method-2-install-v5-via-alias","data-anchor":"method-2-install-v5-via-alias",children:"Method 2: Install v5 via alias"}),e("p",{children:"We recommend you to use the method 1. Although it requires a little bit migration work, it can make the whole migration process less costly and more steady."}),e("p",{children:"Of course, in case your project doesn't seem to be suitable to use method 1, we provided a backup plan for you."}),e("p",{children:"You can use npm alias to install v5:"}),e(t,{code:`$ npm install --save antd-mobile-v5@npm:antd-mobile@5
# or
$ yarn add antd-mobile-v5@npm:antd-mobile@5`,lang:"bash"}),n("p",{children:["And after that, the corresponding ",e("code",{children:"package.json"})," is:"]}),e(t,{code:`{
  "antd-mobile": "^2.3.2",
  "antd-mobile-v5": "npm:antd-mobile@5"
}`,lang:"json"}),n("p",{children:["Now, ",e("code",{children:"antd-mobile"})," is v2 and ",e("code",{children:"antd-mobile-v5"})," is v5."]}),e(t,{code:`import { Button } from 'antd-mobile'; // v2
import { Button } from 'antd-mobile-v5'; // v5`,lang:"js"}),e("p",{children:"Need to be noted, not every package manager has a well support for npm alias."})]})})},a=[],d=void 0,l=[{depth:1,text:"Migrating from v2",id:"migrating-from-v2"},{depth:2,text:"Method 1: Use antd-mobile-v2 (Recommended)",id:"method-1-use-antd-mobile-v2-recommended"},{depth:2,text:"Method 2: Install v5 via alias",id:"method-2-install-v5-via-alias"}],r="/docs/guide/migration.md",c="Migrating from v2",m="1652431887000";var p=o=>o.children({MdContent:i,demos:a,frontmatter:d,slugs:l,filePath:r,title:c,updatedTime:m});export{i as MdContent,p as default,a as demos,r as filePath,d as frontmatter,l as slugs,c as title,m as updatedTime};
