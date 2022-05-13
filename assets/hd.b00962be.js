import{a as e,j as o}from"./main.888a8346.js";const i=function({previewer:t=()=>null,api:h=()=>null}){const n=t;return e("div",{children:o("div",{children:[e("h1",{id:"hd-adaptation","data-anchor":"hd-adaptation",children:"HD Adaptation"}),o("p",{children:["In some projects, you may want to use 2 times the size of the style file. In order to reduce your access cost, antd-mobile has built-in a set of preprocessed 2 times the size of the code, placed in the ",e("code",{children:"2x"})," subdirectory."]}),o("p",{children:["You can replace the import of ",e("code",{children:"antd-mobile"})," in the project with ",e("code",{children:"antd-mobile/2x"}),", so that a 2x version of the component is loaded, for example:"]}),e(n,{code:`import { Button } from 'antd-mobile';
// \u2B07\uFE0F
import { Button } from 'antd-mobile/2x';

import 'antd-mobile/es/global';
// \u2B07\uFE0F
import 'antd-mobile/2x/es/global';`,lang:"js"}),o("p",{children:["If you think it is too troublesome to add an extra ",e("code",{children:"2x"})," every time you import it, you can consider configuring an alias from ",e("code",{children:"antd-mobile"})," to ",e("code",{children:"antd-mobile/2x"})," in webpack. For specific configuration methods, please refer to ",e("a",{href:"https://webpack.js.org/configuration/resolve/#resolvealias",children:"webpack documentation "}),"."]}),o("p",{children:["If you are using the umi framework, you can directly install the latest version of ",e("code",{children:"@umijs/preset-react"})," or ",e("code",{children:"@umijs/plugin-antd-mobile"}),", and then configure in ",e("code",{children:"config.js"}),":"]}),e(n,{code:`{
  antdMobile: {
    hd: true;
  }
}`,lang:"js"}),o("p",{children:["It is worth mentioning that you need to take care of your imports. Please don't write both ",e("code",{children:"import xxx from 'antd-mobile'"})," and ",e("code",{children:"import xxx from 'antd-mobile/2x'"})," in one same project."]})]})})},d=[],r=void 0,a=[{depth:1,text:"HD Adaptation",id:"hd-adaptation"}],c="/docs/guide/hd.md",l="HD Adaptation",s="1652431887000";var p=t=>t.children({MdContent:i,demos:d,frontmatter:r,slugs:a,filePath:c,title:l,updatedTime:s});export{i as MdContent,p as default,d as demos,c as filePath,r as frontmatter,a as slugs,l as title,s as updatedTime};
