var FCKToolbarFontsCombo=function(b,a){this.CommandName="FontName";this.Label=this.GetLabel();this.Tooltip=b?b:this.Label;this.Style=a?a:FCK_TOOLBARITEM_ICONTEXT;this.DefaultLabel=FCKConfig.DefaultFontLabel||"";};FCKToolbarFontsCombo.prototype=new FCKToolbarFontFormatCombo(false);FCKToolbarFontsCombo.prototype.GetLabel=function(){return FCKLang.Font;};FCKToolbarFontsCombo.prototype.GetStyles=function(){var d=FCKStyles.GetStyle("_FCK_FontFace");if(!d){alert("The FCKConfig.CoreStyles['Size'] setting was not found. Please check the fckconfig.js file");return{};}var g={};var h=FCKConfig.FontNames.split(";");for(var e=0;e<h.length;e++){var a=h[e].split("/");var c=a[0];var b=a[1]||c;var f=FCKTools.CloneObject(d);f.SetVariable("Font",c);f.Label=b;g[b]=f;}return g;};FCKToolbarFontsCombo.prototype.RefreshActiveItems=FCKToolbarStyleCombo.prototype.RefreshActiveItems;FCKToolbarFontsCombo.prototype.StyleCombo_OnBeforeClick=function(f){f.DeselectAll();var c=FCKSelection.GetBoundaryParentElement(true);if(c){var e=new FCKElementPath(c);for(var a in f.Items){var d=f.Items[a];var b=d.Style;if(b.CheckActive(e)){f.SelectItem(d);return;}}}};