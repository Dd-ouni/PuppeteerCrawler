function(){var e,t,n,r={1131:function(e,t,n){"use strict";n.d(t,{l:function(){return a},T:function(){return r.T}});var r=n(71504),a=new r.j({runtimeHookKeys:["render","rootContainer","modifyClientRenderOpts","ssr","router","dynamicPublicPath","slardar"]})},45150:function(e,t,n){"use strict";n(1131),n(10533)},66472:function(e,t,n){"use strict";var r={};n.r(r),n.d(r,{ENTER_FROM:function(){return g},LOG_PASS_THROW_PARAMS:function(){return v},PREVIOUS_PAGE:function(){return b}});var a={};n.r(a),n.d(a,{APP_ID:function(){return R},BASE_NAME:function(){return L},FEELGOOD_APP_KEY:function(){return M},SLARDAR_BID:function(){return T}});var o={};n.r(o),n.d(o,{LOG_CURRENT_PAGE:function(){return ee},LOG_TRACE:function(){return ne},LOG_TRACE_COUNT:function(){return re},LogPageNameList:function(){return te}});var i={};n.r(i),n.d(i,{ERROR_CODE:function(){return lt},genNetError:function(){return st}});var c={};n.r(c),n.d(c,{CHANNEL_PC_WEB:function(){return dt},COMMON_SEARCH_PARAMS:function(){return mt},DISABLE_SECRET_VIDEO_PARAMS:function(){return vt},getNavigatorParams:function(){return pt}});var l={};n.r(l),n.d(l,{COLOR_PRIMARY:function(){return yt},COLOR_TEXT_1:function(){return bt},COLOR_TEXT_2:function(){return gt},COLOR_TEXT_3:function(){return ht}});var u={};n.r(u),n.d(u,{CHANNEL_MENU:function(){return Dt},CHANNEL_REF:function(){return Bt},COMMON_CHANNEL_MENU:function(){return Mt}});var s={};n.r(s),n.d(s,{channel:function(){return u},errorCode:function(){return i},pageNameMap:function(){return Ft},serviceParam:function(){return c},storage:function(){return o},styles:function(){return l},url:function(){return r},webapp:function(){return a}});var f={};n.r(f),n.d(f,{Context:function(){return _n},effect:function(){return On},initialData:function(){return An},reducer:function(){return xn}});n(9875),n(11188),n(79012),n(30391),n(78055),n(17714);var d=n(71504),m=n(1131),p=(n(81299),n(45552),n(97950),n(88770),n(11062),n(52854),n(69529),n(94723),n(60509),n(49988),n(45250)),v=(n(72178),n(87155),n(29055),"extra_params"),b="previous_page",g="enter_from",h={},y="",w=function(){return h},E=function(e){Object.assign(h,e)},_=function(e){y=e},x=n(2049);function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){P(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k={};function j(e){var t,n;null===(t=(n=window).collectEvent)||void 0===t||t.call(n,"config",Object.assign(k,e,function(){var e="";try{var t,n;e=(0,x.parse)(null===(t=window)||void 0===t||null===(n=t.location)||void 0===n?void 0:n.search).ug_source}catch(e){}return{ug_source:e}}()))}function S(e){var t,n,r,a,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;_(e||""),j({user_id:o?e:null===(t=w())||void 0===t?void 0:t.user_id,user_is_login:Number(o),user_type:null===(n=w())||void 0===n?void 0:n.user_type,user_is_auth:null===(r=w())||void 0===r?void 0:r.user_is_auth,user_unique_id:null===(a=w())||void 0===a?void 0:a.user_unique_id})}var I=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),P(this,"config",{}),P(this,"teaConfig",{}),this._initLog(t)}var t,n,r;return t=e,(n=[{key:"sendLog",value:function(e){var t,n,r,a,o=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=i||{},l=c.urlParamList,u=null===(t=this.config[e])||void 0===t?void 0:t.eventName,s=(null===(n=this.config[e])||void 0===n?void 0:n.params)||{},f={};try{f=(l||[]).reduce((function(e,t){return t===v||e[t]||(e[t]=o._setpUrlParam(t),o._setpUrlParam(t)||delete e[t]),e}),{})}catch(e){f={}}var d={};try{d=JSON.parse(this._setpUrlParam(v))}catch(e){}delete i.urlParamList;var m=C(C(C(C({},s),d),f),i||{});null===(r=(a=window).collectEvent)||void 0===r||r.call(a,u,m)}},{key:"_setpUrlParam",value:function(e){var t,n;return(0,x.parse)(null===(t=window)||void 0===t||null===(n=t.location)||void 0===n?void 0:n.search)[e]}},{key:"_initLog",value:function(e){this.config=e}}])&&O(t.prototype,n),r&&O(t,r),e}();function N(){return"undefined"==typeof window}P(I,"logTrace",[]);n(25224),n(61395),n(59821),n(72444),n(37946),n(78144);var R=6383,T="douyin_website",L="",M="cbae2a42b075f1dfc39b9e7df764637c821e7bf2";function D(e){return function(e){if(Array.isArray(e))return B(e)}(e)||function(e){if("undef…7tZ2J/audcITYnw+PjlitHLf6cPv2ElmYP479ot3EI2chChBLHfERAGa1uNXkDq60F06EhP1pjInV4kIELPbjr+HR8IhAtYQhbge3SgsnQcX+Gw8T3Uo2ChL7/dZ7ANyyWnY7erh9+fLh+YXs/InbXymaeB7P+uSzJvLffqLYrwcH75HhcKh0yfo0mXh1Cc3m8aW1iIcRuouvEbj2d8UmNtJ5wMt6eROLO6e/fv7989aBD7mlsNXcKmr3lhbyAEgagZc3Im6KJmn/JYCJ20kPyXv4R01XBvOQrKy9e3f2069Pp06dOpDcAsItcTxury9lWaBHrYqC55foAlCBKj3O+HkEC1jiotxYwS5jzfQKXhjt9Z2dnXc7p8+8A7PCLaplubJa1e31S958cewy1sy+UygUPDgJT80srK+t7fi88xFy5QGXA1cfbxcLHrwUvCD1tDo+IPHgoARLVIkZlbJd7ZhZXS6Y8bbXkB3FLTIicJHjXfKrrNZkqzA77KQ4hOeplpHC7vo6ihVyNbXsVl3eirC9CSb/FXMLdlIcwobbunr1Kp5Ii1IEslvb64iQq7rV5epbjtewSTzgPP4MUeIaTPACGUroih9Vb+XUfrcTRq95VaIJQOLnvWfbYJbVmt3qauU1UJvbVZ5BJyY6TUr4gET/FN/q2P+CIowntaaBFyAWUeXuGNwCo8L2bnNulO2GYhjdXGM0m4+fAdsMu12X5I7XJy81G3MiZYfY8EHWARp4wkvQ3H0MZpGowNXdytvJh55D0AOUApf52hBHQ65W72kEVRm77xTG7Z4zkiyIRdgtwW7XNbcxLWyHf5dAF5z5kLD7TuE8Kjo1x6dWwxMTCIqt3V1Qq8sVcau7PcVqWS65Hbac4AGUilzwYICzUEAwQyU4xH0I5+N2eyKcbqo2Aq+/68NmGVK7rbhl5D5ZVXu+NhfsKjaCjWQCqSVkapv9F8AIucp4y5ji1u+Sh2ecxBwo2lVsFPvFhEaz3e+D2kAuqWW78jx5XXOrTaUOOok5ELe/d4qiG4e//wF+PvF0a2urz26FXGSciXJMXd9eoOYZv32AnqQ8Vq2BQ2T5XYFrN4qjFzzF4yTyW0jfh90KubJahtUSf6fJp9AsuD3jFGdO2fbE0fTKy8dwspvgVcg1x63ZLaiN0XAb6yzPnJSdE0ezmioTIJiur7ObPm0tcIVbeWNqtNtYLOa7jV2ClumgJ8iGsCQqywimVIM3cJbS4GNJOyeOZiNTPkYrD2YJUkuw2mi3UtjieHsDrURTEWkUOfvjiXF4k6sQ5bKfLLfyef+nguxWkhs2lzJOpe7UuHl6Bp1BHpKgyBmu4CzdoNS49guAcei6FYXl1tOneZ8sy5UH3JEr3O0wt2uFymTkIipyPbtPPN5+cU4h8fopEeaW5Y4Tt2sd0XYlNxqwNT5VO3Uaj25aFdtsAaSW3IoBVx1xpbA1jLe+2FJupsTrduo0Hhv1uEyi8RpAtwS6VQOXzPbVPtm853g+PopcfEpswI7NajouUXQaDXJrCly1T46cS50TLvkcbTinXLUCZ23AThGyLBbMoltEjltloqzsOobH7bP4LEnZbeLxeZROCZbpK1BFbitwC8hukah9qaXU+MThFU7GBuwkISuLhT16dAsIt0qnDIx0i5wjuXKX/Cw1Q6p2c2ISVl3+YwMqxQQg3DqvDW5N4+3usbh9DO3igUk1eAyVqgTVwScwExxYFbzPuaT9XmcSNnrVgApsx8J3ZegW0UZcsX2hz6UQbbzdrc6OtP058WR0M2mfarqagy08dAtw5PKQqy6DQuT6XbKI2z637IuR4BLnggPhT2IFwO8jPTvCTrr95KaZeM7fuCW7Cc0tINyyWtWtOt4+e9xOz4yMXcNOSjeZZlK4xSfcUuDWfGS3Qm5Wi9uS0id76WhccaEMna6rfuqN3SWelNv7GZeowmKR3JJcdkt2OW59ZLW622ANtNtwZ0Xdzpwm53ndJdIp3uhhuxS4YsA1rIJYbVvrk0tFd0ZkHtmAnYLVZAaCFs5qChBu1cDV5T4lQK0il9QC/Ti06maocc5CQqrcoJJLXMggVIA819+3M6dp2NjPEGk0i7BbXS67RbS4zfpqhdvSJptkqDANdfv9+nQ8v89/7OmqjyaXe2XNrZA7YvNiq5mZDfVV2xFPSbeeTCZ9s4juFuWqcctyhVt9fbtZTgoy+BJXrlMz9DYmnOP3ntiOeFpuP+I/VxfQ5SpueY0b4naTOuVsOjkTenZG/C/DrDDLbquyXLYrBlx1FaRtXqDZxoy82gH234bZerJeT2YQlutKgRtHuYYBtya7LQTjbT5XFyT5UBFl9YN08tt2pfNP3O726gAGrSSX3XLgyrMpZYmruuWwbWXqs2D/ZAbYP5ps4n1C32iLAAAAAElFTkSuQmCC"},20643:function(e,t,n){"use strict";e.exports=n.p+"image/NotFound.3933d7c5.png"},35663:function(e,t,n){"use strict";e.exports=n.p+"image/ServerError.33c682c5.png"},41219:function(e,t,n){"use strict";e.exports=n.p+"image/Unfollow.05a1cb9c.png"},8056:function(){}},a={};function o(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={id:e,loaded:!1,exports:{}};return r[e].call(n.exports,n,n.exports,o),n.loaded=!0,n.exports}o.m=r,o.c=a,e=[],o.O=function(t,n,r,a){if(!n){var i=1/0;for(u=0;u<e.length;u++){n=e[u][0],r=e[u][1],a=e[u][2];for(var c=!0,l=0;l<n.length;l++)(!1&a||i>=a)&&Object.keys(o.O).every((function(e){return o.O[e](n[l])}))?n.splice(l--,1):(c=!1,a<i&&(i=a));c&&(e.splice(u--,1),t=r())}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,r,a]},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},o.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var a=Object.create(null);o.r(a);var i={};t=t||[null,n({}),n([]),n(n)];for(var c=2&r&&e;"object"==typeof c&&!~t.indexOf(c);c=n(c))Object.getOwnPropertyNames(c).forEach((function(t){i[t]=function(){return e[t]}}));return i.default=function(){return e},o.d(a,i),a},o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.e=function(){return Promise.resolve()},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},o.p="https://sf1-scmcdn-tos.pstatp.com/goofy/ies/douyin_web/",function(){var e={826:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,a,i=n[0],c=n[1],l=n[2],u=0;for(r in c)o.o(c,r)&&(o.m[r]=c[r]);if(l)var s=l(o);for(t&&t(n);u<i.length;u++)a=i[u],o.o(e,a)&&e[a]&&e[a][0](),e[i[u]]=0;return o.O(s)},n=self.webpackChunkdouyin_web=self.webpackChunkdouyin_web||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var i=o.O(void 0,[216],(function(){return o(66472)}));i=o.O(i)}();