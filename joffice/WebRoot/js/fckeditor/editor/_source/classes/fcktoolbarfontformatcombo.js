var FCKToolbarFontFormatCombo=function(b,a){if(b===false){return;}this.CommandName="FontFormat";this.Label=this.GetLabel();this.Tooltip=b?b:this.Label;this.Style=a?a:FCK_TOOLBARITEM_ICONTEXT;this.NormalLabel="Normal";this.PanelWidth=190;this.DefaultLabel=FCKConfig.DefaultFontFormatLabel||"";};FCKToolbarFontFormatCombo.prototype=new FCKToolbarStyleCombo(false);FCKToolbarFontFormatCombo.prototype.GetLabel=function(){return FCKLang.FontFormat;};FCKToolbarFontFormatCombo.prototype.GetStyles=function(){var e={};var g=FCKLang["FontFormats"].split(";");var c={p:g[0],pre:g[1],address:g[2],h1:g[3],h2:g[4],h3:g[5],h4:g[6],h5:g[7],h6:g[8],div:g[9]||(g[0]+" (DIV)")};var f=FCKConfig.FontFormats.split(";");for(var b=0;b<f.length;b++){var a=f[b];var d=FCKStyles.GetStyle("_FCK_"+a);if(d){d.Label=c[a];e["_FCK_"+a]=d;}else{alert("The FCKConfig.CoreStyles['"+a+"'] setting was not found. Please check the fckconfig.js file");}}return e;};FCKToolbarFontFormatCombo.prototype.RefreshActiveItems=function(g){var c=FCK.ToolbarSet.CurrentInstance.Selection.GetBoundaryParentElement(true);if(c){var e=new FCKElementPath(c);var f=e.Block;if(f){for(var a in g.Items){var d=g.Items[a];var b=d.Style;if(b.CheckElementRemovable(f)){g.SetLabel(b.Label);return;}}}}g.SetLabel(this.DefaultLabel);};FCKToolbarFontFormatCombo.prototype.StyleCombo_OnBeforeClick=function(g){g.DeselectAll();var c=FCK.ToolbarSet.CurrentInstance.Selection.GetBoundaryParentElement(true);if(c){var e=new FCKElementPath(c);var f=e.Block;for(var a in g.Items){var d=g.Items[a];var b=d.Style;if(b.CheckElementRemovable(f)){g.SelectItem(d);return;}}}};