var DocFolderSharedForm=function(d,b){this.folderId=b;this.privilegeId=d;var c=function(){alert("ffdf");};var a=new Ext.FormPanel({id:"DocFolderSharedForm",bodyStyle:"padding:4px 10px 4px 10px",items:[{xtype:"hidden",name:"privilegeId",value:this.privilegeId},{xtype:"hidden",name:"folderId",value:this.folderId},{xtype:"fieldset",border:false,layout:"column",items:[{xtype:"label",text:"共享人员",width:100},{xtype:"hidden",name:"userIds",id:"userIds"},{xtype:"textarea",name:"userNames",id:"userNames",width:300},{xtype:"button",text:"选择",iconCls:"btn-select",width:80,handler:function(){UserSelector.getView(function(g,i){var f=Ext.getCmp("userIds");var j=Ext.getCmp("userNames");if(f.getValue()==""){f.setValue(g);j.setValue(i);return;}var k=f.getValue().split(",");var h=j.getValue().split(",");f.setValue(uniqueArray(k.concat(g.split(","))));j.setValue(uniqueArray(h.concat(i.split(","))));}).show();}},{xtype:"button",iconCls:"btn-clear",text:"清空",handler:function(){var f=Ext.getCmp("userIds");var g=Ext.getCmp("userNames");f.setValue("");g.setValue("");},width:80}]},{xtype:"fieldset",border:false,layout:"column",items:[{xtype:"label",text:"共享部门",width:100},{name:"depIds",id:"depIds",xtype:"hidden"},{name:"depNames",id:"depNames",xtype:"textarea",width:300},{xtype:"button",text:"选择",iconCls:"btn-select",width:80,handler:function(){DepSelector.getView(function(h,j){var g=Ext.getCmp("depIds");var i=Ext.getCmp("depNames");if(g.getValue()==""){g.setValue(h);i.setValue(j);return;}var k=g.getValue().split(",");var f=i.getValue().split(",");g.setValue(uniqueArray(k.concat(h.split(","))));i.setValue(uniqueArray(f.concat(j.split(","))));}).show();}},{xtype:"button",text:"清空",iconCls:"btn-clear",handler:function(){var f=Ext.getCmp("depIds");var g=Ext.getCmp("depNames");f.setValue("");g.setValue("");},width:80}]},{xtype:"fieldset",border:false,layout:"column",items:[{xtype:"label",text:"共享角色",width:100},{xtype:"hidden",id:"roleIds",name:"roleIds"},{name:"roleNames",id:"roleNames",xtype:"textarea",width:300},{xtype:"button",text:"选择",iconCls:"btn-select",width:80,handler:function(){RoleSelector.getView(function(i,j){var f=Ext.getCmp("roleIds");var g=Ext.getCmp("roleNames");if(f.getValue()==""){f.setValue(i);g.setValue(j);return;}var k=f.getValue().split(",");var h=g.getValue().split(",");f.setValue(uniqueArray(k.concat(i.split(","))));g.setValue(uniqueArray(h.concat(j.split(","))));}).show();}},{xtype:"button",text:"清空",iconCls:"btn-clear",handler:function(){var f=Ext.getCmp("roleIds");var g=Ext.getCmp("roleNames");f.setValue("");g.setValue("");},width:80}]},{xtype:"fieldset",border:false,layout:"column",items:[{xtype:"label",text:"权限选择：",width:100},{xtype:"checkbox",name:"rightR",id:"rightR"},{xtype:"label",text:"可读",width:60},{xtype:"checkbox",name:"rightU",id:"rightU",listeners:{"check":function(){var g=Ext.getCmp("rightU");var f=Ext.getCmp("rightD");var h=Ext.getCmp("rightR");if(g.getValue()){h.setValue(true);h.disable();}else{if(!f.getValue()){h.enable();}}}}},{xtype:"label",text:"可修改",width:60},{xtype:"checkbox",name:"rightD",id:"rightD",listeners:{"check":function(){var f=Ext.getCmp("rightD");var g=Ext.getCmp("rightU");var h=Ext.getCmp("rightR");if(f.getValue()){h.setValue(true);h.disable();}else{if(!g.getValue()){h.enable();}}}}},{xtype:"label",text:"可删除",width:60}]}]});var e=new Ext.Window({title:"文件夹授权",iconCls:"menu-public-fol",width:620,height:420,modal:true,layout:"anchor",plain:true,bodyStyle:"padding:5px;",scope:this,buttonAlign:"center",items:a,buttons:[{xtype:"button",text:"共享",iconCls:"btn-ok",handler:function(){var j=Ext.getCmp("userIds").getValue();var h=Ext.getCmp("depIds").getValue();var i=Ext.getCmp("roleIds").getValue();var g=Ext.getCmp("rightR").getValue();if(j!=""||h!=""||i!=""){if(g==true){var f=Ext.getCmp("rightR");f.enable();a.getForm().submit({url:__ctxPath+"/document/addDocPrivilege.do",method:"post",waitMsg:"正在提交...",success:function(k,l){Ext.ux.Toast.msg("提示","保存成功！");Ext.getCmp("DocPrivilegeGrid").getStore().reload();e.close();},failure:function(k,l){Ext.ux.Toast.msg("出错","请与管理员联系！");}});}else{Ext.ux.Toast.msg("提示","读权限为基本权限！");}}else{Ext.ux.Toast.msg("提示","请选择！");}}},{xtype:"button",iconCls:"btn-cancel",text:"关闭",handler:function(){e.close();}}]});e.show();};