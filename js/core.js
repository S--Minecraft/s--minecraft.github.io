(function(){var n,t,o,e;n=function(n,t){var o;o=new XMLHttpRequest,o.on("load",function(){var n;return 200<=(n=o.status)&&400>n?void t(o.responseText):void t(null)},!1),o.open("GET",n),o.send()},e=new Pjax({elements:"a",selectors:["title","#menu","#nav","#content"]}),t=function(){s.load(),s.load=null,window.off("load",t,!1)},this.s={},o=["profile","works","contact"],document.on("pjax:success",function(){var e,l,i,a,c,r;if(c=$__("script"),c.type="text/javascript",i=location.href.match(/s--minecraft\.github\.io\/?(?:(.+)\/?)?(?:index\.html)?/i),null==i[1])r="./js/top.js";else for(e=0,l=o.length;l>e;e++)a=o[e],i[1]===a&&(r="../js/"+a+".js");return null!=r?n(r,function(n){console.log(n),c.innerHTML=n,Pjax.evalScript(c),null!=s.load&&window.on("load",t,!1)}):void 0},!1)}).call(this);