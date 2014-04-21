var MailForm=function(b,c,a){return this.setup(b,c,a);};MailForm.prototype.setup=function(d,j,a){var h=this.initToolbar();var e=new copyFieldItems();var g=new Ext.data.JsonReader({root:"data"},[{name:"mail.recipientIDs",mapping:"recipientIDs"},{name:"mail.copyToIDs",mapping:"copyToIDs"},{name:"mail.mailStatus",mapping:"mailStatus"},{name:"mail.fileIds",mapping:"fileIds"},{name:"mail.mailId",mapping:"mailId"},{name:"mail.recipientNames",mapping:"recipientNames"},{name:"mail.subject",mapping:"subject"},{name:"mailImportantFlag",mapping:"importantFlag"},{name:"mail.filenames",mapping:"filenames"},{name:"mail.content",mapping:"content"},{name:"mail.copyToNames",mapping:"copyToNames"}]);var b=new Ext.FormPanel({url:__ctxPath+"/communicate/saveMail.do",id:"mailFormPanel",border:false,autoHeight:true,reader:g,items:[{fieldLabel:"收件人ID列表用,分隔",name:"mail.recipientIDs",id:"mail.recipientIDs",xtype:"hidden"},{fieldLabel:"抄送人ID列表用,分开",name:"mail.copyToIDs",id:"mail.copyToIDs",xtype:"hidden"},{fieldLabel:"邮件状态",name:"mail.mailStatus",id:"mail.mailStatus",xtype:"hidden",value:1},{fieldLabel:"附件IDs",name:"mail.fileIds",xtype:"hidden",id:"mail.fileIds"},{fieldLabel:"BOXID",name:"boxId",xtype:"hidden",id:"mailBoxId"},{fieldLabel:"MailId",name:"mail.mailId",xtype:"hidden",id:"mail.mailId"},{fieldLabel:"操作",name:"replyBoxId",xtype:"hidden",id:"mail.replyBoxId"},{fieldLabel:"附件名称列表",name:"mail.filenames",xtype:"hidden",id:"mail.filenames"},{fieldLabel:"主题",xtype:"textfield",name:"mail.subject",id:"mail.subject",allowBlank:false,width:530,blankText:"邮件主题为必填"},{xtype:"container",layout:"column",height:32,defaultType:"textfield",items:[{xtype:"label",text:"收件人:",style:"padding-left:0px;padding-top:3px;",width:106},{width:350,fieldLabel:"收件人姓名列表",name:"mail.recipientNames",id:"mail.recipientNames",allowBlank:false,blankText:"请选择收件人",readOnly:true},{width:80,xtype:"button",text:"选择收件人",iconCls:"btn-mail_recipient",handler:function(){UserSelector.getView(function(n,l){var m=Ext.getCmp("mail.recipientIDs");var k=Ext.getCmp("mail.recipientNames");m.setValue(n);k.setValue(l);}).show();}},{width:80,xtype:"button",text:"我要抄送",iconCls:"btn-mail_copy",handler:function(){var k=Ext.getCmp("copyField");k.show();}}]},{xtype:"container",id:"copyField",layout:"column",height:32,hidden:true,defaultType:"textfield",items:[e]},{xtype:"container",layout:"column",height:32,defaultType:"textfield",style:"padding-left:0px;",items:[{xtype:"label",text:"优先级:",style:"padding-left:0px;padding-top:3px;",width:105},{width:350,fieldLabel:"邮件优先级",hiddenName:"mail.importantFlag",id:"mailImportantFlag",xtype:"combo",mode:"local",editable:false,value:"1",triggerAction:"all",store:[["1","一般"],["2","重要"],["3","非常重要"]]},{xtype:"checkbox",name:"sendMessage",boxLabel:"告诉他有信"}]},{xtype:"container",layout:"column",autoHeight:true,defaultType:"textfield",items:[{xtype:"label",text:"附件:",width:105},{xtype:"panel",width:355,layout:"column",name:"filenames.display",defaults:{border:false},id:"filenames.display",items:[{xtype:"label",height:40,id:"placeholder"}]},{xtype:"button",text:"上传",iconCls:"btn-upload",handler:function(){var k=App.createUploadDialog({file_cat:"communicate/mail",callback:uploadMailAttach});k.show();}}]},{fieldLabel:"内容",name:"mail.content",id:"mail.content",xtype:"htmleditor"}]});if(d!=null&&d!="undefined"){var i=Ext.getCmp("mail.mailId");i.setValue(d);if(a=="draft"){b.getForm().load({deferredRender:false,url:__ctxPath+"/communicate/getMail.do",method:"post",params:{mailId:d,folderId:3,boxId:j},waitMsg:"正在载入数据...",success:function(k,m){var r=Ext.getCmp("mail.copyToIDs");if(r.value!=""){var l=Ext.getCmp("copyField");l.show();}var p=Ext.getCmp("mail.filenames").value;if(p!=""){var q=Ext.getCmp("filenames.display");var s=Ext.getCmp("placeholder");if(s!=null){s.hide();}var t=p.split(",");var o=Ext.getCmp("mail.fileIds").value.split(",");for(var n=0;n<t.length;n++){q.add(new Ext.form.FieldSet({border:false,frame:false,id:"mailAttachDisplay"+o[n],columnWidth:0.5,html:'<img src="'+__ctxPath+'/images/flag/attachment.png"/>&nbsp;&nbsp;'+t[n]+'&nbsp;&nbsp;<a href="javascript:deleteAttach('+o[n]+')" >删除</a>'}));}q.doLayout(true);}},failure:function(k,l){}});}else{if(a=="reply"){b.getForm().load({deferredRender:false,url:__ctxPath+"/communicate/optMail.do",method:"post",params:{mailId:d,boxId:j,opt:"回复"},waitMsg:"正在载入数据...",success:function(k,l){Ext.getCmp("mail.replyBoxId").setValue(j);},failure:function(k,l){}});}else{if(a=="forward"){b.getForm().load({deferredRender:false,url:__ctxPath+"/communicate/optMail.do",method:"post",params:{mailId:d,opt:"转发"},waitMsg:"正在载入数据...",success:function(k,l){},failure:function(k,l){}});}}}}if(j!=null&&j!="undefined"){var f=Ext.getCmp("mailBoxId");f.setValue(j);}var c=new Ext.Panel({title:"发送邮件",iconCls:"menu-mail_send",autoScroll:true,tbar:h,id:"MailForm",layout:"hbox",margins:"0 0 6 0",layoutConfig:{padding:"5",pack:"center",align:"middle"},defaults:{margins:"0 5 0 0"},items:[b]});return c;};MailForm.prototype.initToolbar=function(){var a=new Ext.Toolbar({height:30,items:[{text:"立即发送",iconCls:"btn-mail_send",handler:function(){var c=Ext.getCmp("mailFormPanel");var b=Ext.getCmp("mail.mailStatus");if(c.getForm().isValid()){b.setValue(1);c.getForm().submit({waitMsg:"正在发送邮件,请稍候...",success:function(d,e){Ext.Msg.confirm("操作信息","邮件发送成功！继续发邮件?",function(g){if(g=="yes"){d.getForm().reset();}else{var f=Ext.getCmp("centerTabPanel");f.remove("MailForm");}});},failure:function(d,e){Ext.ux.Toast.msg("错误信息",e.result.msg);}});}}},{text:"存草稿",iconCls:"btn-mail_save",handler:function(){var c=Ext.getCmp("mail.mailStatus");c.setValue(0);var b=Ext.getCmp("mailFormPanel");if(b.getForm().isValid()){b.getForm().submit({waitMsg:"正在保存草稿,请稍候...",success:function(d,e){Ext.Msg.confirm("操作信息","草稿保存成功！继续发邮件?",function(g){if(g=="yes"){d.getForm().reset();}else{var f=Ext.getCmp("centerTabPanel");f.remove("MailForm");}});},failure:function(d,e){Ext.ux.Toast.msg("错误信息",e.result.msg);}});}}},{text:"重置",iconCls:"reset",handler:function(){var b=Ext.getCmp("MailFormPanel");b.getForm().reset();}},{text:"取消",iconCls:"btn-mail_remove",handler:function(){var b=Ext.getCmp("centerTabPanel");b.remove("MailForm");}}]});return a;};function copyFieldItems(){var a=[{xtype:"label",text:"抄送人:",style:"padding-left:0px;padding-top:3px;",width:105},{width:350,fieldLabel:"抄送人姓名列表",name:"mail.copyToNames",id:"mail.copyToNames",emptyText:"请选择抄送人",readOnly:true},{xtype:"button",text:"选择抄送人",iconCls:"btn-mail_recipient",handler:function(){UserSelector.getView(function(e,c){var d=Ext.getCmp("mail.copyToIDs");var b=Ext.getCmp("mail.copyToNames");d.setValue(e);b.setValue(c);}).show();}},{xtype:"button",text:"取消抄送",iconCls:"btn-delete_copy",handler:function(){var b=Ext.getCmp("copyField");var c=Ext.getCmp("mailFormPanel");c.getForm().findField("mail.copyToIDs").setValue("");c.getForm().findField("mail.copyToNames").setValue("");b.hide();}}];return a;}function uploadMailAttach(d){var a=Ext.getCmp("mail.fileIds");var c=Ext.getCmp("mail.filenames");var e=Ext.getCmp("filenames.display");var f=Ext.getCmp("placeholder");if(f!=null){f.hide();}for(var b=0;b<d.length;b++){if(a.getValue()!=""){a.setValue(a.getValue()+",");c.setValue(c.getValue()+",");}a.setValue(a.getValue()+d[b].fileId);c.setValue(c.getValue()+d[b].filename);e.add(new Ext.form.FieldSet({id:"mailAttachDisplay"+d[b].fileId,columnWidth:1,html:'<img src="'+__ctxPath+'/images/flag/attachment.png"/>&nbsp;&nbsp;'+d[b].filename+'&nbsp;&nbsp;<a href="javascript:deleteAttach('+d[b].fileId+')">删除</a>'}));}e.doLayout(true);}function deleteAttach(f){var b=Ext.getCmp("mail.fileIds").value.split(",");var j=Ext.getCmp("mail.filenames").value.split(",");var h="";var d="";for(var c=0;c<b.length;c++){if(b[c]!=f){h+=b[c]+",";d+=j[c]+",";}}if(h!=""){h=h.substring(0,h.length-1);d=d.substring(0,d.length-1);}Ext.getCmp("mail.fileIds").setValue(h);Ext.getCmp("mail.filenames").setValue(d);var e=Ext.getCmp("filenames.display");var a=Ext.getCmp("mailAttachDisplay"+f);e.remove(a);if(Ext.getCmp("mail.fileIds").value==""){Ext.getCmp("placeholder").show();}e.doLayout(true);var g=Ext.getCmp("mail.mailId").value;if(g!=""&&g!="undefined"){Ext.Ajax.request({url:__ctxPath+"/communicate/attachMail.do",method:"post",params:{mailId:g,fileId:f,fileIds:h,filenames:d},success:function(){}});}else{Ext.Ajax.request({url:__ctxPath+"/system/multiDelFileAttach.do",params:{ids:f},method:"post",success:function(){Ext.ux.Toast.msg("信息提示","成功删除所选记录！");}});}}