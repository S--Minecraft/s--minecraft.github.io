(function(){var e,t,r,a;e=function(){return/^(?:https?:\/\/)?s--minecraft\.github\.io\/contact\/?(?:index.html)?$/i.test($$.I("url").value)?!0:!1},a=function(){var e,s,t,r,a;s=$$.I("form-main"),e=$$.I("submit"),t=$$.I("status"),a=new XMLHttpRequest,a.on("load",function(){var r;200<=(r=a.status)&&400>r?(s.reset(),t.innerHTML='<i class="material-icons">done</i>Sent successfully',t.removeClass("error"),t.addClass("success"),e.rmvAttr("disabled")):(t.innerHTML='<i class="material-icons">error</i>Errored requesting',t.removeClass("success"),t.addClass("error"),e.rmvAttr("disabled"))},!1),a.on("timeout",function(){t.innerHTML='<i class="material-icons">error</i>Errored requesting has been timeout',t.removeClass("success"),t.addClass("error"),e.rmvAttr("disabled")},!1),a.on("loadstart",function(){e.attr("disabled",!0)},!1),a.open("POST","https://script.google.com/macros/s/AKfycbw4z8qk2haZYjgaB_W9noCGttOIk7JJiscsCENtQhjG1hN2JfG8/exec"),a.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),r="from_email="+$$.I("email").value,r+="&from_name="+$$.I("name").value,r+="&subject="+$$.I("title").value,r+="&message="+$$.I("message").value,a.timeout=1e4,a.send(r)},t=function(){$$.I("form-main").on("submit",function(s){var t;s.preventDefault(),e()?a():(t=$$.I("status"),t.innerHTML='<i class="material-icons">error</i>Errored sending',t.removeClass("success"),t.addClass("error"))},!1)},r=function(){t()},s.load=r,document.on("DOMContentLoaded",r,!1),console.log("contact load")}).call(this);