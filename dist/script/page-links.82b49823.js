"use strict";(self.webpackChunkcnblogs_theme_simplememory=self.webpackChunkcnblogs_theme_simplememory||[]).push([[583,148],{1568:function(n,i){i.Z='<div class="links-item"> <img src="##avatar##"> <p class="links-info"> <span class="links-info-name">##name##</span> <span class="links-info-text">##introduction##</span> </p> <div class="links-icon"> <a href="##url##" target="_blank" title="访问链接"><i class="iconfont ##icon##"></i></a> </div> </div>'},3515:function(n,i,t){t.a(n,(async function(n,e){try{t.r(i),t.d(i,{default:function(){return r}});var a=t(3796),o=t(7142),l=t(8047),s=t(8479),c=t(6717),f=n([s]);function r(){$.__config.animate.articleBanner.enable&&t.e(561).then(t.bind(t,7715)),(()=>{for(let n=0;n<=10;n++)setTimeout((function(){let n=$("#main");n.find(".cnblogs-markdown").removeClass("cnblogs-markdown"),n.find(".cnblogs-post-body").removeClass("cnblogs-post-body")}),500*n)})(),(0,a.Z)(),"books"!==$.__status.pageType&&(0,s.Z)(),(0,c.Z)(),(0,l.Z)(),(0,o.Z)()}s=(f.then?(await f)():f)[0],e()}catch(d){e(d)}}))},3480:function(n,i,t){t.a(n,(async function(n,e){try{t.r(i),t.d(i,{default:function(){return c}});var a=t(3515),o=t(1568),l=t(8479),s=n([a,l]);function c(){(0,a.default)(),(()=>{if($.__config.links.page.length){t.e(297).then(t.bind(t,8724));let n=$("#cnblogs_post_body"),i="";$.each($.__config.links.page,(n=>{let t=$.__config.links.page[n];t.title&&(i+='<h1 class="iconfont '+t.icon+'" style="'+t.style+'">'+t.title+"</h1>"),i+='<div id="links-box">',$.each(t.links,(n=>{let e=o.Z,a=t.links[n];e=$.__tools.batchTempReplacement(e,[["avatar",void 0!==a.avatar?a.avatar:""],["name",void 0!==a.name?a.name:""],["introduction",void 0!==a.introduction?a.introduction:""],["url",void 0!==a.url?a.url:""],["icon",n%3==0?"icon-zhifeiji":n%3==1?"icon-like-fill":"icon-flashlight-fill"]]),i+=e})),i+="</div>"}));let e=$(".articleSuffix-flg");e.length?e.before(i):n.append(i)}})(),(0,l.Z)()}[a,l]=s.then?(await s)():s,e()}catch(f){e(f)}}))}}]);