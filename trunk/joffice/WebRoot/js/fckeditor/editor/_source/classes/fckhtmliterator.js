var FCKHtmlIterator=function(a){this._sourceHtml=a;};FCKHtmlIterator.prototype={Next:function(){var b=this._sourceHtml;if(b==null){return null;}var a=FCKRegexLib.HtmlTag.exec(b);var c=false;var d="";if(a){if(a.index>0){d=b.substr(0,a.index);this._sourceHtml=b.substr(a.index);}else{c=true;d=a[0];this._sourceHtml=b.substr(a[0].length);}}else{d=b;this._sourceHtml=null;}return{"isTag":c,"value":d};},Each:function(b){var a;while((a=this.Next())){b(a.isTag,a.value);}}};var FCKHtmlIterator=function(a){this._sourceHtml=a;};FCKHtmlIterator.prototype={Next:function(){var b=this._sourceHtml;if(b==null){return null;}var a=FCKRegexLib.HtmlTag.exec(b);var c=false;var d="";if(a){if(a.index>0){d=b.substr(0,a.index);this._sourceHtml=b.substr(a.index);}else{c=true;d=a[0];this._sourceHtml=b.substr(a[0].length);}}else{d=b;this._sourceHtml=null;}return{"isTag":c,"value":d};},Each:function(b){var a;while((a=this.Next())){b(a.isTag,a.value);}}};