var ReportParamView=function(c,b){this.title=b;var a=new Ext.Panel({autoScroll:true,items:[this.setup(c)]});var d=new Ext.Window({id:"ReportParamView",title:this.title+"--查询参数设置",width:650,autoHeight:true,x:200,y:50,modal:true,layout:"anchor",plain:true,bodyStyle:"padding:5px;",buttonAlign:"center",items:[a]});d.show();};ReportParamView.prototype.setup=function(a){return this.grid(a);};ReportParamView.prototype.grid=function(d){var e=new Ext.grid.CheckboxSelectionModel();var a=new Ext.grid.ColumnModel({columns:[e,new Ext.grid.RowNumberer(),{header:"paramId",dataIndex:"paramId",hidden:true},{header:"参数名称",dataIndex:"paramName"},{header:"参数Key",dataIndex:"paramKey"},{header:"缺省值",dataIndex:"defaultVal"},{header:"类型",dataIndex:"paramType",renderer:function(f){if(f=="datetime"){return"日期时间型";}else{if(f=="int"){return"整型";}else{if(f=="decimal"){return"精度型";}else{if(f=="date"){return"日期型";}else{return"字符型";}}}}}},{header:"系列号",dataIndex:"sn"},{header:"管理",dataIndex:"paramId",width:50,sortable:false,renderer:function(i,h,f,l,g){var k=f.data.paramId;var j='<button title="删除" value=" " class="btn-del" onclick="ReportParamView.remove('+d+",'"+k+"')\">&nbsp;&nbsp;</button>";j+='&nbsp;<button title="编辑" value=" " class="btn-edit" onclick="ReportParamView.edit('+d+",'"+k+"')\">&nbsp;&nbsp;</button>";return j;}}],defaults:{sortable:true,menuDisabled:false,width:100}});var b=this.store();b.load({params:{reportId:d}});var c=new Ext.grid.GridPanel({id:"ReportParamGrid",tbar:this.topbar(d),store:b,trackMouseOver:true,disableSelection:false,loadMask:true,autoHeight:true,cm:a,sm:e,viewConfig:{forceFit:true,enableRowBody:false,showPreview:false}});c.addListener("rowdblclick",function(g,f,h){g.getSelectionModel().each(function(i){ReportParamView.edit(d,i.data.paramId);});});return c;};ReportParamView.prototype.store=function(){var a=new Ext.data.Store({proxy:new Ext.data.HttpProxy({url:__ctxPath+"/system/listReportParam.do"}),reader:new Ext.data.JsonReader({root:"result",id:"id",fields:[{name:"paramId",type:"int"},"reportId","paramName","paramKey","defaultVal","paramType","sn"]}),remoteSort:true});a.setDefaultSort("paramId","desc");return a;};ReportParamView.prototype.topbar=function(a){var b=new Ext.Toolbar({id:"ReportParamFootBar",height:30,bodyStyle:"text-align:left",items:[{iconCls:"btn-add",text:"添加参数",xtype:"button",handler:function(){new ReportParamForm(a);}},{iconCls:"btn-del",text:"删除参数",xtype:"button",handler:function(){var e=Ext.getCmp("ReportParamGrid");var c=e.getSelectionModel().getSelections();if(c.length==0){Ext.ux.Toast.msg("信息","请选择要删除的记录！");return;}var f=Array();for(var d=0;d<c.length;d++){f.push(c[d].data.paramId);}ReportParamView.remove(f);}}]});return b;};ReportParamView.remove=function(c,a){var b=Ext.getCmp("ReportParamGrid");Ext.Msg.confirm("信息确认","您确认要删除该记录吗？",function(d){if(d=="yes"){Ext.Ajax.request({url:__ctxPath+"/system/multiDelReportParam.do",params:{ids:a},method:"post",success:function(){Ext.ux.Toast.msg("信息提示","成功删除所选记录！");b.getStore().reload({params:{reportId:c}});}});}});};ReportParamView.edit=function(b,a){new ReportParamForm(b,a);};