"use strict";var _templateObject=_taggedTemplateLiteral(["#",""],["#",""]),_templateObject2=_taggedTemplateLiteral([".chan_",""],[".chan_",""]),_templateObject3=_taggedTemplateLiteral(["#cat_","_",""],["#cat_","_",""]),_templateObject4=_taggedTemplateLiteral([".chan_"," .userboards"],[".chan_"," .userboards"]),_templateObject5=_taggedTemplateLiteral(["^(https?://",")(?:","([^/?#]+))?"],["^(https?:\\/\\/",")(?:","([^\\/\\?#]+))?"]),_templateObject6=_taggedTemplateLiteral(["a[data-dir=\"","\"]"],["a[data-dir=\"","\"]"]);function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var _WIKI="http://wiki.1chan.ca/",_SITENAME="\u041E\u0432\u0435\u0440\u043D\u0443\u043B\u044C\u0447";function main(){parent.allReady(),lazyBoy.init(),$.ajaxSetup({dataType:"json"}),$("body").on("click",".toggler",function(){$(jq(_templateObject,$(this).data("toggle"))).slideToggle("fast",function(){settings.onToggle($(this))})}),$("#pinunpin").click(parent.toggleBehavior),$(".menu-toggle").click(menu.toggle),$("#menu-show").on("mouseenter",function(){"vertical"==parent._frames.layout&&_.contains(["overlay","shift"],parent._frames.behavior)&&menu.open()}),settings.init(),chans.init(),live.init(),$("#refresh").click(function(){$(this).hasClass("script-installed")?parent.$("#main").attr("src",router.noFollow):$("#noscript-warning").fadeToggle("fast")}),"netscape"in window&&/ rv:/.test(navigator.userAgent)&&injector.inject("no-shadow-for-you",".showlive #live-toggle svg, #live-panel svg {filter: none!important; -webkit-filter: none!important;}")}function makeEscapeTagLiteralFn(){var b=0<arguments.length&&void 0!==arguments[0]?arguments[0]:function(c){return c};return function(c){var f="";for(var g=0;g<c.length;g++)f+=c[g],g<(1>=arguments.length?0:arguments.length-1)&&(f+=b(""+(arguments.length<=g+1?void 0:arguments[g+1])));return f}}var jq=makeEscapeTagLiteralFn(function(b){return b.replace(/([!"#$%&'()*+,\-./:;<=>?@[\\\]^`{|}~ ])/g,"\\$1")}),rx=makeEscapeTagLiteralFn(_.escapeRegExp),menu={open:function open(){parent.openMenu()},close:function close(){parent.closeMenu()},toggle:function toggle(){parent._open?menu.close():menu.open()}},settings={flatProps:["hiddenChans","showDirs","useAnonym","headOnly"],assocProps:["hiddenCats","deletedCats","cachedUserboards"],init:function init(){var _this=this;this.allProps=this.flatProps.concat(this.assocProps),["flatProps","assocProps"].forEach(function(b){_this[b].forEach(function(c){var d=LSfetchJSON(c);_this[c]=_.isEmpty(d)?"flatProps"===b?[]:{}:d})})},getChanSpecificPreferences:function getChanSpecificPreferences(b){var _this2=this,c={};return this.flatProps.forEach(function(d){c[d]=!!_.includes(_this2[d],b)}),this.assocProps.forEach(function(d){c[d]=_this2[d][b]||[]}),c},handleCheck:function handleCheck(b,c){var d=!_.includes(this[b],c),f=$(jq(_templateObject2,c));return("showDirs"===b||"headOnly"===b)&&f.toggleClass(b,!!d),"useAnonym"===b&&f.find("a[data-href]").each(function(){var g=(d?"http://anonym.to?":"")+$(this).data("href");$(this).attr("href",g)}),this.toggle(c,b,d),!1},toggle:function toggle(b,c,d){d?this[c].push(b):this[c]=_.without(this[c],b),this.save()},toggleAssoc:function toggleAssoc(b,c,d,f){return this[b].hasOwnProperty(c)?f?this[b][c].push(d):this[b][c]=_.without(this[b][c],d):f&&(this[b][c]=[d]),this.save(),this[b][c].length},save:function save(b){var _this3=this,c=b?[b]:this.allProps;c.forEach(function(d){return localStorage[d]=JSON.stringify(_this3[d])})},onToggle:function onToggle(b){var c=b.is(":visible");if(b.hasClass("boards")){var d=b.attr("id").match(/^boards_(.+)/)[1];this.toggle(d,"hiddenChans",!c)}b.hasClass("cat-boards")&&this.toggleAssoc("hiddenCats",b.data("chid"),b.data("catname"),!c)},deleteCategory:function deleteCategory(b,c){var d=$(jq(_templateObject3,b,c)).parents(".category");d.hide(),this.toggleAssoc("deletedCats",b,c,!0),d.parents(".chan").find(".restore-cats").show()},restoreCats:function restoreCats(b){var c=$(jq(_templateObject2,b));c.find(".category").show(),c.find(".restore-cats").hide(),this.deletedCats.hasOwnProperty(b)&&(this.deletedCats[b]=[],this.save())}};function handleBoardClick(b){handleLinkClick(b),$(b).addClass("boardover").parents(".chan").addClass("onchan")}function handleHomeClick(b){handleLinkClick(b),$(b).parents(".chan").addClass("onchan")}function handleLinkClick(b){$(".boardover").removeClass("boardover"),$(".onchan").removeClass("onchan"),"horizontal"==parent._frames.layout&&menu.close(),parent.history.replaceState(null,null,"/#/"+b.href)}var chans={own:{own:!0,id:"!OWN",wiki:"\u041E\u0432\u0435\u0440\u043D\u0443\u043B\u044C\u0447",boards:[{name:"",boards:[{desc:"\u041C\u0435\u0442\u0430\u0434\u043E\u0441\u043A\u0430",url:"https://0chan.one/meta",external:!0},{desc:"\u041A\u0430\u0442\u0430\u043B\u043E\u0433 \u0441\u0430\u0439\u0442\u043E\u0432",url:"https://0chan.one/catalog",external:!0},{desc:"\u0420\u0435\u0434\u0430\u043A\u0442\u043E\u0440 \u0441\u0430\u0439\u0442\u043E\u0432",url:"https://0chan.one/editor",external:!0},{desc:"Ballsmash",url:"https://0chan.one/mash",external:!0}]}],name:"\u041E\u0432\u0435\u0440\u043D\u0443\u043B\u044C\u0447",url:"http://0chan.one"},build:function build(b){var _this4=this;this.model=b,$("#content").html([this.own].concat(b).reduce(function(d,f){return d+_this4.buildChan(f)},"")),this.insertWidgets();var c=localStorage.compiledCSS;c?injector.inject("framestyles",c):lessCompiler.compile(this.model)},rebuildChan:function rebuildChan(b){this.model[_.findIndex(this.model,{id:b.id})]=b,$(jq(_templateObject2,b.id)).html(this.buildChan(b)),this.insertWidgets(),this.sync()},buildChan:function buildChan(b){var _this5=this;_.assign(b,settings.getChanSpecificPreferences(b.id)),b.wiki&&b.wiki.match(/https?:\/\//)||(b.wiki=_WIKI+(b.wiki||b.name)),""===b.prefix&&delete b.prefix,_.defaults(b,this.defaults);var c=b.boards&&b.boards.length||b.userboards,d=b.own?b.url+"/index.html":(!b.own&&b.useAnonym?"http://anonym.to?":"")+b.url,f=_.escape(b.name),g="<div class=\"chan chan_"+b.id+(b.colors?"":" uncolorized")+(b.headOnly?" headOnly":"")+(b.showDirs?" showDirs":"")+(c?"":" no-boards")+"\"><a onclick=\"handleHomeClick(this)\" target=\"main\" href=\""+d+"\" class=\"chan-header head-link\" data-href=\""+b.url+"\""+(b.own?" onclick=\"router.clearHash()\"":"")+"><div class=\"chan-name\">"+f+"</div></a><div class=\"chan-header\"><div class=\"chan-name toggler\" data-toggle=\"boards_"+b.id+"\">"+f+"</div></div><div class=\"chan-overlay chan-overlay-left\">"+(c?"<a onclick=\"handleHomeClick(this)\" class=\"iconic-link home-link\" target=\"main\" href=\""+d+"\" data-href=\""+b.url+"\" title=\"\u0414\u043E\u043C\u0430\u0448\u043D\u044F\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430\""+(b.own?" onclick=\"router.clearHash()\"":"")+"><svg class=\"icon\"><use xlink:href=\"#i-home\"></use></svg></a>":"")+"<a class=\"iconic-link\" target=\"main\" href=\""+b.wiki+"\" title=\"\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043D\u0430 \u0432\u0438\u043A\u0438\"><svg class=\"icon\"><use xlink:href=\"#i-info\"></use></svg></a></div><div class=\"chan-overlay chan-overlay-right\"><button class=\"toggler\" data-toggle=\"settings_"+b.id+"\" title=\"\u041C\u0435\u043D\u044E \u0441\u0430\u0439\u0442\u0430\"><svg class=\"icon\"><use xlink:href=\"#i-dots\"></use></svg></button></div><div class=\"chan-menu\" style=\"display:none\" id=\"settings_"+b.id+"\"><div class=\"settings-entry ifnoboards-hide\"><label for=\"showdirs_"+b.id+"\"><input type=\"checkbox\" id=\"showdirs_"+b.id+"\" "+(b.showDirs?"checked":"")+" onchange=\"settings.handleCheck('showDirs', '"+b.id+"')\"><span>\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0438\u0438</span></label></div><div class=\"settings-entry ifnoboards-hide\"><label for=\"headonly_"+b.id+"\"><input type=\"checkbox\" id=\"headonly_"+b.id+"\" "+(b.headOnly?"checked":"")+" onchange=\"settings.handleCheck('headOnly', '"+b.id+"')\"><span>\u0421\u043A\u0440\u044B\u0442\u044C \u0434\u043E\u0441\u043A\u0438</span></label></div>"+(b.own?"":"<div class=\"settings-entry\"><label for=\"useanonym_"+b.id+"\"><input type=\"checkbox\" id=\"useanonym_"+b.id+"\" "+(b.useAnonym?"checked":"")+" onchange=\"settings.handleCheck('useAnonym', '"+b.id+"')\"><span>\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C anonym.to</span></label></div><div class=\"settings-entry restore-cats\" "+(b.deletedCats.length?"":"style=\"display:none\"")+"><button class=\"trash-btn\" onclick=\"settings.restoreCats('"+b.id+"')\"><svg class=\"icon\"><use class=\"i-trash\" xlink:href=\"#i-trash\"></use><use class=\"i-trash-open\" xlink:href=\"#i-trash-open\"></use></svg><span>\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438</span></button></div><div class=\"settings-entry\"><button onclick=\"chans.remove('"+b.id+"')\"><svg class=\"icon\"><use xlink:href=\"#i-delete\"></use></svg><span>\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0438\u0437 \u0444\u0440\u0435\u0439\u043C\u0430</span></button></div>")+"</div>";this.preventRouterRegistering||router.register(b);var j=b.boards;return widgets.supported.forEach(function(k){b.hasOwnProperty(k)&&(j=[{name:widgets[k].name,widgetType:k,widgetID:widgets[k].newWidget(b[k],b.id)}].concat(j))}),b.userboards&&function(){b.userboards_system||(b.userboards_system="instant"),j=[{name:b.userboards_catname,boards:b.cachedUserboards,userboards:!0}].concat(j);var k=function k(l){var o=normalizeUbrds[b.userboards_system](l);_.eq(b.cachedUserboards,o)||_this5.updateUserboards(b,o)};$.get(b.userboards).done(k.bind(_this5)).fail(function(l){console.error(l),$.get("/cors-proxy.php?url="+b.userboards).done(function(o){200==o.status.http_code&&k(o.contents)}).fail(function(o){console.error(o)})})}(),(j&&j.length&&(g+="<div class=\"boards\" id=\"boards_"+b.id+"\" "+(b.hiddenChans?"style=\"display:none\"":"")+">"+j.reduce(function(k,l){return k+_this5.buildCat(b,l,!(1<j.length))},"")+"</div>"),g+="</div>",g)},buildCat:function buildCat(b,c,d){c.name=_.escape(c.name).replace(" ","\xA0");var f=c.widgetType?"!"+c.widgetType:c.name,g=_.includes(b.hiddenCats,f),j=c.boards&&c.boards.length,k=" style=\"display:none\"",l=!c.widgetID&&!j||_.includes(b.deletedCats,f),o="<div class=\"category"+(c.userboards?" userboards":"")+"\""+(l?k:"")+(c.widgetID?" data-widget=\""+c.widgetID+"\"":"")+">";return d||(o+="<div class=\"cat-header toggler\" data-toggle=\"cat_"+b.id+"_"+f+"\"><div class=\"ch-name\">"+c.name+"</div><div class=\"cat-options\"><svg class=\"icon i-delete del-cat\" onclick=\"event.stopPropagation();settings.deleteCategory('"+b.id+"', '"+f+"')\"><use xlink:href=\"#i-delete\"></use></svg></div></div>"),(j||c.widgetID)&&(o+="<div class=\"cat-boards\""+(g?k:"")+(d?"":" id=\"cat_"+b.id+"_"+f+"\" data-chid=\""+b.id+"\" data-catname=\""+f+"\"")+">"),j&&(c.boards.forEach(function(p){var q=_.escape(p.desc),r=_.escape(p.dir),s=p.external?p.url:b.url+b.prefix+r+b.postfix,u=(b.useAnonym?"http://anonym.to?":"")+s;o+="<a target=\"main\" href=\""+u+"\" class=\"board"+(p.external?" external":"")+"\" data-href=\""+s+"\" data-dir=\""+r+"\" onclick=\"handleLinkClick(this)\">"+(p.external?"":"<span class=\"board-dir\">/"+r+"/ - </span>")+"<span class=\"board-name\">"+q+"</span></a>"}),o+="</div>"),c.widgetID&&(o+="<div class=\"widget-placeholder\" id=\""+c.widgetID+"\"></div></div>"),o+="</div>",o},defaults:{userboards_catname:"2.0",prefix:"/",postfix:""},init:function init(){var _this6=this,b=LSfetchJSON("myChans_new");b&&this.build(b);var c=[new Promise(function(g,j){$.getJSON("/chans/chans.json?v="+new Date().getTime()).done(function(k){k.origin="server",g(k)}).fail(j)})],d=LSfetchJSON("mydrafts");d&&d.chans&&c.push(new Promise(function(g){var j=[];d.chans.forEach(function(k){k.name&&k.url&&(k.id=k.id+"!draft",j.push(k))}),g({origin:"drafts",chans:j,version:d.version||"unknown"})}));var f=LSfetchJSON("catalogVersions");Promise.all(c).then(function(g){var j={},k=[],l=[];g.forEach(function(o){j[o.origin]=o.version,k=k.concat(o.chans);var p=f?+f[o.origin]||null:null;if(b&&b.length&&p!==+o.version){l.push({origin:o.origin,version:o.version});var q="drafts"==o.origin?{section:"drafts"}:function(r){return"default"==r.section||"custom"==r.section};_.map(_.filter(b,q),"id").forEach(function(r){var s=_.find(o.chans,{id:r});s?_this6.rebuildChan(s):(_this6.remove(r),console.warn("Removed unknown chan #"+r+" from frame"))})}}),k.forEach(router.register.bind(router)),_this6.preventRouterRegistering=!0,b&&b.length||(localStorage.removeItem("compiledCSS"),_this6.build(_.filter(k,"included"))),l.length&&(lessCompiler.compile(_this6.model),l.forEach(function(o){console.info("Updated "+o.origin+"-originated chans' cache to v.="+o.version)})),_this6.versions=j,_this6.sync()})},preventRouterRegistering:!1,remove:function remove(b){return _.remove(this.model,{id:b}),$(jq(_templateObject2,b)).remove(),this.sync(),!1},updateUserboards:function updateUserboards(b,c){var d={name:b.userboards_catname,boards:c,userboards:!0};$(jq(_templateObject4,b.id)).replaceWith(this.buildCat(b,d,!1)),settings.cachedUserboards[b.id]=c,settings.save("cachedUserboards")},sync:function sync(){_.each(this.model,function(b){return delete b.cachedUserboards}),localStorage.catalogVersions=JSON.stringify(this.versions),localStorage.myChans_new=JSON.stringify(this.model)},insertWidgets:function insertWidgets(){document.querySelectorAll(".widget-placeholder").forEach(function(b){var c=b.getAttribute("id");if(widgets.pool.hasOwnProperty(c)){var d=widgets.pool[c];b.parentNode.replaceChild(d.el,b)}})}},normalizeUbrds={instant:function instant(b){return b.map(function(c){return c.name&&(c.dir=c.name),delete c.postcount,delete c.name,c})},"0chan":function chan(b){return b.boards.map(function(c){return c.desc=c.name,delete c.name,c})}};function LSfetchJSON(b){var c=null,d=localStorage[b];if("undefined"!=typeof d)try{c=JSON.parse(d)}catch(f){console.error(f),localStorage.removeItem(b)}return c}var lessCompiler={compile:function compile(b){var _this7=this,c="";b.forEach(function(d){if(d.colors){var f=("chan_"+d.id).replace("!","\\!");c+="."+f+" { \n          @bgcolor: #"+d.colors[0]+";  @linkcolor: #"+d.colors[1]+"; "+(d.advanced_less||_this7.base)+"}\n\n"}}),less.render(c,function(d,f){d?console.error(d):(localStorage.compiledCSS=f.css,injector.inject("framestyles",f.css))})},base:"background: @bgcolor; a, .chan-overlay .icon { color: @linkcolor; } &:hover { background: darken(@bgcolor, 8%); } &.onchan { box-shadow: inset -2px 0 fadeout(@linkcolor, 25%); } & when (lightness(@bgcolor) < 70%) { color: #C3C3C3; a:hover, .ch-name:hover, .icon:hover, .rw-playpause:hover, .volumeter:hover { color: white; } .board:hover { background: rgba(255, 255, 255, .08); } } & when (lightness(@bgcolor) > 70%) { color: #404040; a:hover, .ch-name:hover, .icon:hover, .rw-playpause:hover, .volumeter:hover { color: black; } .board:hover { background: rgba(0, 0, 0, .08); } }"};NodeList.prototype.forEach=Array.prototype.forEach;var injector={inject:function inject(b,c){var d="injector:"+b,f=document.getElementById(d);if(f)return void(f.innerHTML=c);var g=document.head||document.getElementsByTagName("head")[0],j=document.createElement("style");j.type="text/css",j.id=d,j.styleSheet?j.styleSheet.cssText=c:j.appendChild(document.createTextNode(c)),g.appendChild(j)},remove:function remove(b){var c="injector:"+b,d=document.getElementById(c);if(d){var f=document.head||document.getElementsByTagName("head")[0];f&&f.removeChild(document.getElementById(c))}}},widgets={pool:{},supported:["radio"]};widgets.radio={name:"\u0420\u0430\u0434\u0438\u043E",newWidget:function newWidget(b,c){var _this8=this,d={streams:[],currentStream:null,url:b.url,$el:$("<div class=\"radio-widget disabled\"></div>")},f={volume:+(localStorage["radio_"+c+"_volume"]||1),stream:+(localStorage["radio_"+c+"_streamid"]||0)};b.streams.forEach(function(l){if(l.hasOwnProperty("n")){var o=_.template(l.name),p=_.template(l.path);_this8.mixedRange(l.n).forEach(function(q){d.streams.push({name:o({n:q}),path:p({n:q}),mime:l.mime})})}else d.streams.push(l)}),d.audio=$("<audio controls>").appendTo(d.$el)[0],d.playPause=this.playPause.bind(d),d.audio.volume=f.volume,d.audio.onloadeddata=function(){return d.$el.removeClass("disabled")},$("<div class=\"rw-playpause\"><div class=\"pause-icon\"></div><div class=\"play-icon\"></div></div>").appendTo(d.$el).click(d.playPause);var g=$("<div class=\"select-wrapper\">"),j=[];d.streams.forEach(function(l,o){j.push("<option value=\""+o+"\">"+l.name+"</option>")}),d.setStream=this.setStream.bind(d),$("<select>").append(j).val(f.stream).change(function(){d.setStream(+this.value),localStorage["radio_"+c+"_streamid"]=+this.value}).appendTo(g),g.appendTo(d.$el),lazyBoy.addJob(function(){return d.setStream(f.stream)});var k=this.buildVolumeter(c,70,20,function(l){d.audio.volume=l,localStorage["radio_"+c+"_volume"]=l},f.volume);return d.$el.append(k),d.reflectVolumeChange=k.setV,d.setVolume=this.setVolume.bind(d),d.onCategoryClose=function(){d.audio.paused||d.playPause()},d.el=d.$el[0],widgets.pool["radio_"+c]=d,"radio_"+c},all:{},setStream:function setStream(b){if(this.currentStream!==b){var c=this.streams[b],d=!this.audio.paused;this.audio.setAttribute("src",this.url+c.path),this.audio.setAttribute("type",c.mime),d&&this.audio.play()}},setVolume:function setVolume(b){this.audio.volume=b,this.reflectVolumeChange(b)},playPause:function playPause(b){b=b||null,3==this.audio.networkState?(this.audio.pause(),this.$el.removeClass("streaming")):this.audio.paused?($(".radio-widget audio").each(function(){this.pause()}),this.audio.play(),this.$el.addClass("streaming")):(this.audio.pause(),this.$el.removeClass("streaming"))},buildVolumeter:function buildVolumeter(b,c,d,f,g){function j(s){if(r){var u=(s.pageX-k.offset().left)/c;0>u&&(u=0),1<u&&(u=1),k.setV(u),f&&f(u)}}g=g||1;var k=$("<div class=\"volumeter\">"),l=function l(s){var u=function u(y){return document.createElementNS("http://www.w3.org/2000/svg",y)},w=u("svg");w.setAttribute("width",c),w.setAttribute("height",d),w.setAttribute("viewBox","0 0 "+c+" "+d),w.classList.add(s);var x=u("polygon");return x.setAttribute("points","0,"+d+" "+c+",0 "+c+","+d),w.appendChild(x),w},o=l("vm-bg"),p=l("vm-fg"),q=$("<div class=\"vm-fg-wrapper\">");q[0].appendChild(p),k.append(q),k[0].appendChild(o),k.setV=function(s){return q.css({width:s*c+"px"})},k.setV(g);var r=!1;return k.mousedown(function(s){r=!0,j(s)}),$("body").mousemove(j).on("mouseup mouseleave blur",function(){r=!1}),k},mixedRange:function mixedRange(b){for(var c,d=[],f=/(?:([0-9]+)(?:\-([0-9]+))?(?:, ?)?)/g;null!==(c=f.exec(b));)c.index===f.lastIndex&&f.lastIndex++,c[2]?d=d.concat(_.range(c[1],+c[2]+1)):d.push(+c[1]);return d}};var router={chans:{},register:function register(b){this.chans[b.id]={exp:new RegExp(rx(_templateObject5,b.url.split(/^https?:\/\//)[1]||b.url,b.prefix||chans.defaults.prefix)),name:b.name,boards:_.flatten(_.map(b.boards,"boards"))}},currentHash:"",determineIdentity:function determineIdentity(b){var c=null;return _.find(this.chans,function(d,f){var g=d.exp.exec(b);if(null!==g){var j=g[2]||null;if(c={id:f,name:d.name},j){c.dir=j;var k=_.find(d.boards,{dir:j});k&&(c.desc=k.desc)}return 1}return!1}),c},indicateOn:function indicateOn(b){var c=$(jq(_templateObject2,b.id)),d="!OWN"===b.id,f=d?"":b.name;if($(".onchan").removeClass("onchan"),$(".boardover").removeClass("boardover"),c.length&&c.addClass("onchan"),b.dir){b.dir=decodeURIComponent(b.dir);var g=c.find(jq(_templateObject6,b.dir));g.length&&(g.addClass("boardover"),!b.desc&&(b.desc=g.find(".board-name").text())),b.desc&&(f+=(d?"":":")+b.desc)}parent.document.title=(f?f+" \u2022 ":"")+_SITENAME},sync:function sync(b){if("string"==typeof b.data){if(b.data.match(/overnullchlive\.html/)){parent.script_installed=!0,scriptInstalled();try{parent.frames.main.scriptInstalled()}catch(d){}return}if(b.data.split(/\/$/)[0]==parent.location.protocol+"//"+parent.location.host)return parent.frames.main.location.href="/index.html",void(this.noFollow="/index.html");router.noFollow=b.data,parent.history.replaceState(null,null,"/#/"+b.data);var c=router.determineIdentity(b.data);c?router.indicateOn(c):parent.document.title=_SITENAME}},follow:function follow(){if(parent.location.hash&&this.noFollow.split(/#\/?/)[1]!==parent.location.hash){var b=parent.location.hash.split(/#\/?/)[1];parent.frames.main.location.href=b,this.noFollow=b}},clearHash:function clearHash(){parent.document.title=_SITENAME,parent.history.replaceState({},parent.document.title,"/")},noFollow:!1};function scriptInstalled(){$("#refresh").addClass("script-installed").attr("title","\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C")}var lazyBoy={init:function init(){$(window).load(this.execute.bind(this))},que:[],execute:function execute(){for(this.ready=!0;this.que.length;)this.que.splice(0,1)[0]()},addJob:function addJob(b){this.ready?b():this.que.push(b)},ready:!1};window.addEventListener("message",router.sync,!1);try{parent.frames.main.document.location.pathname.match(/catalog/)&&parent.frames.main.window.postMessage("overnullchlive.html",chans.own.url)}catch(b){}function check3d(){if(!window.getComputedStyle)return!1;var c,b=document.createElement("p"),d={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};for(var f in document.body.insertBefore(b,null),d)void 0!==b.style[f]&&(b.style[f]="translate3d(1px,1px,1px)",c=window.getComputedStyle(b).getPropertyValue(d[f]));return document.body.removeChild(b),void 0!==c&&0<c.length&&"none"!==c}var live={init:function init(){var _this9=this,b="transform: translate"+(check3d()?"3d":"")+"(-50%"+(check3d()?",0,0":"")+");";injector.inject("paneshift",".showlive .pane-container { "+b+" -o-"+b+" -webkit-"+b+" -moz-"+b+" -ms-"+b+" }"),this.update(),$("#live-toggle").click(function(){return"horizontal"!=parent._frames.layout||parent._open?void _this9.toggle():(menu.open(),void _this9.toggle(!0))}),$("#live-add").click(this.showForm.bind(this)),$("#live-refresh").click(this.update.bind(this)),this.scheduleUpdate(60000)},update:function update(){var _this10=this;$.get("/live/live.json?v="+new Date().getTime()).done(function(b,c,d){_this10.hasOwnProperty("currentList")&&_this10.currentList===d.responseText||(_this10.build(b),_this10.currentList=d.responseText)})},toggle:function toggle(b){$("body").toggleClass("showlive",b)},build:function build(b){var _this11=this;$("#live-content").html(b.reduce(function(c,d){return c+_this11.buildLink(d)},""))},buildLink:function buildLink(b){return"<a target=\"main\" href=\""+_.escape(b.url)+"\" class=\"board external\" onclick=\"handleBoardClick(this)\"><span class=\"board-name\">"+_.escape(b.description)+"</span><span class=\"link-domain\">"+_.escape(this.getDomainName(b.url))+"</span></a>"},showForm:function showForm(){"horizontal"==parent._frames.layout&&menu.close(),parent.frames.live.$("#url").val(parent.location.hash.split(/^#\/?/)[1]),parent.toggleShare(),parent.frames.live.$("#description").focus()},getDomainName:function getDomainName(b){return b.match(/^https?:\/\/(?:www\.)?([^\/#\?]+)/i)[1]},scheduleUpdate:function scheduleUpdate(b){clearInterval(this.interval),this.interval=setInterval(this.update.bind(this),b)}};
//# sourceMappingURL=frame.js.map