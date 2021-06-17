(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6141],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||s[d]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9138:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(7294);function o(e){var t=(0,r.useRef)(null),n=(0,r.useRef)("undefined"!=typeof document?document.createElement("script"):null);return(0,r.useEffect)((function(){t.current.appendChild(n.current)}),[]),(0,r.useEffect)((function(){for(var t in e)e.hasOwnProperty(t)&&(n.current[t]=e[t])})),r.createElement("div",{ref:t})}},2587:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a=n(9138),l=["components"],c={id:"tab_completion",title:"Tab completion",sidebar_label:"Tab completion"},p={unversionedId:"tutorial/tab_completion",id:"version-0.11/tutorial/tab_completion",isDocsHomePage:!1,title:"Tab completion",description:"You can enable shell TAB completion, for example:",source:"@site/versioned_docs/version-0.11/tutorial/7_tab_completion.md",sourceDirName:"tutorial",slug:"/tutorial/tab_completion",permalink:"/docs/0.11/tutorial/tab_completion",editUrl:"https://github.com/facebookresearch/kats/edit/master/website/versioned_docs/version-0.11/tutorial/7_tab_completion.md",version:"0.11",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1578885213,formattedLastUpdatedAt:"1/12/2020",sidebar_label:"Tab completion",sidebarPosition:7,frontMatter:{id:"tab_completion",title:"Tab completion",sidebar_label:"Tab completion"},sidebar:"version-0.11/docs",previous:{title:"Multi-run",permalink:"/docs/0.11/tutorial/multi-run"},next:{title:"Output/Working directory",permalink:"/docs/0.11/tutorial/working_directory"}},u=[],s={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can enable shell TAB completion, for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'eval "$(python my_app.py -sc install=SHELL_NAME)"\n')),(0,i.kt)("p",null,"Get the exact command to install the completion from ",(0,i.kt)("inlineCode",{parentName:"p"},"--hydra-help"),"."),(0,i.kt)("p",null,"Replace SHELL_NAME by your shell name, currently, only Bash is supported and we are relying on the community to implement completion plugins for additional shells."),(0,i.kt)("p",null,"Tab completion can complete config groups, configuration nodes and values and also paths if they start with ",(0,i.kt)("inlineCode",{parentName:"p"},".")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"/"),"."),(0,i.kt)("p",null,"See this short video demonstration of tab completion:"),(0,i.kt)(a.Z,{id:"asciicast-272604",src:"https://asciinema.org/a/272604.js",async:!0,mdxType:"Script"}))}m.isMDXComponent=!0}}]);