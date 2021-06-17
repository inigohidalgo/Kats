(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4823],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(n),m=a,d=f["".concat(p,".").concat(m)]||f[m]||u[m]||i;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3899:function(e,t,n){"use strict";n.d(t,{Z:function(){return p},T:function(){return c}});var r=n(2122),a=n(7294),i=n(6742),o=n(2263),l=n(907);function p(e){return a.createElement(i.Z,(0,r.Z)({},e,{to:(t=e.to,p=(0,l.zu)(),(0,o.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(n=null==p?void 0:p.name)?n:"current"]+t),target:"_blank"}));var t,n,p}function c(e){var t,n=null!=(t=e.text)?t:"Example";return a.createElement(p,e,a.createElement("span",null,"\xa0"),a.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example"}))}},2682:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return f}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=n(3899),l=["components"],p={id:"config_file",title:"Specifying a config file"},c={unversionedId:"tutorials/basic/your_first_app/config_file",id:"version-1.1/tutorials/basic/your_first_app/config_file",isDocsHomePage:!1,title:"Specifying a config file",description:"It can get tedious to type all those command line arguments.",source:"@site/versioned_docs/version-1.1/tutorials/basic/your_first_app/2_config_file.md",sourceDirName:"tutorials/basic/your_first_app",slug:"/tutorials/basic/your_first_app/config_file",permalink:"/docs/tutorials/basic/your_first_app/config_file",editUrl:"https://github.com/facebookresearch/kats/edit/master/website/versioned_docs/version-1.1/tutorials/basic/your_first_app/2_config_file.md",version:"1.1",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1623349300,formattedLastUpdatedAt:"6/10/2021",sidebarPosition:2,frontMatter:{id:"config_file",title:"Specifying a config file"},sidebar:"version-1.1/docs",previous:{title:"A simple command-line application",permalink:"/docs/tutorials/basic/your_first_app/simple_cli"},next:{title:"Using the config object",permalink:"/docs/tutorials/basic/your_first_app/using_config"}},s=[],u={toc:s};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.T,{to:"examples/tutorials/basic/your_first_hydra_app/2_config_file",mdxType:"ExampleGithubLink"}),(0,i.kt)("p",null,"It can get tedious to type all those command line arguments.\nYou can solve it by creating a configuration file next to my_app.py.\nHydra configuration files are yaml files and should have the .yaml file extension."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"db: \n  driver: mysql\n  user: omry\n  password: secret\n")),(0,i.kt)("p",null,"Specify the config name by passing a ",(0,i.kt)("inlineCode",{parentName:"p"},"config_name")," parameter to the ",(0,i.kt)("strong",{parentName:"p"},"@hydra.main()")," decorator.\nNote that you should omit the ",(0,i.kt)("strong",{parentName:"p"},".yaml")," extension.\nHydra also needs to know where to find your config. Specify the directory containing it relative to the application by passing ",(0,i.kt)("inlineCode",{parentName:"p"},"config_path"),": "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="my_app.py" {1}',title:'"my_app.py"',"{1}":!0},'@hydra.main(config_path=".", config_name="config")\ndef my_app(cfg):\n    print(OmegaConf.to_yaml(cfg))\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"config.yaml")," is loaded automatically when you run your application."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py\ndb:\n  driver: mysql\n  user: omry\n  password: secret\n")),(0,i.kt)("p",null,"You can override values in the loaded config from the command line.",(0,i.kt)("br",{parentName:"p"}),"\n","Note the lack of the ",(0,i.kt)("inlineCode",{parentName:"p"},"+")," prefix."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{4-5}","{4-5}":!0},"$ python my_app.py db.user=root db.password=1234\ndb:\n  driver: mysql\n  user: root\n  password: 1234\n")),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"++")," to override a config value if it's already in the config, or add it otherwise.\ne.g:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# Override an existing item\n$ python my_app.py ++db.password=1234\n\n# Add a new item\n$ python my_app.py ++db.timeout=5\n")),(0,i.kt)("p",null,"You can enable ",(0,i.kt)("a",{parentName:"p",href:"/docs/tutorials/basic/running_your_app/tab_completion"},"tab completion")," for your Hydra applications."))}f.isMDXComponent=!0}}]);