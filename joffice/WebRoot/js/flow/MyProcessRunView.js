Ext.ns("MyProcessRunView");var MyProcessRunView=function(){return new Ext.Panel({id:"MyMyProcessRunView",title:"我的申请流程列表",iconCls:"menu-flowPr",autoScroll:true,items:[new Ext.FormPanel({id:"MyProcessRunSearchForm",height:40,frame:false,border:false,layout:"hbox",layoutConfig:{padding:"5",align:"middle"},defaults:{xtype:"label",margins:{top:0,right:4,bottom:4,left:4}},items:[{text:"请输入查询条件:"},{text:"标题"},{xtype:"textfield",name:"Q_subject_S_LK"},{text:"时间 从"},{xtype:"datefield",name:"Q_vo.createtime_D_GT",format:"Y-m-d"},{text:" 至 "},{xtype:"datefield",name:"Q_vo.createtime_D_LT",format:"Y-m-d"},{text:"状态"},{xtype:"combo",width:80,hiddenName:"Q_runStatus_SN_EQ",editable:false,mode:"local",triggerAction:"all",store:[["1","正在运行"],["2","结束"]]},{xtype:"button",text:"查询",iconCls:"search",handler:function(){var a=Ext.getCmp("MyProcessRunSearchForm");var b=Ext.getCmp("MyProcessRunGrid");if(a.getForm().isValid()){a.getForm().submit({waitMsg:"正在提交查询",url:__ctxPath+"/flow/myProcessRun.do",success:function(d,e){var c=Ext.util.JSON.decode(e.response.responseText);b.getStore().loadData(c);}});}}}]}),this.setup()]});};MyProcessRunView.prototype.setup=function(){return this.grid();};MyProcessRunView.prototype.grid=function(){var d=new Ext.grid.CheckboxSelectionModel();var a=new Ext.grid.ColumnModel({columns:[d,new Ext.grid.RowNumberer(),{header:"runId",dataIndex:"runId",hidden:true},{header:"标题",dataIndex:"subject"},{header:"时间",sortable:false,dataIndex:"createtime",width:60},{header:"流程状态",dataIndex:"runStatus",renderer:function(e){if(e==0){return'<font color="red">草稿</font>';}else{if(e==1){return'<font color="green">正在运行</font>';}else{if(e==2){return'<font color="gray">结束</font>';}}}}},{header:"管理",sortable:false,dataIndex:"runId",width:50,renderer:function(m,k,f,j,o){var l=f.data.runId;var e=f.data.defId;var n=f.data.piId;var i=f.data.subject;var g=f.data.runStatus;var h="";if(n!=null&&n!=undefined&&n!=""){h+='&nbsp;<button type="button" title="审批明细" value=" " class="btn-flowView" onclick="MyProcessRunView.detail('+l+","+e+",'"+n+"','"+i+"')\"></button>";}if(g==0){h+='&nbsp;<button title="编辑" class="btn-edit" onclick="MyProcessRunView.edit('+l+",'"+i+"')\"></button>";h+='&nbsp;<button title="删除" value=" " class="btn-del" onclick="MyProcessRunView.remove('+l+')"></button>';}return h;}}],defaults:{sortable:true,menuDisabled:false,width:100}});var b=this.store();b.load({params:{start:0,limit:25}});var c=new Ext.grid.GridPanel({id:"MyProcessRunGrid",store:b,trackMouseOver:true,disableSelection:false,loadMask:true,autoHeight:true,tbar:new Ext.Toolbar(),cm:a,sm:d,viewConfig:{forceFit:true,enableRowBody:false,showPreview:false},bbar:new Ext.PagingToolbar({pageSize:25,store:b,displayInfo:true,displayMsg:"当前显示从{0}至{1}， 共{2}条记录",emptyMsg:"当前没有记录"})});c.addListener("rowdblclick",function(g,f,h){g.getSelectionModel().each(function(e){MyProcessRunView.detail(e.data.runId,e.data.defId,e.data.piId,e.data.subject);});});return c;};MyProcessRunView.prototype.store=function(){var a=new Ext.data.Store({proxy:new Ext.data.HttpProxy({url:__ctxPath+"/flow/myProcessRun.do"}),reader:new Ext.data.JsonReader({root:"result",totalProperty:"totalCounts",id:"id",fields:[{name:"runId",type:"int"},"subject","createtime","defId","piId","runStatus"]}),remoteSort:true});return a;};MyProcessRunView.remove=function(b){var a=Ext.getCmp("ProcessRunGrid");Ext.Msg.confirm("信息确认","您确认要删除该记录吗？",function(c){if(c=="yes"){Ext.Ajax.request({url:__ctxPath+"/flow/multiDelProcessRun.do",params:{ids:b},method:"post",success:function(){Ext.ux.Toast.msg("信息提示","成功删除所选记录！");a.getStore().reload({params:{start:0,limit:25}});}});}});};MyProcessRunView.edit=function(c,b){var d=App.getContentPanel();var a=d.getItem("ProcessRunStart"+c);if(a==null){a=new ProcessRunStart(null,b,c);d.add(a);}d.activate(a);};MyProcessRunView.detail=function(d,a,c,b){var f=App.getContentPanel();var e=f.getItem("ProcessRunDetail"+d);if(e==null){e=new ProcessRunDetail(d,a,c,b);f.add(e);}f.activate(e);};