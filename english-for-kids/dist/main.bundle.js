(()=>{"use strict";var e={516:(e,t,a)=>{a.d(t,{Z:()=>k});var r=a(645),o=a.n(r),i=a(667),n=a.n(i),s=a(249),c=a(128),d=a(131),l=a(542),g=a(392),p=a(33),m=a(93),u=o()((function(e){return e[1]})),h=n()(s.Z),w=n()(c.Z),f=n()(d.Z),x=n()(l.Z),y=n()(g.Z),b=n()(p.Z),v=n()(m.Z);u.push([e.id,'*{padding:0;margin:0;box-sizing:border-box}@font-face{font-family:"Thintel";src:url('+h+')}body{height:100%;font-family:"Thintel";font-size:40px;background:#d589e6;background:linear-gradient(-45deg, #65caca, #65caca, #cf86cc, #e2a6df);background-size:600% 600%;animation:gradient 10s ease infinite;min-height:100vh;display:flex;flex-direction:column}@keyframes gradient{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}main{width:100%;flex-grow:1}h1{text-align:center;color:#272727;text-shadow:3px 4px gray}.cardsPannel{justify-content:space-evenly;margin:0 auto;margin-top:20px;max-width:1366px;display:flex;flex-direction:row;flex-wrap:wrap;perspective:3000px}.card{width:calc(100% / 4 - 55px);height:280px;position:relative;text-decoration:none;box-shadow:6px 4px gray;background-color:#fff;display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer;transform-style:preserve-3d;transition:transform .6s;border:3px solid #000}.card:nth-child(-n+4){margin-bottom:2rem}.card_image{width:50%;height:50%}.card_image_game{margin-top:35px;width:75%;height:75%}.card:hover{transform:scale(1.05)}.card.flipped{transform:rotateY(180deg)}.card .front,.card .back{position:absolute;width:100%;height:100%;text-align:center;border-radius:3rem;backface-visibility:hidden;display:flex;flex-direction:column;justify-content:center;align-items:center}.card .back{transform:rotateY(180deg)}.hamburger-menu{height:0;font-size:40px}#menu__toggle{opacity:0}#menu__toggle:checked~.menu__btn>span{transform:rotate(45deg)}#menu__toggle:checked~.menu__btn>span::before{top:0;transform:rotate(0)}#menu__toggle:checked~.menu__btn>span::after{top:0;transform:rotate(90deg)}#menu__toggle:checked~.menu__box{visibility:visible;left:0}.menu__btn{display:flex;align-items:center;position:absolute;top:20px;left:20px;width:26px;height:26px;cursor:pointer;z-index:20}.menu__btn>span,.menu__btn>span::before,.menu__btn>span::after{display:block;position:absolute;width:100%;height:4px;background-color:#616161;transition-duration:.25s}.menu__btn>span::before{content:"";top:-8px}.menu__btn>span::after{content:"";top:8px}.menu__box{overflow-y:auto;display:block;position:fixed;visibility:hidden;top:0;left:-100%;width:300px;height:100%;margin:0;padding:80px 0;list-style:none;background-color:#eceff1;box-shadow:1px 0px 6px rgba(0,0,0,.2);transition-duration:.25s;z-index:15}.menu__item{cursor:pointer;display:block;padding:12px 24px;color:#333;font-size:40px;font-weight:600;width:97.5%;text-decoration:none;transition-duration:.25s}.menu__item:hover{background-color:#cfd8dc;transform:scale(1.05)}#overlay{top:0;display:block;visibility:hidden;position:fixed;width:100%;height:100%;background-color:rgba(0,0,0,.4);z-index:1;cursor:pointer}#menu__toggle:checked~#overlay{visibility:visible}.show-overlay#overlay{visibility:visible}.underline{color:#c55da6;text-decoration:underline}.arrow-flip{background-image:url('+w+");width:30px;height:30px;background-repeat:no-repeat;background-position:center}.arrow-flip:hover{background-image:url("+f+')}.hidden{visibility:hidden}.start-game-button{display:flex;justify-content:center;margin-top:30px;width:200px;height:50px;margin-left:20px;background-color:#3dcf97;cursor:pointer;box-shadow:6px 4px gray}.start-game-button:hover{transform:scale(1.05)}.stars-container{margin-top:10px;margin-left:10px;width:90%;height:50px;display:flex}.stars-container>img{margin-left:.5rem;width:50px;height:50px}.inactiveLink{pointer-events:none;cursor:default;opacity:.5}.finish-overlay{display:flex;align-items:center;margin:auto;justify-content:center;position:fixed;top:0;z-index:10;width:100%;height:100%;font-size:60px;background-color:rgba(179,179,179,.9);overflow:hidden;font-size:150px;text-shadow:3px 4px #d8d8d8}.finish-overlay>img{margin-left:1.5rem}.repeat-word-button{box-shadow:6px 4px gray;display:flex;justify-content:center;margin-left:20px;margin-top:20px;width:150px;height:50px;background-color:#a053df;cursor:pointer}.repeat-word-button:hover{transform:scale(1.05)}.game-mode{border:6px solid #1c7bb9;color:#1c7bb9;transition:.2s ease-in}.buttons-pannel{display:flex;flex-direction:row}.switch_mode{position:relative;display:inline-block;width:150px;height:50px;margin-top:30px;margin-left:20px;box-shadow:6px 4px gray}.switch_mode input{display:none}.slider{position:absolute;top:0;left:0;right:0;bottom:0;cursor:pointer;background-color:#a356c7;-webkit-transition:.4s;transition:.4s}.slider:before{position:absolute;content:"";height:40px;width:40px;left:5px;bottom:5px;background-color:#fff;-webkit-transition:.4s;transition:.4s}input:checked+.slider{background-color:#10a2c7}input:focus+.slider{box-shadow:0 0 1px #a356c7}input:checked+.slider:before{transform:translateX(100px)}.play{display:none}.train,.play{color:#fff;position:absolute;transform:translate(-50%, -50%);top:50%;left:65%}input:checked+.slider .play{display:block;left:35%}input:checked+.slider .train{display:none}table{display:table;border-collapse:separate;box-sizing:border-box;border-spacing:2px;border-color:gray}.statistics{width:100%;min-width:550px;background:#c7fbff30;cursor:default;position:relative;border-collapse:collapse}thead{display:table-header-group;vertical-align:middle;border-color:inherit}.table-overlay{display:flex;flex-direction:column;padding-top:2%;padding-left:5%;padding-right:5%;padding-bottom:2%;position:absolute;top:10%;left:10%;z-index:10;width:80%;height:80%;background-color:rgba(255,255,255,.9);overflow-x:hidden;overflow-y:auto;box-shadow:10px 10px gray}.table-overlay-back{background-color:rgba(255,255,255,.3);z-index:5;width:100%;height:100%}.table-head{cursor:pointer;text-align:left}.table-head:hover{transform:scale(1.1)}.table-row:hover{background-color:rgba(41,165,202,.2)}[data-operation=asc]:after{background-image:url('+x+');background-size:20px 10px;display:inline-block;width:20px;height:10px;content:""}[data-operation=desc]:after{background-image:url('+y+');background-size:20px 10px;display:inline-block;width:20px;height:10px;content:""}[data-active=false]:after{background-image:url('+b+');background-size:20px 10px;display:inline-block;width:20px;height:10px;content:""}.reset-stat{display:flex;align-self:flex-end;justify-content:center;margin-bottom:20px;width:200px;height:50px;margin-left:20px;background-color:#d65555;cursor:pointer;box-shadow:6px 4px gray}.reset-stat:hover{transform:scale(1.05)}.repeat-hard{display:flex;align-self:flex-end;justify-content:center;margin-bottom:20px;width:200px;height:50px;margin-left:20px;background-color:#3dcf97;cursor:pointer;box-shadow:6px 4px gray}.repeat-hard:hover{transform:scale(1.05)}.repeat-head{text-align:center;font-size:60px;text-shadow:3px 4px gray}.norepeat-words{text-align:center;text-shadow:3px 4px gray}.stat-div{display:flex;flex-direction:row;justify-content:space-between;align-self:flex-end}.footer{width:100%}.footer_wrapper{display:flex;align-items:center;justify-content:center}.footer_link{display:inline-block;text-decoration:none;font-size:2rem;color:#000}.footer_link>img{margin-right:.5rem;width:25px;height:25px}.footer_logo{display:inline-block;margin-left:1rem;width:7rem;height:3rem;background:url('+v+");background-repeat:no-repeat;background-position:center;background-size:100%}.footer i{margin-right:1rem}@media screen and (max-width: 1366px){h1{font-size:55px}.cardsPannel{max-width:1200px}.card{width:250px;height:250px}.card:nth-child(-n+4){margin-bottom:1rem}.table-head{font-size:40px}.table-row{font-size:35px}}@media screen and (max-width: 1200px){.table-head{font-size:30px}.table-row{font-size:25px}}@media screen and (max-width: 780px){h1{font-size:50px}.cardsPannel{max-width:700px}.card{width:250px;height:250px}.card:nth-child(-n+6){margin-bottom:1rem}.finish-overlay{font-size:100px}.finish-overlay>img{margin-left:1rem;width:50%;height:50%}.stat-div{display:flex;flex-direction:row;justify-content:space-between;align-self:flex-start}.reset-stat{width:160px;height:40px;margin-left:10px}.repeat-hard{width:160px;height:40px;margin-left:15px}.table-head{font-size:25px}.table-row{font-size:22px}.table-overlay{overflow-x:auto;overflow-y:auto}}@media screen and (max-width: 600px){h1{font-size:50px}.cardsPannel{max-width:300px}.card{width:250px;height:250px}.card:nth-child(-n+7){margin-bottom:1rem}.stat-div{display:flex;flex-direction:row;justify-content:space-between;align-self:flex-start}.reset-stat{width:90px;height:40px;margin-left:0px}.repeat-hard{width:135px;height:40px;margin-left:5px}.finish-overlay{font-size:90px}.finish-overlay>img{margin-left:1rem;width:50%;height:35%}}@media screen and (max-width: 375px){h1{font-size:30px}.buttons-pannel{width:95%;margin:0 auto;display:flex;flex-direction:row;justify-content:space-between;align-items:center}.start-game-button{margin-left:0;width:140px;height:40px;font-size:35px}.repeat-word-button{width:140px;height:40px}.stars-container{margin-top:10px;margin-left:10px;width:90%;height:40px;display:flex}.stars-container>img{margin-left:.5rem;width:30px;height:30px}.switch_mode{position:relative;display:inline-block;width:140px;height:40px;margin-top:30px;margin-left:0;box-shadow:6px 4px gray}.switch_mode input{display:none}.slider:before{height:30px;width:30px}input:checked+.slider:before{transform:translateX(100px)}.train,.play{font-size:35px}.finish-overlay{font-size:60px;flex-direction:column}.finish-overlay>img{margin-left:1rem;width:70%;height:30%}}",""]);const k=u},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var a=e(t);return t[2]?"@media ".concat(t[2]," {").concat(a,"}"):a})).join("")},t.i=function(e,a,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var n=this[i][0];null!=n&&(o[n]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&o[c[0]]||(a&&(c[2]?c[2]="".concat(a," and ").concat(c[2]):c[2]=a),t.push(c))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},249:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"5f5eae4ed2ba723d5e32a445beb83f15.ttf"},542:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"eb469c65ba11a4ca00f02f2b2d35c4ee.png"},33:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"a585a00ab7c8b908f7916d9886538b5b.png"},392:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"aefcb47a749522296981011c403603bd.png"},128:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"be57b39a22ad30efc38603a5116dd9f3.png"},131:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"5cdbde6d254c2e8ccfef7d52f636414b.png"},93:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"ad178c0df28bc133be34b982d62f431d.svg"},379:(e,t,a)=>{var r,o=function(){var e={};return function(t){if(void 0===e[t]){var a=document.querySelector(t);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(e){a=null}e[t]=a}return e[t]}}(),i=[];function n(e){for(var t=-1,a=0;a<i.length;a++)if(i[a].identifier===e){t=a;break}return t}function s(e,t){for(var a={},r=[],o=0;o<e.length;o++){var s=e[o],c=t.base?s[0]+t.base:s[0],d=a[c]||0,l="".concat(c," ").concat(d);a[c]=d+1;var g=n(l),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==g?(i[g].references++,i[g].updater(p)):i.push({identifier:l,updater:h(p,t),references:1}),r.push(l)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=a.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var n=o(e.insert||"head");if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(t)}return t}var d,l=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function g(e,t,a,r){var o=a?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(t,o);else{var i=document.createTextNode(o),n=e.childNodes;n[t]&&e.removeChild(n[t]),n.length?e.insertBefore(i,n[t]):e.appendChild(i)}}function p(e,t,a){var r=a.css,o=a.media,i=a.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,u=0;function h(e,t){var a,r,o;if(t.singleton){var i=u++;a=m||(m=c(t)),r=g.bind(null,a,i,!1),o=g.bind(null,a,i,!0)}else a=c(t),r=p.bind(null,a,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(a)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var a=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<a.length;r++){var o=n(a[r]);i[o].references--}for(var c=s(e,t),d=0;d<a.length;d++){var l=n(a[d]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}a=c}}}}},t={};function a(r){if(t[r])return t[r].exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,a),o.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{const e="div",t="main",r="Main",o="Statistics",i="statistics_m1t9",n="card",s="cardsPannel",c="game-mode",d="repeat",l="overlay",g="show-overlay",p="underline",m="data-card",u="front",h="arrow-flip",w="flipped",f="stars-container",x="category",y="table-head",b="th",v="desc",k=[{categoryName:"Activities",image:"./assets/img/pixel-activities.png"},{categoryName:"Animals",image:"./assets/img/pixel-animal2.png"},{categoryName:"Emotions",image:"./assets/img/pixel-emotion3.png"},{categoryName:"Food",image:"./assets/img/pixel-food.png"},{categoryName:"Clothes",image:"./assets/img/pixel-clothes.jpg"},{categoryName:"Nature",image:"./assets/img/pixel-nature1.jpg"},{categoryName:"Technology",image:"./assets/img/pixel-technology.jpg"},{categoryName:"Fairytales",image:"./assets/img/pixel-fairytales.jpg"}],S={Activities:[{word:"draw",translation:"рисовать",image:"./assets/img/pixel-draw1.png",audioSrc:"./assets/audio/draw.mp3"},{word:"dance",translation:"танцевать",image:"./assets/img/pixel-dance2.jpg",audioSrc:"./assets/audio/dance.mp3"},{word:"jump",translation:"прыгать",image:"./assets/img/pixel-jump1.png",audioSrc:"./assets/audio/jump.mp3"},{word:"swim",translation:"плавать",image:"./assets/img/pixel-swim.jpg",audioSrc:"./assets/audio/swim.mp3"},{word:"play",translation:"играть",image:"./assets/img/pixel-play.png",audioSrc:"./assets/audio/play.mp3"},{word:"read",translation:"читать",image:"./assets/img/pixel-read.jpg",audioSrc:"./assets/audio/read.mp3"},{word:"run",translation:"бегать",image:"./assets/img/pixel-run1.jpg",audioSrc:"./assets/audio/run.mp3"},{word:"walk",translation:"гулять, ходить",image:"./assets/img/pixel-walk1.png",audioSrc:"./assets/audio/walk.mp3"}],Animals:[{word:"bear",translation:"медведь",image:"./assets/img/pixel-bear.jpg",audioSrc:"./assets/audio/bear.mp3"},{word:"beaver",translation:"бобер",image:"./assets/img/pixel-beaver.jpg",audioSrc:"./assets/audio/beaver.mp3"},{word:"cat",translation:"кот",image:"./assets/img/pixel-cat1.png",audioSrc:"./assets/audio/cat.mp3"},{word:"deer",translation:"олень",image:"./assets/img/pixel-deer.png",audioSrc:"./assets/audio/deer.mp3"},{word:"elephant",translation:"слон",image:"./assets/img/pixel-elephant.png",audioSrc:"./assets/audio/elephant.mp3"},{word:"fox",translation:"лиса",image:"./assets/img/pixel-fox.png",audioSrc:"./assets/audio/fox.mp3"},{word:"dog",translation:"собака",image:"./assets/img/pixel-dog.png",audioSrc:"./assets/audio/dog.mp3"},{word:"raccoon",translation:"енот",image:"./assets/img/pixel-raccoon1.jpg",audioSrc:"./assets/audio/raccoon.mp3"}],Clothes:[{word:"boots",translation:"ботинки",image:"./assets/img/pixel-boots.jpg",audioSrc:"./assets/audio/boots.mp3"},{word:"dress",translation:"платье",image:"./assets/img/pixel-dress.jpg",audioSrc:"./assets/audio/dress.mp3"},{word:"hat",translation:"шапка",image:"./assets/img/pixel-hat.jpg",audioSrc:"./assets/audio/hat.mp3"},{word:"jacket",translation:"куртка",image:"./assets/img/pixel-jacket.png",audioSrc:"./assets/audio/jacket.mp3"},{word:"skirt",translation:"юбка",image:"./assets/img/pixel-skirt.png",audioSrc:"./assets/audio/skirt.mp3"},{word:"socks",translation:"носки",image:"./assets/img/pixel-socks.png",audioSrc:"./assets/audio/socks.mp3"},{word:"sweater",translation:"свитер",image:"./assets/img/pixel-sweater.png",audioSrc:"./assets/audio/sweater.mp3"},{word:"t-shirt",translation:"футболка",image:"./assets/img/pixel-t-shirt.jpg",audioSrc:"./assets/audio/t-shirt.mp3"}],Fairytales:[{word:"castle",translation:"замок",image:"./assets/img/pixel-castle.jpg",audioSrc:"./assets/audio/castle.mp3"},{word:"dragon",translation:"дракон",image:"./assets/img/pixel-dragon.png",audioSrc:"./assets/audio/dragon.mp3"},{word:"faerie",translation:"фея",image:"./assets/img/pixel-faerie.jpg",audioSrc:"./assets/audio/faerie.mp3"},{word:"knight",translation:"рыцарь",image:"./assets/img/pixel-knight.png",audioSrc:"./assets/audio/knight.mp3"},{word:"mermaid",translation:"русалочка",image:"./assets/img/pixel-mermaid.jpg",audioSrc:"./assets/audio/mermaid.mp3"},{word:"pirate",translation:"пират",image:"./assets/img/pixel-pirate.jpg",audioSrc:"./assets/audio/pirate.mp3"},{word:"witch",translation:"ведьма",image:"./assets/img/pixel-witch.jpg",audioSrc:"./assets/audio/witch.mp3"},{word:"wizard",translation:"волшебник, колдун",image:"./assets/img/pixel-wizard.jpg",audioSrc:"./assets/audio/wizard.mp3"}],Food:[{word:"bread",translation:"хлеб",image:"./assets/img/pixel-bread.jpg",audioSrc:"./assets/audio/bread.mp3"},{word:"cake",translation:"кекс, пироженое",image:"./assets/img/pixel-cake.jpg",audioSrc:"./assets/audio/cake.mp3"},{word:"croissant",translation:"круассан",image:"./assets/img/pixel-croissant.jpg",audioSrc:"./assets/audio/croissant.mp3"},{word:"donut",translation:"пончик",image:"./assets/img/pixel-donut.png",audioSrc:"./assets/audio/donut.mp3"},{word:"drink",translation:"напиток",image:"./assets/img/pixel-drink.jpg",audioSrc:"./assets/audio/drink.mp3"},{word:"icecream",translation:"мороженое",image:"./assets/img/pixel-ice_cream.png",audioSrc:"./assets/audio/icecream.mp3"},{word:"loaf",translation:"батон",image:"./assets/img/pixel-loaf2.jpg",audioSrc:"./assets/audio/loaf.mp3"},{word:"pie",translation:"пирог",image:"./assets/img/pixel-pie.png",audioSrc:"./assets/audio/pie.mp3"}],Nature:[{word:"cloud",translation:"облако",image:"./assets/img/pixel-cloud.png",audioSrc:"./assets/audio/cloud.mp3"},{word:"desert",translation:"пустыня",image:"./assets/img/pixel-desert.png",audioSrc:"./assets/audio/desert.mp3"},{word:"flower",translation:"цветок",image:"./assets/img/pixel-flower.jpg",audioSrc:"./assets/audio/flower.mp3"},{word:"forest",translation:"лес",image:"./assets/img/pixel-forest.png",audioSrc:"./assets/audio/forest.mp3"},{word:"lake",translation:"озеро",image:"./assets/img/pixel-lake.jpg",audioSrc:"./assets/audio/lake.mp3"},{word:"mountains",translation:"горы",image:"./assets/img/pixel-mountains.jpg",audioSrc:"./assets/audio/mountains.mp3"},{word:"volcano",translation:"вулкан",image:"./assets/img/pixel-volcano.jpg",audioSrc:"./assets/audio/volcano.mp3"},{word:"waterfall",translation:"водопад",image:"./assets/img/pixel-waterfall.jpg",audioSrc:"./assets/audio/waterfall.mp3"}],Emotions:[{word:"angry",translation:"сердитый",image:"./assets/img/pixel-angry.jpg",audio:"./assets/audio/angry.mp3"},{word:"bored",translation:"скучающий",image:"./assets/img/pixel-bored.jpg",audio:"./assets/audio/bored.mp3"},{word:"cry",translation:"плакать",image:"./assets/img/pixel-cry1.jpg",audio:"./assets/audio/cry.mp3"},{word:"happy",translation:"счастливый",image:"./assets/img/pixel-happy.jpg",audio:"./assets/audio/happy.mp3"},{word:"laugh",translation:"смеяться",image:"./assets/img/pixel-laugh1.png",audio:"./assets/audio/laugh.mp3"},{word:"sad",translation:"грустный",image:"./assets/img/pixel-sad.jpg",audio:"./assets/audio/sad.mp3"},{word:"scared",translation:"испуганный",image:"./assets/img/pixel-scared.png",audio:"./assets/audio/scared.mp3"},{word:"surprised",translation:"удивленный",image:"./assets/img/pixel-surprised.jpg",audio:"./assets/audio/surprised.mp3"}],Technology:[{word:"computer",translation:"компьютер",image:"./assets/img/pixel-computer1.png",audio:"./assets/audio/computer.mp3"},{word:"phone",translation:"телефон",image:"./assets/img/pixel-phone1.png",audio:"./assets/audio/phone.mp3"},{word:"camera",translation:"фотоаппарат",image:"./assets/img/pixel-camera.png",audio:"./assets/audio/camera.mp3"},{word:"laptop",translation:"ноутбук",image:"./assets/img/pixel-laptop.png",audio:"./assets/audio/laptop.mp3"},{word:"tv",translation:"телевизор",image:"./assets/img/pixel-tv.png",audio:"./assets/audio/tv.mp3"},{word:"drone",translation:"дрон",image:"./assets/img/pixel-drone.png",audio:"./assets/audio/drone.mp3"},{word:"headphones",translation:"наушники",image:"./assets/img/pixel-headphones.png",audio:"./assets/audio/headphones.mp3"},{word:"tablet",translation:"планшет",image:"./assets/img/pixel-tablet.jpg",audio:"./assets/audio/tablet.mp3"}]},P=[{category:"Activities",word:"draw",translation:"рисовать",watch:0,right:0,wrong:0,correctPer:0},{category:"Activities",word:"dance",translation:"танцевать",watch:0,right:0,wrong:0,correctPer:0},{category:"Activities",word:"jump",translation:"прыгать",watch:0,right:0,wrong:0,correctPer:0},{category:"Activities",word:"swim",translation:"плавать",watch:0,right:0,wrong:0,correctPer:0},{category:"Activities",word:"play",translation:"играть",watch:0,right:0,wrong:0,correctPer:0},{category:"Activities",word:"read",translation:"читать",watch:0,right:0,wrong:0,correctPer:0},{category:"Activities",word:"run",translation:"бегать",watch:0,right:0,wrong:0,correctPer:0},{category:"Activities",word:"walk",translation:"гулять, ходить",watch:0,right:0,wrong:0,correctPer:0},{category:"Animals",word:"bear",translation:"медведь",watch:0,right:0,wrong:0,correctPer:0},{category:"Animals",word:"beaver",translation:"бобер",watch:0,right:0,wrong:0,correctPer:0},{category:"Animals",word:"cat",translation:"кот",watch:0,right:0,wrong:0,correctPer:0},{category:"Animals",word:"deer",translation:"олень",watch:0,right:0,wrong:0,correctPer:0},{category:"Animals",word:"elephant",translation:"слон",watch:0,right:0,wrong:0,correctPer:0},{category:"Animals",word:"fox",translation:"лиса",watch:0,right:0,wrong:0,correctPer:0},{category:"Animals",word:"dog",translation:"собака",watch:0,right:0,wrong:0,correctPer:0},{category:"Animals",word:"raccoon",translation:"енот",watch:0,right:0,wrong:0,correctPer:0},{category:"Clothes",word:"boots",translation:"ботинки",watch:0,right:0,wrong:0,correctPer:0},{category:"Clothes",word:"dress",translation:"платье",watch:0,right:0,wrong:0,correctPer:0},{category:"Clothes",word:"hat",translation:"шапка",watch:0,right:0,wrong:0,correctPer:0},{category:"Clothes",word:"jacket",translation:"куртка",watch:0,right:0,wrong:0,correctPer:0},{category:"Clothes",word:"skirt",translation:"юбка",watch:0,right:0,wrong:0,correctPer:0},{category:"Clothes",word:"socks",translation:"носки",watch:0,right:0,wrong:0,correctPer:0},{category:"Clothes",word:"sweater",translation:"свитер",watch:0,right:0,wrong:0,correctPer:0},{category:"Clothes",word:"t-shirt",translation:"футболка",watch:0,right:0,wrong:0,correctPer:0},{category:"Fairytales",word:"castle",translation:"замок",watch:0,right:0,wrong:0,correctPer:0},{category:"Fairytales",word:"dragon",translation:"дракон",watch:0,right:0,wrong:0,correctPer:0},{category:"Fairytales",word:"faerie",translation:"фея",watch:0,right:0,wrong:0,correctPer:0},{category:"Fairytales",word:"knight",translation:"рыцарь",watch:0,right:0,wrong:0,correctPer:0},{category:"Fairytales",word:"mermaid",translation:"русалочка",watch:0,right:0,wrong:0,correctPer:0},{category:"Fairytales",word:"pirate",translation:"пират",watch:0,right:0,wrong:0,correctPer:0},{category:"Fairytales",word:"witch",translation:"ведьма",watch:0,right:0,wrong:0,correctPer:0},{category:"Fairytales",word:"wizard",translation:"волшебник, колдун",watch:0,right:0,wrong:0,correctPer:0},{category:"Food",word:"bread",translation:"хлеб",watch:0,right:0,wrong:0,correctPer:0},{category:"Food",word:"cake",translation:"кекс, пироженое",watch:0,right:0,wrong:0,correctPer:0},{category:"Food",word:"croissant",translation:"круассан",watch:0,right:0,wrong:0,correctPer:0},{category:"Food",word:"donut",translation:"пончик",watch:0,right:0,wrong:0,correctPer:0},{category:"Food",word:"drink",translation:"напиток",watch:0,right:0,wrong:0,correctPer:0},{category:"Food",word:"icecream",translation:"мороженое",watch:0,right:0,wrong:0,correctPer:0},{category:"Food",word:"loaf",translation:"батон",watch:0,right:0,wrong:0,correctPer:0},{category:"Food",word:"pie",translation:"пирог",watch:0,right:0,wrong:0,correctPer:0},{category:"Nature",word:"cloud",translation:"облако",watch:0,right:0,wrong:0,correctPer:0},{category:"Nature",word:"desert",translation:"пустыня",watch:0,right:0,wrong:0,correctPer:0},{category:"Nature",word:"flower",translation:"цветок",watch:0,right:0,wrong:0,correctPer:0},{category:"Nature",word:"forest",translation:"лес",watch:0,right:0,wrong:0,correctPer:0},{category:"Nature",word:"lake",translation:"озеро",watch:0,right:0,wrong:0,correctPer:0},{category:"Nature",word:"mountains",translation:"горы",watch:0,right:0,wrong:0,correctPer:0},{category:"Nature",word:"volcano",translation:"вулкан",watch:0,right:0,wrong:0,correctPer:0},{category:"Nature",word:"waterfall",translation:"водопад",watch:0,right:0,wrong:0,correctPer:0},{category:"Emotions",word:"angry",translation:"сердитый",watch:0,right:0,wrong:0,correctPer:0},{category:"Emotions",word:"bored",translation:"скучающий",watch:0,right:0,wrong:0,correctPer:0},{category:"Emotions",word:"cry",translation:"плакать",watch:0,right:0,wrong:0,correctPer:0},{category:"Emotions",word:"happy",translation:"счастливый",watch:0,right:0,wrong:0,correctPer:0},{category:"Emotions",word:"laugh",translation:"смеяться",watch:0,right:0,wrong:0,correctPer:0},{category:"Emotions",word:"sad",translation:"грустный",watch:0,right:0,wrong:0,correctPer:0},{category:"Emotions",word:"scared",translation:"испуганный",watch:0,right:0,wrong:0,correctPer:0},{category:"Emotions",word:"surprised",translation:"удивленный",watch:0,right:0,wrong:0,correctPer:0},{category:"Technology",word:"computer",translation:"компьютер",watch:0,right:0,wrong:0,correctPer:0},{category:"Technology",word:"phone",translation:"телефон",watch:0,right:0,wrong:0,correctPer:0},{category:"Technology",word:"camera",translation:"фотоаппарат",watch:0,right:0,wrong:0,correctPer:0},{category:"Technology",word:"laptop",translation:"ноутбук",watch:0,right:0,wrong:0,correctPer:0},{category:"Technology",word:"tv",translation:"телевизор",watch:0,right:0,wrong:0,correctPer:0},{category:"Technology",word:"drone",translation:"дрон",watch:0,right:0,wrong:0,correctPer:0},{category:"Technology",word:"headphones",translation:"наушники",watch:0,right:0,wrong:0,correctPer:0},{category:"Technology",word:"tablet",translation:"планшет",watch:0,right:0,wrong:0,correctPer:0}];function j(e,t,a,r,o){const i=document.createElement(e);return t&&(i.className=t),a&&(i.innerHTML=a),r&&i.setAttribute(`data-${t}`,r),o&&i.classList.add(o),i}function _(t,a,r,o){const i=j(e,n,o?function(e){return`<img src="${e}" class="card_image_game">`}(t):function(e){return`<img src="${e}" class="card_image">`}(t),`${a}`);return i.append(j("p",o?function(e){return`card-title-${e} hidden`}(r):function(e){return`card-title-${e}`}(r),a)),i}const E=j(e,"start-game-button","Start new game"),C=j(e,"repeat-word-button","Repeat word"),A=(j(e,"update","main"),j(e,"reset-stat","RESET")),L=j(e,"repeat-hard","REPEAT HARD");function T(){const e=document.querySelector(".stars-container");e&&e.remove(),C.remove()}function N(e,t){const a=e.wrong,r=t.wrong;let o=0;return a<r?o=1:a>r&&(o=-1),o}const M=j("TABLE",i),z=j("tbody"),q=j(e,"table-overlay"),F=j("thead"),H=j("tr"),O=document.querySelector(t),$=j(e,"stat-div"),Z=document.querySelector("#overlay"),I=document.querySelector("body");let W,J=x,R=x,B=x,G=!0;function D(e,t){const a=e[J],r=t[J];let o=0;return G&&a>r||!G&&a<r?o=1:(G&&a<r||!G&&a>r)&&(o=-1),o}function U(e){let t;t=e||JSON.parse(localStorage.getItem(i)),t.sort(D).forEach((e=>{const a=j("tr","table-row");Object.keys(e).forEach((t=>{"correctPer"===t&&(e[t]=function(e,t){let a;return a=0===t?0:t/(t+e)*100,a.toFixed(1)}(e.wrong,e.right)),a.append(j("td",null,e[t].toString()))})),localStorage.setItem(i,JSON.stringify(t)),z.append(a)})),M.append(z),q.append(M),I.append(q)}function X(e){const t=document.querySelectorAll(".card");e?t.forEach((e=>{e.classList.add(c)})):t.forEach((e=>{e.classList.remove(c)}))}$.append(A),$.append(L),q.append($),A.addEventListener("click",(()=>{localStorage.setItem(i,JSON.stringify(P)),z.innerHTML="",U()})),L.addEventListener("click",(()=>{const t=document.querySelector(".underline"),a=J,r=JSON.parse(localStorage.getItem(i)).filter((e=>+e.wrong>0)).sort(N),o=document.querySelector(".cardsPannel");let n=[];t.classList.remove(p),document.querySelector('[data-category="Statistics"').classList.add(p),T(),J="wrong",G=!G,r.forEach((e=>{Object.keys(S).forEach((t=>{S[t].forEach((t=>{e.word===t.word&&n.push(t)}))}))})),n=n.slice(0,8),o.innerHTML="",W.setRepeatWords(n),W.initGameCards(d),W.gameCards.forEach((e=>{o.append(e)})),O.append(j(e,"repeat-head","Repeat difficult words")),O.append(o),0===n.length&&(o.innerHTML='<div class="norepeat-words" style="font-size:200%">Sorry, no words to repeat :\\</div>'),q.remove(),F.innerHTML="",H.innerHTML="",z.innerHTML="",Z.classList.remove(g),W.gameMode&&0!==n.length?document.querySelector(".buttons-pannel").append(E):E.remove(),G=!G,J=a})),Z.addEventListener("click",(()=>{q.remove(),F.innerHTML="",H.innerHTML="",z.innerHTML="",Z.classList.remove(g)}));const Y=document.querySelector(t),Q=document.querySelector(".buttons-pannel");let K=!1;function V(e){const t=document.querySelector(".underline"),a=document.querySelector(`[data-category="${e}"`);e!==d&&(t.classList.remove(p),a.classList.add(p))}function ee(e,t,a){const o=e,i=t.currentCategory===d&&0!==t.repeatWords.length,n=t.currenntCategory!==r&&t.gameMode&&t.currentCategory!==d,s=t.currentCategory===d&&0===t.repeatWords.length;let c;c=a||t.currentCategory,o.innerHTML="",n||i&&t.gameMode?Q.append(E):s&&(o.innerHTML='<div class="norepeat-words" style="font-size:200%">Sorry, no words to repeat :\\</div>'),t.initGameCards(c),t.gameCards.forEach((e=>{o.append(e)})),Y.append(o),V(c)}function te(e,t){const a=e;a.innerHTML="",K||t.menuCards.forEach((e=>{e.addEventListener("click",(()=>{ee(a,t,e.getAttribute(m))})),a.append(e)})),t.menuCards.forEach((e=>{t.gameMode&&e.classList.add(c),a.append(e)})),K=!0,V(r),E.remove()}const ae=document.querySelector("main"),re=new Audio("./assets/audio/click2.mp3"),oe=new Audio("./assets/audio/wrong2.mp3"),ie=new Audio("./assets/audio/success.mp3"),ne=new Audio("./assets/audio/failure8bit2.mp3"),se=document.createElement("img"),ce=j(e,f);let de,le,ge=[],pe=0,me=[],ue="";function he(e,t){ue.forEach((a=>{if(a.word===e){const e=a;t?e.right+=1:e.wrong+=1}})),localStorage.setItem(i,JSON.stringify(ue))}function we(){const e=new Audio(`./assets/audio/${ge[pe]}.mp3`);e.volume=.3,setTimeout((()=>{e.play()}),750)}function fe(){const t=document.querySelectorAll(".front");we(),t.forEach((t=>{t.addEventListener("click",(()=>{const a=t;var o;((o=t.getAttribute(m))===ge[pe]?(he(o,!0),re.play(),pe+=1,me.push(!0),function(){let t;if(pe===ge.length){me.includes(!1)?(t=`Sorry :(<br>${a=me.filter((e=>!e)).length} ${1===a?"error":"errors"} <img src="./assets/icons/sad.gif">`,setTimeout((()=>{ne.play()}),500)):(t='Сorrectly! :) <img src="./assets/icons/giphy.gif">',setTimeout((()=>{ie.play()}),500),pe=0);const o=j(e,"finish-overlay",`${t}`);pe=0,me=[],function(){const e=document.querySelectorAll(".front");setTimeout((()=>{e.forEach((e=>{const t=e.cloneNode(!0);e.parentNode.replaceChild(t,e)}))}),500)}(),ce.remove(),ae.append(o),setTimeout((()=>{const e=document.querySelectorAll(".card");o.remove(),de.currentCategory=r,de.gameMode=!0,te(le,de),e.forEach((e=>{e.classList.add(c)})),ae.append(le)}),4e3),C.remove();const i=document.querySelector(".repeat-head");return i&&i.remove(),!0}var a;return!1}()||(we(),ce.innerHTML+='<img src="./assets/icons/pixel-star-win.png">',ce.childNodes.length>7&&ce.removeChild(ce.firstChild)),1):(he(ge[pe],!1),oe.play(),me.push(!1),we(),ce.innerHTML+='<img src="./assets/icons/pixel-star-lose.png">',ce.childNodes.length>7&&ce.removeChild(ce.firstChild),0))&&a.parentNode.classList.add("inactiveLink")}))}))}se.className="star-win",re.volume=.3,oe.volume=.5,ie.volume=.7,ne.volume=.7;var xe=a(379),ye=a.n(xe),be=a(516);ye()(be.Z,{insert:"head",singleton:!1}),be.Z.locals;const ve=new class{constructor(){this.menuCards=[],this.gameCards=[],this.initMenuCards(),this.gameMode=!1,this.currentCategory=r,this.initStatistics(),this.repeatWords=[]}initStatistics(){this.statistics=localStorage.getItem(i),this.statistics?this.statistics=JSON.parse(this.statistics):(this.statistics=P,localStorage.setItem(i,JSON.stringify(this.statistics)))}initMenuCards(){this.menuCards=[],this.currentCategory=r,k.forEach((e=>{const t=_(e.image,e.categoryName,null,!1);this.menuCards.push(t)}))}initGameCards(t){let a,r=1;this.gameCards=[],this.currentCategory=t,a=t===d?this.repeatWords:S[t],a.forEach((a=>{const o=j(e,n),i=_(a.image,a.word,r,this.gameMode);i.className=u;const s=_(a.image,a.translation,r);s.className="back";const c=j(e,h);this.gameMode||i.append(c),o.append(i,s),this.gameMode||(i.addEventListener("click",(e=>{if(e.target.className===h)o.classList.toggle(w);else{const e=new Audio(`./assets/audio/${i.getAttribute(m)}.mp3`);e.volume=.3,e.play()}this.saveWatch(i.getAttribute(m),t)})),o.addEventListener("mouseleave",(()=>{setTimeout((()=>{o.classList.remove(w)}),100)}))),this.gameCards.push(o),r+=1}))}setCategory(e){this.currentCategory=e}setRepeatWords(e){this.repeatWords=e}saveWatch(e){this.statistics=localStorage.getItem(i),this.statistics=JSON.parse(this.statistics),this.statistics.forEach((t=>{t.word===e&&(t.watch+=1)})),localStorage.setItem(i,JSON.stringify(this.statistics))}},ke=document.querySelector(t),Se=document.querySelector(".buttons-pannel"),Pe=j(e,s),je=document.querySelector("#switch_btn"),_e=document.querySelectorAll(".menu__item"),Ee=document.getElementById("menu__toggle");ke.append(Pe),te(Pe,ve),_e.forEach((e=>{e.addEventListener("click",(()=>{const t=e.getAttribute("data-category"),a=document.querySelector(".repeat-head");a&&a.remove(),t===r?(ve.currentCategory=t,T(),te(Pe,ve),ke.append(Pe),X(ve.gameMode),Ee.checked=!1):t===o?(function(e){W=e,U(),function(e){e.append(j(b,y,"Categories ","category")),e.append(j(b,y,"Words ","word")),e.append(j(b,y,"Translation ","translation")),e.append(j(b,y,"Watched ","watch")),e.append(j(b,y,"Correct ","right")),e.append(j(b,y,"Wrong ","wrong")),e.append(j(b,y,"% ","correctPer"))}(H),F.append(H),M.append(F),document.querySelectorAll(".table-head").forEach((e=>{e.setAttribute("data-active",!1)})),document.querySelector(`[data-table-head="${R}"]`).dataset.active=!0,document.querySelector(`[data-table-head="${R}"]`).dataset.operation=G?"asc":v,document.querySelectorAll(b).forEach((e=>{e.addEventListener("click",(()=>{G=!G,B=e.getAttribute("data-table-head"),z.innerHTML="",B!==R&&(G=!0,document.querySelector('[data-active="true"]').dataset.active=!1),G?e.setAttribute("data-operation","asc"):e.setAttribute("data-operation",v),e.dataset.active=!0,R=e.getAttribute("data-table-head"),U(function(e){const t=JSON.parse(localStorage.getItem(i));return J=e,t.sort(D)}(e.getAttribute("data-table-head")))}))}))}(ve),document.querySelector("#overlay").classList.add(g),Ee.checked=!1):(T(),ve.currentCategory=t,ee(Pe,ve),Ee.checked=!1)}))})),document.getElementById(l).addEventListener("click",(()=>{Ee.checked=!1})),E.addEventListener("click",(()=>{ee(Pe,ve),function(e,t){const a=t.currentCategory===d;C.remove(),ae.append(C),ae.append(ce),ue=JSON.parse(localStorage.getItem(i)),C.addEventListener("click",we),le=e,ce.innerHTML="",ge=[],de=t,a?t.repeatWords.forEach((e=>{ge.push(e.word)})):S[t.currentCategory].forEach((e=>{ge.push(e.word)})),ge=function(e){const t=e;let a,r=t.length;for(;0!==r;)a=Math.floor(Math.random()*r),r-=1,[t[r],t[a]]=[t[a],t[r]];return t}(ge),pe=0,me=[],fe()}(Pe,ve),E.remove()})),je.addEventListener("click",(()=>{if(ve.gameMode=!ve.gameMode,ve.gameMode){const e=ve.currentCategory===d&&0!==ve.repeatWords.length,t=ve.currentCategory!==r&&ve.currentCategory!==d;X(!0),(t||e)&&Se.append(E)}else E.remove(),T(),X(!1);ve.currentCategory!==r&&ee(Pe,ve)}))})()})();