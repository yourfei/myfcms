var FCKToolbarItems=new Object();FCKToolbarItems.LoadedItems=new Object();FCKToolbarItems.RegisterItem=function(b,a){this.LoadedItems[b]=a;};FCKToolbarItems.GetItem=function(a){var b=FCKToolbarItems.LoadedItems[a];if(b){return b;}switch(a){case"Source":b=new FCKToolbarButton("Source",FCKLang.Source,null,FCK_TOOLBARITEM_ICONTEXT,true,true,1);break;case"DocProps":b=new FCKToolbarButton("DocProps",FCKLang.DocProps,null,null,null,null,2);break;case"Save":b=new FCKToolbarButton("Save",FCKLang.Save,null,null,true,null,3);break;case"NewPage":b=new FCKToolbarButton("NewPage",FCKLang.NewPage,null,null,true,null,4);break;case"Preview":b=new FCKToolbarButton("Preview",FCKLang.Preview,null,null,true,null,5);break;case"Templates":b=new FCKToolbarButton("Templates",FCKLang.Templates,null,null,null,null,6);break;case"About":b=new FCKToolbarButton("About",FCKLang.About,null,null,true,null,47);break;case"Cut":b=new FCKToolbarButton("Cut",FCKLang.Cut,null,null,false,true,7);break;case"Copy":b=new FCKToolbarButton("Copy",FCKLang.Copy,null,null,false,true,8);break;case"Paste":b=new FCKToolbarButton("Paste",FCKLang.Paste,null,null,false,true,9);break;case"PasteText":b=new FCKToolbarButton("PasteText",FCKLang.PasteText,null,null,false,true,10);break;case"PasteWord":b=new FCKToolbarButton("PasteWord",FCKLang.PasteWord,null,null,false,true,11);break;case"Print":b=new FCKToolbarButton("Print",FCKLang.Print,null,null,false,true,12);break;case"Undo":b=new FCKToolbarButton("Undo",FCKLang.Undo,null,null,false,true,14);break;case"Redo":b=new FCKToolbarButton("Redo",FCKLang.Redo,null,null,false,true,15);break;case"SelectAll":b=new FCKToolbarButton("SelectAll",FCKLang.SelectAll,null,null,true,null,18);break;case"RemoveFormat":b=new FCKToolbarButton("RemoveFormat",FCKLang.RemoveFormat,null,null,false,true,19);break;case"FitWindow":b=new FCKToolbarButton("FitWindow",FCKLang.FitWindow,null,null,true,true,66);break;case"Bold":b=new FCKToolbarButton("Bold",FCKLang.Bold,null,null,false,true,20);break;case"Italic":b=new FCKToolbarButton("Italic",FCKLang.Italic,null,null,false,true,21);break;case"Underline":b=new FCKToolbarButton("Underline",FCKLang.Underline,null,null,false,true,22);break;case"StrikeThrough":b=new FCKToolbarButton("StrikeThrough",FCKLang.StrikeThrough,null,null,false,true,23);break;case"Subscript":b=new FCKToolbarButton("Subscript",FCKLang.Subscript,null,null,false,true,24);break;case"Superscript":b=new FCKToolbarButton("Superscript",FCKLang.Superscript,null,null,false,true,25);break;case"OrderedList":b=new FCKToolbarButton("InsertOrderedList",FCKLang.NumberedListLbl,FCKLang.NumberedList,null,false,true,26);break;case"UnorderedList":b=new FCKToolbarButton("InsertUnorderedList",FCKLang.BulletedListLbl,FCKLang.BulletedList,null,false,true,27);break;case"Outdent":b=new FCKToolbarButton("Outdent",FCKLang.DecreaseIndent,null,null,false,true,28);break;case"Indent":b=new FCKToolbarButton("Indent",FCKLang.IncreaseIndent,null,null,false,true,29);break;case"Blockquote":b=new FCKToolbarButton("Blockquote",FCKLang.Blockquote,null,null,false,true,73);break;case"CreateDiv":b=new FCKToolbarButton("CreateDiv",FCKLang.CreateDiv,null,null,false,true,74);break;case"Link":b=new FCKToolbarButton("Link",FCKLang.InsertLinkLbl,FCKLang.InsertLink,null,false,true,34);break;case"Unlink":b=new FCKToolbarButton("Unlink",FCKLang.RemoveLink,null,null,false,true,35);break;case"Anchor":b=new FCKToolbarButton("Anchor",FCKLang.Anchor,null,null,null,null,36);break;case"Image":b=new FCKToolbarButton("Image",FCKLang.InsertImageLbl,FCKLang.InsertImage,null,false,true,37);break;case"Flash":b=new FCKToolbarButton("Flash",FCKLang.InsertFlashLbl,FCKLang.InsertFlash,null,false,true,38);break;case"Table":b=new FCKToolbarButton("Table",FCKLang.InsertTableLbl,FCKLang.InsertTable,null,false,true,39);break;case"SpecialChar":b=new FCKToolbarButton("SpecialChar",FCKLang.InsertSpecialCharLbl,FCKLang.InsertSpecialChar,null,false,true,42);break;case"Smiley":b=new FCKToolbarButton("Smiley",FCKLang.InsertSmileyLbl,FCKLang.InsertSmiley,null,false,true,41);break;case"PageBreak":b=new FCKToolbarButton("PageBreak",FCKLang.PageBreakLbl,FCKLang.PageBreak,null,false,true,43);break;case"Rule":b=new FCKToolbarButton("Rule",FCKLang.InsertLineLbl,FCKLang.InsertLine,null,false,true,40);break;case"JustifyLeft":b=new FCKToolbarButton("JustifyLeft",FCKLang.LeftJustify,null,null,false,true,30);break;case"JustifyCenter":b=new FCKToolbarButton("JustifyCenter",FCKLang.CenterJustify,null,null,false,true,31);break;case"JustifyRight":b=new FCKToolbarButton("JustifyRight",FCKLang.RightJustify,null,null,false,true,32);break;case"JustifyFull":b=new FCKToolbarButton("JustifyFull",FCKLang.BlockJustify,null,null,false,true,33);break;case"Style":b=new FCKToolbarStyleCombo();break;case"FontName":b=new FCKToolbarFontsCombo();break;case"FontSize":b=new FCKToolbarFontSizeCombo();break;case"FontFormat":b=new FCKToolbarFontFormatCombo();break;case"TextColor":b=new FCKToolbarPanelButton("TextColor",FCKLang.TextColor,null,null,45);break;case"BGColor":b=new FCKToolbarPanelButton("BGColor",FCKLang.BGColor,null,null,46);break;case"Find":b=new FCKToolbarButton("Find",FCKLang.Find,null,null,null,null,16);break;case"Replace":b=new FCKToolbarButton("Replace",FCKLang.Replace,null,null,null,null,17);break;case"Form":b=new FCKToolbarButton("Form",FCKLang.Form,null,null,null,null,48);break;case"Checkbox":b=new FCKToolbarButton("Checkbox",FCKLang.Checkbox,null,null,null,null,49);break;case"Radio":b=new FCKToolbarButton("Radio",FCKLang.RadioButton,null,null,null,null,50);break;case"TextField":b=new FCKToolbarButton("TextField",FCKLang.TextField,null,null,null,null,51);break;case"Textarea":b=new FCKToolbarButton("Textarea",FCKLang.Textarea,null,null,null,null,52);break;case"HiddenField":b=new FCKToolbarButton("HiddenField",FCKLang.HiddenField,null,null,null,null,56);break;case"Button":b=new FCKToolbarButton("Button",FCKLang.Button,null,null,null,null,54);break;case"Select":b=new FCKToolbarButton("Select",FCKLang.SelectionField,null,null,null,null,53);break;case"ImageButton":b=new FCKToolbarButton("ImageButton",FCKLang.ImageButton,null,null,null,null,55);break;case"ShowBlocks":b=new FCKToolbarButton("ShowBlocks",FCKLang.ShowBlocks,null,null,null,true,72);break;case"SpellCheck":if(FCKConfig.SpellChecker=="SCAYT"){b=FCKScayt.CreateToolbarItem();}else{b=new FCKToolbarButton("SpellCheck",FCKLang.SpellCheck,null,null,null,null,13);}break;default:alert(FCKLang.UnknownToolbarItem.replace(/%1/g,a));return null;}FCKToolbarItems.LoadedItems[a]=b;return b;};