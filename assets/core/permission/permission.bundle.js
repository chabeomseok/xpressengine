!function(e){function a(s){if(t[s])return t[s].exports;var n=t[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,a),n.l=!0,n.exports}var t={};a.m=e,a.c=t,a.d=function(e,t,s){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:s})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},a.p="",a(a.s=124)}({124:function(e,a,t){e.exports=t(125)},125:function(e,a,t){"use strict";function s(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}var n=function(){function e(e,a){for(var t=0;t<a.length;t++){var s=a[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(a,t,s){return t&&e(a.prototype,t),s&&e(a,s),a}}(),i={ENTER:13,TAB:9,BACKSPACE:8,UP_ARROW:38,DOWN_ARROW:40,ESCAPE:27},r=function(){function e(a){var t=a.$wrapper,n=a.key,i=a.memberSearchUrl,r=a.groupSearchUrl,c=a.permission,l=a.type,o=a.vgroupAll;s(this,e),this.$wrapper=t,this.key=n,this.memberSearchUrl=i,this.groupSearchUrl=r,this.permission=c,this.type=l,this.vgroupAll=o,this.query="",this.suggestion=[],this.placeholder=XE.Lang.trans("xe::explainIncludeUserOrGroup"),this.selectedIndex="",this.includeSelectedIndex=-1,this.excludeSelectedIndex=-1,this.MIN_QUERY_LENGTH=2}return n(e,[{key:"bindEvents",value:function(){var e=this;this.$wrapper.on("change",".chkModeAble",function(a){$(a.target).is(":checked")?e.$wrapper.find("input:not(.chkModeAble)").prop("disabled",!0):e.$wrapper.find("input:not(.chkModeAble)").prop("disabled",!1)}),this.$wrapper.on("keydown",".inputMemberGroup",function(a){var t=a.target.value.trim(),s=$(this),n=a.keyCode,r=s.parent().find(".ReactTags__suggestions ul"),c=s.data("input");if(t.length>=e.MIN_QUERY_LENGTH){if(r.length>0){var l=parseInt(s.data("index"),10),o=0;switch(n){case i.UP_ARROW:o=0==l?r.find("li").length-1:l-1,s.data("index",o),r.find("li").eq(o).addClass("active").siblings().removeClass("active");break;case i.DOWN_ARROW:o=l==r.find("li").length-1?0:l+1,s.data("index",o),r.find("li").eq(o).addClass("active").siblings().removeClass("active");break;case i.ENTER:case i.TAB:if(a.preventDefault(),r.find("li.active").length>0){var p=r.find("li.active").data("tag"),d="",u="",g="";"member"==r.data("target")?"include"==c?(d=e.type+"User",u="user",g="@"):(d=e.type+"Except",u="except",g="@"):(d=e.type+"Group",u="group",g="%");var m=e.permission[u],v=!1;m.length>0?(m.forEach(function(e,a){if(e.id===p.id)return void(v=!0)}),v||e.permission[u].push(p)):e.permission[u].push(p);var h=e.permission[u].map(function(e){return e.id});v||(r.closest(".ReactTags__tags").find("[name="+d+"]").val(h.join().trim()),r.closest(".ReactTags__tags").find("."+u+"Wrap").append('<span class="ReactTags__tag">'+(g+(p.display_name||p.name))+'<a class="ReactTags__remove btnRemoveTag" data-id="'+p.id+'">x</a></span>')),r.remove(),s.val("").data("index",-1).focus()}a.preventDefault();break;case i.ESCAPE:e[c+"SelectedIndex"]=0,r.parent().empty(),s.focus()}}}else if(i.BACKSPACE===n){var f=s.closest(".ReactTags__tags").find(".ReactTags__selected span");!t&&f.length>0&&e.removeTag(f.eq(f.length-1))}}),this.$wrapper.find(".ReactTags__suggestions").on("mouseenter","li",function(){var e=$(this);e.closest("ul");e.addClass("active").siblings().removeClass("active")}),this.$wrapper.find(".ReactTags__suggestions").on("click","li",function(){var a=$(this),t=a.data("tag"),s=a.closest("ul"),n=a.closest(".ReactTags__tagInput").find("input:text"),i=n.data("input"),r=(t.id,""),c="",l="";"member"==s.data("target")?"include"==i?(r=e.type+"User",c="user",l="@"):(r=e.type+"Except",c="except",l="@"):(r=e.type+"Group",c="group",l="%");var o=e.permission[c],p=!1;o.length>0?(o.forEach(function(e,a){if(e.id===t.id)return void(p=!0)}),p||e.permission[c].push(t)):e.permission[c].push(t);var d=e.permission[c].map(function(e){return e.id});p||(s.closest(".ReactTags__tags").find("[name="+r+"]").val(d.join().trim()),s.closest(".ReactTags__tags").find("."+c+"Wrap").append('<span class="ReactTags__tag">'+(l+(t.display_name||t.name))+'<a class="ReactTags__remove btnRemoveTag" data-id="'+t.id+'">x</a></span>')),s.remove(),n.val("").data("index",-1).focus()}),this.$wrapper.on("keyup",".inputMemberGroup",function(a){var t=a.target.value.trim(),s=$(this),n=a.keyCode;if(t.length>=e.MIN_QUERY_LENGTH){if(-1==[i.ENTER,i.TAB,i.UP_ARROW,i.DOWN_ARROW,i.ESCAPE,37,39].indexOf(n)){var r="";r+="<ul>",r+='<li>Searching ... <span class="spinner" role="spinner"><span class="spinner-icon"></span></span></li>',r+="</ul>",s.parent().find(".ReactTags__suggestions").html(r);var c=t.substr(0,1);switch(c){case"@":t=t.substr(1,t.length),e.searchMember(s,t);break;case"%":t=t.substr(1,t.length),e.searchGroup(s,t)}}}else s.parent().find(".ReactTags__suggestions").empty()}),this.$wrapper.on("click",".btnRemoveTag",function(a){a.preventDefault(),e.removeTag($(this).closest("span"))})}},{key:"makeIt",value:function(e,a){var t=a.trim().replace(/[-\\^$*+?.()|[\]{}]/g,"\\$&"),s=RegExp(t,"gi");return(e.display_name||e.name).replace(s,"<mark>$&</mark>")}},{key:"removeTag",value:function(e){var a=this,t=e.closest(".ReactTags__selected").data("ptype"),s=e.data("id"),n="";switch(t){case"user":n=a.type+"User";break;case"except":n=a.type+"Except";break;case"group":n=a.type+"Group"}a.permission[t].forEach(function(e,n){if(e.id!==s)return void a.permission[t].splice(n,1)});var i=a.permission[t].map(function(e){return e.id});e.closest(".ReactTags__tags").find("[name="+n+"]").val(i.join().trim()),e.remove()}},{key:"searchMember",value:function(e,a){var t=this,s=t.memberSearchUrl;$.ajax({url:s+"/"+a,method:"get",dataType:"json",cache:!1,success:function(s){if(s.length>0){var n="";n+='<ul data-target="member">',s.forEach(function(e,s){n+='<li class="" data-tag=\''+JSON.stringify(e)+"'>",n+="<span>"+t.makeIt(e,a)+"</span>",n+="</li>"}),n+="</ul>",e.parent().find(".ReactTags__suggestions").html(n)}else e.parent().find(".ReactTags__suggestions").empty()},error:function(e,a,t){}})}},{key:"searchGroup",value:function(e,a){var t=this,s=t.groupSearchUrl;$.ajax({url:s+"/"+a,method:"get",dataType:"json",cache:!1,success:function(s){if(console.log(s),s.length>0){var n="";n+='<ul data-target="group">',s.forEach(function(e,s){n+="<li data-tag='"+JSON.stringify(e)+"'>",n+="<span>"+t.makeIt(e,a)+"</span>",n+="</li>"}),n+="</ul>",e.parent().find(".ReactTags__suggestions").html(n)}else e.parent().find(".ReactTags__suggestions").empty()},error:function(e,a,t){}})}},{key:"render",value:function(){var e=this,a=this.permission.mode,t=this.permission.rating,s=!1,n=[{value:"super",name:XE.Lang.trans("xe::memberRatingAdministrator")},{value:"manager",name:XE.Lang.trans("xe::memberRatingManager")},{value:"member",name:XE.Lang.trans("xe::member")},{value:"guest",name:XE.Lang.trans("xe::guest")}],i=!1;"manual"!==a&&"inherit"!==a||(s=!0,"manual"!==a&&(i=!0));var r=this.permission.group.map(function(e){return e.id}),c=this.permission.user.map(function(e){return e.id}),l=this.permission.except.map(function(e){return e.id}),o="";if(o+="<div>",s){var p="inherit"===a?'checked="checked"':"";o+='<div class="form-group">',o+='<div class="checkbox">',o+='<label><input type="checkbox" name="'+this.type+'Mode" class="chkModeAble" value="inherit" '+p+" /> "+XE.Lang.trans("xe::inheritMode")+"</label>",o+="</div>",o+="</div>"}o+='<div class="form-group">',o+="<label>회원 등급</label>",o+='<div class="radio">',n.forEach(function(a){var s=a.value==t?"checked":"";o+='<label><input type="radio" '+(i?'disabled="disabled"':"")+' name="'+e.type+'Rating" value="'+a.value+'" '+(s?'checked="checked"':"")+" /> "+a.name+" &nbsp;</label>"}),o+="</div>",o+="</div>",o+='<div class="form-group">',o+="<label>"+XE.Lang.trans("xe::includeUserOrGroup")+"</label>",o+='<div class="ReactTags__tags">',o+='<div class="ReactTags__selected groupWrap" data-ptype="group">',this.permission.group.forEach(function(e){var a=e,t="%"+(a.display_name||a.name);o+='<span class="ReactTags__tag">'+t+'<a href="#" class="ReactTags__remove btnRemoveTag" data-id="'+a.id+'">x</a></span>'}),o+="</div>",o+='<div class="ReactTags__selected userWrap" data-ptype="user">',this.permission.user.forEach(function(e){var a="@"+(e.display_name||e.name);o+='<span class="ReactTags__tag">'+a+'<a href="#" class="ReactTags__remove btnRemoveTag" data-id="'+e.id+'|">x</a></span>'}),o+="</div>",o+='<div class="ReactTags__tagInput">',o+='<input type="text" placeholder="'+this.placeholder+'" class="form-control inputMemberGroup" data-input="include" '+(i?'disabled="disabled"':"")+' value="'+this.query+'" data-index="-1" />',o+='<div class="ReactTags__suggestions" data-input="include"></div>',o+="</div>",o+='<input type="hidden" name="'+this.type+'Group" class="form-control includeGroups" value="'+r.join().trim()+'" />',o+='<input type="hidden" name="'+this.type+'User" class="form-control includeMembers" value="'+c.join().trim()+'" />',o+="</div>",o+="</div>",this.vgroupAll.length>=1&&(o+='<div class="form-group">',o+="<label>"+XE.Lang.trans("xe::includeVGroup")+"</label>",o+=e.vgroupAll.map(function(a){var t=!1;return-1!=function(e,a){for(var t=0;t<a.length;t++)if(a[t]==e)return t;return-1}(a.id,this.permission.vgroup)&&(t=!0),'<label><input type="checkbox" '+(i?'disabled="disabled"':"")+' name="'+e.type+'VGroup[]" value="'+a.id+'" '+(t?'checked="checked"':"")+" /> "+a.title+" &nbsp;</label>"}),o+="</div>"),o+='<div class="form-group">',o+="<label>"+XE.Lang.trans("xe::excludeUser")+"</label>",o+='<div class="ReactTags__tags">',o+='<div class="ReactTags__selected exceptWrap" data-ptype="except">',this.permission.except.forEach(function(e){var a=e.display_name||e.name;a="@"+a,o+='<span class="ReactTags__tag">'+a+'<a href="#" class="ReactTags__remove btnRemoveTag" data-id="'+e.id+'">x</a></span>'}),o+="</div>",o+='<div class="ReactTags__tagInput">',o+='<input type="text" placeholder="'+XE.Lang.trans("xe::explainExcludeUser")+'" class="form-control inputMemberGroup" data-input="exclude" '+(i?'disabled="disabled"':"")+' data-index="-1" />',o+='<div class="ReactTags__suggestions" data-input="exclude"></div>',o+="</div>",o+='<input type="hidden" name="'+this.type+'Except" class="form-control excludeMembers" value="'+l+'" />',o+="</div>",o+="</div>",o+="</div>",this.$wrapper.html(o)}}]),e}();$(".__xe__uiobject_permission").each(function(e){var a=$(this),t=a.data("data"),s=a.data("key"),n=a.data("type"),i=a.data("memberUrl"),c=a.data("groupUrl"),l=a.data("vgroupAll"),o=new r({$wrapper:a,key:s,memberSearchUrl:i,groupSearchUrl:c,permission:t,type:n,vgroupAll:l});o.render(),o.bindEvents()})}});