var RoleSelector={getView:function(d,c){var a=this.initGridPanel(c);var b=new Ext.Window({title:"角色选择",width:630,height:380,layout:"fit",border:false,items:[a],modal:true,buttonAlign:"center",buttons:[{iconCls:"btn-ok",text:"确定",handler:function(){var g=Ext.getCmp("RoleSelectorGrid");var h=g.getSelectionModel().getSelections();var j="";var e="";for(var f=0;f<h.length;f++){if(f>0){j+=",";e+=",";}j+=h[f].data.roleId;e+=h[f].data.roleName;}if(d!=null){d.call(this,j,e);}b.close();}},{text:"取消",iconCls:"btn-cancel",handler:function(){b.close();}}]});return b;},initGridPanel:function(e){var f=null;if(e){var f=new Ext.grid.CheckboxSelectionModel({singleSelect:true});}else{f=new Ext.grid.CheckboxSelectionModel();}var a=new Ext.grid.ColumnModel({columns:[f,new Ext.grid.RowNumberer(),{header:"roleId",dataIndex:"roleId",hidden:true},{header:"角色名称",dataIndex:"roleName",width:60},{header:"角色描述",dataIndex:"roleDesc",width:60}]});var b=new Ext.data.Store({proxy:new Ext.data.HttpProxy({url:__ctxPath+"/system/listAppRole.do"}),reader:new Ext.data.JsonReader({root:"result",totalProperty:"totalCounts",id:"id",fields:[{name:"roleId",type:"int"},"roleName","roleDesc"]})});b.load({params:{start:0,limit:25}});var d=new Ext.Toolbar({id:"AppRoleFootBar",height:30,items:["角色名称：",{name:"Q_roleName_S_LK",xtype:"textfield",id:"Q_roleName_S_LK",width:200}," ",{xtype:"button",iconCls:"btn-search",text:"查询",handler:function(){var g=Ext.getCmp("Q_roleName_S_LK").getValue();Ext.Ajax.request({url:__ctxPath+"/system/listAppRole.do",params:{Q_roleName_S_LK:g},method:"post",success:function(h,j){var k=Ext.util.JSON.decode(h.responseText);var i=Ext.getCmp("RoleSelectorGrid");i.getStore().loadData(k);},failure:function(h,i){}});}}]});var c=new Ext.grid.GridPanel({id:"RoleSelectorGrid",tbar:d,store:b,trackMouseOver:true,disableSelection:false,loadMask:true,height:360,cm:a,sm:f,viewConfig:{forceFit:true,enableRowBody:false,showPreview:false},bbar:new Ext.PagingToolbar({pageSize:25,store:b,displayInfo:true,displayMsg:"当前显示从{0}至{1}， 共{2}条记录",emptyMsg:"当前没有记录"})});return c;}};