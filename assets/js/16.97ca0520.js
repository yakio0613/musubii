(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{180:function(t,s,a){"use strict";a.r(s);var i={computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}},repoLink:function(){var t=this.$site.themeConfig.repo;if(t)return/^https?:/.test(t)?t:"https://github.com/".concat(t)},repoRelease:function(){var t=this.$site.themeConfig.repo;if(t)return/^https?:/.test(t)?t:"https://github.com/".concat(t,"/releases")},copylightYear:function(){return(new Date).getFullYear()}}},e=a(0),o=Object(e.a)(i,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"home is-wide-lg"},[a("section",{staticClass:"section is-hero"},[a("div",{staticClass:"inner-soft"},[a("div",{staticClass:"grid is-middle is-center is-gap-6x"},[a("div",{staticClass:"col is-space"},[t.data.hero.heading1?a("p",{staticClass:"heading is-light is-weight-700"},[a("span",{staticClass:"text is-block is-hero-1"},[t._v(t._s(t.data.hero.heading1))]),t._v(" "),t.data.hero.heading2?a("span",{staticClass:"text is-block is-hero-2"},[t._v(t._s(t.data.hero.heading2))]):t._e()]):t._e(),t._v(" "),t.data.hero.texts?a("h1",{staticClass:"texts is-light is-sm"},t._l(t.data.hero.texts,function(s){return a("span",{staticClass:"text is-fablet-block"},[t._v(t._s(s))])})):t._e(),t._v(" "),t.data.download.path?a("div",{staticClass:"btns is-center is-lg"},[a("a",{staticClass:"btn is-plain is-round is-mobile-full is-weight-900 is-cyan is-font-nunito",attrs:{href:t.data.download.path,download:t.data.download.file}},[a("i",{staticClass:"fas fa-cloud-download-alt",attrs:{"aria-hidden":"true"}}),t._v(" "),a("span",{staticClass:"text"},[t._v(t._s(t.data.download.text))])])]):t._e(),t._v(" "),t.repoLink?a("p",{staticClass:"texts is-light is-center is-sm is-font-nunito"},[a("i",{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}}),t._v(" "),t.data.version?a("span",{staticClass:"text"},[t._v("v"+t._s(t.data.version)+"・")]):t._e(),t._v(" "),a("a",{staticClass:"text is-link-reverse",attrs:{href:t.repoLink}},[a("span",{staticClass:"text"},[t._v("Repository")])]),t._v(" "),t.repoRelease?a("span",{staticClass:"text"},[t._v("・")]):t._e(),t._v(" "),t.repoRelease?a("a",{staticClass:"text is-link-reverse",attrs:{href:t.repoRelease}},[a("span",{staticClass:"text"},[t._v("Releases")])]):t._e()]):t._e()]),t._v(" "),t.data.hero.image?a("div",{staticClass:"col"},[a("img",{staticClass:"obj is-hero-illust",attrs:{src:t.$withBase(t.data.hero.image),alt:"hero"}})]):t._e()])])]),t._v(" "),t.data.about.heading?a("section",{staticClass:"section is-about"},[a("div",{staticClass:"inner-vw is-space"},[a("h2",{staticClass:"heading is-primary is-strong is-center is-lg is-fablet-xl is-tablet-xxl"},[t._v(t._s(t.data.about.heading))]),t._v(" "),t.data.about.texts1?a("p",{staticClass:"texts is-sm is-center"},[t._l(t.data.about.texts1,function(s){return a("span",{staticClass:"text is-inline-block"},[t._v(t._s(s))])}),t._v(" "),a("br"),t._v(" "),t._l(t.data.about.texts2,function(s){return a("span",{staticClass:"text is-inline-block"},[t._v(t._s(s))])})],2):t._e()])]):t._e(),t._v(" "),t._l(t.data.features,function(s){return a("section",{staticClass:"section is-feature"},[a("div",{staticClass:"inner-vw"},[a("div",{staticClass:"grid is-middle is-center is-gap-3x"},[s.image?a("div",{staticClass:"col"},[a("img",{staticClass:"obj is-home-point-illust is-desktop-lg is-wide-xl",attrs:{src:t.$withBase(s.image),alt:"feature"}})]):t._e(),t._v(" "),a("div",{staticClass:"col"},[a("div",{staticClass:"group is-home-point-textbox is-space"},[s.heading?a("h2",{staticClass:"heading is-xl"},[a("span",{staticClass:"text"},[t._v(t._s(s.heading))]),t._v(" "),!0===s.new?a("span",{staticClass:"obj is-badge is-new"},[a("span",{staticClass:"text"},[t._v("NEW")])]):t._e()]):t._e(),t._v(" "),s.text?a("p",{staticClass:"texts is-sm"},[t._v(t._s(s.text))]):t._e()])])])])])}),t._v(" "),a("footer",{staticClass:"section is-footer"},[a("div",{staticClass:"inner"},[a("div",{staticClass:"grid is-center is-gap-2x"},[t.data.footer.license?a("div",{staticClass:"col"},[a("p",{staticClass:"text is-sm is-light"},[a("span",{staticClass:"text"},[t._v("License: ")]),t._v(" "),t.data.footer.license.icon?a("i",{class:t.data.footer.license.icon,attrs:{"aria-hidden":"true"}}):t._e(),t._v(" "),a("span",{staticClass:"text"},[t._v(t._s(t.data.footer.license.name))])])]):t._e(),t._v(" "),t.data.footer.author?a("div",{staticClass:"col"},[a("p",{staticClass:"text is-sm is-light"},[a("span",{staticClass:"text"},[t._v("Author: ")]),t._v(" "),t.data.footer.author.icon?a("i",{class:t.data.footer.author.icon,attrs:{"aria-hidden":"true"}}):t._e(),t._v(" "),t.data.footer.author.link?a("a",{staticClass:"text is-link-reverse",attrs:{href:t.data.footer.author.link}},[t._v(t._s(t.data.footer.author.name))]):a("span",{staticClass:"text"},[t._v(t._s(t.data.footer.author.name))])])]):t._e(),t._v(" "),t.data.footer.copylight?a("div",{staticClass:"col"},[a("p",{staticClass:"text is-sm is-light"},[a("span",{staticClass:"text"},[t._v("© ")]),t._v(" "),t.data.footer.copylight.link?a("a",{staticClass:"text is-link-reverse",attrs:{href:t.data.footer.copylight.link}},[t._v(t._s(t.data.footer.copylight.name))]):a("span",{staticClass:"text"},[t._v(t._s(t.data.footer.copylight.name))]),t._v(" "),a("span",{staticClass:"text"},[t._v(" "+t._s(t.copylightYear))])])]):t._e()])])])],2)},[],!1,null,null,null);o.options.__file="layout-home.vue";s.default=o.exports}}]);