(function(){var n;n=function(){$$.each($$.I("works-tab-bar").children,function(n){return"All"!==n.id&&"works-panels"!==n.id?n.on("click",function(){var n;return n=$$.I("works-panels"),$$.each(n.children,function(n){n.addClass("hidden")}),$$.each(n.C(this.id),function(n){n.removeClass("hidden")})}):void 0}),$$.I("All").on("click",function(){$$.each($$.I("works-panels").children,function(n){n.removeClass("hidden")})})},document.on("DOMContentLoaded",function(){n(),componentHandler.upgradeDom()})}).call(this);