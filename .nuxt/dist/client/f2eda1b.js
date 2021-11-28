(window.webpackJsonp=window.webpackJsonp||[]).push([[54,4,8,9,13,21,25,27,28,29,30,31,34,35,38,40,45,46],{339:function(t,e,n){"use strict";n.r(e);n(1),n(3);var l=n(344),o=n.n(l),r={props:["addClassName","imgSrc","dataDepth"],mounted:function(){var t=document.querySelectorAll(".scene");t&&t.forEach((function(t,i){new o.a(t)}))}},c=n(51),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"shape scene",class:t.addClassName},[n("span",{attrs:{"data-depth":t.dataDepth}},[n("img",{attrs:{src:t.imgSrc,alt:"shape image"}})])])}),[],!1,null,null,null);e.default=component.exports},340:function(t,e,n){var content=n(343);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(54).default)("30fa31d0",content,!0,{sourceMap:!1})},341:function(t,e,n){"use strict";n.r(e);var l={name:"SectionTitle",props:["title","subTitle","addClassName"]},o=n(51),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-title text-center",class:t.addClassName,attrs:{"data-aos":"fade-up"}},[n("h2",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),n("p",{staticClass:"sub-title"},[t._v(t._s(t.subTitle))])])}),[],!1,null,null,null);e.default=component.exports},342:function(t,e,n){"use strict";n(340)},343:function(t,e,n){var l=n(53)(!1);l.push([t.i,'.offcanvas-navigation ul{padding-left:0}.offcanvas-navigation ul li{border-bottom:1px solid hsla(0,0%,100%,.15)}.offcanvas-navigation ul li.menu-item-has-children .sub-menu{height:0;opacity:0;transition:.3s;visibility:hidden}.offcanvas-navigation ul li.menu-item-has-children.active>.sub-menu{height:100%;opacity:1;visibility:visible;padding-left:0}.offcanvas-navigation ul li a{color:#fff;font-size:16px;font-weight:500;padding:10px 0;display:block}.offcanvas-navigation ul li a:hover{color:#1292ee}.offcanvas-navigation ul.sub-menu{margin-left:15px;transition:.4s}.offcanvas-navigation ul.sub-menu li{list-style:none;border:none}.offcanvas-navigation ul.sub-menu li a{color:#fff;font-weight:400}.offcanvas-navigation ul.sub-menu li a:hover{color:#1292ee}.offcanvas-navigation ul.sub-menu li .sub-menu li a{font-size:13px;padding:5px 0}.offcanvas-navigation ul li.menu-item-has-children{position:relative;display:block}.offcanvas-navigation ul li.menu-item-has-children a{display:inline-block}.offcanvas-navigation ul li.menu-item-has-children.active>.menu-expand{background-color:hsla(0,0%,100%,.2)}.offcanvas-navigation ul li.menu-item-has-children.active>.menu-expand i:before{transform:rotate(0)}.offcanvas-navigation ul li.menu-item-has-children .menu-expand{top:5px;right:0;width:35px;height:35px;cursor:pointer;line-height:35px;position:absolute;text-align:center;background-color:hsla(0,0%,100%,.1)}.offcanvas-navigation ul li.menu-item-has-children .menu-expand:hover{background-color:hsla(0,0%,100%,.2)}.offcanvas-navigation ul li.menu-item-has-children .menu-expand i{display:block;border-bottom:1px solid #fff;position:relative;width:10px;text-align:center;top:50%;left:50%;transform:translate(-50%,-50%)}.offcanvas-navigation ul li.menu-item-has-children .menu-expand i:before{width:100%;content:"";border-bottom:1px solid #fff;display:block;position:absolute;top:0;transform:rotate(90deg);transition:.4s}',""]),t.exports=l},345:function(t,e,n){"use strict";n.r(e);var l={name:"MobileNavMenu",mounted:function(){for(var t=document.querySelector("#offcanvas-navigation"),e=t.querySelectorAll(".sub-menu"),n=t.querySelectorAll("a"),i=0;i<e.length;i++)e[i].insertAdjacentHTML("beforebegin","<span class='menu-expand'><i></i></span>");for(var l=t.querySelectorAll(".menu-expand"),o=l.length,r=0;r<o;r++)l[r].addEventListener("click",(function(t){v(t)}));for(var c=0;c<n.length;c++)n[c].addEventListener("click",(function(){d()}));var v=function(t){t.currentTarget.parentElement.classList.toggle("active")},d=function(){var t=document.querySelector("#offcanvas-mobile-menu");null==t||t.classList.remove("active")}}},o=(n(342),n(51)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mobile-navigation"},[n("nav",{staticClass:"offcanvas-navigation",attrs:{id:"offcanvas-navigation"}},[n("ul",[n("li",{staticClass:"menu-item-has-children"},[n("n-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",[n("n-link",{attrs:{to:"/"}},[t._v("Home One")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/home-two"}},[t._v("Home Two")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/home-three"}},[t._v("Home Three")])],1)])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/about"}},[t._v("About Us")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/service"}},[t._v("Services")])],1),t._v(" "),n("li",{staticClass:"menu-item-has-children"},[n("n-link",{attrs:{to:"/"}},[t._v("Project")]),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",[n("n-link",{attrs:{to:"/project"}},[t._v("Project")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/project-details"}},[t._v("Project Details")])],1)])],1),t._v(" "),n("li",{staticClass:"menu-item-has-children"},[n("n-link",{attrs:{to:"/"}},[t._v("Blog")]),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",[n("n-link",{attrs:{to:"/blog-grid"}},[t._v("Blog Grid")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/blog-classic"}},[t._v("Blog Classic")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/blog-details"}},[t._v("Blog Details")])],1)])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/contact-us"}},[t._v("Contact Us")])],1)])])])}),[],!1,null,null,null);e.default=component.exports},346:function(t,e,n){"use strict";n.r(e);var l=n(51),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"site-main-menu"},[n("ul",[n("li",{staticClass:"has-children"},[n("n-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",[n("n-link",{attrs:{to:"/"}},[t._v("Home One")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/home-two"}},[t._v("Home Two")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/home-three"}},[t._v("Home Three")])],1)])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/about"}},[t._v("About Us")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/service"}},[t._v("Services")])],1),t._v(" "),n("li",{staticClass:"has-children"},[n("n-link",{attrs:{to:"/project"}},[t._v("Project")]),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",[n("n-link",{attrs:{to:"/project"}},[t._v("Project")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/project-details"}},[t._v("Project Details")])],1)])],1),t._v(" "),n("li",{staticClass:"has-children"},[n("n-link",{attrs:{to:"/blog-grid"}},[t._v("Blog")]),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",[n("n-link",{attrs:{to:"/blog-grid"}},[t._v("Blog Grid")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/blog-classic"}},[t._v("Blog Classic")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/blog-details"}},[t._v("Blog Details")])],1)])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/contact-us"}},[t._v("Contact Us")])],1)])])}),[],!1,null,null,null);e.default=component.exports},347:function(t){t.exports=JSON.parse('{"footerAboutWidget":{"logoSrc":"/images/logo/footer-logo.png","telephone":"0123456789","email":"demo@example.com","fbUrl":"#","twitterUrl":"#","instagramUrl":"#"},"footerLinkTitleOne":"Services","navListOne":[{"navTitle":"Marketing","navUrl":"/"},{"navTitle":"SEO/SEM","navUrl":"/"},{"navTitle":"Development","navUrl":"/"},{"navTitle":"UX Design","navUrl":"/"}],"footerLinkTitleTwo":"Products","navListTwo":[{"navTitle":"Elementor Guru","navUrl":"/"},{"navTitle":"WooLentor Pro","navUrl":"/"},{"navTitle":"Plugins","navUrl":"/"},{"navTitle":"Page Builder","navUrl":"/"}],"footerLinkTitleThree":"About","navListThree":[{"navTitle":"Features","navUrl":"/"},{"navTitle":"Our Partners","navUrl":"/"},{"navTitle":"Affiliate Program","navUrl":"/"},{"navTitle":"Pricing","navUrl":"/"}],"footerLinkTitleFour":"Contact","navListFour":[{"navTitle":"Support Ticket","navUrl":"/"},{"navTitle":"Help Desk","navUrl":"/"},{"navTitle":"Live Chat","navUrl":"/"},{"navTitle":"FAQs","navUrl":"/"}]}')},348:function(t,e,n){"use strict";n.r(e);n(1),n(46),n(52);var l={components:{Navigation:function(){return Promise.resolve().then(n.bind(null,346))}},data:function(){return{isSticky:!1}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){var e=window.scrollY;t.isSticky=e>=200}))},methods:{mobiletoggleClass:function(t,e){var n=document.querySelector("#offcanvas-menu");"addClass"===t?n.classList.add(e):n.classList.remove(e)},toggleClass:function(t,e){var n=document.querySelector("#search-popup");"addClass"===t?n.classList.add(e):n.classList.remove(e)}}},o=n(51),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-section header-transparent",class:{"is-sticky":t.isSticky}},[n("div",{staticClass:"header-inner"},[n("div",{staticClass:"container position-relative"},[n("div",{staticClass:"row justify-content-between align-items-center"},[n("div",{staticClass:"col-xl-2 col-auto order-0"},[n("div",{staticClass:"header-logo"},[n("n-link",{attrs:{to:"/"}},[n("img",{staticClass:"dark-logo",attrs:{src:"/images/logo/halt.png",alt:"Agency Logo"}}),t._v(" "),n("img",{staticClass:"light-logo",attrs:{src:"/images/logo/logo.png",alt:"Agency Logo"}})])],1)]),t._v(" "),n("div",{staticClass:"col-auto col-xl d-flex align-items-center justify-content-xl-center justify-content-end order-2 order-xl-1"},[n("div",{staticClass:"menu-column-area d-none d-xl-block position-static"},[n("Navigation")],1),t._v(" "),n("div",{staticClass:"header-search-area"},[n("div",{staticClass:"header-search"},[n("a",{staticClass:"header-search-toggle",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.toggleClass("addClass","search-popup-open")}}},[n("i",{staticClass:"pe-7s-search pe-2x pe-va"})])])]),t._v(" "),n("div",{staticClass:"header-mobile-menu-toggle d-xl-none ml-sm-2"},[n("button",{staticClass:"toggle",on:{click:function(e){return t.mobiletoggleClass("addClass","show-mobile-menu")}}},[n("i",{staticClass:"icon-top"}),t._v(" "),n("i",{staticClass:"icon-middle"}),t._v(" "),n("i",{staticClass:"icon-bottom"})])])]),t._v(" "),n("div",{staticClass:"col-xl-2 col d-none d-sm-flex justify-content-end order-1 order-xl-2"})])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Navigation:n(346).default})},349:function(t,e,n){"use strict";n.r(e);n(1),n(46),n(52);var l={components:{MobileNavigation:function(){return Promise.resolve().then(n.bind(null,345))}},methods:{mobiletoggleClass:function(t,e){var n=document.querySelector("#offcanvas-menu");"addClass"===t?n.classList.add(e):n.classList.remove(e)}}},o=n(51),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"popup-mobile-menu popup-mobile-visiable",attrs:{id:"offcanvas-menu"}},[n("div",{staticClass:"mobile-menu-overlay",on:{click:function(e){return t.mobiletoggleClass("removeClass","show-mobile-menu")}}}),t._v(" "),n("div",{staticClass:"inner custom-scrollbar"},[n("div",{staticClass:"mobile-header"},[n("div",{staticClass:"logo"},[n("n-link",{attrs:{to:"/"}},[n("img",{attrs:{src:"/images/logo/logo.png",alt:"site logo"}})])],1),t._v(" "),n("button",{staticClass:"mobile-close-btn",on:{click:function(e){return t.mobiletoggleClass("removeClass","show-mobile-menu")}}})]),t._v(" "),n("div",{staticClass:"menu-content"},[n("MobileNavigation")],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MobileNavigation:n(345).default})},350:function(t,e,n){"use strict";n.r(e);var l={methods:{toggleClass:function(t,e){var n=document.querySelector("#search-popup");"addClass"===t?n.classList.add(e):n.classList.remove(e)}}},o=n(51),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-search-active",attrs:{id:"search-popup"}},[n("div",{staticClass:"sidebar-search-icon"},[n("button",{staticClass:"search-close",on:{click:function(e){return t.toggleClass("removeClass","search-popup-open")}}},[n("i",{staticClass:"pe-7s-close"})])]),t._v(" "),t._m(0)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-search-input"},[n("form",[n("div",{staticClass:"form-search"},[n("input",{staticClass:"input-text",attrs:{id:"search",value:"",placeholder:"",type:"search"}}),t._v(" "),n("button",[n("i",{staticClass:"fa fa-search"})])])]),t._v(" "),n("p",{staticClass:"form-description"},[t._v("Appuiyer sur Entrer pour lancer la recherche")])])}],!1,null,null,null);e.default=component.exports},351:function(t,e,n){"use strict";n.r(e);var footer=n(347),l={data:function(){return{footerData:footer}}},o=n(51),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-section",style:{backgroundColor:"#030e22"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row section-padding pt-0 mtn-30"},[n("div",{staticClass:"col-md-4 col-sm-6 col-12 mt-30"},[n("div",{staticClass:"footer-widget"},[n("div",{staticClass:"footer-logo"},[n("n-link",{attrs:{to:"/"}},[n("img",{attrs:{src:t.footerData.footerAboutWidget.logoSrc,alt:"Logo"}})])],1),t._v(" "),n("div",{staticClass:"footer-widget-content"},[n("div",{staticClass:"content"},[n("p",[n("a",{attrs:{href:"tel:(+1)212-946-2701"}},[t._v(t._s(t.footerData.footerAboutWidget.telephone))])]),t._v(" "),n("p",[n("a",{attrs:{href:"mailto:hello@hasagency.com"}},[t._v(t._s(t.footerData.footerAboutWidget.email))])])]),t._v(" "),n("div",{staticClass:"footer-social-inline"},[n("a",{attrs:{href:t.footerData.footerAboutWidget.twitterUrl}},[n("i",{staticClass:"fab fa-twitter-square"})]),t._v(" "),n("a",{attrs:{href:t.footerData.footerAboutWidget.fbUrl}},[n("i",{staticClass:"fab fa-facebook-square"})]),t._v(" "),n("a",{attrs:{href:t.footerData.footerAboutWidget.instagramUrl}},[n("i",{staticClass:"fab fa-instagram"})])])])])]),t._v(" "),n("div",{staticClass:"col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 mt-30"},[n("div",{staticClass:"footer-widget"},[n("h4",{staticClass:"footer-widget-title"},[t._v(t._s(t.footerData.footerLinkTitleOne))]),t._v(" "),n("div",{staticClass:"footer-widget-content"},[n("ul",t._l(t.footerData.navListOne,(function(nav,e){return n("li",{key:e},[n("n-link",{attrs:{to:nav.navUrl}},[t._v(t._s(nav.navTitle))])],1)})),0)])])]),t._v(" "),n("div",{staticClass:"col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mt-30"},[n("div",{staticClass:"footer-widget"},[n("h4",{staticClass:"footer-widget-title"},[t._v(t._s(t.footerData.footerLinkTitleTwo))]),t._v(" "),n("div",{staticClass:"footer-widget-content"},[n("ul",t._l(t.footerData.navListTwo,(function(nav,e){return n("li",{key:e},[n("n-link",{attrs:{to:nav.navUrl}},[t._v(t._s(nav.navTitle))])],1)})),0)])])]),t._v(" "),n("div",{staticClass:"col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mt-30"},[n("div",{staticClass:"footer-widget"},[n("h4",{staticClass:"footer-widget-title"},[t._v(t._s(t.footerData.footerLinkTitleThree))]),t._v(" "),n("div",{staticClass:"footer-widget-content"},[n("ul",t._l(t.footerData.navListThree,(function(nav,e){return n("li",{key:e},[n("n-link",{attrs:{to:nav.navUrl}},[t._v(t._s(nav.navTitle))])],1)})),0)])])]),t._v(" "),n("div",{staticClass:"col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mt-30"},[n("div",{staticClass:"footer-widget"},[n("h4",{staticClass:"footer-widget-title"},[t._v(t._s(t.footerData.footerLinkTitleFour))]),t._v(" "),n("div",{staticClass:"footer-widget-content"},[n("ul",t._l(t.footerData.navListFour,(function(nav,e){return n("li",{key:e},[n("n-link",{attrs:{to:nav.navUrl}},[t._v(t._s(nav.navTitle))])],1)})),0)])])])]),t._v(" "),t._m(0)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("p",{staticClass:"copyright"},[t._v("© 2021 "),n("a",{attrs:{href:"#"}},[t._v("HasThemes")]),t._v(". All Rights Reserved.")])])])}],!1,null,null,null);e.default=component.exports},353:function(t){t.exports=JSON.parse('[{"id":1,"title":"How your sales can work together in account-based marketing","date":"Apr 06, 2020","view":70,"imgSrc":"/images/blog/370/blog-1.jpg","bigImgSrc":"/images/blog/770/blog-1.jpg","desc":"We\'ve always known the power of digital, and we\'ve mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that businesses have been talking about for so long.","comment":"8"},{"id":2,"title":"The six things marketers need to understand about DTC marketing","date":"Jun 26, 2020","view":92,"imgSrc":"/images/blog/370/blog-2.jpg","bigImgSrc":"/images/blog/770/blog-2.jpg","desc":"We\'ve always known the power of digital, and we\'ve mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that businesses have been talking about for so long.","comment":"9"},{"id":3,"title":"Eleven top tips for developing agile marketing","date":"May 16, 2020","view":55,"imgSrc":"/images/blog/370/blog-3.jpg","bigImgSrc":"/images/blog/770/blog-3.jpg","desc":"We\'ve always known the power of digital, and we\'ve mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that businesses have been talking about for so long.","comment":"15"},{"id":4,"title":"Eleven top tips for developing agile marketing","date":"Feb 14, 2020","view":36,"imgSrc":"/images/blog/370/blog-4.jpg","bigImgSrc":"/images/blog/770/blog-1.jpg","desc":"We\'ve always known the power of digital, and we\'ve mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that businesses have been talking about for so long.","comment":"40"},{"id":5,"title":"How your sales can work together in account-based marketing","date":"Aug 26, 2020","view":46,"imgSrc":"/images/blog/370/blog-5.jpg","bigImgSrc":"/images/blog/770/blog-2.jpg","desc":"We\'ve always known the power of digital, and we\'ve mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that businesses have been talking about for so long.","comment":"32"},{"id":6,"title":"The six things marketers need to understand about DTC marketing","date":"Jun 22, 2020","view":34,"imgSrc":"/images/blog/370/blog-6.jpg","bigImgSrc":"/images/blog/770/blog-3.jpg","desc":"We\'ve always known the power of digital, and we\'ve mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that businesses have been talking about for so long.","comment":"64"}]')},355:function(t,e,n){"use strict";n.r(e);var l={props:["blog"]},o=n(51),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blog"},[n("div",{staticClass:"thumbnail"},[n("n-link",{staticClass:"image",attrs:{to:"/blog-details"}},[n("img",{attrs:{src:t.blog.imgSrc,alt:t.blog.title}})])],1),t._v(" "),n("div",{staticClass:"info"},[n("ul",{staticClass:"meta"},[n("li",[n("i",{staticClass:"far fa-calendar"}),t._v(t._s(t.blog.date))]),t._v(" "),n("li",[n("i",{staticClass:"far fa-eye"}),t._v(t._s(t.blog.view)+" Views")])]),t._v(" "),n("h3",{staticClass:"title"},[n("n-link",{attrs:{to:"/blog-details"}},[t._v(t._s(t.blog.title))])],1),t._v(" "),n("n-link",{staticClass:"link",attrs:{to:"/blog-details"}},[n("mark",[t._v("Read More")])])],1)])}),[],!1,null,null,null);e.default=component.exports},356:function(t){t.exports=JSON.parse('{"portfolios":[{"id":1,"imgSrc":"/images/portfolio/portfolio-1.jpg","title":"Digital marketing","category":"development"},{"id":2,"imgSrc":"/images/portfolio/portfolio-2.jpg","title":"App Development","category":"app design"},{"id":3,"imgSrc":"/images/portfolio/portfolio-3.jpg","title":"Graphics Design","category":"marketing"},{"id":4,"imgSrc":"/images/portfolio/portfolio-4.jpg","title":"Web Development","category":"software"},{"id":5,"imgSrc":"/images/portfolio/portfolio-5.jpg","title":"Construction Project","category":"design"},{"id":6,"imgSrc":"/images/portfolio/portfolio-6.jpg","title":"Illustration Design","category":"app"}]}')},360:function(t,e,n){"use strict";n.r(e);n(1),n(46),n(52);var l={components:{SectionTitle:function(){return Promise.resolve().then(n.bind(null,341))},ShapeWithAnimation:function(){return Promise.resolve().then(n.bind(null,339))}}},o=n(51),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-padding-t90-b100"},[n("div",{staticClass:"container shape-animate"},[n("SectionTitle",{attrs:{title:"We are a full-service creative agency","sub-title":"Our team of designers, developers and creatives are perfectionists who love what they do and love where they work","add-class-name":"mb-30"}}),t._v(" "),t._m(0),t._v(" "),n("shape-with-animation",{attrs:{"add-class-name":"shape-1","data-depth":"4","img-src":"/images/shape-animation/video-shape-1.png"}})],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mtn-30"},[n("div",{staticClass:"col mt-30",attrs:{"data-aos":"fade-up"}},[n("div",{staticClass:"contact-info"},[n("div",{staticClass:"icon"},[n("img",{staticClass:"svgInject",attrs:{src:"/images/svg/linea/linea-basic-map.svg",alt:"Icon"}})]),t._v(" "),n("div",{staticClass:"info"},[n("h4",{staticClass:"title"},[t._v("Our Locations")]),t._v(" "),n("span",{staticClass:"info-text"},[t._v(" 110 W 34th St, NYC. "),n("br"),t._v(" 67 Madison Avenue.")])])])]),t._v(" "),n("div",{staticClass:"col mt-30",attrs:{"data-aos":"fade-up"}},[n("div",{staticClass:"contact-info"},[n("div",{staticClass:"icon"},[n("img",{staticClass:"svgInject",attrs:{src:"/images/svg/linea/linea-basic-message-txt.svg",alt:"Icon"}})]),t._v(" "),n("div",{staticClass:"info"},[n("h4",{staticClass:"title"},[t._v("Give Us A Call")]),t._v(" "),n("span",{staticClass:"info-text"},[t._v(" 0123456789 "),n("br"),t._v(" 0123456789")])])])]),t._v(" "),n("div",{staticClass:"col mt-30",attrs:{"data-aos":"fade-up"}},[n("div",{staticClass:"contact-info"},[n("div",{staticClass:"icon"},[n("img",{staticClass:"svgInject",attrs:{src:"/images/svg/linea/linea-basic-mail-open-text.svg",alt:"Icon"}})]),t._v(" "),n("div",{staticClass:"info"},[n("h4",{staticClass:"title"},[t._v("Help Desk")]),t._v(" "),n("span",{staticClass:"info-text"},[n("a",{attrs:{href:"mailto:demo@example.com"}},[t._v("demo@example.com")]),t._v(" "),n("br"),t._v(" "),n("a",{attrs:{href:"mailto:demo@example.com"}},[t._v("demo@example.com")])])])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{SectionTitle:n(341).default,ShapeWithAnimation:n(339).default})},361:function(t,e,n){"use strict";n.r(e);n(1),n(46),n(52);var l={props:["addClassName"],components:{SectionTitle:function(){return Promise.resolve().then(n.bind(null,341))}},data:function(){return{features:[{id:1,title:"Branding",text:"First impressions count! Make sure your brand works for you. We offer digital marketing.",iconSrc:"/images/svg/linea/linea-basic-target.svg"},{id:2,title:"UX Design",text:"First impressions count! Make sure your brand works for you. We offer digital marketing.",iconSrc:"/images/svg/linea/linea-basic-picture-multiple.svg"},{id:3,title:"Strategy",text:"First impressions count! Make sure your brand works for you. We offer digital marketing.",iconSrc:"/images/svg/linea/linea-basic-picture.svg"}]}}},o=n(51),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-padding-t90-b100"},[n("div",{staticClass:"container"},[n("SectionTitle",{attrs:{title:"Nous créons un plan d'action unique pour nos clients","sub-title":"Une phrase d'accroche ici aussi","add-class-name":"mb-60"}}),t._v(" "),n("div",{staticClass:"row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mtn-30"},t._l(t.features,(function(e,l){return n("div",{key:l,staticClass:"col mt-30",attrs:{"data-aos":"fade-up"}},[n("div",{staticClass:"icon-box text-center",class:t.addClassName},[n("div",{staticClass:"icon"},[n("img",{staticClass:"svgInject",attrs:{src:e.iconSrc,alt:e.title}})]),t._v(" "),n("div",{staticClass:"content"},[n("h3",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),n("div",{staticClass:"desc"},[n("p",[t._v(t._s(e.text))])]),t._v(" "),n("n-link",{staticClass:"link",attrs:{to:"/about"}},[t._v("Learn More")])],1)])])})),0)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SectionTitle:n(341).default})},362:function(t,e,n){"use strict";n.r(e);n(1),n(46),n(52);var l=n(353),o={data:function(){return{blogData:l}},components:{BlogGridItem:function(){return Promise.resolve().then(n.bind(null,355))},SectionTitle:function(){return Promise.resolve().then(n.bind(null,341))}}},r=n(51),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-padding-t90-b100"},[n("div",{staticClass:"container"},[n("SectionTitle",{attrs:{title:"We are a full-service creative agency","sub-title":"Our team of designers, developers and creatives are perfectionists who love what they do and love"}}),t._v(" "),n("div",{staticClass:"row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mtn-60"},t._l(t.blogData.slice(0,3),(function(t,e){return n("div",{key:e,staticClass:"col mt-30"},[n("BlogGridItem",{attrs:{blog:t}})],1)})),0)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SectionTitle:n(341).default,BlogGridItem:n(355).default})},371:function(t,e,n){"use strict";n.r(e);n(1),n(46),n(52);var l={components:{ShapeWithAnimation:function(){return Promise.resolve().then(n.bind(null,339))}}},o=n(51),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-padding-top success-section-padding-bottom-180"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-6"},[n("div",{staticClass:"about-image-area right-0 skill-image-area"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("ShapeWithAnimation",{attrs:{addClassName:"shape-1",dataDepth:"1",imgSrc:"/images/shape-animation/video-shape-1.png"}})],1)]),t._v(" "),t._m(2)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"about-image js-tilt"},[e("img",{attrs:{src:"/images/skill/skill-1.jpg",alt:"image"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"about-image js-tilt"},[e("img",{attrs:{src:"/images/skill/skill-2.jpg",alt:"image"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"offset-lg-1 col-lg-5",attrs:{"data-aos":"fade-up"}},[n("div",{staticClass:"success-content"},[n("div",{staticClass:"section-title-two"},[n("span",{staticClass:"sub-title"},[t._v("Your success is our success")]),t._v(" "),n("h3",{staticClass:"title"},[t._v("Web design, marketing & SEO solutions that get results")])]),t._v(" "),n("div",{staticClass:"progress-bar--one"},[n("div",{staticClass:"progress-charts"},[n("h6",{staticClass:"heading "},[t._v("UX Design")]),t._v(" "),n("div",{staticClass:"progress"},[n("div",{staticClass:"progress-bar gradient-1",staticStyle:{width:"81%",visibility:"visible"},attrs:{role:"progressbar","aria-valuenow":"85","aria-valuemin":"0","aria-valuemax":"100"}},[n("span",{staticClass:"percent-label"},[t._v("81%")])])])]),t._v(" "),n("div",{staticClass:"progress-charts "},[n("h6",{staticClass:"heading "},[t._v("Marketing")]),t._v(" "),n("div",{staticClass:"progress"},[n("div",{staticClass:"progress-bar gradient-2",staticStyle:{width:"72%",visibility:"visible"},attrs:{role:"progressbar","aria-valuenow":"85","aria-valuemin":"0","aria-valuemax":"100"}},[n("span",{staticClass:"percent-label"},[t._v("72%")])])])]),t._v(" "),n("div",{staticClass:"progress-charts "},[n("h6",{staticClass:"heading "},[t._v("Web Design")]),t._v(" "),n("div",{staticClass:"progress"},[n("div",{staticClass:"progress-bar gradient-3",staticStyle:{width:"80%",visibility:"visible"},attrs:{role:"progressbar","aria-valuenow":"80","aria-valuemin":"0","aria-valuemax":"100"}},[n("span",{staticClass:"percent-label"},[t._v("80%")])])])]),t._v(" "),n("div",{staticClass:"progress-charts "},[n("h6",{staticClass:"heading "},[t._v("Development")]),t._v(" "),n("div",{staticClass:"progress"},[n("div",{staticClass:"progress-bar gradient-4",staticStyle:{width:"57%",visibility:"visible"},attrs:{role:"progressbar","aria-valuenow":"90","aria-valuemin":"0","aria-valuemax":"100"}},[n("span",{staticClass:"percent-label"},[t._v("57%")])])])])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{ShapeWithAnimation:n(339).default})},387:function(t,e,n){"use strict";n.r(e);var l={data:function(){return{swiperOptions:{speed:1e3,loop:!0,autoplay:!1,spaceBetween:30,navigation:{nextEl:".home-slider-next",prevEl:".home-slider-prev"}},sliderData:[{id:1,heading:"Designing awesome brands & experiences",text:"We are an agency located in New York. We think strategy, craft design, develop digital and create motion. To forward your brand and business.",bgImgSrc:"/images/hero-image/hero-1.jpg"},{id:2,heading:"Designing awesome brands & experiences",text:"We are an agency located in New York. We think strategy, craft design, develop digital and create motion. To forward your brand and business.",bgImgSrc:"/images/hero-image/hero-2.jpg"}]}}},o=n(51),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"intro-slider"},[n("swiper",{attrs:{options:t.swiperOptions}},t._l(t.sliderData,(function(e,l){return n("swiper-slide",{key:l,staticClass:"swiper-slide"},[n("div",{staticClass:"intro-section overlay bg-cover",style:{backgroundImage:"url("+e.bgImgSrc+")"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row row-cols-lg-1 row-cols-1"},[n("div",{staticClass:"col align-self-center"},[n("div",{staticClass:"intro-content mt-xl-8 mt-lg-8 mt-md-8 mt-sm-8 mt-xs-8"},[n("h2",{staticClass:"title"},[t._v(t._s(e.heading))]),t._v(" "),n("div",{staticClass:"desc"},[n("p",[t._v(t._s(e.text))])]),t._v(" "),n("n-link",{staticClass:"btn btn-primary btn-hover-secondary",attrs:{to:"/about"}},[t._v("Get Started")]),t._v(" "),n("n-link",{staticClass:"btn btn-outline-white btn-hover-primary",attrs:{to:"/about"}},[t._v("Learn More")])],1)])])])])])})),1),t._v(" "),t._m(0),t._v(" "),t._m(1)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home-slider-prev swiper-button-prev main-slider-nav"},[e("i",{staticClass:"fal fa-angle-left"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home-slider-next swiper-button-next main-slider-nav"},[e("i",{staticClass:"fal fa-angle-right"})])}],!1,null,null,null);e.default=component.exports},388:function(t,e,n){"use strict";n.r(e);n(1),n(46),n(52);var l={components:{ShapeWithAnimation:function(){return Promise.resolve().then(n.bind(null,339))}}},o=n(51),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-padding-t90 section-padding-bottom-200"},[n("div",{staticClass:"container"},[t._m(0),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-xl-7 col-lg-6",attrs:{"data-aos":"fade-up"}},[n("div",{staticClass:"about-image-area"},[t._m(1),t._v(" "),t._m(2),t._v(" "),n("ShapeWithAnimation",{attrs:{addClassName:"shape-1",dataDepth:"1",imgSrc:"/images/shape-animation/about-shape-1.png"}})],1)]),t._v(" "),n("div",{staticClass:"col-xl-5 col-lg-6",attrs:{"data-aos":"fade-up"}},[n("div",{staticClass:"about-content-area about-one"},[t._m(3),t._v(" "),n("p",[t._v("We’re boldly individual, always original and refreshingly easy-going. Our vision, passion and ideas are matched with focus, expertise and flair.")]),t._v(" "),n("n-link",{staticClass:"btn btn-primary btn-hover-secondary mt-4",attrs:{to:"/about"}},[t._v("About Us")])],1)])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-title text-center",attrs:{"data-aos":"fade-up"}},[n("h2",{staticClass:"title"},[t._v("We are a full-service creative agency")]),t._v(" "),n("p",{staticClass:"sub-title"},[t._v("Our team of designers, developers and creatives are perfectionists who love what they do and love")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"about-image js-tilt"},[e("img",{attrs:{src:"/images/about/agency_about_1.jpg",alt:"images"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"about-image js-tilt"},[e("img",{attrs:{src:"/images/about/agency_about_2.jpg",alt:"images"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-title-two"},[n("span",{staticClass:"sub-title"},[t._v("Every day brings new challenges")]),t._v(" "),n("h3",{staticClass:"title"},[t._v("Creative agency focused on vision, product and people")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{ShapeWithAnimation:n(339).default})},389:function(t,e,n){"use strict";n.r(e);var l=n(356),o={data:function(){return{portfolioData:l,mixer:null}},mounted:function(){var t=this;this.$nextTick((function(){var e=document.querySelector(".box");t.mixer=new t.mixitup(e)}))}},r=n(51),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-padding",style:{backgroundColor:"#f8faff"}},[n("div",{staticClass:"container"},[t._m(0),t._v(" "),n("div",{staticClass:"row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 no-gutters box"},t._l(t.portfolioData.portfolios,(function(e,l){return n("div",{key:l,staticClass:"col mix",class:e.category},[n("div",{staticClass:"single-portfolio"},[n("div",{staticClass:"thumbnail"},[n("img",{staticClass:"img-fluid",attrs:{src:e.imgSrc,alt:e.title}})]),t._v(" "),n("div",{staticClass:"content"},[n("h5",{staticClass:"title"},[n("n-link",{attrs:{to:"/project-details"}},[t._v(t._s(e.title))])],1)])])])})),0)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row align-items-center mb-30"},[n("div",{staticClass:"col-lg-5"},[n("div",{staticClass:"section-title-two"},[n("span",{staticClass:"sub-title"},[t._v("Portfolios")]),t._v(" "),n("h3",{staticClass:"title"},[t._v("Selected works.")])])]),t._v(" "),n("div",{staticClass:"col-lg-7"},[n("div",{staticClass:"messonry-button text-lg-right text-left"},[n("button",{attrs:{"data-filter":"all"}},[n("span",{staticClass:"filter-text"},[t._v("All")])]),t._v(" "),n("button",{attrs:{"data-filter":".app"}},[n("span",{staticClass:"filter-text"},[t._v("App")])]),t._v(" "),n("button",{attrs:{"data-filter":".development"}},[n("span",{staticClass:"filter-text"},[t._v("Development")])]),t._v(" "),n("button",{attrs:{"data-filter":".marketing"}},[n("span",{staticClass:"filter-text"},[t._v("Marketing")])]),t._v(" "),n("button",{attrs:{"data-filter":".software"}},[n("span",{staticClass:"filter-text"},[t._v("Software")])]),t._v(" "),n("button",{attrs:{"data-filter":".design"}},[n("span",{staticClass:"filter-text"},[t._v("Design")])])])])])}],!1,null,null,null);e.default=component.exports},390:function(t,e,n){"use strict";n.r(e);n(1),n(46),n(52);var l={components:{SectionTitle:function(){return Promise.resolve().then(n.bind(null,341))},ShapeWithAnimation:function(){return Promise.resolve().then(n.bind(null,339))}}},o=n(51),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-padding-t110-b120 newsletter-section bg-cover",style:{backgroundImage:"url('/images/bg/newsletter.jpg')"},attrs:{"data-overlay":"0.7"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row align-items-center"},[n("div",{staticClass:"col-lg-12"},[n("div",{staticClass:"newsletter-content"},[n("SectionTitle",{attrs:{title:"Let’s find out how to work together","sub-title":"Ready to start your project? The contact information collected through this form will only be used to send a response to your inquiry.","add-class-name":"color-light"}}),t._v(" "),t._m(0)],1)])])]),t._v(" "),n("ShapeWithAnimation",{attrs:{"add-class-name":"shape-1","data-depth":"1","img-src":"/images/shape-animation/newsletter-shape.png"}})],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"newsletter-form"},[n("form",[n("input",{attrs:{type:"email",placeholder:"Ente your email",name:"mail"}}),t._v(" "),n("button",{staticClass:"btn btn-primary btn-hover-secondary"},[t._v("Subscribe")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{SectionTitle:n(341).default,ShapeWithAnimation:n(339).default})},405:function(t,e,n){"use strict";n.r(e);n(1),n(46),n(52);var l={components:{TheHeader:function(){return Promise.resolve().then(n.bind(null,348))},OffCanvasMobileMenu:function(){return Promise.resolve().then(n.bind(null,349))},SearchPopup:function(){return Promise.resolve().then(n.bind(null,350))},HeroSliderOne:function(){return Promise.resolve().then(n.bind(null,387))},AboutOne:function(){return Promise.resolve().then(n.bind(null,388))},FeatureOne:function(){return Promise.resolve().then(n.bind(null,361))},SuccessStory:function(){return Promise.resolve().then(n.bind(null,371))},PortfolioGallery:function(){return Promise.resolve().then(n.bind(null,389))},BlogSectionOne:function(){return Promise.resolve().then(n.bind(null,362))},Newsletter:function(){return Promise.resolve().then(n.bind(null,390))},CallToActionOne:function(){return Promise.resolve().then(n.bind(null,360))},TheFooter:function(){return Promise.resolve().then(n.bind(null,351))}},head:function(){return{title:"Corporate Business"}}},o=n(51),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-container"},[n("TheHeader"),t._v(" "),n("OffCanvasMobileMenu"),t._v(" "),n("SearchPopup"),t._v(" "),n("HeroSliderOne"),t._v(" "),n("AboutOne"),t._v(" "),n("FeatureOne",{style:{backgroundColor:"#f8faff"}}),t._v(" "),n("SuccessStory"),t._v(" "),n("PortfolioGallery"),t._v(" "),n("BlogSectionOne"),t._v(" "),n("Newsletter"),t._v(" "),n("CallToActionOne"),t._v(" "),n("TheFooter")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TheHeader:n(348).default,OffCanvasMobileMenu:n(349).default,SearchPopup:n(350).default,HeroSliderOne:n(387).default,AboutOne:n(388).default,FeatureOne:n(361).default,SuccessStory:n(371).default,PortfolioGallery:n(389).default,BlogSectionOne:n(362).default,Newsletter:n(390).default,CallToActionOne:n(360).default,TheFooter:n(351).default})}}]);